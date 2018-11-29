import React, { Component } from 'react';


class Reset extends Component {

    reset = () => {
        this.props.resetDefault(true);
    }
  render() {
    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={this.reset}>reset</button>
        </div>
    );
  }
}

export default Reset;
