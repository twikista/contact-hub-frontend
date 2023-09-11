import PropTypes from 'prop-types'
import GlobeIcon from '../assets/GlobeIcon'

const HomeListItem = ({ item, point }) => {
  return (
    <li className='flex gap-3 md:gap-[18px]'>
      <GlobeIcon />
      <div className='flex-1'>
        <h6 className='font-montserrat font-bold leading-normal text-regular capitalize'>
          {item}
        </h6>
        <p className='font-normal text-regular leading-normal md:max-w-[462px]'>
          {point}
        </p>
      </div>
    </li>
  )
}

export default HomeListItem

HomeListItem.propTypes = {
  item: PropTypes.string,
  point: PropTypes.string,
}
