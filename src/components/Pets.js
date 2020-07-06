import React from 'react'
import { connect } from 'react-redux'
import { deletePet } from '../actions/deletePet'
import { Route, Link } from 'react-router-dom'
import Todo from './Todo'


const Pets = (props) => {

    const handleDelete = (pet) => {
        props.deletePet(pet.id, pet.owner_id)
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
                                <button onClick={() => handleDelete(pet)}>Delete</button>
                                <hr />  
                                <Link to={`/owners/${pet.owner_id}/pets/${pet.id}/todos`}> Your pet's To-Dos </Link><br />     
                                <hr />           
                            </div>
                        )}                      
                    </h3>            
          </div>
        )
}

export default connect(null, { deletePet })(Pets)