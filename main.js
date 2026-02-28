// Dynamic year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Header scroll effect + hero animation pause via IntersectionObserver
const header = document.querySelector('header');
const hero = document.querySelector('.hero');
const heroHeight = hero.offsetHeight;

new IntersectionObserver(([entry]) => {
    header.classList.toggle('scrolled', !entry.isIntersecting);
    hero.classList.toggle('hero-paused', !entry.isIntersecting);
}, { rootMargin: '-50px 0px 0px 0px', threshold: 0 }).observe(hero);

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileOverlay = document.querySelector('.mobile-menu-overlay');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

function toggleMenu() {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    const isOpen = mobileMenu.classList.contains('active');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    menuToggle.setAttribute('aria-expanded', isOpen);
}

const mobileClose = document.querySelector('.mobile-menu-close');

menuToggle.addEventListener('click', toggleMenu);
mobileOverlay.addEventListener('click', toggleMenu);
mobileClose.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Language selector
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
    });
});

// Apply saved language on load
setLanguage(currentLang);

// Gallery Carousel
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
const thumbs = document.querySelectorAll('.carousel-thumb');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const counter = document.querySelector('.carousel-counter');
let currentSlide = 0;
let autoPlayInterval = null;
const autoPlayDelay = 7000; // 7 segundos entre slides

// Load image from data-src if not yet loaded
function loadSlideImg(slide) {
    const img = slide.querySelector('img[data-src]');
    if (img) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    }
}

function showSlide(index) {
    // Handle wrap-around
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    currentSlide = index;

    // Load current and adjacent slides
    loadSlideImg(slides[index]);
    loadSlideImg(slides[(index + 1) % slides.length]);
    loadSlideImg(slides[(index - 1 + slides.length) % slides.length]);

    // Update slides
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });

    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) dot.classList.add('active');
    });

    // Update thumbnails
    thumbs.forEach((thumb, i) => {
        thumb.classList.remove('active');
        if (i === index) thumb.classList.add('active');
    });

    // Update counter
    counter.textContent = `${index + 1} / ${slides.length}`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Event listeners
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoPlay();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoPlay();
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
        resetAutoPlay();
    });
});

thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
        showSlide(i);
        resetAutoPlay();
    });
});

// Keyboard navigation — only when gallery is visible
let galleryVisible = false;
const gallerySection = document.getElementById('gallery');
new IntersectionObserver(([entry]) => {
    galleryVisible = entry.isIntersecting;
}, { threshold: 0.1 }).observe(gallerySection);

document.addEventListener('keydown', (e) => {
    if (!galleryVisible) return;
    if (e.key === 'ArrowRight') {
        nextSlide();
        resetAutoPlay();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
        resetAutoPlay();
    }
});

// Auto-play
function startAutoPlay() {
    // Limpiar cualquier intervalo existente antes de crear uno nuevo
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }
    autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
}

function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }
}

function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}

// Start auto-play
startAutoPlay();

// Pause on hover
const carouselMain = document.querySelector('.carousel-main');
carouselMain.addEventListener('mouseenter', stopAutoPlay);
carouselMain.addEventListener('mouseleave', startAutoPlay);

// Touch/swipe support
let touchStartX = 0;
let touchEndX = 0;

carouselMain.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

carouselMain.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
        resetAutoPlay();
    }
}

// Room Carousels
document.querySelectorAll('.room-card').forEach(card => {
    const slides = card.querySelectorAll('.room-slide');
    const counter = card.querySelector('.room-counter');
    const prevBtn = card.querySelector('.room-carousel-btn.prev');
    const nextBtn = card.querySelector('.room-carousel-btn.next');
    let current = 0;

    function showRoomSlide(index) {
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        current = index;
        // Load current and adjacent slides
        loadSlideImg(slides[index]);
        loadSlideImg(slides[(index + 1) % slides.length]);
        loadSlideImg(slides[(index - 1 + slides.length) % slides.length]);
        slides.forEach(s => s.classList.remove('active'));
        slides[index].classList.add('active');
        counter.textContent = (index + 1) + ' / ' + slides.length;
    }

    showRoomSlide(0);

    prevBtn.addEventListener('click', () => showRoomSlide(current - 1));
    nextBtn.addEventListener('click', () => showRoomSlide(current + 1));

    // Touch/swipe support
    let touchStartX = 0;
    const carousel = card.querySelector('.room-carousel');
    carousel.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    carousel.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) showRoomSlide(current + (diff > 0 ? 1 : -1));
    }, { passive: true });
});

