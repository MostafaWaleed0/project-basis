/*==================== SHOW MENU ====================*/
const headMiddle = document.getElementById('head-middle'),
  navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = headMiddle.getAttribute('data-visible');

  console.log(visibility);
  if (visibility == 'false') {
    // ===== MENU SHOW =====
    headMiddle.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    navToggle.setAttribute('aria-label', 'Close navigation');
  } else if (visibility == 'true') {
    // ===== MENU CLOSE =====
    headMiddle.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    navToggle.setAttribute('aria-label', 'Open navigation');
  }
});
