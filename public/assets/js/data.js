/**
 * Data loader for projects
 * Fetches and parses the projects.json file
 */

let cachedData = null;

export async function loadData() {
  if (cachedData) return cachedData;

  try {
    const response = await fetch('data/projects.json');
    cachedData = await response.json();
    return cachedData;
  } catch (error) {
    console.error('Failed to load projects data:', error);
    return { fashion: [], art: [] };
  }
}

export async function getFashionProjects() {
  const data = await loadData();
  return data.fashion ?? [];
}

export async function getArtProjects() {
  const data = await loadData();
  return data.art ?? [];
}

export async function getAllProjects() {
  const data = await loadData();
  const fashion = data.fashion ?? [];
  const art = data.art ?? [];
  return [...fashion, ...art];
}

export async function getProjectBySlug(slug) {
  const all = await getAllProjects();
  return all.find(p => p.slug === slug) || null;
}
