const wineCatalog = [
  {
    id: "grapefruit-gin-tonic",
    kind: "wine",
    name: "西柚雾金汤力",
    english: "Grapefruit Gin & Tonic",
    category: "金酒鸡尾酒",
    image: "assets/wine-gin-tonic.jpg",
    profile: { sweet: 28, sour: 58, bitter: 48, alcohol: 42, fresh: 92, fruit: 78 },
    moods: ["放松", "热闹", "冒险"],
    pairings: ["海鲜", "烧烤", "清淡小食", "日料"],
    tags: ["清爽", "柑橘", "气泡", "微苦"],
    reason: "西柚的明亮酸香把金酒的草本气息托得很轻，微苦和气泡感刚好适合一边聊天、一边慢慢喝。",
    stats: ["约 12% ABV", "5 分钟", "清爽微苦"],
    ingredients: [["伦敦干金酒", "45 ml"], ["西柚汁", "30 ml"], ["汤力水", "90 ml"], ["青柠汁", "10 ml"]],
    steps: ["高球杯中加入足量冰块。", "倒入金酒、西柚汁和青柠汁，轻轻搅匀。", "沿杯壁加入汤力水，用西柚皮完成装饰。"]
  },
  {
    id: "aperol-spritz",
    kind: "wine",
    name: "橙光阿佩罗",
    english: "Aperol Spritz",
    category: "低酒精鸡尾酒",
    image: "assets/wine-aperol.jpg",
    profile: { sweet: 50, sour: 34, bitter: 51, alcohol: 28, fresh: 86, fruit: 74 },
    moods: ["庆祝", "浪漫", "热闹"],
    pairings: ["炸物", "奶酪", "海鲜", "西餐"],
    tags: ["气泡", "橙香", "低酒精", "微甜"],
    reason: "明亮的橙香和柔和气泡让氛围马上轻松起来，酒精感克制，很适合聚会开场。",
    stats: ["约 9% ABV", "3 分钟", "橙香气泡"],
    ingredients: [["阿佩罗", "60 ml"], ["普罗塞克", "90 ml"], ["苏打水", "30 ml"], ["橙片", "1 片"]],
    steps: ["大号葡萄酒杯中加满冰。", "依次倒入普罗塞克、阿佩罗和苏打水。", "轻搅一次，以新鲜橙片装饰。"]
  },
  {
    id: "whiskey-sour",
    kind: "wine",
    name: "暮色威士忌酸",
    english: "Whiskey Sour",
    category: "威士忌鸡尾酒",
    image: "assets/wine-whiskey-sour.jpg",
    profile: { sweet: 53, sour: 72, bitter: 18, alcohol: 68, fresh: 48, fruit: 30 },
    moods: ["怀旧", "安静", "浪漫"],
    pairings: ["烧烤", "牛肉", "炸物", "夜宵"],
    tags: ["甜酸", "浓郁", "丝滑", "威士忌"],
    reason: "柠檬的酸度收紧威士忌的温暖木质感，入口丝滑，适合深夜聊天和稍微慢一点的节奏。",
    stats: ["约 18% ABV", "7 分钟", "酸甜浓郁"],
    ingredients: [["波本威士忌", "50 ml"], ["鲜柠檬汁", "25 ml"], ["糖浆", "15 ml"], ["蛋清（可选）", "20 ml"]],
    steps: ["将所有材料不加冰干摇 10 秒。", "加入冰块再次充分摇匀。", "过滤到装有大冰块的矮杯中，以柠檬皮装饰。"]
  },
  {
    id: "negroni",
    kind: "wine",
    name: "深红内格罗尼",
    english: "Negroni",
    category: "金酒鸡尾酒",
    image: "assets/wine-negroni.jpg",
    profile: { sweet: 39, sour: 8, bitter: 92, alcohol: 83, fresh: 27, fruit: 42 },
    moods: ["安静", "冒险", "怀旧"],
    pairings: ["奶酪", "牛肉", "烧烤", "西餐"],
    tags: ["苦甜", "草本", "浓烈", "复杂"],
    reason: "苦、甜与草本香气势均力敌，轮廓鲜明，适合想喝一杯有态度、有余韵的夜晚。",
    stats: ["约 24% ABV", "4 分钟", "苦甜草本"],
    ingredients: [["金酒", "30 ml"], ["金巴利", "30 ml"], ["甜味美思", "30 ml"], ["橙皮", "1 片"]],
    steps: ["搅拌杯中加入冰块和全部酒液。", "搅拌至充分冰镇并轻微稀释。", "滤入放有大冰块的杯中，挤压橙皮释放香气。"]
  },
  {
    id: "riesling-kabinett",
    kind: "wine",
    name: "月光雷司令",
    english: "Mosel Riesling Kabinett",
    category: "德国白葡萄酒",
    image: "assets/wine-riesling.jpg",
    profile: { sweet: 57, sour: 82, bitter: 8, alcohol: 24, fresh: 88, fruit: 91 },
    moods: ["浪漫", "放松", "庆祝"],
    pairings: ["辣", "海鲜", "日料", "水果"],
    tags: ["白花", "青苹果", "矿物感", "低酒精"],
    reason: "高酸与淡淡甜度彼此拉住，青苹果、白桃和矿物感会让辛辣或鲜味食物变得更轻盈。",
    stats: ["约 8% ABV", "8–10°C", "清甜高酸"],
    ingredients: [["产区", "Mosel"], ["葡萄", "Riesling"], ["风格", "Kabinett"], ["醒酒", "无需"]],
    steps: ["提前冰镇至 8–10°C。", "使用中小型白葡萄酒杯，倒至杯肚最宽处以下。", "开瓶后先闻香，再配辛辣或海鲜类食物饮用。"]
  },
  {
    id: "sauvignon-blanc",
    kind: "wine",
    name: "海风长相思",
    english: "Marlborough Sauvignon Blanc",
    category: "新西兰白葡萄酒",
    image: "assets/wine-sauvignon.jpg",
    profile: { sweet: 13, sour: 86, bitter: 12, alcohol: 38, fresh: 96, fruit: 76 },
    moods: ["放松", "热闹", "冒险"],
    pairings: ["海鲜", "沙拉", "日料", "清淡小食"],
    tags: ["干型", "百香果", "青草", "高酸"],
    reason: "百香果、青柠和青草气息干净直接，高酸度很醒口，尤其适合海鲜和清爽小食。",
    stats: ["约 13% ABV", "7–9°C", "干型高酸"],
    ingredients: [["产区", "Marlborough"], ["葡萄", "Sauvignon Blanc"], ["风格", "干型"], ["醒酒", "无需"]],
    steps: ["冰镇至 7–9°C。", "倒入郁金香形白葡萄酒杯。", "搭配贝类、烤鱼或香草类食物，保持酒体低温。"]
  },
  {
    id: "pinot-noir",
    kind: "wine",
    name: "林间黑皮诺",
    english: "Burgundy Pinot Noir",
    category: "法国红葡萄酒",
    image: "assets/wine-pinot.jpg",
    profile: { sweet: 15, sour: 60, bitter: 38, alcohol: 46, fresh: 45, fruit: 69 },
    moods: ["浪漫", "安静", "怀旧"],
    pairings: ["牛肉", "蘑菇", "鸭肉", "西餐"],
    tags: ["红樱桃", "泥土", "轻盈", "细腻"],
    reason: "红樱桃和林地气息细腻克制，单宁柔和，既能配蘑菇和禽类，也适合安静地单独喝。",
    stats: ["约 13% ABV", "14–16°C", "轻盈细腻"],
    ingredients: [["产区", "Burgundy"], ["葡萄", "Pinot Noir"], ["风格", "轻酒体"], ["醒酒", "15 分钟"]],
    steps: ["饮用前轻微降温至 14–16°C。", "开瓶后静置约 15 分钟。", "使用大肚红酒杯，搭配烤禽类、蘑菇或软质奶酪。"]
  },
  {
    id: "moscato",
    kind: "wine",
    name: "桃花莫斯卡托",
    english: "Moscato d'Asti",
    category: "意大利微起泡酒",
    image: "assets/wine-moscato.jpg",
    profile: { sweet: 88, sour: 43, bitter: 2, alcohol: 10, fresh: 74, fruit: 96 },
    moods: ["庆祝", "浪漫", "热闹"],
    pairings: ["甜点", "水果", "辣", "奶酪"],
    tags: ["蜜桃", "白花", "甜型", "低酒精"],
    reason: "蜜桃和白花香气轻盈讨喜，细小气泡让甜度不会沉重，是甜点局和轻松聚会的安全选择。",
    stats: ["约 5.5% ABV", "6–8°C", "甜型微泡"],
    ingredients: [["产区", "Piedmont"], ["葡萄", "Moscato Bianco"], ["风格", "甜型微泡"], ["醒酒", "无需"]],
    steps: ["充分冰镇至 6–8°C。", "使用笛形杯或小型白葡萄酒杯。", "开瓶后尽快饮用，搭配水果、轻甜点或轻辣食物。"]
  },
  {
    id: "old-fashioned",
    kind: "wine",
    name: "午夜古典",
    english: "Old Fashioned",
    category: "威士忌鸡尾酒",
    image: "assets/wine-old-fashioned.jpg",
    profile: { sweet: 36, sour: 2, bitter: 48, alcohol: 96, fresh: 12, fruit: 18 },
    moods: ["怀旧", "安静", "冒险"],
    pairings: ["牛肉", "烧烤", "巧克力", "夜宵"],
    tags: ["浓烈", "木质", "香料", "慢饮"],
    reason: "威士忌是绝对主角，糖与苦精只负责勾勒轮廓，适合把节奏慢下来的一杯。",
    stats: ["约 28% ABV", "5 分钟", "浓烈木质"],
    ingredients: [["波本威士忌", "60 ml"], ["糖浆", "7 ml"], ["芳香苦精", "2 dash"], ["橙皮", "1 片"]],
    steps: ["矮杯中加入糖浆与苦精。", "放入大冰块，分两次加入威士忌并搅拌。", "挤压橙皮释放精油后投入杯中。"]
  },
  {
    id: "junmai-ginjo",
    kind: "wine",
    name: "雪夜纯米吟酿",
    english: "Junmai Ginjo",
    category: "日本清酒",
    image: "assets/wine-sake.jpg",
    profile: { sweet: 42, sour: 36, bitter: 9, alcohol: 41, fresh: 76, fruit: 67 },
    moods: ["安静", "放松", "浪漫"],
    pairings: ["日料", "海鲜", "清淡小食", "豆腐"],
    tags: ["米香", "梨香", "柔和", "净爽"],
    reason: "梨、白花与米香干净柔和，不争抢食物味道，适合海鲜、豆腐和安静的长谈。",
    stats: ["约 15% ABV", "8–12°C", "柔和净爽"],
    ingredients: [["类型", "纯米吟酿"], ["精米步合", "≤ 60%"], ["温度", "冷饮"], ["酒器", "葡萄酒杯"]],
    steps: ["冰镇至 8–12°C，避免过度低温。", "倒入小型葡萄酒杯以聚拢香气。", "分小口饮用，搭配刺身、豆腐或盐烤鱼。"]
  }
];

