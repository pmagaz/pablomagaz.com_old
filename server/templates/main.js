
export default function main(params) {

  const description = 'JavaScript, Webpack';
  const state = JSON.stringify( params.state );
  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Pablo Magaz</title>
    <meta name="description" content="${ description }" />
    <meta name="HandheldFriendly" content="True" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="canonical" href="http://pablomagaz.com/" />
    <meta property="og:site_name" content="Pablo Magaz Blog" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Pablo Magaz Blog" />
    <meta property="og:description" content="${ description }" />
    <meta property="og:url" content="http://pablomagaz.com/" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Pablo Magaz Blog" />
    <meta name="twitter:description" content="${ description }" />
    <meta name="twitter:url" content="http://pablomagaz.com/" />
    <meta name="referrer" content="no-referrer-when-downgrade" />
    <link rel="icon" href="assets/images/favicon.ico"/>
    ${ params.vendorScript }
    ${ params.style }
    </head>
    <body>
    <div id="root">${ params.container }</div>
    <script>window.$REACTBASE_STATE = ${ JSON.stringify(params.state) }</script>
      ${ params.appScript }
    </body>
  </html>
  `;
}
