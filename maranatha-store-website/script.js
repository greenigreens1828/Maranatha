// Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Dark mode toggle
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    const html = document.body;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggle.textContent = isDark ? '🌙' : '☀️';
  });

  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Category search
  const catSearch = document.getElementById('catSearch');
  const catCards = document.querySelectorAll('.cat-card');
  const catEmpty = document.getElementById('catEmpty');
  catSearch.addEventListener('input', () => {
    const q = catSearch.value.trim().toLowerCase();
    let visible = 0;
    catCards.forEach(card => {
      const match = card.dataset.name.includes(q);
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });
    catEmpty.style.display = visible === 0 ? 'block' : 'none';
  });

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  // Back to top
  const fabTop = document.getElementById('fabTop');
  window.addEventListener('scroll', () => {
    fabTop.classList.toggle('show', window.scrollY > 500);
  });
  fabTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const number = "919965235170"; // +91 99652 35170

    const text =
`*New Contact Message*

👤 Name: ${name}
📞 Phone: ${phone}

💬 Message:
${message}`;

    window.open(
        `https://wa.me/${number}?text=${encodeURIComponent(text)}`,
        "_blank"
    );

    document.getElementById("formMsg").style.display = "block";

    // Clear form
    this.reset();

    // Hide message after 3 seconds
    setTimeout(() => {
        document.getElementById("formMsg").style.display = "none";
    }, 3000);
});