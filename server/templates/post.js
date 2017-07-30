export default function post(params) {

  const post = params.state.Post;
  const url = 'http://www.pablomagaz.com';
  const postUrl = `${ url }/blog/${ post.slug }`;
  const imageUrl = `${ url }/${ post.image }`;

  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>${ post.title }</title>
    <meta property="og:site_name" content="Pablo Magaz Blog" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${ post.title }" />
    <meta property="og:description" content="${ post.meta_description }" />
    <meta property="og:url" content="${ postUrl }" />
    <meta property="og:image" content="${ imageUrl }" />
    <meta property="article:published_time" content="${ post.created_at }" />
    <meta property="article:modified_time" content="${ post.updated_at }" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${ post.title }" />
    <meta name="twitter:description" content="${ post.meta_description }" />
    <meta name="twitter:url" content="${ postUrl }" />
    <meta name="twitter:image" content="${ imageUrl }" />
    <meta name="twitter:label1" content="Written by" />
    <meta name="twitter:data1" content="Pablo Magaz" />
    <link rel="icon" href="assets/images/favicon.ico"/>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/monokai.min.css">

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
