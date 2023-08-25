import PropTypes from 'prop-types'

const DashboardLayout = ({ children }) => {
  return (
    <div className='text-ti flex min-h-screen w-full max-w-screen-xl gap-2 py-3 mx-auto h-full'>
      <nav className='w-80 bg-ni rounded-xl'>side bar</nav>
      {children}
    </div>
  )
}

export default DashboardLayout
DashboardLayout.propTypes = {
  children: PropTypes.object,
}
