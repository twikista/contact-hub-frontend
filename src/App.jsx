import { useState, useLayoutEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import userService from './services/userService'
import contactService from './services/contactService'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import NewContactsForm from './components/NewContactsForm'

const App = () => {
  const STORAGE_KEY = 'activeuser'
  const osPreferredTheme = matchMedia('(prefers-color-scheme:dark)').matches
  const localTheme = localStorage.getItem('theme')
  const activeTheme = () => {
    if (
      localTheme === 'dark' ||
      (!('theme' in localStorage) && osPreferredTheme)
    ) {
      return 'dark'
    } else {
      return null
    }
  }
  const [theme, setTheme] = useState(activeTheme())
  console.log(theme)
  const toggleTheme = () => {
    theme === 'dark' ? setTheme(null) : setTheme('dark')
  }

  const initialUser = () => {
    const serializedUser = localStorage.getItem(STORAGE_KEY)
    console.log(serializedUser)
    if (!serializedUser) return null
    const parsedUser = JSON.parse(localStorage.getItem(STORAGE_KEY))
    contactService.setToken(parsedUser.token)
    return parsedUser
  }

  const [user, setUser] = useState(initialUser())
  const [contacts, setContacts] = useState([])

  console.log(user)

  const handleSubmit = async (userDetails) => {
    await userService.createUser(userDetails)
    // setUser(newUser)
  }

  const addContact = async (contact) => {
    const newContact = await contactService.createContact(contact)
    setContacts([...contacts, newContact])
  }

  const loginUser = async (userCredentials) => {
    const user = await userService.loginUser(userCredentials)
    setUser(user)
    contactService.setToken(user.token)
    window.localStorage.setItem('activeuser', JSON.stringify(user))
    console.log(user)
  }

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  useLayoutEffect(() => {
    localStorage.setItem('theme', theme), [theme]
  })

  return (
    <div className={theme}>
      <Routes>
        <Route
          path='/'
          element={<Home theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path='/register'
          element={<RegisterPage addUser={handleSubmit} user={user} />}
        />
        <Route
          path='/login'
          element={<LoginPage loginUser={loginUser} user={user} />}
        />
        <Route element={<ProtectedRoute user={user} />}>
          <Route
            path='dashboard'
            element={
              <Dashboard
                logout={handleLogout}
                contacts={contacts}
                setContacts={setContacts}
                user={user}
              />
            }
          >
            <Route
              path='new_contact'
              element={<NewContactsForm addContact={addContact} />}
            />
          </Route>
        </Route>
        <Route
          path='in'
          element={<NewContactsForm addContact={addContact} />}
        />
      </Routes>
    </div>
  )
}

export default App
