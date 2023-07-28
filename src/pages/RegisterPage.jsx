import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const RegisterPage = ({ addUser }) => {
  const navigate = useNavigate()
  const initialUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }
  const [userDetails, setUserDetails] = useState(initialUser)
  const handleChange = (e) => {
    const { name, value } = e.target
    setUserDetails({ ...userDetails, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addUser(userDetails)
    setUserDetails(initialUser)
    navigate('/login')
  }

  return (
    <div>
      <>
        <h2>register form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              placeholder='first name'
              value={userDetails.firstName}
              name='firstName'
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='last name'
              name='lastName'
              value={userDetails.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='email'
              placeholder='email'
              name='email'
              value={userDetails.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='password'
              placeholder='password'
              name='password'
              value={userDetails.password}
              onChange={handleChange}
            />
          </div>

          <button type='submit'>submit</button>
        </form>
      </>
    </div>
  )
}

export default RegisterPage

RegisterPage.propTypes = {
  addUser: PropTypes.func,
}
