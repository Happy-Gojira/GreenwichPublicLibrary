<?php
/*
Plugin Name: Simple Example Plugin
Description: Start me up
Plugin URI: http://www.Jack.mulvey.scott.com
Author: Jack scott
Version: 1.0
License: GPLv2 or Later
License UEI: https://www.gnu.org/License/gpl-2.0.txt
*/


/*
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

Copyright 2005-2015 Automattic, Inc.
*/

function myplugin_action_hook_example(){
  wp_mail('email@example.com', 'Subject', 'Message...');
}
add_action('init', 'myplugin_action_hook_example');

function myplugin_filter_hook_example ( $content){
  $content = $content . '<p> Custom content..</p>';
  return $content;
}

add_filter('the_content', 'myplugin_filter_hook_example');
