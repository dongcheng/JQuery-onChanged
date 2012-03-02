/**
 * JQuery-onChanged
 * Project page - http://yes2.me/onchanged-project
 * Copyright (c) 2012 Yes2Me, http://yes2.me
 * Licensed under the MIT license (http://en.wikipedia.org/wiki/MIT_License)
 * Version 0.1 (3.3.2012)
 */

(function($) {
	function onChangedstart(obj, callback) {
		if (obj.val() == null || obj.val() == "") {
			return;
		} 
		if (obj.attr("prevtext") != obj.val()) {
			obj.attr("prevtext", obj.val());
			callback();
		}
	} 

	$.fn.extend({
		onChanged: function(callback) {
			$this = $(this);
			id = window.setInterval(function(){
				onChangedstart($this, callback);
			}, 300);
			$this.attr("onChangedId", id);
		},
		stopOnChanged: function() {
			window.clearInterval($(this).attr("onChangedId"));
			$(this).attr("prevtext", "");
		}
	});
})(jQuery);