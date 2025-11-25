document.getElementById('year').textContent = new Date().getFullYear();

    const translations = {
      zh: { 'header.subtitle':'低价区·折扣·余额', 
      // 导航栏
      'nav.projects':'主要项目',
      'nav.support':'支持',
      // main
      'main.s1.title': '致所有玩家的一封信',
        'main.s1.p1': '亲爱的玩家们，',
        'main.s1.p2': '你是否曾因Steam国区高昂的定价而对心仪的游戏望而却步？\n你是否曾为抢不到绝版游戏或特定区域限定内容而懊恼不已？\n你是否觉得注册外区账号流程繁琐，充满未知风险？',
        'main.s1.p3': '我们，GameGlobal，完全理解你的烦恼！我们是一群由资深游戏玩家组成的团队，我们的使命就是打破地域与价格的壁垒，让每一位玩家都能以最实惠的价格、最便捷的方式，享受到全球游戏的乐趣。',
        'main.s2.title': '我们为您提供什么？',
        'main.s2.p1': '我们致力于打造一个一站式、安全可靠的Steam全球游戏服务平台。',
        'main.s2.s1.title': '1. 全球礼物代购 - 用最低成本，玩最多游戏！',
        'main.s2.s1.p1': '核心优势：利用全球各区域的定价差异，为您从低价区购买游戏，并以Steam官方礼物的形式发送给您。价格远低于国区，省钱就是硬道理！',
        'main.s2.s1.p2': '安全保障：所有礼物均通过Steam官方渠道发送，来源清晰，绝无黑卡风险，保障您的账号安全。',
        'main.s2.s1.p3': '便捷流程：只需提供您的Steam个人资料链接，选择游戏，支付后坐等收礼即可！',
        'main.s2.s2.title': '2. 全球账号售卖 - 一步到位，畅游世界！',
        'main.s2.s2.p1': '账号多样：我们提供已稳定入驻多个区域的Steam账号。无论是为了购买低价游戏，还是体验区域限定内容，总有一款适合你。',
        'main.s2.s2.p2': '安全可靠：所有账号均经过我们严格筛选和培养，资料齐全，初始邮箱可更改，最大限度保障您的账号所有权和安全。',
        'main.s2.s2.p3': '即买即用：购买后您将获得完整的账号信息，无需等待，立即开始您的全球游戏之旅。',
        'main.s2.s3.title': '3. 账号代注册 - 专业的事，交给专业的人！',
        'main.s2.s3.p1': '省时省力：繁琐的跨区注册流程、复杂的网络环境要求、难以获取的当地支付方式……这些都交给我们！',
        'main.s2.s3.p2': '高成功率：我们拥有成熟的注册方案和资源，确保为您成功注册一个干净、稳定的外区Steam账号。',
        'main.s2.s3.p3': '个性化服务：您可以选择指定的区域，我们甚至可以协助您完成首次充值或购买。',
        'main.s2.s4.title': '4. 余额交易 - 灵活变现，智慧充值！',
        'main.s2.s4.p1': '余额来源：提供来自社区市场交易、Steam充值卡等多种渠道的Steam钱包余额。',
        'main.s2.s4.p2': '超值折扣：相比官方渠道，我们的余额充值通常享有诱人的折扣，让您的每一分钱都花在刀刃上。',
        'main.s2.s4.p3': '多种用途：充值后的余额可用于购买游戏、DLC、内购道具，或在社区市场购买皮肤、贴纸等，灵活又方便。',
        'main.s2.s5.title': '为什么选择我们？',
        'main.s2.s5.p1': '玩家之心：我们本身就是玩家，深刻理解您的需求和担忧，服务体验从玩家角度出发。',
        'main.s2.s5.p2': '极致安全：我们将用户账号安全置于首位，所有交易流程都经过精心设计，力求透明、可追溯。',
        'main.s2.s5.p3': '透明定价：价格公开透明，无隐藏费用。您可以在购买前清晰了解所有成本。',
        'main.s2.s5.p4': '专业客服：7x24小时在线客服团队，随时为您解答疑问，处理订单中遇到的任何问题。',
        'main.s2.s5.p5': '隐私保护：我们郑重承诺，绝不会泄露您的任何个人及账号信息。',
        'main.s2.s6.title': '风险与提示',
        'main.s2.s6.p1': '我们深知，跨区交易存在一定的政策风险。因此，我们强烈建议您：使用小号进行跨区购买和游玩是更稳妥的选择。请勿频繁切换账号区域或进行异常的大额交易，以免触发Steam的风控机制。我们所做的一切，都是在遵守Steam用户协议的前提下，为您提供信息和服务。我们鼓励每位玩家在享受服务的同时，了解并自行承担潜在风险。',
        'main.s2.s7.title': '立即行动！',
        'main.s2.s7.p1': '不要再让价格和地域限制您的游戏体验！前往 GameGlobal，发现一个全新的游戏世界。现在注册，即可领取新用户专属优惠券！',
      'footer.notice':'服务仅面向需要低价区购买的用户。请遵守当地法律与平台条款。',
      'footer.tos':'条款 & 隐私',
      // 下拉菜单
      'dropdown.steamBalance':'Steam余额',
      'dropdown.steamAccount':'Steam账号',
      'dropdown.steamRegister':'Steam代注册',
      'dropdown.steamGift':'Steam代购',
      'dropdown.contact':'联系客服',
      'dropdown.about':'关于我们',
      'dropdown.comingSoon':'即将推出'},
      en: { 'header.subtitle':'Low Price Zones · Discounts · Balance',
      // 导航栏
      'nav.projects':'Main Projects',
      'nav.support':'Support',
      // main
      'main.s1.title': 'A Letter to All Players',
        'main.s1.p1': 'Dear players,',
        'main.s1.p2': 'Have you ever been discouraged by the high prices in your region Steam store?\nHave you ever missed out on limited edition or regional content?\nDo you find registering foreign accounts complicated and risky?',
        'main.s1.p3': 'We at GameGlobal completely understand your concerns! We are a team of experienced gamers dedicated to breaking down regional and pricing barriers, allowing every player to enjoy games globally at the best price and most convenient way.',
        'main.s2.title': 'What Can We Offer?',
        'main.s2.p1': 'We are creating a safety GlobalSteam Platform',
        'main.s2.s1.title': '1. Global Gift Purchase - Lowest Cost, Maximum Games!',
        'main.s2.s1.p1': 'Core advantage: Utilizing pricing differences across regions, we purchase games from low-price zones and send them as official Steam gifts. Much cheaper than the local store, saving money is key!',
        'main.s2.s1.p2': 'Security: All gifts are sent via official Steam channels, with clear origin and no risk of black-market codes, ensuring account safety.',
        'main.s2.s1.p3': 'Convenience: Just provide your Steam profile link, choose your games, pay, and wait for the gifts!',
        'main.s2.s2.title': '2. Global Account Sales - Ready to Play Worldwide!',
        'main.s2.s2.p1': 'Variety: We offer Steam accounts registered in multiple regions. Whether for low-price games or region-exclusive content, there is one for everyone.',
        'main.s2.s2.p2': 'Reliability: All accounts are rigorously verified, information complete, initial emails can be changed, ensuring maximum account ownership and security.',
        'main.s2.s2.p3': 'Instant use: Receive full account details immediately and start your global gaming journey without delay.',
        'main.s2.s3.title': '3. Account Registration Service - Leave it to Professionals!',
        'main.s2.s3.p1': 'Time-saving: Complex cross-region registration processes, network requirements, and local payment limitations are all handled by us.',
        'main.s2.s3.p2': 'High success rate: We have mature registration solutions and resources to ensure a clean, stable foreign Steam account.',
        'main.s2.s3.p3': 'Personalization: You can select the region, and we can assist with initial recharge or purchases.',
        'main.s2.s4.title': '4. Balance Trading - Flexible and Smart Recharge!',
        'main.s2.s4.p1': 'Sources: Steam Wallet balances from market trades, Steam gift cards, and other channels.',
        'main.s2.s4.p2': 'Discounts: Compared with official channels, balance top-ups often enjoy attractive discounts.',
        'main.s2.s4.p3': 'Multiple uses: Use balance for games, DLC, in-game items, or market purchases, flexible and convenient.',
        'main.s2.s5.title': 'Why Choose Us?',
        'main.s2.s5.p1': 'We are players ourselves and deeply understand your needs and concerns.',
        'main.s2.s5.p2': 'Maximum security: Account safety is our priority, all processes are transparent and traceable.',
        'main.s2.s5.p3': 'Transparent pricing: All costs are clear before purchase.',
        'main.s2.s5.p4': 'Professional support: 24/7 customer service team available.',
        'main.s2.s5.p5': 'Privacy: We never leak personal or account information.',
        'main.s2.s6.title': 'Risks and Tips',
        'main.s2.s6.p1': 'We are aware of potential policy risks. It is recommended to use a secondary account for cross-region purchases and avoid frequent account switching or large unusual transactions.',
        'main.s2.s7.title': 'Act Now!',
        'main.s2.s7.p1': 'Don’t let price and region limit your gaming! Visit GameGlobal and explore a new world of games. Register now to receive a special new user coupon!',

      'footer.notice':'Services are intended only for users needing low-price zone purchases. Please comply with local laws and platform terms.',
      'footer.tos':'Terms & Privacy',
      // 下拉菜单
      'dropdown.steamBalance':'Steam Balance',
      'dropdown.steamAccount':'Steam Account',
      'dropdown.steamRegister':'Steam Registration',
      'dropdown.steamGift':'Steam Gift',
      'dropdown.contact':'Contact',
      'dropdown.about':'About',
      'dropdown.comingSoon':'Coming Soon'},
      es: { 'header.subtitle':'Zonas de bajo precio · Descuentos · Saldo',
      // 导航栏
      'nav.projects':'Proyectos',
      'nav.support':'Soporte',
      'main.intro':'SteamTrick ofrece a los jugadores de todo el mundo registro de cuentas, compra de regalos y servicios de saldo en zonas de bajo precio.',
      'footer.notice':'Los servicios están destinados solo a usuarios que necesitan compras en zonas de bajo precio. Cumpla con las leyes locales y los términos de la plataforma.',
      'footer.tos':'Términos & Privacidad',
      // 下拉菜单
      'dropdown.steamBalance':'Saldo Steam',
      'dropdown.steamAccount':'Cuenta Steam',
      'dropdown.steamRegister':'Registro Steam',
      'dropdown.steamGift':'Regalo Steam',
      'dropdown.contact':'Contacto',
      'dropdown.about':'Acerca de',
      'dropdown.comingSoon':'Próximamente'},
      ja: { 'header.subtitle':'低価格ゾーン・割引・残高',

      'nav.projects':'主なプロジェクト',
      'nav.support':'サポート',

      'main.intro':'SteamTrick は世界中のプレイヤーに低価格ゾーンのアカウント登録、ギフト購入、残高取引サービスを提供します。',

      'footer.notice':'サービスは低価格ゾーンの購入が必要なユーザーのみを対象としています。現地の法律およびプラットフォーム規約を遵守してください。',
      'footer.tos':'利用規約 & プライバシー',

      'dropdown.steamBalance':'Steam残高',
      'dropdown.steamAccount':'Steamアカウント',
      'dropdown.steamRegister':'Steam登録',
      'dropdown.steamGift':'Steamギフト',
      'dropdown.contact':'お問い合わせ',
      'dropdown.about':'会社概要','dropdown.comingSoon':'近日公開'},
      fr: { 'header.subtitle':'Zones à bas prix · Remises · Solde',

      'nav.projects':'Projets principaux',
      'nav.support':'Support',

      'main.intro':'SteamTrick fournit aux joueurs du monde entier l’enregistrement de comptes, l’achat de cadeaux et les services de solde dans les zones à bas prix.',

      'footer.notice':'Les services sont destinés uniquement aux utilisateurs ayant besoin d’achats dans les zones à bas prix. Veuillez respecter les lois locales et les conditions de la plateforme.',
      'footer.tos':'Conditions & Confidentialité',

      'dropdown.steamBalance':'Solde Steam',
      'dropdown.steamAccount':'Compte Steam',
      'dropdown.steamRegister':'Inscription Steam',
      'dropdown.steamGift':'Cadeau Steam',
      'dropdown.contact':'Contact',
      'dropdown.about':'À propos',
      'dropdown.comingSoon':'Bientôt'},
      de: { 'header.subtitle':'Niedrigpreis-Zonen · Rabatte · Guthaben',

      'nav.projects':'Hauptprojekte',
      'nav.support':'Unterstützung',

      'main.intro':'SteamTrick bietet Spielern weltweit Konto-Registrierung, Geschenk-Käufe und Guthabenhandel in Niedrigpreis-Zonen.',

      'footer.notice':'Die Dienste richten sich nur an Benutzer, die Käufe in Niedrigpreis-Zonen benötigen. Bitte halten Sie sich an die lokalen Gesetze und Plattformbedingungen.',
      'footer.tos':'AGB & Datenschutz','dropdown.steamBalance':'Steam Guthaben',

      'dropdown.steamAccount':'Steam Konto',
      'dropdown.steamRegister':'Steam Registrierung',
      'dropdown.steamGift':'Steam Geschenk',
      'dropdown.contact':'Kontakt',
      'dropdown.about':'Über uns',
      'dropdown.comingSoon':'Bald verfügbar'},
      hi: { 'header.subtitle':'कम मूल्य क्षेत्र · छूट · बैलेंस',

      'nav.projects':'मुख्य परियोजनाएं', 'nav.support':'सहायता',

      'main.intro':'SteamTrick वैश्विक खिलाड़ियों को कम मूल्य क्षेत्र खाता पंजीकरण, उपहार खरीद और बैलेंस ट्रेडिंग सेवाएँ प्रदान करता है।',

      'footer.notice':'सेवाएं केवल उन उपयोगकर्ताओं के लिए हैं जिन्हें कम मूल्य क्षेत्र की खरीद की आवश्यकता है। कृपया स्थानीय कानूनों और प्लेटफ़ॉर्म शर्तों का पालन करें।',
      'footer.tos':'नियम & गोपनीयता',

      'dropdown.steamBalance':'Steam बैलेंस',
      'dropdown.steamAccount':'Steam खाता',
      'dropdown.steamRegister':'Steam पंजीकरण',
      'dropdown.steamGift':'Steam गिफ्ट',
      'dropdown.contact':'संपर्क करें',
      'dropdown.about':'हमारे बारे में',
      'dropdown.comingSoon':'जल्द आ रहा है'},
      pt: { 'header.subtitle':'Zonas de baixo preço · Descontos · Saldo',

      'nav.projects':'Principais Projetos',
      'nav.support':'Suporte',

      'main.intro':'SteamTrick fornece aos jogadores de todo o mundo registro de contas, compra de presentes e serviços de saldo em zonas de baixo preço.',

      'footer.notice':'Os serviços destinam-se apenas a usuários que precisam de compras em zonas de baixo preço. Por favor, cumpra as leis locais e os termos da plataforma.',
      'footer.tos':'Termos & Privacidade',

      'dropdown.steamBalance':'Saldo Steam',
      'dropdown.steamAccount':'Conta Steam',
      'dropdown.steamRegister':'Registro Steam',
      'dropdown.steamGift':'Presente Steam',
      'dropdown.contact':'Contato','dropdown.about':'Sobre',
      'dropdown.comingSoon':'Em breve'},
      ru: { 'header.subtitle':'Зоны низких цен · Скидки · Баланс',

      'nav.projects':'Основные проекты',
      'nav.support':'Поддержка',

      'main.intro':'SteamTrick предоставляет игрокам по всему миру регистрацию аккаунтов, покупку подарков и торговлю балансом в зонах низких цен.',

      'footer.notice':'Сервисы предназначены только для пользователей, которым нужны покупки в зонах низких цен. Пожалуйста, соблюдайте местные законы и условия платформы.',
      'footer.tos':'Условия & Конфиденциальность',

      'dropdown.steamBalance':'Баланс Steam',
      'dropdown.steamAccount':'Аккаунт Steam',
      'dropdown.steamRegister':'Регистрация Steam',
      'dropdown.steamGift':'Подарок Steam',
      'dropdown.contact':'Связаться',
      'dropdown.about':'О нас',
      'dropdown.comingSoon':'Скоро'}
    };

    const elements = document.querySelectorAll('[data-i18n]');
    const langSelect = document.getElementById('lang');

    function updateLanguage(lang){
      elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang] && translations[lang][key]){
          el.textContent = translations[lang][key];
        }
      });
    }

    langSelect.addEventListener('change', e => {
      updateLanguage(e.target.value);
    });

    updateLanguage(langSelect.value);