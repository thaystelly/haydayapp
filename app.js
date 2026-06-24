// ============================================================
//  Hay Day Manager — Lógica principal da aplicação
// ============================================================

// ── Estado ───────────────────────────────────────────────────
let resources      = [];
let productionQueue = [];
let activeCategory  = 'Todos';
let activeMachine   = 'Todos';
let filterCanMake   = false;
let stockSearch     = '';

// ── localStorage ─────────────────────────────────────────────
function saveData() {
  localStorage.setItem('hayday_resources', JSON.stringify(resources));
  localStorage.setItem('hayday_queue',     JSON.stringify(productionQueue));
  const el = document.getElementById('save-status');
  el.textContent = 'Salvando…';
  setTimeout(() => el.textContent = 'Dados salvos', 600);
}

function loadData() {
  const saved = localStorage.getItem('hayday_resources');
  if (saved) {
    const savedArr  = JSON.parse(saved);
    const defaultIds = new Set(DEFAULT_RESOURCES.map(r => r.id));
    const defaults   = DEFAULT_RESOURCES.map(r => {
      const match = savedArr.find(s => s.id === r.id);
      return match ? { ...r, qty: match.qty } : { ...r };
    });
    const custom = savedArr.filter(s => !defaultIds.has(s.id));
    resources = [...defaults, ...custom];
  } else {
    resources = DEFAULT_RESOURCES.map(r => ({ ...r }));
  }
  const savedQueue = localStorage.getItem('hayday_queue');
  productionQueue  = savedQueue ? JSON.parse(savedQueue) : [];
}

// ── Tabs ──────────────────────────────────────────────────────
function switchTab(name) {
  ['stock', 'recipes', 'simulator'].forEach(t => {
    document.getElementById('panel-' + t).classList.toggle('hidden', t !== name);
    const btn = document.getElementById('tab-' + t);
    btn.classList.toggle('active', t === name);
    if (t !== name) {
      btn.classList.add('border-farm-300', 'text-farm-700', 'bg-white');
      btn.classList.remove('border-farm-600');
    } else {
      btn.classList.remove('border-farm-300', 'text-farm-700', 'bg-white');
    }
  });
  if (name === 'recipes')   renderRecipes();
  if (name === 'simulator') renderSimulator();
}

// ── Estoque ───────────────────────────────────────────────────
function renderCategoryFilter() {
  const cats = ['Todos', ...new Set(resources.map(r => r.category))];
  document.getElementById('category-filter').innerHTML = cats.map(c => `
    <button onclick="setCategory('${c}')"
      class="px-3 py-1 rounded-full text-xs font-medium border-2 transition-colors
        ${activeCategory === c
          ? 'bg-farm-600 text-white border-farm-600'
          : 'border-farm-300 text-farm-700 hover:bg-farm-100'}">
      ${c}
    </button>`).join('');
}

function setCategory(cat) {
  activeCategory = cat;
  renderCategoryFilter();
  renderResourceGrid();
}

function renderResourceGrid() {
  let filtered = activeCategory === 'Todos'
    ? resources
    : resources.filter(r => r.category === activeCategory);

  if (stockSearch) {
    filtered = filtered.filter(r => r.name.toLowerCase().includes(stockSearch));
  }

  document.getElementById('resource-grid').innerHTML = filtered.length
    ? filtered.map(r => `
      <div class="resource-card bg-white border-2 border-farm-200 rounded-xl p-3 shadow-sm">
        <div class="flex items-start justify-between mb-1">
          <span class="text-3xl leading-none">${r.emoji}</span>
          <button onclick="removeResource('${r.id}')" class="text-gray-300 hover:text-red-400 text-xs transition-colors">✕</button>
        </div>
        <p class="text-xs font-semibold text-gray-600 truncate mb-2" title="${r.name}">${r.name}</p>
        <div class="flex items-center gap-1">
          <button onclick="adjustQty('${r.id}',-1)" class="qty-btn w-6 h-6 bg-farm-100 hover:bg-farm-200 rounded text-farm-800 font-bold text-sm leading-none">−</button>
          <input type="number" min="0" value="${r.qty}" onchange="setQty('${r.id}',this.value)"
            class="flex-1 min-w-0 text-center border border-farm-200 rounded text-sm font-bold py-0.5 focus:outline-none focus:ring-1 focus:ring-farm-400" />
          <button onclick="adjustQty('${r.id}',1)" class="qty-btn w-6 h-6 bg-farm-100 hover:bg-farm-200 rounded text-farm-800 font-bold text-sm leading-none">+</button>
        </div>
        <div class="mt-2 h-1.5 bg-farm-100 rounded-full overflow-hidden">
          <div class="progress-bar h-full bg-farm-400 rounded-full" style="width:${Math.min(100, r.qty)}%"></div>
        </div>
      </div>`).join('')
    : '<p class="col-span-full text-center text-gray-400 py-8">Nenhum recurso encontrado.</p>';

  renderStockSummary();
}

