import React from 'react'
import { Redirect } from 'react-router-dom'

import PetsContainer from '../containers/PetsContainer'


const Owner = (props) => {

console.log(props)

let owner = props.owners[props.match.params.id - 1]

    return (
      <div>
        <h2>
          Welcome!
          {owner ? owner.name : null}
        </h2>
        <PetsContainer  owner={owner}/>
      </div>
    )
}

export default Owner