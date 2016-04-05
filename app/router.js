import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('wanted', { path:'/wanted/:wanted_id' });
  this.route('forsale', { path:'/forsale/:forsale_id' });
});

export default Router;
