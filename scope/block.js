function fruits() {
  if (true) {
    var fruit = "Apple"; // function scope
    let fruit2 = "Kiwi"; //Block Scope
    const fruit3 = "Banana"; //Block Scope
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit);
  //   console.log(fruit2); //Error message
  //   console.log(fruit3);
}
fruits();
