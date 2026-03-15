// Scroll fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Skill bars — animate when about section enters view
document.querySelectorAll('.skill-fill').forEach(bar => bar.style.width = '0');

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const aboutSection = document.querySelector('#about');
if (aboutSection) barObserver.observe(aboutSection);

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
  });
});

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-send');
  btn.textContent = 'Sent! ✓';
  btn.style.background = '#1A1A18';
  setTimeout(() => { btn.textContent = 'Send message →'; btn.style.background = ''; }, 3000);
}

// Projects accordion
function toggleCategory(btn) {
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  const items = btn.nextElementSibling;
  btn.setAttribute('aria-expanded', !expanded);
  if (expanded) {
    items.hidden = true;
  } else {
    items.hidden = false;
  }
}
