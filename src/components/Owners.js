import React from 'react'

const Owners = (props) => {

console.log(props)
    return (
        <div>
            {props.owners.map(owner => <li key={owner.id}>{owner.name} - {owner.email}</li>)}
        </div>

    )
}

export default Owners