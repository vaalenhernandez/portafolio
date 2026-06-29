/* =============================================
   Valen Hernández Portfolio · script.js v2
   ============================================= */

// ── NAVBAR scroll state ──────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ── HAMBURGER / MOBILE MENU ──────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!open));
    hamburger.classList.toggle('open', !open);
    mobileMenu.classList.toggle('open', !open);
    mobileMenu.setAttribute('aria-hidden', String(open));
    document.body.style.overflow = open ? '' : 'hidden';
  });

  // close on nav link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });
}

// ── SCROLL REVEAL ────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('visible'));
}

// ── BACK TO TOP ──────────────────────────────
const backTop = document.getElementById('backTop');
if (backTop) {
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── SERVICE TABS ─────────────────────────────
const serviceTabs = document.querySelectorAll('.service-tab');
const servicePanels = document.querySelectorAll('.service-panel');

if (serviceTabs.length) {
  serviceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      serviceTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      servicePanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const panel = document.getElementById('panel-' + target);
      if (panel) panel.classList.add('active');
    });
  });
}

// ── FAQ ACCORDION ────────────────────────────
document.querySelectorAll('.faq-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const open = btn.getAttribute('aria-expanded') === 'true';

    // close all
    document.querySelectorAll('.faq-item').forEach(i => {
      i.querySelector('.faq-btn').setAttribute('aria-expanded', 'false');
      i.querySelector('.faq-answer').classList.remove('open');
      i.classList.remove('active');
    });

    // open clicked if it was closed
    if (!open) {
      btn.setAttribute('aria-expanded', 'true');
      answer.classList.add('open');
      item.classList.add('active');
    }
  });
});

// ── PORTFOLIO MODALS ─────────────────────────
const portfolioData = {
  palpitare: {
    name: 'Palpitare IPS',
    logo: 'assets/logos/palpitare.png',
    category: 'Marca · Salud',
    chips: ['Social Media', 'Creación de Contenido', 'Estrategia'],
    desc: 'Gestión de redes sociales y creación de contenido para una IPS especializada en salud. Trabajo en posicionamiento digital, humanización de la marca y comunicación con pacientes y familias.',
    media: null
  },
  sentido: {
    name: 'Sentido Óptico',
    logo: 'assets/logos/sentido-optico.png',
    category: 'Marca · Óptica',
    chips: ['Social Media', 'Fotografía', 'Creación de Contenido'],
    desc: 'Creación de contenido visual y estrategia de comunicación para una óptica con identidad definida. Producción fotográfica, reels y gestión integral de redes.',
    media: null
  },
  alkomprar: {
    name: 'Alkomprar',
    logo: null,
    category: 'Marca · Retail',
    chips: ['Apoyo de Contenido', 'Social Media'],
    desc: 'Apoyo en estrategia y creación de contenido para uno de los retailers más reconocidos de Colombia.',
    media: null
  },
  kalley: {
    name: 'Kalley',
    logo: 'assets/logos/kalley.png',
    category: 'Marca · Tecnología',
    chips: ['Apoyo de Contenido', 'Social Media'],
    desc: 'Apoyo en la producción de contenido digital para la marca colombiana de tecnología.',
    media: null
  },
  chevignon: {
    name: 'Chevignon',
    logo: 'assets/logos/chevignon.png',
    category: 'Marca · Moda',
    chips: ['Apoyo de Contenido', 'Social Media'],
    desc: 'Apoyo en la creación de contenido para una de las marcas de moda más reconocidas en Colombia.',
    media: null
  },
  norma: {
    name: 'Norma',
    logo: 'assets/logos/norma.png',
    category: 'Marca · Editorial',
    chips: ['Apoyo de Contenido', 'Social Media'],
    desc: 'Apoyo en la producción de contenido digital para la editorial y marca escolar Norma.',
    media: null
  },
  kiut: {
    name: 'Kiut',
    logo: 'assets/logos/kiut.png',
    category: 'Marca · Moda',
    chips: ['Apoyo de Contenido', 'Social Media'],
    desc: 'Apoyo en creación de contenido y estrategia digital para la marca de moda Kiut.',
    media: null
  },
  simon: {
    name: 'Simón Pulgarín',
    logo: null,
    category: 'Marca Personal',
    chips: ['Marca Personal', 'Estrategia', 'Creación de Contenido'],
    desc: 'Desarrollo de estrategia de marca personal y creación de contenido para construir presencia digital coherente con los objetivos profesionales.',
    media: null
  },
  daniela: {
    name: 'Daniela Salazar',
    logo: null,
    category: 'Marca Personal',
    chips: ['Marca Personal', 'Asesoría', 'Estrategia'],
    desc: 'Asesoría y acompañamiento para construir una marca personal sólida, con identidad clara y presencia digital auténtica.',
    media: null
  },
  casagiraldo: {
    name: 'Hotel Casa Giraldo',
    logo: null,
    category: 'Marca · Hospitalidad',
    chips: ['Social Media', 'Fotografía', 'Creación de Contenido'],
    desc: 'Gestión de redes sociales, fotografía y creación de contenido para un hotel boutique con identidad única.',
    media: null
  },
  asesorias: {
    name: 'Asesorías 1:1',
    logo: null,
    category: 'Servicio · Consultoría',
    chips: ['Asesoría', 'Estrategia Digital', 'Marca Personal'],
    desc: 'Sesiones de acompañamiento personalizado para emprendedores, marcas personales y negocios que quieren claridad, estructura y un camino estratégico para su presencia digital.',
    media: null
  }
};

