// Anniversary Website JavaScript
// Dibuat untuk Adna Fika Agestifanka & Lyra Arecha

// Global Variables
let currentImageIndex = 0;
let images = [];
let currentSongIndex = 0;
let isPlaying = false;
let quizScore = 0;
let currentQuestionIndex = 0;

// Audio files and lyrics
const songs = [
    {
        title: "Threesixty - Sampai Nanti",
        url: "https://raw.githubusercontent.com/ribbleca/backsound/refs/heads/main/Sampai%20Nanti.mp3",
        lyrics: `Ku ingin bersamamu
Sampai nanti
Hingga waktu tak berarti
Ku akan setia
Menunggu dirimu
Sampai nanti
Sampai akhir waktu

Cinta ini takkan pernah berubah
Walau badai menghadang
Ku akan tetap di sini
Menunggu dirimu kembali

Sampai nanti
Sampai selamanya
Cinta ini untuk mu
Sampai nanti
Sampai akhir waktu
Ku akan menunggu`
    },
    {
        title: "Nadhif Basalamah - Penjaga Hati",
        url: "https://raw.githubusercontent.com/ribbleca/backsound/refs/heads/main/nadhif%20basalamah%20-%20penjaga%20hati%20(Official%20Lyric%20Video).mp3",
        lyrics: `Kau datang dengan sejuta pesona
Membuat hatiku berbunga-bunga
Senyummu yang manis
Membuatku terpesona

Jadilah penjaga hatiku
Jangan biarkan aku sendiri
Temani aku dalam suka duka
Hingga akhir hayatku

Cinta ini tulus dari hati
Takkan pernah ku dustai
Kau adalah segalanya
Dalam hidupku

Penjaga hati
Penjaga jiwa
Kaulah segalanya
Bagiku`
    },
    {
        title: "Denny Caknan - Cundamani",
        url: "https://raw.githubusercontent.com/ribbleca/backsound/refs/heads/main/Denny%20Caknan%20-%20Cundamani%20(Official%20Music%20Video).mp3",
        lyrics: `Cundamani, permata hatiku
Kau yang terindah di mataku
Sinar wajahmu bagai rembulan
Menerangi gelap malam

Cundamani, cinta sejatiku
Takkan pernah ku lepaskan
Walau badai menghadang
Cinta ini takkan surut

Bersama kita hadapi dunia
Suka duka kita lalui
Cundamani, permata hatiku
Selamanya untukmu

Cinta ini abadi
Takkan pernah mati
Cundamani, sayangku
Selamanya bersamamu`
    }
];

// Quiz questions
const quizQuestions = [
    {
        question: "Kapan anniversary ke-2 Adna dan Lyra?",
        options: ["8 Juli 2025", "8 Juni 2025", "8 Agustus 2025", "8 September 2025"],
        correct: 0
    },
    {
        question: "Siapa yang menulis surat cinta di website ini?",
        options: ["Lyra Arecha", "Adna Fika Agestifanka", "Keduanya", "Tidak ada"],
        correct: 1
    },
    {
        question: "Berapa tahun mereka sudah bersama?",
        options: ["1 tahun", "2 tahun", "3 tahun", "4 tahun"],
        correct: 1
    },
    {
        question: "Apa nama lengkap pasangan ini?",
        options: ["Adna & Lyra", "Adna Fika Agestifanka & Lyra Arecha", "Fika & Arecha", "Adna & Arecha"],
        correct: 1
    },
    {
        question: "Tema utama website ini adalah?",
        options: ["Pernikahan", "Anniversary", "Ulang tahun", "Wisuda"],
        correct: 1
    }
];

// Timeline data
const timelineData = [
    {
        date: "8 Juli 2023",
        title: "Awal Perjalanan Cinta",
        description: "Hari dimana semuanya dimulai. Adna dan Lyra memutuskan untuk memulai perjalanan cinta mereka bersama."
    },
    {
        date: "Agustus 2023",
        title: "Kencan Pertama",
        description: "Kencan pertama yang tak terlupakan. Momen dimana mereka saling mengenal lebih dalam."
    },
    {
        date: "Desember 2023",
        title: "Liburan Bersama",
        description: "Liburan pertama bersama yang penuh dengan tawa dan kebahagiaan."
    },
    {
        date: "Februari 2024",
        title: "Valentine Pertama",
        description: "Merayakan hari kasih sayang pertama sebagai sepasang kekasih."
    },
    {
        date: "Juli 2024",
        title: "Anniversary Pertama",
        description: "Merayakan anniversary pertama dengan penuh kebahagiaan dan janji untuk masa depan."
    },
    {
        date: "8 Juli 2025",
        title: "Anniversary Kedua",
        description: "Hari ini! Merayakan 2 tahun perjalanan cinta yang indah dan penuh makna."
    }
];

