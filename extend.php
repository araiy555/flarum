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
<link rel="shortcut icon" href="favicon.ico">
<meta name="google-site-verification" content="k5wKwgbijqTSvyCmvRt_VhtBaGcF9DYuhZcAz5F1-DI" />
<script async src="https://www.googletagmanager.com/gtag/js?id=G-0MBHKP37RC"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag(\'js\', new Date());
  gtag(\'config\', \'G-0MBHKP37RC\');
  
</script>  

<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<script data-ad-client="ca-pub-3518678681279293" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>           
<script src="/js/main.js"></script>           
<link rel="stylesheet" href="/css/main.css">
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
';
        })
];
