// Application Data
const APP_DATA = {
    userProfile: {
        name: "Anshu Beniwal",
        title: "Senior Software Engineer & UX Designer", 
        roles: ["Full-Stack Developer", "3D UI/UX Designer", "Creative Engineer", "JavaFX Specialist", "Problem Solver"],
        bio: "Passionate software engineer with expertise in Java, JavaFX, and modern web technologies. I love creating immersive 3D experiences and user-centric applications that solve real-world problems with cutting-edge interfaces.",
        email: "anshu.beniwal@example.com",
        phone: "+91-9876543210",
        location: "Bangalore, India",
        socials: {
            github: "https://github.com/anshu-beniwal",
            linkedin: "https://linkedin.com/in/anshu-beniwal",
            website: "https://anshu-beniwal.dev"
        }
    },
    skills: [
        {name: "Java", level: 95, category: "programming", color: "#f39c12"},
        {name: "JavaFX", level: 90, category: "programming", color: "#e74c3c"},
        {name: "Three.js", level: 85, category: "programming", color: "#9b59b6"},
        {name: "Spring Boot", level: 85, category: "programming", color: "#2ecc71"},
        {name: "SQL", level: 88, category: "database", color: "#3498db"},
        {name: "Git", level: 92, category: "tools", color: "#e67e22"},
        {name: "Linux", level: 80, category: "tools", color: "#34495e"},
        {name: "Python", level: 70, category: "programming", color: "#f1c40f"},
        {name: "Network Security", level: 75, category: "security", color: "#e74c3c"}
    ],
    projects: [
        {
            id: 1,
            title: "3D E-Commerce Platform",
            description: "Revolutionary e-commerce application with 3D product visualization and immersive shopping experience using WebGL and Three.js",
            techTags: ["Three.js", "React", "Spring Boot", "WebGL"],
            repoUrl: "https://github.com/anshu-beniwal/3d-ecommerce",
            liveUrl: "https://3d-ecommerce.anshu-beniwal.dev",
            createdAt: "2024-01-15",
            category: "web",
            featured: true
        },
        {
            id: 2,
            title: "Holographic Task Manager",
            description: "Next-generation desktop application with holographic UI and 3D workspace management built with JavaFX",
            techTags: ["JavaFX", "Three.js", "SQLite", "WebGL"],
            repoUrl: "https://github.com/anshu-beniwal/holographic-tasks",
            liveUrl: "",
            createdAt: "2024-03-22",
            category: "app",
            featured: true
        },
        {
            id: 3,
            title: "VR Chat Application",
            description: "WebVR-enabled chat application with spatial audio and immersive 3D environments for virtual collaboration",
            techTags: ["A-Frame", "WebRTC", "Node.js", "Socket.io"],
            repoUrl: "https://github.com/anshu-beniwal/vr-chat",
            liveUrl: "https://vr-chat.anshu-beniwal.dev",
            createdAt: "2024-02-10",
            category: "web",
            featured: false
        },
        {
            id: 4,
            title: "3D Network Visualizer",
            description: "Interactive 3D network topology visualization with real-time monitoring and cyber security insights",
            techTags: ["Three.js", "D3.js", "Python", "WebGL"],
            repoUrl: "https://github.com/anshu-beniwal/3d-network-viz",
            liveUrl: "https://network-viz.anshu-beniwal.dev",
            createdAt: "2023-11-08",
            category: "other",
            featured: true
        }
    ],
    messages: [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@company.com",
            body: "Hi Anshu, I came across your 3D portfolio and I'm blown away by the immersive experience! We have an exciting opportunity that might interest you. Could we schedule a call to discuss?",
            createdAt: "2024-08-25",
            handled: false
        },
        {
            id: 2,
            name: "Sarah Wilson",
            email: "sarah@startup.io", 
            body: "Absolutely incredible portfolio! The 3D effects are stunning. I especially liked your holographic task manager. We're looking for a JavaFX developer with 3D expertise for our desktop application project. Are you available for freelance work?",
            createdAt: "2024-08-20",
            handled: true
        }
    ]
};

