importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js')

const appName = 'react-base'
const suffix = 'v1'
const staticCache = `${ appName }-static-${ suffix }`
const dynamicCache = `${ appName }-dynamic-${ suffix }`
const timeCache = 10 * 24 * 60 * 60

workbox.core.setCacheNameDetails({
  prefix: appName,
  suffix: suffix
})

workbox.precaching.precacheAndRoute([
  'offline.html',
  '/assets/app.e70fafb30620b43d8ef9.js',
  '/assets/vendor.e70fafb30620b43d8ef9.js',
  '/assets/styles.d62ba9e609caae10782159dc7b3a905e.css'
])

workbox.routing.registerRoute(
  ({ event }) => event.request.mode === 'navigate',
  ({ url }) => fetch(url.href).catch(() => caches.match('/offline.html'))
)

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  workbox.strategies.staleWhileRevalidate({
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
  /.*(?:googleapis|gstatic).com.*$/,
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
  
  const promiseChain = new Promise((resolve) => {
    setTimeout(() => {
      self.registration.showNotification(res.title, options)
        .then(() => {
          resolve()
        })
    }, 5000)
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



