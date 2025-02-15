const CACHE_NAME = 'humanverse-v1';
const ASSETS = [
  '/',
  '/books/quran.json',
  '/books/bible.json',
  '/books/torah.json',
  '/styles/main.css'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(res => res || fetch(e.request))
});