function renderStockSummary() {
  const total   = resources.reduce((s, r) => s + r.qty, 0);
  const nonZero = resources.filter(r => r.qty > 0).length;
  const top     = [...resources].sort((a, b) => b.qty - a.qty)[0];
  document.getElementById('stock-summary').innerHTML = `
    <div class="bg-white rounded-lg p-3 border border-farm-200">
      <div class="text-2xl font-bold text-farm-700">${total}</div>
      <div class="text-xs text-gray-500">Total de itens</div>
    </div>
    <div class="bg-white rounded-lg p-3 border border-farm-200">
      <div class="text-2xl font-bold text-farm-700">${nonZero}</div>
      <div class="text-xs text-gray-500">Com estoque</div>
    </div>
    <div class="bg-white rounded-lg p-3 border border-farm-200">
      <div class="text-2xl font-bold text-farm-700">${resources.length}</div>
      <div class="text-xs text-gray-500">Tipos de recurso</div>
    </div>
    <div class="bg-white rounded-lg p-3 border border-farm-200">
      <div class="text-2xl font-bold text-farm-700">${top ? top.emoji : '—'}</div>
      <div class="text-xs text-gray-500">${top && top.qty > 0 ? `Mais: ${top.name} (${top.qty})` : 'Nenhum'}</div>
    </div>`;
}

function adjustQty(id, delta) {
  const r = resources.find(x => x.id === id);
  if (!r) return;
  r.qty = Math.max(0, r.qty + delta);
  saveData(); renderResourceGrid();
}

function setQty(id, val) {
  const r = resources.find(x => x.id === id);
  if (!r) return;
  r.qty = Math.max(0, parseInt(val) || 0);
  saveData(); renderResourceGrid();
}

function removeResource(id) {
  if (!confirm('Remover este recurso?')) return;
  resources = resources.filter(r => r.id !== id);
  saveData(); renderCategoryFilter(); renderResourceGrid();
}

function resetStock() {
  if (!confirm('Zerar todos os estoques?')) return;
  resources.forEach(r => r.qty = 0);
  saveData(); renderResourceGrid();
}

// ── Modal de recurso personalizado ───────────────────────────
function openAddResource() { document.getElementById('modal-resource').classList.remove('hidden'); }
function closeModal()      { document.getElementById('modal-resource').classList.add('hidden'); }

function saveNewResource() {
  const name = document.getElementById('new-name').value.trim();
  if (!name) { alert('Digite um nome.'); return; }
  const emoji    = document.getElementById('new-emoji').value.trim() || '🌿';
  const category = document.getElementById('new-category').value;
  const qty      = Math.max(0, parseInt(document.getElementById('new-qty').value) || 0);
  resources.push({ id: 'custom_' + Date.now(), name, emoji, category, qty });
  saveData();
  closeModal();
  renderCategoryFilter();
  renderResourceGrid();
  document.getElementById('new-name').value = '';
  document.getElementById('new-qty').value  = '0';
}

// ── Receitas ─────────────────────────────────────────────────
function canMakeRecipe(r) {
  return r.ingredients.every(ing => {
    const res = resources.find(x => x.id === ing.id);
    return res && res.qty >= ing.qty;
  });
}

