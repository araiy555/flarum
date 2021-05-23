<?php

if ($_SERVER['REMOTE_ADDR'] !== '192.168.33.1') {
    $url = parse_url(getenv("CLEARDB_DATABASE_URL"));
    $host = $url["host"];
    $path = substr($url["path"], 1);
    $user = $url["user"];
    $pass = $url["pass"];
    $site_url = 'https://stocktown.jp/';
} else {
    $host = '127.0.0.1';
    $path = 'flarum';
    $user = 'root';
    $pass = 'q1w2e3r4';
    $site_url = 'http://192.168.33.10';
}

