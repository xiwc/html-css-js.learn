var emc = {} || emc;

emc.JQuery = function(elem) {
	this.elem = elem;
	this.hide = function() {
		console.log('hide ' + elem);
		this.elem.style.display = 'none';

		return this;
	};
	this.show = function() {
		console.log('show ' + elem);
		this.elem.style.display = 'block';

		return this;
	};
	this.getHeight = function() {
		var style = document.defaultView.getComputedStyle(this.elem);
		return style.height.replace('px', '');
	}
	this.setHeight = function(val) {
		this.elem.style.height = val + "px";
	}
	this.slideUp = function(time) {
		// get height
		var h = this.getHeight();
		var sp = h / time;
		for (var i = 0; i < time; i++) {
			(function(_this) {
				var j = i;
				setTimeout(function() {
					// set height
					_this.setHeight(h - sp * j);
					console.log(h - sp * j);
				}, i * 100);
			})(this);
		}
	}
}

var $ = function(id) {
	return new emc.JQuery(document.getElementById(id.substring(1)));
}

$('#myId').slideUp(200);

// $('#myId').getHeight();