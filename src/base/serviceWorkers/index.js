importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js')

const timeCache = 30 * 24 * 60 * 60

workbox.core.setCacheNameDetails({
  prefix: 'react-base',
  suffix: 'v1',
  precache: 'static',
  runtime: 'dynamic'
})

workbox.precaching.precacheAndRoute([
  "/offline.html",
])

workbox.routing.registerRoute(
  ({ event }) => event.request.mode === 'navigate',
  ({ url }) => fetch(url.href).catch(() => caches.match('/offline.html'))
)

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  workbox.strategies.cacheFirst({
    cacheName: workbox.core.cacheNames.precache,
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
    cacheName: workbox.core.cacheNames.precache,
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
    cacheName: workbox.core.cacheNames.runtime,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: timeCache 
      }),
    ],
  }),
)
