importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js')

const registerUrl = 'https://pablomagaz.com/webpush/register'
const publicVapidKey = 'BFdszVeNLXOP_BtqQn1o4-g-pV4BMMFHjrkKKn9OSDqiHVUp52GIGw4HEKJv2jpGiPGkaIpFyHk8zZv93J6-bc8'
const applicationServerKey = urlBase64ToUint8Array(publicVapidKey)

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

self.addEventListener('activate', async () => {
  const subscription = await self.registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey
  })
  await registerSubscription(subscription)
})

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

self.addEventListener('notificationclick', event => {
  event.notification.close()
  const { url } = event.notification.data
  if (url) event.waitUntil(clients.openWindow(url))
})

const registerSubscription = async subscription => {
  const res = await fetch(registerUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(subscription)
  })
  return res.json()
}

const showNotification = (title, options) =>
  new Promise(resolve => {
    setTimeout(() => {
      self.registration.showNotification(title, options).then(() => resolve())
    }, 12000)
  })

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')

  const rawData = atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}
