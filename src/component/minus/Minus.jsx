import React, { Component } from "react";

export default class Minus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countMinus: 0,
        };
    }

    minus = () => {
        if (this.state.countMinus >= 0) {
            this.setState({ countMinus: this.state.countMinus - 1 });
        } else {
            alert("the number is negative ");
        }
    };

    plus = () => {
        if (this.state.countMinus >= 0) {
            this.setState({ countMinus: this.state.countMinus + 1 });
        } else {
            alert("the number is negative ");
        }
    };

    reset = () => {
        this.setState({ countMinus: (this.state.countMinus = 0) });
    };
    render() {
        let { countMinus } = this.state;
        return (
            <div className="minus">
                <h4>Count = {countMinus}</h4>
                <button onClick={this.minus}>-</button>
                <button onClick={this.plus}>+</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}
