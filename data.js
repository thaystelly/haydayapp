// ============================================================
//  Hay Day Manager — Dados do jogo (recursos e receitas)
// ============================================================

const DEFAULT_RESOURCES = [
  // === CULTURAS (Plantações de campo) ===
  { id:'wheat',        name:'Trigo',               emoji:'🌾', category:'Culturas', qty:0 },
  { id:'corn',         name:'Milho',                emoji:'🌽', category:'Culturas', qty:0 },
  { id:'carrot',       name:'Cenoura',              emoji:'🥕', category:'Culturas', qty:0 },
  { id:'soybean',      name:'Soja',                 emoji:'🫘', category:'Culturas', qty:0 },
  { id:'sugarcane',    name:'Cana-de-açúcar',       emoji:'🎋', category:'Culturas', qty:0 },
  { id:'pumpkin',      name:'Abóbora',              emoji:'🎃', category:'Culturas', qty:0 },
  { id:'chili',        name:'Pimenta',              emoji:'🌶️', category:'Culturas', qty:0 },
  { id:'strawberry',   name:'Morango',              emoji:'🍓', category:'Culturas', qty:0 },
  { id:'cotton',       name:'Algodão',              emoji:'🌸', category:'Culturas', qty:0 },
  { id:'indigo',       name:'Índigo',               emoji:'🔵', category:'Culturas', qty:0 },
  { id:'tomato',       name:'Tomate',               emoji:'🍅', category:'Culturas', qty:0 },
  { id:'potato',       name:'Batata',               emoji:'🥔', category:'Culturas', qty:0 },
  { id:'rice',         name:'Arroz',                emoji:'🍚', category:'Culturas', qty:0 },
  { id:'lettuce',      name:'Alface',               emoji:'🥬', category:'Culturas', qty:0 },
  { id:'onion',        name:'Cebola',               emoji:'🧅', category:'Culturas', qty:0 },
  { id:'tea_leaf',     name:'Folha de Chá',         emoji:'🍵', category:'Culturas', qty:0 },
  { id:'grape',        name:'Uva',                  emoji:'🍇', category:'Culturas', qty:0 },
  { id:'sesame',       name:'Gergelim',             emoji:'🌿', category:'Culturas', qty:0 },
  { id:'peanut',       name:'Amendoim',             emoji:'🥜', category:'Culturas', qty:0 },
  { id:'sunflower',    name:'Girassol',             emoji:'🌻', category:'Culturas', qty:0 },
  { id:'ginger',       name:'Gengibre',             emoji:'🫚', category:'Culturas', qty:0 },

  // === ÁRVORES & ARBUSTOS ===
  { id:'apple',        name:'Maçã',                 emoji:'🍎', category:'Árvores & Arbustos', qty:0 },
  { id:'cherry',       name:'Cereja',               emoji:'🍒', category:'Árvores & Arbustos', qty:0 },
  { id:'cacao',        name:'Cacau',                emoji:'🫘', category:'Árvores & Arbustos', qty:0 },
  { id:'olive',        name:'Azeitona',             emoji:'🫒', category:'Árvores & Arbustos', qty:0 },
  { id:'lemon',        name:'Limão',                emoji:'🍋', category:'Árvores & Arbustos', qty:0 },
  { id:'orange',       name:'Laranja',              emoji:'🍊', category:'Árvores & Arbustos', qty:0 },
  { id:'peach',        name:'Pêssego',              emoji:'🍑', category:'Árvores & Arbustos', qty:0 },
  { id:'banana',       name:'Banana',               emoji:'🍌', category:'Árvores & Arbustos', qty:0 },
  { id:'raspberry',    name:'Framboesa',            emoji:'🫐', category:'Árvores & Arbustos', qty:0 },
  { id:'blackberry',   name:'Amora',                emoji:'🍇', category:'Árvores & Arbustos', qty:0 },
  { id:'coffee_bean',  name:'Grão de Café',         emoji:'☕', category:'Árvores & Arbustos', qty:0 },
  { id:'plum',         name:'Ameixa',               emoji:'🍑', category:'Árvores & Arbustos', qty:0 },
  { id:'mango',        name:'Manga',                emoji:'🥭', category:'Árvores & Arbustos', qty:0 },
  { id:'guava',        name:'Goiaba',               emoji:'🍈', category:'Árvores & Arbustos', qty:0 },
  { id:'pomegranate',  name:'Romã',                 emoji:'🍎', category:'Árvores & Arbustos', qty:0 },

  // === ANIMAIS ===
  { id:'milk',         name:'Leite',                emoji:'🥛', category:'Animais', qty:0 },
  { id:'egg',          name:'Ovo',                  emoji:'🥚', category:'Animais', qty:0 },
  { id:'bacon',        name:'Bacon',                emoji:'🥓', category:'Animais', qty:0 },
  { id:'wool',         name:'Lã',                   emoji:'🧶', category:'Animais', qty:0 },
  { id:'honey',        name:'Mel',                  emoji:'🍯', category:'Animais', qty:0 },
  { id:'goat_milk',    name:'Leite de Cabra',       emoji:'🐐', category:'Animais', qty:0 },
  { id:'duck_feather', name:'Pena de Pato',         emoji:'🪶', category:'Animais', qty:0 },
  { id:'llama_wool',   name:'Lã de Lhama',          emoji:'🦙', category:'Animais', qty:0 },
  { id:'goose_egg',    name:'Ovo de Ganso',         emoji:'🥚', category:'Animais', qty:0 },
  { id:'rabbit_wool',  name:'Pelo de Coelho',       emoji:'🐇', category:'Animais', qty:0 },

  // === MINERAIS ===
  { id:'coal',         name:'Carvão',               emoji:'🪨', category:'Minerais', qty:0 },
  { id:'iron_ore',     name:'Minério de Ferro',     emoji:'⛏️', category:'Minerais', qty:0 },
  { id:'gold_ore',     name:'Minério de Ouro',      emoji:'🟡', category:'Minerais', qty:0 },
  { id:'silver_ore',   name:'Minério de Prata',     emoji:'⚪', category:'Minerais', qty:0 },
  { id:'diamond',      name:'Diamante',             emoji:'💎', category:'Minerais', qty:0 },

  // === PEIXES & FRUTOS DO MAR ===
  { id:'fish',         name:'Peixe',                emoji:'🐟', category:'Peixes', qty:0 },
  { id:'lobster',      name:'Lagosta',              emoji:'🦞', category:'Peixes', qty:0 },
  { id:'carp',         name:'Carpa',                emoji:'🐠', category:'Peixes', qty:0 },
  { id:'trout',        name:'Truta',                emoji:'🐟', category:'Peixes', qty:0 },
  { id:'salmon',       name:'Salmão',               emoji:'🐡', category:'Peixes', qty:0 },
  { id:'perch',        name:'Perca',                emoji:'🐟', category:'Peixes', qty:0 },
  { id:'shrimp',       name:'Camarão',              emoji:'🍤', category:'Peixes', qty:0 },
  { id:'crab',         name:'Caranguejo',           emoji:'🦀', category:'Peixes', qty:0 },
  { id:'lobster_tail', name:'Cauda de Lagosta',     emoji:'🦞', category:'Peixes', qty:0 },
  { id:'duck_egg',     name:'Ovo de Pato',          emoji:'🥚', category:'Peixes', qty:0 },

  // === PADARIA ===
  { id:'bread',        name:'Pão',                  emoji:'🍞', category:'Padaria', qty:0 },
  { id:'corn_bread',   name:'Pão de Milho',         emoji:'🌽', category:'Padaria', qty:0 },
  { id:'potato_bread', name:'Pão de Batata',        emoji:'🍞', category:'Padaria', qty:0 },
  { id:'banana_bread', name:'Pão de Banana',        emoji:'🍌', category:'Padaria', qty:0 },
  { id:'cookie',       name:'Cookie',               emoji:'🍪', category:'Padaria', qty:0 },
  { id:'rasp_muffin',  name:'Muffin de Framboesa',  emoji:'🧁', category:'Padaria', qty:0 },
  { id:'black_muffin', name:'Muffin de Amora',      emoji:'🧁', category:'Padaria', qty:0 },
  { id:'pizza',        name:'Pizza',                emoji:'🍕', category:'Padaria', qty:0 },
  { id:'spicy_pizza',  name:'Pizza Picante',        emoji:'🍕', category:'Padaria', qty:0 },
  { id:'croissant',    name:'Croissant',            emoji:'🥐', category:'Padaria', qty:0 },
  { id:'donut',        name:'Rosquinha',            emoji:'🍩', category:'Padaria', qty:0 },
  { id:'waffle',       name:'Waffle',               emoji:'🧇', category:'Padaria', qty:0 },
  { id:'pancake',      name:'Panqueca',             emoji:'🥞', category:'Padaria', qty:0 },
  { id:'bagel',        name:'Bagel',                emoji:'🥯', category:'Padaria', qty:0 },

  // === FORNO DE BOLOS ===
  { id:'carrot_cake',     name:'Bolo de Cenoura',      emoji:'🥕', category:'Forno de Bolos', qty:0 },
  { id:'birthday_cake',   name:'Bolo de Aniversário',  emoji:'🎂', category:'Forno de Bolos', qty:0 },
  { id:'cream_cake',      name:'Bolo de Creme',        emoji:'🍰', category:'Forno de Bolos', qty:0 },
  { id:'strawberry_cake', name:'Bolo de Morango',      emoji:'🍓', category:'Forno de Bolos', qty:0 },

  // === PRATOS ===
  { id:'omelette',     name:'Omelete',              emoji:'🍳', category:'Pratos', qty:0 },
  { id:'quiche',       name:'Quiche',               emoji:'🥧', category:'Pratos', qty:0 },
  { id:'egg_salad',    name:'Salada de Ovo',        emoji:'🥗', category:'Pratos', qty:0 },

  // === LATICÍNIOS ===
  { id:'butter',       name:'Manteiga',             emoji:'🧈', category:'Laticínios', qty:0 },
  { id:'cream',        name:'Creme de Leite',       emoji:'🫙', category:'Laticínios', qty:0 },
  { id:'cheese',       name:'Queijo',               emoji:'🧀', category:'Laticínios', qty:0 },
  { id:'goat_cheese',  name:'Queijo de Cabra',      emoji:'🐐', category:'Laticínios', qty:0 },

  // === REFINARIA ===
  { id:'sugar',        name:'Açúcar',               emoji:'🍬', category:'Refinaria', qty:0 },
  { id:'syrup',        name:'Xarope',               emoji:'🍶', category:'Refinaria', qty:0 },
  { id:'popcorn',      name:'Pipoca',               emoji:'🍿', category:'Refinaria', qty:0 },

  // === FORNO DE TORTAS ===
  { id:'apple_pie',    name:'Torta de Maçã',        emoji:'🥧', category:'Forno de Tortas', qty:0 },
  { id:'cherry_pie',   name:'Torta de Cereja',      emoji:'🥧', category:'Forno de Tortas', qty:0 },
  { id:'pumpkin_pie',  name:'Torta de Abóbora',     emoji:'🎃', category:'Forno de Tortas', qty:0 },
  { id:'peach_pie',    name:'Torta de Pêssego',     emoji:'🥧', category:'Forno de Tortas', qty:0 },
  { id:'strawb_pie',   name:'Torta de Morango',     emoji:'🍓', category:'Forno de Tortas', qty:0 },
  { id:'black_pie',    name:'Torta de Amora',       emoji:'🥧', category:'Forno de Tortas', qty:0 },

  // === CHURRASQUEIRA ===
  { id:'bacon_eggs',   name:'Bacon e Ovos',         emoji:'🍳', category:'Churrasqueira', qty:0 },
  { id:'hamburger',    name:'Hambúrguer',           emoji:'🍔', category:'Churrasqueira', qty:0 },
  { id:'hotdog',       name:'Cachorro-quente',      emoji:'🌭', category:'Churrasqueira', qty:0 },
  { id:'chili_dish',   name:'Chili',                emoji:'🌶️', category:'Churrasqueira', qty:0 },
  { id:'corn_dog',     name:'Corn Dog',             emoji:'🌽', category:'Churrasqueira', qty:0 },

  // === COSTURA ===
  { id:'woolen_socks', name:'Meias de Lã',          emoji:'🧦', category:'Costura', qty:0 },
  { id:'woolen_cap',   name:'Gorro de Lã',          emoji:'🎩', category:'Costura', qty:0 },
  { id:'woolen_scarf', name:'Cachecol de Lã',       emoji:'🧣', category:'Costura', qty:0 },
  { id:'red_sweater',  name:'Suéter Vermelho',      emoji:'🧥', category:'Costura', qty:0 },
  { id:'indigo_dress', name:'Vestido de Índigo',    emoji:'👗', category:'Costura', qty:0 },
  { id:'blue_jeans',   name:'Calça Jeans',          emoji:'👖', category:'Costura', qty:0 },

  // === FUNDIÇÃO ===
  { id:'iron_bar',     name:'Barra de Ferro',       emoji:'⚙️', category:'Fundição', qty:0 },
  { id:'gold_bar',     name:'Barra de Ouro',        emoji:'🥇', category:'Fundição', qty:0 },
  { id:'silver_bar',   name:'Barra de Prata',       emoji:'🥈', category:'Fundição', qty:0 },

  // === BEBIDAS ===
  { id:'carrot_juice', name:'Suco de Cenoura',      emoji:'🧃', category:'Bebidas', qty:0 },
  { id:'tomato_juice', name:'Suco de Tomate',       emoji:'🍅', category:'Bebidas', qty:0 },
  { id:'apple_juice',  name:'Suco de Maçã',         emoji:'🍏', category:'Bebidas', qty:0 },
  { id:'lemonade',     name:'Limonada',             emoji:'🍋', category:'Bebidas', qty:0 },
  { id:'orange_juice', name:'Suco de Laranja',      emoji:'🍊', category:'Bebidas', qty:0 },
  { id:'peach_juice',  name:'Suco de Pêssego',      emoji:'🍑', category:'Bebidas', qty:0 },
  { id:'grape_juice',  name:'Suco de Uva',          emoji:'🍇', category:'Bebidas', qty:0 },
  { id:'coffee',       name:'Café',                 emoji:'☕', category:'Bebidas', qty:0 },
  { id:'espresso',     name:'Espresso',             emoji:'☕', category:'Bebidas', qty:0 },
  { id:'cappuccino',   name:'Cappuccino',           emoji:'☕', category:'Bebidas', qty:0 },
  { id:'latte',        name:'Latte',                emoji:'☕', category:'Bebidas', qty:0 },
  { id:'green_tea',    name:'Chá Verde',            emoji:'🍵', category:'Bebidas', qty:0 },
  { id:'herbal_tea',   name:'Chá de Ervas',         emoji:'🌿', category:'Bebidas', qty:0 },
  { id:'ginger_tea',   name:'Chá de Gengibre',      emoji:'🫚', category:'Bebidas', qty:0 },

  // === SORVETERIA ===
  { id:'vanilla_ice',  name:'Sorvete de Baunilha',  emoji:'🍦', category:'Sorveteria', qty:0 },
  { id:'strawb_ice',   name:'Sorvete de Morango',   emoji:'🍦', category:'Sorveteria', qty:0 },
  { id:'choco_ice',    name:'Sorvete de Chocolate', emoji:'🍫', category:'Sorveteria', qty:0 },
  { id:'rasp_ice',     name:'Sorvete de Framboesa', emoji:'🍦', category:'Sorveteria', qty:0 },
  { id:'mango_ice',    name:'Sorvete de Manga',     emoji:'🥭', category:'Sorveteria', qty:0 },
  { id:'orange_ice',   name:'Sorvete de Laranja',   emoji:'🍊', category:'Sorveteria', qty:0 },

  // === GELATARIA ===
  { id:'strawb_jam',   name:'Geleia de Morango',    emoji:'🫙', category:'Gelataria', qty:0 },
  { id:'rasp_jam',     name:'Geleia de Framboesa',  emoji:'🫙', category:'Gelataria', qty:0 },
  { id:'black_jam',    name:'Geleia de Amora',      emoji:'🫙', category:'Gelataria', qty:0 },
  { id:'peach_jam',    name:'Geleia de Pêssego',    emoji:'🫙', category:'Gelataria', qty:0 },
  { id:'cherry_jam',   name:'Geleia de Cereja',     emoji:'🫙', category:'Gelataria', qty:0 },
  { id:'plum_jam',     name:'Geleia de Ameixa',     emoji:'🫙', category:'Gelataria', qty:0 },
  { id:'orange_jam',   name:'Geleia de Laranja',    emoji:'🍊', category:'Gelataria', qty:0 },
  { id:'guava_jam',    name:'Geleia de Goiaba',     emoji:'🍈', category:'Gelataria', qty:0 },

  // === DOCES ===
  { id:'chocolate',    name:'Chocolate',            emoji:'🍫', category:'Doces', qty:0 },
  { id:'lollipop',     name:'Pirulito',             emoji:'🍭', category:'Doces', qty:0 },
  { id:'candy_bar',    name:'Barra de Chocolate',   emoji:'🍫', category:'Doces', qty:0 },

  // === SOPAS ===
  { id:'tomato_soup',  name:'Sopa de Tomate',       emoji:'🍲', category:'Sopas', qty:0 },
  { id:'onion_soup',   name:'Sopa de Cebola',       emoji:'🍲', category:'Sopas', qty:0 },
  { id:'pumpkin_soup', name:'Sopa de Abóbora',      emoji:'🎃', category:'Sopas', qty:0 },

  // === SALADAS & SANDUÍCHES ===
  { id:'simple_salad', name:'Salada Simples',       emoji:'🥗', category:'Saladas', qty:0 },
  { id:'carrot_salad', name:'Salada de Cenoura',    emoji:'🥕', category:'Saladas', qty:0 },
  { id:'blt',          name:'Sanduíche BLT',        emoji:'🥪', category:'Saladas', qty:0 },
  { id:'cheese_sand',  name:'Sanduíche de Queijo',  emoji:'🥪', category:'Saladas', qty:0 },

  // === JOALHERIA ===
  { id:'ring',         name:'Anel',                 emoji:'💍', category:'Joalheria', qty:0 },
  { id:'bracelet',     name:'Pulseira',             emoji:'📿', category:'Joalheria', qty:0 },
  { id:'necklace',     name:'Colar',                emoji:'📿', category:'Joalheria', qty:0 },

  // === TEAR ===
  { id:'wool_thread',   name:'Fio de Lã',           emoji:'🧶', category:'Tear', qty:0 },
  { id:'cotton_fabric', name:'Tecido de Algodão',   emoji:'🌸', category:'Tear', qty:0 },
  { id:'indigo_fabric', name:'Tecido Índigo',       emoji:'🔵', category:'Tear', qty:0 },
  { id:'linen',         name:'Linho',               emoji:'🌿', category:'Tear', qty:0 },

  // === MOLHOS & ÓLEOS ===
  { id:'tomato_sauce',  name:'Molho de Tomate',     emoji:'🍅', category:'Molhos', qty:0 },
  { id:'chili_sauce',   name:'Molho de Pimenta',    emoji:'🌶️', category:'Molhos', qty:0 },
  { id:'olive_oil',     name:'Azeite de Oliva',     emoji:'🫒', category:'Molhos', qty:0 },
  { id:'sesame_oil',    name:'Óleo de Gergelim',    emoji:'🌿', category:'Molhos', qty:0 },
  { id:'sunflower_oil', name:'Óleo de Girassol',    emoji:'🌻', category:'Molhos', qty:0 },
  { id:'peanut_butter', name:'Manteiga de Amendoim',emoji:'🥜', category:'Molhos', qty:0 },
  { id:'soy_sauce',     name:'Molho de Soja',       emoji:'🫙', category:'Molhos', qty:0 },

  // === MASSAS ===
  { id:'pasta',         name:'Macarrão',            emoji:'🍝', category:'Massas', qty:0 },
  { id:'tomato_pasta',  name:'Macarrão ao Tomate',  emoji:'🍝', category:'Massas', qty:0 },
  { id:'noodle',        name:'Macarrão Oriental',   emoji:'🍜', category:'Massas', qty:0 },

  // === SUSHI ===
  { id:'sushi_roll',    name:'Sushi Roll',          emoji:'🍣', category:'Sushi', qty:0 },
  { id:'lobster_sushi', name:'Sushi de Lagosta',    emoji:'🦞', category:'Sushi', qty:0 },
  { id:'egg_sushi',     name:'Sushi de Ovo',        emoji:'🥚', category:'Sushi', qty:0 },
  { id:'large_sushi',   name:'Sushi Grande',        emoji:'🍱', category:'Sushi', qty:0 },

  // === WOK ===
  { id:'fried_rice',    name:'Arroz Frito',         emoji:'🍚', category:'Wok', qty:0 },
  { id:'veggie_wok',    name:'Legumes no Wok',      emoji:'🥦', category:'Wok', qty:0 },
  { id:'ginger_wok',    name:'Prato com Gengibre',  emoji:'🫚', category:'Wok', qty:0 },

  // === SMOOTHIES ===
  { id:'strawb_smooth',  name:'Vitamina de Morango', emoji:'🍓', category:'Smoothies', qty:0 },
  { id:'banana_smooth',  name:'Vitamina de Banana',  emoji:'🍌', category:'Smoothies', qty:0 },
  { id:'tropical_smooth',name:'Vitamina Tropical',   emoji:'🥭', category:'Smoothies', qty:0 },
  { id:'berry_smooth',   name:'Vitamina de Frutas',  emoji:'🫐', category:'Smoothies', qty:0 },
  { id:'mango_smooth',   name:'Vitamina de Manga',   emoji:'🥭', category:'Smoothies', qty:0 },

  // === CHAPÉUS ===
  { id:'straw_hat',     name:'Chapéu de Palha',     emoji:'👒', category:'Chapéus', qty:0 },
  { id:'cowboy_hat',    name:'Chapéu de Cowboy',    emoji:'🤠', category:'Chapéus', qty:0 },
  { id:'wool_hat',      name:'Chapéu de Lã',        emoji:'🎩', category:'Chapéus', qty:0 },

  // === REDES ===
  { id:'fishing_net',   name:'Rede de Pesca',       emoji:'🪝', category:'Redes', qty:0 },
  { id:'lobster_trap',  name:'Armadilha de Lagosta',emoji:'🦞', category:'Redes', qty:0 },
  { id:'duck_trap',     name:'Armadilha de Pato',   emoji:'🦆', category:'Redes', qty:0 },

  // === VELAS & CERA ===
  { id:'beeswax',       name:'Cera de Abelha',      emoji:'🐝', category:'Velas', qty:0 },
  { id:'wax_candle',    name:'Vela de Cera',        emoji:'🕯️', category:'Velas', qty:0 },
  { id:'honey_candle',  name:'Vela de Mel',         emoji:'🍯', category:'Velas', qty:0 },
  { id:'scented_candle',name:'Vela Aromática',      emoji:'🕯️', category:'Velas', qty:0 },

  // === FLORES ===
  { id:'bouquet',       name:'Buquê de Flores',     emoji:'💐', category:'Flores', qty:0 },
  { id:'flower_wreath', name:'Grinalda de Flores',  emoji:'🌸', category:'Flores', qty:0 },

  // === ÓLEOS ESSENCIAIS ===
  { id:'lavender_oil',  name:'Óleo de Lavanda',     emoji:'💜', category:'Óleos Essenciais', qty:0 },
  { id:'rose_oil',      name:'Óleo de Rosa',        emoji:'🌹', category:'Óleos Essenciais', qty:0 },
  { id:'mint_oil',      name:'Óleo de Menta',       emoji:'🌿', category:'Óleos Essenciais', qty:0 },

  // === TEMPEROS ===
  { id:'salt',          name:'Sal',                 emoji:'🧂', category:'Temperos', qty:0 },

  // === RAÇÃO ===
  { id:'chicken_feed',  name:'Ração para Galinha',  emoji:'🐔', category:'Ração', qty:0 },
  { id:'pig_feed',      name:'Ração para Porco',    emoji:'🐷', category:'Ração', qty:0 },
  { id:'cow_feed',      name:'Ração para Vaca',     emoji:'🐄', category:'Ração', qty:0 },
  { id:'sheep_feed',    name:'Ração para Ovelha',   emoji:'🐑', category:'Ração', qty:0 },
  { id:'goat_feed',     name:'Ração para Cabra',    emoji:'🐐', category:'Ração', qty:0 },
];