const foodCatalog = [
  {
    id: "salmon-tartare",
    kind: "food",
    name: "柚香三文鱼塔塔",
    english: "Yuzu Salmon Tartare",
    category: "清爽冷食",
    image: "assets/food-salmon.jpg",
    profile: { spicy: 8, salty: 43, sour: 70, sweet: 20, umami: 82, rich: 27 },
    moods: ["浪漫", "放松", "冒险"],
    pairings: ["长相思", "清酒", "金汤力", "起泡酒"],
    tags: ["海鲜", "日料", "清淡小食", "无需加热"],
    reason: "柚子的酸香把三文鱼的油脂收得很干净，口感轻盈，却仍然有足够鲜味撑住一杯酒。",
    stats: ["15 分钟", "2–3 人", "无需加热"],
    ingredients: [["刺身级三文鱼", "200 g"], ["柚子 / 柠檬汁", "15 ml"], ["淡口酱油", "8 ml"], ["牛油果", "1/2 个"]],
    steps: ["三文鱼和牛油果切成均匀小丁。", "加入柚子汁、淡口酱油与少量橄榄油拌匀。", "冷藏 5 分钟后装盘，可搭配脆面包片。"]
  },
  {
    id: "truffle-fries",
    kind: "food",
    name: "松露帕玛森薯条",
    english: "Truffle Parmesan Fries",
    category: "聚会炸物",
    image: "assets/food-fries.jpg",
    profile: { spicy: 6, salty: 76, sour: 5, sweet: 12, umami: 70, rich: 76 },
    moods: ["热闹", "庆祝", "放松"],
    pairings: ["起泡酒", "啤酒", "内格罗尼", "长相思"],
    tags: ["炸物", "奶酪", "西餐", "多人分享"],
    reason: "外脆内软、咸香浓郁，是几乎不会出错的分享型下酒菜；高酸或带气泡的酒最能解腻。",
    stats: ["25 分钟", "3–4 人", "烤箱 / 空气炸锅"],
    ingredients: [["冷冻粗薯条", "400 g"], ["帕玛森奶酪", "30 g"], ["松露油", "8 ml"], ["欧芹", "少许"]],
    steps: ["薯条按包装说明烤至金黄酥脆。", "趁热加入松露油、盐和帕玛森碎拌匀。", "撒上欧芹，搭配柠檬蛋黄酱上桌。"]
  },
  {
    id: "spicy-skewers",
    kind: "food",
    name: "炙辣孜然小串",
    english: "Spiced Cumin Skewers",
    category: "热辣烧烤",
    image: "assets/food-skewers.jpg",
    profile: { spicy: 91, salty: 74, sour: 8, sweet: 18, umami: 88, rich: 66 },
    moods: ["热闹", "庆祝", "冒险"],
    pairings: ["雷司令", "啤酒", "莫斯卡托", "高球"],
    tags: ["辣", "烧烤", "夜宵", "多人分享"],
    reason: "孜然、辣椒和炙烤香气足够热闹，适合多人分享；微甜、低酒精或冰爽型饮品能缓解辣感。",
    stats: ["35 分钟", "4–6 人", "平底锅 / 烤箱"],
    ingredients: [["羊肉或鸡腿肉", "500 g"], ["孜然粉", "12 g"], ["辣椒面", "按口味"], ["洋葱", "1/2 个"]],
    steps: ["肉切块，与洋葱、孜然和少量油腌制 20 分钟。", "穿串后高温烤至表面焦香。", "出炉前撒盐、辣椒面和熟芝麻。"]
  },
  {
    id: "burrata-tomato",
    kind: "food",
    name: "番茄布拉塔花园",
    english: "Tomato & Burrata Garden",
    category: "奶酪冷盘",
    image: "assets/food-burrata.jpg",
    profile: { spicy: 3, salty: 38, sour: 46, sweet: 35, umami: 53, rich: 48 },
    moods: ["浪漫", "放松", "庆祝"],
    pairings: ["桃红酒", "长相思", "黑皮诺", "起泡酒"],
    tags: ["奶酪", "西餐", "清淡小食", "无需加热"],
    reason: "多汁番茄的酸甜与布拉塔的奶香形成柔和对比，漂亮、轻松，很适合作为聚会开场。",
    stats: ["10 分钟", "2–4 人", "无需加热"],
    ingredients: [["布拉塔奶酪", "1 颗"], ["彩色小番茄", "250 g"], ["罗勒", "1 把"], ["黑醋", "10 ml"]],
    steps: ["番茄切半，用盐和橄榄油轻拌。", "布拉塔放在盘中央，周围铺番茄和罗勒。", "淋少量黑醋，现磨黑胡椒后上桌。"]
  },
  {
    id: "garlic-shrimp",
    kind: "food",
    name: "蒜香黄油烤虾",
    english: "Garlic Butter Shrimp",
    category: "温热海鲜",
    image: "assets/food-shrimp.jpg",
    profile: { spicy: 18, salty: 62, sour: 28, sweet: 22, umami: 93, rich: 64 },
    moods: ["热闹", "浪漫", "放松"],
    pairings: ["长相思", "霞多丽", "金汤力", "清酒"],
    tags: ["海鲜", "西餐", "烧烤", "多人分享"],
    reason: "虾肉的鲜甜、黄油的丰润和柠檬的酸香都很明确，配白葡萄酒或清爽鸡尾酒尤其舒服。",
    stats: ["20 分钟", "3–4 人", "烤箱 / 平底锅"],
    ingredients: [["带壳大虾", "500 g"], ["无盐黄油", "35 g"], ["蒜末", "4 瓣"], ["柠檬", "1 个"]],
    steps: ["虾开背去虾线，擦干水分。", "黄油、蒜末、盐和柠檬皮屑混合后抹在虾上。", "220°C 烤 8–10 分钟，出炉挤柠檬汁。"]
  },
  {
    id: "korean-fried-chicken",
    kind: "food",
    name: "琥珀辣酱炸鸡",
    english: "Amber Glazed Fried Chicken",
    category: "甜辣炸物",
    image: "assets/food-chicken.jpg",
    profile: { spicy: 65, salty: 69, sour: 16, sweet: 63, umami: 86, rich: 88 },
    moods: ["热闹", "庆祝", "怀旧"],
    pairings: ["啤酒", "雷司令", "莫斯卡托", "气泡酒"],
    tags: ["炸物", "辣", "夜宵", "多人分享"],
    reason: "酥脆外壳裹着甜辣酱，是最直接的聚会满足感；冰爽气泡和果香型酒能让下一口继续轻松。",
    stats: ["35 分钟", "4–5 人", "空气炸锅友好"],
    ingredients: [["鸡翅 / 鸡腿块", "600 g"], ["韩式辣酱", "35 g"], ["蜂蜜", "20 g"], ["蒜末", "2 瓣"]],
    steps: ["鸡肉腌制后裹薄粉，炸或空气炸至酥脆。", "辣酱、蜂蜜和蒜末小火煮至浓稠。", "鸡块趁热裹酱，撒芝麻和葱花。"]
  },
  {
    id: "mushroom-risotto",
    kind: "food",
    name: "林野蘑菇烩饭",
    english: "Woodland Mushroom Risotto",
    category: "温暖主食",
    image: "assets/food-risotto.jpg",
    profile: { spicy: 2, salty: 55, sour: 4, sweet: 16, umami: 95, rich: 79 },
    moods: ["安静", "浪漫", "怀旧"],
    pairings: ["黑皮诺", "霞多丽", "威士忌酸", "清酒"],
    tags: ["蘑菇", "主食", "西餐", "温热"],
    reason: "蘑菇和帕玛森带来持续的鲜味与温暖质感，很适合安静晚餐，也能承接柔和红酒和桶陈白酒。",
    stats: ["40 分钟", "2–3 人", "需持续搅拌"],
    ingredients: [["意大利米", "180 g"], ["混合蘑菇", "250 g"], ["高汤", "700 ml"], ["帕玛森", "35 g"]],
    steps: ["蘑菇煎至焦香后盛出备用。", "米略炒，分次加入热高汤并持续搅拌。", "米芯微硬时拌入蘑菇、黄油和帕玛森。"]
  },
  {
    id: "lemon-tart",
    kind: "food",
    name: "盐渍柠檬挞",
    english: "Salted Lemon Tart",
    category: "清亮甜点",
    image: "assets/food-lemon-tart.jpg",
    profile: { spicy: 0, salty: 16, sour: 83, sweet: 76, umami: 9, rich: 60 },
    moods: ["浪漫", "庆祝", "放松"],
    pairings: ["莫斯卡托", "雷司令", "起泡酒", "金汤力"],
    tags: ["甜点", "水果", "西餐", "可提前准备"],
    reason: "尖亮柠檬酸度让甜点保持轻盈，一小撮海盐会把香气拉得更长，适合作为聚会收尾。",
    stats: ["45 分钟", "6 小份", "可购买成品"],
    ingredients: [["挞皮", "1 个"], ["柠檬汁", "100 ml"], ["鸡蛋", "3 个"], ["细砂糖", "100 g"]],
    steps: ["柠檬汁、蛋液和糖隔水加热至浓稠。", "离火加入黄油，搅拌至顺滑。", "倒入烤好的挞皮冷藏定型，食用前撒少量海盐。"]
  }
];

