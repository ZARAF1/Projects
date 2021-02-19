// map all menus

const menu={
    _courses:{
        appetizers:[],
        mains:[],
        desserts:[]
    },

    addDishToCourse(courseName,dishName,dishPrice){
        dish={
            name:[dishName],
            price:dishPrice
        }
        this._courses[courseName].push(dish)
        /*if (courseName==='appetizers'){
            this._courses.appetizers.push(dish)
        }
        else if(courseName==='mains'){
            this._courses.mains.push(dish)
        }
        else {
            this._courses.desserts.push(dish)
        }
*/
    },
    getRandomDishFromCourse(courseName){
        dishes=this._courses[courseName];
        randomIndex=Math.floor(Math.random()*dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal(){
        appetizer = this.getRandomDishFromCourse('appetizers');
        main = this.getRandomDishFromCourse('mains');
        dessert = this.getRandomDishFromCourse('desserts')
        totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`
    }
};
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Russian Salad', 4.5);
menu.addDishToCourse('appetizers', 'Pakistani Salad', 5);

menu.addDishToCourse('mains', 'Chicken Curry', 10);
menu.addDishToCourse('mains', 'Tandori Chicken', 15);
menu.addDishToCourse('mains', 'Biryani', 25);

menu.addDishToCourse('desserts', 'Ice Cream', 2);
menu.addDishToCourse('desserts', 'Lassi', 3);
menu.addDishToCourse('desserts', 'Kinder Kaako', 4);

let meal = menu.generateRandomMeal();
console.log(meal)
