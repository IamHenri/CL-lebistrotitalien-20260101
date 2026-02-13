// ==========================================
// INITIALIZATION
// ==========================================

// Initialize AOS (Animation On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ==========================================
// SMOOTH SCROLL
// ==========================================

// Smooth scroll pour tous les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            // Si le lien pointe vers #carte, ouvrir la carte dépliable
            if (targetId === '#carte') {
                // Ouvrir la carte si elle est fermée
                const carteContent = document.getElementById('carteContent');
                const carteToggleBtn = document.getElementById('carteToggleBtn');
                
                if (!carteContent.classList.contains('active')) {
                    carteToggleBtn.classList.add('active');
                    carteContent.classList.add('active');
                }
                
                // Attendre que l'animation d'ouverture soit terminée avant de scroller
                setTimeout(() => {
                    const offsetTop = target.offsetTop - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }, 300);
            } else {
                // Scroll normal pour les autres ancres
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});
// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

const navbar = document.getElementById('mainNav');

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// ==========================================
// ACTIVE NAV LINK ON SCROLL
// ==========================================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// BOUTON RÉSERVER FIXE - VISIBILITY
// ==========================================

const btnReserverFixe = document.getElementById('btnReserverFixe');

// Masquer le bouton dans le hero, l'afficher au scroll
window.addEventListener('scroll', function() {
    const heroHeight = document.querySelector('.hero-section').offsetHeight;
    
    if (window.scrollY > heroHeight - 100) {
        btnReserverFixe.style.opacity = '1';
        btnReserverFixe.style.visibility = 'visible';
    } else {
        btnReserverFixe.style.opacity = '0';
        btnReserverFixe.style.visibility = 'hidden';
    }
});

// Initialiser l'état du bouton au chargement
window.addEventListener('load', function() {
    const heroHeight = document.querySelector('.hero-section').offsetHeight;
    if (window.scrollY <= heroHeight - 100) {
        btnReserverFixe.style.opacity = '0';
        btnReserverFixe.style.visibility = 'hidden';
    }
});

// ==========================================
// CARTE DU RESTAURANT - TOGGLE
// ==========================================


// ==========================================
// ANIMATIONS SUPPLÉMENTAIRES
// ==========================================

// Ajout d'une classe lors du scroll pour les animations
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scroll vers le bas
        document.body.classList.add('scrolling-down');
        document.body.classList.remove('scrolling-up');
    } else {
        // Scroll vers le haut
        document.body.classList.add('scrolling-up');
        document.body.classList.remove('scrolling-down');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// ==========================================
// PRELOAD & PERFORMANCE
// ==========================================

// Lazy loading pour les images (si besoin)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback pour navigateurs anciens
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log('%c🍕 Le Bistrot Italien - Site développé avec passion 🍝', 
    'color: #D4AF37; font-size: 16px; font-weight: bold; padding: 10px;');
