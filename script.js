// Theme toggle + menu + simple interactions + resume download (opens the PDF in a new tab)
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const yearEl = document.getElementById('year');
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const downloadResume = document.getElementById('downloadResume');
  const sendBtn = document.getElementById('sendBtn');

  // Year
  yearEl.textContent = new Date().getFullYear();

  // Theme persistence
  const stored = localStorage.getItem('site-theme');
  if (stored) body.className = stored;

  themeToggle.addEventListener('click', () => {
    const next = body.classList.contains('light') ? 'dark' : 'light';
    body.className = next;
    localStorage.setItem('site-theme', next);
    themeToggle.textContent = next === 'light' ? '🌙' : '☀️';
  });

  // Mobile menu
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    mobileMenu.style.display = mobileMenu.classList.contains('open') ? 'block' : 'none';
  });

  // Download resume: opens the PDF you uploaded (assumes same folder)
  downloadResume.addEventListener('click', (e) => {
    e.preventDefault();
    // If you placed the PDF in the same folder, this will open it.
    // Filename matches the uploaded file. Change if you used a different name.
    window.open('Dennis Quisao - Resume.pdf', '_blank');
  });

  // Send button demo
  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sendBtn.textContent = 'Demo — Message not sent';
    sendBtn.classList.add('disabled');
    setTimeout(() => {
      sendBtn.textContent = 'Send (demo)';
      sendBtn.classList.remove('disabled');
    }, 1800);
  });

  // Reveal on scroll using IntersectionObserver
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(r => obs.observe(r));
});
