import React from 'react'
import PetForm from '../components/PetForm'
import Pets from '../components/Pets'


class PetsContainer extends React.Component {

    render() {
        return (
            <div>
                <Pets pets={this.props.owner && this.props.owner.pets} owner={this.props.owner}/>
            </div>
        )
    }

}

export default PetsContainer