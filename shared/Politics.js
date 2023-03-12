import React, { Component } from 'react'
import PageComponent from '../components/PageComponent';

class Politics extends Component {
    render() {
        return <PageComponent
            keyword="Politics"
            headerBtn={true}
            navigation={this.props.navigation}
        />
    }
}

export default Politics; 