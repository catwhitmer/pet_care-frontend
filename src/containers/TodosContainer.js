import React from 'react'
import TodoForm from '../components/TodoForm'
import Todos from '../components/Todos'

class TodosContainer extends React.Component {

    render() {
        return (
            <div>
                <TodoForm todos={this.props.owner} owner={this.props.owner}/>
                <Todos todos={this.props.owner && this.props.owner.todos}/>
            </div>
        )
    }
}

export default TodosContainer