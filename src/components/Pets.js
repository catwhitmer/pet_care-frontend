import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const Pets = (props) => {

    return (
        <div>
            <div className='pets'></div>
                <h1>My Pets!</h1>
                    {props.pets.map(pet => 
                        <h2 key={pet.id}>
                            <Link to={`/pets/${pet.id}`}> {pet.name} </Link>
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