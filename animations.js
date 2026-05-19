document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined') return;

  gsap.to('body', { duration: 0.6, opacity: 1, ease: 'power1.out' });
  gsap.from('header', { duration: 0.8, y: -20, opacity: 0, ease: 'power3.out' });

  const revealTargets = document.querySelectorAll('.home-content, .about-box, .tech-item, .cert-item, .certifications-heading, .profile-info, .about-content');
  if (revealTargets.length) {
    gsap.from(revealTargets, {
      duration: 0.8,
      y: 20,
      opacity: 0,
      ease: 'power3.out',
      stagger: 0.08,
      delay: 0.2,
    });
  }

  document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, { scale: 1.04, duration: 0.18, ease: 'power1.out' });
    });
    button.addEventListener('mouseleave', () => {
      gsap.to(button, { scale: 1, duration: 0.18, ease: 'power1.out' });
    });
    button.addEventListener('mousedown', () => {
      gsap.to(button, { scale: 0.95, duration: 0.08, ease: 'power1.out' });
    });
    button.addEventListener('mouseup', () => {
      gsap.to(button, { scale: 1.04, duration: 0.08, ease: 'power1.out' });
    });
  });

  document.querySelectorAll('.tech-item, .cert-item, .about-box').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { scale: 1.02, duration: 0.2, ease: 'power1.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { scale: 1, duration: 0.2, ease: 'power1.out' });
    });
  });

  document.querySelectorAll('a[href$=".html"]').forEach((link) => {
    if (link.target === '_blank') return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin) return;

    link.addEventListener('click', (event) => {
      event.preventDefault();
      const destination = link.href;
      if (destination === location.href) return;
      gsap.to('body', {
        duration: 0.35,
        y: -16,
        opacity: 0.35,
        ease: 'power1.inOut',
        onStart: () => {
          document.body.classList.add('transition-out');
        },
        onComplete: () => {
          location.href = destination;
        },
      });
    });
  });

  const background = document.getElementById('background');
  if (background && window.VANTA && typeof VANTA.GLOBE === 'function') {
    VANTA.GLOBE({
      el: '#background',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x4a3fff,
    });
  }

  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalTriggers = document.querySelectorAll('img[data-modal-src]');

  function openModal(src) {
    if (!modal || !modalImg) return;
    gsap.to(modal, { opacity: 1, duration: 0.25 });
    modal.classList.remove('hidden');
    modalImg.src = src;
    gsap.fromTo(modalImg, { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.25 });
  }

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      openModal(trigger.dataset.modalSrc || trigger.src);
    });
  });

  if (modal) {
    modal.addEventListener('click', () => {
      gsap.to(modal, { opacity: 0, duration: 0.2, onComplete: () => {
        modal.classList.add('hidden');
      }});
    });
  }
});
