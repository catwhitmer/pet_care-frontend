import React from 'react'
import TodoForm from '../components/TodoForm'
import Todos from '../components/Todos'

class TodosContainer extends React.Component {

    render() {
        return (
            <div>
                <Todos />
                <TodoForm />
            </div>
        )
    }
}

export default TodosContainer