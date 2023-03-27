import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsText, StatisticsTextList } from './Statistics.module';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <StatisticsTextList>
    <StatisticsText>Good: {good}</StatisticsText>
    <StatisticsText>Neutral:{neutral}</StatisticsText>
    <StatisticsText>Bad: {bad}</StatisticsText>
    <StatisticsText>
      Total:
      {total}
    </StatisticsText>
    <StatisticsText>
      Positive feedback:
      {positiveFeedback}%
    </StatisticsText>
  </StatisticsTextList>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
export default Statistics;
