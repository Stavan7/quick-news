import React, { Component } from 'react'
import ScreenComponent from '../components/UI/ScreenComponent';

class Israel extends Component {
    render() {
        return <ScreenComponent
            keyword="Israel"
            headerBtn={true}
            navigation={this.props.navigation}
        />
    }
}

export default Israel; 