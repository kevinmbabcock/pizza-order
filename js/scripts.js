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
    var crustFlavor = $("crustFlavor");

    var newPizza = new Pizza(crust, sauce, crustFlavor);
    var addTopping = new Topping();
    newPizza.toppings.push(addTopping);

    //console.log(newPizza.toppings);
    $(".newTopping").each(function() {
      var meatTopping = $(this).find(".meatTopping").val();
      //console.log(meatTopping);
      var veggieTopping = $(this).find(".veggieTopping").val();
      //console.log(veggieTopping);
      addTopping.meats.push(meatTopping);
      addTopping.veggies.push(veggieTopping);
    })
    console.log(addTopping.meats);
    console.log(addTopping.veggies);
  });
});
