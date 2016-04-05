import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      wanteds: this.store.findAll('wanted'),
      forsales: this.store.findAll('forsale')
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
