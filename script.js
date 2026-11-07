
const apiURL = "https://my.api.mockaroo.com/products.json?key=3badef50";

const productGrid = document.getElementById("productGrid");

fetch(apiURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {

        productGrid.innerHTML = "";

        for (let i = 0; i < 6 && i < products.length; i++) {

            let product = products[i];

            let card = document.createElement("div");
            card.className = "product-card";

            let id = document.createElement("p");
            id.textContent = 'id": ' + product.id + ',';

            let name = document.createElement("p");
            name.textContent = '"name": "' + product.name + '",';

            let price = document.createElement("p");
            price.textContent = '"price": ' + product.price + ',';

            let currency = document.createElement("p");
            currency.textContent = '"currency": "' + product.currency + '"';

            card.appendChild(id);
            card.appendChild(name);
            card.appendChild(price);
            card.appendChild(currency);

            productGrid.appendChild(card);
        }

    })
    .catch(function(error) {
        console.log("Error fetching products:", error);
        productGrid.textContent = "Unable to load products.";
    });
