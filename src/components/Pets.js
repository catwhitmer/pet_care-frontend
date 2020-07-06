import React from 'react'
import { connect } from 'react-redux'
import { deletePet } from '../actions/deletePet'
import { Route, Link } from 'react-router-dom'


const Pets = (props) => {

    const handleDelete = (pet) => {
        props.deletePet(pet.id, pet.owner_id)
    }

    const handleEdit = (pet) => {
        props.editPet(pet.id, pet.owner_id)
    }
        return (
            <div>
                <h2>My Pets</h2>
                    <h3 className='pets-container'>
                        {props.pets && props.pets.map(pet => 
                            <div key={pet.id}> 
                                Name: {pet.name}<br />
                                Kind: {pet.kind}<br />
                                Breed: {pet.breed}<br />
                                Age: {pet.age}<br />
                                <button onClick={() => handleEdit(pet)}>Edit</button>
                                <button onClick={() => handleDelete(pet)}>Delete</button>
                                <hr />  
                                <Link to={`/owners/${pet.owner_id}/pets/${pet.id}/todos`}> {pet.name}'s' To-Dos </Link><br />     
                                <hr />           
                            </div>
                        )}                      
                    </h3>            
          </div>
        )
}

export default connect(null, { deletePet })(Pets)