import React from 'react'

const Pets = (props) => {

        return (
            <div>
            My Pets
                {props.pets && props.pets.map(pet => 
                    <li key={pet.id}>Name:{pet.name} - Kind:{pet.kind} - Age:{pet.age} - Breed:{pet.breed}</li>
                )}
            </div>
        )
}

export default Pets