// Internationalization
const I18N = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.resume": "Resume",
        "nav.contact": "Contact",
        "home.greeting": "Hello, I'm",
        "home.description": "Passionate software engineer with expertise in Java, JavaFX, and modern web technologies. I create immersive 3D experiences and user-centric applications that solve real-world problems.",
        "home.viewWork": "View My Work",
        "home.getInTouch": "Get In Touch",
        "profile.title": "Senior Software Engineer & 3D Designer",
        "about.title": "About Me",
        "about.bio": "Passionate software engineer with expertise in Java, JavaFX, and modern web technologies. I love creating immersive 3D experiences and user-centric applications that solve real-world problems.",
        "skills.title": "Skills & Expertise",
        "skills.all": "All",
        "skills.programming": "Programming",
        "skills.database": "Database",
        "skills.tools": "Tools",
        "skills.security": "Security",
        "projects.title": "Featured Projects",
        "projects.search": "Search projects...",
        "projects.all": "All",
        "projects.web": "Web",
        "projects.app": "App",
        "projects.other": "Other",
        "projects.techStack": "Tech Stack",
        "projects.viewCode": "View Code",
        "projects.liveDemo": "Live Demo",
        "resume.title": "Resume",
        "resume.download": "Download Resume",
        "resume.updated": "Last updated: August 2024",
        "resume.downloadBtn": "Download PDF",
        "resume.viewBtn": "Preview",
        "resume.noPreview": "Resume preview will be displayed here",
        "contact.title": "Get In Touch",
        "contact.name": "Name",
        "contact.email": "Email",
        "contact.message": "Message",
        "contact.minChars": "minimum characters",
        "contact.send": "Send Message",
        "contact.recent": "Recent Messages",
        "footer.rights": "All rights reserved."
    },
    // hi: {
    //     "nav.home": "होम",
    //     "nav.about": "परिचय",
    //     "nav.skills": "कौशल",
    //     "nav.projects": "प्रोजेक्ट",
    //     "nav.resume": "रिज्यूमे",
    //     "nav.contact": "संपर्क",
    //     "home.greeting": "नमस्ते, मैं हूँ",
    //     "home.description": "जावा, जावाएफएक्स और आधुनिक वेब तकनीकों में विशेषज्ञता रखने वाला भावुक सॉफ्टवेयर इंजीनियर। मैं इमर्सिव 3डी अनुभव और उपयोगकर्ता-केंद्रित एप्लिकेशन बनाता हूं।",
    //     "home.viewWork": "मेरा काम देखें",
    //     "home.getInTouch": "संपर्क करें",
    //     "profile.title": "वरिष्ठ सॉफ्टवेयर इंजीनियर और 3डी डिजाइनर",
    //     "about.title": "मेरे बारे में",
    //     "about.bio": "जावा, जावाएफएक्स और आधुनिक वेब तकनीकों में विशेषज्ञता रखने वाला भावुक सॉफ्टवेयर इंजीनियर। मुझे इमर्सिव 3डी अनुभव और उपयोगकर्ता-केंद्रित एप्लिकेशन बनाना पसंद है।",
    //     "skills.title": "कौशल और विशेषज्ञता",
    //     "skills.all": "सभी",
    //     "skills.programming": "प्रोग्रामिंग",
    //     "skills.database": "डेटाबेस",
    //     "skills.tools": "उपकरण",
    //     "skills.security": "सुरक्षा",
    //     "projects.title": "चुनिंदा प्रोजेक्ट",
    //     "projects.search": "प्रोजेक्ट खोजें...",
    //     "projects.all": "सभी",
    //     "projects.web": "वेब",
    //     "projects.app": "ऐप",
    //     "projects.other": "अन्य",
    //     "projects.techStack": "तकनीकी स्टैक",
    //     "projects.viewCode": "कोड देखें",
    //     "projects.liveDemo": "लाइव डेमो",
    //     "resume.title": "रिज्यूमे",
    //     "resume.download": "रिज्यूमे डाउनलोड करें",
    //     "resume.updated": "अंतिम अपडेट: अगस्त 2024",
    //     "resume.downloadBtn": "पीडीएफ डाउनलोड करें",
    //     "resume.viewBtn": "पूर्वावलोकन",
    //     "resume.noPreview": "रिज्यूमे का पूर्वावलोकन यहाँ दिखाया जाएगा",
    //     "contact.title": "संपर्क में रहें",
    //     "contact.name": "नाम",
    //     "contact.email": "ईमेल",
    //     "contact.message": "संदेश",
    //     "contact.minChars": "न्यूनतम अक्षर",
    //     "contact.send": "संदेश भेजें",
    //     "contact.recent": "हाल के संदेश",
    //     "footer.rights": "सभी अधिकार सुरक्षित।"
    // }
};

// 3D Particle System Class
class ParticleSystem {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = null;
        this.particleGeometry = null;
        this.particleMaterial = null;
        this.mouse = { x: 0, y: 0 };
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;
        this.particleCount = this.getParticleCount();
        
