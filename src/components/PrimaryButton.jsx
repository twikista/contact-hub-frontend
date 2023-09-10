import PropTypes from 'prop-types'

const PrimaryButton = () => {
  return (
    <button className=' flex items-center py-btn-py px-btn-px lg:min-w-[180px] mx-auto w-btn-w rounded-[5px] bg-secondary text-primary-white leading-normal text-sub-heading font-montserrat font-xs shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] box-border max-h-[62.7px] hover:bg-accent hover:font-bold  transition-all ease-in-out duration-150'>
      Sign up
    </button>
  )
}

export default PrimaryButton
PrimaryButton.propTypes = {
  children: PropTypes.object,
}
