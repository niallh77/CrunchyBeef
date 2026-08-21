export const REPOSITORY = 'niallh77/CrunchyBeef';
export const CONTENT_PATH = 'src/content.json';

export function ensureEditorAccess({ request, env }) {
  const email = request.headers.get('Cf-Access-Authenticated-User-Email')?.trim().toLowerCase();
  const permittedEmail = env.EDITOR_EMAIL?.trim().toLowerCase();
  if (!permittedEmail || email !== permittedEmail) return new Response('This editor is restricted to the approved email address.', { status: 403 });
  if (!env.GITHUB_TOKEN) return new Response('The editor publishing connection has not been configured yet.', { status: 503 });
  return null;
}

export async function githubFile(env, path) {
  const response = await fetch(`https://api.github.com/repos/${REPOSITORY}/contents/${path}`, { headers: { Authorization: `Bearer ${env.GITHUB_TOKEN}`, Accept: 'application/vnd.github+json', 'User-Agent': 'Country-Beach-Escape-Editor' } });
  if (!response.ok) throw new Error('Could not read the website content.');
  return response.json();
}

export async function saveGithubFile(env, path, content, message, sha) {
  const response = await fetch(`https://api.github.com/repos/${REPOSITORY}/contents/${path}`, { method: 'PUT', headers: { Authorization: `Bearer ${env.GITHUB_TOKEN}`, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json', 'User-Agent': 'Country-Beach-Escape-Editor' }, body: JSON.stringify({ message, content, ...(sha ? { sha } : {}) }) });
  if (!response.ok) throw new Error('Could not save the website content.');
  return response.json();
}

export function decodeBase64(value) { return JSON.parse(atob(value.replace(/\n/g, ''))); }