// Booking Button + "Consultar" room buttons - HotelPMS Redirect
(function() {
    const base = 'https://frame2.hotelpms.io/BookingFrameClient/hotel/60572BA1BBC7C28F300B73BE2F1211F3/e2d8af9e-82cf-4b24-ba19-fc7b08142f0e/book/rooms';

    function getBookingUrl() {
        const lang = currentLang === 'en' ? 'en-US' : 'es-ES';
        return `${base}?currency=ARS&language=${lang}`;
    }

    function updateUrls() {
        const url = getBookingUrl();
        const mainBtn = document.getElementById('btnReservar');
        if (mainBtn) mainBtn.href = url;
        document.querySelectorAll('.btn-ver[data-room]').forEach(btn => {
            btn.href = url;
            btn.target = '_blank';
            btn.rel = 'noopener noreferrer';
        });
    }

    updateUrls();
    document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', updateUrls));
})();

// (Datepicker eliminado — reemplazado por redirección directa a HotelPMS)
(function() {
    const overlay = document.getElementById('datepickerOverlay');
    const daysContainer = document.getElementById('dpDays');
    const monthYearLabel = document.getElementById('dpMonthYear');
    const prevBtn = document.getElementById('dpPrev');
    const nextBtn = document.getElementById('dpNext');

    function getMonths() {
        return t('dp.months').split(',');
    }

    let currentMonth, currentYear, activeInput, selectedDates = {};

    function openDatepicker(inputId) {
        activeInput = inputId;
        const today = new Date();
        const hiddenVal = document.getElementById(inputId + '-value').value;
        if (hiddenVal) {
            const d = new Date(hiddenVal + 'T00:00:00');
            currentMonth = d.getMonth();
            currentYear = d.getFullYear();
        } else {
            currentMonth = today.getMonth();
            currentYear = today.getFullYear();
        }
        renderCalendar();
        overlay.classList.add('active');
    }

    function closeDatepicker() {
        overlay.classList.remove('active');
        activeInput = null;
    }

    window.renderCalendar = renderCalendar;
    function renderCalendar() {
        monthYearLabel.textContent = getMonths()[currentMonth] + ' ' + currentYear;
        daysContainer.innerHTML = '';

        const firstDay = new Date(currentYear, currentMonth, 1);
        let startDay = firstDay.getDay() - 1;
        if (startDay < 0) startDay = 6;

        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const today = new Date();
        today.setHours(0,0,0,0);

        const selectedVal = activeInput ? document.getElementById(activeInput + '-value').value : '';

        for (let i = 0; i < startDay; i++) {
            const btn = document.createElement('button');
            btn.disabled = true;
            daysContainer.appendChild(btn);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const btn = document.createElement('button');
            btn.textContent = day;
            const dateObj = new Date(currentYear, currentMonth, day);
            const dateStr = formatISO(dateObj);

            if (dateObj < today) {
                btn.disabled = true;
            }

            if (dateObj.getTime() === today.getTime()) {
                btn.classList.add('today');
            }

            if (dateStr === selectedVal) {
                btn.classList.add('selected');
            }

            btn.addEventListener('click', function() {
                selectDate(dateStr, dateObj);
            });

            daysContainer.appendChild(btn);
        }
    }

    function formatISO(d) {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return y + '-' + m + '-' + day;
    }

    function formatDisplay(dateStr) {
        const d = new Date(dateStr + 'T00:00:00');
        return d.toLocaleDateString(t('wa.locale'), { day: '2-digit', month: '2-digit', year: 'numeric' });
    }

    function selectDate(dateStr, dateObj) {
        document.getElementById(activeInput).value = formatDisplay(dateStr);
        document.getElementById(activeInput + '-value').value = dateStr;

        // Si eligió check-in, abrir check-out automáticamente
        if (activeInput === 'checkin') {
            closeDatepicker();
            setTimeout(function() { openDatepicker('checkout'); }, 200);
        } else {
            closeDatepicker();
        }
    }

    prevBtn.addEventListener('click', function() {
        currentMonth--;
        if (currentMonth < 0) { currentMonth = 11; currentYear--; }
        renderCalendar();
    });

    nextBtn.addEventListener('click', function() {
        currentMonth++;
        if (currentMonth > 11) { currentMonth = 0; currentYear++; }
        renderCalendar();
    });

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) closeDatepicker();
    });

    document.getElementById('checkin').addEventListener('click', function() { this.classList.remove('input-error'); openDatepicker('checkin'); });
    document.getElementById('checkout').addEventListener('click', function() { this.classList.remove('input-error'); openDatepicker('checkout'); });
})();

