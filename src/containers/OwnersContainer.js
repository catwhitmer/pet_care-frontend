import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { fetchOwners } from '../actions/fetchOwners'
import OwnerForm from '../components/OwnerForm'
import Owners from '../components/Owners'
import Owner from '../components/Owner'

class OwnersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchOwners()
    }
    
    render() {
        return (
            <div>
                <Route exact path='/owners/new' component={OwnerForm} />
                <Route path='/owners/:id' render={(routerProps) => <Owner {...routerProps} owners={this.props.owners}/>} />
                <Route exact path='/owners' render= {(routerProps) => <Owners {...routerProps} owners={this.props.owners}/>} />
                
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