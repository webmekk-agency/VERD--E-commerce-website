/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }
});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("active");
    menuBtn.textContent = "☰";

  });

});


/* ================= CART ================= */

let cartCount = 0;

const cartCounter = document.getElementById("cartCount");

document.querySelectorAll(".add-btn").forEach(button => {

  button.addEventListener("click", () => {

    cartCount++;

    cartCounter.textContent = cartCount;

    button.textContent = "Added ✓";

    setTimeout(() => {
      button.textContent = "+ Cart";
    }, 1200);

  });

});


/* ================= SEARCH ================= */

const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", () => {

  const searchValue = searchInput.value.toLowerCase();

  productCards.forEach(card => {

    const productName =
      card.querySelector("h3").textContent.toLowerCase();

    if (productName.includes(searchValue)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }

  });

});


/* ================= CART BUTTON ================= */

document.getElementById("cartBtn").addEventListener("click", () => {

  if (cartCount === 0) {
    alert("Your cart is empty.");
  } else {
    alert(`You have ${cartCount} item(s) in your cart.`);
  }

});


/* ================= SCROLL ANIMATION ================= */

const animatedElements = document.querySelectorAll(
  ".product-card, .gallery-item, .review-card, .split-section, .arrival, .sustainability"
);

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

      }

    });

  },
  {
    threshold: 0.1
  }
);


animatedElements.forEach(element => {

  element.style.opacity = "0";
  element.style.transform = "translateY(25px)";
  element.style.transition = "opacity .7s ease, transform .7s ease";

  observer.observe(element);

});