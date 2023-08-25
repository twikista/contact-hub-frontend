import { useState } from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ handleLogin }) => {
  const initialState = { email: '', password: '' }
  const [loginDetails, setLoginDetails] = useState(initialState)

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setLoginDetails({ ...loginDetails, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(loginDetails)
    setLoginDetails(initialState)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            placeholder='email'
            value={loginDetails.email}
            name='email'
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='password'
            value={loginDetails.password}
            name='password'
            onChange={onChangeHandler}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm

LoginForm.propTypes = {
  handleLogin: PropTypes.func,
}
