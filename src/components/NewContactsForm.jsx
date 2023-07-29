import { useState } from 'react'
import PropTypes from 'prop-types'

const NewContactsForm = ({ addContact }) => {
  const initialState = {
    firstName: '',
    lastName: '',
    image: '',
    category: '',
    phone: '',
    email: '',
    city: '',
  }
  const [contact, setContact] = useState(initialState)
  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setContact({ ...contact, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const contactObject = {
      firstName: contact.firstName,
      lastName: contact.lastName,
      image: contact.image,
      category: contact.category,
      contactInfo: {
        phone: contact.phone,
        email: contact.email,
        city: contact.city,
      },
    }
    console.log(contactObject)

    addContact(contactObject)
    setContact({ ...initialState })
  }

  // console.log(contact)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            placeholder='First name'
            name='firstName'
            value={contact.firstName}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='last name'
            name='lastName'
            value={contact.lastName}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Phone number'
            name='phone'
            value={contact.phone}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={contact.email}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='city'
            name='city'
            value={contact.city}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='category'
            name='category'
            value={contact.category}
            onChange={onChangeHandler}
          />
        </div>
        <button type='submit'>Add Contact</button>
      </form>
    </div>
  )
}

export default NewContactsForm

NewContactsForm.propTypes = {
  addContact: PropTypes.func,
}
