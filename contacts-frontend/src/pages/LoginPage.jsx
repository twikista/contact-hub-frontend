import { useNavigate, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import LoginForm from '../components/LoginForm'

const LoginPage = ({ loginUser, user }) => {
  console.log(user)
  const navigate = useNavigate()

  const handleLogin = (userCredentials) => {
    loginUser(userCredentials)
    navigate('/dashboard', { replace: true })
  }
  if (user) return <Navigate to='/dashboard' replace />
  return (
    <>
      <h2>Login</h2>
      <LoginForm handleLogin={handleLogin} />
    </>
  )
}

export default LoginPage

LoginPage.propTypes = {
  loginUser: PropTypes.func,
  user: PropTypes.object,
}
