import React, { Component } from 'react'
import PageComponent from '../components/PageComponent';

class Gaming extends Component {
    render() {
        return <PageComponent
            keyword="Gaming"
            headerBtn={true}
            navigation={this.props.navigation}
        />
    }
}
export default Gaming; 