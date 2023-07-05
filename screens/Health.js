import React, { Component } from 'react'
import PageComponent from '../components/PageComponent';

class Health extends Component {
    render() {
        return <PageComponent
            category
            keyword="Health"
            paddingBtm={70}
            navigation={this.props.navigation}
        />
    }
}


export default Health; 