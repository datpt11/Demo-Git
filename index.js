var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');
var dog = new Dog('Tom');
var tom = new Cat();
var cat = new Cat();
var mouse = new Mouse('Mickey');
dog.eat(tom);
cat.eat(mouse);
try {
    cat.eat(dog);
} catch (error) {
    console.log('Errot while cat eating a dog')
}

console.log(cat);
console.log(dog);
dog.sayHi();
