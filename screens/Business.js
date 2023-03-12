import React, { Component } from 'react'
import PageComponent from '../components/PageComponent';

class Business extends Component {
    render() {
        return <PageComponent
            category
            keyword="Business"
            headerBtn={true}
            navigation={this.props.navigation}
        />
    }
}

export default Business; 