import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>home page</h1>
      <ul>
        <li>
          <Link to='/register'>Sign up</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
