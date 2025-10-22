// Reservation Page - Interactions JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Form validation and submission
    const reservationForm = document.querySelector('.reservation-form');
    const formInputs = document.querySelectorAll('.reservation-form input');
    const submitButton = document.querySelector('.reservation-button');
    
    // Form validation
    function validateForm() {
        let isValid = true;
        
        formInputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'rgba(239, 231, 210, 0.5)';
            } else {
                input.style.borderColor = 'rgba(239, 231, 210, 0.15)';
            }
        });
        
        // Email validation
        const emailInput = document.getElementById('email');
        if (emailInput && emailInput.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                isValid = false;
                emailInput.style.borderColor = 'rgba(239, 231, 210, 0.5)';
            }
        }
        
        // Phone validation
        const phoneInput = document.getElementById('phone');
        if (phoneInput && phoneInput.value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(phoneInput.value.replace(/\s/g, ''))) {
                isValid = false;
                phoneInput.style.borderColor = 'rgba(239, 231, 210, 0.5)';
            }
        }
        
        // Date validation (not in the past)
        const dateInput = document.getElementById('date');
        if (dateInput && dateInput.value) {
            const selectedDate = new Date(dateInput.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                isValid = false;
                dateInput.style.borderColor = 'rgba(239, 231, 210, 0.5)';
            }
        }
        
        return isValid;
    }
    
    // Form submission
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                // Show loading state
                submitButton.style.opacity = '0.7';
                submitButton.style.pointerEvents = 'none';
                
                // Simulate form submission
                setTimeout(() => {
                    alert('Réservation confirmée ! Nous vous contacterons bientôt pour confirmer votre table.');
                    
                    // Reset form
                    reservationForm.reset();
                    
                    // Reset button state
                    submitButton.style.opacity = '1';
                    submitButton.style.pointerEvents = 'auto';
                }, 1500);
            } else {
                alert('Veuillez remplir tous les champs correctement.');
            }
        });
    }
    
    // Input animations
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(239, 231, 210, 0.1)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
        
        input.addEventListener('input', function() {
            if (this.value.trim()) {
                this.style.borderColor = 'rgba(239, 231, 210, 0.3)';
            } else {
                this.style.borderColor = 'rgba(239, 231, 210, 0.15)';
            }
        });
    });
    
    // Button hover effects
    if (submitButton) {
        submitButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 8px 20px rgba(239, 231, 210, 0.2)';
        });
        
        submitButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    }
    
    // Set minimum date to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.min = tomorrow.toISOString().split('T')[0];
    }
    
    // Set default time to next available hour
    const timeInput = document.getElementById('time');
    if (timeInput) {
        const now = new Date();
        const nextHour = new Date(now);
        nextHour.setHours(now.getHours() + 1, 0, 0, 0);
        timeInput.value = nextHour.toTimeString().slice(0, 5);
    }
    
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
    
    // Observe form elements
    const formElements = document.querySelectorAll('.reservation-form, .reservation-section-header, .reservation-description');
    formElements.forEach(element => {
        observer.observe(element);
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
    `;
    document.head.appendChild(style);
    
    console.log('🍣 Reservation page loaded successfully!');
});
