const registerUrl = 'https://pablomagaz.com/webpush/register'
const publicVapidKey = 'BFdszVeNLXOP_BtqQn1o4-g-pV4BMMFHjrkKKn9OSDqiHVUp52GIGw4HEKJv2jpGiPGkaIpFyHk8zZv93J6-bc8'
const applicationServerKey = urlBase64ToUint8Array(publicVapidKey) 

const registerSubscription = subscription => {
  return fetch(registerUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(subscription)
  })
    .then(response => {
      if (!response.ok) throw new Error('Bad status code from server.')
      return response
    })
}

const webpushSubscribe = swRegistration => {
  setTimeout(() => (
    swRegistration
      .pushManager
      .getSubscription()
      .then(subscription => {
        if (!subscription) {
          return swRegistration
            .pushManager
            .subscribe({
              userVisibleOnly: true,
              applicationServerKey: applicationServerKey 
            })
            .then(registerSubscription)
        }
      })
      .catch(err => console.log('No subscription!', err))
  ), 8500)
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator
      .serviceWorker
      .register('https://pablomagaz.com/serviceWorker.js')
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