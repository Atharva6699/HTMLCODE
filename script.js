// Select all images
const images = document.querySelectorAll("img");

// Click animation effect
images.forEach(img => {
    img.addEventListener("click", () => {
        img.style.transform = "scale(1.2)";
        img.style.transition = "0.3s";

        setTimeout(() => {
            img.style.transform = "scale(1)";
        }, 300);
    });
});

// Welcome message
window.onload = () => {
    console.log("Welcome to My Animated Room 🚀");
};
