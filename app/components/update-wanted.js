import Ember from 'ember';

export default Ember.Component.extend({
  updateWantedForm: false,
  actions: {
    showUpdateForm(){
      this.set('updateWantedForm', true);
    },
    update(wanted) {
      var newDate = new Date();
      var params = {
        want: this.get('want'),
        description: this.get('description'),
        poster: this.get('poster'),
        offer: this.get('offer'),
        posted: newDate
      };
      this.set('updateWantedForm', false);
      this.sendAction('update', wanted, params);
    }
  }
});
