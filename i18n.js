// i18n - Translation system for I Keu Ken Hostel
const translations = {
    es: {
        // Nav
        "nav.lodge": "El Lodge",
        "nav.rooms": "Habitaciones",
        "nav.services": "Servicios",
        "nav.excursions": "Excursiones",
        "nav.promos": "Promos",
        "nav.gallery": "Galería",
        "nav.reviews": "Reseñas",
        "nav.location": "Ubicación",
        "nav.book": "Reservar",

        // Hero
        "hero.subtitle": "Comodidad, calidez y experiencias únicas en la Patagonia",
        "hero.bookNow": "Reservar Ahora",
        "hero.learnMore": "Conocer Más",

        // About
        "about.title": "Bienvenidos a I Keu Ken",
        "about.subtitle": "Descubrí la magia de la Patagonia en nuestro acogedor hostel, a minutos del Glaciar Perito Moreno",
        "about.location.title": "Ubicación Privilegiada",
        "about.location.text": "Estamos ubicados a solo minutos del centro de El Calafate, con fácil acceso a las principales atracciones turísticas de la región. El Glaciar Perito Moreno, el Lago Argentino y los mejores restaurantes están a tu alcance.",
        "about.service.title": "Atención Personalizada",
        "about.service.text": "Nuestro equipo te ayudará a planificar excursiones y vivir experiencias únicas en la Patagonia.",
        "about.vibe.title": "Ambiente Hogareño",
        "about.vibe.text": "Espacios cálidos y acogedores para que te sientas como en casa durante tu estadía.",

        // Rooms
        "rooms.title": "Nuestras Habitaciones",
        "rooms.subtitle": "Espacios diseñados para tu comodidad y descanso",
        "rooms.private.name": "Habitación Privada Doble",
        "rooms.private.desc": "Espacio íntimo y confortable, ideal para parejas o quienes buscan privacidad.",
        "rooms.triple.name": "Habitación Triple",
        "rooms.triple.desc": "Perfecta para amigos o familias pequeñas que viajan juntos.",
        "rooms.shared.name": "Habitación Compartida",
        "rooms.shared.desc": "La opción ideal para viajeros que buscan conocer gente nueva.",
        "rooms.family.name": "Suite Familiar",
        "rooms.family.desc": "Comodidad total con baño y cocina privada para una estadía independiente.",
        "rooms.feature.2pax": "2 personas",
        "rooms.feature.3pax": "3 personas",
        "rooms.feature.max4": "Máx. 4 personas",
        "rooms.feature.max3": "Máx. 3 personas",
        "rooms.feature.wifi": "WiFi",
        "rooms.feature.heating": "Calefacción",
        "rooms.feature.lockers": "Lockers",
        "rooms.feature.outlets": "Enchufes",
        "rooms.feature.shelves": "Repisas",
        "rooms.feature.bathroom": "Baño privado",
        "rooms.feature.sharedBath": "Baño compartido",
        "rooms.feature.kitchen": "Cocina privada",
        "btn.inquire": "Consultar",

        // Services
        "services.title": "Servicios & Amenities",
        "services.subtitle": "Todo lo que necesitás para una estadía perfecta",
        "svc.wifi.title": "WiFi Gratis",
        "svc.wifi.text": "Conexión de alta velocidad en todo el hostel",
        "svc.kitchen.title": "Cocina Equipada",
        "svc.kitchen.text": "Cocina compartida con todo lo necesario",
        "svc.breakfast.title": "Desayuno",
        "svc.breakfast.text": "Desayuno incluido con productos locales",
        "svc.heating.title": "Calefacción",
        "svc.heating.text": "Todas las áreas climatizadas",
        "svc.tours.title": "Excursiones",
        "svc.tours.text": "Organizamos tus tours y aventuras",
        "svc.parking.title": "Estacionamiento",
        "svc.parking.text": "Parking gratuito para huéspedes",
        "svc.luggage.title": "Guardaequipaje",
        "svc.luggage.text": "Guardá tu equipaje con seguridad",
        "svc.transfer.title": "Transfer",
        "svc.transfer.text": "Servicio de traslado al aeropuerto",

        // Excursions
        "exc.title": "Excursiones",
        "exc.subtitle": "Viví las mejores experiencias de la Patagonia desde nuestro hostel",
        "exc.1.name": "Pasarelas y Miradores",
        "exc.1.text": "Recorré las pasarelas frente al glaciar Perito Moreno y disfrutá de vistas panorámicas inigualables de sus gigantescos muros de hielo. Ideal para fotos y avistaje de rupturas, es una experiencia accesible para toda la familia.",
        "exc.2.name": "Safari Náutico + Pasarelas",
        "exc.2.text": "Optimizá tu tiempo con un tour que combina navegación y recorrido por las pasarelas, garantizando las mejores vistas del glaciar desde distintos ángulos en una sola salida. Ideal para quienes quieren una experiencia completa.",
        "exc.3.name": "Mini-Trekking sobre Hielo",
        "exc.3.text": "Viví la experiencia de caminar sobre el glaciar con guías expertos y equipo técnico; explorarás grietas y formaciones de hielo en una caminata segura y emocionante. Ideal para quienes buscan contacto directo con el hielo.",
        "exc.4.name": "Big Ice",
        "exc.4.text": "Para aventureros, el Big Ice ofrece una travesía más intensa y técnica sobre el glaciar, explorando sectores remotos de hielo azul con guías especializados. Jornada completa pensada para experiencias únicas y desafiantes.",
        "exc.5.name": "Laguna de los Tres (Fitz Roy)",
        "exc.5.text": "La clásica caminata hacia la Laguna de los Tres ofrece vistas emblemáticas del cerro Fitz Roy y una postal inolvidable en el mirador frente a la laguna. Excursión exigente pero extremadamente gratificante para amantes del trekking.",
        "exc.feature.transfer": "Traslado privado",
        "exc.feature.gear": "Incluye equipo",
        "exc.feature.guide": "Guía bilingüe",
        "exc.feature.lunch": "Incluye vianda",
        "exc.note.nopark": "No incluye entrada al parque",
        "exc.note.noguide": "No incluye guía",
        "exc.note.nolunch": "No incluye vianda",
        "exc.note.fitness": "Requiere buena condición física básica",
        "exc.note.advanced": "Nivel avanzado",
        "exc.note.demanding": "Nivel exigente, recomendable para senderistas",
        "exc.availability": "Consulta por Disponibilidad",
        "exc.transfers.title": "Traslados",
        "exc.transfers.text": "Consultá por traslados al Aeropuerto y a El Chaltén",

        // Promos
        "promo.title": "Promociones Especiales",
        "promo.subtitle": "Aprovechá nuestras ofertas exclusivas para tu estadía en El Calafate",
        "promo.1.name": "Residentes Nacionales",
        "promo.1.text": "20% de descuento para residentes nacionales durante todo el año. Pagando con transferencia o efectivo.",
        "promo.1.price": "Todo el año",
        "promo.2.name": "Reserva Anticipada",
        "promo.2.text": "Pagá 3 noches y quedate 4. Abonando con transferencia o tarjeta en garantía.",
        "promo.2.price": "1 noche gratis",

        // Gallery
        "gallery.title": "Galería",
        "gallery.subtitle": "Conocé nuestros espacios y la belleza de El Calafate",
        "gallery.1.title": "Paisaje Patagónico",
        "gallery.1.text": "La belleza de la Patagonia desde nuestras instalaciones",
        "gallery.2.title": "Sala de Estar",
        "gallery.2.text": "Espacios para compartir y conocer otros viajeros",
        "gallery.3.title": "Cocina",
        "gallery.3.text": "Cocina equipada para que te sientas como en casa",
        "gallery.4.title": "Espacios Comunes",
        "gallery.4.text": "Un espacio acogedor en el corazón de El Calafate",
        "gallery.5.title": "Nuestro Hostel",
        "gallery.5.text": "Comodidad y calidez para tu descanso",
        "gallery.6.title": "Experiencias Únicas",
        "gallery.6.text": "Momentos inolvidables en El Calafate",

        // Reviews
        "reviews.title": "Lo que dicen nuestros huéspedes",
        "reviews.subtitle": "Experiencias reales de viajeros que eligieron I Keu Ken",
        "reviews.excellent": "Excelente",
        "reviews.based": "Google Reviews",
        "reviews.based2": "Basado en 27 opiniones",
        "reviews.tag.view": "Vista increíble",
        "reviews.tag.quiet": "Tranquilo",
        "reviews.tag.price": "Buen precio",
        "reviews.rooms": "Habitaciones:",
        "reviews.service": "Servicio:",
        "reviews.location": "Ubicación:",

        // Location
        "location.title": "Nuestra Ubicación",
        "location.subtitle": "En el corazón de El Calafate, a pasos de la Avenida del Libertador y cerca de todos los servicios",
        "location.contact": "Contacto",
        "location.address": "Dirección",
        "location.phone": "Teléfono",
        "location.airport": "Aeropuerto",
        "location.airport.text": "A 20 min del Aeropuerto Internacional",
        "location.glacier": "Glaciar Perito Moreno",
        "location.glacier.text": "A 80 km del Parque Nacional Los Glaciares",
        "location.distances": "Distancias de interés",
        "location.park": "Parque Manuel Belgrano",
        "location.supermarket": "Hipermercado La Anónima",
        "location.downtown": "Centro de Calafate",
        "location.amphitheater": "Anfiteatro",
        "location.pharmacy": "Farmacia",
        "location.bakery": "Panadería",
        "location.info": "Centro de Informes",
        "location.health": "Centro de Salud",

        // Booking
        "booking.title": "¿Listo para tu aventura patagónica?",
        "booking.subtitle": "Reservá ahora y viví una experiencia inolvidable en El Calafate",
        "booking.checkin": "Check-in",
        "booking.checkout": "Check-out",
        "booking.guests": "Huéspedes",
        "booking.room": "Habitación",
        "booking.placeholder": "Seleccionar fecha",
        "booking.guest1": "1 Adulto",
        "booking.guest2": "2 Adultos",
        "booking.guest3": "3 Adultos",
        "booking.guest4": "4 Adultos",
        "booking.anyRoom": "Cualquier tipo",

        // Datepicker
        "dp.mon": "Lu", "dp.tue": "Ma", "dp.wed": "Mi", "dp.thu": "Ju", "dp.fri": "Vi", "dp.sat": "Sá", "dp.sun": "Do",
        "dp.months": "Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre",

        // WhatsApp message
        "wa.greeting": "¡Hola! Me gustaría hacer una consulta de disponibilidad:",
        "wa.guests": "Huéspedes",
        "wa.roomType": "Tipo de habitación",
        "wa.thanks": "¡Gracias!",
        "wa.locale": "es-AR",
        "wa.exc1": "Hola! Quiero reservar la excursión Pasarelas y Miradores",
        "wa.exc2": "Hola! Quiero reservar Safari Náutico + Pasarelas",
        "wa.exc3": "Hola! Quiero reservar el Mini-Trekking sobre hielo",
        "wa.exc4": "Hola! Quiero consultar disponibilidad Big Ice",
        "wa.exc5": "Hola! Quiero reservar la excursión a Laguna de los Tres (Fitz Roy)",
        "wa.transfers": "Hola! Quiero consultar por traslados",
        "wa.promo1": "Hola! Me interesa la promo para Residentes Nacionales (20% de descuento)",
        "wa.promo2": "Hola! Me interesa la promo 4x3 Reserva Anticipada",

        // Footer
        "footer.brand": "Tu hogar en la Patagonia. Comodidad, calidez y experiencias únicas en El Calafate.",
        "footer.nav": "Navegación",
        "footer.info": "Información",
        "footer.contact": "Contacto",
        "footer.promotions": "Promociones",
        "footer.terms": "Términos y condiciones",
        "footer.privacy": "Política de privacidad",
        "footer.rights": "Todos los derechos reservados.",
        "footer.madeBy": "Diseño y desarrollo por",

        // Accessibility
        "aria.openMenu": "Abrir menú",
        "aria.closeMenu": "Cerrar menú",
        "aria.prev": "Anterior",
        "aria.next": "Siguiente",
        "aria.newWindow": "(se abre en nueva ventana)",
        "aria.instagram": "Instagram (se abre en nueva ventana)",
        "aria.goToImage": "Ir a imagen",
        "aria.goToReview": "Ir a reseña",

        // Meta
        "meta.description": "Descubrí nuestro hostel en El Calafate. Comodidad, calidez y experiencias únicas en la Patagonia Argentina.",
        "meta.ogLocale": "es_AR"
    },
    en: {
        // Nav
        "nav.lodge": "The Lodge",
        "nav.rooms": "Rooms",
        "nav.services": "Services",
        "nav.excursions": "Excursions",
        "nav.promos": "Deals",
        "nav.gallery": "Gallery",
        "nav.reviews": "Reviews",
        "nav.location": "Location",
        "nav.book": "Book Now",

        // Hero
        "hero.subtitle": "Comfort, warmth and unique experiences in Patagonia",
        "hero.bookNow": "Book Now",
        "hero.learnMore": "Learn More",

        // About
        "about.title": "Welcome to I Keu Ken",
        "about.subtitle": "Discover the magic of Patagonia in our cozy hostel, just minutes from the Perito Moreno Glacier",
        "about.location.title": "Prime Location",
        "about.location.text": "We are located just minutes from downtown El Calafate, with easy access to the region's top tourist attractions. The Perito Moreno Glacier, Lago Argentino, and the best restaurants are all within reach.",
        "about.service.title": "Personalized Service",
        "about.service.text": "Our team will help you plan excursions and create unique experiences in Patagonia.",
        "about.vibe.title": "Homely Atmosphere",
        "about.vibe.text": "Warm and cozy spaces where you'll feel right at home during your stay.",

        // Rooms
        "rooms.title": "Our Rooms",
        "rooms.subtitle": "Spaces designed for your comfort and rest",
        "rooms.private.name": "Private Double Room",
        "rooms.private.desc": "An intimate and comfortable space, ideal for couples or those seeking privacy.",
        "rooms.triple.name": "Triple Room",
        "rooms.triple.desc": "Perfect for friends or small families traveling together.",
        "rooms.shared.name": "Shared Room",
        "rooms.shared.desc": "The ideal option for travelers looking to meet new people.",
        "rooms.family.name": "Family Suite",
        "rooms.family.desc": "Total comfort with private bathroom and kitchen for an independent stay.",
        "rooms.feature.2pax": "2 guests",
        "rooms.feature.3pax": "3 guests",
        "rooms.feature.max4": "Max. 4 guests",
        "rooms.feature.max3": "Max. 3 guests",
        "rooms.feature.wifi": "WiFi",
        "rooms.feature.heating": "Heating",
        "rooms.feature.lockers": "Lockers",
        "rooms.feature.outlets": "Power outlets",
        "rooms.feature.shelves": "Shelves",
        "rooms.feature.bathroom": "Private bathroom",
        "rooms.feature.sharedBath": "Shared bathroom",
        "rooms.feature.kitchen": "Private kitchen",
        "btn.inquire": "Inquire",

        // Services
        "services.title": "Services & Amenities",
        "services.subtitle": "Everything you need for a perfect stay",
        "svc.wifi.title": "Free WiFi",
        "svc.wifi.text": "High-speed connection throughout the hostel",
        "svc.kitchen.title": "Fully Equipped Kitchen",
        "svc.kitchen.text": "Shared kitchen with everything you need",
        "svc.breakfast.title": "Breakfast",
        "svc.breakfast.text": "Breakfast included with local products",
        "svc.heating.title": "Heating",
        "svc.heating.text": "All areas climate-controlled",
        "svc.tours.title": "Excursions",
        "svc.tours.text": "We organize your tours and adventures",
        "svc.parking.title": "Parking",
        "svc.parking.text": "Free parking for guests",
        "svc.luggage.title": "Luggage Storage",
        "svc.luggage.text": "Store your luggage safely",
        "svc.transfer.title": "Transfer",
        "svc.transfer.text": "Airport shuttle service",

        // Excursions
        "exc.title": "Excursions",
        "exc.subtitle": "Experience the best of Patagonia from our hostel",
        "exc.1.name": "Walkways & Viewpoints",
        "exc.1.text": "Walk along the boardwalks facing the Perito Moreno Glacier and enjoy unparalleled panoramic views of its massive ice walls. Ideal for photos and watching ice calving, it's an experience accessible for the whole family.",
        "exc.2.name": "Boat Safari + Walkways",
        "exc.2.text": "Make the most of your time with a tour combining sailing and a walk along the boardwalks, ensuring the best views of the glacier from different angles in a single outing. Ideal for those seeking a complete experience.",
        "exc.3.name": "Mini Ice Trekking",
        "exc.3.text": "Experience walking on the glacier with expert guides and technical equipment; you'll explore crevasses and ice formations in a safe and exciting trek. Ideal for those seeking direct contact with the ice.",
        "exc.4.name": "Big Ice",
        "exc.4.text": "For adventurers, Big Ice offers a more intense and technical journey across the glacier, exploring remote sections of blue ice with specialized guides. A full-day experience designed for unique and challenging adventures.",
        "exc.5.name": "Laguna de los Tres (Fitz Roy)",
        "exc.5.text": "The classic hike to Laguna de los Tres offers iconic views of Mount Fitz Roy and an unforgettable postcard-worthy vista at the lakeside viewpoint. A demanding but extremely rewarding excursion for trekking enthusiasts.",
        "exc.feature.transfer": "Private transfer",
        "exc.feature.gear": "Gear included",
        "exc.feature.guide": "Bilingual guide",
        "exc.feature.lunch": "Lunch box included",
        "exc.note.nopark": "Park entrance fee not included",
        "exc.note.noguide": "Guide not included",
        "exc.note.nolunch": "Lunch not included",
        "exc.note.fitness": "Basic physical fitness required",
        "exc.note.advanced": "Advanced level",
        "exc.note.demanding": "Demanding level, recommended for hikers",
        "exc.availability": "Check Availability",
        "exc.transfers.title": "Transfers",
        "exc.transfers.text": "Ask about transfers to the Airport and El Chaltén",

        // Promos
        "promo.title": "Special Offers",
        "promo.subtitle": "Take advantage of our exclusive deals for your stay in El Calafate",
        "promo.1.name": "National Residents",
        "promo.1.text": "20% discount for national residents all year round. Paying by bank transfer or cash.",
        "promo.1.price": "All year",
        "promo.2.name": "Early Booking",
        "promo.2.text": "Pay for 3 nights and stay 4. Paying by bank transfer or credit card as guarantee.",
        "promo.2.price": "1 free night",

        // Gallery
        "gallery.title": "Gallery",
        "gallery.subtitle": "Discover our spaces and the beauty of El Calafate",
        "gallery.1.title": "Patagonian Landscape",
        "gallery.1.text": "The beauty of Patagonia from our facilities",
        "gallery.2.title": "Living Room",
        "gallery.2.text": "Spaces to share and meet other travelers",
        "gallery.3.title": "Kitchen",
        "gallery.3.text": "Fully equipped kitchen to make you feel at home",
        "gallery.4.title": "Common Areas",
        "gallery.4.text": "A cozy space in the heart of El Calafate",
        "gallery.5.title": "Our Hostel",
        "gallery.5.text": "Comfort and warmth for your rest",
        "gallery.6.title": "Unique Experiences",
        "gallery.6.text": "Unforgettable moments in El Calafate",

        // Reviews
        "reviews.title": "What our guests say",
        "reviews.subtitle": "Real experiences from travelers who chose I Keu Ken",
        "reviews.excellent": "Excellent",
        "reviews.based": "Google Reviews",
        "reviews.based2": "Based on 27 reviews",
        "reviews.tag.view": "Amazing view",
        "reviews.tag.quiet": "Quiet",
        "reviews.tag.price": "Great value",
        "reviews.rooms": "Rooms:",
        "reviews.service": "Service:",
        "reviews.location": "Location:",

        // Location
        "location.title": "Our Location",
        "location.subtitle": "In the heart of El Calafate, steps from Avenida del Libertador and close to all services",
        "location.contact": "Contact",
        "location.address": "Address",
        "location.phone": "Phone",
        "location.airport": "Airport",
        "location.airport.text": "20 min from the International Airport",
        "location.glacier": "Perito Moreno Glacier",
        "location.glacier.text": "80 km from Los Glaciares National Park",
        "location.distances": "Nearby distances",
        "location.park": "Manuel Belgrano Park",
        "location.supermarket": "La Anónima Supermarket",
        "location.downtown": "Calafate Downtown",
        "location.amphitheater": "Amphitheater",
        "location.pharmacy": "Pharmacy",
        "location.bakery": "Bakery",
        "location.info": "Information Center",
        "location.health": "Health Center",

        // Booking
        "booking.title": "Ready for your Patagonian adventure?",
        "booking.subtitle": "Book now and enjoy an unforgettable experience in El Calafate",
        "booking.checkin": "Check-in",
        "booking.checkout": "Check-out",
        "booking.guests": "Guests",
        "booking.room": "Room",
        "booking.placeholder": "Select date",
        "booking.guest1": "1 Adult",
        "booking.guest2": "2 Adults",
        "booking.guest3": "3 Adults",
        "booking.guest4": "4 Adults",
        "booking.anyRoom": "Any type",

        // Datepicker
        "dp.mon": "Mo", "dp.tue": "Tu", "dp.wed": "We", "dp.thu": "Th", "dp.fri": "Fr", "dp.sat": "Sa", "dp.sun": "Su",
        "dp.months": "January,February,March,April,May,June,July,August,September,October,November,December",

        // WhatsApp message
        "wa.greeting": "Hi! I'd like to check availability:",
        "wa.guests": "Guests",
        "wa.roomType": "Room type",
        "wa.thanks": "Thank you!",
        "wa.locale": "en-US",
        "wa.exc1": "Hi! I'd like to book the Walkways & Viewpoints excursion",
        "wa.exc2": "Hi! I'd like to book the Boat Safari + Walkways excursion",
        "wa.exc3": "Hi! I'd like to book the Mini Ice Trekking",
        "wa.exc4": "Hi! I'd like to check availability for Big Ice",
        "wa.exc5": "Hi! I'd like to book the Laguna de los Tres (Fitz Roy) excursion",
        "wa.transfers": "Hi! I'd like to ask about transfers",
        "wa.promo1": "Hi! I'm interested in the National Residents promo (20% discount)",
        "wa.promo2": "Hi! I'm interested in the 4x3 Early Booking promo",

        // Footer
        "footer.brand": "Your home in Patagonia. Comfort, warmth and unique experiences in El Calafate.",
        "footer.nav": "Navigation",
        "footer.info": "Information",
        "footer.contact": "Contact",
        "footer.promotions": "Promotions",
        "footer.terms": "Terms & conditions",
        "footer.privacy": "Privacy policy",
        "footer.rights": "All rights reserved.",
        "footer.madeBy": "Design & development by",

        // Accessibility
        "aria.openMenu": "Open menu",
        "aria.closeMenu": "Close menu",
        "aria.prev": "Previous",
        "aria.next": "Next",
        "aria.newWindow": "(opens in new tab)",
        "aria.instagram": "Instagram (opens in new tab)",
        "aria.goToImage": "Go to image",
        "aria.goToReview": "Go to review",

        // Meta
        "meta.description": "Discover our hostel in El Calafate. Comfort, warmth and unique experiences in Patagonia, Argentina.",
        "meta.ogLocale": "en_US"
    }
};

