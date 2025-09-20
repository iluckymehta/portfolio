// Professional Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    setupSmoothScrolling();
    setupActiveNavigation();
    setupContactForm();
    setupScrollAnimations();
    setupNavbarScroll();
    handleExternalLinks();
});

// Smooth scrolling for navigation links (fixed for OnePlus/Android)
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = window.scrollY + targetSection.getBoundingClientRect().top - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open with small delay
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const navbarToggler = document.querySelector('.navbar-toggler');
                        setTimeout(() => {
                            navbarToggler.click();
                        }, 100);
                    }
                }
            }
        });
    });
}

// Active navigation highlighting
function setupActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 110; // slightly larger offset for mobile

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', throttle(updateActiveNav, 50));
    updateActiveNav();
}

// Contact form handling
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        if (!validateForm(formData)) return;
        submitForm(formData);
    });
}

// Form validation
function validateForm(data) {
    const { name, email, subject, message } = data;
    if (!name.trim()) { showAlert('Please enter your name.', 'danger'); return false; }
    if (!email.trim() || !isValidEmail(email)) { showAlert('Please enter a valid email.', 'danger'); return false; }
    if (!subject.trim()) { showAlert('Please enter a subject.', 'danger'); return false; }
    if (!message.trim()) { showAlert('Please enter your message.', 'danger'); return false; }
    return true;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function submitForm(formData) {
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        showAlert('Thank you! I\'ll get back to you soon.', 'success');
        document.getElementById('contactForm').reset();
        console.log('Form data:', formData);
    }, 2000);
}

function showAlert(message, type) {
    const existingAlert = document.querySelector('.alert-message');
    if (existingAlert) existingAlert.remove();

    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible fade show alert-message`;
    alert.innerHTML = `${message} <button type="button" class="btn-close" data-bs-dismiss="alert"></button>`;

    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(alert, form);

    setTimeout(() => { if (alert && alert.parentNode) alert.remove(); }, 5000);
}

// Scroll animations
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .certification-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('fade-in', 'visible');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    animatedElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// Navbar background on scroll
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'var(--dark-color)';
            navbar.style.backdropFilter = 'none';
        }
    }
    window.addEventListener('scroll', throttle(updateNavbar, 50));
    updateNavbar();
}

// Handle external links
function handleExternalLinks() {
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', () => console.log('External link clicked:', link.href));
    });
}

// Throttle function
function throttle(func, wait) {
    let timeout;
    return function(...args) {
        const later = () => { clearTimeout(timeout); func(...args); };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}