const translations = {
    th: {
        navHome: "หน้าแรก",
        navMenu: "เมนูแนะนำ",
        navVibe: "บรรยากาศ",
        navContact: "ติดต่อเรา",
        heroTitle: "เริ่มต้นวันดีๆ ด้วยนมสดหอมกรุ่น",
        heroSubtitle: "ความสุขเล็กๆ ที่เราตั้งใจเสิร์ฟให้คุณในทุกวัน",
        heroBtn: "ดูเมนูของเรา",
        menuTitle: "เมนูยอดฮิต",
        menuSubtitle: "คัดสรรความอร่อยมาเพื่อคุณโดยเฉพาะ",
        menu1Title: "นมสดเย็น",
        menu1Desc: "หอมมัน สดชื่น ดื่มง่ายคลายร้อน",
        menu1Price: "100 บาท",
        menu2Title: "นมคาราเมล",
        menu2Desc: "หวานละมุน หอมกลิ่นคาราเมล",
        menu3Title: "นมชมพู",
        menu3Desc: "หวานหอม ชื่นใจ สไตล์วัยหวาน",
        menu4Title: "ปังปิ้งเนยนม",
        menu4Desc: "ขนมปังปิ้งกรอบนอกนุ่มใน ชุ่มฉ่ำเนยนม",
        menu5Title: "ปังเย็น",
        menu5Desc: "เกล็ดน้ำแข็งเย็นชื่นใจ ท็อปปิ้งจุกๆ",
        menu6Title: "ชาไทย",
        menu6Desc: "เข้มข้น หอมชาไทยแท้ๆ",
        vibeTitle: "บรรยากาศร้าน",
        vibeSubtitle: "พื้นที่โปร่งโล่ง สบายตา เหมาะสำหรับวันพักผ่อนของคุณ",
        footerDesc: "ร้านนมสดสไตล์มินิมอล เติมความหวานให้ทุกวันของคุณ",
        footerTimeTitle: "เวลาทำการ",
        footerTime: "เปิดบริการทุกวัน: 10:00 น. - 20:00 น.",
        footerContactTitle: "ติดต่อเรา",
        footerContact: "โทร: 080-123-4567",
        footerBtnMap: "ดูแผนที่",
        footerBtnDel: "สั่งเดลิเวอรี่"
    },
    en: {
        navHome: "Home",
        navMenu: "Signature Menu",
        navVibe: "Atmosphere",
        navContact: "Contact Us",
        heroTitle: "Start Your Day with Fresh Milk",
        heroSubtitle: "Little happiness we serve you every day",
        heroBtn: "View Our Menu",
        menuTitle: "Signature Menu",
        menuSubtitle: "Carefully selected deliciousness just for you",
        menu1Title: "Cold Fresh Milk",
        menu1Desc: "Rich, refreshing, and easy to drink",
        menu1Price: "100 THB",
        menu2Title: "Caramel Milk",
        menu2Desc: "Sweet and smooth with caramel aroma",
        menu3Title: "Pink Milk",
        menu3Desc: "Sweet, fragrant, and refreshing style",
        menu4Title: "Butter Toast",
        menu4Desc: "Crispy outside, soft inside, soaked in butter and milk",
        menu5Title: "Shaved Ice Bread",
        menu5Desc: "Refreshing shaved ice with generous toppings",
        menu6Title: "Thai Tea",
        menu6Desc: "Intense and authentic Thai tea aroma",
        vibeTitle: "Shop Vibes",
        vibeSubtitle: "Airy, clean, and perfect for your relaxing day",
        footerDesc: "Minimalist fresh milk cafe. Sweetening your every day.",
        footerTimeTitle: "Opening Hours",
        footerTime: "Open Daily: 10:00 AM - 8:00 PM",
        footerContactTitle: "Contact Us",
        footerContact: "Tel: 080-123-4567",
        footerBtnMap: "View Map",
        footerBtnDel: "Order Delivery"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animateElements = document.querySelectorAll('.animate-up, .fade-in');
    animateElements.forEach(el => observer.observe(el));

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Language Switcher Logic
    const langBtns = document.querySelectorAll('.lang-btn');
    const i18nElements = document.querySelectorAll('[data-i18n]');

    function setLanguage(lang) {
        // Update Active Button
        langBtns.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update Text
        i18nElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // Add a small fade effect for language switch
                el.style.opacity = '0';
                setTimeout(() => {
                    el.textContent = translations[lang][key];
                    el.style.opacity = '1';
                }, 150);
            }
        });
        
        // Change html lang attribute
        document.documentElement.lang = lang;
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
        });
    });
    
    // Set initial transition for text elements to make switching smooth
    i18nElements.forEach(el => {
        el.style.transition = 'opacity 0.15s ease-in-out';
    });
});
