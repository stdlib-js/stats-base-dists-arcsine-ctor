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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var defineProperty = require( '@stdlib/utils-define-property' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var entropy = require( '@stdlib/stats-base-dists-arcsine-entropy' );
var kurtosis = require( '@stdlib/stats-base-dists-arcsine-kurtosis' );
var mean = require( '@stdlib/stats-base-dists-arcsine-mean' );
var median = require( '@stdlib/stats-base-dists-arcsine-median' );
var mode = require( '@stdlib/stats-base-dists-arcsine-mode' );
var skewness = require( '@stdlib/stats-base-dists-arcsine-skewness' );
var stdev = require( '@stdlib/stats-base-dists-arcsine-stdev' );
var variance = require( '@stdlib/stats-base-dists-arcsine-variance' );
var cdf = require( '@stdlib/stats-base-dists-arcsine-cdf' );
var logcdf = require( '@stdlib/stats-base-dists-arcsine-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-arcsine-logpdf' );
var pdf = require( '@stdlib/stats-base-dists-arcsine-pdf' );
var quantile = require( '@stdlib/stats-base-dists-arcsine-quantile' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {Probability} evaluated CDF
*/
function arcsineCDF( x ) {
	return cdf( x, this.a, this.b );
}

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logCDF
*/
function arcsineLogCDF( x ) {
	return logcdf( x, this.a, this.b );
}

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function arcsineLogPDF( x ) {
	return logpdf( x, this.a, this.b );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function arcsinePDF( x ) {
	return pdf( x, this.a, this.b );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function arcsineQuantile( p ) {
	return quantile( p, this.a, this.b );
}


// MAIN //

/**
* Arcsine distribution constructor.
*
* @constructor
* @param {number} [a=0.0] - minimum support
* @param {number} [b=1.0] - maximum support
* @throws {TypeError} `a` must be a number
* @throws {TypeError} `b` must be a number
* @throws {RangeError} `a` must be less than `b`
* @returns {Arcsine} distribution instance
*
* @example
* var arcsine = new Arcsine( 0.0, 1.0 );
*
* var y = arcsine.cdf( 0.8 );
* // returns ~0.705
*
* var mu = arcsine.mean;
* // returns 0.5
*/
function Arcsine() {
	var a;
	var b;
	if ( !(this instanceof Arcsine) ) {
		if ( arguments.length === 0 ) {
			return new Arcsine();
		}
		return new Arcsine( arguments[ 0 ], arguments[ 1 ] );
	}
	if ( arguments.length ) {
		a = arguments[ 0 ];
		b = arguments[ 1 ];
		if ( !isNumber( a ) || isnan( a ) ) {
			throw new TypeError( format( 'invalid argument. Minimum support must be a number. Value: `%s`.', a ) );
		}
		if ( !isNumber( b ) || isnan( b ) ) {
			throw new TypeError( format( 'invalid argument. Maximum support must be a number. Value: `%s`.', b ) );
		}
		if ( a >= b ) {
			throw new RangeError( format( 'invalid arguments. Minimum support must be less than maximum support. Value: `(%f, %f)`.', a, b ) );
		}
	} else {
		a = 0.0;
		b = 1.0;
	}
	defineProperty( this, 'a', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return a;
		},
		'set': function set( value ) {
			if ( !isNumber( value ) || isnan( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a number. Value: `%s`.', value ) );
			}
			if ( value >= b ) {
				throw new RangeError( format( 'invalid assignment. Must be less than %f. Value: `%f`.', b, value ) );
			}
			a = value;
		}
	});
	defineProperty( this, 'b', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return b;
		},
		'set': function set( value ) {
			if ( !isNumber( value ) || isnan( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a number. Value: `%s`.', value ) );
			}
			if ( value <= a ) {
				throw new RangeError( format( 'invalid assignment. Must be greater than %f. Value: `%f`.', a, value ) );
			}
			b = value;
		}
	});
	return this;
}

/**
* Arcsine distribution differential entropy.
*
* @name entropy
* @memberof Arcsine.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var arcsine = new Arcsine( 4.0, 12.0 );
*
* var v = arcsine.entropy;
* // returns ~1.838
*/
setReadOnlyAccessor( Arcsine.prototype, 'entropy', function get() {
	return entropy( this.a, this.b );
});

/**
* Arcsine distribution excess kurtosis.
*
* @name kurtosis
* @memberof Arcsine.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var arcsine = new Arcsine( 4.0, 12.0 );
*
* var v = arcsine.kurtosis;
* // returns -1.5
*/
setReadOnlyAccessor( Arcsine.prototype, 'kurtosis', function get() {
	return kurtosis( this.a, this.b );
});

/**
* Arcsine distribution expected value.
*
* @name mean
* @memberof Arcsine.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var arcsine = new Arcsine( 4.0, 12.0 );
*
* var v = arcsine.mean;
* // returns 8.0
*/
setReadOnlyAccessor( Arcsine.prototype, 'mean', function get() {
	return mean( this.a, this.b );
});

/**
* Arcsine distribution median.
*
* @name median
* @memberof Arcsine.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var arcsine = new Arcsine( 4.0, 12.0 );
*
* var v = arcsine.median;
* // returns 8.0
*/
setReadOnlyAccessor( Arcsine.prototype, 'median', function get() {
	return median( this.a, this.b );
});

/**
* Arcsine distribution mode.
*
* @name mode
* @memberof Arcsine.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var arcsine = new Arcsine( 4.0, 12.0 );
*
* var v = arcsine.mode;
* // returns 4.0
*/
setReadOnlyAccessor( Arcsine.prototype, 'mode', function get() {
	return mode( this.a, this.b );
});

/**
* Arcsine distribution skewness.
*
* @name skewness
* @memberof Arcsine.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var arcsine = new Arcsine( 4.0, 12.0 );
*
* var v = arcsine.skewness;
* // returns 0.0
*/
setReadOnlyAccessor( Arcsine.prototype, 'skewness', function get() {
	return skewness( this.a, this.b );
});

/**
* Arcsine distribution standard deviation.
*
* @name stdev
* @memberof Arcsine.prototype
* @type {number}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var arcsine = new Arcsine( 4.0, 12.0 );
*
* var v = arcsine.stdev;
* // returns ~2.828
*/
setReadOnlyAccessor( Arcsine.prototype, 'stdev', function get() {
	return stdev( this.a, this.b );
});

/**
* Arcsine distribution variance.
*
* @name variance
* @memberof Arcsine.prototype
* @type {number}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var arcsine = new Arcsine( 4.0, 12.0 );
*
* var v = arcsine.variance;
* // returns 8.0
*/
setReadOnlyAccessor( Arcsine.prototype, 'variance', function get() {
	return variance( this.a, this.b );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Arcsine.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var arcsine = new Arcsine( 2.0, 4.0 );
*
* var v = arcsine.cdf( 3.0 );
* // returns ~0.5
*/
setReadOnly( Arcsine.prototype, 'cdf', arcsineCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @name logcdf
* @memberof Arcsine.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var arcsine = new Arcsine( 2.0, 4.0 );
*
* var v = arcsine.logcdf( 3.0 );
* // returns ~-0.693
*/
setReadOnly( Arcsine.prototype, 'logcdf', arcsineLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @name logpdf
* @memberof Arcsine.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var arcsine = new Arcsine( 2.0, 4.0 );
*
* var v = arcsine.logpdf( 2.5 );
* // returns ~-1.0
*/
setReadOnly( Arcsine.prototype, 'logpdf', arcsineLogPDF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Arcsine.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var arcsine = new Arcsine( 2.0, 4.0 );
*
* var v = arcsine.pdf( 2.4 );
* // returns ~0.398
*/
setReadOnly( Arcsine.prototype, 'pdf', arcsinePDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Arcsine.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var arcsine = new Arcsine( 2.0, 4.0 );
*
* var v = arcsine.quantile( 0.5 );
* // returns 3.0
*/
setReadOnly( Arcsine.prototype, 'quantile', arcsineQuantile );


// EXPORTS //

module.exports = Arcsine;
