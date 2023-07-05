import React, { Component } from 'react'
import PageComponent from '../components/PageComponent';

class Business extends Component {
    render() {
        return <PageComponent
            category
            headerBtn={true}
            keyword="Business"
            navigation={this.props.navigation}
        />
    }
}


export default Business; 