const setupFaqSearch = () => {
  if (!window.location.pathname.endsWith('/faq')) return;
  const intro = document.querySelector('.faq-intro');
  const list = document.querySelector('.faq-list');
  if (!intro || !list || intro.querySelector('.faq-search')) return;

  const form = document.createElement('form');
  form.className = 'faq-search';
  form.setAttribute('role', 'search');
  form.innerHTML = '<label for="faq-search-input">Search the FAQs</label><div><input id="faq-search-input" type="search" placeholder="Search questions and answers" autocomplete="off"><button type="button" aria-label="Clear FAQ search">Clear</button></div><p class="faq-search-status" aria-live="polite"></p>';
  intro.append(form);

  const input = form.querySelector('input');
  const clear = form.querySelector('button');
  const status = form.querySelector('.faq-search-status');
  const items = [...list.querySelectorAll('.faq-item')];

  const removeHighlights = () => list.querySelectorAll('mark.faq-match').forEach(mark => mark.replaceWith(document.createTextNode(mark.textContent)));
  const highlight = (element, query) => {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, { acceptNode: node => node.parentElement?.closest('mark,script,style') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    const pattern = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    nodes.forEach(node => {
      if (!pattern.test(node.nodeValue)) { pattern.lastIndex = 0; return; }
      pattern.lastIndex = 0;
      const fragment = document.createDocumentFragment();
      let last = 0;
      node.nodeValue.replace(pattern, (match, offset) => { fragment.append(node.nodeValue.slice(last, offset)); const mark = document.createElement('mark'); mark.className = 'faq-match'; mark.textContent = match; fragment.append(mark); last = offset + match.length; });
      fragment.append(node.nodeValue.slice(last));
      node.replaceWith(fragment);
    });
  };

  const run = () => {
    const query = input.value.trim();
    removeHighlights();
    let count = 0;
    items.forEach(item => {
      const match = !query || item.textContent.toLowerCase().includes(query.toLowerCase());
      item.hidden = !match;
      if (match) { count += 1; if (query) highlight(item, query); }
    });
    list.querySelectorAll('.faq-group').forEach(group => { group.hidden = !group.querySelector('.faq-item:not([hidden])'); });
    status.textContent = query ? `${count} ${count === 1 ? 'answer' : 'answers'} found` : `${items.length} answers available`;
  };

  input.addEventListener('input', run);
  clear.addEventListener('click', () => { input.value = ''; input.focus(); run(); });
  run();
};

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setupFaqSearch, { once: true });
else setTimeout(setupFaqSearch, 0);
