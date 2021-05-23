<?php

// if using with Heroku ClearDB add-on

if ($_SERVER['REMOTE_ADDR'] !== '192.168.33.1') {
    $url = parse_url(getenv("CLEARDB_DATABASE_URL"));
    $host = $url["host"];
    $path = substr($url["path"], 1);
    $user = $url["user"];
    $pass = $url["pass"];
    $site_url = 'https://stocktown.jp/';
} else {
    $host = 'localhost';
    $path = 'flarum';
    $user = 'root';
    $pass = 'q1w2e3r4';
    $site_url = 'http://192.168.33.10';
}

return array (
    'debug' => false,
    'poweredByHeader' => true,
    'database' =>
        array (
            'driver' => 'mysql',
            'host' => $host,
            'port' => 3306,
            'database' => $path,
            'username' => $user,
            'password' => $pass,
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix' => NULL,
            'strict' => false,
            'engine' => 'InnoDB',
            'prefix_indexes' => true,
        ),
    'url' => $site_url,
    'paths' =>
        array (
            'api' => 'api',
            'admin' => 'admin',
        ),
);

