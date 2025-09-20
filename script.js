// // Professional Portfolio JavaScript

// document.addEventListener('DOMContentLoaded', function() {
//     // Smooth scrolling for navigation links
//     setupSmoothScrolling();
    
//     // Active navigation highlighting
//     setupActiveNavigation();
    
//     // Contact form handling
//     setupContactForm();
    
//     // Scroll animations
//     setupScrollAnimations();
    
//     // Navigation background on scroll
//     setupNavbarScroll();
// });

// // Smooth scrolling for navigation links
// function setupSmoothScrolling() {
//     const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
//     navLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             const href = this.getAttribute('href');
            
//             // Only handle internal anchor links
//             if (href.startsWith('#')) {
//                 e.preventDefault();
//                 const targetId = href.substring(1);
//                 const targetSection = document.getElementById(targetId);
                
//                 if (targetSection) {
//                     const navbarHeight = document.querySelector('.navbar').offsetHeight;
//                     const targetPosition = targetSection.offsetTop - navbarHeight;
                    
//                     window.scrollTo({
//                         top: targetPosition,
//                         behavior: 'smooth'
//                     });
                    
//                     // Close mobile menu if open
//                     const navbarCollapse = document.querySelector('.navbar-collapse');
//                     if (navbarCollapse.classList.contains('show')) {
//                         const navbarToggler = document.querySelector('.navbar-toggler');
//                         navbarToggler.click();
//                     }
//                 }
//             }
//         });
//     });
// }

// // Active navigation highlighting
// function setupActiveNavigation() {
//     const sections = document.querySelectorAll('section[id]');
//     const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
//     function updateActiveNav() {
//         const scrollPos = window.scrollY + 100;
        
//         sections.forEach(section => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.offsetHeight;
//             const sectionId = section.getAttribute('id');
            
//             if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
//                 navLinks.forEach(link => {
//                     link.classList.remove('active');
//                     if (link.getAttribute('href') === `#${sectionId}`) {
//                         link.classList.add('active');
//                     }
//                 });
//             }
//         });
//     }
    
//     window.addEventListener('scroll', updateActiveNav);
//     updateActiveNav(); // Initial call
// }

// // Contact form handling
// function setupContactForm() {
//     const contactForm = document.getElementById('contactForm');
    
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             // Get form data
//             const formData = {
//                 name: document.getElementById('name').value,
//                 email: document.getElementById('email').value,
//                 subject: document.getElementById('subject').value,
//                 message: document.getElementById('message').value
//             };
            
//             // Simple validation
//             if (!validateForm(formData)) {
//                 return;
//             }
            
//             // Simulate form submission
//             submitForm(formData);
//         });
//     }
// }

// // Form validation
// function validateForm(data) {
//     const { name, email, subject, message } = data;
    
//     if (!name.trim()) {
//         showAlert('Please enter your name.', 'danger');
//         return false;
//     }
    
//     if (!email.trim() || !isValidEmail(email)) {
//         showAlert('Please enter a valid email address.', 'danger');
//         return false;
//     }
    
//     if (!subject.trim()) {
//         showAlert('Please enter a subject.', 'danger');
//         return false;
//     }
    
//     if (!message.trim()) {
//         showAlert('Please enter your message.', 'danger');
//         return false;
//     }
    
//     return true;
// }

// // Email validation
// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// // Submit form (simulation)
// function submitForm(formData) {
//     const submitBtn = document.querySelector('#contactForm button[type="submit"]');
//     const originalText = submitBtn.innerHTML;
    
//     // Show loading state
//     submitBtn.innerHTML = '<span class="loading"></span> Sending...';
//     submitBtn.disabled = true;
    
//     // Simulate API call
//     setTimeout(() => {
//         // Reset button
//         submitBtn.innerHTML = originalText;
//         submitBtn.disabled = false;
        
//         // Show success message
//         showAlert('Thank you for your message! I\'ll get back to you soon.', 'success');
        
//         // Reset form
//         document.getElementById('contactForm').reset();
        
//         // In a real application, you would send the form data to your server
//         console.log('Form data:', formData);
//     }, 2000);
// }

// // Show alert messages
// function showAlert(message, type) {
//     // Remove existing alerts
//     const existingAlert = document.querySelector('.alert-message');
//     if (existingAlert) {
//         existingAlert.remove();
//     }
    
//     // Create alert element
//     const alert = document.createElement('div');
//     alert.className = `alert alert-${type} alert-dismissible fade show alert-message`;
//     alert.innerHTML = `
//         ${message}
//         <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
//     `;
    
//     // Insert alert before the form
//     const form = document.getElementById('contactForm');
//     form.parentNode.insertBefore(alert, form);
    
