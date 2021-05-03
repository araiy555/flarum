<?php
require "../../database.php";
require "function.php";

try {

    // DBへ接続
    $dbh = new PDO('mysql:host=' . $host . '; dbname=' . $path . '; charset=utf8;unix_socket=/tmp/mysql.sock', $user,
        $pass);

    $url = "https://newsapi.org/v2/top-headlines?country=jp&apiKey=d04fe253ccbc4b80b3de989cda8cf68b";
    $output = file_get_contents($url);
    $test = json_decode($output);
    $result = tablecheck($dbh, $test->articles[0]->title);

    if ($result[0] === '0') {
        $comment = '<IMG alt="' . $test->articles[0]->urlToImage . '" src="' . $test->articles[0]->urlToImage . '">'.'<br>';
        $discussion_insert_id = discussions($dbh, $test->articles[0]->title);
        $post_insert_id = post($dbh, $discussion_insert_id,
            $comment . $test->articles[0]->description . '<br><a href="' . $test->articles[0]->url . '">' . $test->articles[0]->url . '</a>');
        updateDiscusseion($dbh, $post_insert_id, $discussion_insert_id);
        updateUser($dbh);
        discussionTag($dbh, $discussion_insert_id);
    }

} catch (PDOException $e) {
    echo $e->getMessage();
    die();
}

// 接続を閉じる
$dbh = null;
