import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import NewUserForm from '../components/NewUserForm'

const RegisterPage = ({ addUser }) => {
  const navigate = useNavigate()

  const handleRegisteration = (userDetails) => {
    addUser(userDetails)
    navigate('/login')
  }

  return <NewUserForm handleRegisteration={handleRegisteration} />
}

export default RegisterPage

RegisterPage.propTypes = {
  addUser: PropTypes.func,
}
