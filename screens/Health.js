import React, { Component } from 'react'
import ScreenComponent from '../components/UI/ScreenComponent';

class Health extends Component {
    render() {
        return <ScreenComponent
            category
            keyword="Health"
            paddingBtm={70}
            navigation={this.props.navigation}
        />
    }
}


export default Health; 