let cartCount = 0;

const boxes = document.querySelectorAll(".box");
const cart = document.querySelector(".nav-cart");

boxes.forEach(box => {
    const actions = box.querySelector(".box-actions");

    if (actions) {
        const btn = document.createElement("span");
        btn.innerText = "Add to Cart";
        btn.classList.add("add-cart");

        actions.appendChild(btn);

        btn.addEventListener("click", () => {
            cartCount++;
            cart.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;
        });
    }
});

// ===== SEE MORE MODAL FUNCTION =====

const seeMoreBtns = document.querySelectorAll(".see-more");

const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close-btn");

const modalImg = document.getElementById("modal-img");
const productData = {
    "Fashion": "Latest trending fashion styles for men and women.",
    "Health & Personal Care": "Best products for your daily care and hygiene.",
    "Furniture": "Modern and comfortable furniture for your home.",
    "Mobiles & Tablets": "Top smartphones and tablets at best prices.",
    "Beauty Picks": "Top beauty and makeup products.",
    "Pet Care": "Everything for your pets.",
    "TVs & Appliances": "Latest electronics and appliances.",
    "Grocery": "Daily essentials and fresh groceries.",
    "Up to 60% off | Cars, bike parts & accessories": "Great deals on car 🚗 and bike 🏍️ accessories. Helmets, tools, parts and more.",

"Starting ₹250 | Playful rides for every kids": "Fun rides for kids 🚲 including toy cars, bikes and ride-ons starting at ₹250.",

"Up to 60% off | On any speakers": "Top quality speakers 🔊 with deep bass and amazing sound at up to 60% off.",

"Min. 50% off | On watches": "Stylish watches ⌚ for men and women with great discounts and premium designs.",

"Best Sellers in Laptop & Accessories": "Top laptops 💻, keyboards, mouse and accessories loved by users.",

"Starting ₹499 | Level up your playtime": "Gaming accessories 🎮 and toys to make your playtime more exciting.",

"Best Sellers in Books": "Popular books 📚 across all categories including novels, study, and self-help.",

"Min. 70% off | On Men's Footwear": "Men's footwear 👟 with up to 70% off. Shoes, sandals and sneakers."
};

seeMoreBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const parent = btn.closest(".box-content");

        const title = parent.querySelector("h2").innerText;
        const boxImage = parent.querySelector(".box-image");

        modalTitle.innerText = title;
        modalDesc.innerText = productData[title] || "No details available.";

        // ✅ IMAGE FIX
        const bgImage = boxImage.style.backgroundImage;
        const imageUrl = bgImage.match(/url\(["']?(.*?)["']?\)/)[1];
        modalImg.src = imageUrl;

        modal.style.display = "block";
    });
});
// ✅ CLOSE BUTTON CLICK
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// ✅ CLICK OUTSIDE MODAL
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
const buyNowBtn = document.getElementById("buy-now");
const modalAddCartBtn = document.getElementById("modal-add-cart");

// ✅ ADD TO CART FROM MODAL
modalAddCartBtn.addEventListener("click", () => {
    cartCount++;
    cart.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;
});

// ✅ BUY NOW ACTION
buyNowBtn.addEventListener("click", () => {
    alert("Proceeding to checkout 🚀");
});
