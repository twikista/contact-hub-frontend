import { useState } from 'react'
import PropTypes from 'prop-types'
import Avatar from './Avatar'

const NewUserForm = ({ handleRegistration }) => {
  // console.log(handleRegistration)
  const initialUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    avatar: '',
  }
  const [userDetails, setUserDetails] = useState(initialUser)
  // const [profileImage, setProfileImage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserDetails({ ...userDetails, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleRegistration(userDetails)
    setUserDetails(initialUser)
  }

  const handleFileChange = (e) => {
    console.log(e.target.files[0])
    if (e.target.files[0].size > 785200) {
      window.alert('image file too large')
      return
    }
    tranformImage(e.target.files[0])
  }

  const tranformImage = (image) => {
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onloadend = () => {
      // setProfileImage(reader.result)
      setUserDetails({ ...userDetails, avatar: reader.result })
    }
  }

  return (
    <div>
      <Avatar
        imageURL={userDetails.avatar}
        altText={`${userDetails.firstName} image`}
      />
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
        <div>
          <input
            type='file'
            accept='.png, .jpeg, .jpg'
            onChange={handleFileChange}
            name='profile-photo'
          />
        </div>

        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default NewUserForm

NewUserForm.propTypes = {
  handleRegistration: PropTypes.func,
}
