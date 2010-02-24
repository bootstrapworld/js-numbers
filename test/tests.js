// See http://jania.pe.kr/aw/moin.cgi/JSSpec/Manual for definition
// of test case API.


var N = plt.lib.Numbers;
var Rational = N.Rational;
var FloatPoint = N.FloatPoint;
var Complex = N.Complex;


describe('Constructions', {
    'rational construction' : function() { 
	value_of(N.isSchemeNumber(N.Rational.makeInstance(42)))
	    .should_be_true(); 

	value_of(N.isSchemeNumber(N.Rational.makeInstance(21, 2)))
	    .should_be_true(); 

	value_of(N.isSchemeNumber(N.Rational.makeInstance(2, 1)))
	    .should_be_true(); 


	value_of(N.isSchemeNumber(N.Rational.makeInstance(-17, -171)))
	    .should_be_true(); 

	value_of(N.isSchemeNumber(N.Rational.makeInstance(17, -171)))
	    .should_be_true(); 
    }
})



// describe('Foo (base)', {
// 	'before': function() {
// 		target = {sayFoo: function() {return "foo";}};
// 	},
// 	'should say "foo"': function() {
// 		value_of(target.sayFoo()).should_be("foo");
// 	}
// })

// describe('Boo (derived)', {
// 	'before': function() {
// 		target = {
// 			sayFoo: function() {return "foo";},
// 			sayBar: function() {return "bar";}
// 		};
// 	},
// 	'should also say "bar"': function() {
// 		value_of(target.sayBar()).should_be("bar");
// 	}
// }, 'Foo (base)')

// describe('Plus operator (just for example)', {
// 	'should concatenate two strings': function() {
// 		value_of("Hello " + "World").should_be("Hello World");
// 	},
// 	'should add two numbers': function() {
// 		value_of(1 + 2).should_be(3);
// 	}
// })

// describe('"Should match"s', {
// 	'Should match': function() {
// 		value_of("Hello").should_match(/ell/);
// 	},
// 	'Should match 1': function() {
// 		value_of("Hello").should_match(/x/);
// 	},
// 	'Should match 2': function() {
// 		value_of([1,2,3]).should_match(/x/);
// 	},
// 	'Should not match 1': function() {
// 		value_of("Hello").should_not_match(/ell/);
// 	},
// 	'Should not match 2': function() {
// 		value_of([1,2,3]).should_not_match(/x/);
// 	}
// })
// describe('"Should include"s', {
// 	'Should include': function() {
// 		value_of([1,2,3]).should_include(4);
// 	},
// 	'Should not include': function() {
// 		value_of([1,2,3]).should_not_include(2);
// 	},
// 	'Should include / Non-array object': function() {
// 		value_of(new Date()).should_include(4);
// 	},
// 	'Should not include / Non-array object': function() {
// 		value_of(new Date()).should_not_include('getMonth');
// 	},
// 	'Should include 2': function() {
// 		value_of({a:1, b:2}).should_not_include('a');
// 	}
// })

// describe('"Should have"s', {
// 	'String length': function() {
// 		value_of("Hello").should_have(4, "characters");
// 	},
// 	'Array length': function() {
// 		value_of([1,2,3]).should_have(4, "items");
// 	},
// 	'Object\'s item length': function() {
// 		value_of({name:'Alan Kang', email:'jania902@gmail.com', accounts:['A', 'B']}).should_have(3, "accounts");
// 	},
// 	'No match': function() {
// 		value_of("This is a string").should_have(5, "players");
// 	},
// 	'Exactly': function() {
// 		value_of([1,2,3]).should_have_exactly(2, "items");
// 	},
// 	'At least': function() {
// 		value_of([1,2,3]).should_have_at_least(4, "items");
// 	},
// 	'At most': function() {
// 		value_of([1,2,3]).should_have_at_most(2, "items");
// 	},
// 	'Member': function() {
// 		value_of({x: 0}).should_have_member('x'); // true
// 		value_of({x: 0}).should_have_member('y'); // false
// 	}
// })
// describe('"Should be empty"s', {
// 	'String': function() {
// 		value_of("Hello").should_be_empty();
// 	},
// 	'Array': function() {
// 		value_of([1,2,3]).should_be_empty();
// 	},
// 	'Object\'s item': function() {
// 		value_of({name:'Alan Kang', email:'jania902@gmail.com', accounts:['A', 'B']}).should_have(0, "accounts");
// 	}
// })

// describe('Failure messages', {
// 	'Should be (String)': function() {
// 		value_of("Hello World").should_be("Good-bye world");
// 	},
// 	'Should have (Object\s item)': function() {
// 		value_of({name:'Alan Kang', email:'jania902@gmail.com', accounts:['A', 'B']}).should_have(3, "accounts");
// 	},
// 	'Should have at least': function() {
// 		value_of([1,2,3]).should_have_at_least(4, "items");
// 	},
// 	'Should include': function() {
// 		value_of([1,2,3]).should_include(4);
// 	},
// 	'Should match': function() {
// 		value_of("Hello").should_match(/bye/);
// 	}
// })

// describe('"Should be"s', {
// 	'String mismatch': function() {
// 		value_of("Hello world").should_be("Good-bye world");
// 	},
// 	'Array item mismatch': function() {
// 		value_of(['ab','cd','ef']).should_be(['ab','bd','ef']);
// 	},
// 	'Array length mismatch': function() {
// 		value_of(['a',2,'4',5]).should_be([1,2,[4,5,6],6,7]);
// 	},
// 	'Undefined value': function() {
// 		value_of("Test").should_be(undefined);
// 	},
// 	'Null value': function() {
// 		value_of(null).should_be("Test");
// 	},
// 	'Boolean value 1': function() {
// 		value_of(true).should_be(false);
// 	},
// 	'Boolean value 2': function() {
// 		value_of(false).should_be_true();
// 	},
// 	'Boolean value 3': function() {
// 		value_of(true).should_be_false();
// 	},
// 	'Number mismatch': function() {
// 		value_of(1+2).should_be(4);
// 	},
// 	'Date mismatch': function() {
// 		value_of(new Date(1979, 3, 27)).should_be(new Date(1976, 7, 23));
// 	},
// 	'Object mismatch 1': function() {
// 		var actual = {a:1, b:2};
// 		var expected = {a:1, b:2, d:3};
		
// 		value_of(actual).should_be(expected);
// 	},
// 	'Object mismatch 2': function() {
// 		var actual = {a:1, b:2, c:3, d:4};
// 		var expected = {a:1, b:2, c:3};
		
// 		value_of(actual).should_be(expected);
// 	},
// 	'Object mismatch 3': function() {
// 		var actual = {a:1, b:4, c:3};
// 		var expected = {a:1, b:2, c:3};
		
// 		value_of(actual).should_be(expected);
// 	},
// 	'null should be null': function() {
// 		value_of(null).should_be(null);
// 	},
// 	'null should not be undefined': function() {
// 		value_of(null).should_be(undefined);
// 	},
// 	'null should not be null': function() {
// 		value_of(null).should_not_be(null);
// 	},
// 	'empty array 1': function() {
// 		value_of([]).should_be_empty();
// 		value_of([1]).should_be_empty();
// 	},
// 	'empty array 2': function() {
// 		value_of([1]).should_not_be_empty();
// 		value_of([]).should_not_be_empty();
// 	}
// })

// describe('Equality operator', {
// 	'should work for different Date instances which have same value': function() {
// 		var date1 = new Date(1979, 03, 27);
// 		var date2 = new Date(1979, 03, 27);
// 		value_of(date1).should_be(date2);
// 	}
// })
