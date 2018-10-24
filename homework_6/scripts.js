function bunDetails(name, price, image, glazing) {
  this.name = name;
  this.price = price;
  this.image = image;
  this.glazing = glazing;
  // this.type = "Original";
}



// get invididual prodcut details of the specifically clicked product 
function getProductDetails(clickedProduct) {
  // clickedProduct = 
  if (clickedProduct == "Original") {
    return new bunDetails("The Original", "$12.0", "images/original.png", "Default");
  }

  if (clickedProduct == "Raspberry") {
    return new bunDetails("The Raspberry", "$15.00", "images/raspberry.png", "Default");
  }

  if (clickedProduct == "Chocolate") {
    return new bunDetails("The Chocolate", "$5.00", "images/chocolate.png", "Default");
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
  // $("#animal-img").attr("src", animal.image);

  function populateItemPage(event) {
    var item = getProductDetails(event.data.name);
    localStorage.setItem("savedBun", JSON.stringify(item));

    console.log(item)
  }

  $("#original").click({name: "Original"}, populateItemPage);
  $("#raspberry").click({name: "Raspberry"}, populateItemPage);
  $("#raspberry").click({name: "Raspberry"}, populateItemPage);
});

