import React, { Component } from 'react'
import ScreenComponent from '../components/UI/ScreenComponent';

class Business extends Component {
    render() {
        return <ScreenComponent
            category
            headerBtn={true}
            keyword="Business"
            navigation={this.props.navigation}
        />
    }
}


export default Business; 