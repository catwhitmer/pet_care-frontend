import React from 'react'
import { connect } from 'react-redux'
import { deletePet } from '../actions/deletePet'
import { Route, Link } from 'react-router-dom'


const Pets = (props) => {

    const handleDelete = (pet) => {
        props.deletePet(pet.id, pet.owner_id)
    }
console.log(props)
        return (
            <h3>
            <h2>My Pets</h2>
                {props.pets && props.pets.map(pet => 
                    <li key={pet.id}><Link to={`/owners/${props.owner.id}/pets/${pet.id}`}> {pet.name} </Link> - Kind: {pet.kind} - Age: {pet.age} - Breed: {pet.breed} 
                    <button onClick={() => handleDelete(pet)}>Delete</button></li>
                )}
            </h3>
        )
}

export default connect(null, { deletePet })(Pets)