import moment from 'moment';

export const formatTime = time => {
  const tempTime = moment.duration(time);
  
  return `${tempTime.hours()}: ${tempTime.minutes()}`;
}