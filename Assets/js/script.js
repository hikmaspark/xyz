// search-box open close js code
let navbar = document.querySelector('.navbar');
let searchBox = document.querySelector('.search-box .bx-search');

// sidebar open close js code
let navLinks = document.querySelector('.nav-links');
let menuOpenBtn = document.querySelector('.navbar .bx-menu');
let menuCloseBtn = document.querySelector('.nav-links .bx-x');
menuOpenBtn.onclick = function () {
  navLinks.style.left = '0';
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = '-100%';
};

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector('.htmlcss-arrow');
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle('show1');
};
let moreArrow = document.querySelector('.more-arrow');
moreArrow.onclick = function () {
  navLinks.classList.toggle('show2');
};
let jsArrow = document.querySelector('.js-arrow');
jsArrow.onclick = function () {
  navLinks.classList.toggle('show3');
};

const sliderControls = document.querySelector('.slider-controls');
const sliderTabs = sliderControls.querySelectorAll('.slider-tab');
const sliderIndicator = sliderControls.querySelector('.slider-indicator');

// Update the indicator
const updateIndicator = (tab, index) => {
  document.querySelector('.slider-tab.current')?.classList.remove('current');
  tab.classList.add('current');

  sliderIndicator.style.transform = `translateX(${tab.offsetLeft - 20}px)`;
  sliderIndicator.style.width = `${tab.getBoundingClientRect().width}px`;

  // Calculate the scroll position and scroll smoothly
  const scrollLeft =
    sliderTabs[index].offsetLeft -
    sliderControls.offsetWidth / 2 +
    sliderTabs[index].offsetWidth / 2;
  sliderControls.scrollTo({ left: scrollLeft, behavior: 'smooth' });
};

// Initialize swiper instance
const swiper = new Swiper('.slider-container', {
  effect: 'fade',
  speed: 1300,
  autoplay: { delay: 4000 },
  navigation: {
    prevEl: '#slide-prev',
    nextEl: '#slide-next',
  },
  on: {
    // Update indicator on slide change
    slideChange: () => {
      const currentTabIndex = [...sliderTabs].indexOf(
        sliderTabs[swiper.activeIndex]
      );
      updateIndicator(sliderTabs[swiper.activeIndex], currentTabIndex);
    },
    reachEnd: () => swiper.autoplay.stop(),
  },
});

// Update the slide on tab click
sliderTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    swiper.slideTo(index);
    updateIndicator(tab, index);
  });
});

updateIndicator(sliderTabs[0], 0);
window.addEventListener('resize', () =>
  updateIndicator(sliderTabs[swiper.activeIndex], 0)
);

// pre loader start
function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut() {
  setInterval(loader, 500);
}
window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
};
// Smooth scroll for anchor links
document.querySelectorAll('footer a').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});
// Input updateMobileNumber
function updateMobileNumber() {
  const countryCode = document.getElementById('country').value;
  const mobileInput = document.getElementById('mobile');
  mobileInput.value = countryCode; // Auto-fill country code in the mobile number input
}
// Start of Tawk.to Live Chat
// var Tawk_API = Tawk_API || {},
//   Tawk_LoadStart = new Date();
// (function () {
//   var s1 = document.createElement('script'),
//     s0 = document.getElementsByTagName('script')[0];
//   s1.async = true;
//   s1.src = '';
//   s1.charset = 'UTF-8';
//   s1.setAttribute('crossorigin', '*');
//   s0.parentNode.insertBefore(s1, s0);
// })();
// End of Tawk.to Live Chat
