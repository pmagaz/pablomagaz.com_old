import { SiteConf } from 'base';

export default function tag(params) {

  const state = JSON.stringify(params.state);
  const imageUrl = `${ SiteConf.ServerUrl }/assets/images/BlogTitle.png`; 
  const tags = params.routeMatch.substring(1).split('/');
  let tagUrl, tagName;
  if (tags.length > 0) {
    tagName = tags[1];
    tagUrl = `${ SiteConf.SiteUrl }/tag/${tagName}`;
  }
  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Tag:${tagName} | ${ SiteConf.BlogTitle }</title>
    <meta name="theme-color" content="#f72354">
    <meta name="HandheldFriendly" content="True" />
    <meta name="description" content="${ SiteConf.BlogDescription } | Tag: ${ tagName }" />
    <meta name="referrer" content="no-referrer-when-downgrade" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content="${ SiteConf.KeyWords }"> 
     
    ${ params.style }
    <link rel="icon" href="${ SiteConf.SiteUrl }/assets/images/favicon.ico"/>
    <link rel="canonical" href="${ tagUrl }" />
    <meta property="article:tag" content="${ tagName }" />
    <meta property="og:locale" content="es_ES" /> 
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Tag:${tagName} | ${ SiteConf.BlogTitle }" />
    <meta property="og:site_name" content="${ SiteConf.BlogTitle }" />
    <meta property="og:url" content="${ tagUrl }" />
    <meta property="og:description" content="${ SiteConf.BlogDescription } | Tag: ${ tagName } " />
    <meta property="og:image" content="${ imageUrl }" />
    
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Tag:${tagName} | ${ SiteConf.BlogTitle }" />
    <meta name="twitter:url" content="${ tagUrl }" />
    <meta name="twitter:description" content="${ SiteConf.BlogDescription } | Tag: ${ tagName }" />
    
    <meta name="google-site-verification" content="WPquQ1N8IxHd4sXYLzqumAtex4IlcULtupjrsaCZT7s" />
    
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "Series",
            "publisher": {
              "@type": "Organization",
              "name": "${ SiteConf.BlogDescription } | Tag: ${ tagName }",
              "logo": "${ SiteConf.ServerUrl }/${ SiteConf.blogTitleImage }"
            },
            "url": "${ SiteConf.SiteUrl }/tag/${ tagName }",
            "name": "${ tagName }",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${ SiteConf.BlogUrl } "
            }
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