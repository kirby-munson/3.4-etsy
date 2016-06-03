(function(){
  "usestrict"




// // Find the average of all items in array
// // -------------------------------------------------
var length = items.length;

var thePrice = items.reduce(function(previousPrice, currentPrice) {
  return {"price": previousPrice.price + currentPrice.price};
  return (thePrice.price / length);
});

console.log('The average price is', (thePrice.price / length ).toFixed(2));

// -------------------------------------------------------





// Find the items that have prices between $14.00 - $18.00 and list the names of those items
// ------------------------------------------------------

var productList = items.filter(function(products, index, array){
       if(products.price > 14.00 && products.price < 18.00){
        return true;
   }else{
     return false;
   }
 });
console.log("Items that cost between $14.00 USD and $18.00 USD", productList)


 // ---------------------------------------------------------




 // Find the item with a "GBP" currency code and print its name and price
 // ---------------------------------------------------------

 var productGBP = items.filter(function(products, index, array){
        if(products.currency_code == 'GBP'){
         return true;
    }else{
      return false;
    }
  });
console.log(productGBP[0].title, '£', productGBP[0].price);



// Find each item that is made of wood
// --------------------------------------------------------------
//

var productWood = items.filter(function(products, index, array){
  return products.materials.indexOf("wood") >= 0;

});

var ofWood = productWood.forEach(function(products, index, array){
  console.log(products.title + '' +  " is made of wood");
});

// ----------------------------------------------------------------
//
//
// Find which items are made of eight or more materials
// ----------------------------------------------------------------


var productMaterialsEight = items.filter(function(products, index, array){
       if(products.materials.length >= 8){
        return true;
   }else{
     return false;
   }
 });

var listofMaterials = productMaterialsEight.forEach(function(products, index, array){
  console.log(products.title + ' ' +  " has" + " " + products.materials.length + " " + "materials:");
  console.log(products.materials)
});


// How many items were made by sellers
// -------------------------------------------------------------------

var productSellers = items.filter(function(products, index, array){
       if(products.who_made == 'i_did'){
        return true;
   }else{
     return false;
   }
 });

console.log(productSellers.length + " " + "were made by their sellers");







}());
