import React from 'react'
import OwnerForm from '../components/OwnerForm'
import Owners from '../components/Owners'

class OwnersContainer extends React.Component {
    
    render() {
        return (
            <div>
                <OwnerForm />
                <Owners />
            </div>
        )
    }

}

export default OwnersContainer