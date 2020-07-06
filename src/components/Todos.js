import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

const Todos = (props) => {

    return (
        <div>
            <h1>To-Dos</h1>
                <h3>
                    {props.todos && props.todos.map(todo =>
                        <li key={todo.id}>{todo.description} - {todo.notes}</li>
                    )}
                </h3>
        </div>
    )
}

export default Todos