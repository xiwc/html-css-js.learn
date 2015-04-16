var assert = require('assert');
var should = require('should');

var Class = {
	new:function(options){
		var klass = function(){};

		for(var attr in options){
			klass[attr] = options[attr];
		}

		return klass;
	}
};

describe('Custom lib', function(){

	it('Must have class', function(){

		var Person = Class.new({
			sayHello:function(){
				console.log('Person.sayHello');
			}
		});

		var jobs = new Person();
		jobs.should.be.ok;
		Person.should.have.property('sayHello');
	});
});

// npm install -g mocha
// npm install should
// mocha -R spec tdd.js