

/* eslint-disable no-restricted-syntax */
const permissionDelay = 10000
const registerUrl = 'https://pablomagaz.com/webpush/register'
const serviceWorkerUrl = 'https://pablomagaz.com/serviceWorker.js'
const publicVapidKey = 'BFdszVeNLXOP_BtqQn1o4-g-pV4BMMFHjrkKKn9OSDqiHVUp52GIGw4HEKJv2jpGiPGkaIpFyHk8zZv93J6-bc8'

const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; i += 1) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

const saveSubscription = async subscription => {
  const res = await fetch(registerUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(subscription)
  })
  return res.status === 200 ? res.json() : false
}

const generateSubscription = swRegistration =>
  new Promise((resolve, reject) => {
    setTimeout(async () => {
      await window.Notification.requestPermission()
      const subscribed = await swRegistration.pushManager.getSubscription()
      if (!subscribed) {
        const subscription = await swRegistration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
        })
        const saved = await saveSubscription(subscription)
        if (saved) resolve(saved)
        else reject(new Error('Subscription not saved!'))
      }
      resolve(subscribed)
    }, permissionDelay)
  })

const registerServiceWorker = async () => {
  return await navigator.serviceWorker.register(serviceWorkerUrl)
}

const register = async () => {
  if ('serviceWorker' in navigator) {
    const swRegistration = await registerServiceWorker()
    await generateSubscription(swRegistration)
  } else throw new Error('ServiceWorkers are not supported by your browser!')
}

register()