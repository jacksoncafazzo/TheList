import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(forsale, params) {
    this.sendAction('update', forsale, params);
    },
    delete(forsale) {
    if (confirm('Are you sure you want to delete this forsale?')) {
      console.log(forsale);
      this.sendAction('destroyForSale', forsale);
      }
    },
  }
});
