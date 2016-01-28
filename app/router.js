import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contact', { path: 'contactar' });
  this.route('content/disclaimer');
  this.route('show',{ path: 'show/:id' });
  this.route('add');
  this.route('edit');
  this.route('remove');
});

export default Router;
