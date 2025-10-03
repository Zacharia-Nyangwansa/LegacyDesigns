// Global variables
let isRomanticPageVisible = false;
let secretClickCount = 0;

// Portfolio functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function showProjectModal(projectType) {
    // Add dynamic project modal functionality
    alert(`Demo: ${projectType} project details would be shown here!`);
}

function showSecretSection() {
    secretClickCount++;
    
    if (secretClickCount === 3) {
        // Special animation for the heart button
        const heartButton = document.querySelector('.secret-trigger');
        heartButton.style.animation = 'heartPulse 0.5s infinite';
        
        setTimeout(() => {
            revealRomanticPage();
        }, 2000);
    } else if (secretClickCount < 3) {
        // Show cryptic message
        const messages = [
            "Something special is brewing...",
            "Almost there... Keep looking!",
            "The magic is about to unfold!"
        ];
        alert(messages[secretClickCount - 1]);
    }
}

function revealRomanticPage() {
    const portfolioPage = document.getElementById('portfolioPage');
    const romanticPage = document.getElementById('romanticPage');
    
    // Create transition effect
    portfolioPage.style.transition = 'opacity 1s ease';
    romanticPage.style.transition = 'opacity 1s ease';
    
    // Hide portfolio, show romantic page
    portfolioPage.classList.add('hidden');
    romanticPage.classList.remove('hidden');
    
    isRomanticPageVisible = true;
    
    // Add floating hearts effect
    createMagicalTransition();
}

function createMagicalTransition() {
    const particlesContainer = document.querySelector('.floating-particles');
    
    // Create burst of hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💕';
            heart.style.position = 'absolute';
            heart.style.fontSize = Math.random() * 25 + 20 + 'px';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = '50%';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '100';
            heart.style.animation = 'magicalFloat 3s ease-out forwards';
            heart.style.color = 'rgba(255, 107, 107, 0.8)';
            
            particlesContainer.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 3000);
        }, i * 100);
    }
}

// Add CSS animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes magicalFloat {
        0% {
            transform: translateY(0) scale(0.5) rotate(0deg);
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        100% {
            transform: translateY(-200px) scale(1.2) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Romantic page functions
function showYesMessage() {
    const overlay = document.getElementById('yesOverlay');
    overlay.classList.remove('hidden');
    
    // Initialize Yes overlay video background
    initializeYesOverlayVideo();
    
    // Create enhanced celebration effects
    setTimeout(() => {
        createEnhancedCelebrationEffects();
    }, 500);
    
    // Show her picture
    showHerPicture();
    
    // Create floating hearts in Yes overlay
    createYesOverlayHearts();
    
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
}

function showNoMessage() {
    const overlay = document.getElementById('noOverlay');
    overlay.classList.remove('hidden');
    
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    
    // Gentle floating hearts for comfort
    createComfortHearts();
}

function closeOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    overlay.classList.add('hidden');
    
    // Restore background scrolling
    document.body.style.overflow = '';
}

// Initialize Yes overlay video background
function initializeYesOverlayVideo() {
    const yesVideo = document.querySelector('.yes-bg-video');
    if (yesVideo) {
        yesVideo.play().catch(() => {
            // Fallback if video doesn't load
            console.log('Yes overlay video fallback activated');
        });
    }
}

// Create enhanced Yes overlay hearts
function createYesOverlayHearts() {
    const heartsContainer = document.querySelector('.yes-hearts-container');
    
    // Create continuous floating hearts
    setInterval(() => {
        if (Math.random() > 0.3) { // More frequent hearts for Yes overlay
            const heart = document.createElement('div');
            heart.innerHTML = '💕';
            heart.style.position = 'absolute';
            heart.style.fontSize = Math.random() * 25 + 25 + 'px';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = '100vh';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '100';
            heart.style.animation = 'yesHeartFloat 6s ease-out forwards';
            heart.style.filter = 'drop-shadow(0 0 10px rgba(255, 107, 107, 0.6))';
            
            heartsContainer.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 6000);
        }
    }, 800);
}

// Enhanced celebration effects
function createEnhancedCelebrationEffects() {
    // Create burst effect from center
    createCelebrationBurst();
    
    // Create particle explosion
    createParticleExplosion();
    
    // Add sparkle effects
    createSparkleBurst();
}

