import React from 'react'
import { connect } from 'react-redux'
import { deletePet } from '../actions/deletePet'

const Pets = (props) => {

    const handleDelete = (pet) => {
        props.deletePet(pet.id, pet.owner_id)
    }

        return (
            <div>
            My Pets
                {props.pets && props.pets.map(pet => 
                    <li key={pet.id}>Name:{pet.name} - Kind:{pet.kind} - Age:{pet.age} - Breed:{pet.breed} 
                    <button onClick={() => handleDelete(pet)}>Delete</button></li>
                )}
            </div>
        )
}

export default connect(null, { deletePet })(Pets)