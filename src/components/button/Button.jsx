import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <>
        {/* <button>Good</button> */}
        <button>{this.props.label}</button>
      </>
    );
  }
}

export default Button
