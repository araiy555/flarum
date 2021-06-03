<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

use Flarum\Extend;
use Flarum\Frontend\Document;

return [
    (new Extend\Frontend('forum'))
        ->content(function (Document $document) {
            $document->head[] = '
<link rel="shortcut icon" href="20e1d7d8e2c02f950d6e69db40054539_xxo.ico">
<meta name="google-site-verification" content="k5wKwgbijqTSvyCmvRt_VhtBaGcF9DYuhZcAz5F1-DI" />
<script async src="https://www.googletagmanager.com/gtag/js?id=G-0MBHKP37RC"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag(\'js\', new Date());
  gtag(\'config\', \'G-0MBHKP37RC\');
</script>    
      
<script data-ad-client="ca-pub-3518678681279293" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>           
         <style defer> 
     @media screen and (min-width: 960px) {
  h1.Header-title a {
 
   height: 10rem;
            text-indent: -1000000px;
            overflow: hidden;
            display: block;
            width: 210px;
            height:100%;
            background: url(\'/title.png\') no-repeat;
}
}
@media screen and (max-width: 480px) {
    h1.Header-title a {
    text-align: center;
            text-indent: -1000000px;
            overflow: hidden;
            display: block;
              width: 200px;
            height:40px;
            background: url(\'/title.png\') no-repeat;
}
}
         
         
 
         
         </style>  
';
        })
];
