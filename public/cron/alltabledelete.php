<?php
require "../../database.php";
require "function.php";

try {

    // DBへ接続
    $dbh = new PDO('mysql:host=' . $host . '; dbname=' . $path . '; charset=utf8;unix_socket=/tmp/mysql.sock', $user, $pass);
    discuussionTableDalete($dbh);

} catch (PDOException $e) {
    echo $e->getMessage();
    die();
}

// 接続を閉じる
$dbh = null;
