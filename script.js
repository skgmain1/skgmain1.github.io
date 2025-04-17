document.addEventListener('DOMContentLoaded', () => {

    // --- Translations Object (No changes needed here) ---
    const translations = {
        ru: {
            site_title: "EXPENSIVE.CC - Премиум Roblox Решения",
            nav_home: "Главная",
            nav_features: "Возможности",
            nav_products: "Продукты",
            hero_title: "EXPENSIVE для Roblox",
            hero_subtitle: "Фарми больше, фарми лучше, фарми качественнее. Доминируй в каждой игре с непревзойденной эффективностью.",
            hero_button: "Выбрать План",
            features_title: "Почему EXPENSIVE.CC?",
            feature_speed_title: "Невероятная Скорость",
            feature_speed_desc: "Оптимизированные скрипты для максимальной производительности без лагов.",
            feature_custom_title: "Полная Кастомизация",
            feature_custom_desc: "Настраивай интерфейс и функции под свой уникальный стиль игры.",
            feature_security_title: "Безопасность Превыше Всего",
            feature_security_desc: "Продвинутые методы обхода для минимизации рисков обнаружения.",
            feature_functions_title: "Обширный Функционал",
            feature_functions_desc: "Все необходимые инструменты для доминирования в любом режиме Roblox.",
            feature_updates_title: "Постоянные Обновления",
            feature_updates_desc: "Регулярные апдейты для поддержки актуальности и добавления новых фич.",
            feature_support_title: "Отзывчивая Поддержка",
            feature_support_desc: "Наша команда всегда готова помочь с любыми вопросами 24/7.",
            products_title: "Наши Продукты",
            price_month: "1 Месяц",
            price_lifetime: "Lifetime",
            payment_discord: "Приобретение через Discord",
            buy_button: "Купить", // Key for button text
            popular_badge: "Популярно",
            product_exclusive_title: "Exclusive Subscribe [One For All]",
            product_exclusive_desc: "Полный доступ ко всем нашим текущим и будущим продуктам по единой подписке. Идеальный выбор для тех, кто хочет максимум возможностей. Нажмите кнопку ниже, чтобы перейти в Discord для уточнения деталей и покупки.",
            product_aut_title: "Expensive Hub AUT [v2 Basic]",
            product_aut_desc: "Базовая версия популярного хаба для A Universal Time (AUT). Содержит основные функции для комфортной игры и фарма. Нажмите кнопку ниже, чтобы перейти в Discord для покупки.",
            product_farmv1_title: "Resources Farm v1 Script",
            product_farmv1_desc: "Надежный скрипт первого поколения для автоматического фарма ресурсов в поддерживаемых играх. Простой и эффективный. Нажмите кнопку ниже, чтобы перейти в Discord для покупки.",
            product_farmv2_title: "Resources & Skins Farm v2",
            product_farmv2_desc: "Продвинутый скрипт v2 для фарма не только ресурсов, но и редких скинов. Больше возможностей и гибких настроек. Нажмите кнопку ниже, чтобы перейти в Discord для покупки.",
            product_level_title: "Level Special Script",
            product_level_desc: "Специализированный скрипт, заточенный под быструю и безопасную прокачку уровня вашего персонажа. Нажмите кнопку ниже, чтобы перейти в Discord для покупки.",
            product_ghoul_title: "Ghoul://RE Script",
            product_ghoul_desc: "Мощный скрипт для доминирования в игре Ghoul://RE. Включает фарм, авто-квесты и PvP функции. Нажмите кнопку ниже, чтобы перейти в Discord для покупки.",
            product_bluelock_title: "Blue Lock:Rivals Script",
            product_bluelock_desc: "Получите преимущество в Blue Lock:Rivals с нашим скриптом, включающим аимбот, авто-фарм и другие полезные функции. Нажмите кнопку ниже, чтобы перейти в Discord для покупки.",
            product_jjk_title: "JJK Script",
            product_jjk_desc: "Скрипт для популярной игры по Jujutsu Kaisen. Авто-фарм проклятой энергии, предметов и многое другое. Нажмите кнопку ниже, чтобы перейти в Discord для покупки.",
            requirements: "Системные требования: Windows 10/11 x64. Требуется постоянное подключение к интернету.",
            purchase_info_discord: "Для покупки любого продукта, пожалуйста, перейдите в наш Discord сервер.",
            questions: "Возникли вопросы?",
            contact_support: "Свяжитесь с поддержкой в Discord!",
            check_terms: "Ознакомьтесь с",
            terms_link: "условиями использования",
            footer_rights: "Все права защищены.",
            scroll_down_aria: "Прокрутить вниз",
            burger_aria_label: "Переключить навигацию",
            modal_confirm_title: "Подтверждение покупки",
            modal_default_desc: "Пожалуйста, перейдите в наш Discord сервер для завершения покупки и получения инструкций.",
            modal_discord_button: "Присоединиться к Discord",
            modal_close_aria: "Закрыть окно",
            lang_ru_aria: "Переключить на Русский",
            lang_en_aria: "Switch to English",
            lang_es_aria: "Cambiar a Español",
        },
        en: {
            site_title: "EXPENSIVE.CC - Premium Roblox Solutions",
            nav_home: "Home",
            nav_features: "Features",
            nav_products: "Products",
            hero_title: "EXPENSIVE for Roblox",
            hero_subtitle: "Farm more, farm better, farm smarter. Dominate every game with unparalleled efficiency.", // Updated
            hero_button: "Choose Plan",
            features_title: "Why EXPENSIVE.CC?",
            feature_speed_title: "Incredible Speed",
            feature_speed_desc: "Optimized scripts for maximum performance without lag.",
            feature_custom_title: "Full Customization",
            feature_custom_desc: "Customize the interface and functions to your unique playstyle.",
            feature_security_title: "Security Above All",
            feature_security_desc: "Advanced bypass methods to minimize detection risks.",
            feature_functions_title: "Extensive Functionality",
            feature_functions_desc: "All the necessary tools to dominate any Roblox mode.",
            feature_updates_title: "Constant Updates",
            feature_updates_desc: "Regular updates for relevance and new feature additions.",
            feature_support_title: "Responsive Support",
            feature_support_desc: "Our team is always ready to help with any questions 24/7.",
            products_title: "Our Products",
            price_month: "1 Month",
            price_lifetime: "Lifetime",
            payment_discord: "Purchase via Discord",
            buy_button: "Buy", // Key for button text
            popular_badge: "Popular",
            product_exclusive_title: "Exclusive Subscribe [One For All]",
            product_exclusive_desc: "Full access to all our current and future products with a single subscription. Ideal for those who want maximum capabilities. Click the button below to go to Discord for details and purchase.",
            product_aut_title: "Expensive Hub AUT [v2 Basic]",
            product_aut_desc: "Basic version of the popular hub for A Universal Time (AUT). Contains essential features for comfortable gameplay and farming. Click the button below to go to Discord for purchase.",
            product_farmv1_title: "Resources Farm v1 Script",
            product_farmv1_desc: "Reliable first-generation script for automatic resource farming in supported games. Simple and effective. Click the button below to go to Discord for purchase.",
            product_farmv2_title: "Resources & Skins Farm v2",
            product_farmv2_desc: "Advanced v2 script for farming not only resources but also rare skins. More features and flexible settings. Click the button below to go to Discord for purchase.",
            product_level_title: "Level Special Script",
            product_level_desc: "A specialized script designed for fast and safe leveling of your character. Click the button below to go to Discord for purchase.",
            product_ghoul_title: "Ghoul://RE Script",
            product_ghoul_desc: "Powerful script for dominating the Ghoul://RE game. Includes farming, auto-quests, and PvP functions. Click the button below to go to Discord for purchase.",
            product_bluelock_title: "Blue Lock:Rivals Script",
            product_bluelock_desc: "Get an edge in Blue Lock:Rivals with our script featuring aimbot, auto-farm, and other useful functions. Click the button below to go to Discord for purchase.",
            product_jjk_title: "JJK Script",
            product_jjk_desc: "Script for the popular Jujutsu Kaisen game. Auto-farm cursed energy, items, and much more. Click the button below to go to Discord for purchase.",
            requirements: "System Requirements: Windows 10/11 x64. Requires a persistent internet connection.",
            purchase_info_discord: "To purchase any product, please proceed to our Discord server.",
            questions: "Have questions?",
            contact_support: "Contact support on Discord!",
            check_terms: "Review the",
            terms_link: "terms of use",
            footer_rights: "All rights reserved.",
            scroll_down_aria: "Scroll down",
            burger_aria_label: "Toggle navigation",
            modal_confirm_title: "Confirm Purchase",
            modal_default_desc: "Please proceed to our Discord server to complete the purchase and receive instructions.",
            modal_discord_button: "Join Discord",
            modal_close_aria: "Close window",
            lang_ru_aria: "Переключить на Русский",
            lang_en_aria: "Switch to English",
            lang_es_aria: "Cambiar a Español",
        },
        es: {
            site_title: "EXPENSIVE.CC - Soluciones Roblox Premium",
            nav_home: "Inicio",
            nav_features: "Características",
            nav_products: "Productos",
            hero_title: "EXPENSIVE para Roblox",
            hero_subtitle: "Farmea más, farmea mejor, farmea con calidad. Domina cada juego con una eficiencia inigualable.", // Updated
            hero_button: "Elegir Plan",
            features_title: "¿Por qué EXPENSIVE.CC?",
            feature_speed_title: "Velocidad Increíble",
            feature_speed_desc: "Scripts optimizados para máximo rendimiento sin lag.",
            feature_custom_title: "Personalización Total",
            feature_custom_desc: "Personaliza la interfaz y funciones a tu estilo de juego único.",
            feature_security_title: "Seguridad Ante Todo",
            feature_security_desc: "Métodos avanzados de evasión para minimizar riesgos de detección.",
            feature_functions_title: "Funcionalidad Amplia",
            feature_functions_desc: "Todas las herramientas necesarias para dominar cualquier modo de Roblox.",
            feature_updates_title: "Actualizaciones Constantes",
            feature_updates_desc: "Actualizaciones regulares para mantener relevancia y añadir nuevas funciones.",
            feature_support_title: "Soporte Receptivo",
            feature_support_desc: "Nuestro equipo siempre está listo para ayudar con cualquier pregunta 24/7.",
            products_title: "Nuestros Productos",
            price_month: "1 Mes",
            price_lifetime: "Permanente",
            payment_discord: "Compra vía Discord",
            buy_button: "Comprar", // Key for button text
            popular_badge: "Popular",
            product_exclusive_title: "Suscripción Exclusiva [Uno Para Todos]",
            product_exclusive_desc: "Acceso completo a todos nuestros productos actuales y futuros con una única suscripción. Ideal para quienes desean las máximas capacidades. Haz clic en el botón de abajo para ir a Discord para obtener detalles y comprar.",
            product_aut_title: "Expensive Hub AUT [v2 Básico]",
            product_aut_desc: "Versión básica del popular hub para A Universal Time (AUT). Contiene funciones esenciales para un juego y farmeo cómodos. Haz clic en el botón de abajo para ir a Discord y comprar.",
            product_farmv1_title: "Script Granja Recursos v1",
            product_farmv1_desc: "Script fiable de primera generación para el farmeo automático de recursos en juegos compatibles. Simple y efectivo. Haz clic en el botón de abajo para ir a Discord y comprar.",
            product_farmv2_title: "Granja Recursos y Skins v2",
            product_farmv2_desc: "Script avanzado v2 para farmear no solo recursos sino también skins raras. Más funciones y configuraciones flexibles. Haz clic en el botón de abajo para ir a Discord y comprar.",
            product_level_title: "Script Especial de Nivel",
            product_level_desc: "Un script especializado diseñado para subir de nivel a tu personaje de forma rápida y segura. Haz clic en el botón de abajo para ir a Discord y comprar.",
            product_ghoul_title: "Script Ghoul://RE",
            product_ghoul_desc: "Potente script para dominar el juego Ghoul://RE. Incluye farmeo, misiones automáticas y funciones PvP. Haz clic en el botón de abajo para ir a Discord y comprar.",
            product_bluelock_title: "Script Blue Lock:Rivals",
            product_bluelock_desc: "Obtén ventaja en Blue Lock:Rivals con nuestro script que incluye aimbot, auto-farmeo y otras funciones útiles. Haz clic en el botón de abajo para ir a Discord y comprar.",
            product_jjk_title: "Script JJK",
            product_jjk_desc: "Script para el popular juego de Jujutsu Kaisen. Auto-farmeo de energía maldita, objetos y mucho más. Haz clic en el botón de abajo para ir a Discord y comprar.",
            requirements: "Requisitos del sistema: Windows 10/11 x64. Requiere conexión a internet persistente.",
            purchase_info_discord: "Para comprar cualquier producto, por favor dirígete a nuestro servidor de Discord.",
            questions: "¿Tienes preguntas?",
            contact_support: "¡Contacta con soporte en Discord!",
            check_terms: "Revisa los",
            terms_link: "términos de uso",
            footer_rights: "Todos los derechos reservados.",
             scroll_down_aria: "Desplazarse hacia abajo",
             burger_aria_label: "Alternar navegación",
             modal_confirm_title: "Confirmar Compra",
             modal_default_desc: "Por favor, dirígete a nuestro servidor de Discord para completar la compra y recibir instrucciones.",
             modal_discord_button: "Unirse a Discord",
             modal_close_aria: "Cerrar ventana",
             lang_ru_aria: "Переключить на Русский",
             lang_en_aria: "Switch to English",
             lang_es_aria: "Cambiar a Español",
        }
    };

    // --- DOM Elements Cache (No changes needed) ---
    const Cache = {
        html: document.documentElement,
        body: document.body,
        header: document.querySelector('.header'),
        nav: {
            list: document.querySelector('.nav-list'),
            links: document.querySelectorAll('.nav-link[href^="#"]'),
            burger: document.querySelector('.burger-menu'),
        },
        lang: {
            switcher: document.querySelector('.lang-switcher'),
            buttons: document.querySelectorAll('.lang-switcher .lang-button'),
        },
        translatables: document.querySelectorAll('[data-translate-key]'),
        sections: document.querySelectorAll('main section[id]'),
        interactiveBg: document.querySelector('.interactive-mouse-glow'),
        modal: {
            overlay: document.getElementById('product-modal-overlay'),
            element: document.getElementById('product-modal'),
            closeBtn: document.getElementById('modal-close-button'),
            title: document.getElementById('modal-product-title'),
            description: document.getElementById('modal-product-description'),
            discordBtn: document.getElementById('discord-button'),
        },
        buyButtons: document.querySelectorAll('.buy-button'),
        termsLink: document.getElementById('terms-link'),
        tiltContainers: document.querySelectorAll('.card-tilt-container'),
        staggerElements: document.querySelectorAll('.stagger-letters'),
        scrollAnimElements: document.querySelectorAll('.animate-on-scroll'),
        loadAnimElements: document.querySelectorAll('.animate-on-load'),
    };

    // --- State (No changes needed) ---
    let state = {
        currentLang: 'ru',
        staggerObservers: [],
        scrollbarWidth: 0,
        rafMouseBgPending: false,
        rafScrollPending: false,
        rafTiltPending: {},
        mouseX: window.innerWidth / 2,
        mouseY: window.innerHeight / 2,
        targetMouseX: window.innerWidth / 2,
        targetMouseY: window.innerHeight / 2,
        lastModalTrigger: null,
        isNavOpen: false,
        isModalOpen: false,
        lastScrollY: window.pageYOffset,
    };

    // --- Utils (No changes needed) ---
    const getScrollbarWidth = () => {
        const outer = document.createElement('div');
        outer.style.cssText = 'visibility:hidden; width: 100px; overflow:scroll;';
        document.body.appendChild(outer);
        const width = outer.offsetWidth - outer.clientWidth;
        outer.remove();
        return width;
    };
    const lerp = (start, end, amount) => start * (1 - amount) + end * amount;

    // --- Core Logic ---

    // Stagger Animation Logic (No changes needed from previous version)
    const initStaggerAnimation = () => {
        state.staggerObservers.forEach(obs => obs.disconnect());
        state.staggerObservers = [];
        Cache.staggerElements.forEach(wrapper => {
            const key = wrapper.dataset.translateKey;
            const text = translations[state.currentLang]?.[key]
                         || translations.ru?.[key]
                         || wrapper.textContent
                         || '';
            if (!text) return;

            let html = '';
             if (key === 'hero_title' && text.includes('Roblox')) {
                 const parts = text.split('Roblox');
                 parts[0].trim().split('').forEach(char => html += char === ' ' ? ' ' : `<span class="char" style="--i: ${Math.random().toFixed(2)}">${char}</span>`);
                 html += ' <span class="highlight">';
                 'Roblox'.split('').forEach(char => html += `<span class="char" style="--i: ${Math.random().toFixed(2)}">${char}</span>`);
                 html += '</span>';
                 if (parts[1]) parts[1].trim().split('').forEach(char => html += char === ' ' ? ' ' : `<span class="char" style="--i: ${Math.random().toFixed(2)}">${char}</span>`);
             } else {
                text.split('').forEach(char => html += (char === ' ') ? ' ' : `<span class="char" style="--i: ${Math.random().toFixed(2)}">${char}</span>`);
             }
            wrapper.innerHTML = html;
            wrapper.classList.remove('visible');

            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !wrapper.classList.contains('visible')) {
                    wrapper.classList.add('visible');
                    observer.unobserve(wrapper);
                    const index = state.staggerObservers.indexOf(observer);
                    if (index > -1) state.staggerObservers.splice(index, 1);
                }
            }, { threshold: 0.1 });

            observer.observe(wrapper);
            state.staggerObservers.push(observer);
        });
    };

    // --- !!! REVISED setLanguage Function !!! ---
    const setLanguage = (lang) => {
        state.currentLang = translations[lang] ? lang : 'ru';
        Cache.html.lang = state.currentLang;

        // --- Update all translatable elements ---
        Cache.translatables.forEach(el => {
            const key = el.dataset.translateKey;
            const translation = translations[state.currentLang]?.[key] || translations.ru?.[key];

            if (!translation) return; // Skip if no translation

            // --- Handle different element types ---

            // 1. Aria-labels (always update if present)
            if (el.hasAttribute('aria-label')) {
                el.setAttribute('aria-label', translation);
            }

            // 2. Input placeholders
            if (el.tagName === 'INPUT' && 'placeholder' in el) {
                 el.placeholder = translation;
            }
            // 3. Elements with dedicated inner SPAN for text (e.g., nav links, Discord button)
            else if (el.matches('.nav-link') || el.matches('.btn-discord')) {
                const span = el.querySelector('span'); // Find the first span inside
                if (span) span.textContent = translation;
            }
            // 4. Product Titles (use the specific span with data-translate-key)
            else if (el.classList.contains('product-title')) {
                const textSpan = el.querySelector('span[data-translate-key]');
                if (textSpan) textSpan.textContent = translation;
            }
            // 5. Buttons (set textContent directly, e.g., Buy Buttons, Hero CTA)
            else if (el.matches('.buy-button') || el.matches('.btn-cta') || el.matches('.lang-button')) {
                 // Make sure it's not the language switcher button text itself, just aria was handled above
                if (!key.startsWith('lang_')) {
                    el.textContent = translation;
                     // If it's the lang button, restore its code (RU/EN/ES)
                    if (el.classList.contains('lang-button')) {
                       el.textContent = el.dataset.lang.toUpperCase();
                    }
                }
            }
             // 6. Simple text elements (paragraphs, feature descriptions, list items etc.)
             // Be careful with selectors here to avoid overwriting complex structures
             else if (el.matches('p, h3, h2, .popular-badge, .price-label, .price-value, .payment-methods, .info-link, .footer span, .purchase-info span, #modal-product-title, .logo')) {
                // Don't update if it's part of a complex structure handled above (like product title h3)
                // or if it contains other elements (basic check)
                 if (!el.closest('.product-title') && !el.querySelector('*') && el.textContent.trim() !== '') {
                     el.textContent = translation;
                 } else if (el.matches('#modal-product-title')) { // Always update modal title
                     el.textContent = translation;
                 } else if (el.matches('.logo')) { // Logo text can be updated
                     el.textContent = translation; // Since it uses background-clip, direct update is fine
                 } else if (el.matches('h3[data-translate-key^="feature_"]')) { // Feature card titles
                    el.textContent = translation;
                 } else if (el.matches('.popular-badge, .price-label, .price-value, .payment-methods, .footer span, .purchase-info span')) {
                     el.textContent = translation; // Safe to update these simple elements
                 }
             }

            // Exclude elements handled by stagger animation
            // Stagger elements update their content via initStaggerAnimation call below

        });

        // --- Update Language Switcher Button States ---
        Cache.lang.buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === state.currentLang);
             // Update aria-label (already done in the loop above, but ensure it's set)
             const ariaKey = `lang_${btn.dataset.lang}_aria`;
             const ariaLabel = translations[state.currentLang]?.[ariaKey] || translations.ru?.[ariaKey] || '';
             if (ariaLabel) btn.setAttribute('aria-label', ariaLabel);
             // Ensure button text remains RU/EN/ES
            btn.textContent = btn.dataset.lang.toUpperCase();
        });

        // --- Update Page Title ---
        document.title = translations[state.currentLang]?.site_title || translations.ru.site_title;

        // --- Save Preference ---
        try { localStorage.setItem('preferredLang', state.currentLang); } catch (e) {}

        // --- Re-initialize Stagger Animation for new text ---
        initStaggerAnimation();
        updateActiveLink(); // Update nav link highlight
    };


    // --- Scroll Lock Logic (No changes needed) ---
    const updateBodyScrollLock = () => {
        state.isModalOpen = Cache.modal.element?.classList.contains('active');
        state.isNavOpen = Cache.nav.list?.classList.contains('active');
        const shouldLock = state.isModalOpen || state.isNavOpen;

        if (shouldLock && !Cache.body.classList.contains('modal-open')) {
            Cache.body.style.paddingRight = `${state.scrollbarWidth}px`;
            Cache.body.classList.add('modal-open');
        } else if (!shouldLock && Cache.body.classList.contains('modal-open')) {
            Cache.body.classList.remove('modal-open');
            Cache.body.style.paddingRight = '';
        }
    };

    // --- Modal Actions (No changes needed) ---
    const openModal = (productNameKey, productDescKey) => {
        const title = translations[state.currentLang]?.[productNameKey] || translations.ru?.[productNameKey] || translations[state.currentLang]?.modal_confirm_title || translations.ru.modal_confirm_title;
        const desc = translations[state.currentLang]?.[productDescKey] || translations.ru?.[productDescKey] || translations[state.currentLang]?.modal_default_desc || translations.ru.modal_default_desc;

        Cache.modal.title.textContent = title;
        Cache.modal.description.textContent = desc;
        Cache.modal.overlay.classList.add('active');
        Cache.modal.element.classList.add('active');
        updateBodyScrollLock();
        requestAnimationFrame(() => {
            const focusTarget = Cache.modal.closeBtn || Cache.modal.discordBtn;
            focusTarget?.focus();
        });
    };
    const closeModal = () => {
        Cache.modal.overlay.classList.remove('active');
        Cache.modal.element.classList.remove('active');
        updateBodyScrollLock();
        if (state.lastModalTrigger) {
            state.lastModalTrigger.focus();
            state.lastModalTrigger = null;
        }
    };

    // --- Navigation Active Link (No changes needed) ---
    const updateActiveLink = () => {
        let currentSectionId = 'hero';
        const scrollY = window.pageYOffset;
        const headerHeight = Cache.header?.offsetHeight || 65;
        const offset = headerHeight + window.innerHeight * 0.4;

        Cache.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - offset) {
                currentSectionId = section.id;
            }
        });
        if ((window.innerHeight + scrollY) >= document.documentElement.scrollHeight - 70) {
             currentSectionId = Cache.sections[Cache.sections.length - 1]?.id || currentSectionId;
        }
        Cache.nav.links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentSectionId}`);
        });
    };

    // --- Scroll Handling (No changes needed) ---
    const handleScroll = () => {
        state.lastScrollY = window.pageYOffset;
        if (!state.rafScrollPending) {
            state.rafScrollPending = true;
            requestAnimationFrame(() => {
                const scrollThreshold = 10;
                Cache.header?.classList.toggle('scrolled', state.lastScrollY > scrollThreshold);
                updateActiveLink();
                state.rafScrollPending = false;
            });
        }
    };

    // --- Interactive Background Mouse Glow (No changes needed) ---
    const updateInteractiveBg = () => {
        if (!Cache.interactiveBg) return;
        state.mouseX = lerp(state.mouseX, state.targetMouseX, 0.045);
        state.mouseY = lerp(state.mouseY, state.targetMouseY, 0.045);
        Cache.interactiveBg.style.setProperty('--mouse-x', `${(state.mouseX / window.innerWidth) * 100}%`);
        Cache.interactiveBg.style.setProperty('--mouse-y', `${(state.mouseY / window.innerHeight) * 100}%`);
        state.rafMouseBgPending = false;
    };
    const handleMouseMove = (e) => {
        state.targetMouseX = e.clientX;
        state.targetMouseY = e.clientY;
        if (!state.rafMouseBgPending) {
            state.rafMouseBgPending = true;
            requestAnimationFrame(updateInteractiveBg);
        }
    };

    // --- Initialize Scroll Animations (No changes needed) ---
    const initScrollAnimations = () => {
        const observerOptions = { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.08 };
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!entry.target.classList.contains('stagger-letters')) {
                         entry.target.classList.add('visible');
                    }
                    observer.unobserve(entry.target);
                }
            });
        };
        const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);
        Cache.scrollAnimElements.forEach(el => {
             if (!el.classList.contains('stagger-letters')) {
                 scrollObserver.observe(el);
             }
        });
    };

    // --- Initialize Load Animations (No changes needed) ---
    const initLoadAnimations = () => {
        Cache.loadAnimElements.forEach(el => {
            if (!el.classList.contains('stagger-letters')) {
                const delayClass = Array.from(el.classList).find(c => c.startsWith('delay-'));
                const delayTime = delayClass ? parseInt(delayClass.split('-')[1]) * 80 : 0;
                setTimeout(() => el.classList.add('visible'), 50 + delayTime);
            }
        });
        initStaggerAnimation(); // Call initially too
    };

    // --- Navigation Link Click Handling (No changes needed) ---
    const handleNavLinkClick = function (e) {
        const targetId = this.getAttribute('href');
        if (targetId?.startsWith('#') && targetId.length > 1) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = Cache.header?.offsetHeight || 65;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });

                if (Cache.nav.list?.classList.contains('active')) toggleNav();
                 Cache.nav.links.forEach(link => link.classList.remove('active'));
                 this.classList.add('active');
            }
        }
    };

    // --- Mobile Navigation Toggle (No changes needed) ---
    const toggleNav = (e) => {
        e?.stopPropagation();
        const isActive = Cache.nav.burger.classList.toggle('active');
        Cache.nav.list.classList.toggle('active');
        Cache.nav.burger.setAttribute('aria-expanded', String(isActive));
        updateBodyScrollLock();
    };
    const closeNavOnClickOutside = (e) => {
        if (Cache.nav.list?.classList.contains('active') &&
            !Cache.nav.list.contains(e.target) &&
            !Cache.nav.burger?.contains(e.target)) {
             toggleNav();
        }
    };

    // --- Keyboard Event Handling (No changes needed) ---
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            if (state.isModalOpen) closeModal();
            else if (state.isNavOpen) toggleNav();
        }
        if (event.key === 'Tab' && state.isModalOpen) {
             const modalEl = Cache.modal.element;
             const focusable = Array.from(modalEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
                                  .filter(el => el.offsetParent !== null);
             if (!focusable.length) return event.preventDefault();
             const first = focusable[0];
             const last = focusable[focusable.length - 1];
             const current = document.activeElement;

             if (event.shiftKey && current === first) { last.focus(); event.preventDefault(); }
             else if (!event.shiftKey && current === last) { first.focus(); event.preventDefault(); }
             else if (!focusable.includes(current)) { first.focus(); event.preventDefault();}
        }
    };

    // --- Card Tilt Effect (No changes needed) ---
    const handleCardTilt = (card, event) => {
        if (state.rafTiltPending[card.uniqueId]) return;
        state.rafTiltPending[card.uniqueId] = true;

        requestAnimationFrame(() => {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const { width, height } = rect;

            const maxRotate = 4;
            const rotateX = ((y / height) - 0.5) * -maxRotate;
            const rotateY = ((x / width) - 0.5) * maxRotate;
            const shineX = (x / width) * 100;
            const shineY = (y / height) * 100;

            card.style.setProperty('--card-rotation-x', `${rotateX.toFixed(2)}deg`);
            card.style.setProperty('--card-rotation-y', `${rotateY.toFixed(2)}deg`);
            card.style.setProperty('--card-shine-opacity', '1');
            card.style.setProperty('--card-shine-x', `${shineX.toFixed(2)}%`);
            card.style.setProperty('--card-shine-y', `${shineY.toFixed(2)}%`);
            card.style.transition = 'none';

             state.rafTiltPending[card.uniqueId] = false;
        });
    };
    const resetCardTilt = (card) => {
         requestAnimationFrame(() => {
             card.style.transition = 'transform 0.5s var(--ease-out-cubic), --card-shine-opacity 0.5s ease, --card-rotation-x 0.5s var(--ease-out-cubic), --card-rotation-y 0.5s var(--ease-out-cubic)';
             card.style.setProperty('--card-rotation-x', '0deg');
             card.style.setProperty('--card-rotation-y', '0deg');
             card.style.setProperty('--card-shine-opacity', '0');
         });
         state.rafTiltPending[card.uniqueId] = false;
    };
    let cardTiltCounter = 0;
    const initCardTilt = () => {
        Cache.tiltContainers.forEach(container => {
            const cards = container.querySelectorAll('.card-with-tilt');
            cards.forEach(card => {
                card.uniqueId = `card-${cardTiltCounter++}`;
                card.addEventListener('mousemove', (e) => handleCardTilt(card, e), { passive: true });
                card.addEventListener('mouseleave', () => resetCardTilt(card));
                card.addEventListener('focusout', () => resetCardTilt(card));
                card.addEventListener('blur', () => resetCardTilt(card));
            });
        });
    };

    // --- Event Listeners Setup (No changes needed) ---
    const setupEventListeners = () => {
        Cache.lang.buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', () => {
            state.scrollbarWidth = getScrollbarWidth();
             Cache.html.style.setProperty('--scrollbar-width', `${state.scrollbarWidth}px`);
            updateActiveLink();
        }, { passive: true });
        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        Cache.nav.links.forEach(anchor => anchor.addEventListener('click', handleNavLinkClick));
        if (Cache.nav.burger) Cache.nav.burger.addEventListener('click', toggleNav);
        document.addEventListener('click', closeNavOnClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        Cache.buyButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const nameKey = event.currentTarget.dataset.productNameKey;
                const descKey = event.currentTarget.dataset.productKey;
                state.lastModalTrigger = event.currentTarget;
                openModal(nameKey, descKey);
            });
        });
        if (Cache.modal.closeBtn) Cache.modal.closeBtn.addEventListener('click', closeModal);
        if (Cache.modal.overlay) Cache.modal.overlay.addEventListener('click', closeModal);
        if (Cache.termsLink) {
            Cache.termsLink.addEventListener('click', (e) => {
                e.preventDefault();
                const alertText = { ru: "Условия использования (заглушка)", en: "Terms of Use (placeholder)", es: "Términos de Uso (marcador)" };
                alert(alertText[state.currentLang] || alertText.en);
            });
        }
    };

    // --- Initialization (No changes needed) ---
    const initialize = () => {
        state.scrollbarWidth = getScrollbarWidth();
        Cache.html.style.setProperty('--scrollbar-width', `${state.scrollbarWidth}px`);
        let preferredLang = 'ru';
        try {
            const storedLang = localStorage.getItem('preferredLang');
            const browserLang = navigator.language?.substring(0, 2);
            if (storedLang && translations[storedLang]) { preferredLang = storedLang; }
            else if (browserLang && translations[browserLang]) { preferredLang = browserLang; }
        } catch (e) { }
        setLanguage(preferredLang);
        setupEventListeners();
        initScrollAnimations();
        initLoadAnimations();
        initCardTilt();
        handleScroll();
        setTimeout(() => Cache.body.classList.remove('preload'), 80);
    };

    initialize(); // Start everything
});
