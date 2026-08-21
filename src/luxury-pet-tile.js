queueMicrotask(() => {
  if (!window.location.pathname.startsWith('/luxury')) return;

  const grid = document.querySelector('.uih-lifestyle-grid');
  if (!grid || grid.querySelector('[data-pet-friendly-tile]')) return;

  grid.insertAdjacentHTML('beforeend', `
    <article data-pet-friendly-tile>
      <img src="/images/pet-friendly-dog.jpg" alt="Dog enjoying a beach holiday">
      <h3>Pet-friendly stays</h3>
      <p>Bring your dog along for the adventure, with a secure garden, beach walks nearby and plenty of room to settle in together.</p>
    </article>
  `);
});
