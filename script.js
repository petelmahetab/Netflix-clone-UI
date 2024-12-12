document.addEventListener('DOMContentLoaded', () => {
  
  // Header text animation (already in your code)
  gsap.from(".inner-title h1", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "bounce",
    scrollTrigger: {
      trigger: ".inner-title h1",
      start: "top 80%",
      toggleActions: "play none none none",
    }
  });

  // Inner text animation (already in your code)
  gsap.from(".inner-text p", {
    duration: 1,
    x: -100,
    opacity: 0,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".inner-text p",
      start: "top 80%",
      toggleActions: "play none none none",
    }
  });

  // FAQ Toggle Answer Functionality
  const faqItems = document.querySelectorAll('.faq li h2');
  faqItems.forEach(item => {
    item.addEventListener('click', function () {
      const answer = this.nextElementSibling;
      const icon = this.querySelector('i');
      
      // Toggle the display of the answer
      answer.classList.toggle('show');
      
      // Change the icon based on the state (plus/minus)
      if (answer.classList.contains('show')) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
      } else {
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
      }
    });
  });

  // Video Play/Pause on Hover (for videos in the showcase)
  const videoContainers = document.querySelectorAll('.showcase .showcase-img');
  videoContainers.forEach(container => {
    const video = container.querySelector('.showcase-animation');
    
    container.addEventListener('mouseover', () => {
      video.play();
    });

    container.addEventListener('mouseout', () => {
      video.pause();
    });
  });

  // Smooth Scroll Navigation (for 'Get Started' button)
  const getStartedBtn = document.querySelector('.btn-lg');
  getStartedBtn.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.email-form').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });

  // Showcase section animations (already in your code)
  gsap.from(".case1", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".case1",
      start: "top 80%",
      toggleActions: "play none none none",
    }
  });

  gsap.from(".case2", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    delay: 1,
    scrollTrigger: {
      trigger: ".case2",
      start: "top 80%",
      toggleActions: "play none none none",
    }
  });

  gsap.from(".case3", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    delay: 1.5,
    scrollTrigger: {
      trigger: ".case3",
      start: "top 80%",
      toggleActions: "play none none none",
    }
  });

  // Showcase sections fade-in effect with stagger (already in your code)
  gsap.from('.showcase', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.showcase',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
    },
  });

  // FAQ animation (already in your code)
  gsap.from('.faq li', {
    opacity: 0,
    x: -100,
    duration: 0.8,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.faq',
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    },
  });

  // Footer animation (already in your code)
  gsap.from('footer', {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: 'footer',
      start: 'top 90%',
      toggleActions: 'play none none reverse',
    },
  });

});
