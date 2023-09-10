const Reviews = () => {
  return (
    <ul className='flex flex-1 items-stretch justify-between text-regular-x max-w-7xl md:gap-6 font-montserrat mx-auto'>
      <article className='flex-1 text-primary-white text-center bg-primary-blue rounded-[10px] px-8 md:px-12 py-6 md:pt-8 md:pb-6 max-h-[223px] max-w-[354px]'>
        <p className=' font-normal mb-1 md:mb-2 '>
          Life made easier! No more juggling different address books, thanks to
          this app.
        </p>
        <div className='flex justify-center items-center w-[158px] md:w-[227px] h-[30px] md:h-[60px] gap-2 mx-4 md:mx-[15px] '>
          <img
            src='/reviewer-1.png'
            alt='Arlene McCoy'
            className='rounded-[50%] w-[30px] h-[30px] md:w-[60px] md:h-[60px]'
          />
          <h5 className='font-bold text-left flex-1'>Arlene McCoy</h5>
        </div>
      </article>
      <article className=' flex-1 text-primary-white text-center bg-primary-blue rounded-[10px] px-8 md:px-12 py-6 md:pt-8 md:pb-6 max-h-[223px] max-w-[354px] hidden md:block'>
        <p className=' font-normal mb-1 md:mb-2'>
          Revolutionized my work as a freelancer. All my contacts were unified,
          so it really increased my productivity.
        </p>
        <div className='flex justify-center items-center w-[158px] md:w-[227px] h-[30px] md:h-[60px] gap-2 mx-4 md:mx-[15px] '>
          <img
            src='/esther-howard.png'
            alt='Esther Howard'
            className='rounded-[50%] w-[30px] h-[30px] md:w-[60px] md:h-[60px]'
          />
          <h5 className='font-bold text-left font-montserrat flex-1'>
            Esther Howard
          </h5>
        </div>
      </article>
      <article className='flex-1 text-primary-white text-center bg-primary-blue rounded-[10px] px-8 md:px-12 py-6 md:pt-8 md:pb-6 max-h-[223px] max-w-[354px] hidden xl:block mx-auto'>
        <p className=' font-normal mb-1 md:mb-2'>
          I think all event planners should have this, helped me effortlessly
          keep track of the numerous vendors.
        </p>
        <div className='flex justify-center items-center w-[158px] md:w-[227px] h-[30px] md:h-[60px] gap-2 mx-4 md:mx-[15px] '>
          <img
            src='/annette-black.png'
            alt='Arlene McCoy'
            className='rounded-[50%] w-[30px] h-[30px] md:w-[60px] md:h-[60px]'
          />
          <h5 className='font-bold font-montserrat text-left flex-1'>
            Annette Black
          </h5>
        </div>
      </article>
    </ul>
  )
}

export default Reviews
