document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined') return;

  // Page entrance
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

  // Button hover and click interactions
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

  // Card hover interactions
  document.querySelectorAll('.tech-item, .cert-item, .about-box').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { scale: 1.02, duration: 0.2, ease: 'power1.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { scale: 1, duration: 0.2, ease: 'power1.out' });
    });
  });

  // Smooth page transitioning
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
});
