import React, { Component } from 'react';

class FourOhFour extends Component {
    componentDidMount() {
        document.body.classList.add('four-oh-four');
    }

    componentWillUnmount() {
        document.body.classList.remove('four-oh-four');
    }

    render() {
        return (
            <div class="four-oh-four">
                <h1>404</h1>
            </div>
        );
    }
}

export default FourOhFour;