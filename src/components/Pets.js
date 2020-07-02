import React from 'react'

const Pets = (props) => {

        return (
            <div>
            My Pets
                {props.pets && props.pets.map(pet => 
                    <li key={pet.id}>{pet.name} - {pet.kind} - {pet.age} - {pet.breed}</li>
                )}
            </div>
        )
}

export default Pets