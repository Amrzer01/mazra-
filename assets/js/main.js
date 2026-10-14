/**
 * Happy Farm (المزرعة السعيدة) - Main Interaction Script
 * Awwwards-Level Experience & Agritourism Platform with Luxor Hot Air Balloon
 */

// --- BILINGUAL DICTIONARY (Arabic / English) ---
const translations = {
  ar: {
    nav_home: "الرئيسية",
    nav_about: "عن الرحلة",
    nav_destinations: "وجهاتنا",
    nav_balloon: "بالون الأقصر 🎈",
    nav_activities: "أنشطة المزرعة",
    nav_seasons: "مواسم الحصاد",
    nav_calculator: "حاسبة الأسعار",
    nav_faq: "الأسئلة الشائعة",
    nav_book_btn: "احجز الآن • 700 ج.م",

    hero_badge: "🏆 التجربة الريفية الأولى والفريدة في مصر",
    hero_balloon_badge: "🎈 متاح الآن: رحلات منطاد الأقصر فجراً",
    hero_title_1: "عيش سحر الطبيعة في",
    hero_title_brand: "المزرعة السعيدة",
    hero_desc: "رحلات استكشافية غامرة إلى أجمل مزارع مصر، شلالات الفيوم، وجزر النيل العتيقة في الأقصر وأسوان، مع تجربة التحليق الأسطوري بمنطاد الأقصر عند الشروق.",
    hero_price_tag: "700 ج.م للفرد شامل كافة الأنشطة",
    hero_cta_book: "احجز رحلتك القادمة",
    hero_cta_explore: "استكشف الوجهات والمنطاد",
    hero_live_badge: "متبقي 4 مقاعد لرحلة المنطاد الجمعة",
    hero_rating: "4.9/5 من أكثر من 12,800 زائر",

    stat_visitors: "زائر وخبير استكشف مزارعنا",
    stat_destinations: "وجهات ريفية ساحرة بمصر",
    stat_balloons: "رحلة منطاد ناجحة فوق النيل",
    stat_price: "جنيه مصري / للفرد شامل الأنشطة",

    about_eyebrow: "// سياحة ريفية أصيلة",
    about_title: "حيث تلتقي خصوبة النيل مع عبق التراث المصري",
    about_p1: "المزرعة السعيدة ليست مجرد رحلة، بل بوابة للهروب من صخب وضوضاء المدينة إلى رحاب الطبيعة الخضراء. صممنا برامجنا لتتيح لك ولعائلتك تجربة معايشة حقيقية للحياة الزراعية المصرية العريقة.",
    about_p2: "من شروق الشمس فوق ضفاف النيل وبساتين الفاكهة ومنطاد الأقصر المحلق في الأفق، إلى ورش الحرف اليدوية والفخار التراثي، وصوت شاي الحطب على الجمر وسط نسيم الحقول العليل.",
    about_feature_1: "قطف الثمار الطازجة بيدك مباشرة من الأشجار",
    about_feature_2: "ورش الرسم والتشكيل على الفخار مع حرفيين مصريين",
    about_feature_3: "رحلات منطاد الأقصر الطائر لمشاهدة المزارع والمعابد من السماء",
    about_feature_4: "أجواء عائلية آمنة ومساحات مفتوحة تناسب جميع الأعمار",
    about_cta: "تعرف على قصتنا وقيمنا",

    balloon_section_eyebrow: "// التجربة الملكية الصعيدية",
    balloon_section_title: "منطاد الأقصر الطائر: شاهد سحر الريف المصري من السماء",
    balloon_section_subtitle: "حلّق على ارتفاع 1500 قدم مع شروق الشمس الذهبي فوق مزارع القصب والنخيل والمعابد الخالدة في تجربة لا تتكرر.",
    balloon_stat_altitude: "ارتفاع التحليق في الهواء",
    balloon_stat_duration: "دقيقة طيران آمن فوق النيل",
    balloon_stat_view: "إطلالة بانورامية ساحرة",
    balloon_feat_1: "مشاهدة شروق الشمس فوق وادي الملوك ومعبد حتشبسوت",
    balloon_feat_2: "التحليق الهادئ فوق حقول النيل وبساتين الموز والقصب",
    balloon_feat_3: "شهادة طيران تذكارية موثقة باسمك مختومة ومعتمدة",
    balloon_feat_4: "تصوير جوي احترافي بكاميرات الدرون وفوتوسيشن للشروق",
    balloon_cta_book: "احجز مقعدك بالمنطاد الآن (+1,200 ج.م)",

    dest_eyebrow: "// وجهاتنا المميزة",
    dest_title: "رحلات استكشافية إلى أروع بقاع مصر الخضراء",
    dest_subtitle: "أربع وجهات ريفية استثنائية تأخذك في رحلة حسية متكاملة عبر التاريخ والطبيعة وسماء النيل.",
    dest_balloon_title: "منطاد الأقصر وسماء النيل الفجرية",
    dest_balloon_desc: "التحليق عند الشروق فوق بساط مزارع القصب والنخيل ومعابد الفراعنة، مع شهادة طيران تذكارية.",
    dest_balloon_badge: "التجربة الأكثر طلباً 🎈",
    dest_luxor_title: "مزارع الأقصر وبساتين النيل",
    dest_luxor_desc: "جولات بين بساتين القصب والموز على ضفاف النيل الساحر، ومعايشة تقاليد الفلاح الصعيدي الأصيل وعبق التاريخ.",
    dest_luxor_badge: "شمس دافئة وطبيعة أصيلة",
    dest_fayoum_title: "شلالات الفيوم وقرية تونس",
    dest_fayoum_desc: "استمتع بخرير شلالات وادي الريان، بحيرة قارون، وبساتين الزيتون مع تجربة صناعة الخزف الشهيرة في قرية تونس.",
    dest_fayoum_badge: "شلالات، خضرة وخزف",
    dest_aswan_title: "جزر أسوان وبساتين النخيل",
    dest_aswan_desc: "استكشاف جزر النيل الخلابة، مزارع المانجو الأسوانية الشهيرة، والنخيل الشامخ بروح الضيافة النوبية الساحرة.",
    dest_aswan_badge: "سحر الجنوب وجزر النيل",
    dest_card_view: "عرض تفاصيل الرحلة الكاملة",

    act_eyebrow: "// أنشطة وفعاليات المزرعة",
    act_title: "تجارب تفاعلية تملأ يومك بالبهجة والإبداع",
    act_subtitle: "صممت كل فعالية لتمنحك ذكريات لا تُنسى وفرصة لإطلاق العنان لطاقتك وإبداعك الفني.",
    act_1_title: "قطف وجني الثمار الطازجة",
    act_1_desc: "عش متعة جني المحاصيل والفواكه الموسمية الناضجة بيدك مباشرة من الغصن إلى سلتك دون وسيط.",
    act_2_title: "ورش الرسم وتشكيل الفخار",
    act_2_desc: "أبرز موهبتك الفنية عبر تلوين وتشكيل قطع الفخار الطيني الأصيل واحتفظ بقطعتك كتذكار يدوي فريد.",
    act_3_title: "عروض الفنون والفولكلور الريفي",
    act_3_desc: "أمسيات ممتعة حول نار الحطب مع المشروبات الريفية، الموسيقى الشعبية الأصيلة، وفقرات ترفيهية لجميع الأعمار.",
    act_pottery_studio_badge: "استوديو الفخار التفاعلي المباشر",
    act_pottery_studio_title: "لوّن قطعتك الفخارية الآن افتراضياً!",
    act_pottery_studio_desc: "اختر ألوانك المفضلة من نقوش التراث المصري وشاهد كيف ستبدو قطعتك التذكارية في الورشة الحية:",
    act_pottery_palette_clay: "طمي النيل الأصيل",
    act_pottery_palette_lapis: "أزرق نيلي ملكي",
    act_pottery_palette_ochre: "أصفر صحراوي دافئ",
    act_pottery_palette_emerald: "أخضر واحات",
    act_pottery_palette_white: "أبيض جبسي ناصع",

    quote_text: "«في ريف مصر، ليست الرحلة مجرد نزهة عابرة.. بل عودة نقية إلى جوهر الهدوء وأصل الحياة.»",
    quote_author: "// فلسفة المزرعة السعيدة للسياحة الريفية",

    calc_eyebrow: "// عرض الرحلة والحاسبة الذكية",
    calc_title: "احسب تكلفتك بدقة واحجز مكانك فوراً",
    calc_subtitle: "سعر التذكرة الأساسي 700 ج.م للفرد شامل دخول المزرعة وكافة الفعاليات وورشة الفخار وسلة الثمار.",
    calc_base_card_title: "التذكرة الأساسية الشاملة",
    calc_base_price_label: "700 ج.م",
    calc_base_per_person: "لكل فرد (يوم كامل من 9 صباحاً حتى 6 مساءً)",
    calc_included_1: "دخول المزرعة وجولات إرشادية بين المحاصيل",
    calc_included_2: "تجربة قطف وجني الفاكهة الموسمية وسلة هدايا",
    calc_included_3: "أدوات ورشة الرسم على الفخار والاحتفاظ بقطعتك",
    calc_included_4: "حضور العروض الفنية وفقرات السمر والضيافة",
    calc_included_5: "مشروب ترحيبي ريفي طازج وشاي حطب بالنعناع",

    calc_form_title: "حاسبة تكلفة رحلتك التفاعلية",
    calc_select_dest: "اختر وجهة الرحلة:",
    calc_adults_count: "عدد البالغين (فوق 12 سنة):",
    calc_kids_count: "عدد الأطفال (6 إلى 12 سنة - خصم 50%):",
    calc_date_label: "تاريخ الرحلة المفضل:",
    calc_addons_title: "الخيارات والترقيات الإضافية (اختياري):",
    calc_addon_balloon: "🎈 رحلة منطاد الأقصر الطائر عند الشروق (شامل الانتقال وشهادة الطيران والإفطار الصعيدي)",
    calc_addon_feteer: "فطار فلاحي ملكي (فطير مشلتت بالسمن البلدي، عسل نحل وجبنة قديمة)",
    calc_addon_lunch: "غداء ريفي بلدي (طواجن فخار بالفرن، خضار فريش، وأرز معمر)",
    calc_addon_trans: "انتقالات سياحية مكيفة VIP ذهاب وعودة من القاهرة / الجيزة",
    calc_addon_photo: "جلسة تصوير احترافية فوتوسيشن وكليب درون تذكاري",
    calc_total_summary: "إجمالي تكلفة الرحلة:",
    calc_discount_badge: "🎉 مبروك! حصلت على خصم المجموعات 15%",
    calc_btn_whatsapp: "تأكيد الحجز فوراً عبر واتساب",
    calc_btn_ticket: "عرض تذكرة الحجز الفوري",

    seasons_eyebrow: "// تقويم الحصاد المصري",
    seasons_title: "أي وقت تزورنا فيه، ستجد ثمراً يانعاً بانتظارك",
    season_summer: "موسم الصيف",
    season_summer_crops: "مانجو عويس وفص، عنب بناتي، تين شوكي",
    season_autumn: "موسم الخريف",
    season_autumn_crops: "بلح سيوي وأمهات، زيتون بلدي للتخليل، جوافة",
    season_winter: "موسم الشتاء",
    season_winter_crops: "فراولة سكرية، برتقال ويوسفي، محاصيل شتوية خضراء",
    season_spring: "موسم الربيع",
    season_spring_crops: "خوخ وورود ريفية، نعناع بلدي، وزهور نيلية عطرية",

    faq_eyebrow: "// تساؤلات شائعة",
    faq_title: "كل ما تود معرفته قبل انطلاق رحلتك",
    faq_q1: "ماذا يشمل سعر التذكرة الأساسي (700 جنيه)؟",
    faq_a1: "يشمل السعر الدخول الكامل للمزرعة طوال اليوم، المشاركة في كافة أنشطة قطف الثمار، استلام سلة الفاكهة، الحصول على قطعة الفخار مع كامل أدوات وألوان ورشة الرسم، حضور العروض الفولكلورية وضيافة شاي الحطب.",
    faq_q2: "كيف يتم حجز وتنظيم رحلة منطاد الأقصر الطائر؟",
    faq_a2: "تنطلق رحلة المنطاد فجراً في تمام الساعة 04:30 صباحاً مع شروق الشمس. نوفر نقلاً خاصاً من المزرعة إلى موقع الإقلاع بالبر الغربي بالأقصر، وتستغرق الرحلة من 45 إلى 60 دقيقة في الهواء مع كابتن طيران معتمد وتأمين شامل، تليها شهادة طيران تذكارية وإفطار ريفي.",
    faq_q3: "هل الأنشطة آمنة ومناسبة للأطفال وكبار السن؟",
    faq_a3: "نعم بالتأكيد! جميع مزارعنا مجهزة بمسارات مشي مريحة ومظللة، وأنشطتنا مصممة خصيصاً لتناسب العائلات مع وجود مشرفين ومسعفين مدربين طوال اليوم.",
    faq_q4: "هل تتوفر خيارات لوجبات الإفطار والغداء الريفي؟",
    faq_a4: "نعم، حرصنا أن تكون التذكرة مرنة، لذلك وفرنا وجبات إفطار ريفية (فطير مشلتت وعسل وقشطة) وغداء طواجن فرن بلدي كإضافات اختيارية طازجة تُعد أمامك مباشرة.",
    faq_q5: "كيف يمكننا الوصول، وهل تتوفر مواقف للسيارات؟",
    faq_a5: "تتوفر مواقف سيارات خاصة ومجانية مؤمنة لسيارات الزوار، كما نوفر خدمة باصات سياحية مكيفة فخمة تنطلق من عدة نقاط تجمع في القاهرة والجيزة.",

    footer_tagline: "سياحة ريفية مصرية بمواصفات عالمية، نوصلك بالطبيعة والتراث ومنطاد الأقصر الأسطوري.",
    footer_quick_links: "روابط سريعة",
    footer_destinations: "الوجهات",
    footer_contact: "تواصل معنا",
    footer_phone: "+20 10 1234 5678",
    footer_email: "hello@happyfarm-egypt.com",
    footer_address: "مصر • القاهرة • الأقصر • الفيوم • أسوان",
    footer_rights: "جميع الحقوق محفوظة © 2026 المزرعة السعيدة (Happy Farm Egypt).",
    footer_made_with: "صُنعت بحب وشغف لترويج السياحة الخضراء في مصر."
  },

  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_destinations: "Destinations",
    nav_balloon: "Luxor Balloon 🎈",
    nav_activities: "Farm Activities",
    nav_seasons: "Harvest Seasons",
    nav_calculator: "Trip Calculator",
    nav_faq: "FAQ",
    nav_book_btn: "Book Now • 700 EGP",

    hero_badge: "🏆 Egypt's Premier Agritourism & Rural Experience",
    hero_balloon_badge: "🎈 Now Available: Luxor Sunrise Hot Air Balloon",
    hero_title_1: "Hands-on farm expeditions across Egypt's",
    hero_title_brand: "Happy Farm Egypt",
    hero_desc: "Pick ripe fruit directly from tree branches, shape traditional clay pottery, and soar over Nile sugarcane fields on a sunrise Luxor hot air balloon. Full-day all-inclusive pass for 700 EGP.",
    hero_price_tag: "700 EGP per person all-inclusive pass",
    hero_cta_book: "Book Your Farm Trip — 700 EGP",
    hero_cta_explore: "Explore Destinations & Balloon",
    hero_live_badge: "Only 4 balloon spots left for Friday",
    hero_rating: "4.9/5 from over 12,800 happy visitors",

    stat_visitors: "Happy Visitors & Travelers",
    stat_destinations: "Iconic Rural Destinations",
    stat_balloons: "Sunrise Balloon Flights Over Nile",
    stat_price: "EGP / person all-inclusive package",

    about_eyebrow: "// Authentic Agritourism",
    about_title: "Where Nile Fertility Meets Timeless Egyptian Heritage",
    about_p1: "Happy Farm is not just a getaway; it is a portal out of the urban rush into serene green havens. Our journeys are thoughtfully curated to immerse you and your family in living Egyptian countryside traditions.",
    about_p2: "From sunrise hot air balloon ascents over Nile orchards to hands-on clay pottery workshops, fire-brewed mint tea, and pure countryside breeze.",
    about_feature_1: "Direct hand-picking of fresh seasonal organic fruits",
    about_feature_2: "Artisan clay pottery throwing & painting workshops",
    about_feature_3: "Sunrise Luxor hot air balloon flights above Nile farms & temples",
    about_feature_4: "Safe family-friendly spaces suited for all generations",
    about_cta: "Discover Our Story & Values",

    balloon_section_eyebrow: "// Royal Upper Egypt Experience",
    balloon_section_title: "Luxor Hot Air Balloon: Egypt's Living Countryside from the Sky",
    balloon_section_subtitle: "Float at 1,500 feet into the golden Egyptian dawn above sugarcane fields, date palm groves, and ancient Nile temples in a memory of a lifetime.",
    balloon_stat_altitude: "Flight altitude above green fields",
    balloon_stat_duration: "Minutes serene sunrise flight",
    balloon_stat_view: "Panoramic Nile & temple view",
    balloon_feat_1: "Witness golden sunrise over Valley of the Kings and Hatshepsut Temple",
    balloon_feat_2: "Glide silently over tranquil Nile banks, banana groves & sugarcane fields",
    balloon_feat_3: "Receive an official personalized Flight Certificate stamped with your name",
    balloon_feat_4: "Professional drone videography and sunrise photo package included",
    balloon_cta_book: "Reserve Balloon Seat (+1,200 EGP)",

    dest_eyebrow: "// Featured Destinations",
    dest_title: "Expeditions to Egypt's Lush Verdant Treasures",
    dest_subtitle: "Four extraordinary rural journeys taking your senses on a deep voyage through nature, history, and sunrise skies.",
    dest_balloon_title: "Luxor Hot Air Balloon & Nile Skies",
    dest_balloon_desc: "Sunrise flight over verdant sugarcane carpets, date palm groves, and majestic pharaonic monuments with custom certificate.",
    dest_balloon_badge: "Most Requested Experience 🎈",
    dest_luxor_title: "Luxor Nile Orchards & Farms",
    dest_luxor_desc: "Strolls across lush sugarcane and banana groves on the tranquil banks of Upper Egypt, embracing authentic countryside folklore.",
    dest_luxor_badge: "Warm Sun & Ancient Soil",
    dest_fayoum_title: "Fayoum Waterfalls & Tunis Village",
    dest_fayoum_desc: "Enjoy the soothing falls of Wadi El-Rayan, Lake Qarun, and olive orchards alongside world-famous pottery in Tunis Village.",
    dest_fayoum_badge: "Waterfalls & Artisan Crafts",
    dest_aswan_title: "Aswan Nile Islands & Palm Groves",
    dest_aswan_desc: "Navigate breathtaking Nile islands, famed organic mango orchards, and towering date palms immersed in warm Nubian hospitality.",
    dest_aswan_badge: "Southern Magic & Nile Isles",
    dest_card_view: "View Full Trip Details",

    act_eyebrow: "// Farm Activities & Workshops",
    act_title: "Interactive Experiences Filled with Joy & Creativity",
    act_subtitle: "Every activity is designed to spark lasting memories and reconnect your spirit with nature and artistic craftsmanship.",
    act_1_title: "Fresh Seasonal Fruit Harvest",
    act_1_desc: "Savor the joy of picking crisp seasonal fruits directly from the tree into your gift basket with zero middlemen.",
    act_2_title: "Artisan Clay Pottery Workshops",
    act_2_desc: "Unleash your artistic talent by molding and painting genuine Nile clay pottery to treasure as a handmade keepsake.",
    act_3_title: "Rural Folklore & Storytelling Evenings",
    act_3_desc: "Cozy fireside gatherings with traditional charcoal tea, authentic Egyptian folkloric melodies, and warm countryside stories.",
    act_pottery_studio_badge: "Interactive Live Pottery Studio",
    act_pottery_studio_title: "Customize & Paint Your Souvenir Clay Pot",
    act_pottery_studio_desc: "Select classic Egyptian heritage pigments to visualize your personalized keepsake jar before your visit:",
    act_pottery_palette_clay: "Nile Silt Clay",
    act_pottery_palette_lapis: "Royal Nile Cobalt",
    act_pottery_palette_ochre: "Sun Sand Ochre",
    act_pottery_palette_emerald: "Oasis Emerald",
    act_pottery_palette_white: "Pure Egyptian Chalk",

    quote_text: "“In the Egyptian countryside, a journey is never just a visit — it is a soulful return to the essence of life and peace.”",
    quote_author: "// Happy Farm Philosophy",

    calc_eyebrow: "// Trip Package & Smart Calculator",
    calc_title: "Calculate Your Journey & Instant Booking",
    calc_subtitle: "Base all-inclusive ticket is 700 EGP per person including full farm access, fruit basket, pottery kit, and all events.",
    calc_base_card_title: "All-Inclusive Standard Pass",
    calc_base_price_label: "700 EGP",
    calc_base_per_person: "Per Person (Full Day: 9:00 AM – 6:00 PM)",
    calc_included_1: "Full farm admission & guided agritour",
    calc_included_2: "Seasonal fruit picking & take-home basket",
    calc_included_3: "Clay pottery painting workshop kit & keepsake",
    calc_included_4: "Folklore shows, entertainment & countryside gathering",
    calc_included_5: "Fresh welcome farm drink & firewood mint tea",

    calc_form_title: "Interactive Trip Cost Estimator",
    calc_select_dest: "Choose Destination:",
    calc_adults_count: "Adults (12+ years):",
    calc_kids_count: "Children (6 to 12 years - 50% OFF):",
    calc_date_label: "Preferred Trip Date:",
    calc_addons_title: "Optional Countryside Upgrades & Add-ons:",
    calc_addon_balloon: "🎈 Luxor Sunrise Hot Air Balloon Flight (+1,200 EGP / person - Includes Certificate & Breakfast)",
    calc_addon_feteer: "Royal Egyptian Farm Breakfast (Fresh Feteer Meshaltet, honey & artisan cheese)",
    calc_addon_lunch: "Traditional Oven Lunch (Clay pot tagines, farm fresh vegetables & spiced rice)",
    calc_addon_trans: "VIP Air-Conditioned Roundtrip Tourist Transport from Cairo/Giza",
    calc_addon_photo: "Professional Farm Photoshoot & Cinematic Drone Video Clip",
    calc_total_summary: "Total Calculated Cost:",
    calc_discount_badge: "🎉 15% Group Discount Automatically Applied!",
    calc_btn_whatsapp: "Confirm Booking on WhatsApp",
    calc_btn_ticket: "View Instant Boarding Pass",

    seasons_eyebrow: "// Egyptian Harvest Calendar",
    seasons_title: "Any Time You Visit, Rich Harvest Awaits You",
    season_summer: "Summer Season",
    season_summer_crops: "Owais & Fass Mangoes, Sweet Grapes, Prickly Pear",
    season_autumn: "Autumn Season",
    season_autumn_crops: "Siwi & Fresh Dates, Pickling Olives, Sweet Guavas",
    season_winter: "Winter Season",
    season_winter_crops: "Egyptian Strawberries, Valencia Oranges, Mandarin & Green Winter Crops",
    season_spring: "Spring Season",
    season_spring_crops: "Peaches, Countryside Roses, Wild Nile Mint & Aromatic Herbs",

    faq_eyebrow: "// Frequently Asked Questions",
    faq_title: "Everything You Need to Know Before Joining Us",
    faq_q1: "What does the 700 EGP base ticket include?",
    faq_a1: "The 700 EGP price covers full-day farm access, fruit picking, take-home fruit basket, clay pottery kit with artisan guidance, folk music shows, and complimentary firewood herbal tea.",
    faq_q2: "How is the Luxor Hot Air Balloon trip scheduled and organized?",
    faq_a2: "The balloon adventure departs before dawn at 04:30 AM for sunrise launch. We provide private transfer from the farm to the West Bank launch site. Flight duration is 45 to 60 minutes with certified pilots and full insurance, followed by an official personalized flight certificate and royal farm breakfast.",
    faq_q3: "Is the trip suitable and safe for young kids and seniors?",
    faq_a3: "Absolutely! Our farms feature smooth shaded walkways, resting cabanas, dedicated child-friendly activities, and certified first-aid staff on-site throughout the day.",
    faq_q4: "Are rural breakfast and lunch meals available?",
    faq_a4: "Yes! To keep entry accessible, meals are optional fresh add-ons: authentic Egyptian oven-baked Feteer Meshaltet, wild honey, and clay pot casseroles prepared right before your eyes.",
    faq_q5: "How do we get there, and is parking available?",
    faq_a5: "Free, secure on-site parking is available. We also offer optional VIP air-conditioned coach shuttles picking up from central hubs in Cairo and Giza.",

    footer_tagline: "World-class Egyptian agritourism connecting you directly to nature, land, heritage, and the legendary Luxor Hot Air Balloon.",
    footer_quick_links: "Quick Links",
    footer_destinations: "Destinations",
    footer_contact: "Contact Us",
    footer_phone: "+20 10 1234 5678",
    footer_email: "hello@happyfarm-egypt.com",
    footer_address: "Egypt • Cairo • Luxor • Fayoum • Aswan",
    footer_rights: "All rights reserved © 2026 Happy Farm Egypt (المزرعة السعيدة).",
    footer_made_with: "Crafted with passion to promote green agritourism in Egypt."
  }
};

