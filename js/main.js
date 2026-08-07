document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const body = document.body;

  function openMenu() {
    navLinks.classList.add('open');
    menuToggle.classList.add('active'); // ☰ → ✕
    body.classList.add('menu-open');
  }

  function closeMenu() {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('active'); // ✕ → ☰
    body.classList.remove('menu-open');
  }

  function toggleMenu() {
    if (navLinks.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  menuToggle.addEventListener('click', toggleMenu);

  document.querySelectorAll('.nav-items a').forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
    }
  });
});