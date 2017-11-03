function Pizza (size, crust, sauce, crustFlavor) {
  this.size = size
  this.crust = crust;
  this.sauce = sauce;
  this.crustFlavor = crustFlavor;
  this.toppings = [];
  this.price = 12;
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

Pizza.prototype.calculatePrice = function() {
  if (this.size === "Large") {
    this.price += 2;
  } else if (this.size === "X-Large") {
    this.price += 4;
  } else if (this.size === "Family") {
    this.price += 8;
  }

  if (this.crust === "Stuffed Crust" || this.crust === "Pan Pizza") {
    this.price +=2;
  }

  if (this.crustFlavor !== "No Crust Flavor") {
    this.price += 2;
  }

  if (this.toppings[0].meats.length > 1) {
    for (index = 2; index < this.toppings[0].meats.length; index++) {
      this.price += 1;
    }
  }

  if (this.toppings[0].veggies.length > 1) {
    for (index = 2; index < this.toppings[0].veggies.length; index++) {
      this.price += 0.5;
    }
  }
  return this.price;
}


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

  var allPizzas = [];
  $("form#newPizza").submit(function(event) {
    event.preventDefault();

    $(".orderInfo").show();
    $(".pizzas").show();
    $(".toCustomer").hide();
    var toCustomer = $("input:radio[name=toCustomer]:checked").val();
    var size = $("#size").val();
    var crust = $("#crust").val();
    var sauce = $("#sauce").val();
    var crustFlavor = $("#crustFlavor").val();

    if(!$('#showAddress li').length) {
      if (toCustomer === "delivery") {
        $(".address").show();
      } else {
        $("#showAddress").append("<li>Pickup</li>");
        $(".addressShow").show();
      }
    }



    var newPizza = new Pizza(size, crust, sauce, crustFlavor);
    var addTopping = new Topping();
    newPizza.toppings.push(addTopping);
    allPizzas.push(newPizza);

    $(".newTopping").each(function() {
      var meatTopping = $(this).find(".meatTopping").val();

      var veggieTopping = $(this).find(".veggieTopping").val();
      if (meatTopping !== "none") {
        addTopping.meats.push(meatTopping);
      }
      if (veggieTopping !== "none") {
      addTopping.veggies.push(veggieTopping);
      }
    })

    var newPizzaPrice = newPizza.calculatePrice();
    $("ul#pizza").append("<li><span class='clickable'>Pizza: </span><span class='pizza'>" + newPizza.size + " $" + newPizzaPrice + "<br />      " + newPizza.numberOfMeats() + "<br />     " + newPizza.numberOfVeggies() +  "</span></li>");

    var totalPrice = 0;
    for (index = 0; index < allPizzas.length; index++) {
      totalPrice += allPizzas[index].price;
    }
    $("#totalCost").text("$" + totalPrice);

    $("#address").submit(function(event) {
      event.preventDefault();
      $(".addressShow").show();
      var firstName = $("#firstName").val();
      var lastName = $("#lastName").val();
      var street = $("#street").val();
      var city = $("#city").val();
      var state = $("#state").val();
      var zip = $("#zip").val();

      $("#showAddress").append("<li>" + firstName + " " + lastName + " <br />" + street + " <br />" + city + ", " + state + " <br />" + zip + "</li>");
      $(".address").hide();
    })

    $(".clickable").last().click(function() {
      $("#showPizza").show();
      $(".size").text(newPizza.size);
      $(".crust").text(newPizza.crust);
      $(".sauce").text(newPizza.sauce);
      $(".flavor").text(newPizza.crustFlavor);
      $(".meat").text(newPizza.toppings[0].meatString());
      $(".veggie").text(newPizza.toppings[0].veggieString());
      $(".price").text("$" + newPizza.price);
    })
  });

});
