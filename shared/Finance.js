import React, { Component } from 'react'
import PageComponent from '../components/PageComponent';

class Finance extends Component {
    render() {
        return <PageComponent
            keyword="Finance"
            headerBtn={true}
            navigation={this.props.navigation}
        />
    }
}

export default Finance; 