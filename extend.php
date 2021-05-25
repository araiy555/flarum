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
<meta name="google-site-verification" content="k5wKwgbijqTSvyCmvRt_VhtBaGcF9DYuhZcAz5F1-DI" />
<script async src="https://www.googletagmanager.com/gtag/js?id=G-0MBHKP37RC"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag(\'js\', new Date());
  gtag(\'config\', \'G-0MBHKP37RC\');
</script>
            ';
        })
];
