export function initialiseTodoMobileGuides(sections) {
  const page = document.querySelector('.luxury-main .todo-detail');
  if (!page) return;

  const sidebar = page.querySelector('.todo-detail-sidebar');
  const desktopNav = sidebar.querySelector('.todo-side-nav');
  const fullContent = page.querySelector('.todo-detail-content');
  const originalPosition = document.createComment('Full local guide content');
  page.insertBefore(originalPosition, fullContent);

  const mobileGuides = document.createElement('div');
  mobileGuides.className = 'todo-mobile-guides';
  mobileGuides.setAttribute('aria-label', 'Explore local guides');
  mobileGuides.innerHTML = '<p class="todo-mobile-guides-label">Explore more</p>';

  let currentPanel;
  desktopNav.querySelectorAll('a[href^="/to-do/"]').forEach(link => {
    const slug = link.getAttribute('href').split('/').pop();
    const section = sections[slug];
    if (!section) return;

    const details = document.createElement('details');
    details.className = 'todo-mobile-guide';
    const summary = document.createElement('summary');
    const image = link.querySelector('img')?.cloneNode(true);
    if (image) summary.append(image);
    const title = document.createElement('span');
    title.textContent = section[0];
    summary.append(title);
    const indicator = document.createElement('span');
    indicator.className = 'todo-mobile-guide-indicator';
    indicator.setAttribute('aria-hidden', 'true');
    indicator.textContent = '+';
    summary.append(indicator);
    details.append(summary);

    const panel = document.createElement('div');
    panel.className = 'todo-mobile-guide-panel';
    if (link.classList.contains('current')) {
      currentPanel = panel;
      details.open = true;
    } else {
      panel.innerHTML = section[1].split(/\n\n+/).map(paragraph => `<p>${paragraph}</p>`).join('');
      const fullGuide = document.createElement('a');
      fullGuide.href = link.getAttribute('href');
      fullGuide.textContent = 'Open full guide ↗';
      panel.append(fullGuide);
    }
    details.append(panel);
    mobileGuides.append(details);
  });
  sidebar.append(mobileGuides);

  const mobile = window.matchMedia('(max-width: 900px)');
  const placeContent = () => {
    if (mobile.matches && currentPanel) currentPanel.append(fullContent);
    else originalPosition.after(fullContent);
  };
  placeContent();
  mobile.addEventListener('change', placeContent);
}