function renderMachineTabs() {
  const machines = ['Todos', ...new Set(RECIPES.map(r => r.machine))];
  document.getElementById('machine-tabs').innerHTML = machines.map(m => `
    <button onclick="setMachine('${m}')"
      class="px-3 py-1 rounded-full text-xs font-medium border-2 transition-colors
        ${activeMachine === m
          ? 'bg-farm-600 text-white border-farm-600'
          : 'border-farm-300 text-farm-700 hover:bg-farm-100'}">
      ${m}
    </button>`).join('');
}

function setMachine(m) {
  activeMachine = m;
  renderMachineTabs();
  renderRecipeCards();
}

function toggleCanMake() {
  filterCanMake = !filterCanMake;
  const btn = document.getElementById('btn-can-make');
  btn.classList.toggle('bg-green-500',   filterCanMake);
  btn.classList.toggle('text-white',     filterCanMake);
  btn.classList.toggle('text-green-700', !filterCanMake);
  renderRecipeCards(document.getElementById('recipe-search').value.toLowerCase());
}

function renderRecipes() {
  renderMachineTabs();
  renderRecipeCards();
  document.getElementById('recipe-search').oninput = function () {
    renderRecipeCards(this.value.toLowerCase());
  };
}

function renderRecipeCards(search = '') {
  let filtered = RECIPES;
  if (activeMachine !== 'Todos') filtered = filtered.filter(r => r.machine === activeMachine);
  if (search)        filtered = filtered.filter(r => r.name.toLowerCase().includes(search));
  if (filterCanMake) filtered = filtered.filter(canMakeRecipe);

  document.getElementById('recipe-list').innerHTML = filtered.map(r => {
    const checks = r.ingredients.map(ing => {
      const res  = resources.find(x => x.id === ing.id);
      const have = res ? res.qty : 0;
      return { ing, res, have, ok: have >= ing.qty };
    });
    const allOk   = checks.every(c => c.ok);
    const maxMake = Math.min(...checks.map(c => Math.floor(c.have / c.ing.qty)));

    const ingTags = checks.map(c => `
      <span class="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full
        ${c.ok ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}">
        ${c.res ? c.res.emoji : '?'} ${c.res ? c.res.name : c.ing.id}: ${c.ing.qty}
        ${c.ok ? '✓' : `(tens ${c.have})`}
      </span>`).join('');

    return `
    <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm" style="border-left:4px solid #ca8a04">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3">
          <span class="text-3xl">${r.emoji}</span>
          <div>
            <h4 class="font-bold text-gray-800">${r.name}</h4>
            <span class="text-xs text-gray-400">${r.machine}</span>
          </div>
        </div>
        <div class="text-right">
          <div class="text-sm font-semibold text-farm-700">⏱ ${formatTime(r.time)}</div>
          <div class="text-xs text-gray-400">XP: +${r.xp}</div>
        </div>
      </div>
      <div class="mt-3 flex flex-wrap gap-1.5">${ingTags}</div>
      <div class="mt-3 flex items-center justify-between">
        <span class="text-xs ${allOk ? 'text-green-600 font-semibold' : 'text-red-500'}">
          ${allOk ? `✅ Pode produzir! (até ${maxMake}x)` : '❌ Ingredientes insuficientes'}
        </span>
        <button onclick="quickAddToQueue('${r.id}')"
          class="text-xs bg-farm-100 hover:bg-farm-200 text-farm-700 px-2 py-1 rounded-lg transition-colors">
          + Fila
        </button>
      </div>
    </div>`;
  }).join('') || '<p class="text-gray-400 text-center py-8">Nenhuma receita encontrada.</p>';
}

function quickAddToQueue(recipeId) {
  addToQueue(recipeId, 1);
  switchTab('simulator');
}

