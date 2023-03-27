import PropTypes from 'prop-types';
import { StatisticsTitle, StatisticsSection } from './Statistics.module';

const Section = ({ title, children }) => (
  <StatisticsSection>
    <StatisticsTitle>{title}</StatisticsTitle>
    {children}
  </StatisticsSection>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
