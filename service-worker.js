const CACHE='guang-energy-v2-20260911-1';
const FILES=['./','./index.html','./video-bank.js','./video-bank.json','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./SOURCES.html'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('guang-energy-v2-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin||!FILES.some(file=>new URL(file,self.registration.scope).pathname===url.pathname))return;event.respondWith(caches.open(CACHE).then(async cache=>{const saved=await cache.match(event.request,{ignoreSearch:true});if(saved)return saved;return fetch(event.request)}))});
