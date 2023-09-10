import { Link } from 'react-router-dom'
import logoMobile from '../assets/logo-mobile.svg'
import logoDesktop from '../assets/logo_desk.svg'

const Logo = () => {
  return (
    <>
      <Link to='/' className='no-underline w-9 h-9 md:hidden'>
        <img className='max-w-full h-auto ' src={logoMobile} alt='logo' />
      </Link>
      <Link to='/' className='no-underline hidden md:block'>
        <img className='max-w-full h-auto ' src={logoDesktop} alt='logo' />
      </Link>
    </>
  )
}

export default Logo
