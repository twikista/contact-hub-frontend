import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import contactService from '../services/contactService'
import NewContactsForm from '../components/NewContactsForm'
import ContactItem from '../components/ContactItem'
import Avatar from '../components/Avatar'

const Dashboard = ({ logout, contacts, setContacts, user }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    logout()
    navigate('/login', { replace: true })
  }

  const addContact = async (contact) => {
    const newContact = await contactService.createContact(contact)
    setContacts([...contacts, newContact])
  }

  useEffect(() => {
    const getContacts = async () => {
      const contacts = await contactService.getAll()
      setContacts(contacts)
    }
    getContacts()
  }, [setContacts])
  console.log(contacts)
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Dashboard</h2>
        <button
          onClick={handleClick}
          style={{
            border: 'solid',
            borderColor: 'black',
            borderWidth: '2px',
            borderRadius: '8px',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            width: '160px',
            fontWeight: '700',
            fontSize: '20px',
          }}
        >
          Logout
        </button>
        <Avatar
          imageURL={user.profileImage.url}
          altText='profile image'
          size='sm'
        />
      </div>
      <NewContactsForm addContact={addContact} />
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </>
  )
}

export default Dashboard

Dashboard.propTypes = {
  logout: PropTypes.func,
  setContacts: PropTypes.func,
  contacts: PropTypes.array,
  user: PropTypes.object,
}
