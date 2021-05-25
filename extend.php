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
            ';
        })
];