function createCelebrationBurst() {
    const heartsContainer = document.querySelector('.yes-hearts-container');
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Create radial burst of hearts
    for (let i = 0; i < 24; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💕';
            heart.style.position = 'absolute';
            heart.style.fontSize = Math.random() * 30 + 25 + 'px';
            heart.style.left = centerX + 'px';
            heart.style.top = centerY + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '200';
            heart.style.animation = `burstHeart 3s ease-out forwards`;
            heart.style.setProperty('--angle', (i * 15) + 'deg');
            
            heartsContainer.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 3000);
        }, i * 50);
    }
}

function createParticleExplosion() {
    const heartsContainer = document.querySelector('.yes-hearts-container');
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.innerHTML = '✨';
            particle.style.position = 'absolute';
            particle.style.fontSize = Math.random() * 20 + 15 + 'px';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = Math.random() * window.innerHeight + 'px';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '150';
            particle.style.animation = 'sparkleExplosion 2s ease-out forwards';
            
            heartsContainer.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 2000);
        }, i * 100);
    }
}

function createSparkleBurst() {
    const heartsContainer = document.querySelector('.yes-hearts-container');
    
    // Create twinkling effect around the screen
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '⭐';
            sparkle.style.position = 'absolute';
            sparkle.style.fontSize = '20px';
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '100';
            sparkle.style.animation = 'starTwinkle 4s ease-out forwards';
            
            heartsContainer.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 4000);
        }, i * 200);
    }
}

function createComfortHearts() {
    const particlesContainer = document.querySelector('.floating-particles');
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💙';
            heart.style.position = 'fixed';
            heart.style.fontSize = '20px';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = '100vh';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '999';
            heart.style.animation = 'gentleFloat 6s ease-out forwards';
            heart.style.color = 'rgba(100, 150, 255, 0.6)';
            
            particlesContainer.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 6000);
        }, i * 300);
    }
}

function showHerPicture() {
    const img = document.getElementById('herPicture');
    if (img) {
        // Add image loading animation
        img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        img.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
        
        // Check if image is already loaded (cached)
        if (img.complete && img.naturalWidth > 0) {
            // Image is already loaded
            setTimeout(() => {
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
            }, 100);
            return;
        }
        
        img.onload = function() {
            img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        };
        
        // If image fails to load, show placeholder
        img.onerror = function() {
            console.log('Image failed to load, showing placeholder');
            img.src = 'data:image/svg+xml;base64,' + btoa(`
                <svg width="200" height="250" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="250" fill="#ff6b6b" rx="15"/>
                    <text x="100" y="130" text-anchor="middle" font-family="Arial" font-size="60" fill="white">💕</text>
                    <text x="100" y="200" text-anchor="middle" font-family="Arial" font-size="12" fill="white">Your Beautiful Picture</text>
                </svg>
            `);
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        };
        
        // Force reload of the image to trigger events
        const currentSrc = img.src;
        img.src = '';
        setTimeout(() => {
            img.src = currentSrc;
        }, 10);
    }
}

