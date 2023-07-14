import React, { Component } from 'react' 
import ScreenComponent from '../components/UI/ScreenComponent';

class Science extends Component {
    render() {
        return <ScreenComponent
            category
            headerBtn={true}
            keyword="Science"
            navigation={this.props.navigation}
        />
    }
}


export default Science; 