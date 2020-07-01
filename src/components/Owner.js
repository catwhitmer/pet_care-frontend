import React from 'react'


const Owner = (props) => {

    return (
      <li>
        {props.owner.name} - {props.owner.email}
      </li>
    )
}

export default Owner