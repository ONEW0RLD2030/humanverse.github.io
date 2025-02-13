// ملف js/transparency.js
import { create } from 'orbit-db';

const db = await create('transparency-log', 'docstore', { write: ['*'] });

export function logChange(action, user) {
  const entry = {
    action,
    user,
    timestamp: new Date().toISOString(),
  };
  await db.put(entry);
    }
