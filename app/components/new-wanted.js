import Ember from 'ember';

export default Ember.Component.extend({
  addNewWanted: false,
  actions: {
    wantedFormShow() {
      this.set('addNewWanted', true);
    },
    save1() {
      var newDate = new Date();
      var params = {
        want: this.get('want'),
        description: this.get('description'),
        poster: this.get('poster'),
        offer: this.get('offer'),
        posted: newDate
      };
      console.log(params);
      this.set('addNewWanted', false);
      this.set('want', "");
      this.set('description', "");
      this.set('poster', "");
      this.set('offer', "");
      this.sendAction('save2', params);
    }
  }
});
