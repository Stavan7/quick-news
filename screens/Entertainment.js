import React, { Component } from 'react'
import PageComponent from '../components/PageComponent';

class Entertainment extends Component {
    render() {
        return <PageComponent
            paddingBtm={70}
            keyword="Entertainment"
            navigation={this.props.navigation}
        />
    }
}

export default Entertainment; 