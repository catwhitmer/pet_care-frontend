import React from 'react'
import { Route, Link } from 'react-router-dom'
import Owner from './Owner'

const Owners = (props) => {

    return (
        <div>
            <h3 className='owners'></h3>
                <h1>Click your name to Sign In!</h1>
                    {props.owners.map(owner => 
                    <li key={owner.id}><Link to={`/owners/${owner.id}`}> {owner.name} </Link> - {owner.email} </li>)}
        </div>
    )
}

export default Owners