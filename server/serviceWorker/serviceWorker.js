importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js')

const staticCache = 'react-base-static-v1'
const dynamicCache = 'react-base-dynamic-v1'
const timeCache = 30 * 24 * 60 * 60

workbox.core.setCacheNameDetails({
  precache: staticCache,
  runtime:  dynamicCache
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

self.addEventListener('push', (event) => {
  const res = JSON.parse(event.data.text())
  const body = (!res.body) ? '' : 'Ver en el Blog Isomórfico.'
  let url
  if (res.data) url = res.data.url
  else url = false
  const options = {
    title : res.title,
    body: body, 
    icon: '/assets/images/icons/logo512.png',
    vibrate : [ 100 ],
    data: { url: url }
  }
  const promiseChain = self.registration.showNotification(res.title, options)
  event.waitUntil(promiseChain)
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const data = event.notification.data
  if (data.url) {
    const promiseChain = clients.openWindow(data.url)
    event.waitUntil(promiseChain)
  }
})
