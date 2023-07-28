import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProtectedRoute = ({ user, children, redirectPath }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />
  }
  return children
}

export default ProtectedRoute

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object,
  redirectPath: PropTypes.string,
}
