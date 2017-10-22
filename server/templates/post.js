import { SiteConf } from 'base';

export default function post(params) {
  
  const post = params.state.Post;
  const state = JSON.stringify(params.state);
  //const imageUrl = `${ SiteConf.ImageUrl }${ post.feature_image }`; 
  const postUrl = `${ SiteConf.BlogUrl }/${ post.slug }`;
  const tagList = post.tags.reduce((acc, tag) => (
    acc + `    <meta property="article:tag" content="${ tag.name }" />\n`)
    , '\n');

  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>${ post.title }</title>
    <meta name="HandheldFriendly" content="True" />
    <meta name="referrer" content="no-referrer-when-downgrade" />
    <meta name="description" content="${ SiteConf.SiteDescription }" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500" rel="stylesheet"> 
    ${ params.style }
    <link rel="icon" href="${ SiteConf.SiteUrl }/assets/images/favicon.ico"/>
    <link rel="canonical" href="${ postUrl }" />
    
    <meta property="og:locale" content="es_ES" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${ post.title }" />
    <meta property="og:site_name" content="${ SiteConf.BlogTitle }" />
    <meta property="og:url" content="${ postUrl }" />
    <meta property="og:image" content="${ SiteConf.ServerUrl }/${ SiteConf.blogTitleImage }" />
    <meta property="og:description" content="${ post.meta_description }" />
    <meta property="article:modified_time" content="${ post.updated_at }" /> 
    <meta property="article:published_time" content="${ post.published_at }" />
    ${ tagList }
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${ post.title }" />
    <meta name="twitter:url" content="${ postUrl }" />
    <meta name="twitter:label1" content="Written by" />
    <meta name="twitter:data1" content="${ SiteConf.Author }" />
    <meta name="twitter:creator" content="${ SiteConf.Author }" />

    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "publisher": {
            "@type": "Organization",
            "name": "${ SiteConf.SiteDescription }",
            "logo": "${ SiteConf.ServerUrl }/assets/images/BlogTitle.png"
        },
        "author": {
            "@type": "Person",
            "name": "${ SiteConf.Author }",
            "image": "${ SiteConf.ServerUrl }/assets/images/BlogTitle.png",
            "url": "${ SiteConf.SiteUrl }/#about"
            "sameAs": [
                "${ SiteConf.SiteUrl }",
                "https://twitter.com/pablo_magaz"
            ]
        },
        "headline": "${ post.title }",
        "url": "${ postUrl }",
        "datePublished": "${ post.published_at }",
        "dateModified": "${ post.updated_at }",
        "image": "${ SiteConf.ServerUrl }${ SiteConf.blogTitleImage }",
        "keywords": "${ post.tags[0].name}",
        "description": "${ post.meta_description }",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${ SiteConf.SiteUrl }"
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