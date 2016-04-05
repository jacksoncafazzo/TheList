import Ember from 'ember';

export default Ember.Component.extend({
  updateForSale: false,
  actions: {
    updateForSale(){
      this.set('updateForSale', true);
    },
    update(forsale) {
      var newDate = new Date();
      var params = {
        item: this.get('item'),
        description: this.get('description'),
        condition: this.get('condition'),
        price: this.get('price'),
        poster: this.get('poster'),
        posted: newDate
      };
      this.set('updateForSale', false);
      this.sendAction('update', forsale, params);
    }
  }
});
