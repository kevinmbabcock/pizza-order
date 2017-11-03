function Pizza (size, crust, sauce, crustFlavor) {
  this.size = size
  this.crust = crust;
  this.sauce = sauce;
  this.crustFlavor = crustFlavor;
  this.toppings = [];
  this.price = 20;
}

function Topping () {
  this.meats = [];
  this.veggies = [];
}

Pizza.prototype.wholePizza = function() {
  return this.size + ", " + this.crust + ", " + this.sauce + ", " + this.crustFlavor;
}

Pizza.prototype.numberOfMeats = function() {
  return "Meats: " + this.toppings[0].meats.length;
}

Pizza.prototype.numberOfVeggies = function() {
  return "Veggies: " + this.toppings[0].veggies.length;
}

Topping.prototype.meatString = function() {
  var toppings = this.meats[0];
  for (index = 1; index < this.meats.length; index++) {
    toppings += ", " + this.meats[index];
  }
  return toppings;
}

Topping.prototype.veggieString = function() {
  var toppings = this.veggies[0];
  for (index = 1; index < this.veggies.length; index++) {
    toppings += ", " + this.veggies[index];
  }
  return toppings;
}

var calculatePrice


$(document).ready(function() {

  $("#addTopping").click(function() {
    $("#newTopping").append('<div class="newTopping">' +
      '<p>Select Meat Topping</p>' +
      '<select class="form-control meatTopping">' +    '<option value="none">Select one:</option>' +
        '<option>Pepperoni</option>' +
        '<option>Sausage</option>' +
        '<option>Ham</option>' +
        '<option>Bacon</option>' +
        '<option>Chicken</option>' +
        '<option>Beef</option>' +
        '<option>Pork</option>' +
        '</select>' + '<p>Select Veggie Topping:</p>' +
        '<select class="form-control veggieTopping">' + '<option value="none">Select one:</option>' +
          '<option>Onions</option>' +
          '<option>Green Peppers</option>' +
          '<option>Mushrooms</option>' +
          '<option>Banana Peppers</option>' +
          '<option>Jalepenos</option>' +
        '</select>' +
      '</div>');
  })

  $("form#newPizza").submit(function(event) {
    event.preventDefault();

    var size = $("#size").val();
    var crust = $("#crust").val();
    var sauce = $("#sauce").val();
    var crustFlavor = $("#crustFlavor").val();

    var newPizza = new Pizza(size, crust, sauce, crustFlavor);
    var addTopping = new Topping();
    newPizza.toppings.push(addTopping);


    $(".newTopping").each(function() {
      var meatTopping = $(this).find(".meatTopping").val();
      //console.log(meatTopping);
      var veggieTopping = $(this).find(".veggieTopping").val();
      //console.log(veggieTopping);
      if (meatTopping !== "none") {
        addTopping.meats.push(meatTopping);
      }
      if (veggieTopping !== "none") {
      addTopping.veggies.push(veggieTopping);
      }
    })


    $("ul#pizza").append("<li><span class='pizza'>" + newPizza.size + "<br />" + newPizza.numberOfMeats() + "<br />" + newPizza.numberOfVeggies() +  "</span></li>");

    $(".pizza").last().click(function() {
      $("#showPizza").show();
      $(".size").text(newPizza.size);
      $(".crust").text(newPizza.crust);
      $(".sauce").text(newPizza.sauce);
      $(".flavor").text(newPizza.crustFlavor);
      $(".meat").text(newPizza.toppings[0].meatString());
      $(".veggie").text(newPizza.toppings[0].veggieString());
    })
  });
});
