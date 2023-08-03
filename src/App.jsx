import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import userService from './services/userService'
import contactService from './services/contactService'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  const STORAGE_KEY = 'activeuser'
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

  return (
    <div>
      <Routes>
        <Route
          path='/register'
          element={<RegisterPage addUser={handleSubmit} />}
        />
        <Route
          path='/login'
          element={<LoginPage loginUser={loginUser} user={user} />}
        />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute user={user} redirectPath='/login'>
              <Dashboard
                logout={handleLogout}
                contacts={contacts}
                setContacts={setContacts}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
