function Pizza (crust, sauce, crustFlavor) {
  this.crust = crust;
  this.sauce = sauce;
  this.crustFlavor = crustFlavor;
  this.toppings = [];
}


$(document).ready(function() {

  $("form#newPizza").submit(function(event) {
    event.preventDefault();

    var crust = $("#crust").val();
    var sauce = $("#sauce").val();
    var crustFlavor = $("crustFlavor");

    var newPizza = new Pizza(crust, sauce, crustFlavor);

    //console.log(newPizza.toppings);
    $(".newTopping").each(function() {
      var topping = $(".topping").val();
      console.log(topping);
      newPizza.toppings.push(topping);
      console.log(newPizza.toppings);
    })
  });
});
