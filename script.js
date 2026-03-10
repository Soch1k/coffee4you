// Language Switcher
const translations = {
    ua: {
        nav_home: "Головна",
        nav_menu: "Меню",
        nav_about: "Про нас",
        nav_contact: "Контакти",
        btn_login: "Увійти",
        hero_subtitle: "Зерна, виплекані з любов'ю до природи",
        hero_span: "Точність у кожному проливі",
        hero_desc: "Ми створили місце, де неонове світло зустрічається з ароматом свіжообсмажених зерен. Тут немає нічого зайвого — тільки ти, твоя улюблена кава та затишок, що надихає. Наша місія проста: робити якісну каву доступною для кожного, хто цінує справжній смак.",
        why_us_title: "✨ Чому ми?",
        why_us_1: "• Тільки добірне зерно.",
        why_us_2: "• Атмосфера, в яку хочеться повертатися.",
        why_us_3: "• Кава, зроблена саме для тебе.",
        welcome_text: "Чекаємо на твій візит!",
        hero_btn_1: "Наші купажі",
        hero_btn_2: "Завітати до нас",
        menu_subtitle: "Наші пропозиції",
        menu_title: "Кожен ковток — історія, кожен шматочок — насолода.",
        menu_desc: "Відкрийте для себе наші фірмові суміші",
        desc_cappuccino: "Відчуйте справжню невагомість з кожним ковтком. Наш Velvet Cloud Cappuccino — це симфонія ніжності...",
        desc_espresso: "Чорний Алмаз — це концентрована енергія у твоїй чашці. Ми використовуємо зерна темного обсмажування з високогір’їв Гватемали, які дарують напою густу текстуру та насичений профіль з нотками гіркого шоколаду та обвугленого дерева. Особливість цього еспресо — у його фінальному штриху: ми додаємо краплю активованого вугілля для досягнення магічного глибокого чорного кольору та прикрашаємо поверхню кристалом льодяникового цукру, що сяє, наче справжній діамант.",
        desc_latte: "Це більше, ніж просто напій, це досвід. Ми поєднали оксамитовий подвійний еспресо з нашої власної суміші зерна та ніжне вівсяне молоко, збите до стану хмаринки. Справжня магія криється в секретному інгредієнті: крафтовому сиропі на основі копченої карамелі та дрібці харчового золота, що мерехтить у кожному ковтку. Завершує композицію легкий пил цейлонської кориці.",
        add_btn: "Додати",
        footer_about_h3: "Про нас",
        footer_about_text: "Ми не просто готуємо каву, ми досліджуємо її потенціал. Кожне зерно в нашому закладі проходить ретельний відбір, від високогірних плантацій до вашої чашки. Завдяки точності в кожному проливі та професійному обладнанню, ми розкриваємо справжній профіль смаку: від шоколадних ноток Гватемали до фруктової яскравості Ефіопії. Наша місія — зробити преміальну каву доступною та зрозумілою для кожного.",
        copy: "© 2026 Coffee4You Coffee Roasters. Всі права захищені.",
        footer_quick_links: "Швидкі посилання",
        link_recipes: "Рецепти",
        link_guides: "Гайди з заварювання",
        link_sustainability: "Екологічність",
        link_wholesale: "Опт",
        footer_contact_title: "Зв'яжіться з нами",
        contact_address: "Церковна, 10, Чернівці, 58000",
        work_days: "Понеділок - П'ятниця",
        work_sat: "Субота",
        tag_bestseller: "ХІТ ПРОДАЖІВ",
        tag_new: "НОВИНКА",
        label_password: "Пароль",
        btn_submit_login: "Увійти",
        link_forgot: "Забули пароль?",
        btn_register: "Реєстрація",
        label_name: "Ім'я",
        label_surname: "Прізвище",
        label_country: "Країна",
        country_select: "Виберіть країну",
        error_email_invalid: "Некоректний Email",
        error_password_invalid: "Неправильний пароль",
        error_email_login: "Введіть коректний Email",
        error_password_login: "Введіть пароль",
        error_required: "Обов'язкове поле",
        error_country: "Оберіть країну",
        cart_empty: "Кошик порожній",
        cart_total: "Всього:",
        btn_checkout: "Оформити замовлення",
        cart_title: "Кошик",
        order_success_title: "Дякуємо!",
        order_success_msg: "Ваше замовлення прийнято.",
        order_status: "Ми вже почали готувати вашу каву.",
        btn_close_success: "Чудово!",
        processing_order_text: "Готуємо вашу каву та пакуємо замовлення...",
        order_success_title: "Смачна новина!",
        order_success_msg: "Ваше замовлення успішно прийнято! Наші бариста вже чаклують над вашою кавою.",
        order_status: "Очікуйте сповіщення з деталями доставки. Дякуємо, що обрали нас!",
        btn_close_success: "Супер!",
        btn_clear_cart: "🗑️Видалити все з кошика",
        confirm_clear: "Ви впевнені, що хочете видалити всі товари з кошика?",
        order_status_title:"Статус замовлення: ПІДТВЕРДЖЕНО",
        btn_close_success: "Смачного!",
        desc_spiced_cold_brew: "Цитрусовий Колд Брю — енергія холодного ранку, витримана протягом 12 годин. Цей напій готується методом повільної екстракції, що розкриває справжню душу кавового зерна без жодної гіркоти. Ми додали до нього ефірні олії свіжої помаранчевої цедри та легку пряність кориці. Подається з льодом у скляній пляшці, зберігаючи кожну нотку прохолоди та свіжості для вашого ідеального дня.",
        desc_lavender_raf: "Лавандовий Раф — це ніжний шепіт прованських полів у вашій чашці. Ми створили цей напій для тих, хто цінує спокій та витонченість. Секрет криється в особливому поєднанні густих вершків, подвійного еспресо та натурального лавандового цукру. Напій вінчає повітряна пінка відтінку вечірнього неба, прикрашена тендітною гілочкою сухоцвіту лаванди. Кожен ковток — це м'яка подорож у світ гармонії та квіткового аромату.",
        desc_spiced_cold_brew: "Цитрусовий Колд Брю — енергія холодного ранку, витримана протягом 12 годин. Цей напій готується методом повільної екстракції, що розкриває справжню душу кавового зерна без жодної гіркоти. Ми додали до нього ефірні олії свіжої помаранчевої цедри та легку пряність кориці. Подається з льодом у скляній пляшці, зберігаючи кожну нотку прохолоди та свіжості для вашого ідеального дня.",
        desc_turkish_night: "Кава по-східному — магія традицій, втілена в металі та піску. Цей напій готується за старовинним рецептом у мідній джезві, що дозволяє отримати неймовірно щільну та стійку пінку. Глибокий, майже містичний аромат спецій — кардамону та бадьяну — наповнює кожен ковток східною казкою. Подається з шматочком автентичного рахат-лукуму, щоб ви могли відчути справжню гостинність Сходу.",
        desc_pistachio_latte: "Фісташковий Лате — справжній ювелірний виріб серед кавових напоїв. У основі лежить оксамитовий лате, доповнений авторською пастою з добірних фісташок, що надає напою шляхетного смаку з легким горіховим відтінком. Поверхня вкрита глянцевою пінкою, щедро присипаною подрібненим смарагдовим горіхом. Це вибір для справжніх гурманів, які шукають ідеальний баланс між солодкістю та насиченістю.",
        desc_rosemary_latte: "Розмариновий Медовий Лате — це несподіване, але гармонійне поєднання солодкого та трав'яного. Цей напій розкриває всю ніжність класичного лате, доповненого легким квітковим медом та витонченою ноткою розмарину. Авторський сироп на основі свіжого розмарину надає йому особливої свіжості та глибини. Напій прикрашений пишною молочною пінкою та ніжною гілочкою ароматного розмарину, що запрошує вас до насолоди.",
        desc_rose_pistachio: "Колд Брю з Рожевою Водою та Фісташковою Піною — це розкішне поєднання Сходу та сучасності. Основою є наш фірмовий Колд Брю, який повільно екстрагується для отримання неймовірно м'якого смаку. Зверху напій увінчаний повітряною та шовковистою піною, збагаченою натуральною рожевою водою та ніжним фісташковим пюре.",
        desc_opal_cloud: "Ніжний лате з блакитною матчею, що створює ефект перламутрових переливів. Збите кокосове молоко посипане пилком їстівного срібла, що нагадує сяйво благородного опала.",
        title_emerald_dew: "Emerald Dew",
        desc_emerald_dew: "Холодний колд-брю, настояний на листі м’яти. Особливість напою — кубики льоду з додаванням хлорофілу, які яскраво світяться зеленим на фоні темної кави.",
        desc_moonstone_flat_white: "Флет-вайт на вівсяному молоці з дрібкою кардамону. На поверхні — малюнок лате-арту з краплею білої глазурі, що створює м’яке блакитне сяйво місячного каменю.",
        desc_sapphire_mocha: "Холодний мокко з білим шоколадом та анчаном. При перемішуванні напій змінює колір від глибокого синього до фіолетового, нагадуючи гру світла в сапфірі.",
        desc_copper_canyon: "Кава зварена з паленою карамеллю та сіллю. Має густу руду піну з металевим блиском, подається з паличкою кориці.",
        desc_inca_gold: "Пряне раф-каво з куркумою та медом. Напій має насичений золотий колір, а зверху прикрашається пелюсткою їстівного 24-каратного золота.",
        desc_ruby_velvet: "Вибухове поєднання подвійного еспресо та гранатового нектару. Напій має глибокий винний відтінок, а на поверхні виблискують зерна граната, наче неогранені рубіни.",
        desc_amber_sunrise: "Теплий, як перші промені сонця, цей лонг-блек поєднує ефіопську арабіку та натуральний сироп із пелюсток троянди. На дні чаші спочиває «бурштин» — карамелізований шматочок кумквата, що віддає цитрусову кислинку.",
        section_coffee_title: "Світ добірної кави",
        section_coffee_desc: "Від класичного еспресо до ексклюзивних лотів із золотом. Наші бариста знають секрет ідеального проливу.",
        section_coffee_btn: "Перейти до кави",
        section_tea_title: "Чай & Матча",
        section_tea_desc: "Відкрийте для себе анчан, преміальну маття та авторські чаї, що змінюють колір та настрій.",
        section_tea_btn: "Дивитись чаї",
        section_bakery_title: "Свіжа випічка щоранку",
        section_bakery_desc: "Хрусткі круасани, ніжні десерти та крафтовий хліб, що ідеально доповнюють вашу улюблену каву.",
        section_bakery_btn: "Обрати смаколик",
        desc_smoked_americano: "Копчений Кардамоновий Амерікано — це брутальний і водночас витончений напій для справжніх поціновувачів кави. Ми використовуємо спеціально обсмажені зерна, які надають каві легкого димного аромату, що ідеально поєднується з теплими, пряними нотками зеленого кардамону. Цей Амерікано готується класичним способом, зберігаючи насиченість та чистоту смаку, але доповнюється неповторним післясмаком. Подається з зернами кардамону, що підкреслюють його східний характер.",
        category_coffee_title: "Авторська кава",
        category_tea_title: "Чай & Матча",
        category_bakery_title: "Свіжа крафтова випічка",
        category_coffee_desc: "Від класичного еспресо до авторських напоїв на основі добірних зерен арабіки.",
        category_tea_desc: "Церемоніальна матча та ароматні купажі листового чаю для вашої гармонії.",
        category_bakery_desc: "Свіжоспечені круасани та десерти, що ідеально доповнюють вашу каву.",
        btn_open_menu: "Відкрити меню",
        desc_liquid_mica: "Ультрасвітлий білий чай, зібраний до першої роси, що проходить крізь фільтрацію сріблом. Ми додаємо екстракт білої смородини для прозорої кислинки та дрібні фракції харчового перламутру. Напій переливається в чашці холодним металевим блиском, нагадуючи розплавлене срібло, а на поверхні плаває одна ідеально біла пелюстка жасмину.",
        desc_frozen_magma: "Копчений червоний чай Сяо Чжун, витриманий над вогнем з вишневих дров. Глибокий теракотовий колір з маслянистим відблиском. У центрі — сфера з карамелізованого цукру з чилі, яка при розчиненні перетворює напій на густий потік розпеченої лави з пікантним характером.",
        desc_jade_abyss: "Концентрат пресованої матчі вищого сорту з сиропом із соснових шишок. Напій кольору лісового моху з текстурою лікеру. Поверхня вкрита бамбуковим вугіллям, що створює ефект оксамитової темряви, крізь яку пробивається яскраво-зелена серцевина.",
        desc_copper_tide: "Міцний асам, настояний на обвугленій паличці кориці та цедрі червоного апельсина. Насичений мідний колір з іржавим відтінком доповнюється солоною карамеллю, що створює на поверхні ефектні розводи, схожі на вечірні відблиски на воді, присипані мускатним горіхом.",
        desc_mercury_cloud: "Молочний улун, збитий у щільну холодну піну з кокосовим вугіллям, що нагадує грозову хмару. Поверхня вкрита їстівним срібним напиленням, створюючи ефект металевого дзеркала, яке розбивається при першому ковтку, відкриваючи ніжну вершкову основу.",
        desc_sakura_ash: "Зелений чай із квітами вишні, припорошений попелом із меленої чорної смородини. Блідо-рожевий напій, вкритий шаром сіро-чорного пилу, створює ефект згарища в саду. При перемішуванні попіл розчиняється, перетворюючи чай на глибокий темний пурпур.",
        desc_golden_resin: "Густий навар із гречаного чаю та дикого меду кольору паленого золота. Напій прикрашений ванільною паличкою в золотій поталі та квітковим пилком, що створює на поверхні ефект сонячного пилу в променях старого замку. Теплий, обволікаючий смак із нотками печива та меду.",
        desc_ruby_opium: "Сироп із каркаде, екстракт дамаської троянди та гранатовий сік створюють агресивний винний відтінок. На дні спочиває масивний кристал льодяникового цукру, що сяє зсередини чашки, наче живе рубінове серце. Напій з глибоким смаком та містичною візуалізацією.",
        desc_jade_cloud: "Класична церемоніальна матча, збита у густу молочну піну. Завдяки високому вмісту амінокислот, напій має природний солодкуватий присмак без цукру. Поверхня прикрашена мінімалістичною спіраллю з чистого порошку матчі, що символізує гармонію та спокій.",
        desc_emerald_lava: "Багатошаровий напій із контрастом температур та кольорів. На дні — густе холодне рослинне молоко, зверху — шар гарячої концентрованої матчі, що повільно стікає вниз, наче смарагдова лава. Подається з двома паличками хрусткого японського печива 'Pocky'.",
        bakery_knot_desc: "Це маніфест мінімалізму. Ми використовуємо ферментоване протягом 48 годин тісто з додаванням натурального бамбукового вугілля. Результат — глибокий матовий чорний колір, хрустка попеляста скоринка та неймовірно повітряний м’якуш. Зверху ми посипаємо вузол великими кристалами морської солі Maldon, що сяють, як зірки на нічному небі.",
        bakery_rye_ear_desc: "Груба випічка з житнього борошна та солоду, обкурена димом вільхи. Поверхня вкрита густим шаром смаженого чорного кунжуту та кмину. Це агресивна, майже первісна текстура з ароматом багаття та дикого поля.",
        bakery_quartz_rose_desc: "Круасан у формі бутона з кремом із рожевої води та лічі. Серцевина — малинове конфі, що виглядає як рідкий рубін при розрізі. Зверху вкритий глазур'ю, застиглою у формі гострих кристалів рожевого кварцу.",
        bakery_obsidian_capsule_desc: "Булочка, вкрита чорною 'землею' з дегідрованих маслин. Всередині — рідка начинка з темного шоколаду (80%) та пасти місо. При розрізі витікає густа, солоно-солодка шоколадна 'лава'.",
        bakery_emerald_cube_desc: "Геометричний куб із листкового тіста. Всередині — щільний мус із церемоніальної матчі та шар білого шоколаду. Зверху прикрашений ідеальною лінією з фісташкового праліне та пилком сушеного лайма.",
        bakery_amber_tear_desc: "Тісто філо, що нагадує зім’ятий шовк, з начинкою із запеченої в бурбоні груші. На вершині застигла велика крапля прозорої карамелі з гілочкою чебрецю всередині, що виглядає як коштовний викопний бурштин.",
        bakery_velvet_phantom_desc: "Тарталетка з какао-тіста з лавандовим курдом та чорничним мусом кольору ультрамарин. Зверху — одна ягода ожини, вкрита срібним кандурином, що створює ефект космічного об'єкта в темряві.",
        bakery_copper_cocoon_desc: "Випічка, загорнута в нитки тіста катаїфі, обсмажені до мідного блиску. Всередині — заварний крем із копченою паприкою та в’яленим манго. Естетика дорогоцінного артефакту з димним присмаком.",
        bakery_scorched_cloud_desc: "Сендвіч із двох дисків чорного печива та масивного шару маршмелоу з бергамотом. Краї білої піни обпалені до чорної карамелізованої сітки. Всередині захований рідкий центр із лимонного гелю.",


        bakery_saffron_spiral_desc: "Листкове тісто, просочене маслом, настояним на іранському шафрані. Інтенсивний золотий колір та ледь вловимий пряний аромат. Спіраль випечена до 'скляної' скоринки, яка розсипається від дотику, оголюючи волокнисту сонячну серцевину.",
        btn_back_to_categories: "Назад до категорій",
        country_au: "Австралія", country_at: "Австрія", country_az: "Азербайджан", country_al: "Албанія", country_dz: "Алжир", 
        country_ao: "Ангола", country_ad: "Андорра", country_at: "Антигуа і Барбуда", country_ar: "Аргентина", country_af: "Афганістан", 
        country_bs: "Багамські Острови", country_bd: "Бангладеш", country_bb: "Барбадос", country_bh: "Бахрейн", country_be: "Бельгія", 
        country_bz: "Беліз", country_bj: "Бенін", country_by: "Білорусь", country_bg: "Болгарія", country_bo: "Болівія", 
        country_ba: "Боснія і Герцеговина", country_bw: "Ботсвана", country_br: "Бразилія", country_bn: "Бруней", country_bf: "Буркіна-Фасо", 
        country_bi: "Бурунді", country_bt: "Бутан", country_vu: "Вануату", country_va: "Ватикан", country_gb: "Велика Британія", 
        country_ve: "Венесуела", country_vn: "В'єтнам", country_am: "Вірменія", country_ga: "Габон", country_ht: "Гаїті", 
        country_gy: "Гаяна", country_gm: "Гамбія", country_gh: "Гана", country_gd: "Гренада", country_gr: "Греція", 
        country_ge: "Грузія", country_gt: "Гватемала", country_gn: "Гвінея", country_gw: "Гвінея-Бісау", country_hn: "Гондурас", 
        country_dj: "Джибуті", country_dm: "Домініка", country_do: "Домініканська Республіка", country_ec: "Еквадор", country_gq: "Екваторіальна Гвінея", 
        country_er: "Еритрея", country_ee: "Естонія", country_et: "Ефіопія", country_eg: "Єгипет", country_ye: "Ємен", 
        country_il: "Ізраїль", country_in: "Індія", country_id: "Індонезія", country_iq: "Ірак", country_ir: "Іран", 
        country_ie: "Ірландія", country_is: "Ісландія", country_es: "Іспанія", country_it: "Італія", country_jo: "Йорданія", 
        country_cv: "Кабо-Верде", country_kz: "Казахстан", country_kh: "Камбоджа", country_cm: "Камерун", country_ca: "Канада", 
        country_qa: "Катар", country_ke: "Кенія", country_cy: "Кіпр", country_ki: "Кірибаті", country_cn: "Китай", 
        country_co: "Колумбія", country_km: "Коморські Острови", country_cg: "Конго", country_cr: "Коста-Рика", country_cu: "Куба", 
        country_kw: "Кувейт", country_kg: "Киргизстан", country_la: "Лаос", country_lv: "Латвія", country_ls: "Лесото", 
        country_lt: "Литва", country_lr: "Ліберія", country_lb: "Ліван", country_ly: "Лівія", country_li: "Ліхтенштейн", 
        country_lu: "Люксембург", country_mu: "Маврикій", country_mr: "Мавританія", country_mg: "Мадагаскар", country_mw: "Малаві", 
        country_my: "Малайзія", country_ml: "Малі", country_mv: "Мальдіви", country_mt: "Мальта", country_ma: "Марокко", 
        country_mh: "Маршаллові Острови", country_mx: "Мексика", country_fm: "Мікронезія", country_md: "Молдова", country_mc: "Монако", 
        country_mn: "Монголія", country_me: "Монтенегро", country_mz: "Мозамбік", country_mm: "М'янма", country_na: "Намібія", 
        country_nr: "Науру", country_np: "Непал", country_ne: "Нігер", country_ng: "Нігерія", country_nl: "Нідерланди", 
        country_ni: "Нікарагуа", country_de: "Німеччина", country_no: "Норвегія", country_nz: "Нова Зеландія", country_ae: "ОАЕ", 
        country_om: "Оман", country_pk: "Пакистан", country_pw: "Палау", country_pa: "Панама", country_pg: "Папуа-Нова Гвінея", 
        country_py: "Парагвай", country_pe: "Перу", country_kp: "Північна Корея", country_mk: "Північна Македонія", country_pl: "Польща", 
        country_pt: "Португалія", country_kr: "Південна Корея", country_za: "ПАР", country_ss: "Південний Судан", country_ru: "Росія", 
        country_rw: "Руанда", country_ro: "Румунія", country_sv: "Сальвадор", country_ws: "Самоа", country_sm: "Сан-Марино", 
        country_st: "Сан-Томе і Принсіпі", country_sa: "Саудівська Аравія", country_sz: "Есватіні", country_sc: "Сейшельські Острови", country_sn: "Сенегал", 
        country_vc: "Сент-Вінсент і Гренадини", country_kn: "Сент-Кіттс і Невіс", country_lc: "Сент-Люсія", country_rs: "Сербія", country_sg: "Сінгапур", 
        country_sy: "Сирія", country_sk: "Словаччина", country_si: "Словенія", country_sb: "Соломонові Острови", country_so: "Сомалі", 
        country_us: "США", country_sd: "Судан", country_sr: "Суринам", country_sl: "Сьєрра-Леоне", country_tj: "Таджикистан", 
        country_th: "Таїланд", country_tw: "Тайвань", country_tz: "Танзанія", country_tg: "Того", country_to: "Тонга", 
        country_tt: "Тринідад і Тобаго", country_tv: "Тувалу", country_tn: "Туніс", country_tr: "Туреччина", country_tm: "Туркменістан", 
        country_ug: "Уганда", country_hu: "Угорщина", country_uz: "Узбекистан", country_ua: "Україна", country_uy: "Уругвай", 
        country_fj: "Фіджі", country_ph: "Філіппіни", country_fi: "Фінляндія", country_fr: "Франція", country_hr: "Хорватія", 
        country_cf: "ЦАР", country_td: "Чад", country_cz: "Чехія", country_cl: "Чилі", country_ch: "Швейцарія", 
        country_se: "Швеція", country_lk: "Шрі-Ланка", country_jm: "Ямайка", country_jp: "Японія"
    },
    en: {
        nav_home: "Home",
        nav_menu: "Menu",
        nav_about: "About Us",
        nav_contact: "Contacts",
        btn_login: "Login",
        cart_empty: "Cart is empty",
        hero_subtitle: "Beans nurtured with love for nature",
        hero_span: "Precision in every pour",
        hero_desc: "We created a place where neon light meets the aroma of freshly roasted beans. There's nothing extra here — only you, your favorite coffee, and inspiring comfort. Our mission is simple: making quality coffee accessible to everyone who values true taste.",
        why_us_title: "✨ Why us?",
        why_us_1: "• Only selected beans.",
        why_us_2: "• An atmosphere you want to return to.",
        why_us_3: "• Coffee made just for you.",
        welcome_text: "Looking forward to your visit!",
        hero_btn_1: "Explore Our Blends",
        hero_btn_2: "Visit Our Cafe",
        menu_subtitle: "Our Offers",
        menu_title: "Every sip is a story, every bite is a delight.",
        menu_desc: "Discover our signature blends",
        desc_cappuccino: "Feel true weightlessness with every sip. Our Velvet Cloud Cappuccino is a symphony of tenderness...",
        desc_espresso: "Black Diamond is concentrated energy in your cup. We use dark-roasted beans from the highlands of Guatemala, which give the drink a thick texture and a rich profile with notes of dark chocolate and charred wood. Special touch: we add a drop of activated charcoal for a magical deep black color and decorate the surface with a sugar crystal that shines like a diamond.",
        desc_latte: "This is more than just a drink, it's an experience. We've combined velvety double espresso with our own blend and silky oat milk whipped to a cloud-like consistency. The real magic lies in the secret ingredient: craft smoked caramel syrup and a pinch of edible gold shimmering in every sip. Finished with a dusting of Ceylon cinnamon.",
        add_btn: "Add",
        footer_about_h3: "About Us",
        footer_about_text: "We don't just brew coffee; we explore its potential. Every bean in our shop undergoes a careful selection process, from high-altitude plantations to your cup. With precision in every pour and professional equipment, we reveal the true flavor profile: from the chocolate notes of Guatemala to the fruity brightness of Ethiopia.",
        copy: "© 2026 Coffee4You Coffee Roasters. All rights reserved.",
        footer_quick_links: "Quick Links",
        link_recipes: "Recipes",
        link_guides: "Brewing Guides",
        link_sustainability: "Sustainability",
        link_wholesale: "Wholesale",
        footer_contact_title: "Contact Us",
        contact_address: "10 Tserkovna St, Chernivtsi, 58000",
        work_days: "Monday - Friday",
        work_sat: "Saturday",
        tag_bestseller: "BESTSELLER",
        tag_new: "NEW",
        label_password: "Password",
        btn_submit_login: "Sign In",
        link_forgot: "Forgot password?",
        btn_register: "Sign Up",
        label_name: "Name",
        label_surname: "Surname",
        label_country: "Country",
        error_email_invalid: "Invalid Email",
        error_password_invalid: "Incorrect password",
        error_email_login: "Please enter a valid email",
        error_password_login: "Password is required",
        error_required: "Required field",
        country_select: "Choose a country",
        error_required: "Required",
        error_country: "Please select a country",
        error_country: "Select a country",
        cart_total: "Total:",
        btn_checkout: "Checkout",
        cart_title: "Cart",
        order_success_title: "Thank You!",
        order_success_msg: "Your order has been received.",
        order_status: "We've started preparing your coffee.",
        btn_close_success: "Great!",
        confirm_clear: "Are you sure you want to remove all items from the cart?",
        processing_order_text: "Brewing your coffee and packing your order...",
        order_success_title: "Delicious News!",
        order_success_msg: "Your order has been successfully placed! Our baristas are already working their magic.",
        order_status: "Expect a notification with delivery details soon. Thank you for choosing us!",
        btn_close_success: "Awesome!",
        btn_clear_cart: "🗑️Clear all from cart",
        order_status_title:"Order status: CONFIRMED",
        btn_close_success: "Enjoy your meal!!",
        section_coffee_title: "World of Selected Coffee",
        section_coffee_desc: "From classic espresso to exclusive lots with gold. Our baristas know the secret of the perfect pour.",
        section_coffee_btn: "Explore Coffee",
        section_tea_title: "Tea Ceremony",
        section_tea_desc: "Discover butterfly pea tea, premium matcha, and signature teas that change color and mood.",
        section_tea_btn: "View Teas",
        section_bakery_title: "Fresh Bakery Every Morning",
        section_bakery_desc: "Crispy croissants, delicate desserts, and craft bread that perfectly complement your favorite coffee.",
        section_bakery_btn: "Choose a Treat",
        category_coffee_title: "Coffee Artistry",
        category_tea_title: "Tea & Matcha",
        category_bakery_title: "Fresh craft pastries",
        category_coffee_desc: "From classic espresso to signature drinks based on selected Arabica beans.",
        category_tea_desc: "Ceremonial matcha and aromatic leaf tea blends for your inner harmony.",
        category_bakery_desc: "Freshly baked croissants and desserts that perfectly complement your coffee.",
        btn_open_menu: "Open Menu",
        btn_back_to_categories: "Back to Categories",
        desc_rose_pistachio: "Rosewater & Pistachio Cold Foam Cold Brew is a luxurious fusion of the Orient and modernity. The base is our signature Cold Brew, slowly extracted for an incredibly smooth taste. The drink is topped with an airy, silky foam enriched with natural rosewater and delicate pistachio puree.",
        desc_amber_sunrise: "Warm as the first rays of the sun, this long black combines Ethiopian Arabica with natural rose petal syrup. An 'amber'—a caramelized slice of kumquat—rests at the bottom, releasing its citrus zest.",
        desc_ruby_velvet: "An explosive combination of double espresso and pomegranate nectar. The drink has a deep wine hue, with pomegranate seeds shimmering on the surface like uncut rubies.",
        desc_opal_cloud: "A delicate latte with blue matcha, creating a pearlescent effect. Whipped coconut milk is sprinkled with edible silver dust, reminiscent of the glow of a noble opal.",
        desc_emerald_dew: "Chilled cold brew infused with mint leaves. The highlight of the drink is chlorophyll-infused ice cubes that glow bright green against the dark coffee background.",
        desc_moonstone_flat_white: "Oat milk flat white with a pinch of cardamom. On the surface — latte art with a drop of white glaze, creating the soft blue glow of a moonstone.",
        desc_inca_gold: "Spiced raf coffee with turmeric and honey. The drink has a rich golden color and is decorated on top with a petal of edible 24-karat gold.",
        desc_sapphire_mocha: "Iced mocha with white chocolate and butterfly pea flower tea. When stirred, the drink changes color from deep blue to purple, resembling the play of light in a sapphire.",
        desc_copper_canyon: "Coffee brewed with burnt caramel and salt. It features a thick reddish-orange foam with a metallic shimmer, served with a cinnamon stick.",
        desc_spiced_cold_brew: "Citrus Cold Brew is the energy of a cold morning, aged for 12 hours. This drink is prepared by a slow extraction method that reveals the true soul of the coffee bean without any bitterness. We added essential oils of fresh orange zest and a light cinnamon spice. Served with ice in a glass bottle, preserving every note of coolness and freshness for your perfect day.",
        desc_lavender_raf: "Lavender Raf is a gentle whisper of the Provencal fields in your cup. We created this drink for those who appreciate peace and sophistication. The secret lies in a special combination of thick cream, double espresso and natural lavender sugar. The drink is crowned with an airy foam in the shade of the evening sky, decorated with a delicate sprig of dried lavender flowers. Each sip is a gentle journey into the world of harmony and floral aroma.",
        desc_turkish_night: "Oriental coffee is the magic of traditions embodied in metal and sand. This drink is prepared according to an ancient recipe in a copper cezve, which allows for an incredibly dense and stable foam. A deep, almost mystical aroma of spices — cardamom and star anise — fills every sip with an Eastern tale. Served with a piece of authentic Turkish delight so you can feel the true hospitality of the East.",
        desc_pistachio_latte: "Emerald Pistachio Latte is a true piece of jewelry among coffee drinks. Based on a velvety latte, complemented by an original paste of selected pistachios, giving the drink a noble taste with a light nutty touch. The surface is covered with a glossy foam, generously sprinkled with crushed emerald nuts. It's the choice for true gourmets looking for the perfect balance between sweetness and richness.",
        desc_smoked_americano: "Smoked Cardamom Americano is a brutal and at the same time refined drink for true coffee lovers. We use specially roasted beans that give the coffee a light smoky aroma, perfectly combined with warm, spicy notes of green cardamom. This Americano is prepared in a classic way, maintaining richness and purity of taste, but complemented by a unique aftertaste. Served with cardamom pods that emphasize its oriental character.",
        desc_liquid_mica: "Ultra-light white tea harvested before the first dew and silver-filtered. We add white currant extract for transparent acidity and fine pearlescent particles. The drink shimmers with a cold metallic glow, resembling molten silver, with a single pristine jasmine petal floating on top.",
        desc_frozen_magma: "Smoked Xiao Zhong red tea, aged over a cherrywood fire. Deep terracotta color with an oily sheen. In the center — a caramelized sugar sphere with chili that, when dissolved, transforms the drink into a thick flow of molten lava with a spicy character.",
        desc_jade_abyss: "Premium pressed matcha concentrate blended with pine cone syrup. A forest moss-colored drink with a liqueur-like texture. The surface is veiled in bamboo charcoal, creating a velvet darkness through which the vibrant green core emerges.",
        desc_copper_tide: "Strong Assam tea infused with a charred cinnamon stick and blood orange zest. Rich copper color with a rusty tint, enhanced by a drop of salted caramel that creates oily, sunset-like swirls on the surface, dusted with nutmeg shavings.",
        desc_mercury_cloud: "Milk oolong whipped into a dense cold foam with coconut charcoal, resembling a heavy storm cloud. The surface is sprayed with edible silver, creating a metallic mirror effect that shatters upon the first sip, revealing a delicate creamy core.",
        desc_sakura_ash: "Green tea with dried cherry blossoms, dusted with powdered blackcurrant 'ash'. The pale pink drink is covered with a layer of grey-black dust, creating a burnt-garden effect. Upon stirring, the ash dissolves, turning the tea into a deep dark purple.",
        desc_golden_resin: "A thick brew of buckwheat tea and wild honey with the color of burnt gold. Garnished with a gold-leaf-covered vanilla bean and floral pollen, creating an effect of sunlit dust motes in an abandoned castle. A warm, enveloping taste with notes of biscuit and honey.",
        desc_ruby_opium: "Hibiscus syrup, Damascus rose extract, and pomegranate juice create an aggressive wine-ruby hue. At the bottom lies a massive rock sugar crystal, glowing from within like a beating ruby heart. A drink with deep flavor and mystical visualization.",
        desc_jade_cloud: "Classic ceremonial matcha whipped into a thick milk foam. Due to high amino acid content, the drink has a natural sweet aftertaste without added sugar. The surface features a minimalist spiral pattern of pure matcha powder, symbolizing harmony and peace.",
        desc_emerald_lava: "A multi-layered drink featuring a contrast of temperatures and colors. Chilled thick plant-based milk at the bottom is topped with a layer of hot concentrated matcha, slowly flowing down like emerald lava. Served with two sticks of crunchy Japanese 'Pocky' biscuits.",
        bakery_knot_desc: "It’s a manifesto of minimalism. We use a 48-hour fermented dough with natural bamboo charcoal. The result is a deep matte black color, a crispy ashy crust, and an incredibly airy crumb. On top, we sprinkle the knot with large crystals of Maldon sea salt that shine like stars in the night sky.",
        bakery_rye_ear_desc: "Coarse pastry made from rye flour and malt, smoked with alder wood. The surface is covered with a thick layer of toasted black sesame and cumin. An aggressive, almost primal texture with the aroma of a campfire.",
        bakery_quartz_rose_desc: "A bud-shaped croissant with rose water and lychee cream. The core is raspberry confit that looks like a liquid ruby when cut. Topped with glaze frozen in the shape of sharp rose quartz crystals.",
        bakery_obsidian_capsule_desc: "A bun covered in black 'soil' made of dehydrated olives. Inside is a liquid filling of dark chocolate (80%) and miso paste. When cut, a thick, salty-sweet chocolate 'lava' flows out.",
        bakery_emerald_cube_desc: "A geometric cube made of puff pastry. Inside is a dense ceremonial matcha mousse and a layer of white chocolate. Topped with a perfect line of pistachio praline and dried lime dust.",
        bakery_velvet_phantom_desc: "A cocoa pastry tartlet with lavender curd and ultramarine blueberry mousse. Topped with a single blackberry coated in silver luster dust, creating the effect of a cosmic object in the dark.",
        bakery_amber_tear_desc: "Phyllo dough resembling crumpled silk, filled with bourbon-baked pear. Topped with a large drop of clear caramel containing a sprig of thyme, looking like precious fossilized amber.",
        bakery_copper_cocoon_desc: "Pastry wrapped in kataifi dough threads, fried to a copper luster. Inside is a custard cream with smoked paprika and sun-dried mango. The aesthetics of a precious artifact with a smoky aftertaste.",
        bakery_scorched_cloud_desc: "A sandwich made of two black cookie discs and a massive layer of bergamot marshmallow. The edges of the white foam are scorched to a black caramelized mesh. A liquid lemon gel center is hidden inside.",


        bakery_saffron_spiral_desc: "Puff pastry soaked in butter infused with Iranian saffron. Intense golden color and a subtle spicy aroma. The spiral is baked to a 'glassy' crust that shatters on touch, revealing a fibrous sunny core.",
        desc_rosemary_latte: "Rosemary Honey Latte is an unexpected but harmonious combination of sweet and herbal. This drink reveals all the gentleness of a classic latte, complemented by light floral honey and a sophisticated hint of rosemary. The signature syrup based on fresh rosemary gives it special freshness and depth. The drink is decorated with lush milk foam and a delicate sprig of fragrant rosemary.",
        country_af: "Afghanistan", country_al: "Albania", country_dz: "Algeria", country_ad: "Andorra", country_ao: "Angola", 
        country_ar: "Argentina", country_am: "Armenia", country_au: "Australia", country_at: "Austria", country_az: "Azerbaijan", 
        country_bs: "Bahamas", country_bh: "Bahrain", country_bd: "Bangladesh", country_bb: "Barbados", country_by: "Belarus", 
        country_be: "Belgium", country_bz: "Belize", country_bj: "Benin", country_bt: "Bhutan", country_bo: "Bolivia", 
        country_ba: "Bosnia and Herzegovina", country_bw: "Botswana", country_br: "Brazil", country_bn: "Brunei", country_bg: "Bulgaria", 
        country_bf: "Burkina Faso", country_bi: "Burundi", country_kh: "Cambodia", country_cm: "Cameroon", country_ca: "Canada", 
        country_cv: "Cape Verde", country_cf: "Central African Republic", country_td: "Chad", country_cl: "Chile", country_cn: "China", 
        country_co: "Colombia", country_km: "Comoros", country_cg: "Congo", country_cr: "Costa Rica", country_hr: "Croatia", 
        country_cu: "Cuba", country_cy: "Cyprus", country_cz: "Czech Republic", country_dk: "Denmark", country_dj: "Djibouti", 
        country_dm: "Dominica", country_do: "Dominican Republic", country_ec: "Ecuador", country_eg: "Egypt", country_sv: "El Salvador", 
        country_gq: "Equatorial Guinea", country_er: "Eritrea", country_ee: "Estonia", country_et: "Ethiopia", country_fj: "Fiji", 
        country_fi: "Finland", country_fr: "France", country_ga: "Gabon", country_gm: "Gambia", country_ge: "Georgia", 
        country_de: "Germany", country_gh: "Ghana", country_gr: "Greece", country_gd: "Grenada", country_gt: "Guatemala", 
        country_gn: "Guinea", country_gw: "Guinea-Bissau", country_gy: "Guyana", country_ht: "Haiti", country_hn: "Honduras", 
        country_hu: "Hungary", country_is: "Iceland", country_in: "India", country_id: "Indonesia", country_ir: "Iran", 
        country_iq: "Iraq", country_ie: "Ireland", country_il: "Israel", country_it: "Italy", country_jm: "Jamaica", 
        country_jp: "Japan", country_jo: "Jordan", country_kz: "Kazakhstan", country_ke: "Kenya", country_ki: "Kiribati", 
        country_kp: "North Korea", country_kr: "South Korea", country_kw: "Kuwait", country_kg: "Kyrgyzstan", country_la: "Laos", 
        country_lv: "Latvia", country_lb: "Lebanon", country_ls: "Lesotho", country_lr: "Liberia", country_ly: "Libya", 
        country_li: "Liechtenstein", country_lt: "Lithuania", country_lu: "Luxembourg", country_mk: "North Macedonia", country_mg: "Madagascar", 
        country_mw: "Malawi", country_my: "Malaysia", country_mv: "Maldives", country_ml: "Mali", country_mt: "Malta", 
        country_mh: "Marshall Islands", country_mr: "Mauritania", country_mu: "Mauritius", country_mx: "Mexico", country_fm: "Micronesia", 
        country_md: "Moldova", country_mc: "Monaco", country_mn: "Mongolia", country_me: "Montenegro", country_ma: "Morocco", 
        country_mz: "Mozambique", country_mm: "Myanmar", country_na: "Namibia", country_nr: "Nauru", country_np: "Nepal", 
        country_nl: "Netherlands", country_nz: "New Zealand", country_ni: "Nicaragua", country_ne: "Niger", country_ng: "Nigeria", 
        country_no: "Norway", country_om: "Oman", country_pk: "Pakistan", country_pw: "Palau", country_pa: "Panama", 
        country_pg: "Papua New Guinea", country_py: "Paraguay", country_pe: "Peru", country_ph: "Philippines", country_pl: "Poland", 
        country_pt: "Portugal", country_qa: "Qatar", country_ro: "Romania", country_ru: "Russia", country_rw: "Rwanda", 
        country_kn: "Saint Kitts and Nevis", country_lc: "Saint Lucia", country_vc: "Saint Vincent", country_ws: "Samoa", country_sm: "San Marino", 
        country_st: "Sao Tome and Principe", country_sa: "Saudi Arabia", country_sn: "Senegal", country_rs: "Serbia", country_sc: "Seychelles", 
        country_sl: "Sierra Leone", country_sg: "Singapore", country_sk: "Slovakia", country_si: "Slovenia", country_sb: "Solomon Islands", 
        country_so: "Somalia", country_za: "South Africa", country_ss: "South Sudan", country_es: "Spain", country_lk: "Sri Lanka", 
        country_sd: "Sudan", country_sr: "Suriname", country_sz: "Eswatini", country_se: "Sweden", country_ch: "Switzerland", 
        country_sy: "Syria", country_tw: "Taiwan", country_tj: "Tajikistan", country_tz: "Tanzania", country_th: "Thailand", 
        country_tl: "Timor-Leste", country_tg: "Togo", country_to: "Tonga", country_tt: "Trinidad and Tobago", country_tn: "Tunisia", 
        country_tr: "Turkey", country_tm: "Turkmenistan", country_tv: "Tuvalu", country_ug: "Uganda", country_ua: "Ukraine", 
        country_ae: "United Arab Emirates", country_gb: "United Kingdom", country_us: "USA", country_uy: "Uruguay", country_uz: "Uzbekistan", 
        country_vu: "Vanuatu", country_va: "Vatican City", country_ve: "Venezuela", country_vn: "Vietnam", country_ye: "Yemen", 
        country_zm: "Zambia", country_zw: "Zimbabwe"
    }
};







