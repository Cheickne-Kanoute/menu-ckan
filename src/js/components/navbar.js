// Navbar Component - Include and Initialize
class NavbarComponent {
    constructor() {
        this.navbarContainer = null;
        this.currentPage = this.getCurrentPage();
        this.init();
    }

    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('menu')) return 'menu';
        if (path.includes('reservation')) return 'reservation';
        if (path.includes('a-propos')) return 'about';
        if (path.includes('contact')) return 'contact';
        if (path.includes('index.html') || path === '/' || path === '') return 'index';
        return 'index';
    }

    async init() {
        try {
            // Load navbar HTML
            await this.loadNavbar();
            
            // Load navbar CSS
            this.loadNavbarCSS();
            
            // Initialize navbar functionality
            this.initializeNavbar();
            
            // Set active nav item
            this.setActiveNavItem();
            
            console.log('🍣 Navbar component loaded successfully!');
        } catch (error) {
            console.error('Error loading navbar:', error);
        }
    }

    async loadNavbar() {
        try {
            const response = await fetch('navbar.html');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const navbarHTML = await response.text();
            
            // Find the navbar container in the current page
            this.navbarContainer = document.querySelector('.navbar-container') || 
                                 document.querySelector('.navbar') || 
                                 document.querySelector('nav');
            
            if (this.navbarContainer) {
                // Replace existing navbar
                this.navbarContainer.outerHTML = navbarHTML;
                this.navbarContainer = document.querySelector('.navbar');
            } else {
                // Insert navbar at the beginning of body
                document.body.insertAdjacentHTML('afterbegin', navbarHTML);
                this.navbarContainer = document.querySelector('.navbar');
            }
        } catch (error) {
            console.error('Error loading navbar HTML:', error);
        }
    }

    loadNavbarCSS() {
        // Check if navbar CSS is already loaded
        if (document.querySelector('link[href*="navbar.css"]')) {
            return;
        }

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '../../src/css/components/navbar.css';
        link.type = 'text/css';
        document.head.appendChild(link);
    }

    initializeNavbar() {
        // Initialize mobile menu functionality
        this.initMobileMenu();
        
        // Initialize navbar interactions
        this.initNavbarInteractions();
    }

    initMobileMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeButton = document.querySelector('.mobile-menu-close');
        const body = document.body;
        
        if (!menuToggle || !mobileMenu) return;

        function closeMenu() {
            mobileMenu.classList.add('closing');
            setTimeout(() => {
                mobileMenu.classList.remove('active', 'closing');
                body.style.overflow = '';
                menuToggle.classList.remove('active');
            }, 600);
        }
        
        function openMenu() {
            mobileMenu.classList.add('active');
            body.style.overflow = 'hidden';
            menuToggle.classList.add('active');
        }
        
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

    initNavbarInteractions() {
        // Navbar hover effects
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

        // Menu toggle hover effect
        const menuToggle = document.querySelector('.menu-toggle');
        if (menuToggle) {
            menuToggle.addEventListener('mouseenter', function() {
                this.style.background = 'rgba(24, 24, 24, 0.8)';
                this.style.transform = 'scale(1.05)';
            });

            menuToggle.addEventListener('mouseleave', function() {
                this.style.background = 'rgba(24, 24, 24, 0.5)';
                this.style.transform = 'scale(1)';
            });
        }
    }

    setActiveNavItem() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.classList.remove('nav-item-active');
            
            // Set active based on current page
            if (this.currentPage === 'menu' && item.id === 'nav-menu') {
                item.classList.add('nav-item-active');
            } else if (this.currentPage === 'reservation' && item.id === 'nav-reservation') {
                item.classList.add('nav-item-active');
            } else if (this.currentPage === 'about' && item.id === 'nav-about') {
                item.classList.add('nav-item-active');
            } else if (this.currentPage === 'contact' && item.id === 'nav-contact') {
                item.classList.add('nav-item-active');
            } else if (this.currentPage === 'index' && item.id === 'nav-reservation') {
                item.classList.add('nav-item-active');
            }
        });
    }
}

// Initialize navbar when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new NavbarComponent();
});

// Export for potential use in other scripts
window.NavbarComponent = NavbarComponent;
