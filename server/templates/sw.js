import { SiteConf } from 'base'

export default `<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceWorker.js');
  });
}
</script>`