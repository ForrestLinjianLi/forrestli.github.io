import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'

class Footer extends Component {
    state = {
        count: 0
    }
    render() {
        return (
        <React.Fragment>
            <span className={this.getClassName()}>{this.getCount()}</span>
            <button onClick={this.increment} className="btn btn-secondary btn-sm">+</button>
            <button onClick={this.decrement} className="btn btn-secondary btn-sm">-</button>
        </React.Fragment>
        );
    }
}

export default Footer;
