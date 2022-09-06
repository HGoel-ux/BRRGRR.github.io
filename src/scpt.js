//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");

  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  // Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");

  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  // Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.querySelector("#tomato");

  if (state.Tomatoes) {
    tomato.style.display = "inherit";
  } else {
    tomato.style.display = "none";
  }
}

function renderOnions() {
  // Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.querySelector("#onion");

  if(state.Onions) {
    onion.style.display = "inherit";
  }
  else {
    onion.style.display = "none";
  }
}

function renderLettuce() {
  // Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");

  if(state.Lettuce) {
    lettuce.style.display = "inherit";
  }
  else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
}

// Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
}

// Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
}

// Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
}

//Add/Remove the class active to the buttons based on state
function renderButtons(){
  if(state.Patty)
    document.querySelector(".btn-patty").classList.add("active") 
  else
    document.querySelector(".btn-patty").classList.remove("active") 
  if(state.Tomatoes)
    document.querySelector(".btn-tomatoes").classList.add("active") 
  else
    document.querySelector(".btn-tomatoes").classList.remove("active") 
  if(state.Cheese)
    document.querySelector(".btn-cheese").classList.add("active") 
  else
    document.querySelector(".btn-cheese").classList.remove("active")
  if(state.Onions)
    document.querySelector(".btn-onions").classList.add("active") 
  else
    document.querySelector(".btn-onions").classList.remove("active") 
  if(state.Lettuce)
    document.querySelector(".btn-lettuce").classList.add("active") 
  else
    document.querySelector(".btn-lettuce").classList.remove("active") 
}

//Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard(){
  if(!state.Patty)
    document.getElementsByClassName("items")[0].innerHTML = " "
  else
    document.getElementsByClassName("items")[0].innerHTML = "Patty"
  if(!state.Cheese)
    document.getElementsByClassName("items")[1].innerHTML = " "
  else
    document.getElementsByClassName("items")[1].innerHTML = "Cheese"
  if(!state.Tomatoes)
    document.getElementsByClassName("items")[2].innerHTML = " "
  else
    document.getElementsByClassName("items")[2].innerHTML = "Tomatoes"
  if(!state.Onions)
    document.getElementsByClassName("items")[3].innerHTML = " "
  else
    document.getElementsByClassName("items")[3].innerHTML = "Onions"  
  if(!state.Lettuce)
    document.getElementsByClassName("items")[4].innerHTML = " "
  else
    document.getElementsByClassName("items")[4].innerHTML = "Lettuce"
} 

//Display the calculated price based on ingredients
function renderPrice(){
  var price = 20
  if(state.Patty)
    price = ingredients.Patty + price
  if(state.Cheese)
    price = ingredients.Cheese+ price
  if(state.Tomatoes)
    price += ingredients.Tomatoes
  if(state.Onions)
    price+= ingredients.Onions
 if(state.Lettuce)
    price += ingredients.Lettuce
  document.querySelector(".price-details").innerHTML = "INR "+price
}
