Router.configure({
  layoutTemplate: 'defaultLayout',
  notFoundTemplate: 'notFoundTemplate'
});

Router.route('/', {
  template: 'home'
});