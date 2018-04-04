importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js')

const staticCache = 'react-base-static-v1'
const dynamicCache = 'react-base-dynamic-v1'
const timeCache = 30 * 24 * 60 * 60
/*
const webpackAssets = '/dist/webpack-assets.json'

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCache).then(function(cache) {
      fetch(webpackAssets).then(response => {
        return response.json()
      }).then(assets => {
        return cache.addAll([
          "/offline.html",
          '/manifest.json'
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

*/
//self.workbox.skipWaiting()
//self.workbox.clientsClaim()

workbox.core.setCacheNameDetails({
  precache: staticCache,
  runtime:  dynamicCache
})

workbox.precaching.precacheAndRoute([
  "/offline.html",
  '/manifest.json',
])

workbox.router.registerRoute(
  ({ event }) => event.request.mode === 'navigate',
  ({ url }) => fetch(url.href).catch(() => caches.match('/offline.html'))
)

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  workbox.strategies.cacheFirst({
    cacheName: staticCache,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: timeCache 
      }),
    ],
  }),
)

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: staticCache,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10,
      }),
    ],
  }),
)

workbox.routing.registerRoute(
  new RegExp('/content/(.*)'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: dynamicCache,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: timeCache 
      }),
    ],
  }),
)
