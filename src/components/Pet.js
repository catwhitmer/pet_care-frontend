import React from 'react'
import { Link } from 'react-router-dom'


const Pet = (props) => {

  let pet= props.pets && props.pets.filter(pet => pet.id == props.match.params.id)[0]

    return (
      <div>
        <h1>{pet ? pet.name : null}!</h1>
          <h2>
            Species: {pet ? pet.species : null}<br />
            Breed: {pet ? pet.breed : null}<br />
            Age: {pet ? pet.age : null}<br />
          </h2>
        <hr />
      
        <Link to={`/pets/${props.match.params.id}/todos`}> {pet ? pet.name : null}'s To-Dos' </Link>
      </div>
    )
}

export default Pet