// Login and Registration Modals
function updateAuthUI() {
    const loginBtn = document.getElementById('login-button');
    const regBtn = document.getElementById('register-button');
    const userProfile = document.getElementById('user-profile');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        if (loginBtn) loginBtn.style.display = 'none';
        if (regBtn) regBtn.style.display = 'none';
        if (userProfile) userProfile.style.display = 'block';
    } else {
        if (loginBtn) loginBtn.style.display = 'inline-block';
        if (regBtn) regBtn.style.display = 'inline-block';
        if (userProfile) userProfile.style.display = 'none';
    }
}


const loginModal = document.getElementById("loginModal");
const regModal = document.getElementById('registerModal');
const loginBtnTrigger = document.getElementById('login-button');
const regBtnTrigger = document.getElementById('register-button');
const closeLogin = document.getElementById("close-login");
const closeReg = document.getElementById('close-register');

loginBtnTrigger.onclick = (e) => { e.preventDefault(); loginModal.style.display = "block"; document.body.style.overflow = "hidden"; }
regBtnTrigger.onclick = (e) => { e.preventDefault(); regModal.style.display = "block"; document.body.style.overflow = "hidden"; }

[closeLogin, closeReg].forEach(btn => {
    if (btn) btn.onclick = () => {
        loginModal.style.display = "none";
        regModal.style.display = "none";
        document.body.style.overflow = "auto";
        resetFormErrors();
    }
});