        this.init();
        this.animate();
        this.addEventListeners();
    }

    getParticleCount() {
        const isMobile = /android|iphone|ipad/i.test(navigator.userAgent);
        if (isMobile) return 300;
        return 800;
    }

    init() {
        const container = document.getElementById('threejs-container');
        if (!container) return;

        // Scene setup
        this.scene = new THREE.Scene();
        
        // Camera setup
        this.camera = new THREE.PerspectiveCamera(
            75, 
            window.innerWidth / window.innerHeight, 
            1, 
            3000
        );
        this.camera.position.z = 1000;

        // Renderer setup
        this.renderer = new THREE.WebGLRenderer({ 
            alpha: true, 
            antialias: true,
            powerPreference: "high-performance"
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 0);
        container.appendChild(this.renderer.domElement);

        // Create particles
        this.createParticles();
    }

    createParticles() {
        this.particleGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(this.particleCount * 3);
        const velocities = new Float32Array(this.particleCount * 3);
        const colors = new Float32Array(this.particleCount * 3);

        for (let i = 0; i < this.particleCount * 3; i += 3) {
            // Position
            positions[i] = (Math.random() - 0.5) * 2000;
            positions[i + 1] = (Math.random() - 0.5) * 2000;
            positions[i + 2] = (Math.random() - 0.5) * 1000;

            // Velocity
            velocities[i] = (Math.random() - 0.5) * 0.5;
            velocities[i + 1] = (Math.random() - 0.5) * 0.5;
            velocities[i + 2] = (Math.random() - 0.5) * 0.5;

            // Colors (teal variations)
            const colorVariation = Math.random();
            colors[i] = 0.2 + colorVariation * 0.3;
            colors[i + 1] = 0.7 + colorVariation * 0.3;
            colors[i + 2] = 0.8 + colorVariation * 0.2;
        }

        this.particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        this.particleGeometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
        this.particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        // Particle material
        this.particleMaterial = new THREE.PointsMaterial({
            size: 3,
            sizeAttenuation: true,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        // Create particle system
        this.particles = new THREE.Points(this.particleGeometry, this.particleMaterial);
        this.scene.add(this.particles);
    }

    addEventListeners() {
        window.addEventListener('resize', () => this.onWindowResize());
        document.addEventListener('mousemove', (event) => this.onMouseMove(event));
    }

    onWindowResize() {
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;
        
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    onMouseMove(event) {
        this.mouse.x = (event.clientX - this.windowHalfX) * 0.1;
        this.mouse.y = (event.clientY - this.windowHalfY) * 0.1;
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        if (!this.particles) return;

        const positions = this.particles.geometry.attributes.position.array;
        const velocities = this.particles.geometry.attributes.velocity.array;
        
        const time = Date.now() * 0.0001;
        
        for (let i = 0; i < this.particleCount * 3; i += 3) {
            // Mouse interaction
            const dx = this.mouse.x - positions[i];
            const dy = this.mouse.y - positions[i + 1];
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const force = (100 - distance) / 100;
                velocities[i] += dx * force * 0.001;
                velocities[i + 1] += dy * force * 0.001;
            }
            
            // Update positions
            positions[i] += velocities[i];
            positions[i + 1] += velocities[i + 1];
            positions[i + 2] += velocities[i + 2];
            
            // Wave motion
            positions[i + 1] += Math.sin(time + positions[i] * 0.01) * 0.5;
            positions[i] += Math.cos(time + positions[i + 1] * 0.01) * 0.3;
            
            // Boundary check and reset
            if (positions[i] > 1000 || positions[i] < -1000) {
                positions[i] = (Math.random() - 0.5) * 2000;
                velocities[i] = (Math.random() - 0.5) * 0.5;
            }
            if (positions[i + 1] > 1000 || positions[i + 1] < -1000) {
                positions[i + 1] = (Math.random() - 0.5) * 2000;
                velocities[i + 1] = (Math.random() - 0.5) * 0.5;
            }
            if (positions[i + 2] > 500 || positions[i + 2] < -500) {
                positions[i + 2] = (Math.random() - 0.5) * 1000;
                velocities[i + 2] = (Math.random() - 0.5) * 0.5;
            }
            
            // Apply damping
            velocities[i] *= 0.99;
            velocities[i + 1] *= 0.99;
            velocities[i + 2] *= 0.99;
        }
        
        // Rotate particle system
        this.particles.rotation.y += 0.001;
        
        // Update camera position based on mouse
        this.camera.position.x += (this.mouse.x - this.camera.position.x) * 0.05;
        this.camera.position.y += (-this.mouse.y - this.camera.position.y) * 0.05;
        this.camera.lookAt(this.scene.position);
        
        this.particles.geometry.attributes.position.needsUpdate = true;
        this.particles.geometry.attributes.velocity.needsUpdate = true;
        
        this.renderer.render(this.scene, this.camera);
    }

    destroy() {
        if (this.renderer) {
            const container = document.getElementById('threejs-container');
            if (container && this.renderer.domElement) {
                container.removeChild(this.renderer.domElement);
            }
        }
    }
}

// Main Portfolio Application Class
class Portfolio3D {
    constructor() {
        this.currentLang = localStorage.getItem('portfolio-lang') || 'en';
        this.currentTheme = localStorage.getItem('portfolio-theme') || 'dark';
        this.currentSection = 'home';
        this.animationsEnabled = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.particleSystem = null;
        
        this.init();
    }

    async init() {
        this.showLoadingProgress();
        
        // Initialize core systems
        this.setupTheme();
        this.setupLanguage();
        this.setupNavigation();
        
        // Initialize 3D systems
        if (this.animationsEnabled && typeof THREE !== 'undefined') {
            this.particleSystem = new ParticleSystem();
        }
        
        // Setup sections
        this.setupTypewriter();
        this.setupSkills();
        this.setupProjects();
        this.setupContact();
        this.setupResume();
        this.setupModals();
        this.setup3DEffects();
        this.setupScrollEffects();
        this.setupKeyboardShortcuts();
        
        // Complete loading
        await this.simulateLoadingDelay();
        this.hideLoadingScreen();
    }

    showLoadingProgress() {
        const progressBar = document.getElementById('loadingProgress');
        if (progressBar) {
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 15;
                if (progress > 100) progress = 100;
                progressBar.style.width = `${progress}%`;
                
                if (progress >= 100) {
                    clearInterval(interval);
                }
            }, 200);
        }
    }

    async simulateLoadingDelay() {
        return new Promise(resolve => setTimeout(resolve, 2000));
    }

    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                this.triggerEntranceAnimations();
            }, 500);
        }
    }

    triggerEntranceAnimations() {
        if (typeof gsap !== 'undefined') {
            const tl = gsap.timeline();
            
            tl.from('.navbar-3d', { y: -100, opacity: 0, duration: 1 })
              .from('.hero-greeting', { y: 50, opacity: 0, duration: 0.8 }, '-=0.5')
              .from('.name-letter', { 
                  y: 100, 
                  opacity: 0, 
                  rotation: 180, 
                  duration: 0.6,
                  stagger: 0.1
              }, '-=0.3')
              .from('.hero-role-3d', { scale: 0, opacity: 0, duration: 0.6 }, '-=0.2')
              .from('.hero-description-3d', { y: 30, opacity: 0, duration: 0.8 }, '-=0.4')
              .from('.hero-actions-3d .btn-3d', { 
                  scale: 0, 
                  opacity: 0, 
                  duration: 0.6,
                  stagger: 0.2 
              }, '-=0.3')
              .from('.avatar-frame-3d', { 
                  scale: 0, 
                  rotation: 360, 
                  opacity: 0, 
                  duration: 1 
              }, '-=0.8');
        }
    }

    // Fixed Theme Management
    setupTheme() {
        const themeToggle = document.getElementById('themeToggle');
        const html = document.documentElement;
        
        // Set initial theme
        html.setAttribute('data-color-scheme', this.currentTheme);
        
        // Update toggle icon
        this.updateThemeIcon();

        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const currentTheme = html.getAttribute('data-color-scheme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Apply theme change
            html.setAttribute('data-color-scheme', newTheme);
            this.currentTheme = newTheme;
            localStorage.setItem('portfolio-theme', newTheme);
            
            // Update icon
            this.updateThemeIcon();
            
            this.show3DToast('Theme changed successfully!', 'success');
        });
    }

    updateThemeIcon() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const toggleSphere = themeToggle.querySelector('.toggle-sphere');
            if (toggleSphere) {
                if (this.currentTheme === 'dark') {
                    toggleSphere.innerHTML = '<i class="fas fa-sun"></i>';
                } else {
                    toggleSphere.innerHTML = '<i class="fas fa-moon"></i>';
                }
            }
        }
    }

    // Language Management
