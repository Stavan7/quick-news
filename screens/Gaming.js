import React, { Component } from 'react'
import ScreenComponent from '../components/UI/ScreenComponent';

class Gaming extends Component {
    render() {
        return <ScreenComponent
            keyword="Gaming"
            headerBtn={true}
            navigation={this.props.navigation}
        />
    }
}

export default Gaming; 