import { SiteConf } from 'base';
import serviceWorkerTemplate from './sw';

export default function blog(params) {
  const state = JSON.stringify(params.state);

  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>${ SiteConf.BlogTitle }</title>
    <meta name="HandheldFriendly" content="True" />
    <link rel="alternate" hreflang="es" href="https://pablomagaz.com" />

    <meta name="description" content="${ SiteConf.BlogDescription }" />
    <meta name="referrer" content="no-referrer-when-downgrade" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content="${ SiteConf.KeyWords }"> 
    <link rel="canonical" href="${ SiteConf.BlogUrl }" />
    <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/123e14d6ac1a03bab285de7db/bb3992eaa21516654114beff3.js");</script>

    ${ params.style }
    <link rel="manifest" href="${ SiteConf.SiteUrl }/manifest.webmanifest" />
    <meta name="theme-color" content="#f72354">
    <link rel="icon" href="${ SiteConf.SiteUrl }/assets/images/favicon.ico"/>
    <link rel="apple-touch-icon" sizes="180x180" href="${ SiteConf.SiteUrl }/assets/images/icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="${ SiteConf.SiteUrl }/assets/images/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="${ SiteConf.SiteUrl }/assets/images/icons/favicon-32x32.png">
    <link rel="mask-icon" href="${ SiteConf.SiteUrl }/assets/images/icons/safari-pinned-tab.svg" color="#f72354">
    <meta name="msapplication-TileColor" content="#f72354">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="#f72354">
    <meta name="apple-mobile-web-app-title" content="${ SiteConf.BlogTitle }">
    <meta http-equiv="x-ua-compatible" content="IE=Edge">
 
    <meta property="og:locale" content="es_ES" /> 
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${ SiteConf.BlogTitle }" />
    <meta property="og:site_name" content="${ SiteConf.BlogTitle }" />
    <meta property="og:url" content="${ SiteConf.BlogUrl }" />
    <meta property="og:description" content="${ SiteConf.BlogDescription }" />
    <meta property="og:image" content="${ SiteConf.ServerUrl }/${ SiteConf.blogTitleImage }" />
    
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${ SiteConf.BlogTitle }" />
    <meta name="twitter:url" content="${ SiteConf.BlogUrl }" />
    <meta name="twitter:description" content="${ SiteConf.BlogDescription }" />
    <meta name="twitter:image" content="${ SiteConf.ServerUrl }/${ SiteConf.blogTitleImage }" />
    <meta name="google-site-verification" content="WPquQ1N8IxHd4sXYLzqumAtex4IlcULtupjrsaCZT7s" />
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Website",
        "publisher": {
            "@type": "Organization",
            "name": "${ SiteConf.BlogDescription }",
            "logo": "${ SiteConf.ServerUrl }/${ SiteConf.blogTitleImage }"
        },
        "url": "${ SiteConf.BlogUrl }",
        "image": "${ SiteConf.ServerUrl }/${ SiteConf.blogTitleImage }",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "name": "${ SiteConf.BlogTitle }",
            "@id": "${ SiteConf.BlogUrl }"
        },
        "description": "${ SiteConf.BlogDescription }",
        "keywords": "${ SiteConf.KeyWords }"
      }
    </script>

    ${ params.vendorScript }
    </head>
    <body>
      <div id="root">${ params.container }</div>
      <script>window.$REACTBASE_STATE = ${ state }</script>
      ${ params.appScript }
      ${ serviceWorkerTemplate }
    </body>
  </html>
  `;
}
