/**
 * JQuery-onChanged
 * Project page - http://yes2.me/onchanged-project
 * Copyright (c) 2012 Yes2Me, http://yes2.me
 * Licensed under the MIT license (http://en.wikipedia.org/wiki/MIT_License)
 * Version 0.2 (4.3.2012)
 */

(function($) {
	var prevtext = "";
	function onChangedstart(obj, callback) {
		if (obj.val() == null || obj.val() == "") {
			return;
		} 
		if (prevtext != obj.val()) {
			prevtext = obj.val();
			if (callback != undefined)
				callback();
		}
	} 

	$.fn.extend({
		onChanged: function(callback) {
			var id;
			$this = $(this);

			$this.focus(function() {
				id = window.setInterval(function(){
					onChangedstart($this, callback);
				}, 300);
			});

			$this.blur(function() {
				onChangedstart($this);
				window.clearInterval(id);
				prevtext = "";
			});
		}
	});
})(jQuery);