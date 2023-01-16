const addProduct = document.getElementById("add-product");
const productList = document.getElementById("productList");

// input field
const pName = document.getElementById("product_name");
const image = document.getElementById("image_url");
const price = document.getElementById("product_price");
const details = document.getElementById("product_details");

// product Array
const products = JSON.parse(localStorage.getItem("products")) || [];

// createElement
const createElement = (nameValue, imageValue, priceValue, detailsValue) => {
    const productCol = document.createElement("div");
    productCol.classList.add("col-lg-3");
    productCol.classList.add("mb-lg-3");
    productCol.classList.add("mb-sm-3");


    // card body
    const card = document.createElement("div");
    card.classList.add("card");

    // create image
    const createImg = document.createElement("img");
    createImg.setAttribute("src", imageValue);
    createImg.classList.add("card-img-top");

    // card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // product price
    const createPrice = document.createElement("h5");
    createPrice.innerText = priceValue;

    // product title
    const createProductName = document.createElement("h3");
    createProductName.classList.add("card-title");
    createProductName.innerText = nameValue;

    // product details
    const createProductDetails = document.createElement("p");
    createProductDetails.classList.add("card-text");
    createProductDetails.innerText = detailsValue;

    cardBody.append(createPrice, createProductName, createProductDetails);
    card.append(createImg, cardBody);

    productCol.appendChild(card);

    productList.appendChild(productCol);

}

// save to localStorage
const addProductFun = (nameValue, imageValue, priceValue, detailsValue) => {
    
    products.push({
        name: nameValue,
        image: imageValue,
        price: priceValue,
        text: detailsValue
    });

    // add products local strorage
    localStorage.setItem("products", JSON.stringify(products))
}


// Main click function
addProduct.addEventListener("submit", function( event ) {
    
    // prevent form submition
    event.preventDefault();

    // input value
    const nameValue = pName.value;
    const imageValue = image.value;
    const priceValue = price.value;
    const detailsValue = details.value;

    createElement(nameValue, imageValue, priceValue, detailsValue);

    addProductFun(nameValue, imageValue, priceValue, detailsValue);

    // empty the input field after submit 
        pName.value = "";
        image.value = "";
        price.value = "";
        details.value = "";

});


// show product from local strorage
products.forEach(product => {

    createElement(product["name"], product["image"], product["price"], product["text"]);
});