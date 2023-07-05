import React, { Component } from 'react'
import PageComponent from '../components/PageComponent';

class Science extends Component {
    render() {
        return <PageComponent
            category
            headerBtn={true}
            keyword="Science"
            navigation={this.props.navigation}
        />
    }
}


export default Science; 