import React from 'react'
import { Redirect } from 'react-router-dom'

import PetsContainer from '../containers/PetsContainer'


const Owner = (props) => {


let owner = props.owners && props.owners.filter(owner => owner.id == props.match.params.id)[0]

    return (
      <div>
        <h2>
          Welcome
          {owner ? owner.name : null}!
        </h2>
        <PetsContainer  owner={owner}/>
      </div>
    )
}

export default Owner