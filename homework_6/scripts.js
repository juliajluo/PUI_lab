function bunDetails(name, price, image, glazing, description) {
  this.name = name;
  this.price = price;
  this.image = image;
  this.glazing = glazing;
  this.description = description;
}


//cart is an array 
//display whatever is in the array on cart page 
// var cart = [];

// var carousel = [new bunDetails("The Raspberry", "$15.00", "images/raspberry.png", "Default", "This bunbun roll is a chocolate cinnamon roll that has a perfectly gooey chocolate center."),new bunDetails("The Chocolate", "$5.00", "images/chocolate.png", "Default", "The original bunbun special cinnamon roll. It is made with a long standing home made recipe and that has been passed down the Bun family for years."),new bunDetails("The Chocolate", "$5.00", "images/chocolate.png", "Default", "The original bunbun special cinnamon roll. It is made with a long standing home made recipe and that has been passed down the Bun family for years.")];

// function populateCarousel() {
//   //put a item in each li 

// }


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
  //cart number
  var num = 0;
  $("cart-num").text(num);

  $("button-cart").click(function() {
      num +=1;
      //need to remove previous text first and then change to new num

  });
  //what item is if there is something already stored
  var item = JSON.parse(localStorage.getItem("savedBun"));

  $("#bun-name").html(item.name);
  $("#bun-price").text(item.price);
  $("#bun-image").attr("src", item.image);
  $("#bun-description").text(item.description);
  // $("#animal-img").attr("src", animal.image);

  function populateItemPage(event) {
    //making sure that item becomes the item you clicked
    var item = getProductDetails(event.data.name);
    //then you save it 
    localStorage.setItem("savedBun", JSON.stringify(item));
    // console.log(item)
  }

  //populating the pages
  $("#original").click({name: "Original"}, populateItemPage);
  $("#raspberry").click({name: "Raspberry"}, populateItemPage);
  $("#chocolate").click({name: "Chocolate"}, populateItemPage);

  // $("#button-cart").click(function() {
  //   console.log(item);
  //   // var item = 
  //   // localStorage.setItem("cartBun", JSON.stringify(item));

  //   $("#cart-item-name").html(item.name);
  //   $("#price-text").html(item.price);
  // });

// when you click the button , add the item to the cart array ?
  // localStorage.setItem("mycarousel", JSON.stringify(carousel));

  // $("#button-next").click(function() {
  //   var list = $("#carousel");
  //   //remove a list item FIGURE OUT how to remove
  //   $(this).parent().remove();
  //   //append the a new list item
  //   list.append("<li><a href = "+ carousel[n+1].image + "</li>");

  // });

  // $("#button-prev").click(function() {
  //   var list = $("#carousel");
  //   //remove a list item FIGURE OUT how to remove
  //   $(this).parent().remove();      //append the a new list item
  //   list.append("<li><a href = "+ carousel[n-1].image + "</li>");
  // });

 
});



