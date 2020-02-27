import React, { Component } from 'react';

class Events extends Component {
    componentDidMount() {
        document.body.classList.add('events');
    }

    componentWillUnmount() {
        document.body.classList.remove('events');
    }

    render() {
        return (
            <div>
                <h1>This is the Events page.</h1>
            </div>
        );
    }
}

export default Events;
