queueMicrotask(() => {
  if (!window.location.pathname.startsWith('/luxury')) return;

  const reviewScore = document.querySelector('.luxury-review-score');
  if (!reviewScore || reviewScore.querySelector('[data-superhost-badge]')) return;

  reviewScore.insertAdjacentHTML('afterend', `
    <a class="luxury-superhost-badge" data-superhost-badge href="https://www.airbnb.ie/rooms/1251238152011455173?source_impression_id=p3_1787335276_P3VqoH6DALiofuaM" target="_blank" rel="noreferrer">
      <img src="/images/airbnb-logo.svg" alt="Airbnb">
      <span><strong>Airbnb Superhost</strong><small>Experienced hosting, thoughtful stays</small></span>
      <b aria-hidden="true">↗</b>
    </a>
  `);
});
