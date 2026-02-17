/* ===================================
   QUUBE×IA SANTÉ - JavaScript Premium
   Animations & Interactions
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
  // === HEADER TRANSPARENT → FIXE/BLUR AU SCROLL ===
  const header = document.querySelector('.site-header');
  
  const handleScroll = () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll);

  // === MOBILE MENU TOGGLE ===
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      siteNav.classList.toggle('mobile-open');
      const isOpen = siteNav.classList.contains('mobile-open');
      mobileToggle.textContent = isOpen ? '✕' : '☰';
    });
  }

  // === ANIMATIONS SCROLL (fade-in + slide-up 20px) ===
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Désobserver après l'animation (performance)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observer tous les éléments avec classe .fade-in
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // === COUNT-UP ANIMATION POUR LES CHIFFRES ===
  const countUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numberElement = entry.target;
        const targetText = numberElement.textContent;
        
        // Extraire le nombre du texte (ex: "25 ans" → 25, "÷2-3" → skip, "50-70 %" → 60)
        const match = targetText.match(/(\d+)/);
        if (!match) return; // Ignorer si pas de nombre (ex: "÷2-3")
        
        const target = parseInt(match[1]);
        const duration = 1200; // ms
        const steps = 40;
        const increment = target / steps;
        const stepDuration = duration / steps;
        
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          // Remplacer le nombre dans le texte original
          numberElement.textContent = targetText.replace(/\d+/, Math.floor(current));
        }, stepDuration);
        
        countUpObserver.unobserve(numberElement);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.number-value').forEach(el => {
    countUpObserver.observe(el);
  });

  // === SYSTÈME D'ONGLETS (use-cases) ===
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.dataset.tab;
      
      // Désactiver tous les onglets
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));
      
      // Activer l'onglet sélectionné
      button.classList.add('active');
      const targetPanel = document.querySelector(`#${targetTab}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // === FAQ ACCORDION ===
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isOpen = answer.classList.contains('open');
      
      // Fermer toutes les autres réponses
      document.querySelectorAll('.faq-answer').forEach(ans => {
        ans.classList.remove('open');
      });
      
      // Toggle la réponse actuelle
      if (!isOpen) {
        answer.classList.add('open');
        question.querySelector('.faq-icon').textContent = '−';
      } else {
        answer.classList.remove('open');
        question.querySelector('.faq-icon').textContent = '+';
      }
    });
  });

  // === SMOOTH SCROLL POUR LES ANCRES ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#top') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = header.offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // === LAZY LOADING DES IMAGES ===
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // === PROTECTION COPIE EMAIL (anti-spam) ===
  document.querySelectorAll('[data-email]').forEach(el => {
    const email = el.dataset.email.replace('[at]', '@').replace('[dot]', '.');
    if (el.tagName === 'A') {
      el.href = `mailto:${email}`;
      el.textContent = email;
    } else {
      el.textContent = email;
    }
  });

  // === ICÔNES SVG INLINE (Factory) ===
  window.createIcon = (name) => {
    const icons = {
      hospital: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M9 11v-6h6v6h6v6h-6v6h-6v-6h-6v-6h6zm-7-9h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2h-20a2 2 0 0 1-2-2v-20a2 2 0 0 1 2-2z"/></svg>`,
      
      handshake: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 2l-5.5 9h11l-5.5-9zm0 3.84l2.93 4.66h-5.86l2.93-4.66zm7.5 14.16v2h-15v-2l7.5-5 7.5 5z"/></svg>`,
      
      wrench: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>`,
      
      hand: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83c-.55-.55-.55-1.42 0-1.97l.67-.67c.55-.55 1.42-.55 1.97 0l2.36 2.36V4c0-.83.67-1.5 1.5-1.5S9 3.17 9 4v6.5h1V2c0-.83.67-1.5 1.5-1.5S13 1.17 13 2v8.5h1V3c0-.83.67-1.5 1.5-1.5S17 2.17 17 3v7.5h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/></svg>`,
      
      barChart: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>`,
      
      coins: `<svg class="icon-svg" viewBox="0 0 24 24"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1m-4 6h1m4 0h1"/></svg>`,
      
      users: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      
      checkCircle: `<svg class="icon-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
      
      arrow: `<svg class="icon-svg icon-sm" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
    };
    
    return icons[name] || '';
  };

  console.log('✅ QUUBE×IA Santé - JavaScript chargé');
});
