var expect = require('chai').expect;
var greet = require('./greet.js');

describe('greet', function(){
	it('should return a greeting', function(done){
		//execute function greet in greet.js
		expect(greet.greet('Brian')).to.eql('hello Brian');
		done();
	});
});
