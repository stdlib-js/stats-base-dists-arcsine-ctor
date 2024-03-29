/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isFunction = require( '@stdlib/assert-is-function' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var quantile = require( '@stdlib/stats-base-dists-arcsine-quantile' );
var logcdf = require( '@stdlib/stats-base-dists-arcsine-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-arcsine-logpdf' );
var cdf = require( '@stdlib/stats-base-dists-arcsine-cdf' );
var pdf = require( '@stdlib/stats-base-dists-arcsine-pdf' );
var kurtosis = require( '@stdlib/stats-base-dists-arcsine-kurtosis' );
var skewness = require( '@stdlib/stats-base-dists-arcsine-skewness' );
var stdev = require( '@stdlib/stats-base-dists-arcsine-stdev' );
var variance = require( '@stdlib/stats-base-dists-arcsine-variance' );
var entropy = require( '@stdlib/stats-base-dists-arcsine-entropy' );
var median = require( '@stdlib/stats-base-dists-arcsine-median' );
var mode = require( '@stdlib/stats-base-dists-arcsine-mode' );
var mean = require( '@stdlib/stats-base-dists-arcsine-mean' );
var Arcsine = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Arcsine, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an `a` argument which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Arcsine( value, 2.0 );
		};
	}
});

tape( 'the function throws an error if provided a `b` argument which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Arcsine( 2.0, value );
		};
	}
});

tape( 'the function throws an error if provided `a` is greater than or equal to `b`', function test( t ) {
	var values;
	var i;

	values = [
		[ 1.0, 1.0 ],
		[ 2.0, 0.0 ],
		[ 0.0, -1.0 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Arcsine( value[ 0 ], value[ 1 ] );
		};
	}
});

tape( 'if provided arguments, the function requires both `a` and `b`', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-new
		new Arcsine( 2.0 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var arcsine = new Arcsine();
	t.strictEqual( arcsine instanceof Arcsine, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var arcsine = new Arcsine( 2.0, 4.0 );
	t.strictEqual( arcsine instanceof Arcsine, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var arcsine = Arcsine();
	t.strictEqual( arcsine instanceof Arcsine, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	arcsine = Arcsine( 2.0, 4.0 );
	t.strictEqual( arcsine instanceof Arcsine, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `a`', function test( t ) {
	var arcsine;

	arcsine = new Arcsine( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( arcsine, 'a' ), true, 'has property' );
	t.strictEqual( arcsine.a, 2.0, 'returns expected value' );

	arcsine.a = 3.0;
	t.strictEqual( arcsine.a, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `a` to a value which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var arcsine = new Arcsine();
			arcsine.a = value;
		};
	}
});

tape( 'the created distribution throws an error if one attempts to set `a` to a value which is greater than or equal to `b`', function test( t ) {
	var values;
	var i;

	values = [
		1.1,
		2.0,
		20.0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var arcsine = new Arcsine();
			arcsine.a = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `b`', function test( t ) {
	var arcsine;

	arcsine = new Arcsine( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( arcsine, 'b' ), true, 'has property' );
	t.strictEqual( arcsine.b, 4.0, 'returns expected value' );

	arcsine.b = 3.0;
	t.strictEqual( arcsine.b, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `b` to a value which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var arcsine = new Arcsine();
			arcsine.b = value;
		};
	}
});

tape( 'the created distribution throws an error if one attempts to set `b` to a value which is less than or equal to `a`', function test( t ) {
	var values;
	var i;

	values = [
		0.0,
		-1.0,
		-20.0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var arcsine = new Arcsine();
			arcsine.b = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var arcsine;

	t.strictEqual( hasOwnProp( Arcsine.prototype, 'entropy' ), true, 'has property' );

	arcsine = new Arcsine();
	t.strictEqual( arcsine.entropy, entropy( 0.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var arcsine;

	t.strictEqual( hasOwnProp( Arcsine.prototype, 'kurtosis' ), true, 'has property' );

	arcsine = new Arcsine( 2.0, 4.0 );
	t.strictEqual( arcsine.kurtosis, kurtosis( 2.0, 4.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var arcsine;

	t.strictEqual( hasOwnProp( Arcsine.prototype, 'mean' ), true, 'has property' );

	arcsine = new Arcsine();
	t.strictEqual( arcsine.mean, mean( 0.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var arcsine;

	t.strictEqual( hasOwnProp( Arcsine.prototype, 'median' ), true, 'has property' );

	arcsine = new Arcsine( 2.0, 5.0 );
	t.strictEqual( arcsine.median, median( 2.0, 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var arcsine;

	t.strictEqual( hasOwnProp( Arcsine.prototype, 'mode' ), true, 'has property' );

	arcsine = new Arcsine( 2.0, 3.0 );
	t.strictEqual( arcsine.mode, mode( 2.0, 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var arcsine;

	t.strictEqual( hasOwnProp( Arcsine.prototype, 'skewness' ), true, 'has property' );

	arcsine = new Arcsine( 0.5, 1.0 );
	t.strictEqual( arcsine.skewness, skewness( 0.5, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var arcsine;

	t.strictEqual( hasOwnProp( Arcsine.prototype, 'stdev' ), true, 'has property' );

	arcsine = new Arcsine( 3.0, 5.0 );
	t.strictEqual( arcsine.stdev, stdev( 3.0, 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var arcsine;

	t.strictEqual( hasOwnProp( Arcsine.prototype, 'variance' ), true, 'has property' );

	arcsine = new Arcsine( 3.0, 5.0 );
	t.strictEqual( arcsine.variance, variance( 3.0, 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var arcsine;
	var y;

	t.strictEqual( hasOwnProp( Arcsine.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Arcsine.prototype.cdf ), true, 'has method' );

	arcsine = new Arcsine();
	y = arcsine.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (CDF)', function test( t ) {
	var arcsine;
	var y;

	t.strictEqual( hasOwnProp( Arcsine.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( Arcsine.prototype.logcdf ), true, 'has method' );

	arcsine = new Arcsine();
	y = arcsine.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (logPDF)', function test( t ) {
	var arcsine;
	var y;

	t.strictEqual( hasOwnProp( Arcsine.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( Arcsine.prototype.logpdf ), true, 'has method' );

	arcsine = new Arcsine();
	y = arcsine.logpdf( 0.5 );

	t.strictEqual( y, logpdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var arcsine;
	var y;

	t.strictEqual( hasOwnProp( Arcsine.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( Arcsine.prototype.pdf ), true, 'has method' );

	arcsine = new Arcsine();
	y = arcsine.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var arcsine;
	var y;

	t.strictEqual( hasOwnProp( Arcsine.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Arcsine.prototype.quantile ), true, 'has method' );

	arcsine = new Arcsine();
	y = arcsine.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});
