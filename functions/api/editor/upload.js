import { ensureEditorAccess, saveGithubFile } from './_github.js';

const extensionFor = type => ({ 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' }[type]);

export async function onRequestPost(context) {
  const denied = ensureEditorAccess(context);
  if (denied) return denied;
  try {
    const { data } = await context.request.json();
    const [header, encoded] = String(data).split(',', 2);
    const type = header.match(/^data:(image\/(?:jpeg|png|webp));base64$/)?.[1];
    if (!type || !encoded || encoded.length > 7_000_000) throw new Error('Invalid image');
    const path = `public/images/uploads/${Date.now()}-${crypto.randomUUID().slice(0, 8)}.${extensionFor(type)}`;
    await saveGithubFile(context.env, path, encoded, 'Add website image from editor');
    return Response.json({ path: `/${path.replace(/^public\//, '')}` });
  } catch { return new Response('The image could not be uploaded.', { status: 400 }); }
}
