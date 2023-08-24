import PropTypes from 'prop-types'
import man from '../assets/user.png'
import Avatar from './Avatar'

const ContactItem = ({ contact, removeContact }) => {
  const { contactInfo, image } = contact
  return (
    <li>
      <article>
        {image.url ? (
          <Avatar
            imageURL={image.url}
            altText={`${contact.firstName} profile image`}
            size='md'
          />
        ) : (
          <Avatar
            imageURL={man}
            altText={`${contact.firstName} profile photo`}
            size='md'
          />
        )}

        <div>
          <span>{contact.firstName}</span>
          {contact.lastName ? <span>{` ${contact.lastName}`}</span> : null}
          <span style={{ display: 'block' }}>{contactInfo.phone}</span>
          {contactInfo.email && (
            <span style={{ display: 'block' }}>{contactInfo.email}</span>
          )}
          <button type='button' onClick={() => removeContact(contact.id)}>
            remove
          </button>
        </div>
      </article>
    </li>
  )
}

export default ContactItem

ContactItem.propTypes = {
  contact: PropTypes.object,
  removeContact: PropTypes.func,
}