// Current language
let currentLang = localStorage.getItem('lang') || 'es';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    const t = translations[lang];

    // Translate text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    // Translate HTML content (for elements with icons)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key]) {
            // Preserve leading icons
            const icons = el.querySelectorAll('i, svg');
            const srOnly = el.querySelector('.sr-only');
            el.childNodes.forEach(node => {
                if (node.nodeType === 3) node.textContent = '';
            });
            // Set text after icons
            if (icons.length > 0) {
                const lastIcon = icons[icons.length - 1];
                if (srOnly) {
                    lastIcon.after(' ' + t[key] + ' ');
                } else {
                    lastIcon.after(' ' + t[key]);
                }
            } else {
                el.textContent = t[key];
            }
        }
    });

    // Translate aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        if (t[key]) el.setAttribute('aria-label', t[key]);
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.setAttribute('placeholder', t[key]);
    });

    // Update datepicker weekdays
    const dpWeekdays = document.querySelector('.datepicker-weekdays');
    if (dpWeekdays) {
        const days = ['dp.mon','dp.tue','dp.wed','dp.thu','dp.fri','dp.sat','dp.sun'];
        const spans = dpWeekdays.querySelectorAll('span');
        spans.forEach((span, i) => {
            if (t[days[i]]) span.textContent = t[days[i]];
        });
    }

    // Update lang buttons active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update numbered aria-labels (dots)
    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.setAttribute('aria-label', t['aria.goToImage'] + ' ' + (i + 1));
    });
    document.querySelectorAll('.reviews-dot').forEach((dot, i) => {
        dot.setAttribute('aria-label', t['aria.goToReview'] + ' ' + (i + 1));
    });

    // Update meta description and og:locale
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && t['meta.description']) metaDesc.setAttribute('content', t['meta.description']);
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale && t['meta.ogLocale']) ogLocale.setAttribute('content', t['meta.ogLocale']);

    // Update WhatsApp message links
    document.querySelectorAll('[data-wa-msg]').forEach(el => {
        const key = el.getAttribute('data-wa-msg');
        if (t[key]) {
            el.href = 'https://wa.me/5492966266581?text=' + encodeURIComponent(t[key]);
        }
    });

    // Re-render datepicker if it exists
    if (typeof renderCalendar === 'function') renderCalendar();
}

// Expose translation getter for JS usage
function t(key) {
    return translations[currentLang][key] || key;
}
