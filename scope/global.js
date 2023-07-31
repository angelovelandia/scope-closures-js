var a; //Declarando
var b = "b"; //Asignando
b = "bb"; //reasignacion
var a = "aa"; //redeclaracion

//Global Scope
var fruit = "Apple"; //Global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}
bestFruit();

function countries() {
  country = "Colombia"; //Global
  console.log(country);
}
countries();
console.log(country);
