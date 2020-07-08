import React from 'react'
import { connect} from 'react-redux'
import { deleteTodo } from '../actions/deleteTodo'

import TodoForm from '../components/TodoForm'


const Todos = (props) => {
    
    const handleDelete = (pet) => {
        props.deleteTodo()
    }

    return (
        <div>
            <h1>To-Dos</h1>
                <h3>
                    {props.todos && props.todos.map(todo => 
                    <li key={todo.id}> {todo.description} - {todo.notes} <br />
                        <button onClick={() => handleDelete(pet)}>Delete</button>
                    </li>)}
                    
                </h3>
        </div>
    )
}

export default connect(null, {deleteTodo} )(Todos)