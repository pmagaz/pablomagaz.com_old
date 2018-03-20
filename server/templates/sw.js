import { SiteConf } from 'base'

export default `<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('http://localhost:8000/serviceWorker.js').then(function(registration) {
      console.log('ServiceWorker Ok')
    }, function(err) {
      console.log('ServiceWorker Ko')
    }).catch(function(err) {
      console.log(err)
    });
  });
} else console.log('service worker is not supported');
</script>`