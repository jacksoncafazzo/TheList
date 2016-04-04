import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  formattedDate: Ember.computed('wanted.posted', function(){
    return moment('wanted.posted').format("MM-DD:hh:mm:ss");
  }.property('format', 'date')
  )
});
