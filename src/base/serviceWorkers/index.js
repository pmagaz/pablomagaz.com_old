importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js')

const staticCache = 'react-base-static-v1'
const dynamicCache = 'react-base-dynamic-v1'
const timeCache = 30 * 24 * 60 * 60

self.workbox.skipWaiting()
self.workbox.clientsClaim()

workbox.core.setCacheNameDetails({
  precache: staticCache,
  runtime:  dynamicCache
})

workbox.precaching.precacheAndRoute([
  "/offline.html",
  '/manifest.json',
])

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