setupLanguage() {
    this.currentLang = 'en'; // Always English
    localStorage.removeItem('portfolio-lang'); // Clean up old setting
    this.updateLanguage();
}

updateLanguage() {
    // FIXED: Only handle English translations
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.dataset.key;
        if (I18N.en && I18N.en[key]) {
            element.textContent = I18N.en[key];
        }
    });

    const placeholderElements = document.querySelectorAll('[data-key-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.dataset.keyPlaceholder;
        if (I18N.en && I18N.en[key]) {
            element.placeholder = I18N.en[key];
        }
    });
}

    // updateLanguage() {
    //     const elements = document.querySelectorAll('[data-key]');
    //     elements.forEach(element => {
    //         const key = element.dataset.key;
    //         if (I18N[this.currentLang] && I18N[this.currentLang][key]) {
    //             element.textContent = I18N[this.currentLang][key];
    //         }
    //     });

    //     const placeholderElements = document.querySelectorAll('[data-key-placeholder]');
    //     placeholderElements.forEach(element => {
    //         const key = element.dataset.keyPlaceholder;
    //         if (I18N[this.currentLang] && I18N[this.currentLang][key]) {
    //             element.placeholder = I18N[this.currentLang][key];
    //         }
    //     });
    // }

    // Fixed Navigation System
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link-3d');
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        const heroButtons = document.querySelectorAll('.hero-btn');

        // Navigation link clicks - FIXED to prevent hover conflicts
        navLinks.forEach(link => {
            // Remove any existing hover event listeners
            link.onmouseenter = null;
            link.onmouseleave = null;
            
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const targetSection = link.dataset.section;
                if (targetSection) {
                    this.show3DSection(targetSection);
                    this.updateActiveNavLink(link);
                    
                    // Close mobile menu
                    if (navMenu) {
                        navMenu.classList.remove('active');
                    }
                    if (navToggle) {
                        navToggle.classList.remove('active');
                    }
                }
            });
        });

        // Hero button clicks
        heroButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSection = btn.dataset.section;
                if (targetSection) {
                    this.show3DSection(targetSection);
                    const targetLink = document.querySelector(`[data-section="${targetSection}"]`);
                    this.updateActiveNavLink(targetLink);
                }
            });
        });

        // Mobile menu toggle
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
        }

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        });

        // Initialize with home section active
        this.show3DSection('home');
    }

    // Fixed Section Navigation
    show3DSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;
    
    // Calculate navbar height for proper offset
    const navbar = document.getElementById('navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 80;
    
    // Get target position with offset for fixed navbar
    const elementTop = targetSection.getBoundingClientRect().top + window.pageYOffset;
    const targetPosition = elementTop - navbarHeight - 20; // 20px extra padding
    
    // Smooth scroll to target section
    window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth'
    });
    
    this.currentSection = sectionId;
    // Section-specific initializations still work
    this.onSectionChange(sectionId);
}
    onSectionChange(sectionId) {
        switch(sectionId) {
            case 'skills':
                setTimeout(() => this.animate3DSkills(), 300);
                break;
            case 'projects':
                this.triggerProjectAnimations();
                break;
            case 'contact':
                this.resetContactForm();
                break;
        }
    }

    updateActiveNavLink(activeLink) {
        const navLinks = document.querySelectorAll('.nav-link-3d');
        navLinks.forEach(link => link.classList.remove('active'));
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Enhanced Typewriter Effect
    setupTypewriter() {
        const typewriter = document.getElementById('typewriter');
        if (!typewriter) return;

        let currentRole = 0;
        let currentChar = 0;
        let isDeleting = false;

        const type = () => {
            const role = APP_DATA.userProfile.roles[currentRole];
            
            if (isDeleting) {
                typewriter.textContent = role.substring(0, currentChar - 1);
                currentChar--;
                
                if (currentChar === 0) {
                    isDeleting = false;
                    currentRole = (currentRole + 1) % APP_DATA.userProfile.roles.length;
                    setTimeout(type, 500);
                } else {
                    setTimeout(type, 50);
                }
            } else {
                typewriter.textContent = role.substring(0, currentChar + 1);
                currentChar++;
                
                if (currentChar === role.length) {
                    isDeleting = true;
                    setTimeout(type, 2000);
                } else {
                    setTimeout(type, 100);
                }
            }
        };

        type();
    }

    // 3D Skills System
    setupSkills() {
        const skillsGrid = document.getElementById('skillsGrid');
        const skillsFilter = document.querySelectorAll('.skills-section-3d .filter-btn-3d');

        if (skillsGrid) {
            this.render3DSkills();
        }

        // Filter functionality
        skillsFilter.forEach(btn => {
            btn.addEventListener('click', () => {
                skillsFilter.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.dataset.filter;
                this.filter3DSkills(filter);
            });
        });
    }

    render3DSkills() {
        const skillsGrid = document.getElementById('skillsGrid');
        if (!skillsGrid) return;

        skillsGrid.innerHTML = '';

        APP_DATA.skills.forEach((skill, index) => {
            const skillElement = document.createElement('div');
            skillElement.className = `skill-card-3d ${skill.category}`;
            skillElement.style.animationDelay = `${index * 0.1}s`;
            
            skillElement.innerHTML = `
                <div class="card-glow"></div>
                <div class="skill-content">
                    <div class="progress-ring-3d">
                        <div class="progress-circle" style="--progress: ${skill.level}; --skill-color: ${skill.color}; --skill-color-rgb: ${this.hexToRgb(skill.color)};">
                            <div class="progress-percentage">${skill.level}%</div>
                        </div>
                    </div>
                    <h3 class="skill-name">${skill.name}</h3>
                    <p class="skill-category">${skill.category}</p>
                </div>
            `;
            
            skillsGrid.appendChild(skillElement);
        });
    }

    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? 
            `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
            '50, 184, 198';
    }

    animate3DSkills() {
        const skillCards = document.querySelectorAll('.skill-card-3d');
        
        if (typeof gsap !== 'undefined') {
            gsap.fromTo(skillCards, 
                { 
                    opacity: 0, 
                    rotateX: 90, 
                    scale: 0.5, 
                    y: 100 
                },
                { 
                    duration: 0.8, 
                    opacity: 1, 
                    rotateX: 0, 
                    scale: 1, 
                    y: 0,
                    stagger: 0.1,
                    ease: "back.out(1.7)"
                }
            );
        }
    }

    filter3DSkills(category) {
        const skillCards = document.querySelectorAll('.skill-card-3d');
        
        skillCards.forEach(card => {
            const shouldShow = category === 'all' || card.classList.contains(category);
            
            if (typeof gsap !== 'undefined') {
                if (shouldShow) {
                    gsap.to(card, {
                        duration: 0.3,
                        opacity: 1,
                        scale: 1,
                        rotateY: 0,
                        display: 'block'
                    });
                } else {
                    gsap.to(card, {
                        duration: 0.3,
                        opacity: 0,
                        scale: 0.8,
                        rotateY: 90,
                        onComplete: () => {
                            card.style.display = 'none';
                        }
                    });
                }
            } else {
                card.style.display = shouldShow ? 'block' : 'none';
            }
        });
    }

    // 3D Projects System
    setupProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        const projectSearch = document.getElementById('projectSearch');
        const projectFilter = document.querySelectorAll('.projects-section-3d .filter-btn-3d');
        const viewToggle = document.querySelectorAll('.view-btn-3d');

        if (projectsGrid) {
            this.render3DProjects();
        }

        // Search functionality
        if (projectSearch) {
            projectSearch.addEventListener('input', (e) => {
                this.filterProjects(e.target.value.toLowerCase());
            });
        }

        // Category filter
        projectFilter.forEach(btn => {
            btn.addEventListener('click', () => {
                projectFilter.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.dataset.filter;
                this.filterProjectsByCategory(filter);
            });
        });

        // View toggle
        viewToggle.forEach(btn => {
            btn.addEventListener('click', () => {
                viewToggle.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const view = btn.dataset.view;
                this.toggleProjectView(view);
            });
        });
    }

    render3DProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid) return;

        projectsGrid.innerHTML = '';

        APP_DATA.projects.forEach((project, index) => {
            const projectElement = document.createElement('div');
            projectElement.className = `project-card-3d ${project.category}`;
            projectElement.setAttribute('data-project-id', project.id);
            projectElement.style.animationDelay = `${index * 0.1}s`;
            
            const techTags = project.techTags.map(tech => 
                `<span class="tech-tag-3d">${tech}</span>`
            ).join('');

            projectElement.innerHTML = `
                <div class="card-glow"></div>
                <div class="project-image-3d">
                    <i class="fas fa-code"></i>
                </div>
                <div class="project-content-3d">
                    <h3 class="project-title-3d">${project.title}</h3>
                    <p class="project-description-3d">${project.description}</p>
                    <div class="project-tech-3d">
                        ${techTags}
                    </div>
                    <div class="project-links-3d">
                        ${project.repoUrl ? `<a href="${project.repoUrl}" target="_blank" class="project-link-3d project-link-secondary-3d" onclick="event.stopPropagation()"><i class="fab fa-github"></i></a>` : ''}
                        ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="project-link-3d project-link-primary-3d" onclick="event.stopPropagation()"><i class="fas fa-external-link-alt"></i></a>` : ''}
                    </div>
                </div>
            `;

            // Add click handler for modal
            projectElement.addEventListener('click', () => {
                this.open3DProjectModal(project);
            });

            projectsGrid.appendChild(projectElement);
        });
    }

    triggerProjectAnimations() {
        const projectCards = document.querySelectorAll('.project-card-3d');
        
        if (typeof gsap !== 'undefined') {
            gsap.fromTo(projectCards,
                { 
                    opacity: 0, 
                    rotateX: 45, 
                    y: 100, 
                    scale: 0.8 
                },
                { 
                    duration: 0.8, 
                    opacity: 1, 
                    rotateX: 0, 
                    y: 0, 
                    scale: 1,
                    stagger: 0.1,
                    ease: "power3.out"
                }
            );
        }
    }

    filterProjects(searchTerm) {
        const projectCards = document.querySelectorAll('.project-card-3d');
        
        projectCards.forEach(card => {
            const title = card.querySelector('.project-title-3d').textContent.toLowerCase();
            const description = card.querySelector('.project-description-3d').textContent.toLowerCase();
            const techTags = Array.from(card.querySelectorAll('.tech-tag-3d')).map(tag => tag.textContent.toLowerCase());
            
            const matchesSearch = title.includes(searchTerm) || 
                                description.includes(searchTerm) || 
                                techTags.some(tag => tag.includes(searchTerm));
            
            card.style.display = matchesSearch ? 'block' : 'none';
        });
    }

    filterProjectsByCategory(category) {
        const projectCards = document.querySelectorAll('.project-card-3d');
        
        projectCards.forEach(card => {
            const shouldShow = category === 'all' || card.classList.contains(category);
            card.style.display = shouldShow ? 'block' : 'none';
        });
    }

    toggleProjectView(view) {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid) return;
        
        if (view === 'list') {
            projectsGrid.classList.add('list-view');
        } else {
            projectsGrid.classList.remove('list-view');
        }
    }

    // 3D Project Modal System
    open3DProjectModal(project) {
        const modal = document.getElementById('projectModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const modalTechTags = document.getElementById('modalTechTags');
        const modalRepoLink = document.getElementById('modalRepoLink');
        const modalLiveLink = document.getElementById('modalLiveLink');

        if (!modal) return;

        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        
        modalTechTags.innerHTML = project.techTags.map(tech => 
            `<span class="tech-tag-3d">${tech}</span>`
        ).join('');

        if (project.repoUrl) {
            modalRepoLink.href = project.repoUrl;
            modalRepoLink.style.display = 'inline-flex';
        } else {
            modalRepoLink.style.display = 'none';
        }

        if (project.liveUrl) {
            modalLiveLink.href = project.liveUrl;
            modalLiveLink.style.display = 'inline-flex';
        } else {
            modalLiveLink.style.display = 'none';
        }

        // Setup 3D carousel
        this.setup3DCarousel(project);

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    setup3DCarousel(project) {
        const carouselSlides = document.getElementById('carouselSlides');
        const prevBtn = document.getElementById('carouselPrev');
        const nextBtn = document.getElementById('carouselNext');
        
        if (!carouselSlides) return;
        
        // Create sample slides
        carouselSlides.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.style.transform = `rotateY(${i * 120}deg) translateZ(150px)`;
            slide.innerHTML = `<div>Screenshot ${i + 1}</div>`;
            carouselSlides.appendChild(slide);
        }
        
        let currentSlide = 0;
        
        const rotateCarousel = (direction) => {
            currentSlide += direction;
            const rotation = currentSlide * -120;
            carouselSlides.style.transform = `rotateY(${rotation}deg)`;
        };
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => rotateCarousel(-1));
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => rotateCarousel(1));
        }
    }

    // 3D Contact System
    setupContact() {
        const contactForm = document.getElementById('contactForm');
        const contactCard = document.getElementById('contactCard');
        const sendAnotherBtn = document.getElementById('sendAnother');
        const nameField = document.getElementById('contactName');
        const emailField = document.getElementById('contactEmail');
        const messageField = document.getElementById('contactMessage');
        const charCount = document.getElementById('charCount');

        this.renderMessages();

        // Character counter
        if (messageField && charCount) {
            messageField.addEventListener('input', () => {
                const count = messageField.value.length;
                charCount.textContent = count;
                
                if (count >= 20) {
                    charCount.style.color = 'var(--color-success)';
                } else {
                    charCount.style.color = 'var(--color-warning)';
                }
            });
        }

        // Form validation
        const validate3DField = (field, errorId, validator) => {
            const errorElement = document.getElementById(errorId);
            const isValid = validator(field.value);
            
            if (isValid) {
                field.classList.remove('error');
                field.style.borderColor = 'var(--color-success)';
                if (errorElement) errorElement.classList.remove('show');
            } else {
                field.classList.add('error');
                if (errorElement) errorElement.classList.add('show');
            }
            
            return isValid;
        };

        // Field validation
        if (nameField) {
            nameField.addEventListener('blur', () => {
                validate3DField(nameField, 'nameError', (value) => {
                    const isValid = value.trim().length >= 2;
                    if (!isValid) {
                        const errorElement = document.getElementById('nameError');
                        if (errorElement) errorElement.textContent = 'Name must be at least 2 characters long';
                    }
                    return isValid;
                });
            });
        }

        if (emailField) {
            emailField.addEventListener('blur', () => {
                validate3DField(emailField, 'emailError', (value) => {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    const isValid = emailRegex.test(value);
                    if (!isValid) {
                        const errorElement = document.getElementById('emailError');
                        if (errorElement) errorElement.textContent = 'Please enter a valid email address';
                    }
                    return isValid;
                });
            });
        }

        if (messageField) {
            messageField.addEventListener('blur', () => {
                validate3DField(messageField, 'messageError', (value) => {
                    const isValid = value.trim().length >= 20;
                    if (!isValid) {
                        const errorElement = document.getElementById('messageError');
                        if (errorElement) errorElement.textContent = 'Message must be at least 20 characters long';
                    }
                    return isValid;
                });
            });
        }

        // Form submission with 3D flip
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const name = nameField ? nameField.value.trim() : '';
                const email = emailField ? emailField.value.trim() : '';
                const message = messageField ? messageField.value.trim() : '';
                
                const isNameValid = nameField ? validate3DField(nameField, 'nameError', (value) => value.length >= 2) : false;
                const isEmailValid = emailField ? validate3DField(emailField, 'emailError', (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) : false;
                const isMessageValid = messageField ? validate3DField(messageField, 'messageError', (value) => value.length >= 20) : false;
                
                if (isNameValid && isEmailValid && isMessageValid) {
                    this.submit3DContactForm(name, email, message, contactCard);
                }
            });
        }

        // Send another message
        if (sendAnotherBtn) {
            sendAnotherBtn.addEventListener('click', () => {
                this.resetContactForm();
            });
        }
    }

    submit3DContactForm(name, email, message, contactCard) {
        // Add message to local data
        const newMessage = {
            id: APP_DATA.messages.length + 1,
            name: name,
            email: email,
            body: message,
            createdAt: new Date().toISOString().split('T')[0],
            handled: false
        };
        
        APP_DATA.messages.unshift(newMessage);
        this.renderMessages();
        
        // 3D card flip animation
        if (contactCard) {
            contactCard.classList.add('flipped');
        }
        
        // Create mailto link
        const subject = `Portfolio Contact: ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const mailtoUrl = `mailto:${APP_DATA.userProfile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open mailto link
        window.open(mailtoUrl);
        
        this.show3DToast('Message sent successfully!', 'success');
    }

    resetContactForm() {
        const contactForm = document.getElementById('contactForm');
        const contactCard = document.getElementById('contactCard');
        const charCount = document.getElementById('charCount');
        
        if (contactForm) contactForm.reset();
        if (charCount) charCount.textContent = '0';
        
        // Reset field styles
        const fields = ['contactName', 'contactEmail', 'contactMessage'];
        fields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.style.borderColor = 'rgba(var(--color-teal-300-rgb), 0.3)';
                field.classList.remove('error');
            }
        });
        
        // Reset card flip
        if (contactCard) {
            contactCard.classList.remove('flipped');
        }
    }

    renderMessages() {
        const messagesList = document.getElementById('messagesList');
        if (!messagesList) return;

        messagesList.innerHTML = '';
        
        APP_DATA.messages.forEach((message, index) => {
            const messageElement = document.createElement('div');
            messageElement.className = 'message-item-3d';
            messageElement.style.animationDelay = `${index * 0.1}s`;
            
            messageElement.innerHTML = `
                <div class="message-header-3d">
                    <span class="message-sender">${message.name}</span>
                    <span class="message-date">${message.createdAt}</span>
                </div>
                <div class="message-content-3d">${message.body}</div>
                <div class="message-status ${message.handled ? 'handled' : 'unhandled'}">
                    <i class="fas fa-${message.handled ? 'check-circle' : 'clock'}"></i>
                    ${message.handled ? 'Handled' : 'Pending'}
                </div>
            `;
            messagesList.appendChild(messageElement);
        });
    }

    // Resume System
    setupResume() {
        const downloadBtn = document.getElementById('downloadResume');
        const viewBtn = document.getElementById('viewResume');
        const previewDiv = document.getElementById('resumePreview');

        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => {
                this.show3DToast('Resume download started!', 'info');
                
                const link = document.createElement('a');
                link.href = '#';
                link.download = 'Anshu_Beniwal_Resume.pdf';
                link.click();
            });
        }

        if (viewBtn && previewDiv) {
            viewBtn.addEventListener('click', () => {
                const viewer = previewDiv.querySelector('.resume-viewer');
                if (viewer) {
                    viewer.innerHTML = `
                        <div style="padding: 20px; text-align: left; color: var(--color-text);">
                            <h2>${APP_DATA.userProfile.name}</h2>
                            <p>${APP_DATA.userProfile.title}</p>
                            <p>${APP_DATA.userProfile.email} | ${APP_DATA.userProfile.phone}</p>
                            <p>${APP_DATA.userProfile.location}</p>
                            
                            <h3>About</h3>
                            <p>${APP_DATA.userProfile.bio}</p>
                            
                            <h3>Skills</h3>
                            <ul>
                                ${APP_DATA.skills.map(skill => `<li>${skill.name} - ${skill.level}%</li>`).join('')}
                            </ul>
                            
                            <h3>Projects</h3>
                            <ul>
                                ${APP_DATA.projects.map(project => `<li><strong>${project.title}</strong> - ${project.description}</li>`).join('')}
                            </ul>
                        </div>
                    `;
                }
                
                this.show3DToast('Resume preview loaded!', 'success');
            });
        }
    }

    // 3D Modal Management
    setupModals() {
        const modal = document.getElementById('projectModal');
        const modalOverlay = document.getElementById('modalOverlay');
        const modalClose = document.getElementById('modalClose');

        if (!modal) return;

        const closeModal = () => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        };

        if (modalOverlay) {
            modalOverlay.addEventListener('click', closeModal);
        }
        
        if (modalClose) {
            modalClose.addEventListener('click', closeModal);
        }

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
    }

    // 3D Effects Setup
    setup3DEffects() {
        // Avatar frame mouse following
        const avatarFrame = document.getElementById('avatarFrame');
        if (avatarFrame) {
            document.addEventListener('mousemove', (e) => {
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;
                
                const xRotation = ((clientY / innerHeight) - 0.5) * 10;
                const yRotation = ((clientX / innerWidth) - 0.5) * 10;
                
                if (typeof gsap !== 'undefined') {
                    gsap.to(avatarFrame, {
                        duration: 0.5,
                        rotateX: xRotation,
                        rotateY: yRotation,
                        ease: "power2.out"
                    });
                }
            });
        }
    }

    // Scroll Effects
    setupScrollEffects() {
        const scrollTopBtn = document.getElementById('scrollTop');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            
            // Show/hide scroll to top button
            if (scrollTopBtn) {
                if (scrollY > 300) {
                    scrollTopBtn.classList.add('show');
                } else {
                    scrollTopBtn.classList.remove('show');
                }
            }
        });

        if (scrollTopBtn) {
            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    // Keyboard Shortcuts
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
                
                switch(e.key) {
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                        e.preventDefault();
                        const sectionIndex = parseInt(e.key) - 1;
                        if (sections[sectionIndex]) {
                            this.show3DSection(sections[sectionIndex]);
                            const targetLink = document.querySelector(`[data-section="${sections[sectionIndex]}"]`);
                            this.updateActiveNavLink(targetLink);
                        }
                        break;
                    case 'f':
                        e.preventDefault();
                        const searchInput = document.getElementById('projectSearch');
                        if (searchInput) {
                            this.show3DSection('projects');
                            setTimeout(() => searchInput.focus(), 100);
                        }
                        break;
                }
            }
        });
    }

    // 3D Toast Notifications
    show3DToast(message, type = 'info') {
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) return;
        
        const toast = document.createElement('div');
        toast.className = `toast-3d ${type}`;
        
        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };

        toast.innerHTML = `
            <i class="toast-icon-3d ${icons[type]}"></i>
            <span class="toast-message-3d">${message}</span>
            <button class="toast-close-3d" aria-label="Close">
                <i class="fas fa-times"></i>
            </button>
        `;

        toastContainer.appendChild(toast);

        // Auto remove after 4 seconds
        setTimeout(() => {
            toast.style.animation = 'toastSlideOut3D 0.4s ease-in-out forwards';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 400);
        }, 4000);

        // Manual close
        const closeBtn = toast.querySelector('.toast-close-3d');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                toast.remove();
            });
        }
    }
}

// CSS Animation for toast slide out
const style = document.createElement('style');
style.textContent = `
    @keyframes toastSlideOut3D {
        from {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
        }
        to {
            opacity: 0;
            transform: translateX(100%) rotateY(90deg);
        }
    }
`;
document.head.appendChild(style);

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolio3D = new Portfolio3D();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (window.portfolio3D && window.portfolio3D.particleSystem) {
        if (document.hidden) {
            document.body.style.animationPlayState = 'paused';
        } else {
            document.body.style.animationPlayState = 'running';
        }
    }
});