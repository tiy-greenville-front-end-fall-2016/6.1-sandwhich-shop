var Person = require('./models/person').Person;
var PersonCollection = require('./models/person').PersonCollection;

var jimmy = new Person({'name': 'Jimmy', 'gender': 'male', 'type': 'sub'});
var wendy = new Person({'name': 'Wendy', 'type': 'burger'});
var mike = new Person({'name': 'Mike', 'gender': 'male', 'type': 'hoagie'});
var jason = new Person({'name': 'Jason', 'gender': 'male', 'type': 'sandwhich'});

// console.log(jimmy.get('name'));
// console.log(jimmy.get('birthday'));
//
// jimmy.set('birthday', new Date('6/1/1983'));
// console.log(jimmy.get('birthday'));

jimmy.makeSandwhich();
wendy.makeSandwhich();

var sandwhichMakers = new PersonCollection([
  {'name': 'John', 'gender': 'male', 'type': 'sub'},
  {'name': 'Sully', 'type': 'burger'}
]);

console.log(sandwhichMakers);

sandwhichMakers.each(function(person){
  person.sayName();
});
