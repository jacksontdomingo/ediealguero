// Mobile nav
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// Header scroll effect
const header = document.querySelector('.site-header');

function onScroll() {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', onScroll);
onScroll();

// Update active nav link based on current page
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    const isActive = href === currentPage || 
                     (currentPage === '' && href === 'index.html');
    link.classList.toggle('is-active', isActive);
  });
}

// Call on page load
setActiveNavLink();

// Contact form submission (for future use with a backend service)
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

if (form && note) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    note.textContent = "Thanks! You can submit contact forms through services like Formspree, Netlify Forms, or other static site form services.";
    form.reset();
  });
}
