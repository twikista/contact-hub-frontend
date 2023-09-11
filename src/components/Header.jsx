import PropTypes from 'prop-types'
import Logo from './Logo'
import ThemeToggler from './ThemeToggler'
import PrimaryButton from './PrimaryButton'

const Header = ({ toggleTheme }) => {
  return (
    <header className='w-full min-h-[452px] md:min-h-[786px] bg-primary-blue flex flex-col'>
      <div className='border-b border-b-solid border-b-gray-600'>
        <nav className='w-full sm:w-full max-w-[1560px] px-5  mx-auto h-[70px] lg:h-20 sm:px-6 flex justify-between items-center'>
          <Logo />
          <div className='flex justify-end  items-center gap-5 flex-1'>
            <ThemeToggler toggleTheme={toggleTheme} />
            <span className='text-xl font-normal text-primary-white cursor-pointer hover:text-accent hover:font-bold'>
              Login
            </span>
            <span className=' hidden md:block'>
              <PrimaryButton />
            </span>
          </div>
        </nav>
      </div>
      <section className="flex-1 bg-[url('/hero-mobile.svg')] sm:bg-[url('/hero-web.svg')] bg-no-repeat bg-contain bg-center text-primary-white relative">
        <div className='absolute top-0 right-0 left-0 bottom-0 bg-black/[.15]'>
          <div className='relative top-[70px] md:top-44 leading-normal'>
            <h1 className=' text-h1 text-center font-bold font-raleway tracking-[0.4px]'>
              All your contacts in one place.
            </h1>
            <p className='font-montserrat font-normal text-sub-heading text-center w-[95%] max-w-[420pxpx] md:w-[77%] md:max-w-[896px] mx-auto'>
              Experience the convenience of having all your contacts
              consolidated seamlessly in one centralized hub.
            </p>
            <div className='flex justify-center mt-2 md:hidden'>
              <PrimaryButton />
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header

Header.propTypes = {
  toggleTheme: PropTypes.func,
}
