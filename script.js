document.addEventListener('DOMContentLoaded', () => {

  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (menuToggle && mobileNav) {

    const openMenu = () => {
      mobileNav.classList.add('open');
      menuToggle.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      mobileNav.classList.remove('open');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('open');
      isOpen ? closeMenu() : openMenu();
    });

    // Fecha o menu ao clicar em qualquer link dentro dele
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Fecha o menu com a tecla Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        closeMenu();
      }
    });
  }

  // Revela os divisores em forma de "veia" (efeito de desenho) quando entram na tela
  const veins = document.querySelectorAll('.vein-divider, .branch-bg');
  if (veins.length) {
    const veinObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          veinObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    veins.forEach(v => veinObserver.observe(v));
  }

  // Revela os itens de "Áreas de atuação" com um leve stagger ao rolar a página
  const areaItems = document.querySelectorAll('.area-item');
  if (areaItems.length) {
    areaItems.forEach(item => item.classList.add('pre-reveal'));

    const itemObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          itemObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    areaItems.forEach(item => itemObserver.observe(item));
  }

});