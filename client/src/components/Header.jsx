import { NavLink } from "react-router-dom"


const Header = () => {

  return (
    <header>
      <nav>
        <NavLink to='/' className='link'>Home</NavLink>
        <NavLink to='/posts' className='link'>Posts</NavLink>
        <NavLink to='/about' className='link'>About</NavLink>

      </nav>
    </header>
  )
}

export default Header