//     // Auto remove after 5 seconds
//     setTimeout(() => {
//         if (alert && alert.parentNode) {
//             alert.remove();
//         }
//     }, 5000);
// }

// // Scroll animations
// function setupScrollAnimations() {
//     const animatedElements = document.querySelectorAll('.skill-card, .project-card, .certification-card');
    
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('fade-in', 'visible');
//             }
//         });
//     }, {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//     });
    
//     animatedElements.forEach(element => {
//         element.classList.add('fade-in');
//         observer.observe(element);
//     });
// }

// // Navbar background on scroll
// function setupNavbarScroll() {
//     const navbar = document.querySelector('.navbar');
    
//     function updateNavbar() {
//         if (window.scrollY > 50) {
//             navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
//             navbar.style.backdropFilter = 'blur(10px)';
//         } else {
//             navbar.style.backgroundColor = 'var(--dark-color)';
//             navbar.style.backdropFilter = 'none';
//         }
//     }
    
//     window.addEventListener('scroll', updateNavbar);
//     updateNavbar(); // Initial call
// }

// // Download resume function
// function downloadResume() {
//     // In a real application, this would download the actual resume file
//     showAlert('Resume download would start here. Please add your actual resume file.', 'info');
// }

// // Utility function to handle external links
// function handleExternalLinks() {
//     const externalLinks = document.querySelectorAll('a[href^="http"], a[href^="https"]');
    
//     externalLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             // Add any tracking or confirmation logic here
//             console.log('External link clicked:', this.href);
//         });
//     });
// }

// // Initialize external link handling
// document.addEventListener('DOMContentLoaded', handleExternalLinks);

// // Performance optimization: Throttle scroll events
// function throttle(func, wait) {
//     let timeout;
//     return function executedFunction(...args) {
//         const later = () => {
//             clearTimeout(timeout);
//             func(...args);
//         };
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//     };
// }

// // Apply throttling to scroll-based functions
// window.addEventListener('scroll', throttle(() => {
//     // Any additional scroll-based functionality can be added here
// }, 16)); // ~60fps



// Professional Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    setupSmoothScrolling();
    
    // Active navigation highlighting
    setupActiveNavigation();
    
    // Contact form handling
    setupContactForm();
    
    // Scroll animations
    setupScrollAnimations();
    
    // Navigation background on scroll
    setupNavbarScroll();
    
    // External link handling
    handleExternalLinks();
});

// Smooth scrolling for navigation links with fixed navbar offset
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only handle internal anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (!targetSection) return;

                // Get current navbar height (dynamic)
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar.offsetHeight;

                // Scroll position accounting for fixed navbar
                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    navbarToggler.click();
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
        const scrollPos = window.scrollY + 110; // adjusted offset for navbar

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

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
}

// Contact form handling
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Simple validation
            if (!validateForm(formData)) {
                return;
            }

            // Simulate form submission
            submitForm(formData);
        });
    }
}

// Form validation
function validateForm(data) {
    const { name, email, subject, message } = data;

    if (!name.trim()) {
        showAlert('Please enter your name.', 'danger');
        return false;
    }

    if (!email.trim() || !isValidEmail(email)) {
        showAlert('Please enter a valid email address.', 'danger');
        return false;
    }

    if (!subject.trim()) {
        showAlert('Please enter a subject.', 'danger');
        return false;
    }

    if (!message.trim()) {
        showAlert('Please enter your message.', 'danger');
        return false;
    }

    return true;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Submit form (simulation)
function submitForm(formData) {
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;

        // Show success message
        showAlert('Thank you for your message! I\'ll get back to you soon.', 'success');

        // Reset form
        document.getElementById('contactForm').reset();

        console.log('Form data:', formData);
    }, 2000);
}

// Show alert messages
function showAlert(message, type) {
    // Remove existing alerts
    const existingAlert = document.querySelector('.alert-message');
    if (existingAlert) {
        existingAlert.remove();
    }

    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible fade show alert-message`;
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    // Insert alert before the form
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(alert, form);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert && alert.parentNode) {
            alert.remove();
        }
    }, 5000);
}

// Scroll animations
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .certification-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

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

    window.addEventListener('scroll', updateNavbar);
    updateNavbar(); // Initial call
}

// Download resume function
function downloadResume() {
    showAlert('Resume download would start here. Please add your actual resume file.', 'info');
}

// Utility function to handle external links
function handleExternalLinks() {
    const externalLinks = document.querySelectorAll('a[href^="http"], a[href^="https"]');

    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('External link clicked:', this.href);
        });
    });
}

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll-based functions
window.addEventListener('scroll', throttle(() => {
    // Additional scroll-based functionality can be added here
}, 16)); // ~60fps