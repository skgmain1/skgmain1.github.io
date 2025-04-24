document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        ru: {
            site_title: "EXPENSIVE.CC - Премиум Roblox Решения",
            logo_text: "EXPENSIVE.CC",
            nav_home: "Главная",
            nav_stats: "Статистика",
            nav_features: "Возможности",
            nav_script_hub: "Script Hub",
            nav_products: "Продукты",
            nav_faq: "FAQ",
            nav_status: "Статус",
            hero_title: "EXPENSIVE для Roblox",
            hero_subtitle: "Фарми больше, фарми лучше, фарми качественнее. Доминируй в каждой игре с непревзойденной эффективностью.",
            hero_button: "Выбрать План",
            stats_title: "Наша Статистика",
            stat_customers: "Активных пользователей",
            stat_success_rate: "Success Rate",
            stat_total_hours: "Total Hours",
            stat_total_executed: "Total Executed",
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
            script_hub_title: "Возможности Script Hub",
            sh_feature1_title: "Обширная Библиотека Скриптов",
            sh_feature1_desc: "Доступ к нашей коллекции премиум скриптов для всех популярных игр Roblox.",
            sh_feature1_b1: "Высококачественные скрипты",
            sh_feature1_b2: "Регулярные обновления и добавления",
            sh_feature1_b3: "Скрипты, оцененные сообществом",
            sh_feature2_title: "Дружелюбный Интерфейс",
            sh_feature2_desc: "Приятный и чистый интерфейс, который делает использование скриптов легким.",
            sh_feature2_b1: "Простая и быстрая система ключей",
            sh_feature2_b2: "Исполнение скриптов в один клик",
            sh_feature2_b3: "Чистый, современный дизайн",
            sh_feature3_title: "Поддержка 24/7",
            sh_feature3_desc: "Наша выделенная команда всегда готова помочь вам с любыми проблемами.",
            sh_feature3_b1: "Поддержка в Discord сообществе",
            sh_feature3_b2: "Множество полезных сотрудников",
            sh_feature3_b3: "Полезные члены сообщества",
            products_title: "Наши Продукты",
            price_month: "1 Месяц",
            price_lifetime: "Lifetime",
            buy_button: "Купить (Discord)",
            button_funpay: "Купить (FunPay)",
            popular_badge: "Популярно",
            product_exclusive_title: "Exclusive Subscribe [One For All]",
            product_exclusive_desc: "Подписка на месяц на ВСЕ скрипты от Expensive Hub.",
            product_aut_title: "Expensive Hub [v2]",
            product_aut_desc: "Скрипт на несколько игр сразу: Aut Basic Version, Finger Farm v2, Hunters, Bubble Gum Simulator: Infinity, VolleyBall Legends, AOTR.",
            product_farmv1_title: "Resources Farm v1 Script",
            product_farmv1_desc: "Скрипт для автоматического фарма юшардов и юкойнов, примерная скорость 20-25 миллионов юшардов в час, 100-150 миллионов юкойнов за 10 минут.",
            product_farmv2_title: "Resources & Skins Farm v2",
            product_farmv2_desc: "Автоматический фарм юшардов, юкойнов, скинов. Примерная скорость: 65-85 млн юшардов/час, 3-5 универсал скинов/3 часа, 200-250 млн юкойнов/10 мин.",
            product_level_title: "Level Special Script",
            product_level_desc: "Скрипт для автоматического фарма уровня на базе юшардов и юкойнов. Примерная скорость фарма 10-15 асков за 3-5 секунд. Включает автотрейт в4 и авто реролл статов.",
            product_ghoul_title: "Ghoul://RE Script",
            product_ghoul_desc: "Скрипт для игры Гуль Ре. Включает лучший автоматический рейд фарм, авто парри, авто ивент фарм и многое другое!",
            product_bluelock_title: "Blue Lock:Rivals Script",
            product_bluelock_desc: "Скрипт на игру Блюлок Райвалс. Лучший автоматический роллбек / инфинити спинс скрипт, быстрейший автофарм и многое другое!",
            product_jjk_title: "JJK Script",
            product_jjk_desc: "Скрипт на игру Jujutsu Infinity. Лучший автоматический фарм каламити, годмод, инстакилл, дамаг аура и многое другое.",
            faq_title: "Часто Задаваемые Вопросы",
            faq_q1_title: "Безопасно ли использовать Expensive.cc Hub?",
            faq_a1_content: "Мы уделяем приоритетное внимание безопасности. Наши скрипты разрабатываются с использованием передовых методов обхода, чтобы минимизировать риск обнаружения. Однако использование любых сторонних скриптов всегда несет некоторый риск.",
            faq_q2_title: "Меня забанят за использование скриптов от Expensive?",
            faq_a2_content: "Хотя мы прилагаем все усилия для обеспечения безопасности, ни один скрипт не может гарантировать 100% защиту от бана. Риск зависит от политики игры и от того, как вы используете скрипт. Используйте на свой страх и риск.",
            faq_q3_title: "Как часто обновляются скрипты?",
            faq_a3_content: "Мы стремимся обновлять наши скрипты как можно быстрее после обновлений игр Roblox, чтобы обеспечить их работоспособность и безопасность. Частота обновлений зависит от конкретной игры и продукта.",
            faq_q4_title: "Вы предлагаете возврат средств?",
            faq_a4_content: "Из-за цифровой природы наших продуктов мы обычно не предлагаем возврат средств. Пожалуйста, убедитесь, что продукт соответствует вашим потребностям перед покупкой. Исключения могут быть сделаны в особых случаях по усмотрению поддержки.",
            faq_q5_title: "Поддерживает ли Expensive бесплатные эксплойты?",
            faq_a5_content: "Наши скрипты предназначены для работы с широким спектром эксплойтов/исполнителей. Хотя они могут работать с некоторыми бесплатными вариантами, мы рекомендуем использовать надежные платные эксплойты для лучшей производительности и безопасности.",
            status_section_title: "Статус Систем",
            status_main_title: "Все Системы Работают",
            status_main_title_operational: "Все Системы Работают",
            status_main_title_degraded: "Некоторые Системы Имеют Перебои",
            status_main_title_outage: "Критический Сбой Системы",
            status_last_updated: "Последнее обновление:",
            status_update_time_placeholder: "Проверка статуса...",
            status_item_api: "Expensive API",
            status_item_website: "Expensive Website",
            status_item_services: "Expensive Services",
            status_item_script_hub: "Script Hub",
            status_operational: "Работает",
            status_degraded: "Перебои",
            status_outage: "Сбой",
            requirements: "Системные требования: Windows 10/11 x64. Требуется постоянное подключение к интернету.",
            purchase_info_discord: "Для покупки любого продукта, пожалуйста, перейдите в наш Discord сервер или воспользуйтесь FunPay.",
            questions: "Возникли вопросы?",
            contact_support: "Свяжитесь с поддержкой в Discord!",
            check_terms: "Ознакомьтесь с",
            terms_link: "условиями использования",
            terms_title: "Условия Использования",
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
            modal_close_aria: "Х",
            modal_close_button_text: "Закрыть",
            lang_ru_aria: "Переключить на Русский",
            lang_en_aria: "Switch to English",
            lang_es_aria: "Cambiar a Español",
            dot_nav_tooltip_prefix: "Перейти к: ",
        },
        en: {
            site_title: "EXPENSIVE.CC - Premium Roblox Solutions",
            logo_text: "EXPENSIVE.CC",
            nav_home: "Home",
            nav_stats: "Statistics",
            nav_features: "Features",
            nav_script_hub: "Script Hub",
            nav_products: "Products",
            nav_faq: "FAQ",
            nav_status: "Status",
            hero_title: "EXPENSIVE for Roblox",
            hero_subtitle: "Farm more, farm better, farm quality. Dominate every game with unmatched efficiency.",
            hero_button: "Choose Plan",
            stats_title: "Our Statistics",
            stat_customers: "Active Users",
            stat_success_rate: "Success Rate",
            stat_total_hours: "Total Hours",
            stat_total_executed: "Total Executed",
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
            products_title: "Our Products",
            price_month: "1 Month",
            price_lifetime: "Lifetime",
            buy_button: "Buy (Discord)",
            button_funpay: "Buy (FunPay)",
            popular_badge: "Popular",
            product_exclusive_title: "Exclusive Subscribe [One For All]",
            product_exclusive_desc: "Monthly subscription for ALL scripts from Expensive Hub.",
            product_aut_title: "Expensive Hub [v2]",
            product_aut_desc: "Script for multiple games: Aut Basic Version, Finger Farm v2, Hunters, Bubble Gum Simulator: Infinity, VolleyBall Legends, AOTR.",
            product_farmv1_title: "Resources Farm v1 Script",
            product_farmv1_desc: "Script for automatic UShards and YCoins farming. Approx. speed: 20-25 million UShards/hour, 100-150 million YCoins/10 minutes.",
            product_farmv2_title: "Resources & Skins Farm v2",
            product_farmv2_desc: "Automatic farming for UShards, YCoins, and skins. Approx. speed: 65-85M UShards/hr, 3-5 universal skins/3 hrs, 200-250M YCoins/10 min.",
            product_level_title: "Level Special Script",
            product_level_desc: "Script for automatic level farming based on UShards and YCoins. Approx. speed: 10-15 ASKs per 3-5 seconds. Includes autotrait v4 and auto reroll stats.",
            product_ghoul_title: "Ghoul://RE Script",
            product_ghoul_desc: "Script for Ghoul RE. Includes the best automatic raid farm, auto parry, auto event farm, and much more!",
            product_bluelock_title: "Blue Lock:Rivals Script",
            product_bluelock_desc: "Script for Blue Lock Rivals. Best automatic rollback / infinity spins script, fastest autofarm, and much more!",
            product_jjk_title: "JJK Script",
            product_jjk_desc: "Script for Jujutsu Infinity game. Best automatic calamity farm, godmode, instakill, damage aura, and much more.",
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
            requirements: "System Requirements: Windows 10/11 x64. Requires a persistent internet connection.",
            purchase_info_discord: "To purchase any product, please proceed to our Discord server or use FunPay.",
            questions: "Have questions?",
            contact_support: "Contact support on Discord!",
            check_terms: "Review the",
            terms_link: "terms of use",
            terms_title: "Terms of Use",
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
            modal_close_aria: "X",
            modal_close_button_text: "Close",
            lang_ru_aria: "Switch to Russian",
            lang_en_aria: "Switch to English",
            lang_es_aria: "Switch to Spanish",
            dot_nav_tooltip_prefix: "Go to: ",
        },
        es: {
            site_title: "EXPENSIVE.CC - Soluciones Roblox Premium",
            logo_text: "EXPENSIVE.CC",
            nav_home: "Inicio",
            nav_stats: "Estadísticas",
            nav_features: "Características",
            nav_script_hub: "Script Hub",
            nav_products: "Productos",
            nav_faq: "FAQ",
            nav_status: "Estado",
            hero_title: "EXPENSIVE para Roblox",
            hero_subtitle: "Farmea más, farmea mejor, farmea calidad. Domina cada juego con eficiencia inigualable.",
            hero_button: "Elegir Plan",
            stats_title: "Nuestras Estadísticas",
            stat_customers: "Usuarios Activos",
            stat_success_rate: "Tasa de Éxito",
            stat_total_hours: "Horas Totales",
            stat_total_executed: "Total Ejecutado",
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
            products_title: "Nuestros Productos",
            price_month: "1 Mes",
            price_lifetime: "Permanente",
            buy_button: "Comprar (Discord)",
            button_funpay: "Comprar (FunPay)",
            popular_badge: "Popular",
            product_exclusive_title: "Suscripción Exclusiva [Uno Para Todos]",
            product_exclusive_desc: "Suscripción mensual para TODOS los scripts de Expensive Hub.",
            product_aut_title: "Expensive Hub [v2]",
            product_aut_desc: "Script para múltiples juegos: Aut Basic Version, Finger Farm v2, Hunters, Bubble Gum Simulator: Infinity, VolleyBall Legends, AOTR.",
            product_farmv1_title: "Script Granja Recursos v1",
            product_farmv1_desc: "Script para farmeo automático de UShards y YCoins. Velocidad aprox.: 20-25 millones UShards/hora, 100-150 millones YCoins/10 minutos.",
            product_farmv2_title: "Granja Recursos y Skins v2",
            product_farmv2_desc: "Farmeo automático de UShards, YCoins y skins. Velocidad aprox.: 65-85M UShards/h, 3-5 skins universales/3h, 200-250M YCoins/10min.",
            product_level_title: "Script Especial de Nivel",
            product_level_desc: "Script para farmeo automático de nivel basado en UShards y YCoins. Velocidad aprox.: 10-15 ASKs cada 3-5 segundos. Incluye autotrait v4 y auto reroll stats.",
            product_ghoul_title: "Script Ghoul://RE",
            product_ghoul_desc: "Script para el juego Ghoul RE. Incluye el mejor farmeo automático de raids, auto parry, farmeo automático de eventos, ¡y mucho más!",
            product_bluelock_title: "Script Blue Lock:Rivals",
            product_bluelock_desc: "Script para el juego Blue Lock Rivals. El mejor script de rollback automático / giros infinitos, autofarm más rápido, ¡y mucho más!",
            product_jjk_title: "Script JJK",
            product_jjk_desc: "Script para el juego Jujutsu Infinity. El mejor farmeo automático de calamidades, godmode, instakill, aura de daño, y mucho más.",
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
            requirements: "Requisitos del sistema: Windows 10/11 x64. Requiere conexión a internet persistente.",
            purchase_info_discord: "Para comprar cualquier producto, por favor dirígete a nuestro servidor de Discord o usa FunPay.",
            questions: "¿Tienes preguntas?",
            contact_support: "¡Contacta con soporte en Discord!",
            check_terms: "Revisa los",
            terms_link: "términos de uso",
            terms_title: "Términos de Uso",
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
            modal_close_aria: "X",
            modal_close_button_text: "Cerrar",
            lang_ru_aria: "Cambiar a Ruso",
            lang_en_aria: "Cambiar a Inglés",
            lang_es_aria: "Cambiar a Español",
            dot_nav_tooltip_prefix: "Ir a: ",
        }
    };

    const Cache = {
        html: document.documentElement,
        body: document.body,
        header: document.querySelector('.header'),
        nav: {
            list: document.querySelector('.nav-list'),
            links: document.querySelectorAll('.nav-link'),
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
            body: document.querySelector('#product-modal .modal-body'),
            description: document.getElementById('modal-product-description'),
            footer: document.getElementById('modal-product-footer'),
            borderGlow: document.querySelector('.modal-border-glow'),
        },
        productButtons: document.querySelectorAll('.buy-button, .funpay-button'),
        discordButtonTemplate: document.getElementById('discord-button-template'),
        termsLink: document.getElementById('terms-link'),
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
        let text = translations[lang]?.[key] || translations.en?.[key] || `[${key}]`;
        for (const placeholder in replacements) {
            text = text.replace(`{${placeholder}}`, replacements[placeholder]);
        }
        if (replacements.count !== undefined) {
             text = text.replace('{count}', replacements.count.toLocaleString(lang));
        }
        return text;
    };

    const initStaggerAnimation = () => {
        state.staggerObservers.forEach(obs => obs.disconnect());
        state.staggerObservers = [];
        Cache.staggerElements.forEach(wrapper => {
            const key = wrapper.dataset.translateKey;
            const text = getTranslation(key);
            if (!key || !text || text.startsWith('[') || wrapper.classList.contains('visible')) return;

            wrapper.style.opacity = '0';
            let html = '';
            const highlightClass = wrapper.querySelector('.highlight') ? 'highlight' : '';
            const highlightText = highlightClass ? wrapper.querySelector('.highlight').textContent?.trim() : '';
            let charIndex = 0;
            let originalContent = text;

            if (highlightClass && highlightText && originalContent.includes(highlightText)) {
                 const parts = originalContent.split(highlightText);
                parts[0].trim().split('').forEach(char => { html += char === ' ' ? ' ' : `<span class="char" style="--i:${charIndex}">${char}</span>`; charIndex++; });
                 html += ` <span class="${highlightClass}">`;
                highlightText.split('').forEach(char => { html += `<span class="char" style="--i:${charIndex}">${char}</span>`; charIndex++; });
                 html += `</span>`;
                if (parts[1]) parts[1].trim().split('').forEach(char => { html += char === ' ' ? ' ' : `<span class="char" style="--i:${charIndex}">${char}</span>`; charIndex++; });
            } else {
               originalContent.split('').forEach(char => { html += char === ' ' ? ' ' : `<span class="char" style="--i:${charIndex}">${char}</span>`; charIndex++; });
            }

            wrapper.innerHTML = html;
            wrapper.classList.remove('visible');
            wrapper.querySelectorAll('.char').forEach((char) => {
               const i = parseInt(char.style.getPropertyValue('--i'));
               char.style.transitionDelay = `calc(${i} * 0.045s)`;
           });

            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !wrapper.classList.contains('visible')) {
                     requestAnimationFrame(() => {
                         wrapper.style.opacity = '1';
                        wrapper.classList.add('visible');
                    });
                     observer.unobserve(wrapper);
                    const index = state.staggerObservers.indexOf(observer);
                     if (index > -1) state.staggerObservers.splice(index, 1);
                 }
            }, { threshold: 0.15 });
            observer.observe(wrapper);
            state.staggerObservers.push(observer);
        });
    };

    const setLanguage = (lang) => {
        state.currentLang = translations[lang] ? lang : 'en';
        Cache.html.lang = state.currentLang;

        Cache.translatables.forEach(el => {
            const key = el.dataset.translateKey;
            if (!key) return;

            let translation = getTranslation(key);
            if (!translation || translation.startsWith('[')) return;

            if (el.classList.contains('nav-link')) {
                 const span = el.querySelector('span');
                 if (span) { span.textContent = translation; }
             } else if (el.hasAttribute('aria-label') && !el.classList.contains('lang-button')) {
                 el.setAttribute('aria-label', translation);
             } else if (el.tagName === 'TITLE') {
                 document.title = translation;
             } else if (el.tagName === 'BUTTON' && !el.classList.contains('lang-button') && !el.classList.contains('burger-menu')) {
                 if (el.children.length === 0 || (el.children.length === 1 && el.children[0].tagName === 'SPAN')) {
                     (el.querySelector('span') || el).textContent = translation;
                }
            } else if (el.matches('.stat-label, .price-label, .popular-badge, .faq-question > span:first-child, .status-item-name, .status-item-value, .modal-footer .btn-secondary, .product-description')) {
                el.textContent = translation;
            } else if (el.matches('.modal-title, .purchase-info span[data-translate-key], .purchase-info a.info-link, .product-title > span[data-translate-key]')) {
                 el.textContent = translation;
            } else if (el.matches('.modal-body > p, .modal-body li')) {
                el.innerHTML = translation;
            } else if (el.matches('h1, h2, p:not(.hero-subtitle):not(.modal-body p):not(.product-description):not(.purchase-info), .faq-answer p, .script-hub-card p, .script-hub-card li, .feature-card p')) {
                 if (!el.classList.contains('stagger-letters')) { el.innerHTML = translation; }
             } else if (el.matches('.hero-subtitle, .logo, .btn-cta') ) {
                 if (!el.classList.contains('stagger-letters')) { el.textContent = translation; }
            }
        });

        Cache.lang.buttons.forEach(btn => {
            btn.setAttribute('aria-label', getTranslation(`lang_${btn.dataset.lang}_aria`));
             btn.classList.toggle('active', btn.dataset.lang === state.currentLang);
            btn.textContent = btn.dataset.lang.toUpperCase();
        });

        fetchAndUpdateStatus();
        generateDotNav();
        initStaggerAnimation();
        updateActiveLink();

        try { localStorage.setItem('preferredLang', state.currentLang); } catch (e) {}
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

    const showTermsModal = () => {
        if (!Cache.modal.element || !Cache.modal.title || !Cache.modal.body || !Cache.modal.footer) return;

        Cache.modal.body.innerHTML = '';
        Cache.modal.footer.innerHTML = '';
        Cache.modal.title.textContent = '';
        Cache.modal.body.style.textAlign = 'left';
        Cache.modal.description.textContent = '';
        Cache.modal.description.style.display = 'none';

        Cache.modal.title.textContent = getTranslation('terms_title');

        const termsContent = `
            <p><strong>1. Acceptance of Terms:</strong> By accessing and using this website (EXPENSIVE.CC), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these, please do not use this service.</p>
            <p><strong>2. Use License:</strong> Permission is granted to temporarily download one copy of the materials (information or software) on EXPENSIVE.CC's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained on EXPENSIVE.CC's website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server.</p>
             <p><strong>3. Disclaimer:</strong> The materials on EXPENSIVE.CC's website are provided on an 'as is' basis. EXPENSIVE.CC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            <p><strong>4. Limitations:</strong> In no event shall EXPENSIVE.CC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on EXPENSIVE.CC's website, even if EXPENSIVE.CC or an EXPENSIVE.CC authorized representative has been notified orally or in writing of the possibility of such damage.</p>
             <p><strong>5. Revisions and Errata:</strong> The materials appearing on EXPENSIVE.CC's website could include technical, typographical, or photographic errors. EXPENSIVE.CC does not warrant that any of the materials on its website are accurate, complete or current. EXPENSIVE.CC may make changes to the materials contained on its website at any time without notice.</p>
             <p><strong>6. Governing Law:</strong> Any claim relating to EXPENSIVE.CC's website shall be governed by the laws of the service provider's home jurisdiction without regard to its conflict of law provisions.</p>
            <p><strong>7. Use of Services:</strong> Using our scripts or services in violation of Roblox's Terms of Service may result in penalties, including account suspension or termination. Use our services responsibly and at your own risk. We are not responsible for any actions taken against your account.</p>
         `;
        Cache.modal.body.innerHTML = termsContent;

         const closeButton = document.createElement('button');
        closeButton.className = 'btn btn-secondary';
        closeButton.textContent = getTranslation('modal_close_button_text');
        closeButton.addEventListener('click', closeModal);
         Cache.modal.footer.appendChild(closeButton);

        state.lastModalTrigger = Cache.termsLink;
        Cache.modal.overlay.classList.add('active');
        Cache.modal.element.classList.add('active');
        updateBodyScrollLock();
        resetModalGlow();
        requestAnimationFrame(() => Cache.modal.closeBtn?.focus());
    };

    const displayModalContent = (type, nameKey, descKeyOrProduct, monthUrl = '', lifetimeUrl = '') => {
        if (!Cache.modal.element || !Cache.modal.title || !Cache.modal.description || !Cache.modal.footer) return;

         Cache.modal.body.innerHTML = '';
         Cache.modal.footer.innerHTML = '';
         Cache.modal.body.style.textAlign = 'center';
         Cache.modal.description.style.display = 'block';

        const productName = getTranslation(nameKey);
         const titleKey = type === 'discord' ? 'modal_discord_title' : 'modal_funpay_title';
         Cache.modal.title.textContent = getTranslation(titleKey, state.currentLang, { productName });

        const descKeyResolved = type === 'discord' ? 'modal_discord_desc' : 'modal_funpay_desc';
        Cache.modal.description.textContent = getTranslation(descKeyResolved, state.currentLang, { productName });
         Cache.modal.description.style.display = 'block';

        if (type === 'discord') {
             const discordButtonTemplate = Cache.discordButtonTemplate?.content.firstElementChild;
             if (discordButtonTemplate) {
                const discordButtonClone = discordButtonTemplate.cloneNode(true);
                const span = discordButtonClone.querySelector('span');
                if (span) span.dataset.translateKey = 'modal_discord_button';
                if (span) span.textContent = getTranslation('modal_discord_button');
                 Cache.modal.footer.appendChild(discordButtonClone);
            }
         } else if (type === 'funpay') {
            if (monthUrl) {
                 const monthButton = document.createElement('a');
                 monthButton.href = monthUrl; monthButton.target = "_blank"; monthButton.rel = "noopener noreferrer"; monthButton.className = "btn btn-funpay";
                monthButton.dataset.translateKey = 'modal_funpay_button_month';
                monthButton.textContent = getTranslation('modal_funpay_button_month');
                 Cache.modal.footer.appendChild(monthButton);
             }
             if (lifetimeUrl) {
                 const lifetimeButton = document.createElement('a');
                 lifetimeButton.href = lifetimeUrl; lifetimeButton.target = "_blank"; lifetimeButton.rel = "noopener noreferrer"; lifetimeButton.className = "btn btn-funpay";
                lifetimeButton.dataset.translateKey = 'modal_funpay_button_lifetime';
                lifetimeButton.textContent = getTranslation('modal_funpay_button_lifetime');
                 Cache.modal.footer.appendChild(lifetimeButton);
            }
         }
    };

    const handleBuyButtonClick = (event) => {
         const button = event.currentTarget;
         const modalType = button.dataset.modalType;
         const nameKey = button.dataset.productNameKey;
         const descKey = button.dataset.productKey;
         const monthUrl = button.dataset.funpayMonthUrl || '';
         const lifetimeUrl = button.dataset.funpayLifetimeUrl || '';
        displayModalContent(modalType, nameKey, descKey, monthUrl, lifetimeUrl);
         state.lastModalTrigger = button;
         Cache.modal.overlay.classList.add('active');
         Cache.modal.element.classList.add('active');
         updateBodyScrollLock();
         resetModalGlow();
         requestAnimationFrame(() => Cache.modal.closeBtn?.focus());
    };

    const closeModal = () => {
        Cache.modal.overlay.classList.remove('active');
        Cache.modal.element.classList.remove('active');
        updateBodyScrollLock();
        handleModalMouseLeave();
         if (state.lastModalTrigger && (state.lastModalTrigger.tagName === 'BUTTON' || state.lastModalTrigger.tagName === 'A')) {
             try { state.lastModalTrigger.focus({ preventScroll: true }); }
             catch (e) {}
         }
        state.lastModalTrigger = null;
    };

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
         if (Cache.modal.borderGlow) { Cache.modal.borderGlow.style.setProperty('--modal-glow-opacity', '0.6'); }
         if (!state.rafModalGlowPending) { state.rafModalGlowPending = true; requestAnimationFrame(updateModalGlow); }
    };
    const resetModalGlow = () => {
         if (Cache.modal.borderGlow) {
             Cache.modal.borderGlow.style.transition = 'none';
             Cache.modal.borderGlow.style.setProperty('--modal-glow-opacity', '0');
             Cache.modal.borderGlow.style.setProperty('--modal-glow-x', `50%`);
             Cache.modal.borderGlow.style.setProperty('--modal-glow-y', `50%`);
             Cache.modal.borderGlow.offsetHeight;
             Cache.modal.borderGlow.style.transition = '';
         }
         state.targetModalMouseX = 50; state.targetModalMouseY = 50; state.modalMouseX = 50; state.modalMouseY = 50;
         state.rafModalGlowPending = false;
    };
    const handleModalMouseLeave = () => {
         if (Cache.modal.borderGlow) { Cache.modal.borderGlow.style.setProperty('--modal-glow-opacity', '0'); }
         state.rafModalGlowPending = false;
    };

    const updateActiveLink = () => {
        const scrollY = window.pageYOffset;
        const headerHeight = Cache.header?.offsetHeight || 65;
        const offset = headerHeight + window.innerHeight * 0.35;
        let newSectionId = null;
        Cache.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollY >= sectionTop - offset && scrollY < sectionBottom - offset) { newSectionId = section.id; }
        });
        if (!newSectionId && (window.innerHeight + scrollY) >= document.documentElement.scrollHeight - 80) {
            if (Cache.sections.length > 0) newSectionId = Cache.sections[Cache.sections.length - 1]?.id;
        }
        if (scrollY < headerHeight + 100) newSectionId = 'hero';
        if (newSectionId === null) newSectionId = 'hero';
        if (newSectionId !== state.currentSectionId) {
            state.currentSectionId = newSectionId;
            Cache.nav.links.forEach(link => {
                 const linkTargetId = link.getAttribute('href')?.substring(1);
                 link.classList.toggle('active', linkTargetId === state.currentSectionId);
             });
            Cache.dotNav.dots.forEach(dot => { dot.classList.toggle('active', dot.dataset.targetId === state.currentSectionId); });
        }
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
        state.mouseX = lerp(state.mouseX, state.targetMouseX, 0.06);
        state.mouseY = lerp(state.mouseY, state.targetMouseY, 0.06);
        Cache.interactiveBg.style.setProperty('--mouse-x', `${(state.mouseX / window.innerWidth) * 100}%`);
        Cache.interactiveBg.style.setProperty('--mouse-y', `${(state.mouseY / window.innerHeight) * 100}%`);
        if (Math.abs(state.mouseX - state.targetMouseX) > 0.1 || Math.abs(state.mouseY - state.targetMouseY) > 0.1) { requestAnimationFrame(updateInteractiveBg); } else { state.rafMouseBgPending = false; }
    };
    const handleMouseMove = (e) => {
        state.targetMouseX = e.clientX; state.targetMouseY = e.clientY;
        if (!state.rafMouseBgPending) { state.rafMouseBgPending = true; requestAnimationFrame(updateInteractiveBg); }
        if (state.isModalOpen) { handleModalMouseMove(e); }
    };

    const initScrollAnimations = () => {
        const observerOptions = { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.08 };
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!entry.target.classList.contains('stagger-letters') && !entry.target.matches('.stat-number')) {
                        entry.target.classList.add('visible');
                    }
                    if (!entry.target.classList.contains('stat-number')) { observer.unobserve(entry.target); }
                }
            });
        };
        const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);
        Cache.scrollAnimElements.forEach(el => { if (!el.classList.contains('stagger-letters') && !el.matches('.stat-number')) { scrollObserver.observe(el); } });
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
        initStaggerAnimation();
    };

     const handleNavLinkClick = function (e) {
         const link = e.currentTarget;
         const targetId = link.getAttribute('href');
         if (targetId?.startsWith('#') && targetId.length > 1) {
             e.preventDefault();
             const sectionId = targetId.substring(1);
             const targetElement = document.getElementById(sectionId);
             if (targetElement) {
                 const offset = (Cache.header?.offsetHeight || 65);
                 const elementPosition = targetElement.offsetTop;
                 window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
                 if (Cache.nav.list?.classList.contains('active')) toggleNav();
                 state.currentSectionId = sectionId;
                 Cache.nav.links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === targetId));
                 if(Cache.dotNav.dots) Cache.dotNav.dots.forEach(d => d.classList.toggle('active', d.dataset.targetId === state.currentSectionId));
             }
         }
     };

     const generateDotNav = () => {
         if (!Cache.dotNav.container) return;
         Cache.dotNav.container.innerHTML = '';
         Cache.dotNav.dots = [];
         Cache.sections.forEach(section => {
             const sectionId = section.id;
             if (!sectionId) return;
             const navLink = Array.from(Cache.nav.links).find(l => l.getAttribute('href') === `#${sectionId}`);
             const navKey = navLink?.dataset.translateKey;
             let sectionTitle = navKey ? getTranslation(navKey) : section.id.replace(/-/g, ' ');
             const navItem = document.createElement('div'); navItem.className = 'dot-nav-item';
             const link = document.createElement('a'); link.className = 'dot-nav-link'; link.href = `#${sectionId}`; link.dataset.targetId = sectionId;
             link.setAttribute('aria-label', getTranslation('dot_nav_tooltip_prefix') + sectionTitle); link.dataset.tooltipText = sectionTitle;
             link.addEventListener('click', handleNavLinkClick);
             link.addEventListener('mouseenter', (e) => showDotNavTooltip(e.currentTarget));
             link.addEventListener('mouseleave', hideDotNavTooltip);
             link.addEventListener('focus', (e) => showDotNavTooltip(e.currentTarget));
             link.addEventListener('blur', hideDotNavTooltip);
             navItem.appendChild(link); Cache.dotNav.container.appendChild(navItem); Cache.dotNav.dots.push(link);
         });
         updateActiveLink();
     };

    const showDotNavTooltip = (dotElement) => {
        if (!Cache.dotNav.tooltip || !dotElement || !dotElement.dataset.tooltipText) return;
        Cache.dotNav.tooltip.textContent = dotElement.dataset.tooltipText;
        const dotRect = dotElement.getBoundingClientRect();
        const containerRect = Cache.dotNav.container.getBoundingClientRect();
        Cache.dotNav.tooltip.style.position = 'fixed';
        Cache.dotNav.tooltip.style.top = `${dotRect.top + dotRect.height / 2}px`;
        Cache.dotNav.tooltip.style.left = `${containerRect.right + 10}px`;
        Cache.dotNav.tooltip.style.transform = 'translateY(-50%) translateX(0)';
        Cache.dotNav.tooltip.classList.add('visible');
    };
    const hideDotNavTooltip = () => { Cache.dotNav.tooltip?.classList.remove('visible'); };

    const toggleNav = (e) => {
        e?.stopPropagation();
        const burger = Cache.nav.burger; const navList = Cache.nav.list;
        if (!burger || !navList) return;
        const isActive = burger.classList.toggle('active');
        navList.classList.toggle('active');
        burger.setAttribute('aria-expanded', String(isActive));
        updateBodyScrollLock();
    };

    const closeNavOnClickOutside = (e) => { if (Cache.nav.list?.classList.contains('active') && !Cache.nav.list.contains(e.target) && !Cache.nav.burger?.contains(e.target)) { toggleNav(); } };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') { if (state.isModalOpen) closeModal(); else if (state.isNavOpen) toggleNav(); }
        if (event.key === 'Tab' && state.isModalOpen && Cache.modal.element) {
            const focusable = Array.from(Cache.modal.element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(el => el.offsetParent !== null);
            if (!focusable.length) { event.preventDefault(); return; }
            const first = focusable[0]; const last = focusable[focusable.length - 1]; const current = document.activeElement;
            if (event.shiftKey && current === first) { last.focus(); event.preventDefault(); }
            else if (!event.shiftKey && current === last) { first.focus(); event.preventDefault(); }
            else if (!focusable.includes(current)) { first.focus(); event.preventDefault(); }
        }
    };

    const handleCardTilt = (card, event) => {
        if (!card || card.uniqueId === undefined || state.rafTiltPending[card.uniqueId] || ('ontouchstart' in window || navigator.maxTouchPoints > 0)) return;
        state.rafTiltPending[card.uniqueId] = true;
        requestAnimationFrame(() => {
            if (!card.parentNode) { delete state.rafTiltPending[card.uniqueId]; return; }
            const rect = card.getBoundingClientRect();
            if (!rect || rect.width <= 0 || rect.height <= 0) { delete state.rafTiltPending[card.uniqueId]; return; }
            const x = event.clientX - rect.left; const y = event.clientY - rect.top; const { width, height } = rect;
            const maxRotate = card.classList.contains('product-card') || card.classList.contains('feature-card') ? 4 : 3;
            const rotateX = ((y / height) - 0.5) * -maxRotate; const rotateY = ((x / width) - 0.5) * maxRotate; const shineX = (x / width) * 100; const shineY = (y / height) * 100;
            card.style.setProperty('--card-rotation-x', `${rotateX.toFixed(2)}deg`); card.style.setProperty('--card-rotation-y', `${rotateY.toFixed(2)}deg`); card.style.setProperty('--card-shine-opacity', '1'); card.style.setProperty('--card-shine-x', `${shineX.toFixed(2)}%`); card.style.setProperty('--card-shine-y', `${shineY.toFixed(2)}%`);
            card.style.transition = 'none'; delete state.rafTiltPending[card.uniqueId];
        });
    };
    const resetCardTilt = (card) => {
         if (!card || card.uniqueId === undefined || ('ontouchstart' in window || navigator.maxTouchPoints > 0)) return;
         if(state.rafTiltPending[card.uniqueId]) return;
         card.style.setProperty('--card-shine-opacity', '0');
         requestAnimationFrame(() => {
             if (!card.parentNode) return;
             card.style.transition = 'transform 0.5s var(--ease-out-cubic), --card-shine-opacity 0.5s ease, --card-rotation-x 0.5s var(--ease-out-cubic), --card-rotation-y 0.5s var(--ease-out-cubic)';
             card.style.setProperty('--card-rotation-x', '0deg'); card.style.setProperty('--card-rotation-y', '0deg');
         });
    };

    let cardTiltCounter = 0;
    const initCardTilt = () => {
         document.querySelectorAll('.card-with-tilt, .product-card, .feature-card').forEach(card => {
             if (!card.classList.contains('no-tilt')) {
                 card.uniqueId = `card-${cardTiltCounter++}`;
                  if (!('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
                      card.addEventListener('mousemove', (e) => handleCardTilt(card, e), { passive: true });
                      card.addEventListener('mouseleave', () => resetCardTilt(card));
                      card.addEventListener('focus', () => resetCardTilt(card));
                      card.addEventListener('blur', () => resetCardTilt(card));
                 } } });
    };

    const animateStatCounter = (el, duration = 1500) => {
        const targetValueStr = el.dataset.value; const suffix = el.dataset.suffix || ''; if (!targetValueStr) return;
        const targetValue = parseFloat(targetValueStr.replace(/,/g, '')); if (isNaN(targetValue) || el.dataset.isAnimating === 'true') return;
        el.dataset.isAnimating = 'true'; let startTime; const isFloat = targetValue % 1 !== 0;
        const decimalPlaces = isFloat ? (targetValueStr.split('.')[1] || '').length : 0; const locale = state.currentLang;
        const step = (timestamp) => {
             if (!startTime) startTime = timestamp; const elapsed = timestamp - startTime; const progress = Math.min(elapsed / duration, 1);
             const currentVal = progress * targetValue; let formattedVal;
             if (isFloat) { formattedVal = currentVal.toLocaleString(locale, { minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces }); }
             else { formattedVal = Math.floor(currentVal).toLocaleString(locale); }
             el.textContent = formattedVal + suffix;
             if (progress < 1) { state.rafStatCounterPending[el.dataset.value] = requestAnimationFrame(step); }
             else { el.textContent = targetValue.toLocaleString(locale, { minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces }) + suffix; delete state.rafStatCounterPending[el.dataset.value]; el.dataset.isAnimating = 'false'; } };
        state.rafStatCounterPending[el.dataset.value] = requestAnimationFrame(step);
    };

    const initStatsCounterObserver = () => {
         if (Cache.statNumbers.length === 0) return; const observerOptions = { root: null, threshold: 0.3 };
         const observerCallback = (entries, observer) => { entries.forEach(entry => { if (entry.isIntersecting && entry.target.dataset.isAnimating !== 'true') { animateStatCounter(entry.target); observer.unobserve(entry.target); } }); };
         const statObserver = new IntersectionObserver(observerCallback, observerOptions);
         Cache.statNumbers.forEach(numEl => statObserver.observe(numEl));
    };

    const toggleFaqItem = (button) => { const item = button.closest('.faq-item'); if (!item) return; const answer = item.querySelector('.faq-answer'); const isExpanded = button.getAttribute('aria-expanded') === 'true'; button.setAttribute('aria-expanded', !isExpanded); answer?.classList.toggle('active'); };

    const toggleStatusBox = () => { if (!Cache.statusBox.header) return; const isExpanded = Cache.statusBox.header.getAttribute('aria-expanded') === 'true'; Cache.statusBox.header.setAttribute('aria-expanded', String(!isExpanded)); };

    const fetchAndUpdateStatus = () => {
        const componentStatuses = [ "operational", ["operational", "degraded"][Math.floor(Math.random() * 2)], "operational", ["operational", "degraded", "outage"][Math.floor(Math.random() * 3)] ];
        let overallStatus = "operational"; if (componentStatuses.includes("outage")) overallStatus = "outage"; else if (componentStatuses.includes("degraded")) overallStatus = "degraded";
        const simulatedStatus = { overall: overallStatus, lastUpdated: new Date(), services: [ { nameKey: "status_item_api", status: componentStatuses[0] }, { nameKey: "status_item_website", status: componentStatuses[1] }, { nameKey: "status_item_services", status: componentStatuses[2] }, { nameKey: "status_item_script_hub", status: componentStatuses[3] }, ] };
        if (Cache.statusBox.indicator && Cache.statusBox.title) {
            Cache.statusBox.indicator.className = `status-indicator ${simulatedStatus.overall}`; const titleTranslationKey = `status_main_title_${simulatedStatus.overall}`;
            Cache.statusBox.title.textContent = getTranslation(titleTranslationKey) || getTranslation('status_main_title_operational'); Cache.statusBox.title.dataset.translateKey = titleTranslationKey;
        }
        if (Cache.statusBox.lastUpdateEl) { try { Cache.statusBox.lastUpdateEl.textContent = simulatedStatus.lastUpdated.toLocaleString(state.currentLang || 'en-US', { dateStyle: 'medium', timeStyle: 'short' }); } catch (e) { Cache.statusBox.lastUpdateEl.textContent = simulatedStatus.lastUpdated.toLocaleDateString(); } }
        if (Cache.statusBox.list) {
             Cache.statusBox.list.innerHTML = ''; simulatedStatus.services.forEach(service => {
                 const li = document.createElement('li'); li.className = 'status-item'; const nameSpan = document.createElement('span'); nameSpan.className = 'status-item-name'; nameSpan.dataset.translateKey = service.nameKey; nameSpan.textContent = getTranslation(service.nameKey);
                 const valueSpan = document.createElement('span'); const statusKey = `status_${service.status}`; valueSpan.className = `status-item-value ${service.status}`; valueSpan.dataset.translateKey = statusKey; valueSpan.textContent = getTranslation(statusKey);
                 li.appendChild(nameSpan); li.appendChild(valueSpan); Cache.statusBox.list.appendChild(li);
             });
         } else {
            const serviceItems = Cache.statusBox.container?.querySelectorAll('.status-item');
            serviceItems?.forEach(item => {
                 const nameEl = item.querySelector('.status-item-name'); const valueEl = item.querySelector('.status-item-value'); if (!nameEl || !valueEl) return;
                 const nameKey = nameEl.dataset.translateKey; const serviceData = simulatedStatus.services.find(s => s.nameKey === nameKey);
                 if (serviceData) { const statusKey = `status_${serviceData.status}`; valueEl.textContent = getTranslation(statusKey); valueEl.className = `status-item-value ${serviceData.status}`; valueEl.dataset.translateKey = statusKey; } else { valueEl.textContent = 'Unknown'; valueEl.className = 'status-item-value unknown'; delete valueEl.dataset.translateKey; }
                 nameEl.textContent = getTranslation(nameKey);
             });
        }
    };

    const setupEventListeners = () => {
        Cache.lang.buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', () => { state.scrollbarWidth = getScrollbarWidth(); Cache.html.style.setProperty('--scrollbar-width', `${state.scrollbarWidth}px`); updateActiveLink(); hideDotNavTooltip(); }, { passive: true });
        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        if (Cache.modal.element) { Cache.modal.element.addEventListener('mousemove', handleModalMouseMove, { passive: true }); Cache.modal.element.addEventListener('mouseleave', handleModalMouseLeave); }
        Cache.nav.links.forEach(anchor => anchor.addEventListener('click', handleNavLinkClick));
        if (Cache.nav.burger) Cache.nav.burger.addEventListener('click', toggleNav);
        document.addEventListener('click', closeNavOnClickOutside); document.addEventListener('keydown', handleKeyDown);
        Cache.productButtons.forEach(button => button.addEventListener('click', handleBuyButtonClick));
        if (Cache.modal.closeBtn) Cache.modal.closeBtn.addEventListener('click', closeModal);
        if (Cache.modal.overlay) Cache.modal.overlay.addEventListener('click', (e) => { if (e.target === Cache.modal.overlay) { closeModal(); } });
        if (Cache.termsLink) { Cache.termsLink.addEventListener('click', (e) => { e.preventDefault(); showTermsModal(); }); }
        Cache.faqItems.forEach(item => { const button = item.querySelector('.faq-question'); button?.addEventListener('click', () => toggleFaqItem(button)); });
        Cache.statusBox.header?.addEventListener('click', toggleStatusBox);
    };

    const initialize = () => {
        Cache.body.classList.add('preload');
        state.scrollbarWidth = getScrollbarWidth();
        Cache.html.style.setProperty('--scrollbar-width', `${state.scrollbarWidth}px`);
        let preferredLang = 'ru';
        try { const storedLang = localStorage.getItem('preferredLang'); const browserLang = navigator.language?.substring(0, 2); if (storedLang && translations[storedLang]) { preferredLang = storedLang; } else if (browserLang && translations[browserLang]) { preferredLang = browserLang; } } catch (e) {}
        setLanguage(preferredLang);
        setupEventListeners();
        initScrollAnimations(); initLoadAnimations(); initCardTilt(); fetchAndUpdateStatus();
        handleScroll(); updateActiveLink();
        setTimeout(() => Cache.body.classList.remove('preload'), 150);
    };

    initialize();
});