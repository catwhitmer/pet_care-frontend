import React from 'react'
import PetForm from '../components/PetForm'
import Pets from '../components/Pets'


class RenderPetForm extends React.Component {

    render() {
        return (
            <div>
                <PetForm owner={this.props.owner} />
            </div>
        )
    }

}

export default RenderPetForm