// Accordion
document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const content = item.querySelector('.accordion-content');
        const isActive = item.classList.contains('active');

        // Close all
        document.querySelectorAll('.accordion-item').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.accordion-content').style.maxHeight = null;
            i.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
        });

        // Open clicked if it was closed
        if (!isActive) {
            item.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
            btn.setAttribute('aria-expanded', 'true');
        }
    });
});

// Reviews Carousel
const reviewCards = document.querySelectorAll('.review-card');
const reviewDots = document.querySelectorAll('.reviews-dot');
const reviewPrev = document.querySelector('.reviews-carousel-btn.prev');
const reviewNext = document.querySelector('.reviews-carousel-btn.next');
let currentReview = 0;
let reviewAutoPlay = setInterval(() => showReview(currentReview + 1), 6000);

function showReview(index) {
    if (index >= reviewCards.length) index = 0;
    if (index < 0) index = reviewCards.length - 1;
    currentReview = index;
    reviewCards.forEach(c => c.classList.remove('active'));
    reviewDots.forEach(d => d.classList.remove('active'));
    reviewCards[index].classList.add('active');
    reviewDots[index].classList.add('active');
}

function resetReviewAutoPlay() {
    clearInterval(reviewAutoPlay);
    reviewAutoPlay = setInterval(() => showReview(currentReview + 1), 6000);
}

reviewPrev.addEventListener('click', () => { showReview(currentReview - 1); resetReviewAutoPlay(); });
reviewNext.addEventListener('click', () => { showReview(currentReview + 1); resetReviewAutoPlay(); });
reviewDots.forEach(dot => {
    dot.addEventListener('click', () => { showReview(parseInt(dot.dataset.review)); resetReviewAutoPlay(); });
});

// Active section highlight in menu via IntersectionObserver
const sections = document.querySelectorAll('section[id]');
const menuLinks = document.querySelectorAll('.mobile-menu .nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            menuLinks.forEach(link => {
                link.classList.toggle('active-section', link.getAttribute('href') === '#' + id);
            });
        }
    });
}, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

sections.forEach(section => sectionObserver.observe(section));

// Bathroom Gallery Modal
const banosPhotos = [
    'image_webp/banos/Pasillo Banos.webp',
    'image_webp/banos/Entrada Bano Hombres.webp',
    'image_webp/banos/Entrada Banos Mujeres.webp',
    'image_webp/banos/Ducha Hombres.webp',
    'image_webp/banos/Ducha mujeres.webp',
    'image_webp/banos/Cortina Duchas.webp',
    'image_webp/banos/Cortina bano hombres.webp',
    'image_webp/banos/Espejo Bacha.webp',
    'image_webp/banos/Espejo bacha hombres.webp',
    'image_webp/banos/Espejo Bacha mujeres.webp',
    'image_webp/banos/Espejo bacha Mujeres 2.webp',
    'image_webp/banos/Caricaturas Mujeres.webp',
];

const banosModal = document.getElementById('banosModal');
const banosImg = document.getElementById('banosImg');
const banosCounter = document.getElementById('banosCounter');
let banosIndex = 0;

function showBanosPhoto(index) {
    banosIndex = (index + banosPhotos.length) % banosPhotos.length;
    banosImg.src = banosPhotos[banosIndex];
    banosImg.alt = 'Baños compartidos - foto ' + (banosIndex + 1) + ' de ' + banosPhotos.length;
    banosCounter.textContent = (banosIndex + 1) + ' / ' + banosPhotos.length;
}

function openBanosModal() {
    banosModal.classList.add('active');
    banosModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    showBanosPhoto(0);
}

function closeBanosModal() {
    banosModal.classList.remove('active');
    banosModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

document.querySelectorAll('.btn-banos').forEach(btn => {
    btn.addEventListener('click', openBanosModal);
});

document.getElementById('closeBanosModal').addEventListener('click', closeBanosModal);
document.querySelector('.banos-modal-backdrop').addEventListener('click', closeBanosModal);
document.getElementById('banosPrev').addEventListener('click', () => showBanosPhoto(banosIndex - 1));
document.getElementById('banosNext').addEventListener('click', () => showBanosPhoto(banosIndex + 1));

document.addEventListener('keydown', e => {
    if (!banosModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeBanosModal();
    if (e.key === 'ArrowLeft') showBanosPhoto(banosIndex - 1);
    if (e.key === 'ArrowRight') showBanosPhoto(banosIndex + 1);
});
