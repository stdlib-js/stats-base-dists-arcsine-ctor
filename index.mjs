// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-entropy@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-kurtosis@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-mean@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-median@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-mode@v0.1.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-skewness@v0.1.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-stdev@v0.1.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-variance@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-cdf@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-logcdf@v0.1.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-logpdf@v0.1.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-pdf@v0.1.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-quantile@v0.1.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function g(){var s,e;if(!(this instanceof g))return 0===arguments.length?new g:new g(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!i(s=arguments[0])||n(s))throw new TypeError(v("invalid argument. Minimum support must be a number. Value: `%s`.",s));if(!i(e)||n(e))throw new TypeError(v("invalid argument. Maximum support must be a number. Value: `%s`.",e));if(s>=e)throw new RangeError(v("invalid arguments. Minimum support must be less than maximum support. Value: `(%f, %f)`.",s,e))}else s=0,e=1;return t(this,"a",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!i(t)||n(t))throw new TypeError(v("invalid assignment. Must be a number. Value: `%s`.",t));if(t>=e)throw new RangeError(v("invalid assignment. Must be less than %f. Value: `%f`.",e,t));s=t}}),t(this,"b",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!i(t)||n(t))throw new TypeError(v("invalid assignment. Must be a number. Value: `%s`.",t));if(t<=s)throw new RangeError(v("invalid assignment. Must be greater than %f. Value: `%f`.",s,t));e=t}}),this}e(g.prototype,"entropy",(function(){return r(this.a,this.b)})),e(g.prototype,"kurtosis",(function(){return o(this.a,this.b)})),e(g.prototype,"mean",(function(){return a(this.a,this.b)})),e(g.prototype,"median",(function(){return d(this.a,this.b)})),e(g.prototype,"mode",(function(){return m(this.a,this.b)})),e(g.prototype,"skewness",(function(){return p(this.a,this.b)})),e(g.prototype,"stdev",(function(){return h(this.a,this.b)})),e(g.prototype,"variance",(function(){return u(this.a,this.b)})),s(g.prototype,"cdf",(function(t){return l(t,this.a,this.b)})),s(g.prototype,"logcdf",(function(t){return f(t,this.a,this.b)})),s(g.prototype,"logpdf",(function(t){return b(t,this.a,this.b)})),s(g.prototype,"pdf",(function(t){return c(t,this.a,this.b)})),s(g.prototype,"quantile",(function(t){return j(t,this.a,this.b)}));export{g as default};
//# sourceMappingURL=index.mjs.map