// ── Simulador ─────────────────────────────────────────────────
function renderSimulator() {
  const sel = document.getElementById('sim-recipe-select');
  sel.innerHTML = '<option value="">-- Escolha uma receita --</option>' +
    RECIPES.map(r => `<option value="${r.id}">${r.emoji} ${r.name}</option>`).join('');

  document.getElementById('quick-sim-btns').innerHTML = RECIPES.slice(0, 10).map(r =>
    `<button onclick="quickSim('${r.id}')"
      class="text-xs px-2 py-1 bg-farm-50 border border-farm-300 text-farm-700 rounded-lg hover:bg-farm-100">
      ${r.emoji} ${r.name}
    </button>`).join('');

  renderQueue();
}

function quickSim(id) {
  document.getElementById('sim-recipe-select').value = id;
  document.getElementById('sim-qty').value = 1;
  runSimulator();
}

function changeSimQty(delta) {
  const inp = document.getElementById('sim-qty');
  inp.value = Math.max(1, (parseInt(inp.value) || 1) + delta);
}

function runSimulator() {
  const recipeId = document.getElementById('sim-recipe-select').value;
  const qty      = Math.max(1, parseInt(document.getElementById('sim-qty').value) || 1);

  if (!recipeId) {
    showSimResult(`<div class="text-center text-gray-400"><p class="text-4xl mb-2">⚠️</p><p class="text-sm">Selecione uma receita primeiro.</p></div>`);
    return;
  }

  const recipe = RECIPES.find(r => r.id === recipeId);
  if (!recipe) return;

  const checks = recipe.ingredients.map(ing => {
    const res    = resources.find(x => x.id === ing.id);
    const have   = res ? res.qty : 0;
    const needed = ing.qty * qty;
    return { ing, res, have, needed, ok: have >= needed };
  });

  const allOk    = checks.every(c => c.ok);
  const totalTime = recipe.time * qty;
  const maxPossible = Math.min(...recipe.ingredients.map(ing => {
    const res = resources.find(x => x.id === ing.id);
    return res ? Math.floor(res.qty / ing.qty) : 0;
  }));

  const ingRows = checks.map(c => `
    <div class="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0">
      <span class="flex items-center gap-2 text-sm">
        <span>${c.res ? c.res.emoji : '?'}</span>
        <span class="text-gray-700">${c.res ? c.res.name : c.ing.id}</span>
      </span>
      <span class="text-sm font-semibold ${c.ok ? 'text-green-600' : 'text-red-500'}">
        ${c.have}/${c.needed} ${c.ok ? '✓' : `(faltam ${c.needed - c.have})`}
      </span>
    </div>`).join('');

  showSimResult(`
    <div class="sim-result-enter">
      <div class="flex items-center gap-3 mb-4">
        <span class="text-4xl">${recipe.emoji}</span>
        <div>
          <h3 class="font-bold text-gray-800">${qty}× ${recipe.name}</h3>
          <span class="text-xs text-gray-400">${recipe.machine}</span>
        </div>
        <span class="ml-auto text-base font-bold ${allOk ? 'text-green-600' : 'text-red-500'}">
          ${allOk ? '✅ Possível!' : '❌ Faltam itens'}
        </span>
      </div>
      <div class="bg-white rounded-xl p-3 mb-4 border border-farm-200">
        <p class="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Ingredientes</p>
        ${ingRows}
      </div>
      <div class="grid grid-cols-2 gap-3 mb-4">
        <div class="bg-white rounded-xl p-3 text-center border border-farm-200">
          <div class="text-xl font-bold text-farm-700">⏱ ${formatTime(totalTime)}</div>
          <div class="text-xs text-gray-500">Tempo total</div>
        </div>
        <div class="bg-white rounded-xl p-3 text-center border border-farm-200">
          <div class="text-xl font-bold text-farm-700">+${recipe.xp * qty} XP</div>
          <div class="text-xs text-gray-500">Experiência</div>
        </div>
      </div>
      ${allOk
        ? `<div class="flex gap-2">
            <button onclick="addToQueue('${recipe.id}',${qty})"
              class="flex-1 bg-farm-600 hover:bg-farm-700 text-white font-bold py-2.5 rounded-xl transition-colors text-sm shadow">
              ➕ Adicionar à fila
            </button>
            <button onclick="deductAndProduce('${recipe.id}',${qty})"
              class="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-xl transition-colors text-sm shadow"
              title="Deduz os ingredientes do estoque e adiciona à fila">
              ✅ Produzir agora
            </button>
          </div>`
        : `<div class="text-xs text-gray-500 bg-white rounded-xl p-3 border border-red-200 text-center">
            Com seu estoque atual você pode produzir no máximo <strong>${maxPossible} unidade(s)</strong>.
          </div>`}
    </div>`);
}