window.onclick = (event) => {
    if (event.target == loginModal || event.target == regModal) {
        loginModal.style.display = "none";
        regModal.style.display = "none";
        document.body.style.overflow = "auto";
        resetFormErrors();
    }
}


function resetFormErrors() {
    document.querySelectorAll('.input-group input, .input-group select').forEach(input => {
        input.style.border = "1px solid #444";
        const error = input.parentElement.querySelector('.error-text');
        if (error) error.style.display = "none";
    });
}


const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');


function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], select[required]');
    let isFormValid = true;

    inputs.forEach(input => {
        const errorSpan = input.parentElement.querySelector('.error-text');
        if (input.value.trim() === "") {
            isFormValid = false;
            input.style.border = "1px solid #ff4d4d";
            if (errorSpan) errorSpan.style.display = "block";
        } else {
            input.style.border = "1px solid #444";
            if (errorSpan) errorSpan.style.display = "none";
        }
    });
    return isFormValid;
}


document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('input', function() {
        this.style.border = "1px solid #444";
        const error = this.parentElement.querySelector('.error-text');
        if (error) error.style.display = "none";
    });
});


if (registerForm) {
    registerForm.onsubmit = function(e) {
        e.preventDefault();
        
        if (validateForm(registerForm)) {
            localStorage.setItem('isLoggedIn', 'true');
            regModal.style.display = "none";
            document.body.style.overflow = "auto";
            updateAuthUI();
            alert("Ви успішно зареєструвалися!");
            registerForm.reset();
        }
    };
}


