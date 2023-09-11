import { Link } from 'react-router-dom'

const Footer = () => {
  return (
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
  )
}

export default Footer
