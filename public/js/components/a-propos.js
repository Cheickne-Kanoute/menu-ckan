// About Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize animations
    initializeAnimations();
});

// Mobile Menu Functionality
function initializeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
    

    if (menuToggle && mobileMenuOverlay) {
        menuToggle.addEventListener('click', function() {
            toggleMobileMenu();
        });
    }

    if (mobileMenuClose && mobileMenuOverlay) {
        mobileMenuClose.addEventListener('click', function() {
            closeMobileMenu();
        });
    }

    // Close menu when clicking on overlay
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                closeMobileMenu();
            }
        });
    }

    // Close menu when clicking on menu items
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            closeMobileMenu();
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenuOverlay && mobileMenuOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

function toggleMobileMenu() {
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (mobileMenuOverlay && menuToggle) {
        if (mobileMenuOverlay.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
}

function openMobileMenu() {
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (mobileMenuOverlay && menuToggle) {
        mobileMenuOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Trigger animation
        requestAnimationFrame(() => {
            mobileMenuOverlay.classList.add('active');
            menuToggle.classList.add('active');
        });
    }
}

function closeMobileMenu() {
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (mobileMenuOverlay && menuToggle) {
        mobileMenuOverlay.classList.add('closing');
        menuToggle.classList.remove('active');
        
        setTimeout(() => {
            mobileMenuOverlay.classList.remove('active', 'closing');
            mobileMenuOverlay.style.display = 'none';
            document.body.style.overflow = '';
        }, 400);
    }
}

// Animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards for animation
    const cards = document.querySelectorAll('.about-card, .award-card, .about-image-card, .about-story-content');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Stagger animation for award cards
    const awardCards = document.querySelectorAll('.award-card');
    awardCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
}

// Smooth scrolling for internal links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 1200) {
        const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
        if (mobileMenuOverlay && mobileMenuOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    }
});

// Handle scroll events
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scroll-based animations if needed
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
    }
    
    lastScrollTop = scrollTop;
});

// Preload images for better performance
function preloadImages() {
    const imageUrls = [
        '/assets/images/about-hero.png',
        '/assets/images/about-card1.png',
        '/assets/images/about-card2.png'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize preloading
preloadImages();
