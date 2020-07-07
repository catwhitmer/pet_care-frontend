import React from 'react'
import { connect} from 'react-redux'

import TodoForm from '../components/TodoForm'


const Todos = (props) => {

    const findTodos = () => {
       return (
        props.pets.find(pet => pet.id == props.match.params.id).todos.filter(todo => todo.pet_id == props.match.params.id)
       )
    }

    return (
        <div>
            <h1>To-Dos</h1>
                <h3>
                {props.pets.length  > 0 ? findTodos().map(todo => 
                <li key={todo.id}> {todo.description} - {todo.notes} </li>) : null}
                    <button onClick={() => this.handleEdit(pet)}>Edit</button>
                    <button onClick={() => this.handleDelete(pet)}>Delete</button>
                </h3>
                <hr />
                <TodoForm pets={props.pets}/>
        </div>
    )
}

export default connect(null)(Todos)