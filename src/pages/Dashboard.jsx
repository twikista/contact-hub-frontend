import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({ logout }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    logout()
    navigate('/login', { replace: true })
  }
  return (
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
  )
}

export default Dashboard

Dashboard.propTypes = {
  logout: PropTypes.func,
}
