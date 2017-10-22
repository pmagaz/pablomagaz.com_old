import { SiteConf } from 'base';

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
    <meta name="description" content="${ SiteConf.BlogDescription }" />
    <meta name="referrer" content="no-referrer-when-downgrade" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500" rel="stylesheet"> 
    ${ params.style }
    <link rel="icon" href="${ SiteConf.SiteUrl }/assets/images/favicon.ico"/>
    <link rel="canonical" href="${ SiteConf.BlogUrl }" />
    
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