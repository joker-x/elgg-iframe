<?php

function iframe_init() {
	elgg_extend_view('metatags','elgg-iframe/metatags');
}

register_elgg_event_handler('init', 'system', 'iframe_init');

