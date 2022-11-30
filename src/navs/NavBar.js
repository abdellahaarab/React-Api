import './NavBar.css'
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
        <Link to={'/'} className='navbarLinks' >Index</Link>
        <Link to={'/FetchComp'} className='navbarLinks' >FetchComp</Link>
        <Link to={'/AxiosComp'} className='navbarLinks' >AxiosComp</Link>
    </div>
  )
}

export default NavBar