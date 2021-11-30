//rce
import style from "./Statistics.module.css";

import React, { Component } from "react";
import Button from "../button/Button";

class Statistics extends Component {
  state = {
    good: 1,
    neutral: 2,
    bad: 0,
  };

  handleClick = (evt) => {
    // this.setState((state) => ({
    //   ...state,
    //   count: state.count + this.props.step,
    // }));
    console.log(`Button ${evt.target.innerHTML} was clicked!`); // działa
    // console.log(evt.target.innerHTML === "Good");
    // console.log(evt.target.innerHTML === "Neutral");
    if (evt.target.innerHTML === "Good") {
      this.setState((state) => ({
        ...state,
        good: state.good + 1,
      }));
      console.log(this.state);
    } else if (evt.target.innerHTML === "Neutral") {
      this.setState((state) => ({
        ...state,
        neutral: state.neutral + 1,
      }));
    } else {
      this.setState((state) => ({
        ...state,
        bad: state.bad + 1,
      }));
    }
    // console.log("this.props: ", this.props);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={style.statistics}>
        <h1>Please leave feedback</h1>
        <Button label="Good" onClick={this.handleClick} />
        <Button label="Neutral" onClick={this.handleClick} />
        <Button label="Bad" onClick={this.handleClick} />

        <h1>Statistics</h1>

        <ul className={style.list}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
