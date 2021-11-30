//rce
import React, { Component } from 'react'
import style from "./Button.module.css"

class Button extends Component {
  render() {
    return (
      <>
        {/* <button>Good</button> */}
        <button className={style.button}>{this.props.label}</button>
      </>
    );
  }
}

export default Button
