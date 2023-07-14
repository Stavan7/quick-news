import React, { Component } from 'react'
import ScreenComponent from '../components/UI/ScreenComponent';

class Technology extends Component {
    render() {
        return <ScreenComponent
            category
            paddingBtm={70}
            keyword="Technology"
            navigation={this.props.navigation}
        />
    }
}


export default Technology; 