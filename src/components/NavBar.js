import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {

    return (
        <div className='NavBar'>
          <Link to='/'>Home</Link> - <Link to='/owners'>Sign In</Link> - <Link to='/owners/:id/pets/new'>Add Pet</Link>
        </div>
    )

}

export default NavBar