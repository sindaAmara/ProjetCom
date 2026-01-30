// Smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Active navigation based on current page
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-item a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentLocation) {
            link.closest('.nav-item').classList.add('active');
        }
    });

    // Dropdown menu interaction for mobile
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.nextElementSibling;
                dropdown.style.position = 'relative';
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe featured articles and category cards
    const animatedElements = document.querySelectorAll('.featured-secondary, .category-card');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });

    // Add hover effect sound (optional - commented out by default)
    // const cards = document.querySelectorAll('.category-card, .featured-secondary');
    // cards.forEach(card => {
    //     card.addEventListener('mouseenter', () => {
    //         // Add sound effect here if desired
    //     });
    // });

    // Mobile menu toggle (if needed for future expansion)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const nav = document.querySelector('.main-nav');
            nav.classList.toggle('active');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.has-dropdown')) {
            const dropdowns = document.querySelectorAll('.dropdown-menu');
            dropdowns.forEach(dropdown => {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
            });
        }
    });

    // Add parallax effect to hero decoration
    const heroDecoration = document.querySelector('.hero-decoration');
    if (heroDecoration) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.3;
            heroDecoration.style.transform = `translateY(${parallax}px) rotate(${scrolled * 0.02}deg)`;
        });
    }

    // Lazy loading for article images
    const images = document.querySelectorAll('.article-image, .article-image-small');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                imageObserver.unobserve(entry.target);
            }
        });
    });

    images.forEach(img => {
        img.style.transition = 'opacity 0.5s ease';
        imageObserver.observe(img);
    });
});


lottie.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'Hello.json'
});


// Add console message for developers
console.log('%c🎓 Journal IUT Info', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cDéveloppé par les étudiants de seconde année du département informatique', 'color: #6b7280; font-size: 12px;');
