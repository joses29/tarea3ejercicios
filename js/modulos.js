import saludar, { Saludar, PI, usuario } from "./constantes.js";
import { aritmetica as calculos } from "./aritmeticas.js";

console.log("Archivo modulos.js");
console.log(PI, usuario);
//console.log(aritmetica.sumar(4, 4));
console.log(calculos.sumar(4, 2));
console.log(calculos.restar(4, 2));
saludar();
let saludo = new Saludar();
saludo;

import React, { Component } from "react";
