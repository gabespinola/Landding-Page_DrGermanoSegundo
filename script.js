// mobile menu
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
menuToggle.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});
mobileNav.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', false);
  })
);

// reveal on scroll for branch lines / dividers / area items
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.vein-divider').forEach(el => revealObserver.observe(el));

// hero branch lines draw in on load
window.addEventListener('load', () => {
  document.querySelectorAll('.hero-branches').forEach(el => el.classList.add('reveal'));
});

// ---------- áreas de atuação, agrupadas por categoria ----------
const categoryIcon = () => `
  <svg viewBox="0 0 24 24">
    <path d="M12 21 C12 15, 12 12, 12 8" />
    <path d="M12 12 C12 9, 9 8, 7 5" />
    <path d="M12 8 C12 5, 15 4, 17 2" />
    <path d="M12 16 C10 14, 8 14, 6 12" />
  </svg>`;

const categories = [
  {
    title: "Doenças venosas",
    items: [
      "Varizes e vasos nas pernas",
      "Insuficiência venosa crônica",
      "Trombose e tromboflebite venosa",
      "Erisipela",
      "Úlceras de perna e pé"
    ]
  },
  {
    title: "Doenças arteriais",
    items: [
      "Doença vascular obstrutiva aguda",
      "Aneurismas",
      "Lesões das artérias carótidas",
      "Arteriosclerose dos membros inferiores"
    ]
  },
  {
    title: "Pé diabético & neuropatia",
    items: [
      "Pé diabético",
      "Neuropatia diabética",
      "Amputação de membros"
    ]
  },
  {
    title: "Procedimentos",
    items: [
      "Fístula arteriovenosa para hemodiálise",
      "Implante de cateter para quimioterapia"
    ]
  }
];

const grid = document.getElementById('areasGrid');
categories.forEach(cat => {
  const block = document.createElement('div');
  block.className = 'area-category';

  const list = cat.items.map((item, i) =>
    `<li class="area-item" style="transition-delay:${(i % 5) * 0.06}s">${item}</li>`
  ).join('');

  block.innerHTML = `<h3>${categoryIcon()}${cat.title}</h3><ul>${list}</ul>`;
  grid.appendChild(block);
});

document.querySelectorAll('.area-item').forEach(el => revealObserver.observe(el));