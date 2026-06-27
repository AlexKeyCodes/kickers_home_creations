import { initFooter } from './footer.js';
import { initHeader } from './header.js';
import { initHero } from './hero.js';
import { initServicesCarousel } from './services-carousel.js';

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all modules
  initFooter();
  initHeader();
  initHero();
  initServicesCarousel();
});
