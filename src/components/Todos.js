import React from 'react'
import TodosContainer from '../containers/TodosContainer'


const Todos = (props) => {
console.log(props)
    return (
        <div>
            <h1>To-Dos</h1>
             {/*props.todos.map(todo => 
                    <div key={todo.id}> {todo.description} - {todo.notes} </div>)*/}
        </div>
    )
}

export default Todos