import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigate, Outlet } from 'react-router-dom'
import contactService from '../services/contactService'
import NewContactsForm from '../components/NewContactsForm'
import ContactItem from '../components/ContactItem'
import NavBar from '../components/NavBar'
// import Avatar from '../components/Avatar'
import DashboardLayout from '../components/DashboardLayout'

const Dashboard = ({ logout, contacts, setContacts, user, children }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    logout()
    navigate('/login', { replace: true })
  }

  const addContact = async (contact) => {
    const newContact = await contactService.createContact(contact)
    setContacts([...contacts, newContact])
  }

  const deleteContact = async (id) => {
    await contactService.deleteContact(id)
    const filteredContacts = contacts.filter((contact) => contact.id !== id)
    setContacts(filteredContacts)
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
      {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
      </div> */}
      {/* <NavBar user={user} handleClick={handleClick} /> */}
      <DashboardLayout user={user}>
        <div className='text-try w-full grid grid-cols-1 grid-rows-[80px_1fr] gap-2 '>
          <nav className='bg-ni rounded-xl'>top</nav>
          <div className='grid grid-cols-[280px,1fr] grid-rows-1  gap-2 w-full'>
            <div className='rounded-xl bg-ni'>h</div>
            <right className='bg-ni rounded-xl'></right>
          </div>
        </div>
      </DashboardLayout>
      {/* <NewContactsForm addContact={addContact} />
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          removeContact={deleteContact}
        />
      ))} */}
    </>
  )
}

export default Dashboard

Dashboard.propTypes = {
  logout: PropTypes.func,
  setContacts: PropTypes.func,
  contacts: PropTypes.array,
  user: PropTypes.object,
  children: PropTypes.object,
}
