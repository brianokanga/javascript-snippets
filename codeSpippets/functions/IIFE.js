//Immediately invocked Function expression(IIFE)

function game () {
  let score = Math.random () * 10;
  console.log (score >= 5);
}

game ();

//IIFE example
(function () {
  let score = Math.random () * 10;
  console.log (score >= 5);
}) ();
