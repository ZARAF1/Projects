let menu = {
    _courses:{
        appetizers:[],
        mains:[],
        desserts:[]
    },

    addDishToCourse(name,price,courseName){
        dish={name,
                price
                };
             this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName){
        dishes=this._courses[courseName];
        randomIndex=Math.floor(Math.random()*dishes.length);
        return dishes[randomIndex];
    },
    getRandomMealFromCourse(){
        appetizers=this.getRandomDishFromCourse('appetizers');
        mains=this.getRandomDishFromCourse('mains');
        desserts=this.getRandomDishFromCourse('desserts')
        totalPrice=appetizers.price + mains.price + desserts.price;
        console.log(`You have ordered ${appetizers.name}, ${mains.name}, ${desserts.name}. Total price is ${totalPrice}`)
    }

}
menu.addDishToCourse('Salad',10,'appetizers');
menu.addDishToCourse('Fruits',10,'appetizers');
menu.addDishToCourse('Poppadums',10,'appetizers');

menu.addDishToCourse('Curry',20,'mains');
menu.addDishToCourse('Karahi',20,'mains');
menu.addDishToCourse('Couscous',20,'mains');

menu.addDishToCourse('Ice Cream',4,'desserts');
menu.addDishToCourse('Cake',2,'desserts');
menu.addDishToCourse('Drink',3,'desserts');

let meal = menu.getRandomMealFromCourse()