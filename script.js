// Popup dikhane ka function
function showPopup() {
  setTimeout(function() {
    const popup = document.getElementById("popupBox");
    popup.style.display = "flex";
    document.body.style.overflow = "hidden";

    // — yeh line add karein:
    document.querySelector('.whatsapp-float').style.display = 'none';
  }, 500);
}

// Popup band karne ka function
function closePopup() {
  const popup = document.getElementById("popupBox");
  popup.style.display = "none";
  document.body.style.overflow = "auto";

  // — yeh line add karein:
  document.querySelector('.whatsapp-float').style.display = 'flex';
}

// Page load ya refresh pe popup dikhana
window.addEventListener("load", function () {
  const navEntries = performance.getEntriesByType("navigation");
  const navType = navEntries.length
    ? navEntries[0].type
    : (performance.navigation && performance.navigation.type === 1
       ? "reload"
       : "navigate");

  showPopup(); // Har baar 0.5s delay ke saath popup
});

// "Yes, Book" button ka event listener
document.getElementById("bookButton").addEventListener("click", function() {
  closePopup();
  document.querySelector(".book-appointment").scrollIntoView({ behavior: "smooth" });
});