function showSimResult(html) {
  document.getElementById('sim-result').innerHTML = html;
}

// ── Fila de produção ──────────────────────────────────────────
function deductAndProduce(recipeId, qty) {
  const recipe = RECIPES.find(r => r.id === recipeId);
  if (!recipe) return;
  const canDo = recipe.ingredients.every(ing => {
    const res = resources.find(x => x.id === ing.id);
    return res && res.qty >= ing.qty * qty;
  });
  if (!canDo) { alert('Ingredientes insuficientes!'); return; }
  recipe.ingredients.forEach(ing => {
    const res = resources.find(x => x.id === ing.id);
    if (res) res.qty = Math.max(0, res.qty - ing.qty * qty);
  });
  saveData();
  addToQueue(recipeId, qty);
  runSimulator();
}

function addToQueue(recipeId, qty) {
  const recipe = RECIPES.find(r => r.id === recipeId);
  if (!recipe) return;
  productionQueue.push({
    id:        Date.now(),
    recipeId,
    name:      recipe.name,
    emoji:     recipe.emoji,
    qty,
    totalTime: recipe.time * qty,
    addedAt:   new Date().toLocaleTimeString('pt-BR'),
  });
  saveData();
  renderQueue();
}

function removeFromQueue(qid) {
  productionQueue = productionQueue.filter(q => q.id !== qid);
  saveData();
  renderQueue();
}

function clearQueue() {
  if (!productionQueue.length) return;
  if (!confirm('Limpar a fila?')) return;
  productionQueue = [];
  saveData();
  renderQueue();
}

function renderQueue() {
  const el = document.getElementById('production-queue');
  if (!productionQueue.length) {
    el.innerHTML = '<p class="text-sm text-gray-400 text-center py-4">Nenhuma produção na fila</p>';
    return;
  }
  const totalTime = productionQueue.reduce((s, q) => s + q.totalTime, 0);
  el.innerHTML = productionQueue.map(q => `
    <div class="flex items-center gap-3 bg-farm-50 border border-farm-200 rounded-xl px-4 py-3">
      <span class="text-2xl">${q.emoji}</span>
      <div class="flex-1 min-w-0">
        <p class="font-semibold text-sm text-gray-800">${q.qty}× ${q.name}</p>
        <p class="text-xs text-gray-400">⏱ ${formatTime(q.totalTime)} · ${q.addedAt}</p>
      </div>
      <button onclick="removeFromQueue(${q.id})" class="text-gray-300 hover:text-red-400 text-sm">✕</button>
    </div>`).join('') +
    `<div class="flex items-center justify-between bg-farm-700 text-white rounded-xl px-4 py-3 mt-1">
      <span class="font-semibold text-sm">⏱ Tempo total na fila</span>
      <span class="font-bold">${formatTime(totalTime)}</span>
    </div>`;
}

// ── Utilitários ───────────────────────────────────────────────
function formatTime(minutes) {
  if (minutes < 60) return `${minutes}min`;
  const h = Math.floor(minutes / 60), m = minutes % 60;
  return m > 0 ? `${h}h ${m}min` : `${h}h`;
}

// ── Inicialização ─────────────────────────────────────────────
function init() {
  loadData();
  renderCategoryFilter();
  renderResourceGrid();

  document.getElementById('stock-search').addEventListener('input', function () {
    stockSearch = this.value.toLowerCase();
    renderResourceGrid();
  });

  document.getElementById('modal-resource').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });
}

init();
