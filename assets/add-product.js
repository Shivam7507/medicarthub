document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      title: document.getElementById("title").value,
      price: document.getElementById("price").value,
      description: document.getElementById("description").value,
    };

    fetch("/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
