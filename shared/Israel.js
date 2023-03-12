import React, { Component } from 'react'
import PageComponent from '../components/PageComponent';

class Israel extends Component {
    render() {
        return <PageComponent
            keyword="Israel"
            headerBtn={true}
            navigation={this.props.navigation}
        />
    }
}

export default Israel; 