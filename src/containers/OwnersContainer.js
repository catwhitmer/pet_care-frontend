import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { fetchOwners } from '../actions/fetchOwners'
import OwnerForm from '../components/OwnerForm'
import PetForm from '../components/PetForm'
import Owners from '../components/Owners'
import Owner from '../components/Owner'
import Pets from '../components/Pets'
import RenderPetForm from '../components/RenderPetForm'

class OwnersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchOwners()
    }
    
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/owners/new' component={OwnerForm} />
                    <Route path='/owners/:id/pets/new' component={PetForm} />
                    <Route path='/owners/:id' render={(routerProps) => <Owner {...routerProps} owners={this.props.owners}/>} />
                    <Route path='/owners' render= {(routerProps) => <Owners {...routerProps} owners={this.props.owners}/>} />
                </Switch>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        owners: state.owners
    }
}

export default connect(mapStateToProps, { fetchOwners })(OwnersContainer)