const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for fixed header height
                behavior: 'smooth'
            });
        }
    });
});

// Highlight active section in navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Basic form validation with inline error feedback
const form = document.querySelector('.contact form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');

    let valid = true;

    [name, email, message].forEach(input => input.classList.remove('error'));

    if (!name.value.trim()) {
        valid = false;
        name.classList.add('error');
    }

    if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
        valid = false;
        email.classList.add('error');
    }

    if (!message.value.trim()) {
        valid = false;
        message.classList.add('error');
    }

    if (valid) {
        alert('Thank you for your message!');
        form.reset();
    }
});