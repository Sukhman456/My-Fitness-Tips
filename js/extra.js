function toggleTips() {
  let tips = document.getElementById("tipsText");

  if (tips.style.display === "none") {
    tips.style.display = "block";
  } else {
    tips.style.display = "none";
  }
}
// Show current time
function showTime() {
  let now = new Date();
  let timeString = now.toLocaleTimeString();

  let timeBox = document.getElementById("time");
  if (timeBox) {
    timeBox.innerHTML = "Current Time: " + timeString;
  }
}

setInterval(showTime, 1000);

// Highlight clicked images (FIXED)
document.addEventListener("DOMContentLoaded", function () {
  let galleryImages = document.querySelectorAll("img");
  galleryImages.forEach(img => {
    img.addEventListener("click", function () {
      this.style.border = "3px solid red";
    });
  });
});

// Scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}