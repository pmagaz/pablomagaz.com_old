const publicVapidKey = 'BJZ79JYphdaAWWw0CyXmA6sUqxMSAaixNewwWBh-SZI6nxXgiF0U4hpfHXp7aOt79ohaLOUWDvkqNL4oSAZrR8s'
const vpaidServerKey = urlBase64ToUint8Array(publicVapidKey) 

function sendSubscription(subscription) {
  console.log(77777777, subscription)
}

function webpushSubscribe(swRegistration) {
  return swRegistration
    .pushManager
    .getSubscription()
    .then(subscription => {
      if (!subscription) {
        return swRegistration
          .pushManager
          .subscribe({
            userVisibleOnly: true,
            applicationServerKey: vpaidServerKey 
          })
          .then(sendSubscription)
      }
    })
    .catch(err => {
      console.log('No subscription!', err)
    })
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator
      .serviceWorker
      .register('serviceWorker.js')
      .then(swRegistration => webpushSubscribe(swRegistration))
  })
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/")
  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}