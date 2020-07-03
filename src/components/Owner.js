import React from 'react'
import { Redirect } from 'react-router-dom'

import PetsContainer from '../containers/PetsContainer'
import TodosContainer from '../containers/TodosContainer'


const Owner = (props) => {


let owner = props.owners && props.owners.filter(owner => owner.id == props.match.params.id)[0]

    return (
      <div>
        <h1>Welcome {owner ? owner.name : null}!</h1>
          <PetsContainer  owner={owner}/>
          <TodosContainer owner={owner}/>
      </div>
    )
}

export default Owner