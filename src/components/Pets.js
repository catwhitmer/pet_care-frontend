import React from 'react'
import { Link } from 'react-router-dom'

import Pet from './Pet'

const Pets = (props) => {

    return (
        <div>
            <div className='pets'></div>
                <h1>My Pets!</h1>
                    {props.pets.map(pet => 
                        <h2 key={pet.id}>
                            <Link to={`/pets/${pet.id}`}> {pet.name} </Link>
                        </h2>)}
        </div>
    )
}

export default Pets