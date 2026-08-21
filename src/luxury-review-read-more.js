queueMicrotask(() => {
  if (!window.location.pathname.startsWith('/luxury')) return;

  document.querySelectorAll('.luxury-review-card blockquote').forEach((review, index) => {
    if (review.dataset.readMoreReady || review.textContent.trim().length <= 180) return;
    review.dataset.readMoreReady = 'true';
    review.id = `guest-review-${index + 1}`;
    review.classList.add('is-collapsed');
    review.insertAdjacentHTML('afterend', `<button class="luxury-review-read-more" type="button" aria-expanded="false" aria-controls="${review.id}">Read more</button>`);
    const button = review.nextElementSibling;
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      button.textContent = expanded ? 'Read more' : 'Show less';
      review.classList.toggle('is-collapsed', expanded);
    });
  });
});