// Love reminders
const loveReminders = [
    "Adna selalu ingat bagaimana Lyra tersenyum di pagi hari ❤️",
    "Setiap hari bersama Lyra adalah hari terbaik untuk Adna 💕",
    "Lyra adalah alasan Adna bangun dengan semangat setiap hari ✨",
    "Cinta Adna untuk Lyra tumbuh setiap detiknya 💖",
    "Lyra membuat hidup Adna lebih berwarna dan bermakna 🌈",
    "Adna bersyukur setiap hari bisa mencintai Lyra 🙏",
    "Lyra adalah rumah ternyaman untuk hati Adna 🏠",
    "Setiap momen bersama Lyra adalah kenangan berharga 📸",
    "Adna mencintai semua hal tentang Lyra, tanpa terkecuali 💝",
    "Lyra adalah jawaban dari semua doa Adna 🤲"
];

// Love challenges
const loveChallenges = [
    "Kirim foto selfie dengan senyum termanis untuk Lyra! 📸",
    "Tulis 3 hal yang paling kamu sukai dari Lyra hari ini 💕",
    "Buat video singkat mengucapkan 'I love you' dalam 5 bahasa 🌍",
    "Kirim voice note menyanyikan lagu favorit kalian berdua 🎵",
    "Buat puisi pendek tentang mata Lyra yang indah 👁️",
    "Foto makanan yang ingin kamu masak untuk Lyra 🍳",
    "Tulis alasan kenapa kamu jatuh cinta pada Lyra 💘",
    "Buat daftar 10 tempat yang ingin dikunjungi bersama Lyra 🗺️",
    "Kirim foto sunset/sunrise sambil memikirkan Lyra 🌅",
    "Tulis surat pendek untuk Lyra 20 tahun yang akan datang 💌"
];

// Memory locations
const memoryLocations = [
    { name: "Tempat Kencan Pertama", lat: -6.2088, lng: 106.8456, description: "Cafe tempat kencan pertama yang tak terlupakan" },
    { name: "Taman Favorit", lat: -6.1751, lng: 106.8650, description: "Taman dimana mereka sering jalan-jalan bersama" },
    { name: "Restoran Anniversary", lat: -6.2297, lng: 106.8230, description: "Restoran untuk merayakan anniversary pertama" },
    { name: "Pantai Kenangan", lat: -6.0055, lng: 106.7378, description: "Pantai dimana mereka menonton sunset bersama" },
    { name: "Mall Favorit", lat: -6.2253, lng: 106.8467, description: "Mall tempat mereka sering berbelanja bersama" }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize Website
function initializeWebsite() {
    setupEventListeners();
    startTypingAnimation();
    startCountdown();
    loadGallery();
    loadQuiz();
    loadTimeline();
    loadGuestbook();
    setupMusicPlayer();
    setupThemeControls();
    setupScrollAnimations();
    setupProgressBar();
    createConfettiHearts();
    setupParallax();
    animateStats();
}

// Event Listeners
function setupEventListeners() {
    // Envelope click
    document.getElementById('envelope').addEventListener('click', openLoveLetter);
    
    // Modal close buttons
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal.id);
        });
    });
    
    // Lightbox
    document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
    document.getElementById('prevBtn').addEventListener('click', prevImage);
    document.getElementById('nextBtn').addEventListener('click', nextImage);
    
    // Guestbook
    document.getElementById('submitGuest').addEventListener('click', submitGuestMessage);
    
    // Lyra's reply
    document.getElementById('submitReply').addEventListener('click', submitLyraReply);
    
    // Music player
    document.getElementById('playPauseBtn').addEventListener('click', togglePlayPause);
    document.getElementById('songSelect').addEventListener('change', changeSong);
    document.getElementById('volumeSlider').addEventListener('input', changeVolume);
    
    // Quiz
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('quiz-option')) {
            selectQuizOption(e.target);
        }
    });
    
    // Window events
    window.addEventListener('scroll', updateProgressBar);
    window.addEventListener('scroll', handleScrollAnimations);
    window.addEventListener('scroll', handleParallax);
    
    // Click outside modal to close
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });
}

