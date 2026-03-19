/* =============================================
   QUATROPHORIA — JavaScript
   Angkatan 2024 Interactive Features
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active nav link based on scroll
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ===== MOBILE MENU TOGGLE =====
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('open');
        document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // ===== SCROLL ANIMATIONS (Intersection Observer) =====
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    animateElements.forEach(el => observer.observe(el));

    // ===== COUNTER ANIMATION =====
    const statNumbers = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(num => counterObserver.observe(num));

    function animateCounter(element, target) {
        const duration = 2000;
        const startTime = performance.now();
        const start = 0;

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4); // easeOutQuart
            const current = Math.round(start + (target - start) * eased);
            element.textContent = current.toLocaleString('id-ID');

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    // ===== GALERI FILTER =====
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galeriItems = document.querySelectorAll('.galeri-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            galeriItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // ===== DATA ANGGOTA =====
    const anggotaData = [
        {
            photo: 'https://drive.google.com/thumbnail?id=1HiJUvxIfdJALtjK4hyfRj0t7e4FbNZNx&sz=w400',
            namaLengkap: 'Fathimah Azzahroh',
            namaPanggilan: 'Fathimah',
            jurusan: 'ILSAN',
            hobi: 'Nonton film',
            instagram: '@fazhrhh',
            quote: 'Belajar yang giat jangan lupa istirahat.'

        },
        {
            photo: 'https://drive.google.com/thumbnail?id=1YyaeJLUfVQr5RL9w7AWMaQxdy-IEW8zb&sz=w400',
            namaLengkap: 'Farrel Maulana Sofyan',
            namaPanggilan: 'Farrel, rel',
            jurusan: 'EKHUM',
            hobi: 'Badminton',
            instagram: '@thatrellz',
            quote: 'Hidup itu bukan lomba lari cepat, lebih mirip lomba lari estafet. Kadang kita capek, kadang kita salah pegang tongkat. Yang penting jangan lempar tongkatnya ke orang terus bilang ‘ini salah kamu’.'

        },
        {
            photo: 'https://drive.google.com/thumbnail?id=1V1bbKTcQo61Znh2oQYVfPvwr0zoRSmGz&sz=w400',
            namaLengkap: 'Abdullah Shaddiq Rinjayanto',
            namaPanggilan: 'Shaddiq',
            jurusan: 'ILSAN',
            hobi: 'Olahraga',
            instagram: '@shdqqrnjyy',
            quote: 'Lakukan apa yang kau mau, lagipula hidup akan berakhir.'

        },
        {
            photo: 'https://drive.google.com/thumbnail?id=1lMvTDk0fiPMSCHzTldRFSvANnBbf8ACY&sz=w400',
            namaLengkap: 'Raka Faturrahman Ghifari ',
            namaPanggilan: 'Raka',
            jurusan: 'ILSAN',
            hobi: 'Gym, main game, bersepedah ',
            instagram: '@rakaghfri_',
            quote: 'Fokus sama tujuan, bukan sama omongan.'

        },
        {
            photo: 'https://drive.google.com/thumbnail?id=1gDLT43f3XQQTkfnfhR5fNCm-vSBa4yRV&sz=w400',
            namaLengkap: 'Ahmad Fathin Faiq Mubarok',
            namaPanggilan: 'Faiq',
            jurusan: 'SOSTEK',
            hobi: 'Mikirin hobi',
            instagram: '@after1clock',
            quote: 'Mulailah mengodink'
        },
        {
            photo: 'https://drive.google.com/thumbnail?id=1paAObTMZfwH50Cp2_scgEt6ViVDNU5z6&sz=w400',
            namaLengkap: 'Aqeela Nur Azkia Adzra',
            namaPanggilan: 'Aqeela',
            jurusan: 'EKHUM',
            hobi: 'nyanyi, dengerin musik, makan dan baca buku',
            instagram: '@aqlnrzra',
            quote: 'in the middle of every difficulty lies opportunity'
        },
        {
            photo: 'https://drive.google.com/thumbnail?id=1zPiYgIXwLLkVcetXtMAO1-jgmDzDMqb0&sz=w400',
            namaLengkap: 'Hamdi Wahyudi',
            namaPanggilan: 'Hamdi',
            jurusan: 'ILSAN',
            hobi: 'BANYAK EYY AKU MA BISAA HOBBY APAA AJAAA(futsal,bola, volly, running,jongging,main game,)',
            instagram: '@hmdiw',
            quote: 'setiap orang pasti memiliki kekurangan jadi janganlah kamu menghina atau mencaci nya'
        },
        {
            photo: 'https://drive.google.com/thumbnail?id=1t-p0lHEzrATn2AUeWwJhQZhe41Iwg59O&sz=w400',
            namaLengkap: 'Muhammad Urwatul Wutsqo Al Imani',
            namaPanggilan: 'Urwah',
            jurusan: 'EKHUM',
            hobi: 'Riset',
            instagram: '@urwts_',
            quote: 'Berbuat baik, jadi orang baik, dan jadikan orang lain menjadi baik'
        },
        {
            photo: 'https://drive.google.com/thumbnail?id=1oxTeYpDHL9v8evQoLxvfAIBoErDmE6SA&sz=w400',
            namaLengkap: 'Muhammad Rizky Putra Permana',
            namaPanggilan: 'Rizky',
            jurusan: 'EKHUM',
            hobi: 'Bermain Game, Bermain Sepak Bola, & Naik Gunung',
            instagram: '@rizk.prmna',
            quote: 'if life is a movie, oh you\'re the best part'
        },
        {
            photo: 'https://drive.google.com/thumbnail?id=1CYCOQ1SNO-mjqLMs1znlqCeIRMKCTPUi&sz=w400',
            namaLengkap: 'Samiya hakim',
            namaPanggilan: 'Miya',
            jurusan: 'EKHUM',
            hobi: 'Memasak',
            instagram: '@Samiya_6607',
            quote: 'Kamu adalah apa yang kamu pikirkan'
        },
        {
            photo: 'https://drive.google.com/thumbnail?id=1MFTabmaxTTkYnVYg_3gTJfjFLZElrFdp&sz=w400',
            namaLengkap: 'Sigy sanira',
            namaPanggilan: 'Sigy',
            jurusan: 'EKHUM',
            hobi: 'Menggambar',
            instagram: '@Saaniira_',
            quote: 'If you truly love nature, you will find beauty everywhere. -Vincent van Gogh'
        },
        {
            photo: 'https://drive.google.com/thumbnail?id=18wNVGe6M-X6D_c6YzdIOhGQbdQDfnrqq&sz=w400',
            namaLengkap: 'Muhammad Zyan Luthfi Akhdani',
            namaPanggilan: 'Zyan',
            jurusan: 'ILSAN',
            hobi: 'Bermain badminton, mengoprek motor',
            instagram: '@zynluth',
            quote: 'Saya tidak pemalas, saya hanya sedang dalam mode hemat energi.'
        },
        {
            photo: 'https://drive.google.com/thumbnail?id=1JcgyidVlDBM3RNzjSylCw3Lz96-6oVW7&sz=w400',
            namaLengkap: 'Nala Faqihurahman',
            namaPanggilan: 'Nala',
            jurusan: 'EKHUM',
            hobi: 'Berenang',
            instagram: '@fqhrhmn._',
            quote: 'Dia yang menginginkan segalanya akan kehilangan segalanya.'
        },
        {
            photo: 'https://drive.google.com/thumbnail?id=12WcA5Qyld3Xvrg3Vca7J6JcAUo9_vpW1&sz=w400',
            namaLengkap: 'Muhammad Arkan Atayano Kurniawan',
            namaPanggilan: 'Arkan',
            jurusan: 'SOSTEK',
            hobi: 'Menyibukkan diri',
            instagram: '@arkan_atayano',
            quote: 'Terbentur, terbentur, lalu terbentuk'
        },
        {
            photo: 'https://drive.google.com/thumbnail?id=158Oc8HeHexdFBEgRVlLqnyqAlgGaY7C_&sz=w400',
            namaLengkap: 'Elmyra Anindya Sofyan',
            namaPanggilan: 'Elmyra',
            jurusan: 'ILSAN',
            hobi: 'Masak, baca',
            instagram: '@elmyraanin',
            quote: 'She learned to stand alone, and that’s where her real strength began.'
        },
        {
            photo: 'https://drive.google.com/thumbnail?id=16JD1h1zjYsA3QVf85MqNikHbjfI5lUMF&sz=w400',
            namaLengkap: 'Raya Daniswara',
            namaPanggilan: 'Raya',
            jurusan: 'EKHUM',
            hobi: 'Menyanyi',
            instagram: '@raaiaax',
            quote: 'to be a star you must burn'
        },
        {
            photo: 'https://drive.google.com/thumbnail?id=1hz6Pmu2JFzD10p_xFlJr0kytl8cVT0LI&sz=w400',
            namaLengkap: 'Huzaifah As Sammi',
            namaPanggilan: 'Sam, Sami',
            jurusan: 'SOSTEK',
            hobi: 'Nonton, Ngegame, tidur',
            instagram: '@sym_fv_',
            quote: 'Masih trial version, nanti update lagi.'
        },
        {
            photo: 'https://drive.google.com/thumbnail?id=1MntGlJsOM4vPfNPVY3ymeCO-kGSK4ZvQ&sz=w400',
            namaLengkap: 'Muhamad Fatih Nururrizqi',
            namaPanggilan: 'Fatih',
            jurusan: 'ILSAN',
            hobi: 'Jogging',
            instagram: '@Nururrizqi_',
            quote: 'Jangan benci lelahnya proses, karena proses akan menghasilkan cahaya dibalik luka'
        },
        {
            photo: 'https://drive.google.com/thumbnail?id=1oUs1BDGbPqIo2AMnEXUFSf-oqesgBfLU&sz=w400',
            namaLengkap: 'Firqotun Najiyyah Karamy',
            namaPanggilan: 'Fio',
            jurusan: 'EKHUM',
            hobi: 'Menulis',
            instagram: 'fififirqoh',
            quote: 'Growing, glowing, and still going'
        },
        {
            photo: 'https://drive.google.com/thumbnail?id=17mH3N7f9952DTbseO-6OgLAwUMpdzTD-&sz=w400',
            namaLengkap: 'Fahri Abdillah Habib',
            namaPanggilan: 'Fahri',
            jurusan: 'ILSAN',
            hobi: 'Badminton',
            instagram: 'fhr_abdllh',
            quote: 'hiduplah untuk hari esok bukan hari ini'
        },
        {
            photo: 'https://drive.google.com/thumbnail?id=1vIpXRzdrSxmQFkHiIwhUfrdZrpyZvWCW&sz=w400',
            namaLengkap: 'Muammar Hanif Al Iman',
            namaPanggilan: 'Hanif',
            jurusan: 'ILSAN',
            hobi: 'Main bola',
            instagram: '@muammarhanif.ai22',
            quote: 'Kita mungkin akan berjalan di jalan yang berbeda, tapi kenangan di sekolah ini akan selalu menjadi bagian dari cerita kita.'
        }
    ];

    const anggotaGrid = document.getElementById('anggotaGrid');
    const searchInput = document.getElementById('searchInput');
    const noResults = document.getElementById('noResults');

    // Color palette for avatars
    const avatarColors = [
        'linear-gradient(135deg, #667eea, #764ba2)',
        'linear-gradient(135deg, #f093fb, #f5576c)',
        'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    ];

    function getInitials(name) {
        if (!name) return '??';
        return name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
    }

    function renderAnggota(data) {
        anggotaGrid.innerHTML = '';
        if (data.length === 0) {
            noResults.style.display = 'block';
            return;
        }
        noResults.style.display = 'none';

        data.forEach((anggota, index) => {
            const card = document.createElement('div');
            card.className = 'anggota-card animate-on-scroll visible';
            card.style.animationDelay = `${index * 0.05}s`;

            const color = avatarColors[index % avatarColors.length];
            const avatarContent = anggota.photo
                ? `<img src="${anggota.photo}" alt="${anggota.namaPanggilan}" class="anggota-photo">`
                : `<div class="anggota-avatar" style="background: ${color}">${getInitials(anggota.namaPanggilan || anggota.namaLengkap)}</div>`;

            card.innerHTML = `
                ${avatarContent}
                <div class="anggota-info">
                    <h4 class="anggota-fullname">${anggota.namaLengkap}</h4>
                    <p class="anggota-nickname">${anggota.namaPanggilan}</p>
                    <p class="anggota-jurusan">${anggota.jurusan}</p>
                    ${anggota.hobi ? `<p class="anggota-hobi">Hobi: ${anggota.hobi}</p>` : ''}
                    ${anggota.instagram ? `<p class="anggota-instagram">IG: <a href="https://instagram.com/${anggota.instagram.replace(/^@/, '')}" target="_blank">${anggota.instagram}</a></p>` : ''}
                    ${anggota.quote ? `<p class="anggota-quote">“${anggota.quote}”</p>` : ''}
                </div>
            `;

            anggotaGrid.appendChild(card);
        });
    }

    // Sort data alphabetically by namaLengkap
    anggotaData.sort((a, b) => a.namaLengkap.localeCompare(b.namaLengkap));

    renderAnggota(anggotaData);

    // Search Feature
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query === '') {
            renderAnggota(anggotaData);
            anggotaGrid.style.animation = 'scrollCarousel 20s linear infinite';
            return;
        }
        const filtered = anggotaData.filter(a =>
            a.namaLengkap.toLowerCase().includes(query) ||
            a.namaPanggilan.toLowerCase().includes(query) ||
            a.jurusan.toLowerCase().includes(query)
        );
        renderAnggota(filtered, true);
    });
    // Wrap the grid inside a wrapper to handle scrollbar
    if (!anggotaGrid.parentElement.classList.contains('anggota-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'anggota-wrapper';
        anggotaGrid.parentNode.insertBefore(wrapper, anggotaGrid);
        wrapper.appendChild(anggotaGrid);
    }

    // Override render function
    renderAnggota = function (data) {
        // Clear first
        anggotaGrid.innerHTML = '';
        if (data.length === 0) {
            noResults.style.display = 'block';
            return;
        }
        noResults.style.display = 'none';

        // Function to create a card DOM
        const createCard = (anggota, index) => {
            const card = document.createElement('div');
            card.className = 'anggota-card';

            const color = avatarColors[index % avatarColors.length];
            const avatarContent = anggota.photo
                ? `<img src="${anggota.photo}" alt="${anggota.namaPanggilan}" class="anggota-photo">`
                : `<div class="anggota-avatar" style="background: ${color}">${getInitials(anggota.namaPanggilan || anggota.namaLengkap)}</div>`;

            card.innerHTML = `
                ${avatarContent}
                <div class="anggota-info">
                    <h4 class="anggota-fullname">${anggota.namaLengkap}</h4>
                    <p class="anggota-nickname">${anggota.namaPanggilan}</p>
                    <p class="anggota-jurusan">${anggota.jurusan}</p>
                    ${anggota.hobi ? `<p class="anggota-hobi">Hobi: ${anggota.hobi}</p>` : ''}
                    ${anggota.instagram ? `<p class="anggota-instagram">IG: <a href="https://instagram.com/${anggota.instagram.replace(/^@/, '')}" target="_blank">${anggota.instagram}</a></p>` : ''}
                    ${anggota.quote ? `<p class="anggota-quote">“${anggota.quote}”</p>` : ''}
                </div>
            `;
            return card;
        };

        // Render items
        data.forEach((anggota, i) => {
            anggotaGrid.appendChild(createCard(anggota, i));
        });
    };

    // Re-render to apply new logic on load
    renderAnggota(anggotaData);

    // AUTO SCROLL LOGIC
    const wrapper = document.querySelector('.anggota-wrapper');
    if (wrapper && !anggotaGrid.classList.contains('all-members-grid')) {
        let animationId;
        const scrollSpeed = 0.5; // pixels per frame

        function autoScroll() {
            wrapper.scrollLeft += scrollSpeed;
            // If we reach the end, jump back to start
            if (wrapper.scrollLeft >= (wrapper.scrollWidth - wrapper.clientWidth)) {
                wrapper.scrollLeft = 0;
            }
            animationId = requestAnimationFrame(autoScroll);
        }

        // Start scrolling
        autoScroll();
    }

    // ===== COUNTDOWN TIMER =====
    const reuniDate = new Date('2026-05-28T07:30:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const diff = reuniDate - now;

        if (diff <= 0) {
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(3, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // ===== HERO PARTICLES =====
    const particlesContainer = document.getElementById('heroParticles');

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.bottom = '-10px';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        particle.style.opacity = Math.random() * 0.5 + 0.1;

        const duration = Math.random() * 8 + 6;
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';

        particlesContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, (duration + 2) * 1000);
    }

    // Generate particles periodically
    setInterval(createParticle, 400);
    // Initial batch
    for (let i = 0; i < 15; i++) {
        setTimeout(createParticle, i * 200);
    }

    // ===== SMOOTH SCROLL for internal links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});

// CSS animation for gallery filter
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
