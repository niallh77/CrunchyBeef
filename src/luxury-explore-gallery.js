queueMicrotask(() => {
  if (!window.location.pathname.startsWith('/luxury')) return;

  const exploreButton = document.querySelector('.uih-featured .uih-button');
  if (exploreButton) exploreButton.href = '/luxury/gallery';
});
