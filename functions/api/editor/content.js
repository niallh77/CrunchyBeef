import { CONTENT_PATH, decodeBase64, ensureEditorAccess, githubFile, saveGithubFile } from './_github.js';

export async function onRequestGet(context) {
  const denied = ensureEditorAccess(context);
  if (denied) return denied;
  try {
    const file = await githubFile(context.env, CONTENT_PATH);
    return Response.json({ content: decodeBase64(file.content) }, { headers: { 'Cache-Control': 'no-store' } });
  } catch { return new Response('The editor could not load your saved content.', { status: 502 }); }
}

export async function onRequestPut(context) {
  const denied = ensureEditorAccess(context);
  if (denied) return denied;
  try {
    const { content } = await context.request.json();
    if (!content?.home || !Array.isArray(content.galleryGroups)) throw new Error('Invalid content');
    const current = await githubFile(context.env, CONTENT_PATH);
    const encoded = btoa(unescape(encodeURIComponent(`${JSON.stringify(content, null, 2)}\n`)));
    await saveGithubFile(context.env, CONTENT_PATH, encoded, 'Update website content from editor', current.sha);
    return Response.json({ saved: true });
  } catch { return new Response('The editor could not save your changes.', { status: 400 }); }
}
