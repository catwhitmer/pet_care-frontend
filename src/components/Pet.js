import React from 'react'
import { Redirect } from 'react-router-dom'

import TodosContainer from '../containers/TodosContainer'


const Pet = (props) => {

    return (
        <div>
            <TodosContainer  owner={owner}/>
        </div>
    )
}

export default Pet