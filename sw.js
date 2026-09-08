const CACHE='beray-hub-v1';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icons/beray-icon-512.png','./icons/aurax-icon-512.png','./icons/saglik-icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  if(new URL(e.request.url).origin!==location.origin) return;
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request)));
});