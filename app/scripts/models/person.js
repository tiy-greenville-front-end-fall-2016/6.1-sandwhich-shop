var Backbone = require('backbone');

var Person = Backbone.Model.extend({
  defaults: {
    'gender': 'female',
    'hair': true,
    'birthday': new Date('1/1/1970')
  },
  initialize: function(){
    console.log('New person born');
  },
  makeSandwhich: function(){
    console.log('Hi, I made you a ' + this.get('type'));
  },
  sayName: function(){
    console.log(this.get('name'));
  }
});

var PersonCollection = Backbone.Collection.extend({
  model: Person
});

module.exports = {
  'Person': Person,
  'PersonCollection': PersonCollection
};