if (loginForm) {
    loginForm.onsubmit = function(e) {
        e.preventDefault();
        
        if (validateForm(loginForm)) {
            localStorage.setItem('isLoggedIn', 'true');
            loginModal.style.display = "none";
            document.body.style.overflow = "auto";
            updateAuthUI();
            loginForm.reset();
        }
    };
}


const userProfileIcon = document.getElementById('user-profile');
if (userProfileIcon) {
    userProfileIcon.onclick = function() {
        if (confirm("Бажаєте вийти з акаунту?")) {
            localStorage.removeItem('isLoggedIn');
            updateAuthUI();
        }
    };
}


function renderAllCountries(lang) {
    const countrySelect = document.getElementById('reg-country');
    if (!countrySelect) return;
    const placeholderText = translations[lang]['country_select'] || "Виберіть країну";
    countrySelect.innerHTML = `<option value="" disabled selected>${placeholderText}</option>`;
    
    const keys = Object.keys(translations[lang]).filter(key => key.startsWith('country_') && key !== 'country_select');
    keys.sort((a, b) => translations[lang][a].localeCompare(translations[lang][b], lang === 'ua' ? 'uk' : 'en'));

    keys.forEach(key => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = translations[lang][key];
        countrySelect.appendChild(opt);
    });
}


