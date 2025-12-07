const icon = document.getElementById("theme-icon");
const logo = document.querySelector(".logo-img");
let isDark = true;

function toggleTheme() {
  // Toggle light and dark mode
  document.body.classList.toggle("light-mode");
  isDark = !isDark;

  // Update the icons based on the theme mode
  icon.src = isDark ? "assets/light_mode_sun.svg" : "assets/dark_mode_moon.svg";
  logo.src = isDark ? "assets/logo.svg" : "assets/logo-dark.svg";
}

// Change the icon on hover
icon.addEventListener("mouseover", () => {
  if (isDark) {
    icon.src = "assets/sun_hover.svg"; // Set moon icon on hover (for light mode)
  } else {
    icon.src = "assets/moon_hover.svg"; // Set sun icon on hover (for dark mode)
  }
});

// pop-up button frontpage

// Popup functionality for frontpage buttons
const popupOverlay = document.getElementById('popup-overlay');
const popupClose = document.getElementById('popup-close');
const frontButtons = document.querySelectorAll('.buttons a');

frontButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();

    const popupTitle = document.getElementById('popup-title');
    const title = btn.dataset.title; // <-- read custom title

    if (title) {
      popupTitle.textContent = title; // <-- set popup title
    }

    popupOverlay.classList.add('active');
  });
});



popupClose.addEventListener('click', () => {
  popupOverlay.classList.remove('active');
});

popupOverlay.addEventListener('click', e => {
  if (e.target === popupOverlay) {
    popupOverlay.classList.remove('active');
  }
});



// Revert to the appropriate icon after hover, depending on current theme
icon.addEventListener("mouseleave", () => {
  icon.src = isDark ? "assets/light_mode_sun.svg" : "assets/dark_mode_moon.svg";
});

const track = document.querySelector('.carousel-track');
const items = track.innerHTML;
track.innerHTML = items + items; // doubled once



const loaderFrames = document.querySelectorAll('.loader-frame');
let current = 0;

const cycleFrames = () => {
  loaderFrames[current].classList.remove('active');
  current = (current + 1) % loaderFrames.length;
  loaderFrames[current].classList.add('active');
};
function openFigma() {
  window.open(
    "https://www.figma.com/proto/bHXERWIqUFRyMuSYihKyoS/Carboon-Prototype?node-id=158-411&t=wo7j3w5Yy0rOauzf-1",
    "_blank"
  );
}
