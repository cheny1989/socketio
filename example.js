const events = require('events')
const resturant = new events.EventEmitter();

const mealReadyHandler = () => console.log("Meal is ready - mealReadyHandler");
resturant.on('meal-ready', mealReadyHandler)

const mealFunction = (meal, table)=> console.log(`Burger with ${meal} - ready for table num: ${table}`);
resturant.on('meal-ready', mealFunction); // 'potato'

resturant.on('meal-ready', ()=>console.log("Meal is ready 1"));
resturant.on('meal-ready', ()=>console.log("Meal is ready 2"));
resturant.on('meal-ready', ()=>console.log("Meal is ready 3"));
resturant.addListener('meal-ready', ()=>console.log("Meal is ready - addListener")); // same use "on"

resturant.on('pizza', ()=>console.log("I like a pizza"));

const resturantRady = (service) => console.log(`go go go ${service}`);
resturant.once('open', resturantRady); // 'once' - print only one 

resturant.emit('meal-ready', 'potato', 1); // actually 'potato' is a 'meal' and '1' is a 'table'
resturant.emit('open', 'blabla'); // actually 'blbla' is a 'resturantRady'
resturant.emit('pizza');


// node example.js