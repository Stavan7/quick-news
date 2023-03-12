import React, { Component } from 'react'
import PageComponent from '../components/PageComponent';

class Science extends Component {
    render() {
        return <PageComponent
            category
            keyword="Science"
            headerBtn={true}
            navigation={this.props.navigation}
        />
    }
}

export default Science; 