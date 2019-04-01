

const serviceWorkerUrl = 'https://pablomagaz.com/serviceWorker.js'

const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    await navigator.serviceWorker.register(serviceWorkerUrl)
    await window.Notification.requestPermission()
  } else throw new Error('ServiceWorkers are not supported by your browser!')
}

registerServiceWorker()