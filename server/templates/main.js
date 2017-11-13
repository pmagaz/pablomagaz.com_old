import { SiteConf } from 'base';

export default function main(params) {
  
  const state = JSON.stringify(params.state);
  
  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>${ SiteConf.SiteTitle }</title>
    <meta name="theme-color" content="#f72354">
    <meta name="HandheldFriendly" content="True" />
    <meta name="referrer" content="no-referrer-when-downgrade" />
    <meta name="description" content="${ SiteConf.SiteDescription }" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content="${ SiteConf.KeyWords }"> 
    
    ${ params.style }
    <link rel="icon" href="${ SiteConf.SiteUrl }/assets/images/favicon.ico"/>
    <link rel="canonical" href="${ SiteConf.SiteUrl }" />
    
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
    </body>
  </html>
  `;
}
