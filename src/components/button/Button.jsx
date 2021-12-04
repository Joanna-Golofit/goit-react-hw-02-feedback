//rce
import React, { Component } from 'react'
import style from "./Button.module.css"
import PropTypes from "prop-types";


class Button extends Component {
  render() {
    return (
      <>
        {/* <button>Good</button> */}
        <button className={style.button} onClick={this.props.onClick}>
          {this.props.label}
        </button>
      </>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button
