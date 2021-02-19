const menu = {
_courses:{
            appetizers:[],
            mains:[],
            desserts:[]
        },
//adding dishes to courses
    addDishToMenu (courseName,dishName,dishPrice){
        const dish={
            name:dishName,
            price:dishPrice
        }
        this._courses[courseName].push(dish)
    },
// after adding we will get random dishes from each course

    getRandomDish(courseName){
    dishes=this._courses[courseName];
    randomIndex=Math.floor(Math.random()*dishes.length);
    return dishes[randomIndex]
    },
    /// based on random dish we store each dish object into a variable
    genRandomMeal (){
    appetizers=this.getRandomDish('appetizers');
    mains=this.getRandomDish('mains');
    desserts=this.getRandomDish('desserts');
    totalPrice=appetizers.price + mains.price + desserts.price; // because appetizers, mains and desserts variable is an object
        // because a random dish is placed in it as an object
    console.log(`Your appetizer is ${appetizers.name}. Your main is ${mains.name}. Your dessert is ${desserts.name}. Total price is ${totalPrice}`)
    }
}

menu.addDishToMenu('appetizers', 'Caesar Salad', 4.25);
menu.addDishToMenu('appetizers', 'Russian Salad', 4.5);
menu.addDishToMenu('appetizers', 'Pakistani Salad', 5);

menu.addDishToMenu('mains', 'Chicken Curry', 10);
menu.addDishToMenu('mains', 'Tandori Chicken', 15);
menu.addDishToMenu('mains', 'Biryani', 25);

menu.addDishToMenu('desserts', 'Ice Cream', 2);
menu.addDishToMenu('desserts', 'Lassi', 3);
menu.addDishToMenu('desserts', 'Biryani', 4);

let meal = menu.genRandomMeal()


