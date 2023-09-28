// Creating an object and adding properties to it
const circle = {};

circle.radius = 5;
circle["diameter"] = 10;
circle.circumference = circle.diameter * Math.PI;
circle["area"] = Math.PI * circle.radius ** 2;

// console.log(circle);


// Modifying a property using Dot & Bracket Notation
const mondayMenu = {
    cheesePlate: {
      soft: "Chèvre",
      semiSoft: "Gruyère",
      hard: "Manchego",
    },
    fries: "Curly",
    salad: "Cobb",
  };

mondayMenu.fries = "sweet potato"

function destructivelyupdateMondaymenu (object, key, value){
    object[key] = value;
    return object
}

tuesdayMenu = destructivelyupdateMondaymenu(mondayMenu, "salad", "caesar");

// console.log(tuesdayMenu)
// console.log(mondayMenu.salad);


// console.log(mondayMenu)

// Updating an object non-destructively
function nondestructivelyUpdateObject(object, key, value){
    let newObject = {...object};
    newObject[key] = value;
    return newObject;
}

sundayMenu = nondestructivelyUpdateObject(tuesdayMenu, "fries", "Shoestring")

console.log(sundayMenu);
