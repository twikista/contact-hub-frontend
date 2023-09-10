const MoonIcon = () => {
  return (
    <div className=' flex justify-center items-center w-7 h-7 hover:border hover:border-accent hover:border-solid p-1 rounded'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-7 h-7 md:w-12 md:h-12 text-white hover:text-accent -rotate-[120deg] cursor-pointer'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
        />
      </svg>
    </div>
  )
}

export default MoonIcon
