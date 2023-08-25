import PropTypes from 'prop-types'
import Avatar from './Avatar'

const NavBar = ({ user, handleClick }) => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h2 className='text-3xl text-wh font-bold underline bg-light-bp'>LOGO</h2>
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
    </header>
  )
}

export default NavBar
NavBar.propTypes = {
  user: PropTypes.object,
  handleClick: PropTypes.func,
}
