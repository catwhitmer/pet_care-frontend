import React from 'react'
import TodoForm from './TodoForm'

const Todos = (props) => {

    return (
        <div>
            <h2>To-Dos</h2>
                <h3>
                    {props.todos && props.todos.map(todo =>
                        <li key={todo.id}>{todo.description} - {todo.notes}</li>
                    )}
                </h3>
        </div>
    )
}

export default Todos