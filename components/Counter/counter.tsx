import * as React from 'react';


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };

        this.countUp = this.countUp.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    countDown() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    countUp() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={ this.countUp }> + </button>
                <button onClick={ this.countDown }> - </button>
                <h1>{ this.state.counter }</h1>
            </div>
        )
    }
}

export default Counter;