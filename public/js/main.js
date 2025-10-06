// Page d'accueil Qitchen - Interactions JavaScript avec Animations Framer
document.addEventListener('DOMContentLoaded', function() {
    
    // ===========================================
    // FRAMER ANIMATIONS - INTÉGRÉES
    // ===========================================
    
    // Setup Framer animations
    setupFramerAnimations();
    
    // Animation d'entrée pour les éléments
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observer les cartes de la sidebar
    const gridCards = document.querySelectorAll('.grid-card');
    gridCards.forEach(card => {
        observer.observe(card);
    });

    // Animation du menu hamburger
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLines = document.querySelectorAll('.menu-line');
    
    menuToggle.addEventListener('click', function() {
        menuLines.forEach((line, index) => {
            line.style.transform = `rotate(${45 + index * 90}deg) translate(${index === 1 ? '0' : '0'}, ${index === 1 ? '0' : '0'})`;
            line.style.transition = 'all 0.3s ease';
        });
        
        // Animation de retour
        setTimeout(() => {
            menuLines.forEach(line => {
                line.style.transform = 'none';
            });
        }, 300);
    });

    // Effet de parallaxe sur l'image hero
    const heroImage = document.querySelector('.hero-img');
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });

    // Animation des cartes au hover
    gridCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Animation de l'icône uniquement
            const buttonIcon = this.querySelector('.button-icon');
            if (buttonIcon) {
                buttonIcon.style.transform = 'translateX(5px) rotate(5deg)';
                buttonIcon.style.transition = 'all 0.3s ease';
            }
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            
            const buttonIcon = this.querySelector('.button-icon');
            if (buttonIcon) {
                buttonIcon.style.transform = 'translateX(0) rotate(0deg)';
            }
        });
    });

    // Animation spécifique des images au hover
    const cardImages = document.querySelectorAll('.card-img');
    cardImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });

        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Animation des icônes sociales - Style Figma
    const socialIcons = document.querySelectorAll('.social-icon');
    const socialCard = document.querySelector('.social-card');
    
    socialIcons.forEach((icon, index) => {
        // Animation d'entrée séquentielle
        icon.style.opacity = '0';
        icon.style.transform = 'scale(0.8) translateY(20px)';
        
        setTimeout(() => {
            icon.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            icon.style.opacity = '1';
            icon.style.transform = 'scale(1) translateY(0)';
        }, 1400 + (index * 100));

        // Animation au hover
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
            this.style.background = 'rgba(239, 231, 210, 0.15)';
            this.style.borderColor = 'rgba(239, 231, 210, 0.4)';
            this.style.boxShadow = '0 8px 20px rgba(239, 231, 210, 0.2)';
            
            // Animation de l'icône SVG
            const svg = this.querySelector('svg');
            if (svg) {
                svg.style.transform = 'scale(1.1) rotate(5deg)';
                svg.style.filter = 'drop-shadow(0 2px 4px rgba(239, 231, 210, 0.3))';
            }
        });

        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.background = 'rgba(239, 231, 210, 0.05)';
            this.style.borderColor = 'rgba(239, 231, 210, 0.1)';
            this.style.boxShadow = 'none';
            
            const svg = this.querySelector('svg');
            if (svg) {
                svg.style.transform = 'scale(1) rotate(0deg)';
                svg.style.filter = 'none';
            }
        });

        // Animation au clic
        icon.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-1px) scale(1.05)';
        });

        icon.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
    });

    // Animation du bloc social au hover
    if (socialCard) {
        socialCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.background = 'rgba(10, 11, 10, 0.98)';
            this.style.borderColor = 'rgba(239, 231, 210, 0.25)';
            this.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
        });

        socialCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.background = 'rgba(10, 11, 10, 0.95)';
            this.style.borderColor = 'rgba(239, 231, 210, 0.15)';
            this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
        });
    }

    // Animation du titre principal
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const titleLines = heroTitle.querySelectorAll('.title-line');
        titleLines.forEach((line, index) => {
            line.style.opacity = '0';
            line.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                line.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    // Effet de typing pour le titre
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Navbar scroll behavior removed - navbar now stays visible

    // Effet de particules flottantes (optionnel)
    function createFloatingParticles() {
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '2px';
            particle.style.height = '2px';
            particle.style.background = 'rgba(239, 231, 210, 0.3)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1';
            
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
            
            heroSection.appendChild(particle);
        }
    }

    // CSS pour l'animation des particules
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
    `;
    document.head.appendChild(style);

    // Démarrer les particules après un délai
    setTimeout(createFloatingParticles, 2000);

    // Animation des liens de navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.letterSpacing = '2px';
            this.style.transform = 'translateY(-2px)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.letterSpacing = '1px';
            this.style.transform = 'translateY(0)';
        });
    });

    // Effet de révélation progressive des cartes
    function revealCards() {
        gridCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            }, index * 150);
        });
    }

    // Démarrer l'animation des cartes
    setTimeout(revealCards, 1000);

    // Gestion du responsive menu (pour mobile)
    function handleMobileMenu() {
        const navMenu = document.querySelector('.nav-menu');
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            menuToggle.addEventListener('click', function() {
                navMenu.classList.toggle('mobile-active');
            });
        }
    }

    // Appeler la fonction au chargement et au redimensionnement
    handleMobileMenu();
    window.addEventListener('resize', handleMobileMenu);

    // Animation de chargement de la page
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Effet de smooth scroll pour les ancres
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Performance: Désactiver les animations sur les appareils moins puissants
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
        // Désactiver les animations complexes
        document.querySelectorAll('.grid-card, .social-icon, .nav-item').forEach(el => {
            el.style.transition = 'none';
        });
    }

    console.log('🍣 Qitchen - Page d\'accueil chargée avec succès!');
});

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeButton = document.querySelector('.mobile-menu-close');
    const body = document.body;
    
    function closeMenu() {
        // Add exit animation class
        mobileMenu.classList.add('closing');
        
        // Wait for animation to complete before hiding
        setTimeout(() => {
            mobileMenu.classList.remove('active', 'closing');
            body.style.overflow = '';
            menuToggle.classList.remove('active');
        }, 600); // Match animation duration
    }
    
    function openMenu() {
        mobileMenu.classList.add('active');
        body.style.overflow = 'hidden';
        menuToggle.classList.add('active');
    }
    
    if (menuToggle && mobileMenu) {
        // Open menu
        menuToggle.addEventListener('click', function() {
            const isOpen = mobileMenu.classList.contains('active');
            
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        
        // Close menu with close button
        if (closeButton) {
            closeButton.addEventListener('click', closeMenu);
        }
        
        // Close menu when clicking on overlay
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                closeMenu();
            }
        });
        
        // Close menu when clicking on menu items
        const menuItems = document.querySelectorAll('.mobile-menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', closeMenu);
        });
        
        // Close menu with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    }
}

// Initialize mobile menu when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
});

// ===========================================
// FRAMER ANIMATIONS - FONCTIONS
// ===========================================

function setupFramerAnimations() {
    // Page load animations
    setupPageLoadAnimations();
    
    // Hover animations
    setupHoverAnimations();
    
    // Stagger animations
    setupStaggerAnimations();
}

function setupPageLoadAnimations() {
    // Hero section animation
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroSection.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
        }, 100);
    }

    // Hero title animation
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroTitle.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 400);
    }

    // Sidebar grid animation
    const sidebarGrid = document.querySelector('.sidebar-grid');
    if (sidebarGrid) {
        sidebarGrid.style.opacity = '0';
        sidebarGrid.style.transform = 'translateX(30px)';
        
        setTimeout(() => {
            sidebarGrid.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            sidebarGrid.style.opacity = '1';
            sidebarGrid.style.transform = 'translateX(0)';
        }, 300);
    }
}

function setupHoverAnimations() {
    // Card hover animations
    document.querySelectorAll('.grid-card').forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'translateY(-8px) scale(1.03)';
            e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            
            const img = e.target.querySelector('.card-img');
            if (img) {
                img.style.transform = 'scale(1.1)';
            }
        });

        card.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = 'none';
            
            const img = e.target.querySelector('.card-img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });

    // Button hover animations removed
}

function setupStaggerAnimations() {
    // Stagger animation for cards
    const cards = document.querySelectorAll('.grid-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 500 + (index * 100));
    });
}
