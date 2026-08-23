/**
 * data.js — Carregamento de dados (API com fallback para JSON)
 * Adicionada função genérica de paginação
 */

/**
 * Carrega dados de um endpoint, com fallback para arquivo JSON local.
 * @param {string} endpoint - URL da API (ex: '/api/team')
 * @param {string} fallbackFile - Caminho do arquivo JSON local (ex: '/data/team.json')
 * @param {string} dataKey - Chave para extrair os dados (ex: 'members', 'items')
 * @returns {Promise<Array>} Array de dados
 */
export async function loadData(endpoint, fallbackFile, dataKey = null) {
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const data = await response.json();
      if (dataKey && data[dataKey]) {
        return data[dataKey];
      }
      if (Array.isArray(data)) {
        return data;
      }
      for (const key of ['data', 'items', 'members', 'news', 'publications']) {
        if (data[key] && Array.isArray(data[key])) {
          return data[key];
        }
      }
      console.warn(`[data] Nenhum array encontrado na resposta da API: ${endpoint}`);
      return [];
    }
    throw new Error(`HTTP ${response.status}`);
  } catch (error) {
    console.warn(`[data] Falha ao carregar da API (${endpoint}), usando fallback:`, error);
    return loadFallback(fallbackFile, dataKey);
  }
}

/**
 * Carrega dados de um arquivo JSON local.
 * @param {string} file - Caminho do arquivo JSON
 * @param {string} dataKey - Chave para extrair os dados
 * @returns {Promise<Array>} Array de dados
 */
async function loadFallback(file, dataKey = null) {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (dataKey && data[dataKey]) {
      return data[dataKey];
    }
    if (Array.isArray(data)) {
      return data;
    }
    for (const key of ['items', 'members', 'news', 'publications', 'data']) {
      if (data[key] && Array.isArray(data[key])) {
        return data[key];
      }
    }
    console.warn(`[data] Nenhum array encontrado no fallback: ${file}`);
    return [];
  } catch (error) {
    console.error(`[data] Erro ao carregar fallback (${file}):`, error);
    return [];
  }
}

/**
 * Função genérica de paginação.
 * @param {Array} items - Array completo de itens.
 * @param {number} page - Número da página (começa em 1).
 * @param {number} perPage - Itens por página (padrão 10).
 * @returns {Object} { items: Array, pagination: { page, perPage, total, pages } }
 */
export function paginateData(items, page, perPage = 10) {
  const total = items.length;
  const pages = Math.max(1, Math.ceil(total / perPage));
  // Garantir que a página esteja dentro dos limites
  const currentPage = Math.max(1, Math.min(page, pages));
  const start = (currentPage - 1) * perPage;
  const end = Math.min(start + perPage, total);
  const paginatedItems = items.slice(start, end);
  return {
    items: paginatedItems,
    pagination: {
      page: currentPage,
      perPage,
      total,
      pages
    }
  };
}

/**
 * Carrega dados de membros da equipe.
 */
export async function loadTeamData() {
  return loadData('/api/team', './data/team.json', 'members');
}

/**
 * Carrega dados de equipamentos.
 */
export async function loadEquipmentData() {
  return loadData('/api/equipment', './data/equipment.json', 'items');
}

/**
 * Carrega dados de publicações.
 */
export async function loadPublicationsData() {
  return loadData('/api/publications', './data/publications.json', 'items');
}

/**
 * Carrega notícias de fallback.
 */
export async function loadNewsFallback() {
  return loadData('/api/news?limit=3', './data/news-fallback.json', 'items');
}