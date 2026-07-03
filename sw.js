// FYGO service worker — بسيط: يمرر الطلبات للشبكة (مطلوب لتثبيت التطبيق)
self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => self.clients.claim());
self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request).catch(() =>
    new Response("لا يوجد اتصال بالإنترنت", { headers: { "Content-Type": "text/plain; charset=utf-8" } })
  ));
});
