import React from 'react'
import { connect} from 'react-redux'
import TodosContainer from '../containers/TodosContainer'


const Todos = (props) => {

    const findTodos = () => {
       return (
        props.owners.find(owner => owner.id == props.match.params.owner_id).todos.filter(todo => todo.pet_id == props.match.params.id)
       )
    }

    return (
        <div>
        <h1>To-Dos</h1>
            {props.owners.length  > 0 ? 
           findTodos().map(todo => <p>
           <li> {todo.description} - {todo.notes} </li>
           </p>) : null
           }
          
        </div>
    )
}

    const mapStoreToProps = state => {
        return {
            owners: state.owners
    }
}

export default connect(mapStoreToProps)(Todos)