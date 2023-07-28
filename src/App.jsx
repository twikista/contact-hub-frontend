import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import userService from './services/userService'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  const STORAGE_KEY = 'activeuser'
  const initialUser = () =>
    localStorage.getItem(STORAGE_KEY)
      ? JSON.parse(localStorage.getItem(STORAGE_KEY))
      : null
  const [user, setUser] = useState(initialUser)

  console.log(user)

  const handleSubmit = async (userDetails) => {
    const newUser = await userService.createUser(userDetails)
    setUser(newUser)
  }

  const handleLogin = async (userCredentials) => {
    const user = await userService.loginUser(userCredentials)
    setUser(user)
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
          element={<LoginPage loginUser={handleLogin} user={user} />}
        />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute user={user} redirectPath='/login'>
              <Dashboard logout={handleLogout} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
