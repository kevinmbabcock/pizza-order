function Pizza (crust, sauce, crustFlavor) {
  this.crust = crust;
  this.sauce = sauce;
  this.crustFlavor = crustFlavor;
  this.toppings = [];
}

function Topping () {
  this.meats = [];
  this.veggies = [];
}

Pizza.prototype.wholePizza = function() {
  return this.crust + ", " + this.sauce + ", " + this.crustFlavor;
}

Pizza.prototype.numberOfMeats = function() {
  return "Meats: " + this.toppings[0].meats.length;
}

Pizza.prototype.numberOfVeggies = function() {
  return "Veggies: " + this.toppings[0].veggies.length;
}



$(document).ready(function() {

  $("#addTopping").click(function() {
    $("#newTopping").append('<div class="newTopping">' +
      '<p>Select Meat Topping</p>' +
      '<select class="form-control meatTopping">' +
        '<option value="pepperoni">Pepperoni</option>' +
        '<option value="sausage">Sausage</option>' +
        '<option value="ham">Ham</option>' +
        '<option value="bacon">Bacon</option>' +
        '<option value="chicken">Chicken</option>' +
        '<option value="beef">Beef</option>' +
        '<option value="pork">Pork</option>' +
        '</select>' + '<p>Select Veggie Topping:</p>' +
        '<select class="form-control veggieTopping">' +
          '<option value="onions">Onions</option>' +
          '<option value="greenPeppers">Green Peppers</option>' +
          '<option value="mushrooms">Mushrooms</option>' +
          '<option value="bananaPeppers">Banana Peppers</option>' +
          '<option value="jalepenos">Jalepenos</option>' +
        '</select>' +
      '</div>');
  })

  $("form#newPizza").submit(function(event) {
    event.preventDefault();

    var crust = $("#crust").val();
    var sauce = $("#sauce").val();
    var crustFlavor = $("#crustFlavor").val();
  
    var newPizza = new Pizza(crust, sauce, crustFlavor);
    var addTopping = new Topping();
    newPizza.toppings.push(addTopping);


    $(".newTopping").each(function() {
      var meatTopping = $(this).find(".meatTopping").val();
      //console.log(meatTopping);
      var veggieTopping = $(this).find(".veggieTopping").val();
      //console.log(veggieTopping);
      addTopping.meats.push(meatTopping);
      addTopping.veggies.push(veggieTopping);
    })
    console.log(newPizza.crustFlavor);
    $("ul#pizza").append("<li><span class='pizza'>" + newPizza.wholePizza() + "<br />" + newPizza.numberOfMeats() + "<br />" + newPizza.numberOfVeggies() +  "</span></li>");
  });
});
