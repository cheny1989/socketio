const events = require('events');

const ADD_ITEM = 'add-item';

class Shopping extends events.EventEmitter {
    constructor() {
        super()
        this.items = []
        this.init()
    }

    init(){
        this.on(ADD_ITEM, (item) => this.items.push(item));
    }

    addItem(item) {
        this.emit(ADD_ITEM, item)
    }
    printAll() {
        this.items.forEach(item=>console.log(item))
    }
}

const shoppingCart = new Shopping();
shoppingCart.addItem('car');
shoppingCart.addItem('computer');
shoppingCart.printAll();

const colorOfCar = new Shopping();
colorOfCar.addItem('red');
colorOfCar.addItem('yellow');
colorOfCar.addItem('blue');
colorOfCar.addItem('black');
colorOfCar.printAll();

module.exports= {
    addItem: (item)=>shoppingCart.addItem(item),
    printAll: ()=>shoppingCart.printAll()
}

// node shopping.js