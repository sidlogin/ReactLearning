import React, { StrictMode, Component } from 'react';
import { createRoot } from "react-dom/client"; 
import App from './App';
import './index.css';

// class RegularClass {}
// class ComponentClass extends Component {}

// const regularClass = new RegularClass();
// const componentClass = new ComponentClass();

// console.log('regularClass', regularClass);
// console.log('componentClass', componentClass);


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     speak() {
//         console.log(`I am ${this.name} and I am ${this.age} years old`);
//     }
// }

// const animal1 = new Animal('Casper', 10);
// animal1.speak();
// console.log(animal1);

// class Lion extends Animal {
//     constructor(name, age, color, speed) {
//         super(name, age)
//         this.color = color;
//         this.speed = speed;
//     }

//     roar() {
//         console.log(`ROOAR! I have ${this.color} fur and I can run ${this.speed} miles an hour.`)
//     }
// }

// // const animal2 = new Animal('King', 23);
// const lion1 = new Lion('King', 23, 'golden', 30);
// lion1.speak();
// lion1.roar();
// console.log(lion1);
