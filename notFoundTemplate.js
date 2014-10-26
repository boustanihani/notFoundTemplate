Router.configure({
  
  yieldTemplates: {
    'putInRegion1': {
      to: 'region1'
    }
  },
  
  layoutTemplate: 'defaultLayout',
  
  notFoundTemplate: 'notFoundTemplate'
});

Router.route('/', {
  template: 'home'
});