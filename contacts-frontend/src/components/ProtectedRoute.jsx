import { Navigate, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProtectedRoute = ({ user, children, redirectPath = '/login' }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />
  }
  return children ? children : <Outlet />
}

export default ProtectedRoute

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object,
  redirectPath: PropTypes.string,
}
