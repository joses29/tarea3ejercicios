export const PI = Math.PI;

export let usuario = "Jose";

const password = "qwerty";
//export default password;

const hello = () => console.log("Hola");

export default function saludar() {
  console.log("Hola Modulos +ES6");
}

export class Saludar {
  constructor() {
    console.log("Hola Clases +ES6");
  }
}
