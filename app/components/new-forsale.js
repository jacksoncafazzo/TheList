import Ember from 'ember';

export default Ember.Component.extend({
  addNewForSale: false,
  actions: {
    forsaleFormShow() {
      this.set('addNewForSale', true);
    },
    save1() {
      var newDate = new Date();
      var params = {
        item: this.get('item'),
        description: this.get('description'),
        condition: this.get('condition'),
        price: this.get('price'),
        poster: this.get('poster'),
        posted: newDate
      };
      console.log(params);
      this.set('addNewForSale', false);
      this.set('item', "");
      this.set('description', "");
      this.set('condition', "");
      this.set('poster', "");
      this.set('price', "");
      this.sendAction('save2', params);
    }
  }
});
