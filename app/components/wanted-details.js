import Ember from 'ember';
// import moment from 'moment';


export default Ember.Component.extend({
  // formattedDate: Ember.computed('wanted.posted', function(){
  //   return moment('wanted.posted').format("MM-DD:hh:mm:ss");
  // }.property('format', 'date')
  // ),
  actions: {
    update(wanted, params) {
    this.sendAction('update', wanted, params);
    },
    delete(wanted) {
    if (confirm('Are you sure you want to delete this wanted?')) {
      console.log(wanted);
      this.sendAction('destroyWanted', wanted);
      }
    },
  }
});
