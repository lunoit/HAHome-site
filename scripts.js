function toggleMenu() {
  const mobile = document.getElementById('nav-mobile');
  const btn = document.getElementById('nav-hamburger');
  const open = mobile.classList.toggle('open');
  btn.classList.toggle('open', open);
}

function closeMenu() {
  document.getElementById('nav-mobile').classList.remove('open');
  document.getElementById('nav-hamburger').classList.remove('open');
}

// Action carousel (See It In Action)
let actionSlide = 0;
const actionTotal = 8;

function moveActionSlide(dir) {
  goToActionSlide((actionSlide + dir + actionTotal) % actionTotal);
}

function goToActionSlide(idx) {
  actionSlide = idx;
  var track = document.getElementById('action-track');
  if (track) track.style.transform = 'translateX(-' + (idx * 100) + '%)';
  document.querySelectorAll('.action-dot').forEach(function (d, i) {
    d.classList.toggle('active', i === idx);
  });
}

// Touch swipe for action carousel
document.addEventListener('DOMContentLoaded', function () {
  var carousel = document.getElementById('action-carousel');
  if (!carousel) return;
  var startX = 0, diffX = 0;
  carousel.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; diffX = 0; }, { passive: true });
  carousel.addEventListener('touchmove', function (e) { diffX = e.touches[0].clientX - startX; }, { passive: true });
  carousel.addEventListener('touchend', function () {
    if (Math.abs(diffX) > 50) moveActionSlide(diffX < 0 ? 1 : -1);
  });
});

// Config carousel (Configuration)
let configSlide = 0;
const configTotal = 4;

function moveConfigSlide(dir) {
  goToConfigSlide((configSlide + dir + configTotal) % configTotal);
}

function goToConfigSlide(idx) {
  configSlide = idx;
  var track = document.getElementById('config-track');
  if (track) track.style.transform = 'translateX(-' + (idx * 100) + '%)';
  document.querySelectorAll('#config-dots .action-dot').forEach(function (d, i) {
    d.classList.toggle('active', i === idx);
  });
}

// Touch swipe for config carousel
document.addEventListener('DOMContentLoaded', function () {
  var carousel = document.getElementById('config-carousel');
  if (!carousel) return;
  var startX = 0, diffX = 0;
  carousel.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; diffX = 0; }, { passive: true });
  carousel.addEventListener('touchmove', function (e) { diffX = e.touches[0].clientX - startX; }, { passive: true });
  carousel.addEventListener('touchend', function () {
    if (Math.abs(diffX) > 50) moveConfigSlide(diffX < 0 ? 1 : -1);
  });
});

// Music Assistant carousel
let maSlide = 0;
const maTotal = 2;

function moveMaSlide(dir) {
  goToMaSlide((maSlide + dir + maTotal) % maTotal);
}

function goToMaSlide(idx) {
  maSlide = idx;
  var track = document.getElementById('ma-track');
  if (track) track.style.transform = 'translateX(-' + (idx * 100) + '%)';
  document.querySelectorAll('#ma-dots .action-dot').forEach(function (d, i) {
    d.classList.toggle('active', i === idx);
  });
}

// Touch swipe for Music Assistant carousel
document.addEventListener('DOMContentLoaded', function () {
  var carousel = document.getElementById('ma-carousel');
  if (!carousel) return;
  var startX = 0, diffX = 0;
  carousel.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; diffX = 0; }, { passive: true });
  carousel.addEventListener('touchmove', function (e) { diffX = e.touches[0].clientX - startX; }, { passive: true });
  carousel.addEventListener('touchend', function () {
    if (Math.abs(diffX) > 50) moveMaSlide(diffX < 0 ? 1 : -1);
  });
});

// Rooms carousel (Room Details)
let roomsSlide = 0;
const roomsTotal = 4;

function moveRoomsSlide(dir) {
  goToRoomsSlide((roomsSlide + dir + roomsTotal) % roomsTotal);
}

function goToRoomsSlide(idx) {
  roomsSlide = idx;
  var track = document.getElementById('rooms-track');
  if (track) track.style.transform = 'translateX(-' + (idx * 100) + '%)';
  document.querySelectorAll('#rooms-dots .action-dot').forEach(function (d, i) {
    d.classList.toggle('active', i === idx);
  });
}