const catalog = [...wineCatalog, ...foodCatalog];
const wineDefaults = { sweet: 38, sour: 56, bitter: 28, alcohol: 42, fresh: 72, fruit: 68 };
const foodDefaults = { spicy: 28, salty: 52, sour: 32, sweet: 25, umami: 72, rich: 48 };

function resetChooserPreferences(mode) {
  state.profile = { ...(mode === "wine" ? wineDefaults : foodDefaults) };
  state.preset = null;
  state.moodValue = 36;
  state.mood = moodFromValue(state.moodValue);
  state.tags = [];
  state.category = "不限类别";
}

const presets = {
  wine: {
    "清爽果香": { sweet: 32, sour: 67, bitter: 20, alcohol: 34, fresh: 92, fruit: 84 },
    "甜酸平衡": { sweet: 58, sour: 62, bitter: 16, alcohol: 42, fresh: 67, fruit: 71 },
    "干型复杂": { sweet: 12, sour: 59, bitter: 56, alcohol: 63, fresh: 38, fruit: 42 },
    "烈酒感强": { sweet: 29, sour: 22, bitter: 51, alcohol: 92, fresh: 19, fruit: 28 },
    "轻松低醇": { sweet: 52, sour: 48, bitter: 20, alcohol: 15, fresh: 82, fruit: 80 }
  },
  food: {
    "清鲜开胃": { spicy: 8, salty: 40, sour: 67, sweet: 20, umami: 71, rich: 24 },
    "热辣过瘾": { spicy: 90, salty: 72, sour: 18, sweet: 26, umami: 88, rich: 67 },
    "咸香浓郁": { spicy: 24, salty: 76, sour: 8, sweet: 18, umami: 92, rich: 86 },
    "甜蜜收尾": { spicy: 0, salty: 11, sour: 36, sweet: 91, umami: 10, rich: 55 },
    "轻盈少负担": { spicy: 10, salty: 35, sour: 38, sweet: 18, umami: 59, rich: 15 }
  }
};

