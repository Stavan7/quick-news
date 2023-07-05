import React, { Component } from 'react'
import PageComponent from '../components/PageComponent';

class Sports extends Component {
    render() {
        return <PageComponent
            category
            paddingBtm={70}
            keyword="Sports"
            navigation={this.props.navigation}
        />
    }
}


export default Sports; 