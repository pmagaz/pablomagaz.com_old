let staticCache = 'react-base'
let dynamicCache = 'react-base'
let webpackAssets = '/dist/webpack-assets.json'

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCache).then(function(cache) {
      fetch(webpackAssets).then(response => {
        return response.json()
      }).then(assets => {
        return cache.addAll([
          "/offline.html",
          '/manifest.json',
          'assets' + assets.app.js,
          'assets' + assets.app.css,
          'assets' + assets.vendor.js,
          '/assets/images/postcover/blog.svg',
        ])
      })
        .then(function() {
          return self.skipWaiting()
        })
    })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response
      else {
        return fetch(event.request).then(function(res) {
          return caches.open(staticCache).then(function(cache) {
            const ownDomain = !!~event.request.url.indexOf('content')
            if (ownDomain) cache.put(event.request.url, res.clone())
            return res
          })
        }).catch(function() {
          return caches.match('offline.html')
        })
      }
    })
  )
})

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function() {
          //return true
        }).map(function(cacheName) {
          return caches.delete(dynamicCache)
        })
      )
    })
  )
})


self.addEventListener('push', function(e) {
  let options = {
    body: 'This notification was generated from a push!',
    icon: 'images/example.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {action: 'explore', title: 'Explore this new world',
        icon: 'images/checkmark.png'},
      {action: 'close', title: 'Close',
        icon: 'images/xmark.png'},
    ]
  }
  e.waitUntil(
    self.registration.showNotification('Hello world!', options)
  )
})