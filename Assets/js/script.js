function addToCart(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');
    //get localstorage cart product list
    getProductsFromLocalStorage();
    //update cart product list
    addProduct();
    //update number of items
    updateCartCount(cartIsEmpty);
    //update total price
    updateCartTotal(trigger.data('price'), true);
    //show cart
    cartWrapper.removeClass('empty');
  }

  function addProduct() {

    productId = productId + 1;
    var productName = document.getElementById('reebok').innerHTML;
    var productPrice = document.getElementById('p_price').getAttribute('data- value');
    var image = document.getElementById("main_img").src;
    var productSize = document.getElementById('size').value;
    var productColor = document.getElementById('color').value;
    value = parseFloat(productPrice).toFixed(2);

    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="'+ image +'" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">' + productName + '</a></h3><span class="price">'+ productPrice +'</span><div class="actions"><a href="#0" class="delete-item">Delete</a><a class="delete-item">'+ productSize +'</a><a class="delete-item">'+ productColor +'</a><div class="quantity"><label for="cd-product-' + productId + '">Qty</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');

    cartList.append(productAdded);

    let products = [{'productId' : productId + 1, image : image, name : productName, price: productPrice, size: productSize, color: productColor}];

    localStorage.setItem('products', JSON.stringify(products));

}

function getProductsFromLocalStorage() {
  const cs = localStorage.getItem('products');
  if (cs === null) {
    addProduct();
  } else {
    $.each(cs.products, function(key, value) {
      cartList.prepend($('<li class="product"><div class="product-image"><a href="#0"><img src="'+ value.image +'" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">' + value.name + '</a></h3><span class="price">${value.price}</span><div class="actions"><a href="#0" class="delete-item">Delete</a><a class="delete-item">' + value.size + '</a><a class="delete-item">' + value.color + '</a><div class="quantity"><label for="cd-product-' + value.productId + '">Qty</label><span class="select"><select id="cd-product-' + value.productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>'));
    });
  }
}

function addProduct(){
    let products = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
    }
    products.push({'productId' : productId + 1, image : '<imageLink>'});
    localStorage.setItem('products', JSON.stringify(products));
}
addProduct();


function removeProduct(productId){

    //will add some  logics later

    // strore products in local storage

    let storageProducts = JSON.parse(localStorage.getItem('products'));
    let products = storageProducts.filter(product => product.productId !== productId );
    localStorage.setItem('products', JSON.stringify(products));
};
removeProduct();