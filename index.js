var randNumber1 = Math.floor(Math.random() * 6) + 1;
var ranNumSource = "images/dice" + randNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", ranNumSource);


var randNumber2 = Math.floor(Math.random() * 6) + 1;
var ranNumSource2 = "images/dice" + randNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", ranNumSource2);

if (ranNumSource > ranNumSource2) {
   document.querySelector("h1").innerHTML = "Player 1 wins 😜";
}else if (ranNumSource2 > ranNumSource) {
  document.querySelector("h1").innerHTML = "Player 2 wins 😜";

}else{
  document.querySelector("h1").innerHTML = "Its a draw ";
}
