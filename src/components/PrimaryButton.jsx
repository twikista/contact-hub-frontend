import PropTypes from 'prop-types'

const PrimaryButton = () => {
  return (
    <button className='py-2 px-4 mx-auto w-20 bg rounded-[5px] bg-secondary text-primary-white text-xs font-montserrat font-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'>
      Sign up
    </button>
  )
}

export default PrimaryButton
PrimaryButton.propTypes = {
  children: PropTypes.object,
}
