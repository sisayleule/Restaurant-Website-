// ===================================
// Smooth Scroll Navigation
// ===================================
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Close mobile menu if open
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        
        // Smooth scroll to section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// ===================================
// Mobile Hamburger Menu Toggle
// ===================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===================================
// Highlight Active Section on Scroll
// ===================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function highlightActiveSection() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// ===================================
// Scroll Reveal Animations
// ===================================
function revealOnScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
}

// Initial check on page load
window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

// ===================================
// Sticky Navigation on Scroll
// ===================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// Lightbox Gallery
// ===================================
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = lightbox.querySelector('.lightbox-close');
const lightboxPrev = lightbox.querySelector('.lightbox-prev');
const lightboxNext = lightbox.querySelector('.lightbox-next');

let currentImageIndex = 0;
const galleryImages = [
    'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1200&h=1200&fit=crop',
    'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1200&h=1200&fit=crop',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200&h=1200&fit=crop',
    'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&h=1200&fit=crop',
    'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1200&h=1200&fit=crop',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=1200&fit=crop'
];

// Open lightbox
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentImageIndex = index;
        openLightbox();
    });
});

function openLightbox() {
    lightbox.classList.add('active');
    updateLightboxContent();
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateLightboxContent() {
    lightboxImage.src = galleryImages[currentImageIndex];
}

// Close lightbox
lightboxClose.addEventListener('click', closeLightbox);

// Close on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Previous image
lightboxPrev.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryEmojis.length) % galleryEmojis.length;
    updateLightboxContent();
});

// Next image
lightboxNext.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryEmojis.length;
    updateLightboxContent();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        lightboxPrev.click();
    } else if (e.key === 'ArrowRight') {
        lightboxNext.click();
    }
});

// ===================================
// Contact Form Submission
// ===================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    try {
        const response = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        const data = await response.json();

        if (response.ok) {
            alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
            contactForm.reset();
        } else {
            alert(data.error || 'Failed to send message');
        }
    } catch (error) {
        alert('Server error. Please make sure the server is running.');
        console.error('Contact form error:', error);
    }
});

// ===================================
// Book a Table Button
// ===================================
const bookButton = document.querySelector('.btn-primary');

bookButton.addEventListener('click', () => {
    // Scroll to contact section
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
    
    // Optional: Show booking message
    setTimeout(() => {
        alert('Please fill out the contact form to book your table, and we\'ll confirm your reservation shortly!');
    }, 500);
});

// ===================================
// View Menu Button
// ===================================
const viewMenuBtn = document.getElementById('viewMenuBtn');

if (viewMenuBtn) {
    viewMenuBtn.addEventListener('click', () => {
        document.getElementById('menu').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// ===================================
// Smooth Page Load Animation
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// Login & Register Modal Functionality
// ===================================
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const loginClose = document.getElementById('loginClose');
const registerClose = document.getElementById('registerClose');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Open Login Modal
loginBtn.addEventListener('click', () => {
    loginModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Open Register Modal
registerBtn.addEventListener('click', () => {
    registerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close Login Modal
loginClose.addEventListener('click', () => {
    loginModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close Register Modal
registerClose.addEventListener('click', () => {
    registerModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modals when clicking outside
loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

registerModal.addEventListener('click', (e) => {
    if (e.target === registerModal) {
        registerModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Switch between Login and Register
switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.remove('active');
    registerModal.classList.add('active');
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.classList.remove('active');
    loginModal.classList.add('active');
});

// Handle Login Form Submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert(`Welcome back, ${data.user.name}!`);
            localStorage.setItem('user', JSON.stringify(data.user));
            loginModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            loginForm.reset();
            updateAuthUI(data.user);
        } else {
            alert(data.error || 'Login failed');
        }
    } catch (error) {
        alert('Server error. Please make sure the server is running.');
        console.error('Login error:', error);
    }
});

// Handle Register Form Submission
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    // Validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    try {
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert(`Registration successful! Welcome, ${name}!`);
            registerModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            registerForm.reset();
        } else {
            alert(data.error || 'Registration failed');
        }
    } catch (error) {
        alert('Server error. Please make sure the server is running.');
        console.error('Registration error:', error);
    }
});

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (loginModal.classList.contains('active')) {
            loginModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        if (registerModal.classList.contains('active')) {
            registerModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// ===================================
// Update Auth UI
// ===================================
function updateAuthUI(user) {
    if (user) {
        // Hide login and register buttons
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        
        // Show logout button with user name
        logoutBtn.style.display = 'block';
        logoutBtn.textContent = `Logout (${user.name})`;
    }
}

// Check if user is logged in on page load
window.addEventListener('load', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        updateAuthUI(user);
    }
    
    // Load theme preference
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').querySelector('.theme-icon').textContent = '☀️';
    }
});

// ===================================
// Dark/Light Mode Toggle
// ===================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// ===================================
// Logout Functionality
// ===================================
const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('user');
        alert('You have been logged out successfully!');
        location.reload();
    }
});
