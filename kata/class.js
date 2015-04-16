var Class={
	new:function(options){
		var klass = function(){
			if(typeof this.initialize === 'function')
				this.initialize.apply(this, arguments);
		};

		for(var attr in options){
			klass[attr] = options[attr];
		}
	}
}