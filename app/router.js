import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contact', { path: 'contactar' });
  this.route('content/disclaimer');
  //this.route('show',{ path: 'show' });
  this.route('show',{ path: 'show/:id' });
  this.route('add');
  this.route('edit',{ path: 'edit/:id' });
  //this.route('edit',{ path: 'edit' });
  this.route('remove');
  this.route('showAll',{ path: '' });
});

export default Router;
