import PropTypes from 'prop-types';
import {
  StatisticsButton,
  StatisticsButtonList,
  StatisticsButtonItem,
} from './Statistics.module';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <StatisticsButtonList>
      <StatisticsButtonItem>
        <StatisticsButton name="good" onClick={onLeaveFeedback}>
          Good
        </StatisticsButton>
      </StatisticsButtonItem>
      <StatisticsButtonItem>
        <StatisticsButton name="neutral" onClick={onLeaveFeedback}>
          Neutral
        </StatisticsButton>
      </StatisticsButtonItem>
      <StatisticsButtonItem>
        <StatisticsButton name="bad" onClick={onLeaveFeedback}>
          Bad
        </StatisticsButton>
      </StatisticsButtonItem>
    </StatisticsButtonList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
