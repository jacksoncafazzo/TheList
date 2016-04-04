import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
  return this.store.findRecord('wanted', params.wanted_id);
  },
  actions: {
    update(wanted, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key]!=="") {
          wanted.set(key,params[key]);
        }
      });
      wanted.save();
      this.transitionTo('wanted', wanted);
    },
    destroyWanted(wanted) {
      wanted.destroyRecord();
      this.transitionTo('index');
    }
  }
});
