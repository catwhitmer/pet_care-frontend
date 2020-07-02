import React from 'react'
import { Route, Link } from 'react-router-dom'
import Owner from './Owner'

const Owners = (props) => {

console.log(props)
    return (
        <div>
        Click your name to Sign In 
            {props.owners.map(owner => 
                <li key={owner.id}>
                    <Link to={`/owners/${owner.id}`}> {owner.name} </Link> - {owner.email}
                </li>)}
        </div>

    )
}

export default Owners