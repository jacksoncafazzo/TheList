import Ember from 'ember';
import moment from 'moment';

export function formatDate(params/*, hash*/) {
  let date = moment(params[0]).format('hh:mm:ss LL');
  return date;
}

export default Ember.Helper.helper(formatDate);
