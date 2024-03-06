// File: assets/add-product.js

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const apiKey = "a45cfb770c24c8cbd4b725bd0177e8a8";
    const apiPassword = "your-api-password";
    const shopName = "your-shop-name";
    const apiUrl = `https://${shopName}.myshopify.com/admin/api/2022-01/products.json`;

    const formData = {
      product: {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        description: document.getElementById("description").value,
        // Add other product details as needed
      },
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": apiPassword,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Product added successfully:", data);
        // Handle success (e.g., show a success message to the user)
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        // Handle errors (e.g., show an error message to the user)
      });
  });
});
