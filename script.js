document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        ru: {
            site_title: "EXPENSIVE.CC - Премиум Roblox Решения",
            logo_text: "EXPENSIVE.CC",
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
            payment_info: "Приобретение через Discord / FunPay",
            buy_button: "Купить (Discord)",
            button_funpay: "Купить (FunPay)",
            popular_badge: "Популярно",
            product_exclusive_title: "Exclusive Subscribe [One For All]",
            product_exclusive_desc: "Полный доступ ко всем нашим текущим и будущим продуктам по единой подписке. Идеальный выбор для тех, кто хочет максимум возможностей.", // Discord desc
            product_aut_title: "Expensive Hub AUT [v2 Basic]",
            product_aut_desc: "Базовая версия популярного хаба для A Universal Time (AUT). Содержит основные функции для комфортной игры и фарма.", // Discord desc
            product_farmv1_title: "Resources Farm v1 Script",
            product_farmv1_desc: "Надежный скрипт первого поколения для автоматического фарма ресурсов в поддерживаемых играх. Простой и эффективный.", // Discord desc
            product_farmv2_title: "Resources & Skins Farm v2",
            product_farmv2_desc: "Продвинутый скрипт v2 для фарма не только ресурсов, но и редких скинов. Больше возможностей и гибких настроек.", // Discord desc
            product_level_title: "Level Special Script",
            product_level_desc: "Специализированный скрипт, заточенный под быструю и безопасную прокачку уровня вашего персонажа.", // Discord desc
            product_ghoul_title: "Ghoul://RE Script",
            product_ghoul_desc: "Мощный скрипт для доминирования в игре Ghoul://RE. Включает фарм, авто-квесты и PvP функции.", // Discord desc
            product_bluelock_title: "Blue Lock:Rivals Script",
            product_bluelock_desc: "Получите преимущество в Blue Lock:Rivals с нашим скриптом, включающим аимбот, авто-фарм и другие полезные функции.", // Discord desc
            product_jjk_title: "JJK Script",
            product_jjk_desc: "Скрипт для популярной игры по Jujutsu Kaisen. Авто-фарм проклятой энергии, предметов и многое другое.", // Discord desc
            requirements: "Системные требования: Windows 10/11 x64. Требуется постоянное подключение к интернету.",
            purchase_info_discord: "Для покупки любого продукта, пожалуйста, перейдите в наш Discord сервер или воспользуйтесь FunPay.",
            questions: "Возникли вопросы?",
            contact_support: "Свяжитесь с поддержкой в Discord!",
            check_terms: "Ознакомьтесь с",
            terms_link: "условиями использования",
            footer_rights: "Все права защищены.",
            scroll_down_aria: "Прокрутить вниз",
            burger_aria_label: "Переключить навигацию",
            modal_discord_title: "Приобретение через Discord: {productName}",
            modal_discord_desc: "Пожалуйста, перейдите в наш Discord сервер для завершения покупки и получения инструкций по продукту {productName}.",
            modal_discord_button: "Присоединиться к Discord",
            modal_funpay_title: "Приобретение через FunPay: {productName}",
            modal_funpay_desc: "Выберите нужный срок подписки для {productName} и перейдите по ссылке для оплаты через FunPay. После оплаты вы получите товар и инструкции.",
            modal_funpay_button_month: "Купить (1 Месяц)",
            modal_funpay_button_lifetime: "Купить (Lifetime)",
            modal_close_aria: "Закрыть окно",
            lang_ru_aria: "Переключить на Русский",
            lang_en_aria: "Switch to English",
            lang_es_aria: "Cambiar a Español",
        },
        en: {
            site_title: "EXPENSIVE.CC - Premium Roblox Solutions",
            logo_text: "EXPENSIVE.CC",
            nav_home: "Home",
            nav_features: "Features",
            nav_products: "Products",
            hero_title: "EXPENSIVE for Roblox",
            hero_subtitle: "Farm more, farm better, farm smarter. Dominate every game with unparalleled efficiency.",
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
            payment_info: "Purchase via Discord / FunPay",
            buy_button: "Buy (Discord)",
            button_funpay: "Buy (FunPay)",
            popular_badge: "Popular",
            product_exclusive_title: "Exclusive Subscribe [One For All]",
            product_exclusive_desc: "Full access to all our current and future products with a single subscription. Ideal for those who want maximum capabilities.",
            product_aut_title: "Expensive Hub AUT [v2 Basic]",
            product_aut_desc: "Basic version of the popular hub for A Universal Time (AUT). Contains essential features for comfortable gameplay and farming.",
            product_farmv1_title: "Resources Farm v1 Script",
            product_farmv1_desc: "Reliable first-generation script for automatic resource farming in supported games. Simple and effective.",
            product_farmv2_title: "Resources & Skins Farm v2",
            product_farmv2_desc: "Advanced v2 script for farming not only resources but also rare skins. More features and flexible settings.",
            product_level_title: "Level Special Script",
            product_level_desc: "A specialized script designed for fast and safe leveling of your character.",
            product_ghoul_title: "Ghoul://RE Script",
            product_ghoul_desc: "Powerful script for dominating the Ghoul://RE game. Includes farming, auto-quests, and PvP functions.",
            product_bluelock_title: "Blue Lock:Rivals Script",
            product_bluelock_desc: "Get an edge in Blue Lock:Rivals with our script featuring aimbot, auto-farm, and other useful functions.",
            product_jjk_title: "JJK Script",
            product_jjk_desc: "Script for the popular Jujutsu Kaisen game. Auto-farm cursed energy, items, and much more.",
            requirements: "System Requirements: Windows 10/11 x64. Requires a persistent internet connection.",
            purchase_info_discord: "To purchase any product, please proceed to our Discord server or use FunPay.",
            questions: "Have questions?",
            contact_support: "Contact support on Discord!",
            check_terms: "Review the",
            terms_link: "terms of use",
            footer_rights: "All rights reserved.",
            scroll_down_aria: "Scroll down",
            burger_aria_label: "Toggle navigation",
            modal_discord_title: "Purchase via Discord: {productName}",
            modal_discord_desc: "Please proceed to our Discord server to complete the purchase and receive instructions for {productName}.",
            modal_discord_button: "Join Discord",
            modal_funpay_title: "Purchase via FunPay: {productName}",
            modal_funpay_desc: "Select the desired subscription term for {productName} and follow the link to pay via FunPay. After payment, you will receive the product and instructions.",
            modal_funpay_button_month: "Buy (1 Month)",
            modal_funpay_button_lifetime: "Buy (Lifetime)",
            modal_close_aria: "Close window",
            lang_ru_aria: "Switch to Russian",
            lang_en_aria: "Switch to English",
            lang_es_aria: "Switch to Spanish",
        },
        es: {
            site_title: "EXPENSIVE.CC - Soluciones Roblox Premium",
            logo_text: "EXPENSIVE.CC",
             nav_home: "Inicio",
             nav_features: "Características",
             nav_products: "Productos",
             hero_title: "EXPENSIVE para Roblox",
             hero_subtitle: "Farmea más, farmea mejor, farmea con calidad. Domina cada juego con una eficiencia inigualable.",
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
             payment_info: "Compra vía Discord / FunPay",
             buy_button: "Comprar (Discord)",
             button_funpay: "Comprar (FunPay)",
             popular_badge: "Popular",
             product_exclusive_title: "Suscripción Exclusiva [Uno Para Todos]",
             product_exclusive_desc: "Acceso completo a todos nuestros productos actuales y futuros con una única suscripción. Ideal para quienes desean las máximas capacidades.",
             product_aut_title: "Expensive Hub AUT [v2 Básico]",
             product_aut_desc: "Versión básica del popular hub para A Universal Time (AUT). Contiene funciones esenciales para un juego y farmeo cómodos.",
             product_farmv1_title: "Script Granja Recursos v1",
             product_farmv1_desc: "Script fiable de primera generación para el farmeo automático de recursos en juegos compatibles. Simple y efectivo.",
             product_farmv2_title: "Granja Recursos y Skins v2",
             product_farmv2_desc: "Script avanzado v2 para farmear no solo recursos sino también skins raras. Más funciones y configuraciones flexibles.",
             product_level_title: "Script Especial de Nivel",
             product_level_desc: "Un script especializado diseñado para subir de nivel a tu personaje de forma rápida y segura.",
             product_ghoul_title: "Script Ghoul://RE",
             product_ghoul_desc: "Potente script para dominar el juego Ghoul://RE. Incluye farmeo, misiones automáticas y funciones PvP.",
             product_bluelock_title: "Script Blue Lock:Rivals",
             product_bluelock_desc: "Obtén ventaja en Blue Lock:Rivals con nuestro script que incluye aimbot, auto-farmeo y otras funciones útiles.",
             product_jjk_title: "Script JJK",
             product_jjk_desc: "Script para el popular juego de Jujutsu Kaisen. Auto-farmeo de energía maldita, objetos y mucho más.",
             requirements: "Requisitos del sistema: Windows 10/11 x64. Requiere conexión a internet persistente.",
             purchase_info_discord: "Para comprar cualquier producto, por favor dirígete a nuestro servidor de Discord o usa FunPay.",
             questions: "¿Tienes preguntas?",
             contact_support: "¡Contacta con soporte en Discord!",
             check_terms: "Revisa los",
             terms_link: "términos de uso",
             footer_rights: "Todos los derechos reservados.",
             scroll_down_aria: "Desplazarse hacia abajo",
             burger_aria_label: "Alternar navegación",
             modal_discord_title: "Compra vía Discord: {productName}",
             modal_discord_desc: "Por favor, dirígete a nuestro servidor de Discord para completar la compra y recibir instrucciones para {productName}.",
             modal_discord_button: "Unirse a Discord",
             modal_funpay_title: "Compra vía FunPay: {productName}",
             modal_funpay_desc: "Selecciona el plazo de suscripción deseado para {productName} y sigue el enlace para pagar a través de FunPay. Tras el pago, recibirás el producto y las instrucciones.",
             modal_funpay_button_month: "Comprar (1 Mes)",
             modal_funpay_button_lifetime: "Comprar (Lifetime)",
             modal_close_aria: "Cerrar ventana",
             lang_ru_aria: "Cambiar a Ruso",
             lang_en_aria: "Cambiar a Inglés",
             lang_es_aria: "Cambiar a Español",
        }
    };

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
            footer: document.getElementById('modal-product-footer'),
            borderGlow: document.querySelector('.modal-border-glow'),
        },
        productButtons: document.querySelectorAll('.buy-button, .funpay-button'),
        discordButtonTemplate: document.getElementById('discord-button-template'),
        termsLink: document.getElementById('terms-link'),
        tiltContainers: document.querySelectorAll('.card-tilt-container'),
        staggerElements: document.querySelectorAll('.stagger-letters'),
        scrollAnimElements: document.querySelectorAll('.animate-on-scroll'),
        loadAnimElements: document.querySelectorAll('.animate-on-load'),
    };

    let state = {
        currentLang: 'ru',
        staggerObservers: [],
        scrollbarWidth: 0,
        rafMouseBgPending: false,
        rafScrollPending: false,
        rafTiltPending: {},
        rafModalGlowPending: false,
        mouseX: window.innerWidth / 2,
        mouseY: window.innerHeight / 2,
        targetMouseX: window.innerWidth / 2,
        targetMouseY: window.innerHeight / 2,
        modalMouseX: 0,
        modalMouseY: 0,
        targetModalMouseX: 0,
        targetModalMouseY: 0,
        lastModalTrigger: null,
        isNavOpen: false,
        isModalOpen: false,
        lastScrollY: window.pageYOffset,
    };

    const getScrollbarWidth = () => {
        const outer = document.createElement('div');
        outer.style.cssText = 'visibility:hidden; width: 100px; overflow:scroll;';
        document.body.appendChild(outer);
        const width = outer.offsetWidth - outer.clientWidth;
        outer.remove();
        return width;
    };
    const lerp = (start, end, amount) => start * (1 - amount) + end * amount;

    const getTranslation = (key, lang = state.currentLang, replacements = {}) => {
         let text = translations[lang]?.[key] || translations.ru?.[key] || `[${key}]`;
         for (const placeholder in replacements) {
             text = text.replace(`{${placeholder}}`, replacements[placeholder]);
         }
         return text;
    }

    const initStaggerAnimation = () => {
        state.staggerObservers.forEach(obs => obs.disconnect());
        state.staggerObservers = [];
        Cache.staggerElements.forEach(wrapper => {
            const key = wrapper.dataset.translateKey;
            const text = getTranslation(key);
            if (!text || text.startsWith('[')) return;

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

    const setLanguage = (lang) => {
        state.currentLang = translations[lang] ? lang : 'ru';
        Cache.html.lang = state.currentLang;

        Cache.translatables.forEach(el => {
            const key = el.dataset.translateKey;
            if (!key || el.id === 'modal-close-button') return; // Skip if no key or it's the close button

            const translation = getTranslation(key);
            if (translation.startsWith('[')) return;

            // Specific updates
            if (el.hasAttribute('aria-label')) {
                 // For lang buttons, aria labels change with selected language
                 if (el.classList.contains('lang-button')) {
                    const ariaKey = `lang_${el.dataset.lang}_aria`;
                    el.setAttribute('aria-label', getTranslation(ariaKey));
                 } else {
                     el.setAttribute('aria-label', translation);
                 }
            }
            else if (el.matches('.nav-link > span, .btn-discord > span, .modal-footer .btn > span')) el.textContent = translation;
            else if (el.matches('.buy-button[data-modal-type=\'discord\']')) el.textContent = getTranslation('buy_button');
            else if (el.matches('.funpay-button[data-modal-type=\'funpay\']')) el.textContent = getTranslation('button_funpay');
            else if (el.matches('.product-title')) {
                const titleSpan = el.querySelector(`span[data-translate-key="${key}"]`);
                if (titleSpan) titleSpan.textContent = translation;
            }
            // General text content update, avoiding complex elements or those handled above
            else if (!el.matches('.stagger-letters') && !el.classList.contains('lang-button') && !el.closest('.product-buttons') && !el.closest('.modal-footer')) {
                if (el.matches('p, h3[data-translate-key], h2, .popular-badge, .price-label, .price-value, .payment-methods, .info-link, .footer span, .purchase-info span, .logo, .btn-cta')) {
                    // Simple text content update if no significant children or it's an allowed container
                    if (el.children.length === 0 || el.matches('.logo, .btn-cta, .popular-badge') || (el.children.length === 1 && el.children[0].tagName === 'SPAN' && !el.children[0].dataset.translateKey) ){
                         el.textContent = translation;
                    }
                }
            }
        });

        Cache.lang.buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === state.currentLang);
            const ariaLabel = getTranslation(`lang_${btn.dataset.lang}_aria`);
            btn.setAttribute('aria-label', ariaLabel); // Update aria label on language change
            btn.textContent = btn.dataset.lang.toUpperCase(); // Keep button text RU/EN/ES
        });

        document.title = getTranslation('site_title');
        const closeButtonAriaKey = "modal_close_aria";
        Cache.modal.closeBtn?.setAttribute('aria-label', getTranslation(closeButtonAriaKey)); // Update close button aria


        try { localStorage.setItem('preferredLang', state.currentLang); } catch (e) {}
        initStaggerAnimation();
        updateActiveLink();
    };


    const updateBodyScrollLock = () => {
        state.isModalOpen = Cache.modal.element.classList.contains('active');
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

    const displayModalContent = (type, nameKey, descKeyOrProduct, monthUrl = '', lifetimeUrl = '') => {
         const productName = getTranslation(nameKey);

         const titleKey = type === 'discord' ? 'modal_discord_title' : 'modal_funpay_title';
         Cache.modal.title.textContent = getTranslation(titleKey, state.currentLang, { productName });

         const descKeyResolved = type === 'discord' ? descKeyOrProduct : 'modal_funpay_desc';
         Cache.modal.description.textContent = getTranslation(descKeyResolved, state.currentLang, { productName });

         Cache.modal.footer.innerHTML = '';

         if (type === 'discord') {
             const discordButtonTemplate = Cache.discordButtonTemplate?.content.firstElementChild;
             if (discordButtonTemplate) {
                const discordButtonClone = discordButtonTemplate.cloneNode(true);
                const span = discordButtonClone.querySelector('span');
                 if (span) span.textContent = getTranslation('modal_discord_button');
                 Cache.modal.footer.appendChild(discordButtonClone);
            }

         } else if (type === 'funpay') {
            if (monthUrl) {
                 const monthButton = document.createElement('a');
                 monthButton.href = monthUrl;
                 monthButton.target = "_blank";
                 monthButton.rel = "noopener noreferrer";
                 monthButton.className = "btn btn-funpay";
                 monthButton.textContent = getTranslation('modal_funpay_button_month');
                 Cache.modal.footer.appendChild(monthButton);
             }
             if (lifetimeUrl) {
                 const lifetimeButton = document.createElement('a');
                 lifetimeButton.href = lifetimeUrl;
                 lifetimeButton.target = "_blank";
                 lifetimeButton.rel = "noopener noreferrer";
                 lifetimeButton.className = "btn btn-funpay";
                 lifetimeButton.textContent = getTranslation('modal_funpay_button_lifetime');
                 Cache.modal.footer.appendChild(lifetimeButton);
            }
         }
    };

     const handleBuyButtonClick = (event) => {
         const button = event.currentTarget;
         const modalType = button.dataset.modalType;
         const nameKey = button.dataset.productNameKey;
         const descKey = button.dataset.productKey; // For Discord description
         const monthUrl = button.dataset.funpayMonthUrl || '';
         const lifetimeUrl = button.dataset.funpayLifetimeUrl || '';

         state.lastModalTrigger = button;
         displayModalContent(modalType, nameKey, descKey, monthUrl, lifetimeUrl);

         Cache.modal.overlay.classList.add('active');
         Cache.modal.element.classList.add('active');
         updateBodyScrollLock();
         resetModalGlow();
         requestAnimationFrame(() => {
             Cache.modal.closeBtn?.focus();
         });
    };

    const closeModal = () => {
        Cache.modal.overlay.classList.remove('active');
        Cache.modal.element.classList.remove('active');
        updateBodyScrollLock();
        handleModalMouseLeave(); // Ensure glow fades out
        if (state.lastModalTrigger) {
            state.lastModalTrigger.focus();
            state.lastModalTrigger = null;
        }
    };

    const updateModalGlow = () => {
        if (!Cache.modal.borderGlow || !state.isModalOpen) {
             state.rafModalGlowPending = false;
            return;
        }
        state.modalMouseX = lerp(state.modalMouseX, state.targetModalMouseX, 0.08);
        state.modalMouseY = lerp(state.modalMouseY, state.targetModalMouseY, 0.08);

        Cache.modal.borderGlow.style.setProperty('--modal-glow-x', `${state.modalMouseX}%`);
        Cache.modal.borderGlow.style.setProperty('--modal-glow-y', `${state.modalMouseY}%`);

        if (state.isModalOpen && (Math.abs(state.modalMouseX - state.targetModalMouseX) > 0.1 || Math.abs(state.modalMouseY - state.targetModalMouseY) > 0.1)) {
            requestAnimationFrame(updateModalGlow);
         } else {
            state.rafModalGlowPending = false;
         }
    };

    const handleModalMouseMove = (e) => {
         if (!state.isModalOpen || !Cache.modal.element) return;
        const rect = Cache.modal.element.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        state.targetModalMouseX = Math.max(0, Math.min(100, x)); // Clamp values
        state.targetModalMouseY = Math.max(0, Math.min(100, y));

        Cache.modal.borderGlow?.style.setProperty('--modal-glow-opacity', '0.6');

        if (!state.rafModalGlowPending) {
             state.rafModalGlowPending = true;
            requestAnimationFrame(updateModalGlow);
        }
    };

    const handleModalMouseLeave = () => {
         if (Cache.modal.borderGlow) {
            Cache.modal.borderGlow.style.setProperty('--modal-glow-opacity', '0');
        }
        state.rafModalGlowPending = false;
    };

     const resetModalGlow = () => {
         if (Cache.modal.borderGlow) {
             Cache.modal.borderGlow.style.setProperty('--modal-glow-opacity', '0');
             Cache.modal.borderGlow.style.setProperty('--modal-glow-x', `50%`);
             Cache.modal.borderGlow.style.setProperty('--modal-glow-y', `50%`);
             state.targetModalMouseX = 50;
             state.targetModalMouseY = 50;
             state.modalMouseX = 50;
             state.modalMouseY = 50;
         }
         state.rafModalGlowPending = false;
     }

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
             if (Cache.sections.length > 0) {
                  currentSectionId = Cache.sections[Cache.sections.length - 1]?.id || currentSectionId;
             }
        }
        Cache.nav.links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentSectionId}`);
        });
    };

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

    const updateInteractiveBg = () => {
        if (!Cache.interactiveBg) return;
        state.mouseX = lerp(state.mouseX, state.targetMouseX, 0.045);
        state.mouseY = lerp(state.mouseY, state.targetMouseY, 0.045);
        Cache.interactiveBg.style.setProperty('--mouse-x', `${(state.mouseX / window.innerWidth) * 100}%`);
        Cache.interactiveBg.style.setProperty('--mouse-y', `${(state.mouseY / window.innerHeight) * 100}%`);

        if (Math.abs(state.mouseX - state.targetMouseX) > 0.1 || Math.abs(state.mouseY - state.targetMouseY) > 0.1) {
            requestAnimationFrame(updateInteractiveBg);
         } else {
            state.rafMouseBgPending = false;
         }
    };

    const handleMouseMove = (e) => {
        state.targetMouseX = e.clientX;
        state.targetMouseY = e.clientY;
        if (!state.rafMouseBgPending) {
            state.rafMouseBgPending = true;
            requestAnimationFrame(updateInteractiveBg);
        }
        if (state.isModalOpen) {
            handleModalMouseMove(e);
        }
    };

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

    const initLoadAnimations = () => {
        Cache.loadAnimElements.forEach(el => {
            if (!el.classList.contains('stagger-letters')) {
                const delayClass = Array.from(el.classList).find(c => c.startsWith('delay-'));
                const delayTime = delayClass ? parseInt(delayClass.split('-')[1]) * 80 : 0;
                setTimeout(() => el.classList.add('visible'), 50 + delayTime);
            }
        });
    };

    const handleNavLinkClick = function (e) {
        const targetId = this.getAttribute('href');
        if (targetId?.startsWith('#') && targetId.length > 1) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = Cache.header?.offsetHeight || 65;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });

                if (Cache.nav.list?.classList.contains('active')) {
                    toggleNav(e);
                }
                 Cache.nav.links.forEach(link => link.classList.remove('active'));
                 this.classList.add('active');
            }
        }
    };

    const toggleNav = (e) => {
        e?.stopPropagation();
        const burger = Cache.nav.burger;
        const navList = Cache.nav.list;
        if (!burger || !navList) return;

        const isActive = burger.classList.toggle('active');
        navList.classList.toggle('active');
        burger.setAttribute('aria-expanded', String(isActive));
        updateBodyScrollLock();
    };
    const closeNavOnClickOutside = (e) => {
        if (Cache.nav.list?.classList.contains('active') &&
            !Cache.nav.list.contains(e.target) &&
            !Cache.nav.burger?.contains(e.target)) {
             toggleNav(e);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            if (state.isModalOpen) closeModal();
            else if (state.isNavOpen) toggleNav(event);
        }
        if (event.key === 'Tab' && state.isModalOpen && Cache.modal.element) {
             const focusable = Array.from(Cache.modal.element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
                                  .filter(el => el.offsetParent !== null);
             if (!focusable.length) { event.preventDefault(); return; }

             const first = focusable[0];
             const last = focusable[focusable.length - 1];
             const current = document.activeElement;

             if (event.shiftKey && current === first) {
                last.focus();
                event.preventDefault();
             } else if (!event.shiftKey && current === last) {
                first.focus();
                event.preventDefault();
             } else if (!focusable.includes(current)) {
                  first.focus();
                  event.preventDefault();
             }
        }
    };

    const handleCardTilt = (card, event) => {
        if (!card || card.uniqueId === undefined || state.rafTiltPending[card.uniqueId]) return;
        state.rafTiltPending[card.uniqueId] = true;

        requestAnimationFrame(() => {
             if (!card.parentNode) {
                  state.rafTiltPending[card.uniqueId] = false;
                  return;
             }
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const { width, height } = rect;
             if (width <= 0 || height <= 0) {
                  state.rafTiltPending[card.uniqueId] = false;
                  return;
             }

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
         if (!card || card.uniqueId === undefined) return;
         card.style.setProperty('--card-shine-opacity', '0');
         state.rafTiltPending[card.uniqueId] = false;

         requestAnimationFrame(() => {
             if (!card.parentNode) return;
             card.style.transition = 'transform 0.5s var(--ease-out-cubic), --card-shine-opacity 0.5s ease, --card-rotation-x 0.5s var(--ease-out-cubic), --card-rotation-y 0.5s var(--ease-out-cubic)';
             card.style.setProperty('--card-rotation-x', '0deg');
             card.style.setProperty('--card-rotation-y', '0deg');
         });
    };
    let cardTiltCounter = 0;
    const initCardTilt = () => {
        Cache.tiltContainers.forEach(container => {
            const cards = container.querySelectorAll('.card-with-tilt');
            cards.forEach(card => {
                card.uniqueId = `card-${cardTiltCounter++}`;
                 if (!('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
                     card.addEventListener('mousemove', (e) => handleCardTilt(card, e), { passive: true });
                     card.addEventListener('mouseleave', () => resetCardTilt(card));
                 }
                 card.addEventListener('focus', () => resetCardTilt(card));
                 card.addEventListener('blur', () => resetCardTilt(card));
            });
        });
    };

    const setupEventListeners = () => {
        Cache.lang.buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', () => {
            state.scrollbarWidth = getScrollbarWidth();
             Cache.html.style.setProperty('--scrollbar-width', `${state.scrollbarWidth}px`);
            updateActiveLink();
        }, { passive: true });

        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        if (Cache.modal.element) {
            Cache.modal.element.addEventListener('mousemove', handleModalMouseMove, { passive: true });
            Cache.modal.element.addEventListener('mouseleave', handleModalMouseLeave);
        }

        Cache.nav.links.forEach(anchor => anchor.addEventListener('click', handleNavLinkClick));
        if (Cache.nav.burger) Cache.nav.burger.addEventListener('click', toggleNav);
        document.addEventListener('click', closeNavOnClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        Cache.productButtons.forEach(button => {
            button.addEventListener('click', handleBuyButtonClick);
        });

        if (Cache.modal.closeBtn) Cache.modal.closeBtn.addEventListener('click', closeModal);
        if (Cache.modal.overlay) Cache.modal.overlay.addEventListener('click', closeModal);
        if (Cache.termsLink) {
            Cache.termsLink.addEventListener('click', (e) => {
                e.preventDefault();
                 alert(getTranslation('terms_link') + ' (placeholder)');
            });
        }
    };

    const initialize = () => {
        Cache.body.classList.add('preload');
        state.scrollbarWidth = getScrollbarWidth();
        Cache.html.style.setProperty('--scrollbar-width', `${state.scrollbarWidth}px`);
        let preferredLang = 'ru';
        try {
            const storedLang = localStorage.getItem('preferredLang');
            const browserLang = navigator.language?.substring(0, 2);
            if (storedLang && translations[storedLang]) { preferredLang = storedLang; }
            else if (browserLang && translations[browserLang]) { preferredLang = browserLang; }
        } catch (e) {}

        setLanguage(preferredLang);
        setupEventListeners();
        initScrollAnimations();
        initLoadAnimations();
        initCardTilt();
        handleScroll();
        updateActiveLink();

        setTimeout(() => Cache.body.classList.remove('preload'), 100);
    };

    initialize();
});