import { SiteConf } from 'base'
import serviceWorkerTemplate from './sw'

export default function main(params) {
  
  const state = JSON.stringify(params.state)
  
  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>${ SiteConf.SiteTitle }</title>
    <link rel="alternate" hreflang="es" href="https://pablomagaz.com" />
    <meta name="HandheldFriendly" content="True" />
    <meta name="referrer" content="no-referrer-when-downgrade" />
    <meta name="description" content="${ SiteConf.SiteDescription }" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content="${ SiteConf.KeyWords }"> 
    <link rel="canonical" href="${ SiteConf.SiteUrl }" />
    
    ${ params.style }
    <link rel="manifest" href="${ SiteConf.SiteUrl }/manifest.json" />
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
    <meta property="og:title" content="${ SiteConf.SiteTitle }" />
    <meta property="og:site_name" content="${ SiteConf.SiteTitle }" />
    <meta property="og:image" content="${ SiteConf.ServerUrl }/${ SiteConf.brandTitleImage }" />
    <meta property="og:url" content="${ SiteConf.SiteUrl }" />
    <meta property="og:description" content="${ SiteConf.SiteDescription }" />
    
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${ SiteConf.SiteTitle }" />
    <meta name="twitter:url" content="${ SiteConf.SiteUrl }" />
    <meta name="twitter:description" content="${ SiteConf.SiteDescription }" />
    <meta name="google-site-verification" content="WPquQ1N8IxHd4sXYLzqumAtex4IlcULtupjrsaCZT7s" />
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Website",
        "publisher": {
            "@type": "Organization",
            "name": "${ SiteConf.Author } | ${ SiteConf.SiteDescription }",
            "logo": "${ SiteConf.ServerUrl }/${ SiteConf.brandTitleImage }"
        },
        "url": "${ SiteConf.SiteUrl }",
        "image": "${ SiteConf.ServerUrl }/${ SiteConf.brandTitleImage }",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${ SiteConf.SiteUrl }"
        },
        "description": "${ SiteConf.SiteDescription }"
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
  `
}
