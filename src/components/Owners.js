import React from 'react'
import { Route, Link } from 'react-router-dom'
import Owner from './Owner'

const Owners = (props) => {

console.log(props)
    return (
        <h3 className='owners'>
        <h1>Click your name to Sign In!</h1>
            {props.owners.map(owner => 
               <li key={owner.id}>
                    <Link to={`/owners/${owner.id}`}> {owner.name} </Link> - {owner.email}
                </li>)}
        </h3>

    )
}

export default Owners