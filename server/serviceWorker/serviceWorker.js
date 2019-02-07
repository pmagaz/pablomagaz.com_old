importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js')

const appName = 'react-base'
const suffix = 'v1'
const staticCache = `${ appName }-static-${ suffix }`
const dynamicCache = `${ appName }-dynamic-${ suffix }`

workbox.core.setCacheNameDetails({
  prefix: appName,
  suffix: suffix
})

workbox.precaching.suppressWarnings()

self._precacheManifest = [
  'https://pablomagaz.com/offline.html',
  '/assets/app.3285b74c8d01f66e3b2b.js',
  '/assets/vendor.3285b74c8d01f66e3b2b.js',
  '/assets/styles.d62ba9e609caae10782159dc7b3a905e.css'
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
  
  const promiseChain = new Promise((resolve) => {
    setTimeout(() => {
      self.registration.showNotification(res.title, options)
        .then(() => resolve())
    }, 10000)
  })
  
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
