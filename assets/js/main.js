document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Sidebar Functionality ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    function openSidebar() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    }

    function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    if (hamburgerBtn) hamburgerBtn.addEventListener('click', openSidebar);
    if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
    if (overlay) overlay.addEventListener('click', closeSidebar);
    sidebarLinks.forEach(link => link.addEventListener('click', closeSidebar));

    // --- WhatsApp Button Functionality ---
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            // IMPORTANT: Replace with your actual WhatsApp number including the country code, without '+' or '00'.
            const phoneNumber = '971503135437'; 

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name.trim() === '' || message.trim() === '') {
                alert('Please fill in your name and message.');
                return;
            }

            const fullMessage = `New Inquiry from Website:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
            
            const encodedMessage = encodeURIComponent(fullMessage);
            
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }

    // --- Scroll Animation ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const animatedSections = document.querySelectorAll('.animated-section');
    animatedSections.forEach((section) => observer.observe(section));

    // --- Smooth Scrolling for Nav Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});