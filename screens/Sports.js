import React, { Component } from 'react'
import PageComponent from '../components/PageComponent';

class Sports extends Component {
    render() {
        return <PageComponent
            keyword="Sports"
            paddingBtm={70}
            navigation={this.props.navigation}
        />
    }
}

export default Sports; 