import React from 'react'
import Owner from './Owner'

const Owners = (props) => {

console.log(props)
    return (
        <div>
            {props.owners.map(owner => 
            <div key={owner.id}><Owner owner={owner} /></div>)}
        </div>

    )
}

export default Owners