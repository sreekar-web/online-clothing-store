const products = [
    { name: "T-Shirt", price: 20, image: "tshirt.jpg" },
    { name: "Jeans", price: 50, image: "jeans.jpg" },
    // Add more products
];

const productsDiv = document.getElementById("products");

products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}" width="100">
        <p>$${product.price}</p>
    `;
    productsDiv.appendChild(productElement);
});