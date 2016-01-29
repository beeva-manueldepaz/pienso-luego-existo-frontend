import Ember from 'ember';

export function dateFormat(date) {
  let dateString = moment.unix(date).format('MM/DD/YYYY');
  return dateString;
}

export default Ember.Helper.helper(dateFormat);
