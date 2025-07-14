function updateCountdown() {
  const targetDate = new Date("July 21, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
  } else {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.querySelector(".countdown-title").textContent = "We've Launched!";
    document.querySelector(".launch-text").textContent =
      "Welcome to your fitness transformation";
  }
}

// Update countdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Add subtle animation to countdown items on load
window.addEventListener("load", function () {
  const items = document.querySelectorAll(".countdown-item");
  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      item.style.transition = "all 0.6s ease";

      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, 100);
    }, index * 200);
  });
});