const rangeLabels = {
  wine: { sweet: "甜度", sour: "酸度", bitter: "苦味", alcohol: "酒精感", fresh: "清爽度", fruit: "果香" },
  food: { spicy: "辣度", salty: "咸度", sour: "酸度", sweet: "甜度", umami: "鲜味", rich: "浓郁度" }
};

const modeTags = {
  wine: ["海鲜", "烧烤", "辣", "奶酪", "炸物", "甜点", "日料", "清淡小食", "夜宵", "今天不配餐"],
  food: ["下酒小食", "海鲜", "烧烤", "炸物", "奶酪", "主食", "甜点", "夜宵", "无需加热", "今天不配酒"]
};

const categoryTags = {
  wine: ["不限类别", "鸡尾酒", "红葡萄酒", "白葡萄酒", "起泡酒", "威士忌", "清酒", "低酒精"],
  food: ["不限类别", "清爽冷食", "热辣烧烤", "聚会炸物", "温暖主食", "奶酪冷盘", "甜点"]
};

const moodStops = [
  { value: 0, label: "安静" },
  { value: 18, label: "浪漫" },
  { value: 36, label: "放松" },
  { value: 52, label: "怀旧" },
  { value: 68, label: "庆祝" },
  { value: 84, label: "热闹" },
  { value: 100, label: "冒险" }
];

function moodFromValue(value) {
  return moodStops.reduce((closest, stop) => Math.abs(stop.value - value) < Math.abs(closest.value - value) ? stop : closest, moodStops[0]).label;
}

const state = {
  view: "home",
  mode: null,
  step: 1,
  profile: {},
  preset: null,
  mood: "随心",
  moodValue: 36,
  tags: [],
  category: "不限类别",
  result: null,
  resultPool: [],
  resultIndex: 0,
  rerolls: 0,
  saved: JSON.parse(localStorage.getItem("zhuojian-saved") || "[]"),
  diy: {}
};

const app = document.querySelector("#app");
const toast = document.querySelector("#toast");

function homeTemplate() {
  return `
    <section class="home-hero">
      <div class="hero-copy">
        <span class="eyebrow">Tonight's pairing guide</span>
        <h1>今晚，<br><em>酌什么？</em></h1>
        <p>跟着当下的口味和心情，找到恰好适合今晚的一杯，或是一道愿意与朋友分享的食物。</p>
        <div class="hero-meta">
          <span class="meta-pill">按心情选择</span>
          <span class="meta-pill">酒食双向搭配</span>
          <span class="meta-pill">专属 DIY</span>
        </div>
      </div>
      <div class="hero-visual" role="img" aria-label="暖色灯光下的葡萄酒杯">
        <div class="hero-caption">
          <div><strong>一杯刚刚好</strong><span>不必懂酒，只需要知道现在的感觉</span></div>
          <span class="caption-code">VOL. 01</span>
        </div>
      </div>
    </section>

    <section>
      <div class="section-heading">
        <h2>从哪里开始？</h2>
        <p>另一项随时可以跳过</p>
      </div>
      <div class="mode-grid">
        <button class="mode-card wine-card" data-action="choose-wine">
          <div><span class="mode-kicker">Start with a drink</span><h3>先选一杯</h3><p>从甜、酸、酒精感和今晚的心情开始。</p></div>
          <span class="mode-arrow">↗</span>
        </button>
        <button class="mode-card food-card" data-action="choose-food">
          <div><span class="mode-kicker">Start with a bite</span><h3>先选一口</h3><p>从口味、食材与分享方式开始。</p></div>
          <span class="mode-arrow">↗</span>
        </button>
      </div>
      <div class="action-row" style="justify-content:center;margin-top:16px">
        <button class="ghost-button" data-action="random-pick">交给今晚的运气</button>
      </div>
    </section>

    <section class="inspiration-section">
      <div class="section-heading">
        <h2>今晚的灵感</h2>
        <p>三个不需要犹豫的开场</p>
      </div>
      <div class="inspiration-grid">
        <button class="inspiration-card" data-open-id="lemon-tart">
          <div class="inspiration-image"></div><h4>酸甜之后</h4><p>盐渍柠檬挞，适合让聚会慢慢收尾。</p><div class="inspiration-code">DESSERT / 01</div>
        </button>
        <button class="inspiration-card" data-open-id="grapefruit-gin-tonic">
          <div class="inspiration-image"></div><h4>西柚与气泡</h4><p>清爽、微苦，是最轻松的一杯开场。</p><div class="inspiration-code">COCKTAIL / 02</div>
        </button>
        <button class="inspiration-card" data-open-id="burrata-tomato">
          <div class="inspiration-image"></div><h4>番茄与奶香</h4><p>不用开火，也足够漂亮的分享冷盘。</p><div class="inspiration-code">FOOD / 03</div>
        </button>
      </div>
    </section>

    <div class="footer-note">
      <strong>不懂酒，也可以选得很好。</strong>
      <p>每次选择都会留下一点偏好，让下一次更接近你。</p>
    </div>`;
}

