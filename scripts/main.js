// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
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

    if (darkModeToggle) {
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
    }

    // Form Submission
   // Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Form Submission
    const contactForm = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    if (contactForm && confirmationMessage) {
        console.log('Form and confirmation message elements found'); 

        contactForm.addEventListener('submit', async function (e) {
            console.log('Form submission intercepted'); 
            e.preventDefault(); 

            // Form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                return; 
            }

            // Submit the form data to Formspree
            const formData = new FormData(contactForm);
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                // Log the response for debugging
                console.log('Response status:', response.status);
                console.log('Response body:', await response.json());

                // Check if the response status is 200 or 302 (OK or redirect)
                if (response.status === 200 || response.status === 302) {
                    // Show confirmation message
                    confirmationMessage.style.display = 'block';

                    // Clear the form
                    contactForm.reset();

                    // Hide the confirmation message after 5 seconds
                    setTimeout(() => {
                        confirmationMessage.style.display = 'none';
                    }, 5000);
                } else {
                    // Handle other status codes
                    alert('Oops! Something went wrong. Please try again.');
                }
            } catch (error) {
                // Handle network errors
                console.error('Error:', error);
                alert('Oops! Something went wrong. Please try again.');
            }
        });
    } else {
        console.error('Form or confirmation message element not found!');
    }
});
    // Dynamic Year in Footer
    const year = new Date().getFullYear();
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = year;
    }

    // Lazy Loading for Images
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = () => img.removeAttribute('data-src');
    });

    // Track Resume Downloads
    const resumeDownload = document.getElementById('resume-download');
    if (resumeDownload) {
        resumeDownload.addEventListener('click', function () {
            console.log('Resume downloaded!');
        });

        // Show Confirmation Message
        const downloadMessage = document.getElementById('download-message');
        if (downloadMessage) {
            resumeDownload.addEventListener('click', function () {
                downloadMessage.style.display = 'block';
                setTimeout(() => {
                    downloadMessage.style.display = 'none';
                }, 3000);
            });
        }
    }

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
    updateProgressBar();

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (scrollToTopBtn) {
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
    }
});

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.getElementById('overlay');

    if (menuToggle && navMenu && overlay) {
        // Toggle the menu and overlay
        menuToggle.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent the click from bubbling up to the document
            navMenu.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        // Close the menu when clicking outside the menu
        document.addEventListener('click', function (event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnMenuToggle = menuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnMenuToggle) {
                navMenu.classList.remove('active');
                overlay.classList.remove('active');
            }
        });

        // Close the menu when a navigation link is clicked
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                overlay.classList.remove('active');
            });
        });

        // Close the menu when the screen is resized
        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) { // Adjust breakpoint if needed
                navMenu.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    } else {
        console.error('Menu toggle, nav menu, or overlay element not found!');
    }
});
