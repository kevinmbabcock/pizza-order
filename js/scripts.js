function Pizza (crust, sauce, crustFlavor) {
  this.crust = crust;
  this.sauce = sauce;
  this.crustFlavor = crustFlavor;
  this.toppings = [];
}


$(document).ready(function() {

  $("form#newPizza").submit(function(event) {
    event.preventDefault();

    alert("test");
    var crust = $("#crust").val();
    var sauce = $("#sauce").val();
    var crustFlavor = $("crustFlavor");

    var newPizza = new Pizza(crust, sauce, crustFlavor);

    console.log(newPizza.crust);
    console.log(newPizza.sauce);
    console.log(newPizza.crustFlavor);
  });
});
