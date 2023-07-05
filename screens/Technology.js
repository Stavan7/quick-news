import React, { Component } from 'react'
import PageComponent from '../components/PageComponent';

class Technology extends Component {
    render() {
        return <PageComponent
            category
            paddingBtm={70}
            keyword="Technology"
            navigation={this.props.navigation}
        />
    }
}


export default Technology; 