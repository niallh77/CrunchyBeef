queueMicrotask(() => {
  if (!window.location.pathname.startsWith('/luxury')) return;

  const carousel = document.querySelector('[data-guest-review-carousel]');
  if (!carousel || carousel.dataset.autoCycle) return;
  carousel.dataset.autoCycle = 'true';

  let timer;
  const advance = () => {
    const card = carousel.querySelector('.luxury-review-card');
    if (!card) return;
    const amount = card.getBoundingClientRect().width + 22;
    const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 4;
    carousel.scrollTo({ left: atEnd ? 0 : carousel.scrollLeft + amount, behavior: 'smooth' });
  };
  const start = () => { window.clearInterval(timer); timer = window.setInterval(advance, 6000); };
  const stop = () => window.clearInterval(timer);

  start();
  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('focusout', start);
});
