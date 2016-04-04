import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      wanteds: this.store.findAll('wanted'),
    });
  },
  actions: {
    save3(params) {
      var newWanted = this.store.createRecord('wanted', params);
      newWanted.save();
      this.transitionTo('index');
    }
  }
});
