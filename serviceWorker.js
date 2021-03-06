self.addEventListener('install', evt => {
    console.log('Service worker installed');
});

self.addEventListener('activate', evt => {
    console.log('service worker activated');
});

self.addEventListener("install",function(event){
    event.waitUntil(
       caches.open("our-cache").then(function(cache){
          cache.addAll(["/"]);
       })
    );
 });


 self.addEventListener("fetch",function(event){
    event.respondWith(
        fetch(event.request).then(function(response){
           return response;
        }).catch(function(error){
           //We don't really need the error parameter, but if you want to use it you know how to now.
           return caches.match(event.request).then(function (cacheRes) {
            return cacheRes;
           })
        })
     );
 });

 self.addEventListener('message', (event) => {
   if (event.data === 'SKIP_WAITING') {
       self.skipWaiting();
   }
});