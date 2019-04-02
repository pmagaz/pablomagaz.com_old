importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js')

const appName = 'react-base'
const suffix = 'v1'
const staticCache = `${ appName }-static-${ suffix }`
const dynamicCache = `${ appName }-dynamic-${ suffix }`
const notificationDelay = 12000

workbox.core.setCacheNameDetails({
  prefix: appName,
  suffix: suffix
})

workbox.precaching.suppressWarnings()

self._precacheManifest = [




]

workbox.precaching.precacheAndRoute(self._precacheManifest, {})

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: staticCache, 
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10,
        maxAgeSeconds: 10 * 24 * 60 * 60 
      }),
    ],
  }),
)

workbox.routing.registerRoute(
  /\.(?:png|gif|svg)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: dynamicCache,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 
      }),
    ],
  }),
)

workbox.routing.registerRoute(
  /\.(?:jpg|jpeg)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: dynamicCache,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 20 * 24 * 60 * 60 
      }),
    ],
  }),
)

workbox.routing.registerRoute(
  /.*(?:googleapis|gstatic).com.*$/,
  workbox.strategies.cacheFirst({
    cacheName: staticCache,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10,
        maxAgeSeconds: 90 * 24 * 60 * 6 
      }),
    ],
  }),
)

workbox.routing.registerRoute(
  ({ event }) => event.request.mode === 'navigate',
  ({ url }) => fetch(url.href).catch(() => caches.match('/offline.html'))
)

self.addEventListener('push', async event => {
  const res = JSON.parse(event.data.text())
  const { title, body, url, icon } = res.payload
  const options = {
    body,
    icon,
    vibrate: [100],
    data: { url }
  }
  event.waitUntil(showNotification(title, options))
})

const showNotification = (title, options) =>
  new Promise(resolve => {
    setTimeout(() => {
      self.registration.showNotification(title, options).then(() => resolve())
    }, notificationDelay)
  })

self.addEventListener('notificationclick', event => {
  event.notification.close()
  const { url } = event.notification.data
  if (url) event.waitUntil(clients.openWindow(url))
})
