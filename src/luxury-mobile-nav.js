export function initialiseLuxuryMobileNav() {
  const header = document.querySelector('.luxury-site .luxury-header');
  if (!header || header.querySelector('.luxury-mobile-menu-button')) return;

  const desktopLinks = [...header.querySelectorAll('.luxury-nav a')];
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'luxury-mobile-menu-button';
  button.setAttribute('aria-controls', 'luxury-mobile-navigation');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Open navigation menu');
  button.innerHTML = '<span class="luxury-mobile-menu-icon" aria-hidden="true"><span></span><span></span><span></span></span><span>Menu</span>';

  const nav = document.createElement('nav');
  nav.id = 'luxury-mobile-navigation';
  nav.className = 'luxury-mobile-navigation';
  nav.setAttribute('aria-label', 'Mobile navigation');
  nav.hidden = true;
  desktopLinks.forEach(link => nav.append(link.cloneNode(true)));

  const close = () => {
    nav.hidden = true;
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open navigation menu');
  };
  button.addEventListener('click', () => {
    const opening = nav.hidden;
    nav.hidden = !opening;
    button.setAttribute('aria-expanded', String(opening));
    button.setAttribute('aria-label', opening ? 'Close navigation menu' : 'Open navigation menu');
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !nav.hidden) { close(); button.focus(); }
  });
  document.addEventListener('click', event => {
    if (!nav.hidden && !header.contains(event.target)) close();
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) close(); });

  header.append(button, nav);
}
