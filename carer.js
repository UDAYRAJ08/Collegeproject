const addToCartButton = document.getElementById("add-to-cart");
const cartItemsElement = document.getElementById("cart-items");
const totalElement = document.querySelector(".cart p");

let cartItems = [];

addToCartButton.addEventListener("click", () => {
	cartItems.push({ name: "Product Name", price: 99.99 });
	updateCart();
});

function updateCart() {
	cartItemsElement.innerHTML = "";
	let total = 0;
	cartItems.forEach((item, index) => {
		const li = document.createElement("li");
		li.innerHTML = `<span>${item.name}</span><span>$${item.price.toFixed(2)}</span>`;
		cartItemsElement.appendChild(li);
		total += item.price;
	});
	totalElement.textContent = `Total: $${total.toFixed(2)}`;
}