// Touch swipe for rooms carousel
document.addEventListener('DOMContentLoaded', function () {
  var carousel = document.getElementById('rooms-carousel');
  if (!carousel) return;
  var startX = 0, diffX = 0;
  carousel.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; diffX = 0; }, { passive: true });
  carousel.addEventListener('touchmove', function (e) { diffX = e.touches[0].clientX - startX; }, { passive: true });
  carousel.addEventListener('touchend', function () {
    if (Math.abs(diffX) > 50) moveRoomsSlide(diffX < 0 ? 1 : -1);
  });
});

// Energy carousel
let energySlide = 0;
const energyTotal = 8;

function moveEnergySlide(dir) {
  goToEnergySlide((energySlide + dir + energyTotal) % energyTotal);
}

function goToEnergySlide(idx) {
  energySlide = idx;
  const track = document.getElementById('energy-track');
  if (track) track.style.transform = 'translateX(-' + (idx * 100) + '%)';
  document.querySelectorAll('.energy-dot').forEach(function (d, i) {
    d.classList.toggle('active', i === idx);
  });
}

// Touch swipe for energy carousel
document.addEventListener('DOMContentLoaded', function () {
  var carousel = document.getElementById('energy-carousel');
  if (!carousel) return;
  var startX = 0, diffX = 0;
  carousel.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; diffX = 0; }, { passive: true });
  carousel.addEventListener('touchmove', function (e) { diffX = e.touches[0].clientX - startX; }, { passive: true });
  carousel.addEventListener('touchend', function () {
    if (Math.abs(diffX) > 50) moveEnergySlide(diffX < 0 ? 1 : -1);
  });
});

// Intelligence card carousels
var intelSlides = {};

function goToIntelSlide(id, idx) {
  intelSlides[id] = idx;
  var carousel = document.querySelector('[data-intel-carousel="' + id + '"]');
  if (!carousel) return;
  var slides = carousel.querySelectorAll('.intel-carousel-slide');
  slides.forEach(function (s, i) { s.classList.toggle('active', i === idx); });
  var track = carousel.querySelector('.intel-carousel-track');
  if (track && slides[idx]) track.style.height = slides[idx].offsetHeight + 'px';
  carousel.querySelectorAll('.intel-dot').forEach(function (d, i) {
    d.classList.toggle('active', i === idx);
  });
}

// Init + touch swipe for intelligence carousels
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.intel-carousel:not(.intel-carousel-placeholder)').forEach(function (carousel) {
    var id = carousel.getAttribute('data-intel-carousel');
    var slides = carousel.querySelectorAll('.intel-carousel-slide');
    var total = slides.length;
    intelSlides[id] = 0;
    // Set first slide active and init height once images load
    slides[0].classList.add('active');
    var firstImg = slides[0].querySelector('img');
    if (firstImg) {
      var setHeight = function () {
        var track = carousel.querySelector('.intel-carousel-track');
        if (track) track.style.height = slides[0].offsetHeight + 'px';
      };
      if (firstImg.complete) setHeight();
      else firstImg.addEventListener('load', setHeight);
    }
    // Touch swipe
    var startX = 0, diffX = 0;
    carousel.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; diffX = 0; }, { passive: true });
    carousel.addEventListener('touchmove', function (e) { diffX = e.touches[0].clientX - startX; }, { passive: true });
    carousel.addEventListener('touchend', function () {
      if (Math.abs(diffX) > 50) {
        var dir = diffX < 0 ? 1 : -1;
        var cur = intelSlides[id] || 0;
        var next = (cur + dir + total) % total;
        goToIntelSlide(id, next);
      }
    });
  });
});

// Close language dropdown on outside click
document.addEventListener('click', function (e) {
  const picker = document.querySelector('.lang-picker');
  const dropdown = document.querySelector('.lang-dropdown');
  if (picker && dropdown && !picker.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});

function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-question.open').forEach(q => {
    q.classList.remove('open');
    q.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('open');
  }
}
