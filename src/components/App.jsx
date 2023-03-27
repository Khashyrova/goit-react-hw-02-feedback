import { Component } from 'react';
import Statistics from './Statistics';
import Notification from './Notification';
import Container from './Container';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = e => {
    const { name } = e.target;
    this.setState(state => ({ [name]: state[name] + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions onLeaveFeedback={this.handleClick} />
            {total === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positiveFeedback={positiveFeedbackPercentage}
              />
            )}
          </Section>
        </Container>
      </div>
    );
  }
}