let currentLang = 'ar';

function setLanguage(lang) {
  currentLang = lang;
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update text elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update language toggle buttons UI
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('bg-emerald-600', 'text-white');
      btn.classList.remove('text-neutral-300', 'hover:bg-white/10');
    } else {
      btn.classList.remove('bg-emerald-600', 'text-white');
      btn.classList.add('text-neutral-300', 'hover:bg-white/10');
    }
  });

  // Re-calculate price to update currency/discount labels
  calculatePrice();
}

// --- AMBIENT SOUND SYNTHESIZER (Web Audio API) ---
class NatureSoundEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.gainNode = null;
    this.birdTimer = null;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();
    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.08, this.ctx.currentTime);
    this.gainNode.connect(this.ctx.destination);
  }

  createBreeze() {
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      data[i] = (b0 + b1 + b2) * 0.06;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, this.ctx.currentTime);

    noise.connect(filter);
    filter.connect(this.gainNode);
    noise.start();
    this.noiseNode = noise;
  }

  playBirdChirp() {
    if (!this.isPlaying || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const chirpGain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      
      const startFreq = 2200 + Math.random() * 800;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(startFreq, now);
      osc.frequency.exponentialRampToValueAtTime(startFreq + 600, now + 0.08);
      osc.frequency.exponentialRampToValueAtTime(startFreq - 300, now + 0.16);

      chirpGain.gain.setValueAtTime(0, now);
      chirpGain.gain.linearRampToValueAtTime(0.05, now + 0.03);
      chirpGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(chirpGain);
      chirpGain.connect(this.gainNode);

      osc.start(now);
      osc.stop(now + 0.2);
    } catch(e) {}

    this.birdTimer = setTimeout(() => this.playBirdChirp(), 3000 + Math.random() * 4000);
  }

  toggle() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = !this.isPlaying;
    const btn = document.getElementById('audioToggleBtn');
    const visualizer = document.getElementById('audioVisualizer');

    if (this.isPlaying) {
      this.createBreeze();
      this.playBirdChirp();
      if (btn) btn.classList.add('text-emerald-400', 'border-emerald-400/50');
      if (visualizer) visualizer.classList.remove('hidden');
    } else {
      if (this.noiseNode) {
        try { this.noiseNode.stop(); } catch(e){}
      }
      clearTimeout(this.birdTimer);
      if (btn) btn.classList.remove('text-emerald-400', 'border-emerald-400/50');
      if (visualizer) visualizer.classList.add('hidden');
    }
    return this.isPlaying;
  }
}

