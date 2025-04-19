// --- START OF COMPLETE script.js ---

document.addEventListener('DOMContentLoaded', () => {

    // --- !! IMPORTANT !! ---
    // ADD ALL NEW TRANSLATION KEYS HERE FOR EACH LANGUAGE
    const translations = {
        ru: {
            site_title: "EXPENSIVE.CC - Премиум Roblox Решения",
            logo_text: "EXPENSIVE.CC",
            nav_home: "Главная",
            nav_stats: "Статистика", // New
            nav_features: "Возможности",
            nav_script_hub: "Script Hub", // New
            nav_products: "Продукты",
            nav_faq: "FAQ", // New
            nav_status: "Статус", // New
            hero_title: "EXPENSIVE для Roblox",
            hero_subtitle: "Фарми больше, фарми лучше, фарми качественнее. Доминируй в каждой игре с непревзойденной эффективностью.",
            hero_button: "Выбрать План",
            stats_title: "Наша Статистика", // New
            stat_customers: "Активных пользователей", // Key for the label below the number
            stat_success_rate: "Success Rate", // Key for the label
            stat_total_hours: "Total Hours", // Key for the label
            stat_total_executed: "Total Executed", // Key for the label
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
            script_hub_title: "Возможности Script Hub", // New
            sh_feature1_title: "Обширная Библиотека Скриптов", // New
            sh_feature1_desc: "Доступ к нашей коллекции премиум скриптов для всех популярных игр Roblox.", // New
            sh_feature1_b1: "Высококачественные скрипты", // New
            sh_feature1_b2: "Регулярные обновления и добавления", // New
            sh_feature1_b3: "Скрипты, оцененные сообществом", // New
            sh_feature2_title: "Дружелюбный Интерфейс", // New
            sh_feature2_desc: "Приятный и чистый интерфейс, который делает использование скриптов легким.", // New
            sh_feature2_b1: "Простая и быстрая система ключей", // New
            sh_feature2_b2: "Исполнение скриптов в один клик", // New
            sh_feature2_b3: "Чистый, современный дизайн", // New
            sh_feature3_title: "Поддержка 24/7", // New
            sh_feature3_desc: "Наша выделенная команда всегда готова помочь вам с любыми проблемами.", // New
            sh_feature3_b1: "Поддержка в Discord сообществе", // New
            sh_feature3_b2: "Множество полезных сотрудников", // New
            sh_feature3_b3: "Полезные члены сообщества", // New
            products_title: "Наши Продукты",
            price_month: "1 Месяц",
            price_lifetime: "Lifetime",
            payment_info: "Приобретение через Discord / FunPay",
            buy_button: "Купить (Discord)",
            button_funpay: "Купить (FunPay)",
            popular_badge: "Популярно",
            product_exclusive_title: "Exclusive Subscribe [One For All]",
            product_exclusive_desc: "Полный доступ ко всем нашим текущим и будущим продуктам по единой подписке. Идеальный выбор для тех, кто хочет максимум возможностей.",
            product_aut_title: "Expensive Hub AUT [v2 Basic]",
            product_aut_desc: "Базовая версия популярного хаба для A Universal Time (AUT). Содержит основные функции для комфортной игры и фарма.",
            product_farmv1_title: "Resources Farm v1 Script",
            product_farmv1_desc: "Надежный скрипт первого поколения для автоматического фарма ресурсов в поддерживаемых играх. Простой и эффективный.",
            product_farmv2_title: "Resources & Skins Farm v2",
            product_farmv2_desc: "Продвинутый скрипт v2 для фарма не только ресурсов, но и редких скинов. Больше возможностей и гибких настроек.",
            product_level_title: "Level Special Script",
            product_level_desc: "Специализированный скрипт, заточенный под быструю и безопасную прокачку уровня вашего персонажа.",
            product_ghoul_title: "Ghoul://RE Script",
            product_ghoul_desc: "Мощный скрипт для доминирования в игре Ghoul://RE. Включает фарм, авто-квесты и PvP функции.",
            product_bluelock_title: "Blue Lock:Rivals Script",
            product_bluelock_desc: "Получите преимущество в Blue Lock:Rivals с нашим скриптом, включающим аимбот, авто-фарм и другие полезные функции.",
            product_jjk_title: "JJK Script",
            product_jjk_desc: "Скрипт для популярной игры по Jujutsu Kaisen. Авто-фарм проклятой энергии, предметов и многое другое.",
            faq_title: "Часто Задаваемые Вопросы", // New
            faq_q1_title: "Безопасно ли использовать Expensive.cc Hub?", // New
            faq_a1_content: "Мы уделяем приоритетное внимание безопасности. Наши скрипты разрабатываются с использованием передовых методов обхода, чтобы минимизировать риск обнаружения. Однако использование любых сторонних скриптов всегда несет некоторый риск.", // New
            faq_q2_title: "Меня забанят за использование скриптов от Expensive?", // New
            faq_a2_content: "Хотя мы прилагаем все усилия для обеспечения безопасности, ни один скрипт не может гарантировать 100% защиту от бана. Риск зависит от политики игры и от того, как вы используете скрипт. Используйте на свой страх и риск.", // New
            faq_q3_title: "Как часто обновляются скрипты?", // New
            faq_a3_content: "Мы стремимся обновлять наши скрипты как можно быстрее после обновлений игр Roblox, чтобы обеспечить их работоспособность и безопасность. Частота обновлений зависит от конкретной игры и продукта.", // New
            faq_q4_title: "Вы предлагаете возврат средств?", // New
            faq_a4_content: "Из-за цифровой природы наших продуктов мы обычно не предлагаем возврат средств. Пожалуйста, убедитесь, что продукт соответствует вашим потребностям перед покупкой. Исключения могут быть сделаны в особых случаях по усмотрению поддержки.", // New
            faq_q5_title: "Поддерживает ли Expensive бесплатные эксплойты?", // New
            faq_a5_content: "Наши скрипты предназначены для работы с широким спектром эксплойтов/исполнителей. Хотя они могут работать с некоторыми бесплатными вариантами, мы рекомендуем использовать надежные платные эксплойты для лучшей производительности и безопасности.", // New
            status_section_title: "Статус Систем", // New
            status_main_title: "Все Системы Работают", // Default status title
            status_main_title_operational: "Все Системы Работают", // New Status title
            status_main_title_degraded: "Некоторые Системы Имеют Перебои", // New Status title
            status_main_title_outage: "Критический Сбой Системы", // New Status title
            status_last_updated: "Последнее обновление:", // New
            status_update_time_placeholder: "Проверка статуса...", // New Placeholder for update time
            status_item_api: "Expensive API", // New
            status_item_website: "Expensive Website", // New
            status_item_services: "Expensive Services", // New
            status_item_script_hub: "Script Hub", // New
            status_operational: "Работает", // New Status Text
            status_degraded: "Перебои", // New Status Text
            status_outage: "Сбой", // New Status Text
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
            dot_nav_tooltip_prefix: "Перейти к: ", // New prefix for dot nav tooltips
        },
        en: {
            // --- FILL ALL ENGLISH TRANSLATIONS HERE ---
            site_title: "EXPENSIVE.CC - Premium Roblox Solutions",
            nav_home: "Home",
            nav_stats: "Statistics",
            nav_features: "Features",
            nav_script_hub: "Script Hub",
            nav_products: "Products",
            nav_faq: "FAQ",
            nav_status: "Status",
            stat_customers: "Active Users",
            stat_success_rate: "Success Rate",
            stat_total_hours: "Total Hours",
            stat_total_executed: "Total Executed",
            script_hub_title: "Script Hub Features",
            sh_feature1_title: "Extensive Script Library",
            sh_feature1_desc: "Access our collection of premium scripts for all popular Roblox games.",
            sh_feature1_b1: "High Quality Scripts",
            sh_feature1_b2: "Regular updates and additions",
            sh_feature1_b3: "Community-rated scripts",
            sh_feature2_title: "User-Friendly Interface",
            sh_feature2_desc: "Nice and clean interface that makes using scripts effortless.",
            sh_feature2_b1: "Easy and quick key system",
            sh_feature2_b2: "One-click script execution",
            sh_feature2_b3: "Clean, modern design",
            sh_feature3_title: "24/7 Support",
            sh_feature3_desc: "Our dedicated team is always ready to help with any issues.",
            sh_feature3_b1: "Discord community support",
            sh_feature3_b2: "Many helpful staff members",
            sh_feature3_b3: "Helpful community members",
            faq_title: "Frequently Asked Questions",
            faq_q1_title: "Is Expensive.cc Hub safe to use?",
            faq_a1_content: "We prioritize safety. Our scripts are developed with advanced bypass methods to minimize detection risk. However, using any third-party script always carries some risk.",
            faq_q2_title: "Will I get banned for using scripts from Expensive?",
            faq_a2_content: "While we strive for security, no script can guarantee 100% protection against bans. The risk depends on the game's policy and how you use the script. Use at your own risk.",
            faq_q3_title: "How often are scripts updated?",
            faq_a3_content: "We aim to update our scripts as quickly as possible after Roblox game updates to ensure they work and are safe. Update frequency depends on the specific game and product.",
            faq_q4_title: "Do you offer refunds?",
            faq_a4_content: "Due to the digital nature of our products, we generally do not offer refunds. Please ensure the product meets your needs before purchasing. Exceptions may be made in special cases at the support team's discretion.",
            faq_q5_title: "Does Expensive support free executors?",
            faq_a5_content: "Our scripts are designed to work with a wide range of executors. While they might work with some free options, we recommend using reliable paid executors for the best performance and security.",
            status_section_title: "System Status",
            status_main_title: "All Systems Operational",
            status_main_title_operational: "All Systems Operational",
            status_main_title_degraded: "Some Systems Experiencing Issues",
            status_main_title_outage: "Major System Outage",
            status_last_updated: "Last updated:",
            status_update_time_placeholder: "Checking status...",
            status_item_api: "Expensive API",
            status_item_website: "Expensive Website",
            status_item_services: "Expensive Services",
            status_item_script_hub: "Script Hub",
            status_operational: "Operational",
            status_degraded: "Degraded",
            status_outage: "Outage",
            dot_nav_tooltip_prefix: "Go to: ",
            // Copy & translate remaining keys from RU...
             logo_text: "EXPENSIVE.CC",
             stats_title: "Our Statistics",
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
            // --- FILL ALL SPANISH TRANSLATIONS HERE ---
            site_title: "EXPENSIVE.CC - Soluciones Roblox Premium",
            nav_home: "Inicio",
            nav_stats: "Estadísticas",
            nav_features: "Características",
            nav_script_hub: "Script Hub",
            nav_products: "Productos",
            nav_faq: "FAQ",
            nav_status: "Estado",
            stat_customers: "Usuarios Activos",
            stat_success_rate: "Tasa de Éxito",
            stat_total_hours: "Horas Totales",
            stat_total_executed: "Total Ejecutado",
            script_hub_title: "Características del Script Hub",
            sh_feature1_title: "Extensa Biblioteca de Scripts",
            sh_feature1_desc: "Accede a nuestra colección de scripts premium para todos los juegos populares de Roblox.",
            sh_feature1_b1: "Scripts de Alta Calidad",
            sh_feature1_b2: "Actualizaciones y adiciones regulares",
            sh_feature1_b3: "Scripts valorados por la comunidad",
            sh_feature2_title: "Interfaz Amigable",
            sh_feature2_desc: "Interfaz agradable y limpia que facilita el uso de scripts.",
            sh_feature2_b1: "Sistema de claves fácil y rápido",
            sh_feature2_b2: "Ejecución de scripts con un clic",
            sh_feature2_b3: "Diseño limpio y moderno",
            sh_feature3_title: "Soporte 24/7",
            sh_feature3_desc: "Nuestro equipo dedicado siempre está listo para ayudar con cualquier problema.",
            sh_feature3_b1: "Soporte en la comunidad de Discord",
            sh_feature3_b2: "Muchos miembros del personal útiles",
            sh_feature3_b3: "Miembros útiles de la comunidad",
            faq_title: "Preguntas Frecuentes",
            faq_q1_title: "¿Es seguro usar Expensive.cc Hub?",
            faq_a1_content: "Priorizamos la seguridad. Nuestros scripts se desarrollan con métodos avanzados de evasión para minimizar el riesgo de detección. Sin embargo, usar cualquier script de terceros siempre conlleva algún riesgo.",
            faq_q2_title: "¿Me banearán por usar scripts de Expensive?",
            faq_a2_content: "Aunque nos esforzamos por la seguridad, ningún script puede garantizar una protección del 100% contra baneos. El riesgo depende de la política del juego y de cómo uses el script. Úsalo bajo tu propio riesgo.",
            faq_q3_title: "¿Con qué frecuencia se actualizan los scripts?",
            faq_a3_content: "Nuestro objetivo es actualizar nuestros scripts lo más rápido posible después de las actualizaciones del juego de Roblox para garantizar que funcionen y sean seguros. La frecuencia de actualización depende del juego y producto específicos.",
            faq_q4_title: "¿Ofrecen reembolsos?",
            faq_a4_content: "Debido a la naturaleza digital de nuestros productos, generalmente no ofrecemos reembolsos. Asegúrate de que el producto satisfaga tus necesidades antes de comprar. Se pueden hacer excepciones en casos especiales a discreción del equipo de soporte.",
            faq_q5_title: "¿Expensive admite ejecutores gratuitos?",
            faq_a5_content: "Nuestros scripts están diseñados para funcionar con una amplia gama de ejecutores. Si bien pueden funcionar con algunas opciones gratuitas, recomendamos usar ejecutores de pago confiables para obtener el mejor rendimiento y seguridad.",
            status_section_title: "Estado de Sistemas",
            status_main_title: "Todos los Sistemas Operativos",
            status_main_title_operational: "Todos los Sistemas Operativos",
            status_main_title_degraded: "Algunos Sistemas Experimentando Problemas",
            status_main_title_outage: "Interrupción Grave del Sistema",
            status_last_updated: "Última actualización:",
            status_update_time_placeholder: "Verificando estado...",
            status_item_api: "API Expensive",
            status_item_website: "Sitio Web Expensive",
            status_item_services: "Servicios Expensive",
            status_item_script_hub: "Script Hub",
            status_operational: "Operacional",
            status_degraded: "Degradado",
            status_outage: "Caído",
            dot_nav_tooltip_prefix: "Ir a: ",
             // Copy & translate remaining keys from RU...
            logo_text: "EXPENSIVE.CC",
            stats_title: "Nuestras Estadísticas",
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

    // --- Cache DOM Elements ---
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
        dotNav: {
            container: document.getElementById('dot-nav'),
            tooltip: document.getElementById('dot-nav-tooltip'),
            dots: [],
        },
        translatables: document.querySelectorAll('[data-translate-key]'),
        sections: document.querySelectorAll('main > section[id]'),
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
        statNumbers: document.querySelectorAll('.stat-number[data-value]'),
        faqItems: document.querySelectorAll('.faq-item'),
        statusBox: {
            container: document.getElementById('status-box'),
            header: document.querySelector('#status-box .status-header'),
            body: document.getElementById('status-body'),
            lastUpdateEl: document.getElementById('last-update-time'),
            indicator: document.querySelector('#status-box .status-indicator'),
            title: document.querySelector('#status-box .status-title'),
            list: document.querySelector('#status-box .status-list'),
        }
    };

    // --- Application State ---
    let state = {
        currentLang: 'ru',
        staggerObservers: [],
        scrollbarWidth: 0,
        rafMouseBgPending: false,
        rafScrollPending: false,
        rafTiltPending: {},
        rafModalGlowPending: false,
        rafStatCounterPending: {},
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
        currentSectionId: 'hero',
        statCountersAnimated: false, // This flag might not be strictly needed anymore with IntersectionObserver
    };

    // --- Utility Functions ---
    const getScrollbarWidth = () => {
        const outer = document.createElement('div');
        outer.style.cssText = 'visibility:hidden; width: 100px; overflow:scroll;';
        document.body.appendChild(outer);
        const width = outer.offsetWidth - outer.clientWidth;
        outer.remove();
        return width;
    };
    const lerp = (start, end, amount) => start * (1 - amount) + end * amount;

    // --- Translation Function ---
    const getTranslation = (key, lang = state.currentLang, replacements = {}) => {
        let text = translations[lang]?.[key] || translations.en?.[key] || `[${key}]`; // Fallback to EN
        for (const placeholder in replacements) {
            text = text.replace(`{${placeholder}}`, replacements[placeholder]);
        }
        // Basic pluralization can be added here if needed
        if (replacements.count !== undefined) {
             text = text.replace('{count}', replacements.count.toLocaleString(lang));
        }
        return text;
    }

    // --- Stagger Animation ---
    const initStaggerAnimation = () => {
        state.staggerObservers.forEach(obs => obs.disconnect());
        state.staggerObservers = [];
        Cache.staggerElements.forEach(wrapper => {
            const key = wrapper.dataset.translateKey;
            const text = getTranslation(key);
            if (!text || text.startsWith('[') || wrapper.classList.contains('visible')) return;

            let html = '';
            const highlightClass = wrapper.querySelector('.highlight') ? 'highlight' : null;
            const highlightText = highlightClass ? wrapper.querySelector('.highlight').textContent : null;
            let charIndex = 0;

             if (highlightClass && highlightText && text.includes(highlightText)) {
                  const parts = text.split(highlightText);
                  parts[0].trim().split('').forEach(char => { html += char === ' ' ? ' ' : `<span class="char" style="--i: ${(charIndex++) * 0.05}">${char}</span>`});
                  html += ` <span class="${highlightClass}">`;
                  highlightText.split('').forEach(char => { html += `<span class="char" style="--i: ${(charIndex++) * 0.05}">${char}</span>` });
                  html += '</span>';
                  if (parts[1]) parts[1].trim().split('').forEach(char => { html += char === ' ' ? ' ' : `<span class="char" style="--i: ${(charIndex++) * 0.05}">${char}</span>`});
             } else {
                text.split('').forEach(char => { html += char === ' ' ? ' ' : `<span class="char" style="--i: ${(charIndex++) * 0.05}">${char}</span>`});
            }

            wrapper.innerHTML = html;
            wrapper.classList.remove('visible');

            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !wrapper.classList.contains('visible')) {
                    setTimeout(() => wrapper.classList.add('visible'), 50);
                    observer.unobserve(wrapper);
                    const index = state.staggerObservers.indexOf(observer);
                    if (index > -1) state.staggerObservers.splice(index, 1);
                }
            }, { threshold: 0.15 });
            observer.observe(wrapper);
            state.staggerObservers.push(observer);
        });
    };

    // --- Set Language ---
    const setLanguage = (lang) => {
        state.currentLang = translations[lang] ? lang : 'en';
        Cache.html.lang = state.currentLang;

        // Update all translatable elements
        Cache.translatables.forEach(el => {
            const key = el.dataset.translateKey;
            if (!key || el.id === 'modal-close-button') return;

            let translation = getTranslation(key); // Get base translation
            if (!translation || translation.startsWith('[')) return;

             // Handle specific element types needing direct text replacement or attribute updates
             if (el.hasAttribute('aria-label')) {
                 if (el.classList.contains('lang-button')) {
                    el.setAttribute('aria-label', getTranslation(`lang_${el.dataset.lang}_aria`));
                 } else {
                    el.setAttribute('aria-label', translation);
                 }
             } else if (el.tagName === 'TITLE') {
                 el.textContent = translation;
             } else if (el.matches('.nav-link > span') || el.matches('.btn-discord > span') || el.matches('.modal-footer .btn > span') || el.matches('.faq-question > span') || el.matches('.status-item-name') || el.matches('.status-item-value') || el.matches('.payment-methods') || el.matches('.popular-badge') || el.matches('.price-label')) {
                el.textContent = translation;
             } else if (el.matches('.buy-button')) {
                 el.textContent = getTranslation('buy_button');
             } else if (el.matches('.funpay-button')) {
                  el.textContent = getTranslation('button_funpay');
             } else if (el.matches('.product-title > span[data-translate-key]')) {
                 el.textContent = translation; // Update span inside product title
             } else if (el.matches('.stat-label')) {
                  el.textContent = translation; // Update stat labels
             } else if (el.matches('p') || el.matches('h1') || el.matches('h2') || el.matches('h3') || el.matches('li')) {
                  // Update complex elements only if they don't have nested translatables
                 if (!el.querySelector('[data-translate-key]')) {
                     // Use innerHTML cautiously, assuming simple text content replacement
                     el.innerHTML = translation; // Be careful with complex HTML in translations
                  }
             } else if (el.matches('.logo') || el.matches('.btn-cta')) {
                 // These usually just contain text
                 el.textContent = translation;
             }
            // Add more specific handlers if needed
        });

         // Update Lang buttons text/state
        Cache.lang.buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === state.currentLang);
            btn.setAttribute('aria-label', getTranslation(`lang_${btn.dataset.lang}_aria`));
            btn.textContent = btn.dataset.lang.toUpperCase();
        });

         // Update other elements needing refresh after translation change
         fetchAndUpdateStatus(); // Refresh status text
         generateDotNav(); // Regenerate dots for correct tooltips/labels
         initStaggerAnimation(); // Re-initialize stagger if text length/content changed significantly
         updateActiveLink(); // Ensure links match new potential IDs or labels if relevant

         try { localStorage.setItem('preferredLang', state.currentLang); } catch (e) {}
     };

    // --- Body Scroll Lock ---
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

    // --- Modal Handling ---
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
                 monthButton.href = monthUrl; monthButton.target = "_blank"; monthButton.rel = "noopener noreferrer"; monthButton.className = "btn btn-funpay";
                 monthButton.textContent = getTranslation('modal_funpay_button_month');
                 Cache.modal.footer.appendChild(monthButton);
             }
             if (lifetimeUrl) {
                 const lifetimeButton = document.createElement('a');
                 lifetimeButton.href = lifetimeUrl; lifetimeButton.target = "_blank"; lifetimeButton.rel = "noopener noreferrer"; lifetimeButton.className = "btn btn-funpay";
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
         resetModalGlow(); // Reset glow on open
         requestAnimationFrame(() => Cache.modal.closeBtn?.focus());
    };
    const closeModal = () => {
        Cache.modal.overlay.classList.remove('active');
        Cache.modal.element.classList.remove('active');
        updateBodyScrollLock();
        handleModalMouseLeave(); // Ensure glow fades out immediately
        if (state.lastModalTrigger) {
            try { // Add try-catch as element might not be focusable anymore
                state.lastModalTrigger.focus();
             } catch(e) {}
            state.lastModalTrigger = null;
        }
    };

    // --- Modal Glow Effect ---
    const updateModalGlow = () => {
        if (!Cache.modal.borderGlow || !state.isModalOpen) { state.rafModalGlowPending = false; return; }
        state.modalMouseX = lerp(state.modalMouseX, state.targetModalMouseX, 0.08);
        state.modalMouseY = lerp(state.modalMouseY, state.targetModalMouseY, 0.08);
        Cache.modal.borderGlow.style.setProperty('--modal-glow-x', `${state.modalMouseX}%`);
        Cache.modal.borderGlow.style.setProperty('--modal-glow-y', `${state.modalMouseY}%`);
        if (state.isModalOpen && (Math.abs(state.modalMouseX - state.targetModalMouseX) > 0.1 || Math.abs(state.modalMouseY - state.targetModalMouseY) > 0.1)) {
            requestAnimationFrame(updateModalGlow);
        } else { state.rafModalGlowPending = false; }
    };
    const handleModalMouseMove = (e) => {
         if (!state.isModalOpen || !Cache.modal.element) return;
         const rect = Cache.modal.element.getBoundingClientRect();
         const x = ((e.clientX - rect.left) / rect.width) * 100;
         const y = ((e.clientY - rect.top) / rect.height) * 100;
         state.targetModalMouseX = Math.max(0, Math.min(100, x));
         state.targetModalMouseY = Math.max(0, Math.min(100, y));
         Cache.modal.borderGlow?.style.setProperty('--modal-glow-opacity', '0.6');
         if (!state.rafModalGlowPending) { state.rafModalGlowPending = true; requestAnimationFrame(updateModalGlow); }
    };
    const resetModalGlow = () => {
         if (Cache.modal.borderGlow) {
             Cache.modal.borderGlow.style.transition = 'none';
             Cache.modal.borderGlow.style.setProperty('--modal-glow-opacity', '0');
             Cache.modal.borderGlow.style.setProperty('--modal-glow-x', `50%`);
             Cache.modal.borderGlow.style.setProperty('--modal-glow-y', `50%`);
             // Force reflow might be needed if instant reset fails: Cache.modal.borderGlow.offsetHeight;
             Cache.modal.borderGlow.style.transition = ''; // Re-enable
         }
         state.targetModalMouseX = 50; state.targetModalMouseY = 50; state.modalMouseX = 50; state.modalMouseY = 50;
         state.rafModalGlowPending = false;
    };
    const handleModalMouseLeave = () => {
         if (Cache.modal.borderGlow) { Cache.modal.borderGlow.style.setProperty('--modal-glow-opacity', '0'); }
         state.rafModalGlowPending = false;
    };

    // --- Section Navigation & Active Link Highlighting ---
    const updateActiveLink = () => {
        const scrollY = window.pageYOffset;
        const headerHeight = Cache.header?.offsetHeight || 65;
        const offset = headerHeight + window.innerHeight * 0.35;
        let newSectionId = state.currentSectionId;

        Cache.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop - offset && scrollY < sectionTop + sectionHeight - offset) {
                 newSectionId = section.id;
            }
        });
        if ((window.innerHeight + scrollY) >= document.documentElement.scrollHeight - 80) {
             if (Cache.sections.length > 0) newSectionId = Cache.sections[Cache.sections.length - 1]?.id || newSectionId;
        }
        if (scrollY < headerHeight + 50) newSectionId = 'hero'; // Be more robust for top section

        if (newSectionId !== state.currentSectionId) {
            state.currentSectionId = newSectionId;
            // Update header nav links
            Cache.nav.links.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${state.currentSectionId}`);
            });
            // Update dot nav links
            Cache.dotNav.dots.forEach(dot => {
                dot.classList.toggle('active', dot.dataset.targetId === state.currentSectionId);
            });
        }
    };

    // --- Scroll Handling ---
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

    // --- Interactive Background ---
    const updateInteractiveBg = () => {
        if (!Cache.interactiveBg) return;
        state.mouseX = lerp(state.mouseX, state.targetMouseX, 0.045);
        state.mouseY = lerp(state.mouseY, state.targetMouseY, 0.045);
        Cache.interactiveBg.style.setProperty('--mouse-x', `${(state.mouseX / window.innerWidth) * 100}%`);
        Cache.interactiveBg.style.setProperty('--mouse-y', `${(state.mouseY / window.innerHeight) * 100}%`);
        if (Math.abs(state.mouseX - state.targetMouseX) > 0.1 || Math.abs(state.mouseY - state.targetMouseY) > 0.1) { requestAnimationFrame(updateInteractiveBg); } else { state.rafMouseBgPending = false; }
    };
    const handleMouseMove = (e) => {
        state.targetMouseX = e.clientX; state.targetMouseY = e.clientY;
        if (!state.rafMouseBgPending) { state.rafMouseBgPending = true; requestAnimationFrame(updateInteractiveBg); }
        if (state.isModalOpen) { handleModalMouseMove(e); }
    };

    // --- Scroll Animations ---
    const initScrollAnimations = () => {
        const observerOptions = { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.08 };
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!entry.target.classList.contains('stagger-letters') && !entry.target.matches('.stat-number')) {
                        entry.target.classList.add('visible');
                    }
                     // Unobserve after first trigger unless it's needed again (like stats container)
                     // if (!entry.target.closest('#stats')) { // Example: Keep observing stats section
                        observer.unobserve(entry.target);
                     // }
                }
            });
        };
        const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);
        Cache.scrollAnimElements.forEach(el => {
            if (!el.classList.contains('stagger-letters') && !el.matches('.stat-number')) {
                 scrollObserver.observe(el);
             }
        });
         // Separate observer for stats counters initialization
        initStatsCounterObserver();
    };
    const initLoadAnimations = () => {
        Cache.loadAnimElements.forEach(el => {
             if (!el.classList.contains('stagger-letters') && !el.matches('.stat-number')) {
                 const delayClass = Array.from(el.classList).find(c => c.startsWith('delay-'));
                 const delayTime = delayClass ? parseInt(delayClass.split('-')[1]) * 80 : 0;
                 setTimeout(() => el.classList.add('visible'), 50 + delayTime);
             }
         });
    };

    // --- Header Nav Link Click Handling ---
     const handleNavLinkClick = function (e) {
         const link = e.currentTarget; // Get the clicked element
         const targetId = link.getAttribute('href');

         if (targetId?.startsWith('#') && targetId.length > 1) {
             e.preventDefault();
             const targetElement = document.getElementById(targetId.substring(1));
              if (targetElement) {
                  const offset = (Cache.header?.offsetHeight || 65) + 10;
                  const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                  window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });

                  if (Cache.nav.list?.classList.contains('active')) toggleNav(e);

                  // Immediate visual feedback for active state
                  state.currentSectionId = targetId.substring(1);
                  Cache.nav.links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === targetId));
                  Cache.dotNav.dots.forEach(d => d.classList.toggle('active', d.dataset.targetId === state.currentSectionId));
              }
         }
     };

     // --- Dot Navigation ---
     const generateDotNav = () => {
         if (!Cache.dotNav.container) return;
         Cache.dotNav.container.innerHTML = ''; // Clear existing dots
         Cache.dotNav.dots = []; // Clear cache

         Cache.sections.forEach(section => {
             const sectionId = section.id;
             if (!sectionId) return;

             // Try to get a title for the tooltip/aria-label
             let sectionTitle = section.id.replace(/-/g, ' '); // Default title
             const titleElement = section.querySelector('h2[data-translate-key], h1[data-translate-key]'); // Check H1 too for Hero
             if (titleElement) {
                 const titleKey = titleElement.dataset.translateKey;
                 // Attempt to find corresponding nav link key for more user-friendly name
                 const navLink = Array.from(Cache.nav.links).find(l => l.getAttribute('href') === `#${sectionId}`);
                  if (navLink && navLink.dataset.translateKey) {
                     sectionTitle = getTranslation(navLink.dataset.translateKey);
                  } else {
                     sectionTitle = getTranslation(titleKey); // Fallback to H2/H1 key
                 }
             }

             const navItem = document.createElement('div');
             navItem.className = 'dot-nav-item';

             const link = document.createElement('a'); // Continue from here
             link.className = 'dot-nav-link';
             link.href = `#${sectionId}`;
             link.dataset.targetId = sectionId;
             link.setAttribute('aria-label', getTranslation('dot_nav_tooltip_prefix') + sectionTitle); // Set ARIA label
             link.dataset.tooltipText = sectionTitle; // Just the title for tooltip

             link.addEventListener('click', handleNavLinkClick); // Reuse existing scroll logic
             link.addEventListener('mouseenter', (e) => showDotNavTooltip(e.currentTarget));
             link.addEventListener('mouseleave', hideDotNavTooltip);
             link.addEventListener('focus', (e) => showDotNavTooltip(e.currentTarget));
             link.addEventListener('blur', hideDotNavTooltip);

             navItem.appendChild(link);
             Cache.dotNav.container.appendChild(navItem);
             Cache.dotNav.dots.push(link); // Add to cache
         });

         // Update active state immediately after generation
         updateActiveLink();
     };
    const showDotNavTooltip = (dotElement) => {
        if (!Cache.dotNav.tooltip || !dotElement || !dotElement.dataset.tooltipText) return;
        Cache.dotNav.tooltip.textContent = dotElement.dataset.tooltipText;
        const dotRect = dotElement.getBoundingClientRect();
        const containerRect = Cache.dotNav.container.getBoundingClientRect();
        Cache.dotNav.tooltip.style.top = `${dotRect.top + dotRect.height / 2}px`;
        Cache.dotNav.tooltip.style.left = `${containerRect.right + 8}px`;
        Cache.dotNav.tooltip.style.transform = 'translateY(-50%) translateX(0)'; // Reset transform before showing
        Cache.dotNav.tooltip.style.opacity = '0'; // Start hidden for transition
        Cache.dotNav.tooltip.style.visibility = 'hidden';
         requestAnimationFrame(() => { // Allow style to apply before making visible
             Cache.dotNav.tooltip.style.transform = 'translateY(-50%) translateX(5px)'; // Slight slide-in
             Cache.dotNav.tooltip.style.opacity = '1';
             Cache.dotNav.tooltip.style.visibility = 'visible';
        });
     };
    const hideDotNavTooltip = () => {
        if (Cache.dotNav.tooltip) {
            Cache.dotNav.tooltip.style.opacity = '0';
             Cache.dotNav.tooltip.style.visibility = 'hidden';
             Cache.dotNav.tooltip.style.transform = 'translateY(-50%) translateX(0)';
        }
    };

    // --- Mobile Nav Toggle & Close ---
    const toggleNav = (e) => {
        e?.stopPropagation(); // Prevent event bubbling if called from click
        const burger = Cache.nav.burger; const navList = Cache.nav.list;
        if (!burger || !navList) return;
        const isActive = burger.classList.toggle('active');
        navList.classList.toggle('active');
        burger.setAttribute('aria-expanded', String(isActive));
        updateBodyScrollLock();
    };
    const closeNavOnClickOutside = (e) => {
        if (Cache.nav.list?.classList.contains('active') && !Cache.nav.list.contains(e.target) && !Cache.nav.burger?.contains(e.target)) {
            toggleNav(e);
        }
    };

    // --- Keyboard Accessibility ---
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            if (state.isModalOpen) closeModal();
            else if (state.isNavOpen) toggleNav(event);
        }
        // Focus trapping in modal (unchanged)
        if (event.key === 'Tab' && state.isModalOpen && Cache.modal.element) {
            const focusable = Array.from(Cache.modal.element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(el => el.offsetParent !== null);
            if (!focusable.length) { event.preventDefault(); return; }
            const first = focusable[0]; const last = focusable[focusable.length - 1]; const current = document.activeElement;
            if (event.shiftKey && current === first) { last.focus(); event.preventDefault(); }
            else if (!event.shiftKey && current === last) { first.focus(); event.preventDefault(); }
            else if (!focusable.includes(current)) { first.focus(); event.preventDefault(); }
        }
    };

    // --- Card Tilt Effect ---
    const handleCardTilt = (card, event) => {
        if (!card || card.uniqueId === undefined || state.rafTiltPending[card.uniqueId] || ('ontouchstart' in window || navigator.maxTouchPoints > 0)) return; // Added touch check
        state.rafTiltPending[card.uniqueId] = true;
        requestAnimationFrame(() => {
            if (!card.parentNode) { state.rafTiltPending[card.uniqueId] = false; return; }
            const rect = card.getBoundingClientRect(); const x = event.clientX - rect.left; const y = event.clientY - rect.top; const { width, height } = rect;
            if (width <= 0 || height <= 0) { state.rafTiltPending[card.uniqueId] = false; return; }
            const maxRotate = 4; const rotateX = ((y / height) - 0.5) * -maxRotate; const rotateY = ((x / width) - 0.5) * maxRotate; const shineX = (x / width) * 100; const shineY = (y / height) * 100;
            card.style.setProperty('--card-rotation-x', `${rotateX.toFixed(2)}deg`); card.style.setProperty('--card-rotation-y', `${rotateY.toFixed(2)}deg`); card.style.setProperty('--card-shine-opacity', '1'); card.style.setProperty('--card-shine-x', `${shineX.toFixed(2)}%`); card.style.setProperty('--card-shine-y', `${shineY.toFixed(2)}%`);
            card.style.transition = 'none'; state.rafTiltPending[card.uniqueId] = false;
        });
    };
    const resetCardTilt = (card) => {
         if (!card || card.uniqueId === undefined || ('ontouchstart' in window || navigator.maxTouchPoints > 0)) return; // Added touch check
         card.style.setProperty('--card-shine-opacity', '0'); state.rafTiltPending[card.uniqueId] = false;
         requestAnimationFrame(() => {
             if (!card.parentNode) return;
             card.style.transition = 'transform 0.5s var(--ease-out-cubic), --card-shine-opacity 0.5s ease, --card-rotation-x 0.5s var(--ease-out-cubic), --card-rotation-y 0.5s var(--ease-out-cubic)';
             card.style.setProperty('--card-rotation-x', '0deg'); card.style.setProperty('--card-rotation-y', '0deg');
         });
    };
    let cardTiltCounter = 0;
    const initCardTilt = () => {
        Cache.tiltContainers.forEach(container => {
            const cards = container.querySelectorAll('.card-with-tilt');
            cards.forEach(card => {
                card.uniqueId = `card-${cardTiltCounter++}`;
                if (!('ontouchstart' in window || navigator.maxTouchPoints > 0)) { // Check for touch device
                    card.addEventListener('mousemove', (e) => handleCardTilt(card, e), { passive: true });
                    card.addEventListener('mouseleave', () => resetCardTilt(card));
                 }
                 card.addEventListener('focus', () => resetCardTilt(card));
                 card.addEventListener('blur', () => resetCardTilt(card));
            });
        });
    };

    // --- Stats Counter Animation ---
    const animateStatCounter = (el, duration = 1500) => {
        const targetValue = parseFloat(el.dataset.value); const suffix = el.dataset.suffix || ''; const isFloat = targetValue % 1 !== 0;
        if (isNaN(targetValue) || el.dataset.isAnimating === 'true') return;
        el.dataset.isAnimating = 'true'; let startTime;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp; const progress = Math.min((timestamp - startTime) / duration, 1); const currentVal = progress * targetValue;
            let formattedVal;
            if (isFloat) { const decimalPlaces = (el.dataset.value.split('.')[1] || '').length; formattedVal = currentVal.toFixed(decimalPlaces); }
            else { formattedVal = Math.floor(currentVal).toLocaleString(state.currentLang); }
            el.textContent = formattedVal + suffix;
            if (progress < 1) { state.rafStatCounterPending[el.dataset.value] = requestAnimationFrame(step); }
            else { el.textContent = (isFloat ? targetValue.toFixed((el.dataset.value.split('.')[1] || '').length) : targetValue.toLocaleString(state.currentLang)) + suffix; delete state.rafStatCounterPending[el.dataset.value]; el.dataset.isAnimating = 'false'; }
        };
        state.rafStatCounterPending[el.dataset.value] = requestAnimationFrame(step);
    };
    const initStatsCounterObserver = () => {
        if (Cache.statNumbers.length === 0) return;
        const observerOptions = { root: null, threshold: 0.4 }; // Slightly lower threshold maybe
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.target.dataset.isAnimating !== 'true') { // Re-check animating flag
                    animateStatCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        };
        const statObserver = new IntersectionObserver(observerCallback, observerOptions);
        Cache.statNumbers.forEach(numEl => statObserver.observe(numEl));
    };

    // --- FAQ Accordion Logic ---
    const toggleFaqItem = (button) => {
        const item = button.closest('.faq-item'); if (!item) return;
        const answer = item.querySelector('.faq-answer'); const isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !isExpanded);
        if (!isExpanded) {
            answer.classList.add('active'); // Max-height is handled by CSS transitions based on this class
        } else {
            answer.classList.remove('active');
        }
    };

    // --- System Status Toggle Logic ---
    const toggleStatusBox = () => {
         if (!Cache.statusBox.header || !Cache.statusBox.body) return;
         const isExpanded = Cache.statusBox.header.getAttribute('aria-expanded') === 'true';
         Cache.statusBox.header.setAttribute('aria-expanded', !isExpanded);
         // CSS handles visibility/height transition based on [aria-expanded]
    };
    const fetchAndUpdateStatus = () => {
         // Placeholder: Simulate fetching data
         const simulatedStatus = {
            // Simulate different states randomly for testing visuals
             overall: ["operational", "degraded", "outage"][Math.floor(Math.random() * 2)], // Make operational more likely
             lastUpdated: new Date(),
             services: [
                 { nameKey: "status_item_api", status: "operational" },
                 { nameKey: "status_item_website", status: ["operational", "degraded"][Math.floor(Math.random() * 2)] },
                 { nameKey: "status_item_services", status: "operational" },
                 { nameKey: "status_item_script_hub", status: ["operational", "outage"][Math.floor(Math.random() * 2)] },
            ]
         };

        // Update Overall Status Display
        if (Cache.statusBox.indicator && Cache.statusBox.title) {
             Cache.statusBox.indicator.className = `status-indicator ${simulatedStatus.overall}`;
             Cache.statusBox.title.textContent = getTranslation(`status_main_title_${simulatedStatus.overall}`) || getTranslation('status_main_title_operational'); // Default fallback
         }

         // Update Last Updated Time
         if (Cache.statusBox.lastUpdateEl) {
             try {
                 Cache.statusBox.lastUpdateEl.textContent = simulatedStatus.lastUpdated.toLocaleString(state.currentLang, { dateStyle: 'medium', timeStyle: 'short' });
             } catch (e) { // Fallback for locale errors
                Cache.statusBox.lastUpdateEl.textContent = simulatedStatus.lastUpdated.toLocaleDateString();
             }
        }

         // Update Individual Service Status
         if (Cache.statusBox.list) {
             const serviceItems = Cache.statusBox.list.querySelectorAll('.status-item');
             serviceItems.forEach(item => {
                 const nameEl = item.querySelector('.status-item-name');
                 const valueEl = item.querySelector('.status-item-value');
                 if (!nameEl || !valueEl) return;

                 const nameKey = nameEl.dataset.translateKey;
                 const serviceData = simulatedStatus.services.find(s => s.nameKey === nameKey);
                 if (serviceData) {
                     valueEl.textContent = getTranslation(`status_${serviceData.status}`);
                     valueEl.className = `status-item-value ${serviceData.status}`;
                 } else {
                     valueEl.textContent = 'Unknown'; // Handle missing service data
                     valueEl.className = `status-item-value unknown`;
                 }
            });
        }
    };

    // --- Setup Event Listeners ---
    const setupEventListeners = () => {
        Cache.lang.buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', () => {
            state.scrollbarWidth = getScrollbarWidth();
            Cache.html.style.setProperty('--scrollbar-width', `${state.scrollbarWidth}px`);
            updateActiveLink();
            hideDotNavTooltip(); // Hide tooltip on resize
        }, { passive: true });

        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        if (Cache.modal.element) {
            Cache.modal.element.addEventListener('mousemove', handleModalMouseMove, { passive: true });
            Cache.modal.element.addEventListener('mouseleave', handleModalMouseLeave);
        }

        Cache.nav.links.forEach(anchor => anchor.addEventListener('click', handleNavLinkClick));
        if (Cache.nav.burger) Cache.nav.burger.addEventListener('click', toggleNav);
        document.addEventListener('click', closeNavOnClickOutside); // Handles closing mobile nav
        document.addEventListener('keydown', handleKeyDown);

        Cache.productButtons.forEach(button => button.addEventListener('click', handleBuyButtonClick));

        if (Cache.modal.closeBtn) Cache.modal.closeBtn.addEventListener('click', closeModal);
        if (Cache.modal.overlay) Cache.modal.overlay.addEventListener('click', closeModal);
        if (Cache.termsLink) {
            Cache.termsLink.addEventListener('click', (e) => {
                e.preventDefault();
                alert(getTranslation('terms_link') + ' (placeholder)');
            });
        }

         // Add FAQ event listeners
         Cache.faqItems.forEach(item => {
             const button = item.querySelector('.faq-question');
             if (button) {
                 button.addEventListener('click', () => toggleFaqItem(button));
             }
         });

         // Add Status Box toggle listener
         if (Cache.statusBox.header) {
            Cache.statusBox.header.addEventListener('click', toggleStatusBox);
         }
    };

    // --- Initialization ---
    const initialize = () => {
        Cache.body.classList.add('preload');
        state.scrollbarWidth = getScrollbarWidth();
        Cache.html.style.setProperty('--scrollbar-width', `${state.scrollbarWidth}px`);

        let preferredLang = 'ru'; // Default
        try {
            const storedLang = localStorage.getItem('preferredLang');
            const browserLang = navigator.language?.substring(0, 2);
            if (storedLang && translations[storedLang]) { preferredLang = storedLang; }
            else if (browserLang && translations[browserLang]) { preferredLang = browserLang; }
        } catch (e) { console.warn("Could not access localStorage for language preference.");}

        setLanguage(preferredLang); // Set initial language and generate dependent elements like DotNav
        setupEventListeners();
        initScrollAnimations(); // Sets up observers for scroll effects
        initLoadAnimations();   // Triggers initial load animations
        initCardTilt();         // Adds tilt effect listeners
        fetchAndUpdateStatus(); // Fetch initial system status

        // Initial check for header scroll state and active links
        handleScroll();
        updateActiveLink();

        // Remove preload class after a short delay to allow rendering
        setTimeout(() => Cache.body.classList.remove('preload'), 150);
    };

    // --- Run Initialization ---
    initialize();

}); // End DOMContentLoaded

// --- END OF COMPLETE script.js ---
