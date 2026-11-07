const setContactWhatsappLink = () => {
  if (!window.location.pathname.includes('/contact-us')) return;
  const link = document.querySelector('.contact-direct-intro a');
  if (!link) return;
  link.href = 'https://wa.me/353868215176';
  link.target = '_blank';
  link.rel = 'noreferrer';
  link.textContent = 'Message Julianne on WhatsApp';
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setContactWhatsappLink, { once: true });
} else {
  setContactWhatsappLink();
}
