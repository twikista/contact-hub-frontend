import { Link } from 'react-router-dom'
import Header from '../components/Header'
import GlobeIcon from '../assets/GlobeIcon'
import PrimaryButton from '../components/PrimaryButton'
import { ChevronLeft, ChevronRight } from '../assets/ChevronIcons'
import SecondaryButton from '../components/SecondaryButton'
import Reviews from '../components/Reviews'
import PropTypes from 'prop-types'

const Home = ({ toggleTheme, theme }) => {
  return (
    <div className='w-full bg-primary-white dark:bg-dark-bg transition-colors ease-in duration-500'>
      <Header toggleTheme={toggleTheme} />
      <main>
        <section className='flex items-center flex-col-reverse pt-9  h-[608px] lg:h-[700px] gap-4 md:flex-row max-w-7xl mx-auto'>
          <article className='flex-1 h-full text-primary-blue dark:text-primary-white mx-8 md:mx-10'>
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
              src={
                theme
                  ? '/online-world-mobile-dark.svg'
                  : '/online-world-mobile.svg'
              }
              alt='contact hub mobile image'
              className='mx-auto md:hidden h-full'
            />
            <img
              src={
                theme
                  ? '/online-world-desktop-dark.svg'
                  : '/online-world-desktop.svg'
              }
              alt='contact hub mobile image'
              className='mx-auto hidden md:block h-full'
            />
          </div>
        </section>
        <section className='mt-4 md:mt-14 h-48 md:h-[306px] max-w-7xl mx-auto'>
          <h2 className='text-h2 text-center text-primary-blue dark:text-primary-white font-bold leading-normal font-raleway'>
            What other users are saying
          </h2>
          <div className='flex items-center justify-center gap-2 mt-4 md:w-80% max-w-[347px] md:max-w-4xl xl:max-w-7xl  mx-auto'>
            <ChevronLeft />
            <Reviews />
            <ChevronRight />
          </div>
        </section>
        <section className='flex  justify-center px-5 mt-6'>
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

Home.propTypes = {
  toggleTheme: PropTypes.func,
  theme: PropTypes.string,
}
