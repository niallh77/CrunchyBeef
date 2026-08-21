queueMicrotask(() => {
  if (!window.location.pathname.startsWith('/luxury')) return;

  const section = document.querySelector('.luxury-guest-reviews');
  const intro = section?.querySelector('.luxury-guest-reviews__intro');
  const score = section?.querySelector('.luxury-review-score');
  const superhost = section?.querySelector('[data-superhost-badge]');
  const carouselWrap = section?.querySelector('.luxury-review-carousel-wrap');
  const controls = section?.querySelector('.luxury-review-controls');
  if (!section || !intro || !score || !carouselWrap || section.querySelector('.luxury-review-layout')) return;

  score.innerHTML = `
    <strong>Guest favourites</strong>
    <div class="stars" aria-label="Five stars">★★★★★</div>
    <p>Five-star feedback from Google and Airbnb guests</p>
    <span class="luxury-google-wordmark" aria-label="Google">Google</span>
  `;

  const layout = document.createElement('div');
  layout.className = 'luxury-review-layout';
  const summary = document.createElement('div');
  summary.className = 'luxury-review-summary';
  summary.append(score);
  if (superhost) summary.append(superhost);
  layout.append(summary, carouselWrap);
  section.insertBefore(layout, controls);
  intro.remove();
});
