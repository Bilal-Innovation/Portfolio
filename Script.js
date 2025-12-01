 // Preloader
        window.addEventListener('load', function() {
            const preloader = document.querySelector('.preloader');
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 1500);
        });

        // Sticky Header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            header.classList.toggle('scrolled', window.scrollY > 50);
        });

        // Mobile Menu Toggle
        const menuBtn = document.querySelector('.menu-btn');
        const nav = document.querySelector('nav');

        menuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuBtn.innerHTML = nav.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking a nav link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Portfolio Filter
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Scroll to Top Button
        const scrollTopBtn = document.querySelector('.scroll-top');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        });

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Animate on Scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.animate-on-scroll');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.classList.add('animate');
                }
            });
        }

        // Initial check when page loads
        window.addEventListener('load', animateOnScroll);
        // Check on scroll
        window.addEventListener('scroll', animateOnScroll);

        // Add animation class to elements
        document.querySelectorAll('section').forEach((section, index) => {
            if (index > 0) { // Skip hero section
                section.classList.add('animate-on-scroll');
            }
        });

        // Create Particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random size between 2px and 5px
                const size = Math.random() * 3 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Random position
                particle.style.left = `${Math.random() * 100}vw`;
                particle.style.top = `${Math.random() * 100}vh`;
                
                // Random animation duration between 10s and 20s
                const duration = Math.random() * 10 + 10;
                particle.style.animationDuration = `${duration}s`;
                
                // Random delay up to 5s
                particle.style.animationDelay = `${Math.random() * 5}s`;
                
                particlesContainer.appendChild(particle);
            }
        }

        createParticles();

        // Form Submission
        const contactForm = document.querySelector('.contact-form form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                // Here you would typically send the data to a server
                // For this example, we'll just show an alert
                alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
                
                // Reset the form
                this.reset();
            });
        }