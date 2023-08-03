import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import NewUserForm from '../components/NewUserForm'
import { Navigate } from 'react-router-dom'

const RegisterPage = ({ addUser, user }) => {
  const navigate = useNavigate()

  const handleRegisteration = (userDetails) => {
    addUser(userDetails)
    navigate('/login')
  }

  if (user) return <Navigate to='/dashboard' replace={true} />

  return (
    <div>
      <h2>Sign up</h2>
      <NewUserForm handleRegisteration={handleRegisteration} />
    </div>
  )
}

export default RegisterPage

RegisterPage.propTypes = {
  addUser: PropTypes.func,
  user: PropTypes.object,
}
