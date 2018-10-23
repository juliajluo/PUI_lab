function bunDetails(name, price, image, glazing) {
  this.name = name;
  this.price = price;
  this.image = "roll.png";
  this.glazing = glazing;
  // this.type = "Original";
}



// get invididual prodcut details of the specifically clicked product 
function getProductDetails(clickedProduct) {
  // clickedProduct = 
  if (clickedProduct == "Original") {
    return new bunDetails("The Original", "$12.0", "original.png", "Default");
  }

  if (clickedProduct == "Raspberry") {
    return new bunDetails("The Raspberry", "$15.00", "raspberry.png", "Default");
  }

  if (clickedProduct == "Chocolate") {
    return new bunDetails("The Chocolate", "$5.00", "chocolate.png", "Default");
  }

  // return item
}

// first get the product element
// then when one is clicked, use getProductDetails to produce details 
$(document).ready(function() {
  // var product = document.getElementById("product");

  $("#product").click(function() {
    var item = getProductDetails();

    console.log(item.name)

    $("#bun-name").text(item.name);
    $("#bun-price").text(item.price);
    $("#bun-price").text("18.00");

    $("#bun-image").attr("src", item.image);
  });
});
