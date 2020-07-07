import React from 'react'
import { Route, Link } from 'react-router-dom'

import TodosContainer from '../containers/TodosContainer'


const Pet = (props) => {


let pet= props.pets && props.pets.filter(pet => pet.id == props.match.params.id)[0]

    return (
      <div>
        <h1>{pet ? pet.name : null}!</h1>
        <h3>Kind: {pet ? pet.kind : null}</h3>
        <h3>Breed: {pet ? pet.breed : null}</h3>
        <h3>Age: {pet ? pet.age : null}</h3>
        
        <Link to={`/pets/${props.match.params.id}/todos`}> {pet ? pet.name : null}'s To-Dos' </Link>
      </div>
    )
}

export default Pet