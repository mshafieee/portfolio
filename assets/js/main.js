// Portfolio Interactive Features
// Author: Mohamed Alshafie

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Project card hover effects with additional info
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click tracking for project interest
    projectCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const projectTitle = this.querySelector('h3').textContent;
            console.log(`Interest shown in project: ${projectTitle}`);
            
            // Add visual feedback
            this.style.boxShadow = '0 25px 50px rgba(102, 126, 234, 0.4)';
            setTimeout(() => {
                this.style.boxShadow = '';
            }, 3000);
        });
    });

    // Skills tag animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skill-tag')) {
                    entry.target.style.animation = 'pulse 0.6s ease-in-out';
                }
                if (entry.target.classList.contains('project-card')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.skill-tag, .project-card').forEach(el => {
        observer.observe(el);
    });

    // Contact section interaction
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
        contactSection.addEventListener('click', function(e) {
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                console.log('Contact link clicked - potential client interest!');
            }
        });
    }

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Premium badge pulse animation
    const premiumBadges = document.querySelectorAll('.premium-badge');
    premiumBadges.forEach(badge => {
        setInterval(() => {
            badge.style.animation = 'none';
            setTimeout(() => {
                badge.style.animation = 'pulse 1s ease-in-out';
            }, 10);
        }, 5000);
    });
});

// Add CSS for animations (will be added to main.css later)
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .project-card {
        opacity: 0.8;
        transform: translateY(20px);
        transition: all 0.6s ease-out;
    }
`;
document.head.appendChild(style);
