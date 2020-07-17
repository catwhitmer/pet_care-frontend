import React from 'react'

class Like extends React.Component {

    state = {
        count: 0
    }

    addLike = () => {
        const newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.addLike} id={this.props.likeId}>Likes: {this.state.count}</button>
            </div>
        )
    }
}

export default Like