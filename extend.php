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
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3518678681279293"
     crossorigin="anonymous"></script>
<meta name="google-site-verification" content="k5wKwgbijqTSvyCmvRt_VhtBaGcF9DYuhZcAz5F1-DI" />
<script type="text/javascript">
    window._mNHandle = window._mNHandle || {};
    window._mNHandle.queue = window._mNHandle.queue || [];
    medianet_versionId = "3121199";
</script>
<script src="https://contextual.media.net/dmedianet.js?cid=8CULH3OQH" async="async"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-0MBHKP37RC"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag(\'js\', new Date());
  gtag(\'config\', \'G-0MBHKP37RC\');
  
</script>  
<link id="fav" rel="shortcut icon" href="stocktown.ico">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<script src="/js/main.js?21220727"></script>        
<script src="https://smtpjs.com/v3/smtp.js"></script>
<link rel="stylesheet" href="/css/main.css?21220727">
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
';
        })
];