const soundEngine = new NatureSoundEngine();

// --- CANVAS PARTICLE FIELD (Golden Sun Dust & Green Flora Speckles) ---
function initCanvasParticles() {
  const canvas = document.getElementById('particlesCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = 45;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2.2 + 0.8;
      this.speedX = (Math.random() - 0.5) * 0.45;
      this.speedY = -Math.random() * 0.6 - 0.15;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.isGold = Math.random() > 0.45;
      this.wobble = Math.random() * Math.PI * 2;
    }
    update() {
      this.wobble += 0.02;
      this.x += this.speedX + Math.sin(this.wobble) * 0.25;
      this.y += this.speedY;
      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset();
        this.y = height + 10;
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.isGold 
        ? `rgba(245, 158, 11, ${this.opacity})` 
        : `rgba(74, 222, 128, ${this.opacity * 0.8})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// --- 3D CARD TILT EFFECT ---
function init3DTilt() {
  const cards = document.querySelectorAll('.tilt-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = -(y / (rect.height / 2)) * 6;
      const rotateY = (x / (rect.width / 2)) * 6;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

// --- INTERACTIVE POTTERY PAINTER STUDIO ---
const potteryColors = {
  clay: { base: '#9A5B3D', dark: '#733F27', highlight: '#C48161' },
  lapis: { base: '#1D4E89', dark: '#133560', highlight: '#437FC7' },
  ochre: { base: '#D49B2A', dark: '#9E6F16', highlight: '#F1C362' },
  emerald: { base: '#2D6A4F', dark: '#1B4332', highlight: '#52B788' },
  white: { base: '#E9E4DC', dark: '#BDB3A6', highlight: '#FAF8F5' }
};

let currentPotteryPattern = 'classic';
let currentPotteryColor = 'clay';

function setPotteryColor(colorKey) {
  currentPotteryColor = colorKey;
  const col = potteryColors[colorKey];
  const potBody = document.getElementById('potterySvgBody');
  const potHighlight = document.getElementById('potterySvgHighlight');
  const potBase = document.getElementById('potterySvgBase');
  const potNeck = document.getElementById('potterySvgNeck');

  if (potBody) potBody.setAttribute('fill', col.base);
  if (potHighlight) potHighlight.setAttribute('fill', col.highlight);
  if (potBase) potBase.setAttribute('fill', col.dark);
  if (potNeck) potNeck.setAttribute('fill', col.dark);

  document.querySelectorAll('.pottery-color-btn').forEach(btn => {
    if (btn.getAttribute('data-color') === colorKey) {
      btn.classList.add('ring-4', 'ring-emerald-400', 'scale-110');
    } else {
      btn.classList.remove('ring-4', 'ring-emerald-400', 'scale-110');
    }
  });
}

// --- TRIP PRICE CALCULATOR & BOOKING GENERATOR ---
function calculatePrice() {
  const basePrice = 700;
  const adults = parseInt(document.getElementById('calcAdults')?.value || 1, 10);
  const kids = parseInt(document.getElementById('calcKids')?.value || 0, 10);

  // Kids get 50% discount on base package
  const guestsBase = (adults * basePrice) + (kids * (basePrice * 0.5));

  // Add-ons
  const addBalloon = document.getElementById('addonBalloon')?.checked ? 1200 : 0;
  const addFeteer = document.getElementById('addonFeteer')?.checked ? 150 : 0;
  const addLunch = document.getElementById('addonLunch')?.checked ? 250 : 0;
  const addTrans = document.getElementById('addonTrans')?.checked ? 200 : 0;
  const addPhoto = document.getElementById('addonPhoto')?.checked ? 350 : 0;

  const totalGuests = adults + kids;
  const addonsTotal = (addBalloon * adults) + (addFeteer * totalGuests) + (addLunch * totalGuests) + (addTrans * totalGuests) + (addPhoto);

  let rawTotal = guestsBase + addonsTotal;
  let discount = 0;

  // 15% Group Discount for 5+ guests (applied to base trip)
  const discountBadge = document.getElementById('calcDiscountAlert');
  if (totalGuests >= 5) {
    discount = Math.round(guestsBase * 0.15);
    rawTotal = rawTotal - discount;
    if (discountBadge) discountBadge.classList.remove('hidden');
  } else {
    if (discountBadge) discountBadge.classList.add('hidden');
  }

  // Update UI Elements
  const totalDisplay = document.getElementById('calcTotalNumber');
  if (totalDisplay) {
    totalDisplay.textContent = rawTotal.toLocaleString('en-US');
  }

  // Save state for booking
  window.currentBooking = {
    destination: document.getElementById('calcDestination')?.value || 'balloon',
    adults,
    kids,
    date: document.getElementById('calcDate')?.value || '2026-10-24',
    total: rawTotal,
    discount,
    addons: {
      balloon: !!document.getElementById('addonBalloon')?.checked,
      feteer: !!document.getElementById('addonFeteer')?.checked,
      lunch: !!document.getElementById('addonLunch')?.checked,
      trans: !!document.getElementById('addonTrans')?.checked,
      photo: !!document.getElementById('addonPhoto')?.checked,
    }
  };
}

// WhatsApp Booking Message
function bookViaWhatsApp() {
  const b = window.currentBooking || {};
  const destNames = {
    balloon: currentLang === 'ar' ? 'رحلات منطاد الأقصر الطائر فجراً + مزارع النيل' : 'Luxor Sunrise Hot Air Balloon + Nile Farms',
    luxor: currentLang === 'ar' ? 'مزارع الأقصر وبساتين النيل' : 'Luxor Nile Orchards & Farms',
    fayoum: currentLang === 'ar' ? 'شلالات الفيوم وقرية تونس' : 'Fayoum Waterfalls & Tunis Village',
    aswan: currentLang === 'ar' ? 'جزر أسوان وبساتين النخيل' : 'Aswan Nile Islands & Palms',
    main: currentLang === 'ar' ? 'المزرعة السعيدة المركزية' : 'Happy Farm Central Estate'
  };

  const destTitle = destNames[b.destination] || 'مزارع ومنطاد الأقصر';
  let addonsList = [];
  if (b.addons?.balloon) addonsList.push(currentLang === 'ar' ? '🎈 رحلة منطاد الأقصر الطائر' : '🎈 Luxor Hot Air Balloon Flight');
  if (b.addons?.feteer) addonsList.push(currentLang === 'ar' ? 'فطار فلاحي ملكي' : 'Royal Farm Breakfast');
  if (b.addons?.lunch) addonsList.push(currentLang === 'ar' ? 'غداء ريفي بلدي' : 'Traditional Oven Lunch');
  if (b.addons?.trans) addonsList.push(currentLang === 'ar' ? 'انتقال باص VIP' : 'VIP Transport');
  if (b.addons?.photo) addonsList.push(currentLang === 'ar' ? 'جلسة تصوير درون' : 'Drone Photoshoot');

  let msg = '';
  if (currentLang === 'ar') {
    msg = `🌿 مرحباً، أود حجز رحلة في المزرعة السعيدة:
📍 الوجهة: ${destTitle}
📅 التاريخ المفضل: ${b.date || 'أقرب موعد'}
👥 البالغين: ${b.adults} | الأطفال: ${b.kids}
✨ الإضافات والترقيات: ${addonsList.length ? addonsList.join('، ') : 'الباقة الأساسية الشاملة'}
💰 التكلفة الإجمالية المحسوبة: ${b.total} جنيه مصري
أرجو تأكيد إمكانية الحجز ومواعيد رحلة المنطاد. شكراً لكم!`;
  } else {
    msg = `🌿 Hello! I would like to book a trip with Happy Farm Egypt:
📍 Destination: ${destTitle}
📅 Preferred Date: ${b.date || 'Next available'}
👥 Adults: ${b.adults} | Kids: ${b.kids}
✨ Selected Add-ons: ${addonsList.length ? addonsList.join(', ') : 'Standard All-Inclusive Pass'}
💰 Total Estimated: ${b.total} EGP
Please confirm flight availability and booking details. Thank you!`;
  }

  const phone = "201000000000";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// Show Boarding Pass Modal
function showBoardingPass() {
  const b = window.currentBooking || {};
  const modal = document.getElementById('ticketModal');
  if (!modal) return;

  const destNames = {
    balloon: currentLang === 'ar' ? '🎈 منطاد الأقصر الطائر فجراً' : '🎈 Luxor Sunrise Hot Air Balloon',
    luxor: currentLang === 'ar' ? 'مزارع الأقصر وبساتين النيل' : 'Luxor Nile Orchards',
    fayoum: currentLang === 'ar' ? 'شلالات الفيوم وقرية تونس' : 'Fayoum Waterfalls',
    aswan: currentLang === 'ar' ? 'جزر أسوان وبساتين النخيل' : 'Aswan Nile Islands',
    main: currentLang === 'ar' ? 'المزرعة السعيدة المركزية' : 'Happy Farm Central'
  };

  const bookingCode = 'HF-' + Math.floor(100000 + Math.random() * 900000);
  document.getElementById('ticketCode').textContent = bookingCode;
  document.getElementById('ticketDest').textContent = destNames[b.destination] || 'مزارع ومنطاد مصر';
  document.getElementById('ticketDate').textContent = b.date || '2026-10-24';
  document.getElementById('ticketGuests').textContent = `${b.adults} ${currentLang === 'ar' ? 'بالغ' : 'Adults'}, ${b.kids} ${currentLang === 'ar' ? 'أطفال' : 'Kids'}`;
  document.getElementById('ticketPrice').textContent = `${b.total} ${currentLang === 'ar' ? 'ج.م' : 'EGP'}`;

  // Balloon tag on ticket if selected
  const balloonBadge = document.getElementById('ticketBalloonTag');
  if (balloonBadge) {
    if (b.addons?.balloon || b.destination === 'balloon') {
      balloonBadge.classList.remove('hidden');
    } else {
      balloonBadge.classList.add('hidden');
    }
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeBoardingPass() {
  const modal = document.getElementById('ticketModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Destination Details Modal
const destinationDetails = {
  balloon: {
    titleAr: "رحلات منطاد الأقصر الطائر في سماء النيل فجراً",
    titleEn: "Luxor Sunrise Hot Air Balloon over Nile Orchards",
    img: "assets/images/luxor_balloon_flight.jpg",
    descAr: "التجربة الأكثر سحراً في صعيد مصر. انطلق في سماء الأقصر مع تباشير الفجر الأولى، وحلّق على ارتفاع 1500 قدم فوق بساط أخضر من مزارع القصب والنخيل بمحاذاة النيل، مع إطلالة بانورامية لا تُنسى على معبد حتشبسوت ووادي الملوك.",
    descEn: "Egypt's most breathtaking sunrise adventure. Drift at 1,500 feet over verdant sugarcane fields, date palm groves, and the winding Nile River, with an unforgettable 360° panorama of Queen Hatshepsut's Temple and the Valley of the Kings.",
    scheduleAr: [
      "04:30 ص: التحرك الخاص من المزرعة إلى قاعدة الإقلاع بالبر الغربي",
      "05:15 ص: شاي وقهوة الصباح وجلسة إرشادات السلامة مع الكابتن المعتمد",
      "05:45 ص: انطلاق المنطاد مع خيوط الشروق الأولى والتحليق لمدة 45-60 دقيقة",
      "07:00 ص: الهبوط الآمن وتسليم شهادة الطيران التذكارية المعتمدة",
      "08:00 ص: العودة إلى بساتين المزرعة للاستمتاع بالإفطار الفلاحي الملكي"
    ],
    scheduleEn: [
      "04:30 AM: VIP private shuttle from the farm to West Bank launch site",
      "05:15 AM: Sunrise tea/coffee & certified safety briefing with chief pilot",
      "05:45 AM: Balloon ascent at sunrise — 45 to 60 minutes flight over Nile farms",
      "07:00 AM: Smooth landing & presentation of personalized Flight Certificate",
      "08:00 AM: Return to farm orchards for royal wood-fired Egyptian breakfast"
    ]
  },
  luxor: {
    titleAr: "مزارع الأقصر وبساتين النيل الخالدة",
    titleEn: "Luxor Nile Orchards & Historic Farms",
    img: "assets/images/luxor_balloon_real.jpg",
    descAr: "رحلة ساحرة تمتد على ضفاف النيل الغربية في الأقصر. تتجول بين حقول قصب السكر الخضراء، بساتين الموز الاستوائية، وتستمتع بضيافة أهل الصعيد مع ركوب الفلوكة النيلية عند الغروب.",
    descEn: "A magical journey along Luxor's West Bank of the Nile. Wander through verdant sugarcane fields, banana islands, and experience authentic Upper Egyptian hospitality with sunset felucca sailing.",
    scheduleAr: [
      "09:00 ص: الاستقبال وشاي الصباح الصعيدي بالنعناع",
      "10:30 ص: جولة قطف قصب السكر والموز الطازج",
      "01:00 م: ورشة صناعة الفخار القنائي القديم",
      "03:30 م: جولة فلوكة نيلية هادئة بين الجزر الزراعية",
      "05:00 م: حفل السمر الفولكلوري وشاي الحطب"
    ],
    scheduleEn: [
      "09:00 AM: Welcome & authentic morning mint tea",
      "10:30 AM: Sugarcane & fresh banana harvesting tour",
      "01:00 PM: Ancient Qena clay pottery masterclass",
      "03:30 PM: Serene Nile felucca sail around farm islands",
      "05:00 PM: Countryside campfire folklore gathering"
    ]
  },
  fayoum: {
    titleAr: "شلالات الفيوم، وادي الريان وقرية تونس",
    titleEn: "Fayoum Waterfalls, Wadi El-Rayan & Tunis Village",
    img: "assets/images/fayoum_waterfall.jpg",
    descAr: "الواحة الأكثر سحراً وقرباً للقاهرة. تجمع بين شلالات وادي الريان الطبيعية البديعة، بساتين الزيتون العضوية، وأشهر ورش الخزف والفخار الفني في قرية تونس المطلة على بحيرة قارون.",
    descEn: "Egypt's most poetic oasis escape. Blending natural waterfalls of Wadi El-Rayan, organic olive groves, and world-renowned artisan pottery studios of Tunis Village overlooking Lake Qarun.",
    scheduleAr: [
      "09:00 ص: الوصول والاستمتاع بإطلالة شلالات الفيوم",
      "10:30 ص: زيارة مزرعة الزيتون وتذوق الزيت البكر المعصور",
      "12:30 م: الانتقال إلى قرية تونس وورشة الخزف والفخار",
      "03:00 م: غداء ريفي بالفرن البلدي وطواجن الفخار",
      "05:00 م: مشاهدة غروب الشمس الساحر فوق بحيرة قارون"
    ],
    scheduleEn: [
      "09:00 AM: Arrival & panoramic waterfall view",
      "10:30 AM: Olive orchard tour & extra virgin oil tasting",
      "12:30 PM: Tunis Village artisan ceramic pottery workshop",
      "03:00 PM: Traditional wood-fired tagine lunch",
      "05:00 PM: Golden sunset viewing over Lake Qarun"
    ]
  },
  aswan: {
    titleAr: "جزر أسوان ومزارع المانجو والنخيل النوبية",
    titleEn: "Aswan Nile Islands & Nubian Mango Orchards",
    img: "assets/images/aswan_1.jpg",
    descAr: "عاصمة السحر الجنوبي ودفء النيل. تأخذك الرحلة إلى جزر أسوان النباتية وبساتين المانجو العويس والبلح الفاخر وسط طبيعة استوائية فريدة وضيافة نوبية لا تضاهى.",
    descEn: "The jewel of Upper Egypt. Journey through botanical Nile islands, legendary Owais mango farms, and majestic date palms wrapped in vibrant Nubian culture and warm hospitality.",
    scheduleAr: [
      "09:00 ص: عبور النيل بقوارب شراعية إلى الجزيرة الزراعية",
      "10:00 ص: تجربة قطف المانجو والبلح الأسواني الفاخر",
      "12:30 م: جلسة نقوش وتلوين فخار مستوحاة من التراث النوبي",
      "03:00 م: مشروب الكركديه الأسواني واللقيمات الريفية",
      "05:00 م: إيقاعات الدفوف والأغاني النيلية وقت الغروب"
    ],
    scheduleEn: [
      "09:00 AM: Sailboat Nile crossing to agricultural island",
      "10:00 AM: Aswan mango & premium date harvesting",
      "12:30 PM: Nubian pattern clay painting workshop",
      "03:00 PM: Chilled Aswan karkadeh & countryside bites",
      "05:00 PM: Sunset Nile drumming & folkloric tunes"
    ]
  }
};

function openDestinationModal(destKey) {
  const d = destinationDetails[destKey];
  if (!d) return;

  const modal = document.getElementById('destModal');
  if (!modal) return;

  document.getElementById('destModalTitle').textContent = currentLang === 'ar' ? d.titleAr : d.titleEn;
  document.getElementById('destModalImg').src = d.img;
  document.getElementById('destModalDesc').textContent = currentLang === 'ar' ? d.descAr : d.descEn;

  const schedList = document.getElementById('destModalSchedule');
  schedList.innerHTML = '';
  const items = currentLang === 'ar' ? d.scheduleAr : d.scheduleEn;
  items.forEach(it => {
    const li = document.createElement('li');
    li.className = 'flex items-center gap-3 text-neutral-200 text-sm py-1.5 border-b border-white/5';
    li.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span><span>${it}</span>`;
    schedList.appendChild(li);
  });

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeDestinationModal() {
  const modal = document.getElementById('destModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// --- HARVEST SEASONS TAB SELECTOR ---
function setSeasonTab(seasonKey) {
  document.querySelectorAll('.season-tab-btn').forEach(b => {
    if (b.getAttribute('data-season') === seasonKey) {
      b.classList.add('bg-emerald-600', 'text-white', 'shadow-lg');
      b.classList.remove('bg-white/5', 'text-neutral-400');
    } else {
      b.classList.remove('bg-emerald-600', 'text-white', 'shadow-lg');
      b.classList.add('bg-white/5', 'text-neutral-400');
    }
  });

  document.querySelectorAll('.season-panel').forEach(p => {
    if (p.getAttribute('data-season-content') === seasonKey) {
      p.classList.remove('hidden');
    } else {
      p.classList.add('hidden');
    }
  });
}

// --- FAQ ACCORDION ---
function toggleFaq(btn) {
  const content = btn.nextElementSibling;
  const icon = btn.querySelector('.faq-icon');
  const isOpen = !content.classList.contains('hidden');

  document.querySelectorAll('.faq-answer').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.faq-icon').forEach(ic => ic.style.transform = 'rotate(0deg)');

  if (!isOpen) {
    content.classList.remove('hidden');
    if (icon) icon.style.transform = 'rotate(180deg)';
  }
}

// --- CUSTOM CURSOR ---
function initCustomCursor() {
  const cursor = document.getElementById('customCursor');
  const dot = document.getElementById('customCursorDot');
  if (!cursor || !dot) return;

  window.addEventListener('mousemove', e => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
  });

  document.querySelectorAll('a, button, input, select, .tilt-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
      cursor.style.borderColor = '#F59E0B';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.borderColor = '#4ADE80';
    });
  });
}

// --- INITIALIZE EVERYTHING ON DOM READY ---
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initCanvasParticles();
  init3DTilt();
  initCustomCursor();
  setLanguage('ar');

  const navbar = document.getElementById('mainNavbar');
  const floatingBar = document.getElementById('floatingBookingBar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar?.classList.add('bg-[#07150B]/95', 'backdrop-blur-xl', 'border-white/10', 'shadow-2xl');
      navbar?.classList.remove('bg-transparent');
    } else {
      navbar?.classList.remove('bg-[#07150B]/95', 'backdrop-blur-xl', 'border-white/10', 'shadow-2xl');
      navbar?.classList.add('bg-transparent');
    }

    if (window.scrollY > 550) {
      floatingBar?.classList.remove('translate-y-32', 'opacity-0');
      floatingBar?.classList.add('translate-y-0', 'opacity-100');
    } else {
      floatingBar?.classList.add('translate-y-32', 'opacity-0');
      floatingBar?.classList.remove('translate-y-0', 'opacity-100');
    }
  });

  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(() => preloader.remove(), 700);
    }, 900);
  }

  calculatePrice();
});
