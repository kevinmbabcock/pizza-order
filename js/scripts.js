function Pizza (crust, sauce, crustFlavor) {
  this.crust = crust;
  this.sauce = sauce;
  this.crustFlavor = crustFlavor;
  this.toppings = [];
}


$(document).ready(function() {

  $("#addTopping").click(function() {
    $("#newTopping").append('<div class="newTopping">' +
      '<p>Select Topping</p>' +
      '<select class="form-control topping">' +
        '<option value="pepperoni">Pepperoni</option>' +
        '<option value="sausage">Sausage</option>' +
        '<option value="ham">Ham</option>' +
        '<option value="bacon">Bacon</option>' +
        '<option value="chicken">Chicken</option>' +
        '<option value="beef">Beef</option>' +
        '<option value="pork">Pork</option>' +
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

    //console.log(newPizza.toppings);
    $(".newTopping").each(function() {
      var topping = $(".topping").val();
      newPizza.toppings.push(topping);
    })
    console.log(newPizza.toppings);
  });
});
