import React from 'react'

import TodosContainer from '../containers/TodosContainer'


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
        <TodosContainer pet={pet}/>
      </div>
    )
}

export default Pet