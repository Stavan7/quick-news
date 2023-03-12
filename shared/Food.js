import React, { Component } from 'react'
import PageComponent from '../components/PageComponent';

class Food extends Component {
    render() {
        return <PageComponent
            keyword="Food"
            headerBtn={true}
            navigation={this.props.navigation}
        />
    }
}

export default Food; 