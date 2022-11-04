// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-entropy@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-kurtosis@v0.0.8-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-mean@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-median@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-mode@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-skewness@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-stdev@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-variance@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-cdf@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-logcdf@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-logpdf@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-pdf@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-quantile@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function v(){var t,e;if(!(this instanceof v))return 0===arguments.length?new v:new v(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!i(t=arguments[0])||n(t))throw new TypeError(g("invalid argument. Minimum support must be a number. Value: `%s`.",t));if(!i(e)||n(e))throw new TypeError(g("invalid argument. Maximum support must be a number. Value: `%s`.",e));if(t>=e)throw new RangeError(g("invalid arguments. Minimum support must be less than maximum support. Value: `(%f, %f)`.",t,e))}else t=0,e=1;return s(this,"a",{configurable:!1,enumerable:!0,get:function(){return t},set:function(s){if(!i(s)||n(s))throw new TypeError(g("invalid assignment. Must be a number. Value: `%s`.",s));if(s>=e)throw new RangeError(g("invalid assignment. Must be less than %f. Value: `%f`.",e,s));t=s}}),s(this,"b",{configurable:!1,enumerable:!0,get:function(){return e},set:function(s){if(!i(s)||n(s))throw new TypeError(g("invalid assignment. Must be a number. Value: `%s`.",s));if(s<=t)throw new RangeError(g("invalid assignment. Must be greater than %f. Value: `%f`.",t,s));e=s}}),this}e(v.prototype,"entropy",(function(){return r(this.a,this.b)})),e(v.prototype,"kurtosis",(function(){return o(this.a,this.b)})),e(v.prototype,"mean",(function(){return d(this.a,this.b)})),e(v.prototype,"median",(function(){return a(this.a,this.b)})),e(v.prototype,"mode",(function(){return m(this.a,this.b)})),e(v.prototype,"skewness",(function(){return p(this.a,this.b)})),e(v.prototype,"stdev",(function(){return h(this.a,this.b)})),e(v.prototype,"variance",(function(){return u(this.a,this.b)})),t(v.prototype,"cdf",(function(s){return l(s,this.a,this.b)})),t(v.prototype,"logcdf",(function(s){return f(s,this.a,this.b)})),t(v.prototype,"logpdf",(function(s){return b(s,this.a,this.b)})),t(v.prototype,"pdf",(function(s){return c(s,this.a,this.b)})),t(v.prototype,"quantile",(function(s){return j(s,this.a,this.b)}));export{v as default};
//# sourceMappingURL=index.mjs.map
