import React from 'react'
import TodoForm from '../components/TodoForm'
import Todos from '../components/Todos'

class TodosContainer extends React.Component {

    render() {
        return (
            <div>
                <Todos todos={this.props.owner && this.props.owner.todos}/>
                <TodoForm owner={this.props.owner} owner={this.props.owner}/>
            </div>
        )
    }
}

export default TodosContainer