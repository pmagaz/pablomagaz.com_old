import { env } from 'base'

let template

if (env === 'production') {
  template = `<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/serviceWorker.js');
    });
  }
  </script>`
} else {
  template = ''
}


export default template