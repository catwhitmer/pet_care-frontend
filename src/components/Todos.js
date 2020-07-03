import React from 'react'
import TodoForm from './TodoForm'

const Todos = (props) => {

    console.log(props.todos)
    return (
        <div>
            <h2>Todos</h2>
                <h3>
                    {props.todos && props.todos.map(todo =>
                        <li key={todo.id}>{todo.description} - {todo.notes}</li>
                    )}
                </h3>
        </div>
    )
}

export default Todos