const portfolioModal = document.getElementById('portfolioModal');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('[data-modal]').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.modal;
    const data = portfolioData[key];
    if (!data || !portfolioModal) return;

    const logoEl = document.getElementById('modalLogo');
    const nameEl = document.getElementById('modalName');
    const catEl = document.getElementById('modalCat');
    const chipsEl = document.getElementById('modalChips');
    const descEl = document.getElementById('modalDesc');

    if (logoEl) {
      if (data.logo) {
        logoEl.innerHTML = `<img src="${data.logo}" alt="${data.name}" style="max-height:60px;max-width:160px;object-fit:contain" />`;
      } else {
        logoEl.innerHTML = `<span style="font-size:2rem;font-family:'Playfair Display',serif;color:var(--brown)">${data.name}</span>`;
      }
    }
    if (nameEl) nameEl.textContent = data.name;
    if (catEl) catEl.textContent = data.category;
    if (chipsEl) {
      chipsEl.innerHTML = data.chips.map(c => `<span class="modal-chip">${c}</span>`).join('');
    }
    if (descEl) descEl.textContent = data.desc;

    portfolioModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

if (modalClose) {
  modalClose.addEventListener('click', closePortfolioModal);
}
if (portfolioModal) {
  portfolioModal.addEventListener('click', e => {
    if (e.target === portfolioModal) closePortfolioModal();
  });
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closePortfolioModal();
    closeVideoModal();
  }
});

function closePortfolioModal() {
  if (portfolioModal) {
    portfolioModal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ── VIDEO MODAL ──────────────────────────────
const videoModal = document.getElementById('videoModalOverlay');
const videoPlayer = document.getElementById('videoModalPlayer');
const videoClose = document.getElementById('videoModalClose');

document.querySelectorAll('[data-video]').forEach(card => {
  card.addEventListener('click', () => {
    const src = card.dataset.video;
    if (!src || !videoModal || !videoPlayer) return;
    videoPlayer.src = src;
    videoModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

if (videoClose) videoClose.addEventListener('click', closeVideoModal);
if (videoModal) {
  videoModal.addEventListener('click', e => {
    if (e.target === videoModal) closeVideoModal();
  });
}

function closeVideoModal() {
  if (videoModal) {
    videoModal.classList.remove('open');
    document.body.style.overflow = '';
    if (videoPlayer) { videoPlayer.pause(); videoPlayer.src = ''; }
  }
}

// ── CAROUSEL: pause on hover (CSS handles anim) ──
const carousel = document.querySelector('.carousel-track');
if (carousel) {
  carousel.addEventListener('mouseenter', () => {
    carousel.style.animationPlayState = 'paused';
  });
  carousel.addEventListener('mouseleave', () => {
    carousel.style.animationPlayState = 'running';
  });
}
