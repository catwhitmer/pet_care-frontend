import React from 'react'

import PetsContainer from '../containers/PetsContainer'


const Owner = (props) => {


let owner = props.owners && props.owners.filter(owner => owner.id == props.match.params.id)[0]

    return (
      <div>
        <h1>Welcome {owner ? owner.name : null}!</h1>
          <PetsContainer  owner={owner}/>
      </div>
    )
}

export default Owner