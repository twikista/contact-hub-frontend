import { Link } from 'react-router-dom'
// import logoMobile from '../assets/logo-mobile.svg'
import MoonIcon from '../assets/MoonIcon'
import GlobeIcon from '../assets/GlobeIcon'
import PrimaryButton from '../components/PrimaryButton'
import { ChevronLeft, ChevronRight } from '../assets/ChevronIcons'
import SecondaryButton from '../components/SecondaryButton'
import Logo from '../components/Logo'
import Reviews from '../components/Reviews'

const Home = () => {
  return (
    <div className='w-full bg-primary-white'>
      <div className='w-full min-h-[452px] md:min-h-[786px] bg-primary-blue flex flex-col'>
        <header className='border-b border-b-solid border-b-gray-600'>
          <nav className='w-full sm:w-full max-w-[1560px] px-5  mx-auto h-[70px] lg:h-20 sm:px-6 flex justify-between items-center'>
            <Logo />
            <div className='flex justify-end  items-center gap-5 flex-1'>
              <MoonIcon />
              <span className='text-xl font-normal text-primary-white cursor-pointer hover:text-accent hover:font-bold'>
                Login
              </span>
              <span className=' hidden md:block'>
                <PrimaryButton />
              </span>
            </div>
          </nav>
        </header>
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
      <main>
        <section className='flex items-center flex-col-reverse pt-9  h-[608px] lg:h-[700px] gap-4 md:flex-row max-w-7xl mx-auto'>
          <article className='flex-1 h-full text-primary-blue mx-8 md:mx-10'>
            <div className='mb-4 md:mt-40 text-center md:text-left'>
              <h2 className='text-h2  font-bold'>Why use the contactHub?</h2>
              <h4 className='text-sub-heading  font-montserrat'>
                simply beacuse you get to enjoy
              </h4>
            </div>
            <ul className='list-none flex md:justify-self-auto flex-col mx-auto md:mx-0'>
              <li className='flex gap-3 md:gap-[18px]'>
                <GlobeIcon />
                <div className='flex-1'>
                  <h6 className='font-montserrat font-bold leading-normal text-regular capitalize '>
                    Unified Contact Hub
                  </h6>
                  <p className='font-normal text-regular leading-normal md:max-w-[462px]'>
                    Keep all your contacts organized in one central location for
                    effortless management.
                  </p>
                </div>
              </li>
              <li className='flex gap-3 md:gap-[18px]'>
                <GlobeIcon />
                <div className='flex-1'>
                  <h6 className='font-montserrat font-bold leading-normal text-regular capitalize'>
                    Seamless Integration
                  </h6>
                  <p className='font-normal text-regular leading-normal md:max-w-[462px]'>
                    Sync contacts from various platforms like email and social
                    media to maintain an up-to-date network.
                  </p>
                </div>
              </li>
              <li className='flex gap-3 md:gap-[18px]'>
                <GlobeIcon />
                <div className='flex-1'>
                  <h6 className='font-montserrat font-bold leading-normal text-regular capitalize'>
                    Effortless Communication
                  </h6>
                  <p className='font-normal text-regular leading-normal md:max-w-[462px]'>
                    Initiate calls, emails, and messages directly from the app
                    to stay connected without hassle.
                  </p>
                </div>
              </li>
            </ul>
          </article>
          <div className='flex-1 object-cover object-center lg:object-top'>
            <img
              src='/online-world-mobile.svg'
              alt='contact hub mobile image'
              className='mx-auto md:hidden h-full'
            />
            <img
              src='/online-world-desktop.svg'
              alt='contact hub mobile image'
              className='mx-auto hidden md:block h-full'
            />
          </div>
        </section>
        <section className='mt-4 md:mt-14 h-48 md:h-[306px] max-w-7xl mx-auto'>
          <h2 className='text-h2 text-center text-primary-blue font-bold leading-normal font-raleway'>
            What other users are saying
          </h2>
          <div className='flex items-center justify-center gap-2 mt-4 md:w-80% max-w-[347px] md:max-w-4xl xl:max-w-7xl  mx-auto'>
            <ChevronLeft />
            <Reviews />
            <ChevronRight />
          </div>
        </section>
        <section className='flex  justify-center px-5 mt-6 border border-solid'>
          <article className=' w-[100%] min-w-[260px] py-6 lg:pt-9 lg:pb-14 bg-primary-blue text-primary-white text-center rounded-[10px]'>
            <div className='bg-[url("/action-bg.svg")] md:bg-[url("/action-bg-desktop.svg")] md:bg-no-repeat bg-cover'>
              <div className='w-[70%] mx-auto'>
                <h2 className='text-h2 font-bold'>Don&apos;t miss out</h2>
                <h4 className='text-sub-heading'>
                  Elevate your contact management game by signing up for our app
                  today.
                </h4>
              </div>
              <div className='flex items-stretch justify-center w-2/4 min-w-[170px] max-w-[296px] lg:max-w-[370px] mt-4 gap-3 mx-auto'>
                <PrimaryButton />
                <SecondaryButton />
              </div>
            </div>
          </article>
        </section>
      </main>
      <footer className=' py-5 w-full bg-primary-blue mt-12 lg:mt-16 text-sub-heading text-primary-white font-montserrat flex flex-col justify-center items-center text-center'>
        <span>&copy;2023</span>
        <p>
          design:{' '}
          <Link className='font-bold underline hover:text-accent'>
            Moejoh Abigail
          </Link>
          <span>&nbsp;</span>
          <span>&#43;</span>
          <span>&nbsp;</span>
          code implementation:{' '}
          <Link className='font-bold underline hover:text-accent'>Aaron</Link>
        </p>
      </footer>
    </div>
  )
}

export default Home
