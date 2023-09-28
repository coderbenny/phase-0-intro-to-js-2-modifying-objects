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

  