import moment from 'moment';

export const getFormattedStartTime = (
  startTime: string
): { date: string; time: string } => {
  const momentObj = moment(startTime);
  return {
    date: momentObj.format('ddd, DD MMM'),
    time: momentObj.format('h:mm a')
  };
};
