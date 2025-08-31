    // ============= CONTROLLER (Business Logic) =============
    const AppController = {
    // Navigation Logic
    smoothScroll: (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        }
    },
    
    handleNavigation: (sectionId) => {
        AppController.smoothScroll(sectionId);
        if (history.pushState) {
        history.pushState(null, null, `#${sectionId}`);
        } else {
        location.hash = `#${sectionId}`;
        }
    },
    
    // Form Validation Logic
    validateEmail: (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },
    
    validatePhone: (phone) => {
        const regex = /^[\+]?[1-9][\d]{0,15}$/;
        return regex.test(phone.replace(/\s+/g, ''));
    },
    
    validateForm: (formData) => {
        const errors = {};
        
        if (!formData.name || formData.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters';
        }
        
        if (!formData.email || !AppController.validateEmail(formData.email)) {
        errors.email = 'Please enter a valid email address';
        }
        
        if (!formData.message || formData.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters';
        }
        
        return {
        isValid: Object.keys(errors).length === 0,
        errors
        };
    },

    handleContact: async (formData) => {
        try {
        const validation = AppController.validateForm(formData);
        
        if (!validation.isValid) {
            return {
            success: false,
            message: 'Please fix the errors and try again',
            errors: validation.errors
            };
        }

        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Contact form submitted:', formData);
        
        return {
            success: true,
            message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
            errors: {}
        };
        
        } catch (error) {
        return {
            success: false,
            message: 'Something went wrong. Please try again later.',
            errors: {}
        };
        }
    },

    filterPortfolio: (projects, category) => {
        if (category === 'All') {
        return projects;
        }
        return projects.filter(project => project.category === category);
    },

    getStaggeredDelay: (index, baseDelay = 0) => {
        return baseDelay + (index * 0.1);
    },

    formatPrice: (price) => {
        return price.replace('From ₹', '₹');
    },
    
    getCurrentYear: () => {
        return new Date().getFullYear();
    },
    
    // Theme Logic
    getRandomGradient: () => {
        const gradients = [
        'from-blue-500 to-purple-600',
        'from-purple-500 to-pink-600',
        'from-green-500 to-blue-600',
        'from-yellow-500 to-red-600',
        'from-indigo-500 to-purple-600'
        ];
        return gradients[Math.floor(Math.random() * gradients.length)];
    },
    
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        };
    },

    saveToStorage: (key, data) => {
        try {
        if (typeof Storage !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(data));
        }
        } catch (error) {
        console.warn('Storage not available');
        }
    },
    
    getFromStorage: (key) => {
        try {
        if (typeof Storage !== 'undefined') {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        }
        } catch (error) {
        console.warn('Storage not available');
        }
        return null;
    }
    };

    export default AppController;