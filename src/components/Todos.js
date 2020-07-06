import React from 'react'
import { connect} from 'react-redux'
import { Link } from 'react-router-dom'

import TodosContainer from '../containers/TodosContainer'
import TodoForm from '../components/TodoForm'


const Todos = (props) => {

    const findTodos = () => {
       return (
        props.owners.find(owner => owner.id == props.match.params.owner_id).todos.filter(todo => todo.pet_id == props.match.params.id)
       )
    }

    return (
        <div>
        <h1>To-Dos</h1>
            {props.owners.length  > 0 ? findTodos().map(todo => 
                <li key={todo.id}> {todo.description} - {todo.notes} </li>) : null}
                <button onClick={() => handleEdit(pet)}>Edit</button>
                <button onClick={() => handleDelete(pet)}>Delete</button>
                <br />
                <hr />
                 <TodoForm todos={props.owners}/> 
        </div>
    )
}

    const mapStoreToProps = state => {
        return {
            owners: state.owners
    }
}

export default connect(mapStoreToProps)(Todos)