import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsTextNotification } from './Statistics.module';
const Notification = ({ message }) => (
  <StatisticsTextNotification>{message}</StatisticsTextNotification>
);

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
