import React from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import { deletePet } from '../actions/deletePet'
import Pet from './Pet'

const Pets = (props) => {

    const handleDelete = (pet) => {
        props.deletePet(pet.id)
    }


    return (
        <div>
            <h3 className='pets'></h3>
                <h1>My Pets!</h1>
                    {props.pets.map(pet => 
                        <h3 key={pet.id}>
                            <Link to={`/pets/${pet.id}`}> {pet.name} </Link> <br />
                            <button onClick={() => handleDelete(pet)}>Delete</button>
                        </h3>)}
        </div>
    )
}

export default connect(null, { deletePet })(Pets)