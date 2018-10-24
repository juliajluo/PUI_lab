function bunDetails(name, price, image, glazing, description) {
  this.name = name;
  this.price = price;
  this.image = image;
  this.glazing = glazing;
  this.description = description;
}



// get invididual prodcut details of the specifically clicked product 
function getProductDetails(clickedProduct) {
  // clickedProduct = 
  if (clickedProduct == "Original") {
    return new bunDetails("The Original", "$12.0", "images/original.png", "Default", "The original bunbun special cinnamon roll. It is made with a long standing home made recipe and that has been passed down the Bun family for years.");
  }

  if (clickedProduct == "Raspberry") {
    return new bunDetails("The Raspberry", "$15.00", "images/raspberry.png", "Default", "This bunbun roll is a chocolate cinnamon roll that has a perfectly gooey chocolate center.");
  }

  if (clickedProduct == "Chocolate") {
    return new bunDetails("The Chocolate", "$5.00", "images/chocolate.png", "Default", "The original bunbun special cinnamon roll. It is made with a long standing home made recipe and that has been passed down the Bun family for years.");
  }

  // return item
}



// first get the product element
// then when one is clicked, use getProductDetails to produce details 
$(document).ready(function() {
  // var product = document.getElementById("product");
  var item = JSON.parse(localStorage.getItem("savedBun"));
  $("#bun-name").html(item.name);
  $("#bun-price").text(item.price);
  $("#bun-image").attr("src", item.image);
  $("#bun-description").text(item.description);
  // $("#animal-img").attr("src", animal.image);

  function populateItemPage(event) {
    var item = getProductDetails(event.data.name);
    localStorage.setItem("savedBun", JSON.stringify(item));
    // console.log(item)
  }

  $("#original").click({name: "Original"}, populateItemPage);
  $("#raspberry").click({name: "Raspberry"}, populateItemPage);
  $("#chocolate").click({name: "Chocolate"}, populateItemPage);

  // cart attempts
  $("#button-cart").click(function() {
    console.log(item);
    // var item = 
    // localStorage.setItem("cartBun", JSON.stringify(item));

    $("#cart-item-name").html(item.name);
    $("#price-text").html(item.price);
  });

});



