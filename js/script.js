// Mobile Menu Logic (Global Function)
function toggleMobileMenu() {
    const overlay = document.getElementById('mobile-menu-overlay');
    if (overlay) {
        if (overlay.style.display === 'none' || overlay.style.display === '') {
            overlay.style.display = 'flex';
            // Small timeout to allow display:flex to apply before adding opacity
            setTimeout(() => {
                overlay.classList.add('open');
            }, 10);
        } else {
            overlay.classList.remove('open');
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 300); // Wait for transition
        }
    } else {
        console.error("Mobile overlay not found");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const root = document.documentElement;

    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme') || 'light';
    root.setAttribute('data-theme', currentTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            let theme = root.getAttribute('data-theme');
            let newTheme = theme === 'light' ? 'dark' : 'light';

            root.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Scroll Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
    });
});
