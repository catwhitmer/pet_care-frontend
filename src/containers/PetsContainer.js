import React from 'react'
import PetForm from '../components/PetForm'
import Pets from '../components/Pets'
import Pet from '../components/Pet'


class PetsContainer extends React.Component {

    render() {
        return (
            <div>
                <Pets pets={this.props.owner && this.props.owner.pets} owner={this.props.owner}/>
                <PetForm owner={this.props.owner} />            
            </div>
        )
    }

}

export default PetsContainer