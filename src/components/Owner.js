import React from 'react'


const Owner = (props) => {

console.log(props)

let owner = props.owners[props.match.params.id - 1]

    return (
      <div>
      Welcome!
        <li>
          {owner ? owner.name : null} - {owner ? owner.email : null}
        </li>
      </div>
    )
}

export default Owner