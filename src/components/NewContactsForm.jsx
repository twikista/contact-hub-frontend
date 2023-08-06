import { useState } from 'react'
import PropTypes from 'prop-types'
import { transformFile } from '../utils/fileTransform'

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
  const [contactPhoto, setContactPhoto] = useState('')

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setContact({ ...contact, [name]: value })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    transformFile(file, setContactPhoto)
    // setContactPhoto('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const contactObject = {
      firstName: contact.firstName,
      lastName: contact.lastName,
      image: contactPhoto,
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
          <label
            htmlFor='contact-photo'
            style={{
              borderWidth: '8px',
              borderColor: '#ccc',
              borderStyle: 'double',
              width: '120px',
              height: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              // placeItems:'center',
              borderRadius: '50%',
              color: '#aaa',
              overflow: 'hidden',
            }}
          >
            {contactPhoto ? (
              <img
                src={contactPhoto}
                style={{ width: 'inherit', height: 'inherit' }}
              />
            ) : (
              'click to add photo'
            )}
            <input
              type='file'
              accept='.png, .jpeg, jpg'
              name='contact-photo'
              id='contact-photo'
              style={{ visibility: 'hidden', display: 'none' }}
              onChange={handleFileChange}
            />
          </label>
        </div>
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
