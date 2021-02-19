<?php

function my_post_title_updater( $post_id ) {
  $my_post = array();
  $my_post['ID'] = $post_id;

  if ( get_post_type() == 'homepageitem' ) {
    $my_post['post_title'] = get_field('homepage_element');
  }

  // Update the post into the database
  wp_update_post( $my_post );
}

add_action('acf/save_post', 'my_post_title_updater', 20);
