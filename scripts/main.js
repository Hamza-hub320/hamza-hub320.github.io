// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save user preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

// Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
    }
});

// Dynamic Year in Footer
const year = new Date().getFullYear();
document.getElementById('year').textContent = year;

// Lazy Loading for Images
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = () => img.removeAttribute('data-src');
    });
});

// Track Resume Downloads
document.getElementById('resume-download').addEventListener('click', function () {
    console.log('Resume downloaded!');
    // You can also send this data to a server or analytics tool
});

// Show Confirmation Message
document.getElementById('resume-download').addEventListener('click', function () {
    const message = document.getElementById('download-message');
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 3000); // Hide the message after 3 seconds
});

// Calculate Progress Bar Width
function updateProgressBar() {
    const totalCourses = document.querySelectorAll('.courses-list li').length;
    const completedCourses = document.querySelectorAll('.courses-list li.completed').length;
    const progressPercentage = (completedCourses / totalCourses) * 100;

    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');

    if (progressBar && progressText) {
        progressBar.style.width = `${progressPercentage}%`;
        progressText.textContent = `${progressPercentage.toFixed(2)}% Completed`;
    }
}

// Update progress bar on page load
window.addEventListener('load', updateProgressBar);

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll
    });
});
