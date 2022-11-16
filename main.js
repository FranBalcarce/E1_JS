// Array de objetos

const pizzas = [
  {
    nombre: "Jamon y Morrones",
    id: 1,
    ingredientes: ["masa", "salsa de tomate", "muzzarela", "jamon", "morrones"],
    precio: 1500,
  },

  {
    nombre: "Jamon y tomate",
    id: 2,
    ingredientes: [
      "masa",
      "salsa de tomate",
      "muzzarela",
      "jamon",
      "tomates",
      "oregano",
    ],
    precio: 1200,
  },
  {
    nombre: "Huevo",
    id: 3,
    ingredientes: ["masa", "salsa de tomate", "muzzarela", "huevos"],
    precio: 1000,
  },
  {
    nombre: "Muzzarela",
    id: 4,
    ingredientes: ["masa", "muzzarela"],
    precio: 800,
  },
  {
    nombre: "Napolitana",
    id: 5,
    ingredientes: [
      "masa",
      "salsa de tomate",
      "muzarella",
      "tomates",
      "oregano",
    ],
    precio: 1600,
  },
  {
    nombre: "Anchoas",
    id: 6,
    ingredientes: ["masa", "muzzarela", "anchoas"],
    precio: 1200,
  },
  {
    nombre: "Peperoni",
    id: 7,
    ingredientes: ["masa", "muzzarela", "salame"],
    precio: 1100,
  },
  {
    nombre: "Fugazzeta",
    id: 8,
    ingredientes: ["masa", "muzzarela", "cebolla"],
    precio: 1400,
  },
];

// console.log(pizzas);

// A) Las pizzas que tengan un id impar.

const pizzasImpares = pizzas.filter((pizza) => pizza.id % 2 !== 0);
// pizzasImpares.forEach((pizza) =>
//   console.log(`La pizza ${pizza.nombre} tiene un id impar.`)
// );
// console.log(pizzasImpares);

// B) ¿Hay alguna pizza que valga menos de $600?

const pizzasMenosDe600 = pizzas.some((pizza) => pizza.precio < 600);
console.log(`No hay ninguna pizza que su precio sea menos de $600`);

//  C) El nombre de cada pizza con su respectivo precio.

pizzas.forEach((pizza) =>
  console.log(`La pizza ${pizza.nombre} tiene un precio de $${pizza.precio}`)
);

//D) Todos los ingredientes de cada pizza/

pizzas.forEach((pizza) => {
  console.warn(`Los ingredientes de la pizza ${pizza.nombre} son:`);
  pizza.ingredientes.forEach((ingrediente) => console.log(ingrediente));
  console.log(" ");
});
