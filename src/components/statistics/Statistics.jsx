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

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={style.statistics}>
        <h1>Please leave feedback</h1>
        <Button label="Good" />
        <Button label="Neutral" />
        <Button label="Bad" />

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
