import React, { Component } from 'react'
import ScreenComponent from '../components/UI/ScreenComponent';

class Politics extends Component {
    render() {
        return <ScreenComponent
            keyword="Politics"
            headerBtn={true}
            navigation={this.props.navigation}
        />
    }
}

export default Politics; 