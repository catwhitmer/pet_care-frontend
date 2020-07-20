import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Like from '../components/Like'
import TogglePet from '../components/TogglePet'


const Pets = (props) => {

    const [
        toggleOn,
        setToggleOn //setState
    ] = useState(false) //call setToggleOn(!toggleOn)

    const handleClick = () => {
        setToggleOn(!toggleOn)
    }

    const displayPets = () => {  //return original or sorted, false = unsorted true = sorted , props.pets = array of objects
        if (toggleOn){ 
             const sortedPets = props.pets.sort(function(a, b) {
                let nameA = a.name
                let nameB = b.name
                if (nameA < nameB) {
                    return -1
                }
                if (nameA > nameB) {
                    return 1
                }
                    return 0
            })
            return sortedPets
        } else {
            return props.pets
        }
    }

    return (
        <div>
            <div className='pets'></div>
                <h1>My Pets!</h1>
                    <button onClick={handleClick}> Toggle Sort: {toggleOn ? "ON" : "OFF"} </button>
                        <br></br>
                        {displayPets().map(pet => 
                            <h2 key={pet.id}>
                                <Link to={`/pets/${pet.id}`}> {pet.name} </Link>
                                <Like />
                            </h2>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pets: state.pets
    }
}


export default connect(mapStateToProps) (Pets)