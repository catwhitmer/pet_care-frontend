import React from 'react'
import { connect } from 'react-redux'
import OwnersContainer from'./containers/OwnersContainer'

class App extends React.Component {
  
  render(){
    return(
      <div className="App">
        <OwnersContainer />
      </div>
    )
  }
}

export default connect()(App)
