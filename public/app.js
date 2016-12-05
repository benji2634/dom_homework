var createParentContainer = function() {
  var catDetails = document.createElement('ul');
  return catDetails;
};

var createListNameElement = function(catName) {
  var nameElement = document.createElement('li');
  nameElement.innerText = catName;
  return nameElement;
};

var createListFoodElement = function(catFood) {
  var foodElement = document.createElement('li');
  foodElement.innerText = catFood;
  return foodElement;
};

var appendElements = function(cats, catDetails, nameElement, foodElement) {
  catDetails.appendChild(nameElement);
  catDetails.appendChild(foodElement);
  cats.append(catDetails);
};

var addCat = function(name, food) {
  var catDetails = createParentContainer();
  var nameElement = createListNameElement(name);
  var foodElement = createListFoodElement(food);
  var cats = document.querySelector('#cats');
  appendElements(cats, catDetails, nameElement, foodElement);
};

var app = function(){
  addCat("Name: Fluffy", "Favourite food: Bear");
}

window.onload = app;