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

// Drag-to-scroll for the screenshots strip
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.screenshots-scroll');
  if (!slider) return;
  let isDown = false, startX, scrollLeft;
  slider.addEventListener('mousedown', function (e) {
    isDown = true;
    slider.style.cursor = 'grabbing';
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', function () { isDown = false; slider.style.cursor = ''; });
  slider.addEventListener('mouseup',    function () { isDown = false; slider.style.cursor = ''; });
  slider.addEventListener('mousemove',  function (e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    slider.scrollLeft = scrollLeft - (x - startX) * 1.5;
  });
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
