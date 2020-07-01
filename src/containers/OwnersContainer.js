import React from 'react'
import { connect } from 'react-redux'

import { fetchOwners } from '../actions/fetchOwners'
import OwnerForm from '../components/OwnerForm'
import Owners from '../components/Owners'

class OwnersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchOwners()
    }
    
    render() {
        return (
            <div>
                <OwnerForm /><br></br>
                <Owners owners={this.props.owners}/>
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