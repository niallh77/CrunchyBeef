const addPetFriendlyTile = () => {
  const grid = document.querySelector('.uih-lifestyle-grid');
  if (!grid || grid.querySelector('[data-pet-friendly-tile]')) return;

  grid.insertAdjacentHTML('beforeend', `
    <article data-pet-friendly-tile>
      <img src="/images/pet-friendly-dog.jpg" alt="Dog enjoying a beach holiday">
      <h3>Pet-friendly stays</h3>
      <p>Bring your dog along for the adventure, with a secure garden, beach walks nearby and plenty of room to settle in together.</p>
    </article>
  `);
};

// The homepage markup is rendered by main.js after the module imports. Wait
// until the document has been rendered before looking for the lifestyle grid.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addPetFriendlyTile, { once: true });
} else {
  setTimeout(addPetFriendlyTile, 0);
}
