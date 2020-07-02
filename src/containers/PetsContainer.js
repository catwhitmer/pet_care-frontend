import React from 'react'
import PetForm from '../components/PetForm'
import Pets from '../components/Pets'


class PetsContainer extends React.Component {

    render() {
        return (
            <div>
                <PetForm owner={this.props.owner} />
                <Pets pets={this.props.owner && this.props.owner.pets} />
            </div>
        )
    }

}

export default PetsContainer