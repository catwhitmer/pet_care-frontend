import React from 'react'
import { Link } from 'react-router-dom'

import Pet from './Pet'

const Pets = (props) => {

    return (
        <div>
            <h3 className='pets'></h3>
                <h1>My Pets!</h1>
                    {props.pets.map(pet => 
                        <h3 key={pet.id}>
                            <Link to={`/pets/${pet.id}`}> {pet.name} </Link>
                        </h3>)}
        </div>
    )
}

export default Pets