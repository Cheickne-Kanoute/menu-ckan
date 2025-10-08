// Menu Data Loading and Rendering
let menuData = null;

// Load menu data from JSON file
async function loadMenuData() {
    try {
        const response = await fetch('/data/menu-data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        menuData = await response.json();
        return menuData;
    } catch (error) {
        console.error('Error loading menu data:', error);
        return null;
    }
}

// Generate menu tabs dynamically
function generateMenuTabs(categories) {
    const tabsContainer = document.querySelector('.menu-filter-tabs');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = '';
    
    categories.forEach((category, index) => {
        const tab = document.createElement('div');
        tab.className = `menu-tab ${index === 0 ? 'active' : ''}`;
        tab.setAttribute('data-category', category.id);
        tab.textContent = category.name;
        tabsContainer.appendChild(tab);
    });
}

// Generate menu sections dynamically
function generateMenuSections(categories) {
    const sectionsContainer = document.querySelector('.menu-sections');
    if (!sectionsContainer) return;

    sectionsContainer.innerHTML = '';
    
    categories.forEach((category, index) => {
        const section = document.createElement('div');
        section.className = `menu-section ${index === 0 ? 'active' : ''}`;
        section.id = category.id;
        
        section.innerHTML = `
            <div class="section-header">
                <div class="section-decoration">
                    <div class="decoration-icon"></div>
                    <div class="decoration-line"></div>
                </div>
                <h2 class="section-title">${category.name}</h2>
                <div class="section-decoration">
                    <div class="decoration-line"></div>
                    <div class="decoration-icon"></div>
                </div>
            </div>
            <div class="menu-items">
                ${generateMenuItems(category.items)}
            </div>
        `;
        
        sectionsContainer.appendChild(section);
    });
}

// Generate menu items for a category
function generateMenuItems(items) {
    return items.map(item => `
        <div class="menu-item">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" class="item-img">
                ${item.modelUrl ? `<div class="ar-icon" data-model-url="${item.modelUrl}" data-ios-model-url="${item.iosModelUrl || ''}" data-item-name="${item.name}">
                    <img src="/assets/icons/view_in_ar_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="AR" class="ar-icon-svg">
                </div>` : ''}
            </div>
            <div class="menu-item-content">
                <div class="item-header">
                    <div class="item-name-container">
                        <h3 class="item-name">${item.name}</h3>
                    </div>
                    <div class="item-dots"></div>
                    <div class="item-price">${item.price}</div>
                </div>
                <p class="item-description">${item.description}</p>
            </div>
        </div>
    `).join('');
}

// Initialize menu with data
async function initMenu() {
    const data = await loadMenuData();
    if (!data) {
        console.error('Failed to load menu data');
        return;
    }

    // Generate tabs and sections
    generateMenuTabs(data.categories);
    generateMenuSections(data.categories);
    
    // Initialize filter functionality after content is generated
    initMenuFilters();
    
    // Initialize AR functionality
    initARModal();
}

// Menu Filter Functionality
function initMenuFilters() {
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuSections = document.querySelectorAll('.menu-section');
    
    if (menuTabs.length > 0 && menuSections.length > 0) {
        menuTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Remove active class from all tabs
                menuTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all sections
                menuSections.forEach(section => {
                    section.classList.remove('active');
                });
                
                // Show selected section
                const targetSection = document.getElementById(category);
                if (targetSection) {
                    targetSection.classList.add('active');
                    
                    // Scroll to the section with smooth animation
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

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

// AR Modal Functionality
function initARModal() {
    const arModal = document.getElementById('arModal');
    const arModalClose = document.getElementById('arModalClose');
    const arModelViewer = document.getElementById('arModelViewer');
    const arIcons = document.querySelectorAll('.ar-icon');
    
    // Open AR modal when clicking on AR icon
    arIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const modelUrl = this.getAttribute('data-model-url');
            const iosModelUrl = this.getAttribute('data-ios-model-url');
            const itemName = this.getAttribute('data-item-name');
            
            if (modelUrl) {
                // Create a fresh model-viewer element to avoid state persistence
                const newModelViewer = document.createElement('model-viewer');
                newModelViewer.id = 'arModelViewer';
                newModelViewer.src = modelUrl;
                newModelViewer.setAttribute('ios-src', iosModelUrl || modelUrl); // Use iOS-specific URL if available
                newModelViewer.setAttribute('ar', '');
                newModelViewer.setAttribute('ar-modes', 'scene-viewer quick-look webxr');
                newModelViewer.setAttribute('camera-controls', '');
                newModelViewer.setAttribute('auto-rotate', '');
                newModelViewer.style.width = '100%';
                newModelViewer.style.height = '400px';
                
                // Replace the old model viewer
                const modalBody = document.querySelector('.ar-modal-body');
                modalBody.innerHTML = '';
                modalBody.appendChild(newModelViewer);
                
                document.querySelector('.ar-modal-title').textContent = `Vue AR - ${itemName}`;
                arModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close AR modal
    function closeARModal() {
        arModal.style.display = 'none';
        document.body.style.overflow = '';
        // Clear the modal body content
        const modalBody = document.querySelector('.ar-modal-body');
        modalBody.innerHTML = '';
    }
    
    // Close modal with close button
    if (arModalClose) {
        arModalClose.addEventListener('click', closeARModal);
    }
    
    // Close modal when clicking outside
    arModal.addEventListener('click', function(e) {
        if (e.target === arModal) {
            closeARModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && arModal.style.display === 'flex') {
            closeARModal();
        }
    });
}

// Initialize mobile menu when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initMenu();
});
