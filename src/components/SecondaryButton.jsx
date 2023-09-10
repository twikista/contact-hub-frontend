import PropTypes from 'prop-types'

const SecondaryButton = () => {
  return (
    <button className='flex items-center py-btn-py px-btn-px lg:min-w-[180px] mx-auto w-btn-w rounded-[5px] text-primary-white leading-normal text-sub-heading font-montserrat font-xs shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] box-border border-secondary  border-[3px] max-h-[62.7px] hover:border-accent'>
      Log in
    </button>
  )
}

export default SecondaryButton
SecondaryButton.propTypes = {
  children: PropTypes.object,
}
