import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
  return this.store.findRecord('forsale', params.forsale_id);
  },
  actions: {
    update(forsale, params) {
      console.log(forsale);
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key]!=="") {
          forsale.set(key,params[key]);
        }
      });
      forsale.save();
      this.transitionTo('forsale', forsale);
    },
    destroyForSale(forsale) {
      forsale.destroyRecord();
      this.transitionTo('index');
    }
  }
});
