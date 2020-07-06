import React from 'react'
import { Redirect } from 'react-router-dom'

import TodosContainer from '../containers/TodosContainer'


const Todo = (props) => {

    let pet = props.owners.pets && props.owners.pets.filter(pet => pet.id == props.match.params.id)[0]
    let todo = props.pets.todo && props.pets.todo.filter()
  
    return (
        <div>
        <li>
            {pets.todo.description}
        </li>
            <TodosContainer  pet={pet} />
        </div>
    )
}

export default Todo