// Typing Animation
function startTypingAnimation() {
    const text = "Anniversary ke-2 Adna Fika Agestifanka & Lyra Arecha — 8 Juli 2025";
    const typingElement = document.getElementById('typingText');
    let index = 0;
    
    function typeChar() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeChar, 100);
        }
    }
    
    typeChar();
}

// Countdown Timer
function startCountdown() {
    const targetDate = new Date('2025-07-08T00:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
            // Anniversary day!
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            
            // Trigger celebration
            triggerCelebration();
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Load Gallery
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    // Image URLs from the request
    const imageUrls = [
        "https://i.imgur.com/fxMzzTs_d.webp?maxwidth=1520&fidelity=grand",
        "https://i.imgur.com/AewMw3p_d.webp?maxwidth=1520&fidelity=grand",
        "https://i.imgur.com/52ORsL1_d.webp?maxwidth=760&fidelity=grand",
        "https://i.imgur.com/PthsY6i_d.webp?maxwidth=760&fidelity=grand",
        "https://i.imgur.com/cwUj3HS_d.webp?maxwidth=760&fidelity=grand",
        "https://i.imgur.com/JHQdejX_d.webp?maxwidth=760&fidelity=grand",
        "https://i.imgur.com/ptwpmBi.jpeg",
        "https://i.imgur.com/T7TYTkH.jpeg",
        "https://i.imgur.com/IydAwOH.jpeg",
        "https://i.imgur.com/UUqMkiX.jpeg",
        "https://i.imgur.com/SOYUoBH.jpeg",
        "https://i.imgur.com/1UdEE9y.jpeg",
        "https://i.imgur.com/FW3dLze.jpeg",
        "https://i.imgur.com/zVlncAO.jpeg",
        "https://i.imgur.com/y5gRxIm.jpeg",
        "https://i.imgur.com/dseYmqI.jpeg",
        "https://i.imgur.com/PXvIF50.jpeg",
        "https://i.imgur.com/yFjxa47.jpeg",
        "https://i.imgur.com/mazoFdC.jpeg",
        "https://i.imgur.com/ZowcXa7.jpeg",
        "https://i.imgur.com/MO1EN19.jpeg",
        "https://i.imgur.com/wq9JbNn.jpeg",
        "https://i.imgur.com/cRAtqH3.jpeg",
        "https://i.imgur.com/7CvxWeq.jpeg",
        "https://i.imgur.com/Ecra6uu.jpeg",
        "https://i.imgur.com/EJcOrm6.jpeg",
        "https://i.imgur.com/aIxwEaT.jpeg"
    ];
    
    images = imageUrls;
    
    imageUrls.forEach((url, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${url}" alt="Kenangan ${index + 1}" loading="lazy">
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        `;
        galleryItem.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(galleryItem);
    });
}

// Lightbox Functions
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    lightboxImage.src = images[currentImageIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('lightboxImage').src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('lightboxImage').src = images[currentImageIndex];
}

// Music Player
function setupMusicPlayer() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const progressBar = document.getElementById('musicProgress');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');
    
    // Load first song
    audioPlayer.src = songs[0].url;
    updateLyrics(0);
    
    // Update progress
    audioPlayer.addEventListener('timeupdate', function() {
        if (audioPlayer.duration) {
            const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progressBar.style.width = progress + '%';
            
            currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
            durationEl.textContent = formatTime(audioPlayer.duration);
        }
    });
    
    // Song ended
    audioPlayer.addEventListener('ended', function() {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        isPlaying = false;
    });
    
    // Progress bar click
    document.querySelector('.progress-bar-music').addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audioPlayer.currentTime = percent * audioPlayer.duration;
    });
}

function togglePlayPause() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        isPlaying = false;
    } else {
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        isPlaying = true;
    }
}

function changeSong() {
    const songSelect = document.getElementById('songSelect');
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    
    currentSongIndex = parseInt(songSelect.value);
    audioPlayer.src = songs[currentSongIndex].url;
    updateLyrics(currentSongIndex);
    
    if (isPlaying) {
        audioPlayer.play();
    } else {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function changeVolume() {
    const volumeSlider = document.getElementById('volumeSlider');
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.volume = volumeSlider.value / 100;
}

function updateLyrics(songIndex) {
    const lyricsDisplay = document.getElementById('lyricsDisplay');
    lyricsDisplay.innerHTML = `<h4>${songs[songIndex].title}</h4><p>${songs[songIndex].lyrics.replace(/\n/g, '<br>')}</p>`;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Love Letter
function openLoveLetter() {
    const envelope = document.getElementById('envelope');
    const modal = document.getElementById('letterModal');
    
    envelope.classList.add('open');
    setTimeout(() => {
        modal.classList.add('active');
        triggerFireworks();
    }, 600);
}

// Quiz Functions
function loadQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    
    quizQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        questionDiv.innerHTML = `
            <h3>Pertanyaan ${index + 1}: ${question.question}</h3>
            <div class="quiz-options">
                ${question.options.map((option, optIndex) => 
                    `<button class="quiz-option" data-question="${index}" data-option="${optIndex}">${option}</button>`
                ).join('')}
            </div>
        `;
        quizContainer.appendChild(questionDiv);
    });
    
    const scoreDiv = document.createElement('div');
    scoreDiv.className = 'quiz-score';
    scoreDiv.id = 'quizScore';
    scoreDiv.textContent = 'Jawab semua pertanyaan untuk melihat skor!';
    quizContainer.appendChild(scoreDiv);
}

function selectQuizOption(button) {
    const questionIndex = parseInt(button.dataset.question);
    const optionIndex = parseInt(button.dataset.option);
    const question = quizQuestions[questionIndex];
    
    // Disable all options for this question
    const questionDiv = button.closest('.quiz-question');
    const options = questionDiv.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.disabled = true);
    
    // Mark correct/wrong
    if (optionIndex === question.correct) {
        button.classList.add('correct');
        quizScore++;
    } else {
        button.classList.add('wrong');
        options[question.correct].classList.add('correct');
    }
    
    // Update score
    updateQuizScore();
}

function updateQuizScore() {
    const answeredQuestions = document.querySelectorAll('.quiz-option:disabled').length / 4;
    if (answeredQuestions === quizQuestions.length) {
        const scoreEl = document.getElementById('quizScore');
        const percentage = (quizScore / quizQuestions.length) * 100;
        scoreEl.textContent = `Skor Anda: ${quizScore}/${quizQuestions.length} (${percentage}%)`;
        
        if (percentage === 100) {
            scoreEl.textContent += ' - Sempurna! Anda benar-benar mengenal Adna & Lyra! 💕';
        } else if (percentage >= 80) {
            scoreEl.textContent += ' - Bagus sekali! Anda tahu banyak tentang mereka! 😊';
        } else if (percentage >= 60) {
            scoreEl.textContent += ' - Tidak buruk! Masih bisa belajar lebih banyak! 😉';
        } else {
            scoreEl.textContent += ' - Yuk belajar lebih banyak tentang Adna & Lyra! 📚';
        }
    }
}

// Timeline
function loadTimeline() {
    const timeline = document.getElementById('timeline');
    
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item animate-on-scroll';
        timelineItem.innerHTML = `
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-title">${item.title}</div>
            <div class="timeline-description">${item.description}</div>
        `;
        timeline.appendChild(timelineItem);
    });
}

// Guestbook
function loadGuestbook() {
    const savedMessages = JSON.parse(localStorage.getItem('guestbookMessages') || '[]');
    const messagesContainer = document.getElementById('guestbookMessages');
    
    savedMessages.forEach(message => {
        addGuestMessageToDOM(message);
    });
}

function submitGuestMessage() {
    const nameInput = document.getElementById('guestName');
    const messageInput = document.getElementById('guestMessage');
    
    if (nameInput.value.trim() && messageInput.value.trim()) {
        const message = {
            name: nameInput.value.trim(),
            message: messageInput.value.trim(),
            date: new Date().toLocaleDateString('id-ID')
        };
        
        // Save to localStorage
        const savedMessages = JSON.parse(localStorage.getItem('guestbookMessages') || '[]');
        savedMessages.push(message);
        localStorage.setItem('guestbookMessages', JSON.stringify(savedMessages));
        
        // Add to DOM
        addGuestMessageToDOM(message);
        
        // Clear inputs
        nameInput.value = '';
        messageInput.value = '';
        
        // Show success message
        alert('Pesan berhasil dikirim! Terima kasih atas ucapannya! 💕');
    } else {
        alert('Mohon isi nama dan pesan terlebih dahulu!');
    }
}

function addGuestMessageToDOM(message) {
    const messagesContainer = document.getElementById('guestbookMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'guest-message';
    messageDiv.innerHTML = `
        <div class="guest-name">${message.name}</div>
        <div class="guest-text">${message.message}</div>
        <div class="guest-date">${message.date}</div>
    `;
    messagesContainer.insertBefore(messageDiv, messagesContainer.firstChild);
}

// Lyra's Reply
function submitLyraReply() {
    const replyInput = document.getElementById('lyraReply');
    const replyDisplay = document.getElementById('replyDisplay');
    
    if (replyInput.value.trim()) {
        const reply = {
            message: replyInput.value.trim(),
            date: new Date().toLocaleDateString('id-ID')
        };
        
        // Save to localStorage
        localStorage.setItem('lyraReply', JSON.stringify(reply));
        
        // Display reply
        replyDisplay.innerHTML = `
            <div class="lyra-reply">
                <div class="reply-author">Balasan dari Lyra Arecha:</div>
                <div class="reply-text">${reply.message}</div>
                <div class="reply-date">${reply.date}</div>
            </div>
        `;
        
        // Clear input
        replyInput.value = '';
        
        // Show success message
        alert('Balasan berhasil dikirim! Adna pasti senang membacanya! 💕');
    } else {
        alert('Mohon tulis balasan terlebih dahulu!');
    }
}

// Load saved reply on page load
function loadLyraReply() {
    const savedReply = JSON.parse(localStorage.getItem('lyraReply') || 'null');
    const replyDisplay = document.getElementById('replyDisplay');
    
    if (savedReply) {
        replyDisplay.innerHTML = `
            <div class="lyra-reply">
                <div class="reply-author">Balasan dari Lyra Arecha:</div>
                <div class="reply-text">${savedReply.message}</div>
                <div class="reply-date">${savedReply.date}</div>
            </div>
        `;
    }
}

// Theme Controls
function setupThemeControls() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const colorOptions = document.querySelectorAll('.color-option');
    
    // Dark mode toggle
    darkModeToggle.addEventListener('click', function() {
        document.body.toggleAttribute('data-theme');
        const isDark = document.body.hasAttribute('data-theme');
        this.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('darkMode', isDark);
    });
    
    // Color theme picker
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            const color = this.dataset.color;
            document.body.setAttribute('data-color', color);
            localStorage.setItem('colorTheme', color);
            
            // Update active state
            colorOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Load saved preferences
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const savedColorTheme = localStorage.getItem('colorTheme') || 'pink';
    
    if (savedDarkMode) {
        document.body.setAttribute('data-theme', '');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    document.body.setAttribute('data-color', savedColorTheme);
    document.querySelector(`[data-color="${savedColorTheme}"]`).classList.add('active');
}

// Progress Bar
function setupProgressBar() {
    updateProgressBar();
}

function updateProgressBar() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progressBar').style.width = scrollPercent + '%';
}

// Scroll Animations
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    handleScrollAnimations();
}

function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animated');
        }
    });
}

// Parallax Effect
function setupParallax() {
    handleParallax();
}

function handleParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-section');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(window.pageYOffset * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}

// Animate Statistics
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateNumber(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 20);
}

// Confetti Hearts
function createConfettiHearts() {
    const container = document.getElementById('confettiContainer');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'confetti-heart';
        heart.innerHTML = '💕';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    // Create hearts periodically
    setInterval(createHeart, 3000);
}

// Fireworks Animation
function triggerFireworks() {
    const colors = ['#ff69b4', '#ff1493', '#ffc0cb', '#ff6347', '#ffd700'];
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFirework();
        }, i * 200);
    }
}

function createFirework() {
    const firework = document.createElement('div');
    firework.style.position = 'fixed';
    firework.style.left = Math.random() * window.innerWidth + 'px';
    firework.style.top = Math.random() * window.innerHeight + 'px';
    firework.style.width = '4px';
    firework.style.height = '4px';
    firework.style.backgroundColor = '#ff69b4';
    firework.style.borderRadius = '50%';
    firework.style.pointerEvents = 'none';
    firework.style.zIndex = '9999';
    document.body.appendChild(firework);
    
    // Animate explosion
    setTimeout(() => {
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = firework.style.left;
            particle.style.top = firework.style.top;
            particle.style.width = '3px';
            particle.style.height = '3px';
            particle.style.backgroundColor = '#ff69b4';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            
            const angle = (i * 30) * Math.PI / 180;
            const velocity = 100;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            particle.style.transition = 'all 1s ease-out';
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.style.transform = `translate(${vx}px, ${vy}px)`;
                particle.style.opacity = '0';
            }, 10);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
        firework.remove();
    }, 100);
}

// Celebration for anniversary day
function triggerCelebration() {
    // Trigger fireworks
    triggerFireworks();
    
    // Show celebration message
    setTimeout(() => {
        alert('🎉 SELAMAT ANNIVERSARY KE-2 ADNA & LYRA! 🎉\n\nSemoga cinta kalian semakin kuat dan bahagia selamanya! 💕');
    }, 1000);
}

// Feature Functions
function openVoiceMessage() {
    const modal = document.getElementById('voiceModal');
    modal.classList.add('active');
}

function showLoveReminder() {
    const modal = document.getElementById('reminderModal');
    const reminderText = document.getElementById('reminderText');
    const randomReminder = loveReminders[Math.floor(Math.random() * loveReminders.length)];
    reminderText.textContent = randomReminder;
    modal.classList.add('active');
}

function generatePoem() {
    const modal = document.getElementById('poemModal');
    const poemText = document.getElementById('poemText');
    
    const poems = [
        `Lyra, bintang di langit hatiku,
Cahayamu menerangi jiwaku,
Setiap detik bersamamu,
Adalah anugerah terindah bagiku.

Senyummu seperti fajar pagi,
Hangat dan penuh harapan,
Cintaku padamu takkan pernah pergi,
Selamanya dalam pelukan.`,

        `Di mata Lyra ku temukan surga,
Tempat dimana cinta bersemayam,
Setiap kata yang kau bisikkan,
Adalah melodi terindah yang pernah ada.

Bersamamu waktu terasa berhenti,
Dunia hanya milik kita berdua,
Lyra, kau adalah takdirku,
Cinta yang telah lama ku nantikan.`,

        `Lyra Arecha, permata hatiku,
Kau yang membuat hidup bermakna,
Setiap hari bersamamu,
Adalah halaman baru kisah cinta kita.

Tanganmu yang lembut,
Menggenggam erat tanganku,
Bersama kita hadapi dunia,
Dengan cinta yang tak terbatas.`
    ];
    
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];
    poemText.innerHTML = randomPoem.replace(/\n/g, '<br>');
    modal.classList.add('active');
}

function generateChallenge() {
    const modal = document.getElementById('challengeModal');
    const challengeText = document.getElementById('challengeText');
    const randomChallenge = loveChallenges[Math.floor(Math.random() * loveChallenges.length)];
    challengeText.textContent = randomChallenge;
    modal.classList.add('active');
}

function showMemoryMap() {
    const modal = document.getElementById('mapModal');
    const mapContainer = document.getElementById('memoryMap');
    
    // Simple map representation (in real implementation, you'd use Google Maps API)
    mapContainer.innerHTML = `
        <div style="text-align: center; padding: 50px;">
            <h3>🗺️ Peta Lokasi Kenangan</h3>
            <div style="margin: 20px 0;">
                ${memoryLocations.map(location => 
                    `<div style="margin: 10px 0; padding: 10px; background: #f0f0f0; border-radius: 8px;">
                        <strong>📍 ${location.name}</strong><br>
                        <small>${location.description}</small>
                    </div>`
                ).join('')}
            </div>
            <p><em>Gunakan Google Maps untuk melihat lokasi detail</em></p>
        </div>
    `;
    
    modal.classList.add('active');
}

function openTimeCapsule() {
    const modal = document.getElementById('timeCapsuleModal');
    loadTimeCapsules();
    modal.classList.add('active');
}

function saveTimeCapsule() {
    const message = document.getElementById('capsuleMessage').value;
    const date = document.getElementById('capsuleDate').value;
    
    if (message.trim() && date) {
        const capsule = {
            message: message.trim(),
            date: date,
            created: new Date().toLocaleDateString('id-ID')
        };
        
        const savedCapsules = JSON.parse(localStorage.getItem('timeCapsules') || '[]');
        savedCapsules.push(capsule);
        localStorage.setItem('timeCapsules', JSON.stringify(savedCapsules));
        
        document.getElementById('capsuleMessage').value = '';
        document.getElementById('capsuleDate').value = '';
        
        loadTimeCapsules();
        alert('Time Capsule berhasil disimpan! 📅');
    } else {
        alert('Mohon isi pesan dan tanggal!');
    }
}

function loadTimeCapsules() {
    const savedCapsules = JSON.parse(localStorage.getItem('timeCapsules') || '[]');
    const capsuleDisplay = document.getElementById('capsuleDisplay');
    
    if (savedCapsules.length > 0) {
        capsuleDisplay.innerHTML = `
            <h4>Time Capsules Tersimpan:</h4>
            ${savedCapsules.map(capsule => `
                <div style="margin: 15px 0; padding: 15px; background: #f9f9f9; border-radius: 10px; border-left: 4px solid var(--primary-color);">
                    <strong>Dibuka pada: ${new Date(capsule.date).toLocaleDateString('id-ID')}</strong><br>
                    <p style="margin: 10px 0;">${capsule.message}</p>
                    <small>Dibuat: ${capsule.created}</small>
                </div>
            `).join('')}
        `;
    } else {
        capsuleDisplay.innerHTML = '<p><em>Belum ada time capsule yang disimpan.</em></p>';
    }
}

function createGreetingCard() {
    const modal = document.getElementById('cardModal');
    modal.classList.add('active');
}

function updateCard() {
    const title = document.getElementById('cardTitleInput').value || 'Judul Kartu';
    const message = document.getElementById('cardMessageInput').value || 'Pesan kartu...';
    const from = document.getElementById('cardFromInput').value || 'Adna';
    
    document.getElementById('cardTitle').textContent = title;
    document.getElementById('cardMessage').textContent = message;
    document.getElementById('cardFrom').textContent = `Dari: ${from}`;
}

function downloadCard() {
    // Simple implementation - in real app, you'd generate an actual image
    const cardContent = `
${document.getElementById('cardTitle').textContent}

${document.getElementById('cardMessage').textContent}

${document.getElementById('cardFrom').textContent}
    `;
    
    const blob = new Blob([cardContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'greeting-card.txt';
    a.click();
    URL.revokeObjectURL(url);
}

// Modal Functions
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Initialize saved data on load
window.addEventListener('load', function() {
    loadLyraReply();
    loadTimeCapsules();
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // ESC to close modals
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            closeModal(activeModal.id);
        }
        
        const activeLightbox = document.querySelector('.lightbox.active');
        if (activeLightbox) {
            closeLightbox();
        }
    }
    
    // Arrow keys for lightbox navigation
    if (document.querySelector('.lightbox.active')) {
        if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    }
    
    // Space to play/pause music
    if (e.key === ' ' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        togglePlayPause();
    }
});

// Touch gestures for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (document.querySelector('.lightbox.active')) {
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextImage(); // Swipe left - next image
            } else {
                prevImage(); // Swipe right - previous image
            }
        }
    }
}

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced scroll handlers
window.addEventListener('scroll', debounce(updateProgressBar, 10));
window.addEventListener('scroll', debounce(handleScrollAnimations, 100));
window.addEventListener('scroll', debounce(handleParallax, 16));

// Console message
console.log('💕 Anniversary Website untuk Adna Fika Agestifanka & Lyra Arecha 💕');
console.log('Dibuat dengan cinta untuk merayakan 2 tahun perjalanan cinta yang indah!');
console.log('Selamat Anniversary! 🎉');

