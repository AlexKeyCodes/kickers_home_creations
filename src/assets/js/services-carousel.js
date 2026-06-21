/**
 * Services image carousel — fade between slides with arrows, dots, and auto-advance.
 */
export function initServicesCarousel() {
  const carousel = document.getElementById('services-carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.services-slide');
  const dots = carousel.querySelectorAll('[data-carousel-dot]');
  const prevBtn = carousel.querySelector('[data-carousel-prev]');
  const nextBtn = carousel.querySelector('[data-carousel-next]');
  if (slides.length <= 1) return;

  let current = 0;
  let interval;

  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.style.opacity = i === current ? '1' : '0';
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-brand-green', i === current);
      dot.classList.toggle('bg-gray-300', i !== current);
    });
  }

  function next() { show(current + 1); }
  function prev() { show(current - 1); }

  function startAuto() {
    stopAuto();
    interval = setInterval(next, 4000);
  }
  function stopAuto() {
    if (interval) clearInterval(interval);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { next(); startAuto(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); startAuto(); });
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { show(i); startAuto(); });
  });

  // Pause on hover
  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', startAuto);

  startAuto();
}
