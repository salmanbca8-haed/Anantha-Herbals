// ================== PRODUCTS DATA ==================
const products = [
  {
    name: "Herbal Face Pack",
    price: 299,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Organic Green Tea",
    price: 199,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Aloe Vera Gel",
    price: 249,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Herbal Hair Oil",
    price: 399,
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Natural Soap",
    price: 149,
    image: "https://images.unsplash.com/photo-1607006483225-cc1b7c5d0c26?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Herbal Powder",
    price: 179,
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop"
  }
];

// ================== DOM ELEMENTS ==================
const productContainer = document.getElementById("productContainer");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");
const cartCount = document.getElementById("cartCount");

const cartDrawer = document.getElementById("cartDrawer");
const cartBtn = document.getElementById("cartBtn");
const closeCart = document.getElementById("closeCart");

let cart = [];

// ================== DISPLAY PRODUCTS ==================
function displayProducts() {
  productContainer.innerHTML = "";

  products.forEach((product, index) => {
    productContainer.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
          <h3>${product.name}</h3>
          <div class="price">₹${product.price}</div>
          <button class="add-btn" onclick="addToCart(${index})">
            Add To Cart
          </button>
        </div>
      </div>
    `;
  });
}

displayProducts();

// ================== CART FUNCTIONS ==================
function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price;
    cartItems.innerHTML += `
      <div class="cart-item">
        <h4>${item.name}</h4>
        <p>₹${item.price}</p>
      </div>
    `;
  });

  totalPrice.innerText = total;
  cartCount.innerText = cart.length;
}

// ================== CART DRAWER ==================
cartBtn.onclick = () => {
  cartDrawer.classList.add("active");
};

closeCart.onclick = () => {
  cartDrawer.classList.remove("active");
};

// ================== SCROLL ANIMATION (HEADER) ==================
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.style.background = "#1b5e20";
  } else {
    header.style.background = "rgba(0,0,0,0.4)";
  }
});

// ================== CONTACT FORM WHATSAPP ==================
document.querySelector('.contact button').onclick = function () {
  const name = document.querySelector('.contact input[type="text"]').value.trim();
  const email = document.querySelector('.contact input[type="email"]').value.trim();
  const message = document.querySelector('.contact textarea').value.trim();

  if (!name || !email || !message) {
    alert('Please fill all fields.');
    return;
  }

  const whatsappNumber = "919345019500"; // full number without + / spaces

  const whatsappMessage =
`🌿 New Customer Enquiry 🌿

Name: ${name}
Email: ${email}

Message:
${message}`;

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // More reliable on mobile than window.open
  window.location.href = whatsappURL;
};

// ================== CHECKOUT WHATSAPP ORDER ==================
document.querySelector(".checkout-btn").onclick = function () {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const customerName = prompt("Enter Your Name:");
  if (!customerName) return;

  const customerPhone = prompt("Enter Your Phone Number:");
  if (!customerPhone) return;

  const customerAddress = prompt("Enter Your Address:");
  if (!customerAddress) return;

  let itemsList = "";
  let total = 0;

  cart.forEach(item => {
    itemsList += `• ${item.name} - ₹${item.price}\n`;
    total += item.price;
  });

  const whatsappNumber = "919345019500"; // full number without + / spaces

  const now = new Date();
  const date = now.toLocaleDateString("en-IN");
  const time = now.toLocaleTimeString("en-IN");

  const message =
`🛒 NEW ORDER

👤 Customer: ${customerName}
📞 Phone: ${customerPhone}
🏠 Address:
${customerAddress}

📅 Date: ${date}
⏰ Time: ${time}

📦 Items:
${itemsList}

💰 Total: ₹${total}

🌿 Anantha Herbal Products`;

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Use redirect instead of window.open for mobile reliability
  window.location.href = whatsappURL;
};