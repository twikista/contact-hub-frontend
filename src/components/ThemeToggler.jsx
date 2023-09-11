import PropTypes from 'prop-types'

const ThemeToggler = ({ toggleTheme }) => {
  return (
    <button
      className=' flex justify-center items-center w-7 h-7 hover:border hover:border-accent hover:border-solid p-1 rounded'
      onClick={toggleTheme}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='block dark:hidden w-7 h-7 md:w-12 md:h-12 text-white hover:text-accent -rotate-[120deg] cursor-pointer'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
        />
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='dark:block hidden  w-7 h-7 md:w-12 md:h-12 text-white hover:text-accent -rotate-[120deg] cursor-pointer'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z'
        />
      </svg>
    </button>
  )
}

export default ThemeToggler

ThemeToggler.propTypes = {
  toggleTheme: PropTypes.func,
}
