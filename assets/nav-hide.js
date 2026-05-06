(function() {
  const HIDE_CLASS = 'nav-hidden';
  const NAVBAR_SELECTOR = '.quarto-navbar, [role="navigation"]';
  const SCROLL_THRESHOLD = 50; // pixels before hiding activates
  let lastScrollY = 0;
  let isScrolling = false;
  let mobileDrawerOpen = false;

  const navbar = document.querySelector(NAVBAR_SELECTOR);
  if (!navbar) return; // no navbar found, exit gracefully

  // Detect mobile drawer state (Quarto toggle)
  function isMobileDrawerOpen() {
    const toggle = document.querySelector('.navbar-toggler');
    const navMenu = document.querySelector('.quarto-navbar .navbar-nav, nav.quarto-nav');
    if (toggle && toggle.getAttribute('aria-expanded') === 'true') return true;
    if (navMenu && navMenu.classList.contains('show')) return true;
    return false;
  }

  // Main scroll handler
  function handleScroll() {
    const currentScrollY = window.scrollY;

    // If drawer is open, don't hide navbar
    mobileDrawerOpen = isMobileDrawerOpen();
    if (mobileDrawerOpen) {
      navbar.classList.remove(HIDE_CLASS);
      lastScrollY = currentScrollY;
      return;
    }

    // At top of page: always show
    if (currentScrollY < SCROLL_THRESHOLD) {
      navbar.classList.remove(HIDE_CLASS);
      lastScrollY = currentScrollY;
      return;
    }

    // Determine scroll direction
    if (currentScrollY > lastScrollY) {
      // scrolling down
      if (currentScrollY - lastScrollY > 5) {
        navbar.classList.add(HIDE_CLASS);
      }
    } else {
      // scrolling up
      navbar.classList.remove(HIDE_CLASS);
    }

    lastScrollY = currentScrollY;
  }

  // Throttle scroll events for performance
  function throttledScroll() {
    if (!isScrolling) {
      isScrolling = true;
      requestAnimationFrame(() => {
        handleScroll();
        isScrolling = false;
      });
    }
  }

  // Listen for drawer toggle (mobile menu open/close)
  function setupDrawerListener() {
    const toggle = document.querySelector('.navbar-toggler');
    if (toggle) {
      toggle.addEventListener('click', function() {
        // Small delay to allow DOM to update
        setTimeout(() => {
          if (isMobileDrawerOpen()) {
            navbar.classList.remove(HIDE_CLASS);
            mobileDrawerOpen = true;
          } else {
            mobileDrawerOpen = false;
            // Re-evaluate scroll position
            handleScroll();
          }
        }, 50);
      });
    }
  }

  // Initialize
  window.addEventListener('scroll', throttledScroll, { passive: true });
  setupDrawerListener();

  // Handle orientation changes
  window.addEventListener('orientationchange', function() {
    setTimeout(handleScroll, 100);
  });
})();
