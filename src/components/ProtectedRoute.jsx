import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProtectedRoute = ({ user, children }) => {
  console.log(user === null)
  // if (loading) return <div>loading...</div>
  if (!user) {
    return <Navigate to='/login' replace />
  }
  return children
}

export default ProtectedRoute

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object,
}
