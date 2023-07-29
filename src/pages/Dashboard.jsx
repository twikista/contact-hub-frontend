import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import contactService from '../services/contactService'
import NewContactsForm from '../components/NewContactsForm'

const Dashboard = ({ logout, contacts, setContacts }) => {
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
      </div>
      <NewContactsForm addContact={addContact} />
      {contacts.map((contact) => (
        <div key={contact.id}>{contact.firstName}</div>
      ))}
    </>
  )
}

export default Dashboard

Dashboard.propTypes = {
  logout: PropTypes.func,
  setContacts: PropTypes.func,
  contacts: PropTypes.array,
}
