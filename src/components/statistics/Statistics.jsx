//rce
import style from "./Statistics.module.css";

import React, { Component } from "react";
import Button from "../button/Button";

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (evt) => {
    
     this.setState((state) => ({
      //  ...state,
       [evt.target.innerHTML]: state[evt.target.innerHTML] + 1,
     }));
    
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={style.statistics}>
        <h1>Please leave feedback</h1>
        <Button label="good" onClick={this.handleClick} />
        <Button label="neutral" onClick={this.handleClick} />
        <Button label="bad" onClick={this.handleClick} />

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




//==============z zapiskami
// class Statistics extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = (evt) => {
//     // this.setState((state) => ({
//     //   ...state,
//     //   count: state.count + this.props.step,
//     // }));
//     // console.log(`Button ${evt.target.innerHTML} was clicked!`); // działa
//     // console.log(evt.target.innerHTML === "Good");
//     // console.log(evt.target.innerHTML === "Neutral");
//      this.setState((state) => ({
//        ...state,
//        [evt.target.innerHTML]: state[evt.target.innerHTML] + 1,
//      }));
//     //  console.log(this.state);

//     // if (evt.target.innerHTML === "good") {
//     //   this.setState((state) => ({
//     //     ...state,
//     //     good: state.good + 1,
//     //   }));
//     //   console.log(this.state);
//     // } else if (evt.target.innerHTML === "Neutral") {
//     //   this.setState((state) => ({
//     //     ...state,
//     //     neutral: state.neutral + 1,
//     //   }));
//     // } else {
//     //   this.setState((state) => ({
//     //     ...state,
//     //     bad: state.bad + 1,
//     //   }));
//     // }
//     // console.log("this.props: ", this.props);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div className={style.statistics}>
//         <h1>Please leave feedback</h1>
//         <Button label="good" onClick={this.handleClick} />
//         <Button label="neutral" onClick={this.handleClick} />
//         <Button label="bad" onClick={this.handleClick} />

//         <h1>Statistics</h1>

//         <ul className={style.list}>
//           <li>Good: {good}</li>
//           <li>Neutral: {neutral}</li>
//           <li>Bad: {bad}</li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default Statistics;
