// import Button from "./components/button/Button";
import React, { Component } from "react";
import Statistics from "./components/statistics/Statistics";
import Section from "./components/section/Section";
import FeedbackOptions from "./components/feedbackOptions/FeedbackOptions";
import "./App.css";
import Notification from "./components/notification/Notification";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = (evt) => {
    this.setState((state) => ({
      //  ...state,
      [evt.target.innerHTML]: state[evt.target.innerHTML] + 1,
      // np:  good: state[good] + 1 =>
      //good: 0 + 1
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => (acc += value));
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = (this.state.good / this.countTotalFeedback()) * 100;
    return percentage.toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please Leave Feedback">
          <FeedbackOptions
            onLeaveFeedback={this.changeState}
            options={["good", "neutral", "bad"]}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
