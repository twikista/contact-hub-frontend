import globeMobile from '../assets/globe-mobile.svg'
import globeDesktop from '../assets/globe-desktop.svg'
const GlobeIcon = () => {
  return (
    <div>
      <img
        className='max-w-full h-auto md:hidden '
        src={globeMobile}
        alt='logo'
      />
      <img
        className='max-w-full h-auto hidden md:block'
        src={globeDesktop}
        alt='logo'
      />
    </div>
  )
}

export default GlobeIcon
