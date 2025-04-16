document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        ru: {
            site_title: "EXPENSIVE.CC - Премиум решения для Roblox",
            nav_home: "Главная",
            nav_features: "Возможности",
            nav_products: "Продукты",
            hero_title: "EXPENSIVE для Roblox",
            hero_subtitle: "Получи непревзойденное преимущество с нашими эксклюзивными возможностями.",
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
            buy_button: "Купить",
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
            hero_subtitle: "Gain an unparalleled advantage with our exclusive features.",
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
            buy_button: "Buy",
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
            site_title: "EXPENSIVE.CC - Soluciones Premium para Roblox",
            nav_home: "Inicio",
            nav_features: "Características",
            nav_products: "Productos",
            hero_title: "EXPENSIVE para Roblox",
            hero_subtitle: "Obtén una ventaja incomparable con nuestras características exclusivas.",
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
            payment_discord: "Compra a través de Discord",
            buy_button: "Comprar",
            popular_badge: "Popular",
            product_exclusive_title: "Suscripción Exclusiva [Uno Para Todos]",
            product_exclusive_desc: "Acceso completo a todos nuestros productos actuales y futuros con una única suscripción. Ideal para quienes desean las máximas capacidades. Haz clic en el botón de abajo para ir a Discord para obtener detalles y comprar.",
            product_aut_title: "Expensive Hub AUT [v2 Básico]",
            product_aut_desc: "Versión básica del popular hub para A Universal Time (AUT). Contiene funciones esenciales para un juego y farmeo cómodos. Haz clic en el botón de abajo para ir a Discord y comprar.",
            product_farmv1_title: "Script Granja de Recursos v1",
            product_farmv1_desc: "Script fiable de primera generación para el farmeo automático de recursos en juegos compatibles. Simple y efectivo. Haz clic en el botón de abajo para ir a Discord y comprar.",
            product_farmv2_title: "Granja de Recursos y Skins v2",
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

    const langButtons = document.querySelectorAll('.lang-switcher .lang-button');
    const translatableElements = document.querySelectorAll('[data-translate-key]');
    const htmlElement = document.documentElement;
    const header = document.querySelector('.header');
    const bodyElement = document.body;
    const burger = document.querySelector('.burger-menu');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const sections = document.querySelectorAll('main section[id]');
    const interactiveBg = document.querySelector('.interactive-gradient-bg');
    const heroSection = document.querySelector('.hero');
    const parallaxLayer = document.querySelector('.hero-background-parallax');
    const modalOverlay = document.getElementById('product-modal-overlay');
    const modal = document.getElementById('product-modal');
    const closeModalButton = document.getElementById('modal-close-button');
    const modalTitle = document.getElementById('modal-product-title');
    const modalDescription = document.getElementById('modal-product-description');
    const discordButton = document.getElementById('discord-button');
    const buyButtons = document.querySelectorAll('.buy-button');
    const termsLink = document.getElementById('terms-link');

    let currentLang = 'ru';
    let staggerObservers = [];
    let scrollbarWidth = 0;
    let rafPending = false;

    const getScrollbarWidth = () => {
        const outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll';
        outer.style.msOverflowStyle = 'scrollbar';
        document.body.appendChild(outer);
        const inner = document.createElement('div');
        outer.appendChild(inner);
        const width = outer.offsetWidth - inner.offsetWidth;
        outer.parentNode.removeChild(outer);
        return width;
    };

    const initStaggerAnimation = () => {
        staggerObservers.forEach(obs => obs.disconnect());
        staggerObservers = [];
        const staggerWrappers = document.querySelectorAll('.stagger-letters');

        staggerWrappers.forEach(wrapper => {
            const translateKey = wrapper.dataset.translateKey;
            const textToSplit = translations[currentLang]?.[translateKey]
                                || translations['ru']?.[translateKey]
                                || wrapper.textContent?.trim()
                                || '';

            if (!textToSplit || textToSplit.trim() === '') {
                 console.warn("Stagger wrapper has no text or key failed for:", translateKey);
                 wrapper.innerHTML = '';
                 return;
            }

            let finalHtml = '';
            if (translateKey === 'hero_title') {
                 const parts = textToSplit.split('Roblox');
                 parts[0].trim().split('').forEach(char => { finalHtml += char === ' ' ? ' ' : `<span class="char">${char}</span>`; });
                 finalHtml += ' <span class="highlight">';
                 'Roblox'.split('').forEach(char => { finalHtml += `<span class="char">${char}</span>`; });
                 finalHtml += '</span> ';
                 if (parts[1]) {
                    parts[1].trim().split('').forEach(char => { finalHtml += char === ' ' ? ' ' : `<span class="char">${char}</span>`; });
                 }
            } else {
                 textToSplit.split('').forEach(char => {
                    finalHtml += (char === ' ') ? ' ' : `<span class="char">${char}</span>`;
                 });
            }

            wrapper.innerHTML = finalHtml;
            wrapper.classList.remove('visible');

            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !wrapper.classList.contains('visible')) {
                    const chars = wrapper.querySelectorAll('.char');
                    chars.forEach((char, index) => {
                        char.style.transitionDelay = `${0.1 + index * 0.04}s`;
                    });
                    wrapper.classList.add('visible');
                    observer.unobserve(wrapper);
                }
            }, { threshold: 0.3 });

            observer.observe(wrapper);
            staggerObservers.push(observer);
        });
    }

    const setLanguage = (lang) => {
        if (!translations[lang]) {
            console.warn(`Language "${lang}" not found. Defaulting to 'ru'.`);
            lang = 'ru';
        }
        currentLang = lang;
        htmlElement.setAttribute('lang', lang);

        translatableElements.forEach(el => {
            const key = el.dataset.translateKey;
            const translation = translations[currentLang]?.[key] || translations['ru']?.[key];

            if (translation !== undefined) {
                 const targetElement = el.querySelector('span:not(.char)') || el;

                 if (el.tagName === 'INPUT' && el.placeholder !== undefined) {
                    el.placeholder = translation;
                } else if (el.hasAttribute('aria-label')) {
                    el.setAttribute('aria-label', translation);
                    if (!key.endsWith('_aria') && !el.classList.contains('stagger-letters') && el.tagName !== 'BUTTON') {
                       targetElement.textContent = translation;
                    }
                } else if (!el.classList.contains('stagger-letters')) {
                   targetElement.textContent = translation;
                }
            } else {
                console.warn(`Translation key "${key}" missing for "${currentLang}" and fallback 'ru'.`);
            }
        });

        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === currentLang);
            const ariaKey = `lang_${btn.dataset.lang}_aria`;
            const ariaTranslation = translations[currentLang]?.[ariaKey] || translations['ru']?.[ariaKey];
             if(ariaTranslation) btn.setAttribute('aria-label', ariaTranslation);
        });

        const siteTitleKey = 'site_title';
        document.title = translations[currentLang]?.[siteTitleKey] || translations['ru']?.[siteTitleKey] || 'EXPENSIVE.CC';

        try { localStorage.setItem('preferredLang', currentLang); } catch (e) { console.error("LocalStorage access error:", e); }

        initStaggerAnimation();
        updateActiveLink();
    };

    const updateBodyScrollLock = () => {
         const isNavActive = navList?.classList.contains('active');
         const isModalActive = modal?.classList.contains('active');

        if (isNavActive || isModalActive) {
             if (!bodyElement.classList.contains('modal-open')) {
                bodyElement.style.paddingRight = `${scrollbarWidth}px`;
                 bodyElement.classList.add('modal-open');
             }
         } else {
             if (bodyElement.classList.contains('modal-open')) {
                 bodyElement.classList.remove('modal-open');
                 bodyElement.style.paddingRight = '';
             }
        }
    };

    const openModal = (productNameKey, productDescKey) => {
         const defaultTitleKey = 'modal_confirm_title';
         const defaultDescKey = 'modal_default_desc';

         const productName = translations[currentLang]?.[productNameKey] || translations['ru']?.[productNameKey] || translations[currentLang]?.[defaultTitleKey] || translations['ru']?.[defaultTitleKey] || "Confirm Purchase";
         const productDesc = translations[currentLang]?.[productDescKey] || translations['ru']?.[productDescKey] || translations[currentLang]?.[defaultDescKey] || translations['ru']?.[defaultDescKey] || "Proceed to Discord for purchase.";

         modalTitle.textContent = productName;
         modalDescription.textContent = productDesc;

         modalOverlay.classList.add('active');
         modal.classList.add('active');
         updateBodyScrollLock();
         modal.focus();
    };

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        modal.classList.remove('active');
        updateBodyScrollLock();
    };

    const updateActiveLink = () => {
         if (!navLinks.length || !sections.length) return;

         let currentSectionId = '';
         const headerOffset = (header?.offsetHeight || 70) + 50;
         const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

         sections.forEach(section => {
             const sectionTop = section.offsetTop;
             const sectionHeight = section.offsetHeight;
             if (scrollPosition >= sectionTop - headerOffset && scrollPosition < sectionTop + sectionHeight - headerOffset) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (!currentSectionId && sections.length > 0) {
            if (scrollPosition < sections[0].offsetTop - headerOffset) {
                 currentSectionId = 'hero';
            } else if ((window.innerHeight + scrollPosition) >= document.documentElement.scrollHeight - 100) {
                 currentSectionId = sections[sections.length - 1].getAttribute('id');
            } else {
                 let closestSectionAbove = null;
                 for (let i = sections.length - 1; i >= 0; i--) {
                     if (sections[i].offsetTop - headerOffset <= scrollPosition) {
                         closestSectionAbove = sections[i].getAttribute('id');
                         break;
                     }
                 }
                 currentSectionId = closestSectionAbove || 'hero';
            }
         } else if (sections.length === 0 && scrollPosition < window.innerHeight) {
             currentSectionId = 'hero';
         }

         navLinks.forEach(link => {
             const linkHref = link.getAttribute('href');
             const targetHref = '#' + currentSectionId;
            let isLinkCurrentlyActive = false;

            if (linkHref === targetHref) {
                 isLinkCurrentlyActive = true;
            }
            else if (currentSectionId === 'hero' && (linkHref === '#hero' || linkHref === '/')) {
                isLinkCurrentlyActive = true;
             }

             link.classList.toggle('active', isLinkCurrentlyActive);
        });

    };

    langButtons.forEach(button => {
        button.addEventListener('click', () => { setLanguage(button.dataset.lang); });
    });

    if (header) {
        let isScrolled = false;
        const scrollThreshold = 50;
        const checkScroll = () => {
            const shouldBeScrolled = window.scrollY > scrollThreshold;
            if (shouldBeScrolled !== isScrolled) {
                header.classList.toggle('scrolled', shouldBeScrolled);
                isScrolled = shouldBeScrolled;
            }
        }
        window.addEventListener('scroll', checkScroll, { passive: true });
        checkScroll();
    }

    if (interactiveBg) {
        const handleMouseMove = (e) => {
            if (!rafPending) {
                rafPending = true;
                window.requestAnimationFrame(() => {
                    const xPercent = (e.clientX / window.innerWidth) * 100;
                    const yPercent = (e.clientY / window.innerHeight) * 100;
                    interactiveBg.style.setProperty('--mouse-x', `${xPercent}%`);
                    interactiveBg.style.setProperty('--mouse-y', `${yPercent}%`);
                    rafPending = false;
                });
            }
        };
        document.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

     if (heroSection && parallaxLayer) {
        const parallaxIntensity = 0.02;
         const handleHeroMouseMove = (e) => {
             if (!rafPending) {
                rafPending = true;
                window.requestAnimationFrame(() => {
                    const rect = heroSection.getBoundingClientRect();
                    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
                    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
                    const moveX = -x * (rect.width * parallaxIntensity);
                    const moveY = -y * (rect.height * parallaxIntensity);
                    parallaxLayer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
                    parallaxLayer.style.transition = 'transform 0.1s linear';
                    rafPending = false;
                });
             }
         };
         const handleHeroMouseLeave = () => {
             window.requestAnimationFrame(() => {
                 parallaxLayer.style.transition = 'transform 0.6s var(--ease-out-expo)';
                 parallaxLayer.style.transform = 'translate3d(0, 0, 0)';
             });
         };
         heroSection.addEventListener('mousemove', handleHeroMouseMove, { passive: true });
         heroSection.addEventListener('mouseleave', handleHeroMouseLeave);
     }

    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
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
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => {
        if (!el.classList.contains('stagger-letters')) {
             scrollObserver.observe(el);
         }
    });

    const loadElements = document.querySelectorAll('.animate-on-load');
    loadElements.forEach(el => {
        if (!el.classList.contains('stagger-letters')) {
             setTimeout(() => el.classList.add('visible'), 50);
        }
    });

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    window.addEventListener('load', updateActiveLink);

    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffsetScroll = header?.offsetHeight || 70;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffsetScroll;

                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });

                     if (burger?.classList.contains('active')) {
                         burger.classList.remove('active');
                         navList?.classList.remove('active');
                         burger.setAttribute('aria-expanded', 'false');
                        updateBodyScrollLock();
                     }
                }
             } else if (targetId === '/' || targetId === '#hero') {
                 window.scrollTo({ top: 0, behavior: 'smooth'});
                  if (burger?.classList.contains('active')) {
                      burger.classList.remove('active');
                      navList?.classList.remove('active');
                      burger.setAttribute('aria-expanded', 'false');
                     updateBodyScrollLock();
                  }
             }
        });
    });


    if (burger && navList) {
        burger.addEventListener('click', (e) => {
             e.stopPropagation();
             const isActiveToggle = burger.classList.toggle('active');
            navList.classList.toggle('active');
            burger.setAttribute('aria-expanded', String(isActiveToggle));
            updateBodyScrollLock();
        });

        document.addEventListener('click', (e) => {
             if (navList.classList.contains('active')
                && !navList.contains(e.target)
                && !burger.contains(e.target))
             {
                burger.classList.remove('active');
                navList.classList.remove('active');
                burger.setAttribute('aria-expanded', 'false');
                updateBodyScrollLock();
            }
        });
    }

    if (modalOverlay && modal && closeModalButton && modalTitle && modalDescription && discordButton && buyButtons.length) {
         buyButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                 const nameKey = event.currentTarget.dataset.productNameKey;
                 const descKey = event.currentTarget.dataset.productKey;
                 if (nameKey && descKey) {
                    openModal(nameKey, descKey);
                } else {
                     console.error("Missing data-product-name-key or data-product-key on buy button:", event.currentTarget);
                     openModal(null, null);
                 }
            });
        });

         closeModalButton.addEventListener('click', closeModal);
         modalOverlay.addEventListener('click', closeModal);
         document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
         modal.addEventListener('click', (event) => {
             event.stopPropagation();
         });
    } else {
        console.error("CRITICAL: One or more modal elements not found in the DOM. Modal functionality disabled.");
    }

     if (termsLink) {
        termsLink.addEventListener('click', (e) => {
            e.preventDefault();
            const alertText = { ru: "Условия использования (ссылка заглушка)", en: "Terms of Use (link placeholder)", es: "Términos de Uso (enlace marcador)" };
            alert(`${alertText[currentLang] || alertText['en']}`);
        });
     }

    scrollbarWidth = getScrollbarWidth();
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);

    let preferredLang = 'ru';
    try { preferredLang = localStorage.getItem('preferredLang') || 'ru'; } catch (e) { /* Ignore localStorage error */ }
    setLanguage(preferredLang);

    updateActiveLink();

});
