import { Link } from 'react-router-dom'
import logoMobile from '../assets/logo-mobile.svg'
// import imgTop from '../assets/hero-mobile.svg'
import contactHubSvg from '../assets/contacthub-mobile.svg'
import MoonIcon from '../assets/MoonIcon'
import PrimaryButton from '../components/PrimaryButton'

const Home = () => {
  return (
    <div className='w-full'>
      <div className='w-full min-h-[452px] bg-primary-blue flex flex-col'>
        <header className='border-b border-b-solid border-b-gray-600'>
          <nav className='w-full sm:w-full max-w-[1560px] px-5  mx-auto h-[70px] sm:px-6 flex justify-between items-center'>
            <Link to='/' className='no-underline w-[180px]'>
              <img className='max-w-full h-auto' src={logoMobile} alt='logo' />
            </Link>
            <div className='flex justify-end  items-center gap-5 flex-1'>
              <MoonIcon />
              <span className='text-xl font-normal text-primary-white cursor-pointer hover:text-secondary'>
                Login
              </span>
              <span className=' hidden sm:block'>
                <PrimaryButton />
              </span>
            </div>
          </nav>
        </header>
        <section className="flex-1 bg-[url('/hero-mobile.svg')] bg-no-repeat bg-contain bg-center text-primary-white relative">
          <div className='absolute top-0 right-0 left-0 bottom-0 bg-black/[.15]'>
            <div className='relative top-[70px] '>
              <h1 className=' text-xl text-center font-bold font-raleway tracking-[0.4px]'>
                All your contacts in one place.
              </h1>
              <p className='font-montserrat font-normal leading-4 text-xs text-center w-[331px] mx-auto'>
                Experience the convenience of having all your contacts
                consolidated seamlessly in one centralized hub.
              </p>
              <div className='flex justify-center mt-2'>
                <PrimaryButton />
              </div>
            </div>
          </div>
          {/* <div className="w-full max-w-5xl mx-auto mt-10 h-60 bg-[url('/public/header-top.png')] bg-no-repeat bg-cover"></div> */}
          {/* <div
            className='w-full mx-auto mt-10 h-60 flex flex-col justify-end text-primary-white'
            style={{
              backgroundImage: `url(${imgTop})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className='text-xl sm:text-5xl text-center font-bold font-raleway'>
              All you contacts in one place
            </h2>
            <p className='text-xs font-monserrat sm:text-2xl text-center w-8/12 mx-auto'>
              Experience the convenience of having all your contacts
              consolidated seamlessly in one centralized hub.
            </p>
          </div> */}
          {/* <div className="w-full max-w-5xl mx-auto h-[326px] mt-12 bg-[url('./assets/header-btm.png')] bg-no-repeat bg-contain bg-center" /> */}
        </section>
      </div>
      <main className='bg-primary-white'>
        <section className='flex px-8 '>
          <article className='flex-1 pt-40'></article>
          <img
            src={contactHubSvg}
            alt='contact hub mobile svg'
            className='flex-1'
          />
        </section>
      </main>
    </div>
  )
}

export default Home
