import React, { Component } from 'react'
import ScreenComponent from '../components/UI/ScreenComponent';

class Finance extends Component {
    render() {
        return <ScreenComponent
            keyword="Finance"
            headerBtn={true}
            navigation={this.props.navigation}
        />
    }
}

export default Finance; 