// CART
let currentLang = 'ua';
let cart = JSON.parse(localStorage.getItem('coffee_cart')) || [];

function updateCartUI() {
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartCount = document.querySelector('.cart-count');
    const clearBtn = document.getElementById('clear-cart-btn');
    
    if (cart.length > 0) {
        clearBtn.style.display = 'block';
    } else {
        clearBtn.style.display = 'none';
    }

    if (!cartItemsList) return;
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;

    cartItemsList.innerHTML = '';

    if (cart.length === 0) {
        cartItemsList.innerHTML = `<p style="text-align: center; color: #888; padding: 20px;">${translations[currentLang].cart_empty}</p>`;
    } else {
        cart.forEach(item => {
            const row = document.createElement('div');
            // Стиль рядка товару
            row.style.cssText = 'display: flex; flex-direction: column; padding: 15px 0; border-bottom: 1px solid #444; color: white; gap: 10px;';
            
            const itemTotal = item.price * item.quantity;

            row.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-weight: 600; font-family: 'Playfair Display', serif;">${item.name}</span>
                    <span style="color: var(--coffee-gold); font-weight: 700;">${itemTotal}₴</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; align-items: center; gap: 12px; background: #2a2a2a; padding: 4px 10px; border-radius: 15px;">
                        <button onclick="changeQtyInCart('${item.id}', -1)" style="background:none; border:none; color:var(--coffee-accent); cursor:pointer; font-weight:900; font-size:1.2rem; padding: 0 5px;">−</button>
                        <span style="font-size: 0.9rem; min-width: 20px; text-align: center;">${item.quantity}</span>
                        <button onclick="changeQtyInCart('${item.id}', 1)" style="background:none; border:none; color:var(--coffee-accent); cursor:pointer; font-weight:900; font-size:1.2rem; padding: 0 5px;">+</button>
                    </div>
                    <div style="font-size: 0.85rem; color: #aaa; font-style: italic;">
                        ${item.quantity} x ${item.price}₴
                    </div>
                </div>
            `;
            cartItemsList.appendChild(row);
        });
    }

    const totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotalPrice) cartTotalPrice.textContent = `${totalSum}₴`;

    localStorage.setItem('coffee_cart', JSON.stringify(cart));
}

window.changeQtyInCart = function(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += delta;
        
        // Знаходимо контейнер на головній сторінці для синхронізації
        const container = document.querySelector(`.product-controls:has([data-id="${productId}"])`);
        
        if (item.quantity <= 0) {
            // Видаляємо товар, якщо кількість 0
            cart = cart.filter(i => i.id !== productId);
            if (container) {
                container.querySelector('.quantity-selector').style.display = 'none';
                container.querySelector('.btn-add-to-cart').style.display = 'block';
            }
        } else {
            // Оновлюємо цифру на головній сторінці
            if (container) {
                container.querySelector('.qty-number').textContent = item.quantity;
            }
        }
        updateCartUI();
    }
};


document.addEventListener('DOMContentLoaded', () => {
    const cartModal = document.getElementById('cartModal');
    const loginModal = document.getElementById("loginModal");
    const regModal = document.getElementById('registerModal');
    const orderProcessingModal = document.getElementById('orderProcessingModal');
    const orderSuccessModal = document.getElementById('orderSuccessModal');


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });


    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = btn.getAttribute('data-lang');
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Ось цей цикл оновлює ТЕКСТ у ВСІХ модалках, включаючи нові
            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                if (translations[currentLang][key]) {
                    element.innerText = translations[currentLang][key];
                }
            });

            renderAllCountries(currentLang);
            updateCartUI();
        });
    });

    
document.getElementById('cart-button').onclick = (e) => { e.preventDefault(); cartModal.style.display = "block"; };
document.querySelectorAll('.close-modal, #close-login, #close-register, #close-cart').forEach(btn => {
        btn.onclick = () => {
            loginModal.style.display = "none";
            regModal.style.display = "none";
            cartModal.style.display = "none";
            document.body.style.overflow = "auto";
        };
    });


cart.forEach(item => {
        const container = document.querySelector(`.product-controls:has([data-id="${item.id}"])`);
        if (container) {
            container.querySelector('.btn-add-to-cart').style.display = 'none';
            container.querySelector('.quantity-selector').style.display = 'flex';
            container.querySelector('.qty-number').textContent = item.quantity;
        }
    });


document.querySelectorAll('.btn-add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const container = this.closest('.product-controls');
        const selector = container.querySelector('.quantity-selector');
        const qtyNumber = container.querySelector('.qty-number');

        const productId = this.dataset.id;
        const productName = this.dataset.name;
        const productPrice = parseFloat(this.dataset.price);

        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        updateCartUI();

        this.style.display = 'none'; 
        selector.style.display = 'flex'; 
        qtyNumber.textContent = '1'; 
    });
});

document.querySelectorAll('.btn-plus').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.dataset.id;
        const qtyNumber = this.closest('.product-controls').querySelector('.qty-number');

        const item = cart.find(i => i.id === productId);
        if (item) {
            item.quantity++;
            qtyNumber.textContent = item.quantity;
            updateCartUI();
        }
    });
});

document.querySelectorAll('.btn-minus').forEach(button => {
    button.addEventListener('click', function() {
        const container = this.closest('.product-controls');
        const productId = this.dataset.id;
        const item = cart.find(i => i.id === productId);

        if (item) {
            if (item.quantity > 1) {
                item.quantity--;
                container.querySelector('.qty-number').textContent = item.quantity;
            } else {
                cart = cart.filter(i => i.id !== productId);
                container.querySelector('.quantity-selector').style.display = 'none';
                container.querySelector('.btn-add-to-cart').style.display = 'block';
            }
            updateCartUI();
        }
    });
});


window.clearCart = function() {
    cart = [];
    document.querySelectorAll('.product-controls').forEach(container => {
        const addBtn = container.querySelector('.btn-add-to-cart');
        const selector = container.querySelector('.quantity-selector');
        if (addBtn && selector) {
            addBtn.style.display = 'block';
            selector.style.display = 'none';
        }
    });
    updateCartUI();
    localStorage.removeItem('coffee_cart');
};


const checkoutBtn = document.getElementById('checkout-btn');
if (checkoutBtn) {
    checkoutBtn.onclick = () => {
        if (cart.length > 0) {
            cartModal.style.display = "none";
            document.body.style.overflow = "hidden";
            orderProcessingModal.style.display = "block";

            setTimeout(() => {
                orderProcessingModal.style.display = "none";
                orderSuccessModal.style.display = "block";
                
                // Очищення кошика
                cart = [];
                localStorage.removeItem('coffee_cart');
                updateCartUI();
                
                // Скидання кнопок в меню
                document.querySelectorAll('.product-controls').forEach(container => {
                    const addBtn = container.querySelector('.btn-add-to-cart');
                    const selector = container.querySelector('.quantity-selector');
                    if (addBtn && selector) {
                        addBtn.style.display = 'block';
                        selector.style.display = 'none';
                    }
                });
            }, 2000); 
        } else {
            alert(translations[currentLang].cart_empty);
        }
    };
}


const closeSuccessBtn = document.getElementById('close-success-btn');
const closeSuccessX = document.getElementById('close-success');


if (closeSuccessBtn) {
    closeSuccessBtn.onclick = () => {
        orderSuccessModal.style.display = "none";
        document.body.style.overflow = "auto";
    };
}


if (closeSuccessX) {
    closeSuccessX.onclick = () => {
        orderSuccessModal.style.display = "none";
        document.body.style.overflow = "auto";
    };
}


const clearCartBtn = document.getElementById('clear-cart-btn');
if (clearCartBtn) {
    clearCartBtn.onclick = () => {
        clearCart();
    };
}


    renderAllCountries(currentLang);
    updateAuthUI();
    updateCartUI();
});


// основні кнопки //


document.addEventListener('DOMContentLoaded', () => {
    const categoriesView = document.getElementById('categories-display');
    const productsView = document.getElementById('products-display');
    const teaSubPanel = document.getElementById('tea-subfilters');
    const pastrySubPanel = document.getElementById('bakery-subfilters');
    const backBtn = document.getElementById('btn-back');
    const menuSection = document.getElementById('menu');
    const menuCards = document.querySelectorAll('.menu-card');

    function updateSnakeLayout() {
        const visibleCards = Array.from(menuCards).filter(card => {
            return card.style.display !== 'none' && getComputedStyle(card).display !== 'none';
        });

        visibleCards.forEach((card, index) => {
            if (index % 2 !== 0) {
                card.classList.add('is-reversed');
            } else {
                card.classList.remove('is-reversed');
            }
        });
    }


    document.querySelectorAll('.sb-item-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            
            categoriesView.style.display = 'none';
            productsView.style.display = 'block';


            if (teaSubPanel) teaSubPanel.style.display = (category === 'tea') ? 'flex' : 'none';
            if (pastrySubPanel) pastrySubPanel.style.display = (category === 'pastry') ? 'flex' : 'none';


            menuCards.forEach(item => {
                item.style.display = (item.getAttribute('data-category') === category) ? 'flex' : 'none';
            });


            const currentPanel = (category === 'tea') ? teaSubPanel : (category === 'pastry' ? pastrySubPanel : null);
            if (currentPanel) {
                currentPanel.querySelectorAll('.sub-filter-btn').forEach(b => b.classList.remove('active'));
                const allBtn = currentPanel.querySelector('.sub-filter-btn[data-subfilter="all"]');
                if (allBtn) allBtn.classList.add('active');
            }

            updateSnakeLayout();
            window.scrollTo({ top: menuSection.offsetTop - 50, behavior: 'smooth' });
        });
    });


    document.querySelectorAll('.sub-filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const panel = this.parentElement;
            panel.querySelectorAll('.sub-filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const subFilter = this.getAttribute('data-subfilter');
            const activeCategory = (panel.id === 'tea-subfilters') ? 'tea' : 'pastry';

            menuCards.forEach(card => {
                if (card.getAttribute('data-category') === activeCategory) {
                    if (subFilter === 'all') {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = card.classList.contains(subFilter) ? 'flex' : 'none';
                    }
                }
            });

            updateSnakeLayout();
        });
    });


    if (backBtn) {
        backBtn.addEventListener('click', () => {
            productsView.style.display = 'none';
            categoriesView.style.display = ''; 
            if (teaSubPanel) teaSubPanel.style.display = 'none';
            if (pastrySubPanel) pastrySubPanel.style.display = 'none';

            window.scrollTo({ top: menuSection.offsetTop - 50, behavior: 'smooth' });
        });
    }


    function syncButtonsWithCart() {
        const storedCart = JSON.parse(localStorage.getItem('coffee_cart')) || [];
        storedCart.forEach(item => {
            const container = document.querySelector(`.product-controls[data-id="${item.id}"]`) || 
                            document.querySelector(`.product-controls:has([data-id="${item.id}"])`);
            
            if (container) {
                const addBtn = container.querySelector('.btn-add-to-cart');
                const selector = container.querySelector('.quantity-selector');
                const qtyNumber = container.querySelector('.qty-number');

                if (addBtn && selector) {
                    addBtn.style.display = 'none';
                    selector.style.display = 'flex';
                    qtyNumber.textContent = item.quantity;
                }
            }
        });
    }


// ─── MOBILE HAMBURGER MENU ────────────────────────────────────────





});