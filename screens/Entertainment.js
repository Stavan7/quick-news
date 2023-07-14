import React, { PureComponent } from 'react'
import ScreenComponent from '../components/UI/ScreenComponent';

class Entertainment extends PureComponent {
    render() {
        return <ScreenComponent
            paddingBtm={70}
            keyword="Entertainment"
            navigation={this.props.navigation}
        />
    }
}

export default Entertainment; 