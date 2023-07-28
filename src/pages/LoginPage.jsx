import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const LoginPage = ({ loginUser }) => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const userCredentials = { email, password }
    console.log(userCredentials)
    setEmail('')
    setPassword('')
    loginUser(userCredentials)
    navigate('/dashboard')
  }
  return (
    <div>
      <h2>user login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage

LoginPage.propTypes = {
  loginUser: PropTypes.func,
}
