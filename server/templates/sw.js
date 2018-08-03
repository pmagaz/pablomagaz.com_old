import { env } from 'base'

let template

if (env === 'development') {
  /*template = `<script>
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
  if ('serviceWorker' in navigator) {
    const vapidKeyArray = urlBase64ToUint8Array('BJZ79JYphdaAWWw0CyXmA6sUqxMSAaixNewwWBh-SZI6nxXgiF0U4hpfHXp7aOt79ohaLOUWDvkqNL4oSAZrR8s');
    window.addEventListener('load', () => {
      navigator
        .serviceWorker
        .register('/serviceWorker.js')
        .then(swRegistration => {
          swRegistration
          .pushManager
          .getSubscription()
          .then(subscription => {
            console.log(555555, subscription)
            const isSubscribed = !(subscription === null);
            if (!isSubscribed) {
              return swRegistration.pushManager
                .subscribe({
                  userVisibleOnly: true,
                  applicationServerKey: vapidKeyArray
                })
                .then(sendSubscriptionToServer);
            }
            sendSubscriptionToServer(subscription);
          })
          .catch(err => {
            console.log('getSubscription failed', err);
          });
        })
    });
  }
  </script>`*/
  template = '<script src="/registerSwV1.js"></script>'
} else {
  template = ''
}


export default template