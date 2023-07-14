import React, { Component } from 'react'
import ScreenComponent from '../components/UI/ScreenComponent';

class Food extends Component {
    render() {
        return <ScreenComponent
            keyword="Food"
            headerBtn={true}
            navigation={this.props.navigation}
        />
    }
}

export default Food; 