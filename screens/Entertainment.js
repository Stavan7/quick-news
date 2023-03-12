import React, { Component } from 'react'
import PageComponent from '../components/PageComponent';

class Entertainment extends Component {
    render() {
        return <PageComponent
            keyword="Entertainment"
            paddingBtm={70}
            navigation={this.props.navigation}
        />
    }
}

export default Entertainment; 