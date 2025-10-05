// Contact Page - Interactions JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Hover effects removed
    
    // Animation on scroll
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
    
    // Observe contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        observer.observe(card);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            animation: fadeInUp 0.8s ease-out;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .hours-item, .info-item {
            transition: all 0.3s ease;
        }
        
        .social-icon {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
    
    // Copy contact info functionality
    const infoValues = document.querySelectorAll('.info-value');
    
    infoValues.forEach(value => {
        value.addEventListener('click', function() {
            const text = this.textContent.replace(/\n/g, ' ').trim();
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    // Show temporary feedback
                    const originalText = this.textContent;
                    this.textContent = 'Copied!';
                    this.style.color = '#4CAF50';
                    
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.style.color = '#EFE7D2';
                    }, 1000);
                });
            }
        });
        
        // Add cursor pointer for clickable elements
        value.style.cursor = 'pointer';
    });
    
    // Smooth scroll for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('📞 Contact page loaded successfully!');
});