// Add celebration animation CSS
const celebrationStyle = document.createElement('style');
celebrationStyle.textContent = `
    @keyframes celebrationFloat {
        0% {
            transform: translateY(0) scale(0.5) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        100% {
            transform: translateY(-300px) scale(1.5) rotate(720deg);
            opacity: 0;
        }
    }
    
    @keyframes gentleFloat {
        0% {
            transform: translateY(0) scale(0);
            opacity: 0;
        }
        20% {
            opacity: 0.8;
        }
        100% {
            transform: translateY(-400px) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(celebrationStyle);

// Enhanced video background functionality
function initializeVideoBackground() {
    const video = document.querySelector('.video-background video');
    
    // Fallback background if video doesn't load
    video.onerror = function() {
        const videoContainer = document.querySelector('.video-background');
        videoContainer.innerHTML = `
            <div style="
                width: 100%; 
                height: 100%; 
                background: linear-gradient(135deg, 
                    #667eea 0%, 
                    #764ba2 25%, 
                    #f093fb 50%, 
                    #f5576c 75%, 
                    #4facfe 100%
                );
                position: absolute;
                animation: gradientShift 10s ease infinite;
            "></div>
            <div style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="20" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="50" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="20" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="80" r="2" fill="rgba(255,255,255,0.1)"/></svg>') repeat;
                animation: twinkle 20s linear infinite;
            "></div>
        `;
    };
}

// Initialize sparkle effects
function createSparkles() {
    const sparklesContainer = document.querySelector('.floating-particles');
    
    setInterval(() => {
        if (Math.random() > 0.7) {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'absolute';
            sparkle.style.fontSize = '14px';
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '10';
            sparkle.style.animation = 'sparkle 2s ease-out forwards';
            sparkle.style.color = 'rgba(255, 255, 255, 0.8)';
            
            sparklesContainer.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 2000);
        }
    }, 1500);
}

// Enhanced mouse parallax effect
function initializeParallaxEffect() {
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 30;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 30;
        
        const background = document.querySelector('.video-overlay');
        const particles = document.querySelector('.floating-particles');
        
        if (background && !isRomanticPageVisible) {
            background.style.transform = 'translate(' + mouseX + 'px, ' + mouseY + 'px)';
        }
        
        if (particles) {
            particles.style.transform = 'translate(' + mouseX * 0.5 + 'px, ' + mouseY * 0.5 + 'px)';
        }
    });
}

// Add keyboard support for accessibility
function initializeKeyboardSupport() {
    document.addEventListener('keydown', function(e) {
        // ESC key closes overlays
        if (e.key === 'Escape') {
            closeOverlay('yesOverlay');
            closeOverlay('noOverlay');
        }
        
        // Arrow keys for navigation on portfolio page
        if (!isRomanticPageVisible) {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault();
                scrollToSection('projects');
            }
        }
        
        // Enter/Return activates focused elements
        if (e.key === 'Enter') {
            const activeElement = document.activeElement;
            if (activeElement && (activeElement.tagName === 'BUTTON' || activeElement.classList.contains('nav-link'))) {
                activeElement.click();
            }
        }
    });
}

// Add enhanced Yes overlay animations
const enhancedStyle = document.createElement('style');
enhancedStyle.textContent = `
    @keyframes sparkle {
        0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
    
    @keyframes gradientBreak {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
    }
    
    @keyframes twinkle {
        0% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0); }
    }
    
    @keyframes yesHeartFloat {
        0% {
            transform: translateY(100vh) rotate(0deg) scale(0.5);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-200px) rotate(360deg) scale(1.2);
            opacity: 0;
        }
    }
    
    @keyframes burstHeart {
        0% {
            transform: translate(0, 0) scale(0.5);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        100% {
            transform: translate(
                calc(cos(var(--angle)) * 400px),
                calc(sin(var(--angle)) * 400px)
            ) scale(1);
            opacity: 0;
        }
    }
    
    @keyframes sparkleExplosion {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
        }
        50% {
            opacity: 1;
            transform: scale(1.5) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
    
        @keyframes starTwinkle {
            0% {
                opacity: 0;
                transform: scale(0) rotate(0deg);
            }
            25% {
                opacity: 1;
                transform: scale(1) rotate(90deg);
            }
            50% {
                opacity: 0.5;
                transform: scale(1.2) rotate(180deg);
            }
            75% {
                opacity: 1;
                transform: scale(0.8) rotate(270deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
`;
document.head.appendChild(enhancedStyle);

// Image loading debug helper (can be removed after testing)
function debugImageLoading() {
    const img = document.getElementById('herPicture');
    if (img) {
        console.log('Image debug:', {
            src: img.src,
            complete: img.complete,
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize video background
    initializeVideoBackground();
    
    // Start sparkle animation
    createSparkles();
    
    // Initialize parallax effect
    initializeParallaxEffect();
    
    // Initialize keyboard support
    initializeKeyboardSupport();
    
    
    // Add smooth scroll behavior for portfolio navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                scrollToSection(href.substring(1));
            }
        });
    });
    
    // Add hover effects to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    console.log('💕 Romantic Portfolio initialized successfully!');
});

// Social helpers: copy-to-clipboard for email/phone and WhatsApp on mobile
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 2000);
}

function isMobile() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

function handleEmailClick(e) {
    const email = 'legacyofdesigns@gmail.com';
    if (!isMobile()) {
        e.preventDefault();
        navigator.clipboard?.writeText(email).then(() => {
            showToast('Email copied to clipboard');
        }).catch(() => {
            showToast('Email: ' + email);
        });
        return false;
    }
    // On mobile, allow default mailto
    return true;
}

function handlePhoneClick(e) {
    const phoneRaw = '+254769524121';
    if (isMobile()) {
        // Offer WhatsApp deep link; fallback to tel
        const wa = 'https://wa.me/254769524121';
        // Try opening WhatsApp in a new tab
        window.open(wa, '_blank');
        // Let tel link still work if user prefers phone dialer
        return true;
    } else {
        e.preventDefault();
        navigator.clipboard?.writeText(phoneRaw).then(() => {
            showToast('Phone number copied');
        }).catch(() => {
            showToast('Phone: ' + phoneRaw);
        });
        return false;
    }
}

// ===== Contact submission configuration =====
// mode: 'webhook' to send JSON to your backend; 'google' to send to Google Forms
const CONTACT_SUBMIT_CONFIG = {
    mode: 'google',
    webhookUrl: 'https://your-backend.example.com/api/contact', // replace with your endpoint
    // Google Forms: set your real form ID and entry IDs (from "View source" on the live form)
    googleFormId: '1bGJ3FwCv3xyg6iw3IhwtdJj4tmcc9tpi1Thmeq3oSkU',
    googleEntries: {
        name: 'entry.2036452508',
        contact: 'entry.1470378511',
        message: 'entry.2124306207'
    }
};

// Contact form submission (validation + configurable transport)
async function submitContact(event) {
    event.preventDefault();
    const formEl = document.getElementById('contactForm');
    const name = document.getElementById('name').value.trim();
    const contact = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const status = document.getElementById('formStatus');
    const submitBtn = formEl.querySelector('button[type="submit"]');

    status.textContent = '';

    // Basic validation for either email-like or phone-like contact
    const looksLikeEmail = /.+@.+\..+/.test(contact);
    const looksLikePhone = /^[+]?\d[\d\s()-]{6,}$/.test(contact);

    if (!name || !contact || !message) {
        status.textContent = 'Please fill in all fields.';
        return false;
    }
    if (!looksLikeEmail && !looksLikePhone) {
        status.textContent = 'Enter a valid email or phone number.';
        return false;
    }

    // Prepare payloads
    const jsonPayload = { name, contact, message, source: 'LegacyDesigns Portfolio' };

    // UI lock
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    status.textContent = 'Sending your message…';

    try {
        if (CONTACT_SUBMIT_CONFIG.mode === 'webhook') {
            // POST JSON to your backend
            const resp = await fetch(CONTACT_SUBMIT_CONFIG.webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(jsonPayload)
            });
            if (!resp.ok) throw new Error('Network response was not ok');
            status.textContent = '✅ Message sent! I will get back to you shortly.';
            formEl.reset();
        } else if (CONTACT_SUBMIT_CONFIG.mode === 'google') {
            // POST to Google Forms formResponse endpoint
            const { googleFormId, googleEntries } = CONTACT_SUBMIT_CONFIG;
            if (!googleFormId || !googleEntries?.name || !googleEntries?.contact || !googleEntries?.message) {
                throw new Error('Google Forms configuration is incomplete.');
            }
            const formUrl = `https://docs.google.com/forms/d/${googleFormId}/formResponse`;
            const params = new URLSearchParams();
            params.append(googleEntries.name, name);
            params.append(googleEntries.contact, contact);
            params.append(googleEntries.message, message);

            // Google Forms requires no-cors; we optimistically assume success
            await fetch(formUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
                body: params
            });

            status.textContent = '✅ Message sent! Thank you for reaching out.';
            formEl.reset();
        } else {
            throw new Error('Unknown CONTACT_SUBMIT_CONFIG.mode');
        }
    } catch (err) {
        console.error('Contact submit error:', err);
        status.textContent = '❌ Failed to send. Please try again, or email legacyofdesigns@gmail.com.';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }

    return false;
}