// ============================================================
//  RECEITAS
// ============================================================
const RECIPES = [
  // ── PADARIA ──────────────────────────────────────────────────
  { id:'r_bread',         name:'Pão',                  emoji:'🍞', machine:'🏭 Padaria',
    ingredients:[{id:'wheat',qty:3}], time:5, xp:1 },
  { id:'r_corn_bread',    name:'Pão de Milho',         emoji:'🌽', machine:'🏭 Padaria',
    ingredients:[{id:'corn',qty:3},{id:'wheat',qty:1}], time:10, xp:2 },
  { id:'r_potato_bread',  name:'Pão de Batata',        emoji:'🍞', machine:'🏭 Padaria',
    ingredients:[{id:'wheat',qty:2},{id:'potato',qty:3}], time:30, xp:4 },
  { id:'r_banana_bread',  name:'Pão de Banana',        emoji:'🍌', machine:'🏭 Padaria',
    ingredients:[{id:'wheat',qty:2},{id:'banana',qty:3}], time:30, xp:4 },
  { id:'r_cookie',        name:'Cookie',               emoji:'🍪', machine:'🏭 Padaria',
    ingredients:[{id:'wheat',qty:2},{id:'butter',qty:1},{id:'sugar',qty:1}], time:25, xp:4 },
  { id:'r_rasp_muffin',   name:'Muffin de Framboesa',  emoji:'🧁', machine:'🏭 Padaria',
    ingredients:[{id:'wheat',qty:2},{id:'raspberry',qty:3}], time:20, xp:3 },
  { id:'r_black_muffin',  name:'Muffin de Amora',      emoji:'🧁', machine:'🏭 Padaria',
    ingredients:[{id:'wheat',qty:2},{id:'blackberry',qty:3}], time:25, xp:4 },
  { id:'r_pizza',         name:'Pizza',                emoji:'🍕', machine:'🏭 Padaria',
    ingredients:[{id:'wheat',qty:2},{id:'tomato',qty:2},{id:'cheese',qty:1},{id:'bacon',qty:1}], time:45, xp:7 },
  { id:'r_spicy_pizza',   name:'Pizza Picante',        emoji:'🍕', machine:'🏭 Padaria',
    ingredients:[{id:'wheat',qty:2},{id:'tomato',qty:2},{id:'cheese',qty:1},{id:'chili',qty:2}], time:50, xp:8 },
  { id:'r_seafood_pizza', name:'Pizza de Frutos do Mar',emoji:'🍕',machine:'🏭 Padaria',
    ingredients:[{id:'wheat',qty:2},{id:'tomato_sauce',qty:1},{id:'cheese',qty:1},{id:'lobster',qty:1}], time:55, xp:9 },
  { id:'r_croissant',     name:'Croissant',            emoji:'🥐', machine:'🏭 Padaria',
    ingredients:[{id:'wheat',qty:3},{id:'butter',qty:2}], time:25, xp:4 },
  { id:'r_donut',         name:'Rosquinha',            emoji:'🍩', machine:'🏭 Padaria',
    ingredients:[{id:'wheat',qty:2},{id:'milk',qty:1},{id:'egg',qty:1},{id:'sugar',qty:1}], time:20, xp:4 },
  { id:'r_waffle',        name:'Waffle',               emoji:'🧇', machine:'🏭 Padaria',
    ingredients:[{id:'wheat',qty:3},{id:'milk',qty:2},{id:'egg',qty:2}], time:20, xp:4 },
  { id:'r_pancake',       name:'Panqueca',             emoji:'🥞', machine:'🏭 Padaria',
    ingredients:[{id:'wheat',qty:3},{id:'milk',qty:2},{id:'egg',qty:2}], time:15, xp:3 },
  { id:'r_bagel',         name:'Bagel',                emoji:'🥯', machine:'🏭 Padaria',
    ingredients:[{id:'wheat',qty:4},{id:'sesame',qty:1}], time:20, xp:3 },

  // ── FORNO DE BOLOS ────────────────────────────────────────────
  { id:'r_carrot_cake',   name:'Bolo de Cenoura',      emoji:'🥕', machine:'🎂 Forno de Bolos',
    ingredients:[{id:'carrot',qty:3},{id:'wheat',qty:2},{id:'egg',qty:2}], time:30, xp:5 },
  { id:'r_bday_cake',     name:'Bolo de Aniversário',  emoji:'🎂', machine:'🎂 Forno de Bolos',
    ingredients:[{id:'wheat',qty:3},{id:'milk',qty:2},{id:'egg',qty:2},{id:'sugar',qty:1}], time:45, xp:8 },
  { id:'r_cream_cake',    name:'Bolo de Creme',        emoji:'🍰', machine:'🎂 Forno de Bolos',
    ingredients:[{id:'cream',qty:2},{id:'wheat',qty:2},{id:'sugar',qty:1}], time:45, xp:7 },
  { id:'r_strawb_cake',   name:'Bolo de Morango',      emoji:'🍓', machine:'🎂 Forno de Bolos',
    ingredients:[{id:'strawberry',qty:3},{id:'wheat',qty:2},{id:'egg',qty:2}], time:35, xp:6 },
  { id:'r_quiche',        name:'Quiche',               emoji:'🥧', machine:'🎂 Forno de Bolos',
    ingredients:[{id:'wheat',qty:2},{id:'egg',qty:3},{id:'cream',qty:1},{id:'cheese',qty:1}], time:35, xp:7 },

  // ── LATICÍNIOS ────────────────────────────────────────────────
  { id:'r_butter',        name:'Manteiga',             emoji:'🧈', machine:'🥛 Laticínios',
    ingredients:[{id:'milk',qty:2}], time:10, xp:2 },
  { id:'r_cream',         name:'Creme de Leite',       emoji:'🫙', machine:'🥛 Laticínios',
    ingredients:[{id:'milk',qty:4}], time:15, xp:3 },
  { id:'r_cheese',        name:'Queijo',               emoji:'🧀', machine:'🥛 Laticínios',
    ingredients:[{id:'milk',qty:4},{id:'butter',qty:2}], time:20, xp:5 },
  { id:'r_goat_cheese',   name:'Queijo de Cabra',      emoji:'🐐', machine:'🥛 Laticínios',
    ingredients:[{id:'goat_milk',qty:4}], time:30, xp:6 },

  // ── REFINARIA DE AÇÚCAR ───────────────────────────────────────
  { id:'r_sugar',         name:'Açúcar',               emoji:'🍬', machine:'🏗️ Refinaria',
    ingredients:[{id:'sugarcane',qty:3}], time:7, xp:2 },
  { id:'r_syrup',         name:'Xarope',               emoji:'🍶', machine:'🏗️ Refinaria',
    ingredients:[{id:'sugarcane',qty:2},{id:'honey',qty:2}], time:20, xp:4 },

  // ── PIPOQUEIRO ────────────────────────────────────────────────
  { id:'r_popcorn',       name:'Pipoca',               emoji:'🍿', machine:'🍿 Pipoqueiro',
    ingredients:[{id:'corn',qty:3}], time:5, xp:1 },

  // ── CHURRASQUEIRA ─────────────────────────────────────────────
  { id:'r_bacon_eggs',    name:'Bacon e Ovos',         emoji:'🍳', machine:'🔥 Churrasqueira',
    ingredients:[{id:'bacon',qty:2},{id:'egg',qty:2}], time:15, xp:3 },
  { id:'r_omelette',      name:'Omelete',              emoji:'🍳', machine:'🔥 Churrasqueira',
    ingredients:[{id:'egg',qty:3},{id:'milk',qty:1},{id:'cheese',qty:1}], time:20, xp:4 },
  { id:'r_hamburger',     name:'Hambúrguer',           emoji:'🍔', machine:'🔥 Churrasqueira',
    ingredients:[{id:'wheat',qty:2},{id:'bacon',qty:1},{id:'tomato',qty:1}], time:25, xp:5 },
  { id:'r_hotdog',        name:'Cachorro-quente',      emoji:'🌭', machine:'🔥 Churrasqueira',
    ingredients:[{id:'wheat',qty:2},{id:'bacon',qty:1}], time:20, xp:4 },
  { id:'r_chili',         name:'Chili',                emoji:'🌶️', machine:'🔥 Churrasqueira',
    ingredients:[{id:'chili',qty:2},{id:'tomato',qty:2},{id:'bacon',qty:1}], time:30, xp:6 },
  { id:'r_corn_dog',      name:'Corn Dog',             emoji:'🌽', machine:'🔥 Churrasqueira',
    ingredients:[{id:'corn',qty:2},{id:'wheat',qty:1},{id:'bacon',qty:1}], time:25, xp:5 },
  { id:'r_grilled_fish',  name:'Peixe Grelhado',       emoji:'🐟', machine:'🔥 Churrasqueira',
    ingredients:[{id:'fish',qty:2},{id:'lemon',qty:1}], time:20, xp:4 },
  { id:'r_grilled_lobster',name:'Lagosta Grelhada',    emoji:'🦞', machine:'🔥 Churrasqueira',
    ingredients:[{id:'lobster',qty:1},{id:'butter',qty:1}], time:30, xp:7 },

  // ── FORNO DE TORTAS ───────────────────────────────────────────
  { id:'r_apple_pie',     name:'Torta de Maçã',        emoji:'🥧', machine:'🥧 Forno de Tortas',
    ingredients:[{id:'apple',qty:2},{id:'wheat',qty:2},{id:'butter',qty:1}], time:40, xp:7 },
  { id:'r_black_pie',     name:'Torta de Amora',       emoji:'🥧', machine:'🥧 Forno de Tortas',
    ingredients:[{id:'blackberry',qty:3},{id:'wheat',qty:2}], time:35, xp:6 },
  { id:'r_cherry_pie',    name:'Torta de Cereja',      emoji:'🥧', machine:'🥧 Forno de Tortas',
    ingredients:[{id:'cherry',qty:3},{id:'wheat',qty:2}], time:35, xp:6 },
  { id:'r_pumpkin_pie',   name:'Torta de Abóbora',     emoji:'🎃', machine:'🥧 Forno de Tortas',
    ingredients:[{id:'pumpkin',qty:3},{id:'wheat',qty:2}], time:40, xp:7 },
  { id:'r_peach_pie',     name:'Torta de Pêssego',     emoji:'🥧', machine:'🥧 Forno de Tortas',
    ingredients:[{id:'peach',qty:3},{id:'wheat',qty:2}], time:35, xp:6 },
  { id:'r_strawb_pie',    name:'Torta de Morango',     emoji:'🍓', machine:'🥧 Forno de Tortas',
    ingredients:[{id:'strawberry',qty:3},{id:'wheat',qty:2}], time:30, xp:5 },
  { id:'r_plum_pie',      name:'Torta de Ameixa',      emoji:'🥧', machine:'🥧 Forno de Tortas',
    ingredients:[{id:'plum',qty:3},{id:'wheat',qty:2}], time:35, xp:6 },
  { id:'r_mango_pie',     name:'Torta de Manga',       emoji:'🥭', machine:'🥧 Forno de Tortas',
    ingredients:[{id:'mango',qty:3},{id:'wheat',qty:2},{id:'sugar',qty:1}], time:40, xp:7 },

  // ── COSTURA ───────────────────────────────────────────────────
  { id:'r_wool_socks',    name:'Meias de Lã',          emoji:'🧦', machine:'🧵 Costura',
    ingredients:[{id:'wool',qty:3}], time:20, xp:4 },
  { id:'r_wool_cap',      name:'Gorro de Lã',          emoji:'🎩', machine:'🧵 Costura',
    ingredients:[{id:'wool',qty:3}], time:25, xp:4 },
  { id:'r_wool_scarf',    name:'Cachecol de Lã',       emoji:'🧣', machine:'🧵 Costura',
    ingredients:[{id:'wool',qty:4}], time:30, xp:5 },
  { id:'r_red_sweater',   name:'Suéter Vermelho',      emoji:'🧥', machine:'🧵 Costura',
    ingredients:[{id:'wool',qty:5}], time:40, xp:7 },
  { id:'r_indigo_dress',  name:'Vestido de Índigo',    emoji:'👗', machine:'🧵 Costura',
    ingredients:[{id:'cotton',qty:3},{id:'indigo',qty:2}], time:35, xp:6 },
  { id:'r_blue_jeans',    name:'Calça Jeans',          emoji:'👖', machine:'🧵 Costura',
    ingredients:[{id:'cotton',qty:3},{id:'indigo',qty:2}], time:30, xp:5 },

  // ── FUNDIÇÃO ──────────────────────────────────────────────────
  { id:'r_iron_bar',      name:'Barra de Ferro',       emoji:'⚙️', machine:'⛏️ Fundição',
    ingredients:[{id:'iron_ore',qty:3},{id:'coal',qty:2}], time:45, xp:8 },
  { id:'r_gold_bar',      name:'Barra de Ouro',        emoji:'🥇', machine:'⛏️ Fundição',
    ingredients:[{id:'gold_ore',qty:2},{id:'coal',qty:3}], time:90, xp:15 },
  { id:'r_silver_bar',    name:'Barra de Prata',       emoji:'🥈', machine:'⛏️ Fundição',
    ingredients:[{id:'silver_ore',qty:2},{id:'coal',qty:2}], time:60, xp:10 },

  // ── ESPREMEDOR DE SUCOS ───────────────────────────────────────
  { id:'r_carrot_juice',  name:'Suco de Cenoura',      emoji:'🧃', machine:'🍹 Espremedor',
    ingredients:[{id:'carrot',qty:5}], time:8, xp:2 },
  { id:'r_tomato_juice',  name:'Suco de Tomate',       emoji:'🍅', machine:'🍹 Espremedor',
    ingredients:[{id:'tomato',qty:5}], time:8, xp:2 },
  { id:'r_apple_juice',   name:'Suco de Maçã',         emoji:'🍏', machine:'🍹 Espremedor',
    ingredients:[{id:'apple',qty:5}], time:10, xp:3 },
  { id:'r_lemonade',      name:'Limonada',             emoji:'🍋', machine:'🍹 Espremedor',
    ingredients:[{id:'lemon',qty:5},{id:'sugar',qty:1}], time:12, xp:3 },
  { id:'r_orange_juice',  name:'Suco de Laranja',      emoji:'🍊', machine:'🍹 Espremedor',
    ingredients:[{id:'orange',qty:5}], time:10, xp:3 },
  { id:'r_peach_juice',   name:'Suco de Pêssego',      emoji:'🍑', machine:'🍹 Espremedor',
    ingredients:[{id:'peach',qty:3}], time:10, xp:3 },
  { id:'r_grape_juice',   name:'Suco de Uva',          emoji:'🍇', machine:'🍹 Espremedor',
    ingredients:[{id:'grape',qty:5}], time:12, xp:3 },
  { id:'r_mango_juice',   name:'Suco de Manga',        emoji:'🥭', machine:'🍹 Espremedor',
    ingredients:[{id:'mango',qty:3}], time:10, xp:3 },
  { id:'r_guava_juice',   name:'Suco de Goiaba',       emoji:'🍈', machine:'🍹 Espremedor',
    ingredients:[{id:'guava',qty:4}], time:10, xp:3 },
  { id:'r_plum_juice',    name:'Suco de Ameixa',       emoji:'🍑', machine:'🍹 Espremedor',
    ingredients:[{id:'plum',qty:4}], time:12, xp:3 },

  // ── SORVETERIA ────────────────────────────────────────────────
  { id:'r_vanilla_ice',   name:'Sorvete de Baunilha',  emoji:'🍦', machine:'🍦 Sorveteria',
    ingredients:[{id:'cream',qty:2},{id:'sugar',qty:1}], time:25, xp:5 },
  { id:'r_strawb_ice',    name:'Sorvete de Morango',   emoji:'🍦', machine:'🍦 Sorveteria',
    ingredients:[{id:'cream',qty:2},{id:'strawberry',qty:3}], time:30, xp:6 },
  { id:'r_choco_ice',     name:'Sorvete de Chocolate', emoji:'🍫', machine:'🍦 Sorveteria',
    ingredients:[{id:'cream',qty:2},{id:'cacao',qty:2}], time:30, xp:6 },
  { id:'r_rasp_ice',      name:'Sorvete de Framboesa', emoji:'🍦', machine:'🍦 Sorveteria',
    ingredients:[{id:'cream',qty:2},{id:'raspberry',qty:3}], time:30, xp:6 },
  { id:'r_mango_ice',     name:'Sorvete de Manga',     emoji:'🥭', machine:'🍦 Sorveteria',
    ingredients:[{id:'cream',qty:2},{id:'mango',qty:3}], time:30, xp:6 },
  { id:'r_orange_ice',    name:'Sorvete de Laranja',   emoji:'🍊', machine:'🍦 Sorveteria',
    ingredients:[{id:'cream',qty:2},{id:'orange',qty:3}], time:30, xp:6 },

  // ── GELATARIA ─────────────────────────────────────────────────
  { id:'r_strawb_jam',    name:'Geleia de Morango',    emoji:'🫙', machine:'🫙 Gelataria',
    ingredients:[{id:'strawberry',qty:6}], time:12, xp:3 },
  { id:'r_rasp_jam',      name:'Geleia de Framboesa',  emoji:'🫙', machine:'🫙 Gelataria',
    ingredients:[{id:'raspberry',qty:6}], time:12, xp:3 },
  { id:'r_black_jam',     name:'Geleia de Amora',      emoji:'🫙', machine:'🫙 Gelataria',
    ingredients:[{id:'blackberry',qty:6}], time:12, xp:3 },
  { id:'r_peach_jam',     name:'Geleia de Pêssego',    emoji:'🫙', machine:'🫙 Gelataria',
    ingredients:[{id:'peach',qty:6}], time:15, xp:4 },
  { id:'r_cherry_jam',    name:'Geleia de Cereja',     emoji:'🫙', machine:'🫙 Gelataria',
    ingredients:[{id:'cherry',qty:6}], time:15, xp:4 },
  { id:'r_plum_jam',      name:'Geleia de Ameixa',     emoji:'🫙', machine:'🫙 Gelataria',
    ingredients:[{id:'plum',qty:6}], time:15, xp:4 },
  { id:'r_orange_jam',    name:'Geleia de Laranja',    emoji:'🍊', machine:'🫙 Gelataria',
    ingredients:[{id:'orange',qty:6}], time:15, xp:4 },
  { id:'r_guava_jam',     name:'Geleia de Goiaba',     emoji:'🍈', machine:'🫙 Gelataria',
    ingredients:[{id:'guava',qty:6}], time:15, xp:4 },

  // ── CAFETERIA ─────────────────────────────────────────────────
  { id:'r_coffee',        name:'Café',                 emoji:'☕', machine:'☕ Cafeteria',
    ingredients:[{id:'coffee_bean',qty:3}], time:10, xp:2 },
  { id:'r_espresso',      name:'Espresso',             emoji:'☕', machine:'☕ Cafeteria',
    ingredients:[{id:'coffee_bean',qty:5}], time:15, xp:3 },
  { id:'r_cappuccino',    name:'Cappuccino',           emoji:'☕', machine:'☕ Cafeteria',
    ingredients:[{id:'coffee_bean',qty:3},{id:'milk',qty:2}], time:20, xp:4 },
  { id:'r_latte',         name:'Latte',                emoji:'☕', machine:'☕ Cafeteria',
    ingredients:[{id:'coffee_bean',qty:2},{id:'milk',qty:3}], time:20, xp:4 },
  { id:'r_green_tea',     name:'Chá Verde',            emoji:'🍵', machine:'☕ Cafeteria',
    ingredients:[{id:'tea_leaf',qty:3}], time:10, xp:2 },
  { id:'r_herbal_tea',    name:'Chá de Ervas',         emoji:'🌿', machine:'☕ Cafeteria',
    ingredients:[{id:'tea_leaf',qty:2},{id:'honey',qty:1}], time:12, xp:3 },
  { id:'r_ginger_tea',    name:'Chá de Gengibre',      emoji:'🫚', machine:'☕ Cafeteria',
    ingredients:[{id:'tea_leaf',qty:2},{id:'ginger',qty:2}], time:15, xp:3 },

  // ── FÁBRICA DE DOCES ──────────────────────────────────────────
  { id:'r_chocolate',     name:'Chocolate',            emoji:'🍫', machine:'🍭 Fábrica de Doces',
    ingredients:[{id:'cacao',qty:3},{id:'sugar',qty:1}], time:15, xp:3 },
  { id:'r_lollipop',      name:'Pirulito',             emoji:'🍭', machine:'🍭 Fábrica de Doces',
    ingredients:[{id:'sugarcane',qty:3},{id:'strawberry',qty:1}], time:20, xp:4 },
  { id:'r_candy_bar',     name:'Barra de Chocolate',   emoji:'🍫', machine:'🍭 Fábrica de Doces',
    ingredients:[{id:'cacao',qty:3},{id:'sugar',qty:2},{id:'cream',qty:1}], time:25, xp:5 },

  // ── COZINHA DE SOPAS ──────────────────────────────────────────
  { id:'r_tomato_soup',   name:'Sopa de Tomate',       emoji:'🍲', machine:'🍲 Cozinha de Sopas',
    ingredients:[{id:'tomato',qty:5},{id:'cream',qty:1}], time:30, xp:5 },
  { id:'r_onion_soup',    name:'Sopa de Cebola',       emoji:'🍲', machine:'🍲 Cozinha de Sopas',
    ingredients:[{id:'onion',qty:5},{id:'butter',qty:2}], time:35, xp:6 },
  { id:'r_pumpkin_soup',  name:'Sopa de Abóbora',      emoji:'🎃', machine:'🍲 Cozinha de Sopas',
    ingredients:[{id:'pumpkin',qty:4},{id:'cream',qty:2}], time:35, xp:6 },
  { id:'r_crab_dish',     name:'Caranguejo Cozido',    emoji:'🦀', machine:'🍲 Cozinha de Sopas',
    ingredients:[{id:'crab',qty:2},{id:'onion',qty:2},{id:'tomato',qty:2}], time:40, xp:8 },

  // ── BAR DE SALADAS ────────────────────────────────────────────
  { id:'r_simple_salad',  name:'Salada Simples',       emoji:'🥗', machine:'🥗 Bar de Saladas',
    ingredients:[{id:'lettuce',qty:3},{id:'tomato',qty:2},{id:'olive',qty:1}], time:15, xp:3 },
  { id:'r_carrot_salad',  name:'Salada de Cenoura',    emoji:'🥕', machine:'🥗 Bar de Saladas',
    ingredients:[{id:'carrot',qty:3},{id:'lettuce',qty:2}], time:12, xp:2 },
  { id:'r_egg_salad',     name:'Salada de Ovo',        emoji:'🥗', machine:'🥗 Bar de Saladas',
    ingredients:[{id:'egg',qty:3},{id:'lettuce',qty:2},{id:'butter',qty:1}], time:15, xp:3 },

  // ── BAR DE SANDUÍCHES ─────────────────────────────────────────
  { id:'r_blt',           name:'Sanduíche BLT',        emoji:'🥪', machine:'🥪 Bar de Sanduíches',
    ingredients:[{id:'wheat',qty:2},{id:'bacon',qty:1},{id:'lettuce',qty:1},{id:'tomato',qty:1}], time:25, xp:5 },
  { id:'r_cheese_sand',   name:'Sanduíche de Queijo',  emoji:'🥪', machine:'🥪 Bar de Sanduíches',
    ingredients:[{id:'wheat',qty:2},{id:'cheese',qty:2},{id:'lettuce',qty:1}], time:20, xp:4 },

  // ── JOALHERIA ─────────────────────────────────────────────────
  { id:'r_ring',          name:'Anel',                 emoji:'💍', machine:'💎 Joalheria',
    ingredients:[{id:'gold_bar',qty:1},{id:'diamond',qty:1}], time:60, xp:12 },
  { id:'r_bracelet',      name:'Pulseira',             emoji:'📿', machine:'💎 Joalheria',
    ingredients:[{id:'gold_bar',qty:1},{id:'silver_bar',qty:1}], time:45, xp:9 },
  { id:'r_necklace',      name:'Colar',                emoji:'📿', machine:'💎 Joalheria',
    ingredients:[{id:'gold_bar',qty:2},{id:'diamond',qty:2}], time:90, xp:18 },

  // ── TEAR ──────────────────────────────────────────────────────
  { id:'r_wool_thread',   name:'Fio de Lã',            emoji:'🧶', machine:'🪡 Tear',
    ingredients:[{id:'wool',qty:3}], time:10, xp:2 },
  { id:'r_cotton_fabric', name:'Tecido de Algodão',    emoji:'🌸', machine:'🪡 Tear',
    ingredients:[{id:'cotton',qty:3}], time:10, xp:2 },
  { id:'r_indigo_fabric', name:'Tecido Índigo',        emoji:'🔵', machine:'🪡 Tear',
    ingredients:[{id:'cotton',qty:2},{id:'indigo',qty:2}], time:15, xp:3 },
  { id:'r_linen',         name:'Linho',                emoji:'🌿', machine:'🪡 Tear',
    ingredients:[{id:'sugarcane',qty:4}], time:12, xp:2 },

  // ── FÁBRICA DE MOLHOS ─────────────────────────────────────────
  { id:'r_tomato_sauce',  name:'Molho de Tomate',      emoji:'🍅', machine:'🫙 Fábrica de Molhos',
    ingredients:[{id:'tomato',qty:4},{id:'onion',qty:1}], time:20, xp:4 },
  { id:'r_chili_sauce',   name:'Molho de Pimenta',     emoji:'🌶️', machine:'🫙 Fábrica de Molhos',
    ingredients:[{id:'chili',qty:4},{id:'tomato',qty:2}], time:20, xp:4 },
  { id:'r_olive_oil',     name:'Azeite de Oliva',      emoji:'🫒', machine:'🫙 Fábrica de Molhos',
    ingredients:[{id:'olive',qty:5}], time:15, xp:3 },
  { id:'r_sesame_oil',    name:'Óleo de Gergelim',     emoji:'🌿', machine:'🫙 Fábrica de Molhos',
    ingredients:[{id:'sesame',qty:5}], time:15, xp:3 },
  { id:'r_sunflower_oil', name:'Óleo de Girassol',     emoji:'🌻', machine:'🫙 Fábrica de Molhos',
    ingredients:[{id:'sunflower',qty:4}], time:18, xp:3 },
  { id:'r_peanut_butter', name:'Manteiga de Amendoim', emoji:'🥜', machine:'🫙 Fábrica de Molhos',
    ingredients:[{id:'peanut',qty:5}], time:20, xp:4 },
  { id:'r_soy_sauce',     name:'Molho de Soja',        emoji:'🫙', machine:'🫙 Fábrica de Molhos',
    ingredients:[{id:'soybean',qty:4},{id:'salt',qty:1}], time:25, xp:4 },

  // ── COZINHA WOK ───────────────────────────────────────────────
  { id:'r_fried_rice',    name:'Arroz Frito',          emoji:'🍚', machine:'🥢 Cozinha Wok',
    ingredients:[{id:'rice',qty:3},{id:'egg',qty:2}], time:25, xp:5 },
  { id:'r_veggie_wok',    name:'Legumes no Wok',       emoji:'🥦', machine:'🥢 Cozinha Wok',
    ingredients:[{id:'lettuce',qty:3},{id:'carrot',qty:2},{id:'onion',qty:1}], time:20, xp:4 },
  { id:'r_ginger_wok',    name:'Prato com Gengibre',   emoji:'🫚', machine:'🥢 Cozinha Wok',
    ingredients:[{id:'ginger',qty:2},{id:'rice',qty:3},{id:'egg',qty:1}], time:30, xp:5 },
  { id:'r_noodle',        name:'Macarrão Oriental',    emoji:'🍜', machine:'🥢 Cozinha Wok',
    ingredients:[{id:'wheat',qty:3},{id:'egg',qty:2},{id:'onion',qty:1}], time:30, xp:5 },
  { id:'r_shrimp_dish',   name:'Camarão Refogado',     emoji:'🍤', machine:'🥢 Cozinha Wok',
    ingredients:[{id:'shrimp',qty:4},{id:'ginger',qty:1},{id:'soy_sauce',qty:1}], time:25, xp:5 },

  // ── BAR DE SUSHI ──────────────────────────────────────────────
  { id:'r_sushi_roll',    name:'Sushi Roll',           emoji:'🍣', machine:'🍣 Bar de Sushi',
    ingredients:[{id:'rice',qty:3},{id:'fish',qty:2}], time:30, xp:6 },
  { id:'r_lobster_sushi', name:'Sushi de Lagosta',     emoji:'🦞', machine:'🍣 Bar de Sushi',
    ingredients:[{id:'rice',qty:2},{id:'lobster',qty:1}], time:45, xp:9 },
  { id:'r_egg_sushi',     name:'Sushi de Ovo',         emoji:'🥚', machine:'🍣 Bar de Sushi',
    ingredients:[{id:'rice',qty:2},{id:'egg',qty:2}], time:25, xp:5 },
  { id:'r_large_sushi',   name:'Sushi Grande',         emoji:'🍱', machine:'🍣 Bar de Sushi',
    ingredients:[{id:'rice',qty:4},{id:'fish',qty:3},{id:'sesame_oil',qty:1}], time:60, xp:12 },

  // ── FABRICANTE DE MASSAS ──────────────────────────────────────
  { id:'r_pasta',         name:'Macarrão',             emoji:'🍝', machine:'🍝 Fabricante de Massas',
    ingredients:[{id:'wheat',qty:3},{id:'egg',qty:2}], time:25, xp:5 },
  { id:'r_tomato_pasta',  name:'Macarrão ao Tomate',   emoji:'🍝', machine:'🍝 Fabricante de Massas',
    ingredients:[{id:'wheat',qty:3},{id:'egg',qty:2},{id:'tomato_sauce',qty:1}], time:35, xp:7 },

  // ── MIXER DE VITAMINAS ────────────────────────────────────────
  { id:'r_strawb_smooth', name:'Vitamina de Morango',  emoji:'🍓', machine:'🥤 Mixer de Vitaminas',
    ingredients:[{id:'strawberry',qty:3},{id:'milk',qty:2}], time:15, xp:3 },
  { id:'r_banana_smooth', name:'Vitamina de Banana',   emoji:'🍌', machine:'🥤 Mixer de Vitaminas',
    ingredients:[{id:'banana',qty:3},{id:'milk',qty:2}], time:15, xp:3 },
  { id:'r_tropical_smooth',name:'Vitamina Tropical',   emoji:'🥭', machine:'🥤 Mixer de Vitaminas',
    ingredients:[{id:'mango',qty:2},{id:'banana',qty:2},{id:'milk',qty:1}], time:20, xp:4 },
  { id:'r_berry_smooth',  name:'Vitamina de Frutas',   emoji:'🫐', machine:'🥤 Mixer de Vitaminas',
    ingredients:[{id:'raspberry',qty:3},{id:'blackberry',qty:3}], time:18, xp:4 },
  { id:'r_mango_smooth',  name:'Vitamina de Manga',    emoji:'🥭', machine:'🥤 Mixer de Vitaminas',
    ingredients:[{id:'mango',qty:3},{id:'milk',qty:2}], time:18, xp:4 },

  // ── FABRICANTE DE CHAPÉUS ─────────────────────────────────────
  { id:'r_straw_hat',     name:'Chapéu de Palha',      emoji:'👒', machine:'👒 Fabricante de Chapéus',
    ingredients:[{id:'cotton',qty:3},{id:'sugarcane',qty:2}], time:25, xp:5 },
  { id:'r_cowboy_hat',    name:'Chapéu de Cowboy',     emoji:'🤠', machine:'👒 Fabricante de Chapéus',
    ingredients:[{id:'wool_thread',qty:3},{id:'cotton_fabric',qty:2}], time:35, xp:7 },
  { id:'r_wool_hat',      name:'Chapéu de Lã',         emoji:'🎩', machine:'👒 Fabricante de Chapéus',
    ingredients:[{id:'wool_thread',qty:4}], time:30, xp:6 },

  // ── FABRICANTE DE REDES ───────────────────────────────────────
  { id:'r_fishing_net',   name:'Rede de Pesca',        emoji:'🪝', machine:'🎣 Fabricante de Redes',
    ingredients:[{id:'cotton',qty:3}], time:20, xp:4 },
  { id:'r_lobster_trap',  name:'Armadilha de Lagosta', emoji:'🦞', machine:'🎣 Fabricante de Redes',
    ingredients:[{id:'iron_bar',qty:2},{id:'wool',qty:1}], time:60, xp:10 },
  { id:'r_duck_trap',     name:'Armadilha de Pato',    emoji:'🦆', machine:'🎣 Fabricante de Redes',
    ingredients:[{id:'cotton',qty:2},{id:'corn',qty:2}], time:30, xp:5 },

  // ── FABRICANTE DE VELAS ───────────────────────────────────────
  { id:'r_beeswax',       name:'Cera de Abelha',       emoji:'🐝', machine:'🕯️ Fabricante de Velas',
    ingredients:[{id:'honey',qty:3}], time:15, xp:3 },
  { id:'r_wax_candle',    name:'Vela de Cera',         emoji:'🕯️', machine:'🕯️ Fabricante de Velas',
    ingredients:[{id:'beeswax',qty:2}], time:20, xp:4 },
  { id:'r_honey_candle',  name:'Vela de Mel',          emoji:'🍯', machine:'🕯️ Fabricante de Velas',
    ingredients:[{id:'honey',qty:2},{id:'beeswax',qty:1}], time:25, xp:5 },
  { id:'r_scented_candle',name:'Vela Aromática',       emoji:'🌸', machine:'🕯️ Fabricante de Velas',
    ingredients:[{id:'beeswax',qty:2},{id:'olive_oil',qty:1}], time:30, xp:6 },

  // ── FLORICULTURA ──────────────────────────────────────────────
  { id:'r_bouquet',       name:'Buquê de Flores',      emoji:'💐', machine:'🌺 Floricultura',
    ingredients:[{id:'sunflower',qty:3},{id:'cotton',qty:2}], time:30, xp:6 },
  { id:'r_flower_wreath', name:'Grinalda de Flores',   emoji:'🌸', machine:'🌺 Floricultura',
    ingredients:[{id:'sunflower',qty:4},{id:'cotton',qty:3}], time:40, xp:8 },
  { id:'r_lavender_oil',  name:'Óleo de Lavanda',      emoji:'💜', machine:'🌺 Floricultura',
    ingredients:[{id:'sunflower',qty:5},{id:'olive_oil',qty:1}], time:40, xp:8 },
  { id:'r_rose_oil',      name:'Óleo de Rosa',         emoji:'🌹', machine:'🌺 Floricultura',
    ingredients:[{id:'cotton',qty:5},{id:'olive_oil',qty:1}], time:40, xp:8 },
  { id:'r_mint_oil',      name:'Óleo de Menta',        emoji:'🌿', machine:'🌺 Floricultura',
    ingredients:[{id:'sugarcane',qty:4},{id:'olive_oil',qty:1}], time:35, xp:7 },

  // ── MOINHO DE RAÇÃO ───────────────────────────────────────────
  { id:'r_chicken_feed',  name:'Ração para Galinha',   emoji:'🐔', machine:'🌽 Moinho de Ração',
    ingredients:[{id:'wheat',qty:1},{id:'corn',qty:1}], time:3, xp:1 },
  { id:'r_pig_feed',      name:'Ração para Porco',     emoji:'🐷', machine:'🌽 Moinho de Ração',
    ingredients:[{id:'corn',qty:1},{id:'soybean',qty:1}], time:3, xp:1 },
  { id:'r_cow_feed',      name:'Ração para Vaca',      emoji:'🐄', machine:'🌽 Moinho de Ração',
    ingredients:[{id:'wheat',qty:1},{id:'soybean',qty:1}], time:3, xp:1 },
  { id:'r_sheep_feed',    name:'Ração para Ovelha',    emoji:'🐑', machine:'🌽 Moinho de Ração',
    ingredients:[{id:'corn',qty:1},{id:'wheat',qty:1}], time:3, xp:1 },
  { id:'r_goat_feed',     name:'Ração para Cabra',     emoji:'🐐', machine:'🌽 Moinho de Ração',
    ingredients:[{id:'soybean',qty:1},{id:'sugarcane',qty:1}], time:3, xp:1 },
];
