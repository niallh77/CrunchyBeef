const addCalendarMinimumStayNote = () => {
  if (!window.location.pathname.endsWith('/calendar')) return;
  const heading = [...document.querySelectorAll('.calendar-book-direct h2')]
    .find(item => item.textContent.trim() === 'Booking directly');
  if (!heading || heading.parentElement.querySelector('.calendar-minimum-stay')) return;
  const note = document.createElement('p');
  note.className = 'calendar-minimum-stay';
  note.textContent = 'Seasonal minimum nights stay range from 2 to 7 nights';
  heading.insertAdjacentElement('afterend', note);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addCalendarMinimumStayNote, { once: true });
} else {
  addCalendarMinimumStayNote();
}