function renderHome() {
  state.view = "home";
  state.mode = null;
  app.innerHTML = homeTemplate();
  window.scrollTo({ top: 0, behavior: "smooth" });
  updateSavedCount();
}

function beginChooser(mode) {
  state.mode = mode;
  state.view = "chooser";
  state.step = 1;
  resetChooserPreferences(mode);
  state.rerolls = 0;
  renderChooser();
}

function renderChooser() {
  const isWine = state.mode === "wine";
  const labels = rangeLabels[state.mode];
  const selectedProfile = state.profile;
  const step = state.step;
  const stepNames = ["STYLE", "TASTE", "MOOD", "PAIRING", "TYPE"];
  const stepTitles = isWine
    ? ["先挑一个今晚的方向", "把味道拉到舒服的位置", "把心情放进这一杯", "想和什么一起出现？", "最后决定酒的类别"]
    : ["先挑一个今晚的方向", "把口感拉到舒服的位置", "把心情放进这一口", "想在桌上分享什么？", "最后决定食物的形式"];
  const stepDescriptions = isWine
    ? ["先选一个接近的风格，后面的每一步都会继续细化它。", "每个味道独立调整，不需要把所有数值凑成 100%。", "拖到最接近今晚能量的位置，系统会把它用于匹配。", "这一步可以跳过，另一项不会被强制绑定。", "保持不限也没关系，让口味替你决定。"]
    : ["先选一个接近的风格，后面的每一步都会继续细化它。", "每个口感独立调整，不需要把所有数值凑成 100%。", "拖到最接近今晚能量的位置，系统会把它用于匹配。", "这一步可以跳过，另一项不会被强制绑定。", "保持不限也没关系，让口味替你决定。"];

  let stepPanel = "";
  if (step === 1) {
    stepPanel = `
      <section class="panel wizard-panel">
        <div class="panel-title"><h2>${stepTitles[0]}</h2><span>01 / ${stepNames[0]}</span></div>
        <p class="wizard-description">${stepDescriptions[0]}</p>
        <div class="chip-grid">
          ${Object.keys(presets[state.mode]).map(name => `<button class="chip ${state.preset === name ? "selected" : ""}" data-preset="${name}">${name}</button>`).join("")}
        </div>
        <div class="wizard-actions">
          <button class="outline-button" data-action="home">返回首页</button>
          <button class="primary-button" data-action="next-step">下一步 <span aria-hidden="true">→</span></button>
        </div>
      </section>`;
  } else if (step === 2) {
    stepPanel = `
      <section class="panel wizard-panel">
        <div class="panel-title"><h2>${stepTitles[1]}</h2><span>02 / ${stepNames[1]}</span></div>
        <p class="wizard-description">${stepDescriptions[1]}</p>
        <div class="range-list">
          ${Object.entries(labels).map(([key, name]) => `
            <label class="range-row">
              <span class="range-name">${name}</span>
              <input type="range" min="0" max="100" value="${selectedProfile[key]}" data-range="${key}" aria-label="${name}">
              <span class="range-value" data-range-value="${key}">${selectedProfile[key]}%</span>
            </label>`).join("")}
        </div>
        <div class="wizard-actions">
          <button class="outline-button" data-action="prev-step">上一步</button>
          <button class="primary-button" data-action="next-step">下一步 <span aria-hidden="true">→</span></button>
        </div>
      </section>`;
  } else if (step === 3) {
    stepPanel = `
      <section class="panel wizard-panel">
        <div class="panel-title"><h2>${stepTitles[2]}</h2><span>03 / ${stepNames[2]}</span></div>
        <p class="wizard-description">${stepDescriptions[2]}</p>
        <div class="mood-slider-card">
          <div class="mood-slider-heading"><span>今晚的能量</span><strong id="moodSelected">${state.mood}</strong></div>
          <input class="mood-range" type="range" min="0" max="100" value="${state.moodValue}" data-mood-range aria-label="心情">
          <div class="mood-scale" aria-hidden="true">
            ${moodStops.map(stop => `<span style="left:${stop.value}%">${stop.label}</span>`).join("")}
          </div>
          <div class="mood-slider-value"><span>更安静</span><span id="moodValueText">${state.moodValue}%</span><span>更有能量</span></div>
        </div>
        <div class="wizard-actions">
          <button class="outline-button" data-action="prev-step">上一步</button>
          <button class="primary-button" data-action="next-step">下一步 <span aria-hidden="true">→</span></button>
        </div>
      </section>`;
  } else if (step === 4) {
    stepPanel = `
      <section class="panel wizard-panel">
        <div class="panel-title"><h2>${stepTitles[3]}</h2><span>04 / ${stepNames[3]}</span></div>
        <p class="wizard-description">${stepDescriptions[3]}</p>
        <div class="chip-grid">
          ${modeTags[state.mode].map(tag => `<button class="chip ${state.tags.includes(tag) ? "selected soft" : ""}" data-tag="${tag}">${tag}</button>`).join("")}
        </div>
        <div class="wizard-actions">
          <button class="outline-button" data-action="prev-step">上一步</button>
          <button class="primary-button" data-action="next-step">下一步 <span aria-hidden="true">→</span></button>
        </div>
      </section>`;
  } else {
    stepPanel = `
      <section class="panel wizard-panel">
        <div class="panel-title"><h2>${stepTitles[4]}</h2><span>05 / ${stepNames[4]}</span></div>
        <p class="wizard-description">${stepDescriptions[4]}</p>
        <div class="chip-grid">
          ${categoryTags[state.mode].map(tag => `<button class="chip ${state.category === tag ? "selected" : ""}" data-category="${tag}">${tag}</button>`).join("")}
        </div>
        <div class="wizard-actions">
          <button class="outline-button" data-action="prev-step">上一步</button>
          <button class="primary-button" data-action="generate">生成推荐 <span aria-hidden="true">↗</span></button>
        </div>
      </section>`;
  }

  app.innerHTML = `
    <section class="flow-header">
      <div>
        <span class="eyebrow">${isWine ? "Choose a drink" : "Choose a bite"}</span>
        <h1>${isWine ? "把今晚调成喜欢的味道" : "把今晚摆成想吃的样子"}</h1>
        <div class="stepper" aria-label="当前进度">
          ${stepNames.map((name, index) => `<span class="step-dot ${index + 1 === step ? "active" : index + 1 < step ? "done" : ""}" title="${name}"></span>`).join("")}
        </div>
      </div>
      <p>${stepDescriptions[step - 1]}</p>
    </section>
    <div class="chooser-layout">
      <div>${stepPanel}</div>

      <aside class="sticky-summary">
        <div class="summary-card">
          <span class="eyebrow">Your mood tonight</span>
          <h2>${isWine ? "今晚这杯的轮廓" : "今晚这一口的轮廓"}</h2>
          <p>${isWine ? "我们会在经典酒款和鸡尾酒之间，寻找最接近这个轮廓的选择。" : "我们会兼顾味道、准备方式和分享场景，给出一道真正能落地的选择。"}</p>
          <div class="summary-divider"></div>
          <div class="summary-progress"><span>当前步骤</span><strong>${String(step).padStart(2, "0")} / 05</strong></div>
          <div class="summary-tags" id="summaryTags"></div>
          <p class="summary-quote" id="summaryQuote"></p>
        </div>
        <p class="microcopy">每一步都可以回到上一步修改。</p>
      </aside>
    </div>`;
  paintRanges();
  paintMoodRange();
  updateSummary();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function paintRanges() {
  document.querySelectorAll('input[type="range"]:not([data-mood-range])').forEach(input => {
    const value = Number(input.value);
    input.style.background = `linear-gradient(90deg, var(--wine) 0%, var(--wine) ${value}%, rgba(25,25,22,.12) ${value}%, rgba(25,25,22,.12) 100%)`;
  });
}

function paintMoodRange() {
  const input = document.querySelector("[data-mood-range]");
  if (!input) return;
  const value = Number(input.value);
  input.style.background = `linear-gradient(90deg, #687968 0%, #bd7e3e ${Math.max(value, 1)}%, rgba(25,25,22,.12) ${Math.max(value, 1)}%, rgba(25,25,22,.12) 100%)`;
}

function updateSummary() {
  const tags = [];
  if (state.preset) tags.push(state.preset);
  if (state.mood) tags.push(state.mood);
  tags.push(...state.tags.slice(0, 3));
  if (state.category !== "不限类别") tags.push(state.category);
  const el = document.querySelector("#summaryTags");
  if (el) el.innerHTML = tags.length ? tags.map(tag => `<span class="summary-tag">${tag}</span>`).join("") : `<span class="summary-empty">还没有额外限定</span>`;
  const quote = document.querySelector("#summaryQuote");
  if (quote) quote.textContent = profileSentence();
}

function profileSentence() {
  const sorted = Object.entries(state.profile).sort((a, b) => b[1] - a[1]).slice(0, 2);
  const labels = rangeLabels[state.mode];
  const first = labels[sorted[0][0]];
  const second = labels[sorted[1][0]];
  return state.mode === "wine" ? `“${state.mood}的心情，偏向${first}，带一点${second}。”` : `“${state.mood}的心情，想要${first}，也在意${second}。”`;
}

function scoreItem(item) {
  const profileKeys = Object.keys(state.profile);
  const distance = profileKeys.reduce((sum, key) => sum + Math.abs(state.profile[key] - item.profile[key]), 0) / profileKeys.length;
  let score = 100 - distance;
  if (state.mood !== "随心" && item.moods.includes(state.mood)) score += 15;
  state.tags.forEach(tag => {
    if (item.tags.includes(tag) || item.pairings.includes(tag)) score += 8;
  });
  const category = state.category;
  if (category !== "不限类别") {
    const map = {
      "鸡尾酒": "鸡尾酒", "红葡萄酒": "红葡萄酒", "白葡萄酒": "白葡萄酒", "起泡酒": "起泡", "威士忌": "威士忌", "清酒": "清酒", "低酒精": "低酒精",
      "清爽冷食": "清爽冷食", "热辣烧烤": "烧烤", "聚会炸物": "炸物", "温暖主食": "主食", "奶酪冷盘": "奶酪", "甜点": "甜点"
    };
    if (item.category.includes(map[category]) || item.tags.some(tag => tag.includes(map[category]))) score += 20;
    else score -= 8;
  }
  return score + Math.random() * 4;
}

function generateRecommendation() {
  const source = state.mode === "wine" ? wineCatalog : foodCatalog;
  state.resultPool = [...source].sort((a, b) => scoreItem(b) - scoreItem(a)).slice(0, 6);
  state.resultIndex = 0;
  state.result = state.resultPool[0];
  state.rerolls = 0;
  renderResult();
}

function renderResult() {
  state.view = "result";
  const item = state.result;
  const isWine = item.kind === "wine";
  const alternatives = state.resultPool.filter(x => x.id !== item.id).slice(0, 2);
  const isSaved = state.saved.includes(item.id);
  const skipPairing = state.tags.includes(isWine ? "今天不配餐" : "今天不配酒");
  app.innerHTML = `
    <div class="results-wrap">
      <section class="results-top">
        <div><span class="eyebrow">${isWine ? "Your drink tonight" : "Your bite tonight"}</span><h1>这一${isWine ? "杯" : "口"}，很接近今晚。</h1></div>
        <p>匹配了你的口味、心情和场景<br>第 ${state.resultIndex + 1} 个候选</p>
      </section>
      <div class="result-layout">
        <article class="result-hero-card" style="background-image:url('${item.image}')">
          <div class="result-index"><span>${item.english}</span><button class="save-result ${isSaved ? "saved" : ""}" data-action="save-result" aria-label="收藏推荐" title="收藏">${isSaved ? "★" : "☆"}</button></div>
          <div class="result-bottom">
            <div><span class="result-category">${item.category}</span><h2>${item.name}</h2><p class="result-reason">${item.reason}</p></div>
            <div class="result-stats">${item.stats.map(stat => `<span class="result-stat">${stat}</span>`).join("")}</div>
          </div>
        </article>

        <div class="result-side">
          <section class="detail-panel">
            <h3>${isWine ? "酒款与材料" : "准备清单"}</h3>
            <ul class="ingredient-list">${item.ingredients.map(([name, value]) => `<li><span>${name}</span><span>${value}</span></li>`).join("")}</ul>
          </section>
          <section class="detail-panel">
            <h3>${isWine ? "怎么喝 / 怎么调" : "简单做法"}</h3>
            <ol class="steps-list">${item.steps.map(step => `<li>${step}</li>`).join("")}</ol>
          </section>
          <section class="reroll-panel">
            <div class="reroll-head"><strong>${state.rerolls === 0 ? "不太对味？" : "再换一个方向"}</strong><span class="reroll-count">${state.rerolls} / 3</span></div>
            <p>${state.rerolls < 2 ? "每次更换都会拉开一点风格差异。三次之后，我们一起做一个专属版本。" : "再换一次，就带着这些偏好进入专属 DIY。"}</p>
            <button class="primary-button" data-action="reroll">换一个</button>
          </section>
          <div class="next-actions">
            <button class="ghost-button" data-action="adjust">调整偏好</button>
            ${skipPairing ? "" : `<button class="primary-button" data-action="pair-result">给它配${isWine ? "一道菜" : "一杯酒"}</button>`}
          </div>
          ${alternatives.length ? `<section class="mini-options">${alternatives.map(alt => `
            <button class="result-mini" data-open-id="${alt.id}">
              <span class="mini-thumb" style="background-image:url('${alt.image}')"></span>
              <span><h4>${alt.name}</h4><p>${alt.tags.slice(0, 3).join(" · ")}</p></span><span class="mini-arrow">›</span>
            </button>`).join("")}</section>` : ""}
        </div>
      </div>
    </div>`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function reroll() {
  state.rerolls += 1;
  if (state.rerolls >= 3) {
    setupDiy();
    renderDiy();
    return;
  }
  state.resultIndex = (state.resultIndex + 1) % state.resultPool.length;
  state.result = state.resultPool[state.resultIndex];
  renderResult();
}

function pairCurrentResult() {
  const current = state.result;
  const source = current.kind === "wine" ? foodCatalog : wineCatalog;
  const scored = source.map(item => {
    let score = 0;
    current.pairings.forEach(pairing => {
      if (item.tags.some(tag => tag.includes(pairing)) || item.category.includes(pairing) || item.name.includes(pairing)) score += 10;
    });
    item.pairings.forEach(pairing => {
      if (current.tags.some(tag => tag.includes(pairing)) || current.category.includes(pairing)) score += 6;
    });
    return { item, score: score + Math.random() * 5 };
  }).sort((a, b) => b.score - a.score);
  state.mode = current.kind === "wine" ? "food" : "wine";
  resetChooserPreferences(state.mode);
  state.resultPool = scored.map(x => x.item);
  state.resultIndex = 0;
  state.result = state.resultPool[0];
  state.rerolls = 0;
  showToast(`已经为「${current.name}」找到搭配`);
  renderResult();
}

function setupDiy() {
  if (state.mode === "wine") {
    state.diy = { base: "金酒", acid: "西柚", sweet: "蜂蜜", finish: "汤力水", style: "清爽微苦", seed: 0 };
  } else {
    state.diy = { base: "鸡腿肉", method: "炙烤", sauce: "柚子胡椒", texture: "外脆内嫩", finish: "香草", seed: 0 };
  }
}

function renderDiy() {
  state.view = "diy";
  if (!Object.keys(state.diy).length) setupDiy();
  const isWine = state.mode === "wine";
  const fields = isWine ? [
    ["base", "基酒", ["金酒", "伏特加", "白朗姆", "波本威士忌", "清酒"]],
    ["acid", "酸味", ["西柚", "青柠", "柠檬", "百香果", "不加酸"]],
    ["sweet", "甜味", ["蜂蜜", "糖浆", "接骨木花糖浆", "苹果汁", "不额外加甜"]],
    ["finish", "收尾", ["汤力水", "苏打水", "姜汁汽水", "冷泡茶", "不加气泡"]],
    ["style", "整体风格", ["清爽微苦", "酸甜明亮", "花果柔和", "浓郁温暖", "干爽克制"]]
  ] : [
    ["base", "主角", ["鸡腿肉", "鲜虾", "蘑菇", "豆腐", "土豆"]],
    ["method", "做法", ["炙烤", "香煎", "空气炸", "凉拌", "慢烤"]],
    ["sauce", "味道", ["柚子胡椒", "蒜香黄油", "孜然辣椒", "味噌蜂蜜", "柠檬香草"]],
    ["texture", "口感", ["外脆内嫩", "柔软多汁", "焦香酥脆", "清爽脆口", "绵密温暖"]],
    ["finish", "最后一点", ["香草", "芝麻", "帕玛森", "柠檬皮", "烟熏盐"]]
  ];
  app.innerHTML = `
    <div class="diy-wrap">
      <section class="diy-header">
        <span class="eyebrow">Made for this moment</span>
        <h1>那就做一个只属于今晚的。</h1>
        <p>前面的选择已经留下了轮廓。现在只需要挑几种手边方便的材料，我们来完成最后一步。</p>
      </section>
      <div class="diy-layout">
        <section class="panel diy-controls">
          <div class="panel-title"><h2>${isWine ? "调一杯" : "拼一盘"}</h2><span>DIY / 01</span></div>
          ${fields.map(([key, label, options]) => `
            <div class="select-field"><label for="diy-${key}">${label}</label><select id="diy-${key}" data-diy-key="${key}">${options.map(option => `<option ${state.diy[key] === option ? "selected" : ""}>${option}</option>`).join("")}</select></div>`).join("")}
          <div class="action-row">
            <button class="ghost-button" data-action="adjust">返回调整</button>
            <button class="primary-button" data-action="rename-diy">换个灵感</button>
          </div>
        </section>
        <section class="diy-output" id="diyOutput">${diyOutputTemplate()}</section>
      </div>
    </div>`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function diyOutputTemplate() {
  const d = state.diy;
  const isWine = state.mode === "wine";
  const wineNames = ["雾光", "晚风", "琥珀信笺", "零点花园", "月下回声", "微光入杯"];
  const foodNames = ["夜色小盘", "炉边分享盘", "晚风一口", "微醺食刻", "月下小宴", "朋友的深夜盘"];
  const names = isWine ? wineNames : foodNames;
  const name = names[(d.seed || 0) % names.length];
  if (isWine) {
    const acidAmount = d.acid === "不加酸" ? "" : ` + ${d.acid}汁 20 ml`;
    const sweetAmount = d.sweet === "不额外加甜" ? "" : ` + ${d.sweet} 10 ml`;
    const finishAmount = d.finish === "不加气泡" ? "" : ` + ${d.finish} 80 ml`;
    return `<span class="eyebrow">Your own drink</span><h2>${name}</h2><p class="diy-description">以${d.base}为骨架，${d.acid === "不加酸" ? "保持干净利落" : `用${d.acid}提亮`}，${d.sweet === "不额外加甜" ? "不额外增加甜度" : `让${d.sweet}补上圆润感`}。最后呈现为${d.style}的风格。</p><div class="formula">${d.base} 45 ml${acidAmount}${sweetAmount}${finishAmount}</div><div class="diy-badges"><span class="diy-badge">杯中加满冰</span><span class="diy-badge">轻搅 8–10 秒</span><span class="diy-badge">先少量试味</span><span class="diy-badge">约 1 杯份量</span></div>`;
  }
  return `<span class="eyebrow">Your own plate</span><h2>${name}</h2><p class="diy-description">用${d.method}把${d.base}做出${d.texture}的口感，以${d.sauce}作为主味道，最后撒一点${d.finish}。适合放在桌中央一起分享。</p><div class="formula">${d.base} 300 g + ${d.sauce} 2 汤匙 + ${d.finish}适量</div><div class="diy-badges"><span class="diy-badge">约 2–3 人份</span><span class="diy-badge">先调酱再烹饪</span><span class="diy-badge">趁热上桌</span><span class="diy-badge">可按口味减盐</span></div>`;
}

function updateDiyOutput() {
  const output = document.querySelector("#diyOutput");
  if (output) output.innerHTML = diyOutputTemplate();
}

function saveCurrentResult() {
  const id = state.result.id;
  if (state.saved.includes(id)) {
    state.saved = state.saved.filter(savedId => savedId !== id);
    showToast("已移出收藏");
  } else {
    state.saved.push(id);
    showToast("已收藏，留到下次聚会");
  }
  localStorage.setItem("zhuojian-saved", JSON.stringify(state.saved));
  updateSavedCount();
  renderResult();
}

function updateSavedCount() {
  const count = document.querySelector(".saved-count");
  if (!count) return;
  count.textContent = state.saved.length;
  count.classList.toggle("has-items", state.saved.length > 0);
}

function renderSaved() {
  state.view = "saved";
  const items = state.saved.map(id => catalog.find(item => item.id === id)).filter(Boolean);
  app.innerHTML = `
    <div class="saved-wrap">
      <section class="saved-header"><span class="eyebrow">Saved moments</span><h1>留给下一次的味道</h1></section>
      ${items.length ? `<div class="saved-list">${items.map(item => `<button class="saved-row" data-open-id="${item.id}"><span class="saved-row-thumb" style="background-image:url('${item.image}')"></span><span><h3>${item.name}</h3><p>${item.tags.slice(0, 4).join(" · ")}</p></span><span class="saved-kind">${item.kind === "wine" ? "酒" : "食"}</span></button>`).join("")}</div>` : `<div class="saved-empty"><strong>这里还空着。</strong><p>遇到喜欢的酒或食物时，点一下星标，它就会留在这里。</p><button class="primary-button" data-action="home">回到首页</button></div>`}
    </div>`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openCatalogItem(id) {
  const item = catalog.find(entry => entry.id === id);
  if (!item) return;
  state.mode = item.kind;
  resetChooserPreferences(state.mode);
  state.resultPool = item.kind === "wine" ? wineCatalog : foodCatalog;
  state.result = item;
  state.resultIndex = state.resultPool.findIndex(entry => entry.id === id);
  state.rerolls = 0;
  state.tags = [];
  renderResult();
}

function randomPick() {
  const item = catalog[Math.floor(Math.random() * catalog.length)];
  openCatalogItem(item.id);
}

let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2300);
}

document.addEventListener("click", event => {
  const actionButton = event.target.closest("[data-action]");
  const presetButton = event.target.closest("[data-preset]");
  const tagButton = event.target.closest("[data-tag]");
  const categoryButton = event.target.closest("[data-category]");
  const openButton = event.target.closest("[data-open-id]");

  if (presetButton) {
    const preset = presetButton.dataset.preset;
    state.preset = state.preset === preset ? null : preset;
    if (state.preset) state.profile = { ...presets[state.mode][preset] };
    renderChooser();
    return;
  }
  if (tagButton) {
    const tag = tagButton.dataset.tag;
    const exclusive = tag.startsWith("今天不配");
    if (state.tags.includes(tag)) state.tags = state.tags.filter(value => value !== tag);
    else {
      if (exclusive) state.tags = [tag];
      else {
        state.tags = state.tags.filter(value => !value.startsWith("今天不配"));
        state.tags.push(tag);
      }
    }
    document.querySelectorAll("[data-tag]").forEach(btn => {
      const selected = state.tags.includes(btn.dataset.tag);
      btn.classList.toggle("selected", selected);
      btn.classList.toggle("soft", selected);
    });
    updateSummary();
    return;
  }
  if (categoryButton) {
    state.category = categoryButton.dataset.category;
    document.querySelectorAll("[data-category]").forEach(btn => btn.classList.toggle("selected", btn.dataset.category === state.category));
    updateSummary();
    return;
  }
  if (openButton) {
    openCatalogItem(openButton.dataset.openId);
    return;
  }
  if (!actionButton) return;
  const action = actionButton.dataset.action;
  if (action === "home") renderHome();
  if (action === "choose-wine") beginChooser("wine");
  if (action === "choose-food") beginChooser("food");
  if (action === "random-pick") randomPick();
  if (action === "next-step") {
    if (state.step < 5) {
      state.step += 1;
      renderChooser();
    } else generateRecommendation();
  }
  if (action === "prev-step") {
    if (state.step > 1) {
      state.step -= 1;
      renderChooser();
    } else renderHome();
  }
  if (action === "generate") generateRecommendation();
  if (action === "reroll") reroll();
  if (action === "adjust") { state.step = 1; renderChooser(); }
  if (action === "pair-result") pairCurrentResult();
  if (action === "save-result") saveCurrentResult();
  if (action === "show-saved") renderSaved();
  if (action === "profile") showToast("你的口味档案会随着收藏慢慢长出来");
  if (action === "rename-diy") { state.diy.seed = (state.diy.seed || 0) + 1; updateDiyOutput(); }
});

document.addEventListener("input", event => {
  if (event.target.matches("[data-mood-range]")) {
    state.moodValue = Number(event.target.value);
    state.mood = moodFromValue(state.moodValue);
    const selected = document.querySelector("#moodSelected");
    if (selected) selected.textContent = state.mood;
    const moodValueText = document.querySelector("#moodValueText");
    if (moodValueText) moodValueText.textContent = `${state.moodValue}%`;
    paintMoodRange();
    updateSummary();
    return;
  }
  if (!event.target.matches("[data-range]")) return;
  const key = event.target.dataset.range;
  state.profile[key] = Number(event.target.value);
  state.preset = null;
  const value = document.querySelector(`[data-range-value="${key}"]`);
  if (value) value.textContent = `${event.target.value}%`;
  event.target.style.background = `linear-gradient(90deg, var(--wine) 0%, var(--wine) ${event.target.value}%, rgba(25,25,22,.12) ${event.target.value}%, rgba(25,25,22,.12) 100%)`;
  document.querySelectorAll("[data-preset]").forEach(btn => btn.classList.remove("selected"));
  updateSummary();
});

document.addEventListener("change", event => {
  if (!event.target.matches("[data-diy-key]")) return;
  state.diy[event.target.dataset.diyKey] = event.target.value;
  updateDiyOutput();
});

renderHome();
