import React from 'react'
import { connect} from 'react-redux'


const Todos = (props) => {

    return (
        <div>
        <h1>To-Dos</h1>
            {props.todos && props.todos.map(todo => 
                <div>
                    {todo.description}{todo.notes}
                </div>
         
            )}
        </div>
    )
}

export default connect(null)(Todos)