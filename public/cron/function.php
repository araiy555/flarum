<?php
function tablecheck($dbh, $title)
{

    $sql = "SELECT count(1) FROM discussions WHERE title = '$title'";

    $result = $dbh->query($sql);

    $aryItem = $result->fetch();
return $aryItem;
}
function discussions($dbh, $title) {
    $sql = "INSERT INTO discussions (
		title, 
		comment_count, 
		participant_count,
		post_number_index,
		created_at,
		user_id,
		first_post_id,
		last_posted_at,
		last_posted_user_id,
		last_post_id,
		last_post_number,
		hidden_at,
		hidden_user_id,
		slug,
		is_private,
		is_approved,
		is_locked,
		is_sticky
	) VALUES (
		'$title', 
		1, 
		1,
		1,
		current_timestamp,
		4,
		4,
		current_timestamp,
		4,
		4,
		1,
		null,
		null,
		'news',
		0,
		1,
		0,
		0
	)
	";

    $dbh->query($sql);
    return $dbh->lastInsertId();

}

function post($dbh, $discussion_insert_id, $comment) {
    $sql = "INSERT INTO posts (
	   discussion_id,
	  number,
	  created_at,
	  user_id,
	  type,
	  content ,
	  edited_at ,
	  edited_user_id ,
	  hidden_at,
	  hidden_user_id ,
	  ip_address,
	  is_private,
	  is_approved
	) VALUES (
		$discussion_insert_id, 
		1, 
		current_timestamp,
		4,
		'comment',
		'<t><p>$comment</p></t>',
		null,
		null,
	    null,
		null,
		'192.168.33.10',
		0,
		1
	)";

    $dbh->query($sql);
    return  $dbh->lastInsertId();
}


function updateDiscusseion($dbh, $post_insert_id, $discussion_insert_id) {
 $sql = "UPDATE discussions
SET first_post_id = $post_insert_id, last_post_id = $post_insert_id
WHERE id = $discussion_insert_id";

    $dbh->query($sql);
}

function updateUser($dbh) {
    $sql = "
UPDATE users
SET   discussion_count = discussion_count + 1,
      comment_count = comment_count + 1
WHERE  id = 4;
    ";
    $dbh->query($sql);
}


function discussionTag($dbh, $discussion_insert_id) {
    $sql = "INSERT INTO discussion_tag (
	   discussion_id,
	  tag_id
	) VALUES (
		$discussion_insert_id, 
		4
	)";
    $dbh->query($sql);
}


