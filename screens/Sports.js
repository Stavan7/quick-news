import React, { Component } from 'react'
import ScreenComponent from '../components/UI/ScreenComponent';

class Sports extends Component {
    render() {
        return <ScreenComponent
            category
            paddingBtm={70}
            keyword="Sports"
            navigation={this.props.navigation}
        />
    }
}


export default Sports; 