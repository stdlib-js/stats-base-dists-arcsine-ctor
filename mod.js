// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,a=t-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,v=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,g=/\.0$/,d=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,w,"$1e"),e=p.call(e,d,"e"),e=p.call(e,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,v,"e-0$1"),r.alternate&&(e=p.call(e,h,"$1."),e=p.call(e,y,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function N(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}var m=String.fromCharCode,A=Array.isArray;function E(r){return r!=r}function _(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function U(r){var t,n,e,a,o,f,c,s,p,l,v,h,y;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(e=r[s],"string"==typeof e)f+=e;else{if(t=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,E(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!E(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(o)?String(e.arg):m(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=b(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,v=e.width,h=e.padRight,y=void 0,(y=v-l.length)<0?l:l=h?l+N(y):N(y)+l)),f+=e.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function k(r){var t,n,e,i;for(n=[],i=0,e=S.exec(r);e;)(t=r.slice(i,S.lastIndex-e[0].length)).length&&n.push(t),n.push(I(e)),i=S.lastIndex,e=S.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function j(r){var t,n;if("string"!=typeof r)throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[k(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return U.apply(null,t)}var x=Object.prototype,F=x.toString,T=x.__defineGetter__,O=x.__defineSetter__,V=x.__lookupGetter__,R=x.__lookupSetter__;var $=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===F.call(n))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,t)||R.call(r,t)?(e=r.__proto__,r.__proto__=x,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,t,n.get),o&&O&&O.call(r,t,n.set),r};function G(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function C(r,t,n){$(r,t,{configurable:!1,enumerable:!1,get:n})}function H(r){return"number"==typeof r}var P="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return P&&"symbol"==typeof Symbol.toStringTag}var L=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;var Z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Z?Z.toStringTag:"";var X=W()?function(r){var t,n,e,i,a;if(null==r)return L.call(r);n=r[q],a=q,t=null!=(i=r)&&M.call(i,a);try{r[q]=void 0}catch(t){return L.call(r)}return e=L.call(r),t?r[q]=n:delete r[q],e}:function(r){return L.call(r)},Y=Number,z=Y.prototype.toString;var D=W();function B(r){return"object"==typeof r&&(r instanceof Y||(D?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function J(r){return H(r)||B(r)}function K(r){return r!=r}G(J,"isPrimitive",H),G(J,"isObject",B);var Q="function"==typeof Uint32Array;var rr="function"==typeof Uint32Array?Uint32Array:null;var tr,nr="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,t,n;if("function"!=typeof rr)return!1;try{t=new rr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Q&&n instanceof Uint32Array||"[object Uint32Array]"===X(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var er=tr,ir="function"==typeof Float64Array;var ar="function"==typeof Float64Array?Float64Array:null;var or,ur="function"==typeof Float64Array?Float64Array:void 0;or=function(){var r,t,n;if("function"!=typeof ar)return!1;try{t=new ar([1,3.14,-3.14,NaN]),n=t,r=(ir&&n instanceof Float64Array||"[object Float64Array]"===X(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr=or,cr="function"==typeof Uint8Array;var sr="function"==typeof Uint8Array?Uint8Array:null;var pr,lr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,t,n;if("function"!=typeof sr)return!1;try{t=new sr(t=[1,3.14,-3.14,256,257]),n=t,r=(cr&&n instanceof Uint8Array||"[object Uint8Array]"===X(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var vr=pr,hr="function"==typeof Uint16Array;var yr="function"==typeof Uint16Array?Uint16Array:null;var gr,dr="function"==typeof Uint16Array?Uint16Array:void 0;gr=function(){var r,t,n;if("function"!=typeof yr)return!1;try{t=new yr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(hr&&n instanceof Uint16Array||"[object Uint16Array]"===X(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var wr,br={uint16:gr,uint8:vr};(wr=new br.uint16(1))[0]=4660;var Nr=52===new br.uint8(wr.buffer)[0],mr=!0===Nr?1:0,Ar=new fr(1),Er=new er(Ar.buffer);function _r(r){return Ar[0]=r,Er[mr]}var Ur=!0===Nr?1:0,Sr=new fr(1),Ir=new er(Sr.buffer);function kr(r,t){return Sr[0]=r,Ir[Ur]=t>>>0,Sr[0]}var jr=1023,xr=Y.NEGATIVE_INFINITY;var Fr=.6931471803691238,Tr=1.9082149292705877e-10,Or=0x40000000000000,Vr=.3333333333333333,Rr=1048575,$r=2146435072,Gr=1048576,Cr=1072693248;function Hr(r){var t,n,e,i,a,o,u,f,c,s,p,l;return 0===r?xr:K(r)||r<0?NaN:(a=0,(n=_r(r))<Gr&&(a-=54,n=_r(r*=Or)),n>=$r?r+r:(a+=(n>>20)-jr|0,a+=(f=(n&=Rr)+614244&1048576|0)>>20|0,u=(r=kr(r,n|f^Cr))-1,(Rr&2+n)<3?0===u?0===a?0:a*Fr+a*Tr:(o=u*u*(.5-Vr*u),0===a?u-o:a*Fr-(o-a*Tr-u)):(f=n-398458|0,c=440401-n|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(t=.5*u*u,0===a?u-(t-s*(t+o)):a*Fr-(t-(s*(t+o)+a*Tr)-u)):0===a?u-s*(u-o):a*Fr-(s*(u-o)-a*Tr-u))))}var Pr=.7853981633974483,Wr=Hr(Pr);var Lr=Math.floor;function Mr(r){return Lr(r)===r}function Zr(r){return Mr(r/2)}function qr(r){return Zr(r>0?r-1:r+1)}var Xr=Number.POSITIVE_INFINITY;function Yr(r){return r===Xr||r===xr}var zr,Dr,Br=Math.sqrt;function Jr(r){return Math.abs(r)}!0===Nr?(zr=1,Dr=0):(zr=0,Dr=1);var Kr={HIGH:zr,LOW:Dr},Qr=new fr(1),rt=new er(Qr.buffer),tt=Kr.HIGH,nt=Kr.LOW;function et(r,t,n,e){return Qr[0]=r,t[e]=rt[tt],t[e+n]=rt[nt],t}function it(r){return et(r,[0,0],1,0)}G(it,"assign",et);var at=!0===Nr?0:1,ot=new fr(1),ut=new er(ot.buffer);function ft(r,t){return ot[0]=r,ut[at]=t>>>0,ot[0]}function ct(r){return 0|r}var st,pt,lt=2147483647,vt=2147483648;!0===Nr?(st=1,pt=0):(st=0,pt=1);var ht={HIGH:st,LOW:pt},yt=new fr(1),gt=new er(yt.buffer),dt=ht.HIGH,wt=ht.LOW;function bt(r,t){return gt[dt]=r,gt[wt]=t,yt[0]}var Nt=[0,0];function mt(r,t){var n,e;return it.assign(r,Nt,1,0),n=Nt[0],n&=lt,e=_r(t),bt(n|=e&=vt,Nt[1])}var At=1072693247,Et=1e300,_t=1e-300;var Ut=1048575,St=1048576,It=1072693248,kt=536870912,jt=524288,xt=20,Ft=9007199254740992,Tt=.9617966939259756,Ot=.9617967009544373,Vt=-7.028461650952758e-9,Rt=[1,1.5],$t=[0,.5849624872207642],Gt=[0,1.350039202129749e-8];var Ct=1.4426950408889634,Ht=1.4426950216293335,Pt=1.9259629911266175e-8;var Wt=1023,Lt=-1023,Mt=-1074,Zt=22250738585072014e-324,qt=4503599627370496;function Xt(r,t,n,e){return K(r)||Yr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&Jr(r)<Zt?(t[e]=r*qt,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}G((function(r){return Xt(r,[0,0],1,0)}),"assign",Xt);var Yt=2146435072;var zt=2220446049250313e-31,Dt=2148532223,Bt=[0,0],Jt=[0,0];function Kt(r,t){var n,e;return 0===t||0===r||K(r)||Yr(r)?r:(Xt(r,Bt,1,0),r=Bt[0],t+=Bt[1],t+=function(r){var t=_r(r);return(t=(t&Yt)>>>20)-jr|0}(r),t<Mt?mt(0,r):t>Wt?r<0?xr:Xr:(t<=Lt?(t+=52,e=zt):e=1,it.assign(r,Jt,1,0),n=Jt[0],n&=Dt,e*bt(n|=t+jr<<20,Jt[1])))}var Qt=.6931471805599453,rn=1048575;var tn=1048576,nn=1071644672,en=20,an=.6931471824645996,on=-1.904654299957768e-9;var un=1072693247,fn=1105199104,cn=1139802112,sn=1083179008,pn=1072693248,ln=1083231232,vn=3230714880,hn=31,yn=1e300,gn=1e-300,dn=8008566259537294e-32,wn=[0,0],bn=[0,0];function Nn(r,t){var n,e,i,a,o,u,f,c,s,p,l,v,h,y;if(K(r)||K(t))return NaN;if(it.assign(t,wn,1,0),o=wn[0],0===wn[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Br(r);if(-.5===t)return 1/Br(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Yr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Jr(r)<1==(t===Xr)?0:Xr}(r,t)}if(it.assign(r,wn,1,0),a=wn[0],0===wn[1]){if(0===a)return function(r,t){return t===xr?Xr:t===Xr?0:t>0?qr(t)?r:0:qr(t)?mt(Xr,r):Xr}(r,t);if(1===r)return 1;if(-1===r&&qr(t))return-1;if(Yr(r))return r===xr?Nn(-0,-t):t<0?0:Xr}if(r<0&&!1===Mr(t))return(r-r)/(r-r);if(i=Jr(r),n=a&lt|0,e=o&lt|0,f=o>>>hn|0,u=(u=a>>>hn|0)&&qr(t)?-1:1,e>fn){if(e>cn)return function(r,t){return(_r(r)&lt)<=At?t<0?Et*Et:_t*_t:t>0?Et*Et:_t*_t}(r,t);if(n<un)return 1===f?u*yn*yn:u*gn*gn;if(n>pn)return 0===f?u*yn*yn:u*gn*gn;l=function(r,t){var n,e,i,a,o,u,f;return a=(i=t-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Pt-a*Ct)-((e=ft(e=(o=Ht*i)+u,0))-o),r[0]=e,r[1]=n,r}(bn,i)}else l=function(r,t,n){var e,i,a,o,u,f,c,s,p,l,v,h,y,g,d,w,b,N,m,A,E;return N=0,n<St&&(N-=53,n=_r(t*=Ft)),N+=(n>>xt)-jr|0,n=(m=n&Ut|0)|It|0,m<=235662?A=0:m<767610?A=1:(A=0,N+=1,n-=St),o=ft(i=(w=(t=kr(t,n))-(c=Rt[A]))*(b=1/(t+c)),0),e=(n>>1|kt)+jt,f=kr(0,e+=A<<18),d=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=ft(f=3+(a=o*o)+(d+=(u=b*(w-o*f-o*(t-(f-c))))*(o+i)),0),p=ft(p=(w=o*f)+(b=u*f+(d-(f-3-a))*i),0),l=Ot*p,y=(v=Vt*p+(b-(p-w))*Tt+Gt[A])-((h=ft(h=l+v+(s=$t[A])+(g=N),0))-g-s-l),r[0]=h,r[1]=y,r}(bn,i,n);if(v=(p=(t-(c=ft(t,0)))*l[0]+t*l[1])+(s=c*l[0]),it.assign(v,wn,1,0),h=ct(wn[0]),y=ct(wn[1]),h>=sn){if(0!=(h-sn|y))return u*yn*yn;if(p+dn>v-s)return u*yn*yn}else if((h&lt)>=ln){if(0!=(h-vn|y))return u*gn*gn;if(p<=v-s)return u*gn*gn}return v=function(r,t,n){var e,i,a,o,u,f,c,s,p,l;return p=((s=r&lt|0)>>en)-jr|0,c=0,s>nn&&(i=kr(0,((c=r+(tn>>p+1)>>>0)&~(rn>>(p=((c&lt)>>en)-jr|0)))>>>0),c=(c&rn|tn)>>en-p>>>0,r<0&&(c=-c),t-=i),r=ct(r=_r(f=1-((f=(a=(i=ft(i=n+t,0))*an)+(o=(n-(i-t))*Qt+i*on))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<en>>>0)>>en<=0?Kt(f,c):kr(f,r)}(h,s,p),u*v}var mn=6123233995736766e-32;function An(r){var t,n,e,i,a;if(K(r))return NaN;if(r>0?e=r:(t=!0,e=-r),e>1)return NaN;if(e>.625)i=(n=1-e)*function(r){var t,n;return 0===r?.08333333333333809:((r<0?-r:r)<=1?(t=28.536655482610616+r*(r*(6.968710824104713+r*(.002967721961301243*r-.5634242780008963))-25.56901049652825),n=342.43986579130785+r*(r*(147.0656354026815+r*(1*r-21.947795316429207))-383.8770957603691)):(t=.002967721961301243+(r=1/r)*(r*(6.968710824104713+r*(28.536655482610616*r-25.56901049652825))-.5634242780008963),n=1+r*(r*(147.0656354026815+r*(342.43986579130785*r-383.8770957603691))-21.947795316429207)),t/n)}(n),n=Br(n+n),a=Pr-n,a-=n=n*i-mn,a+=Pr;else{if(e<1e-8)return r;a=(n=e*e)*function(r){var t,n;return 0===r?.16666666666666713:((r<0?-r:r)<=1?(t=r*(19.562619833175948+r*(r*(5.444622390564711+r*(.004253011369004428*r-.6019598008014124))-16.262479672107002))-8.198089802484825,n=r*(139.51056146574857+r*(r*(70.49610280856842+r*(1*r-14.740913729888538))-147.1791292232726))-49.18853881490881):(t=.004253011369004428+(r=1/r)*(r*(5.444622390564711+r*(r*(19.562619833175948+-8.198089802484825*r)-16.262479672107002))-.6019598008014124),n=1+r*(r*(70.49610280856842+r*(r*(139.51056146574857+-49.18853881490881*r)-147.1791292232726))-14.740913729888538)),t/n)}(n),a=e*a+e}return t?-a:a}var En=3.141592653589793,_n=2/En;function Un(r,t,n){return K(r)||K(t)||K(n)||t>=n?NaN:r<t?0:r>=n?1:_n*An(Br((r-t)/(n-t)))}function Sn(r){return function(){return r}}var In=2/En;G(Un,"factory",(function(r,t){return K(r)||K(t)||r>=t?Sn(NaN):function(n){if(K(n))return NaN;if(n<r)return 0;if(n>=t)return 1;return In*An(Br((n-r)/(t-r)))}}));var kn=1.1447298858494002;function jn(r,t,n){return K(r)||K(t)||K(n)||t>=n?NaN:r<t?xr:r>=n?0:Qt-kn+Hr(An(Br((r-t)/(n-t))))}function xn(r,t,n){return K(r)||K(t)||K(n)||t>=n?NaN:r<t||r>n?xr:-(kn+Hr((r-t)*(n-r))/2)}function Fn(r,t,n){return K(r)||K(t)||K(n)||t>=n?NaN:r<t||r>n?0:1/(En*Br((r-t)*(n-r)))}function Tn(r,t){var n,e,i,a;return i=(a=r*r)*a,e=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*e-r*t))}G(jn,"factory",(function(r,t){return K(r)||K(t)||r>=t?Sn(NaN):function(n){if(K(n))return NaN;if(n<r)return xr;if(n>=t)return 0;return Qt-kn+Hr(An(Br((n-r)/(t-r))))}})),G(xn,"factory",(function(r,t){return K(r)||K(t)||r>=t?Sn(NaN):function(n){if(K(n))return NaN;if(n<r||n>t)return xr;return-(kn+Hr((n-r)*(t-n))/2)}})),G(Fn,"factory",(function(r,t){return K(r)||K(t)||r>=t?Sn(NaN):function(n){if(K(n))return NaN;if(n<r||n>t)return 0;return 1/(En*Br((n-r)*(t-n)))}}));var On=-.16666666666666632,Vn=.00833333333332249,Rn=-.0001984126982985795,$n=27557313707070068e-22,Gn=-2.5050760253406863e-8,Cn=1.58969099521155e-10;function Hn(r,t){var n,e,i;return n=Vn+(i=r*r)*(Rn+i*$n)+i*(i*i)*(Gn+i*Cn),e=i*r,0===t?r+e*(On+i*n):r-(i*(.5*t-e*n)-t-e*On)}var Pn=!0===Nr?0:1,Wn=new fr(1),Ln=new er(Wn.buffer);function Mn(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var Zn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],qn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Xn=16777216,Yn=5.960464477539063e-8,zn=Mn(20),Dn=Mn(20),Bn=Mn(20),Jn=Mn(20);function Kn(r,t,n,e,i,a,o,u,f){var c,s,p,l,v,h,y,g,d;for(l=a,d=e[n],g=n,v=0;g>0;v++)s=Yn*d|0,Jn[v]=d-Xn*s|0,d=e[g-1]+s,g-=1;if(d=Kt(d,i),d-=8*Lr(.125*d),d-=y=0|d,p=0,i>0?(y+=v=Jn[n-1]>>24-i,Jn[n-1]-=v<<24-i,p=Jn[n-1]>>23-i):0===i?p=Jn[n-1]>>23:d>=.5&&(p=2),p>0){for(y+=1,c=0,v=0;v<n;v++)g=Jn[v],0===c?0!==g&&(c=1,Jn[v]=16777216-g):Jn[v]=16777215-g;if(i>0)switch(i){case 1:Jn[n-1]&=8388607;break;case 2:Jn[n-1]&=4194303}2===p&&(d=1-d,0!==c&&(d-=Kt(1,i)))}if(0===d){for(g=0,v=n-1;v>=a;v--)g|=Jn[v];if(0===g){for(h=1;0===Jn[a-h];h++);for(v=n+1;v<=n+h;v++){for(f[u+v]=Zn[o+v],s=0,g=0;g<=u;g++)s+=r[g]*f[u+(v-g)];e[v]=s}return Kn(r,t,n+=h,e,i,a,o,u,f)}}if(0===d)for(n-=1,i-=24;0===Jn[n];)n-=1,i-=24;else(d=Kt(d,-i))>=Xn?(s=Yn*d|0,Jn[n]=d-Xn*s|0,i+=24,Jn[n+=1]=s):Jn[n]=0|d;for(s=Kt(1,i),v=n;v>=0;v--)e[v]=s*Jn[v],s*=Yn;for(v=n;v>=0;v--){for(s=0,h=0;h<=l&&h<=n-v;h++)s+=qn[h]*e[v+h];Bn[n-v]=s}for(s=0,v=n;v>=0;v--)s+=Bn[v];for(t[0]=0===p?s:-s,s=Bn[0]-s,v=1;v<=n;v++)s+=Bn[v];return t[1]=0===p?s:-s,7&y}function Qn(r,t,n,e){var i,a,o,u,f,c,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=e-1),s=o+4,f=0;f<=s;f++)zn[f]=c<0?0:Zn[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*zn[o+(f-c)];Dn[f]=i}return 4,Kn(r,t,4,Dn,u,4,a,o,zn)}var re=Math.round,te=.6366197723675814,ne=1.5707963267341256,ee=6077100506506192e-26,ie=6077100506303966e-26,ae=20222662487959506e-37,oe=20222662487111665e-37,ue=84784276603689e-45,fe=2047;function ce(r,t,n){var e,i,a,o,u;return a=r-(e=re(r*te))*ne,o=e*ee,u=t>>20|0,n[0]=a-o,u-(_r(n[0])>>20&fe)>16&&(o=e*ae-((i=a)-(a=i-(o=e*ie))-o),n[0]=a-o,u-(_r(n[0])>>20&fe)>49&&(o=e*ue-((i=a)-(a=i-(o=e*oe))-o),n[0]=a-o)),n[1]=a-n[0]-o,e}var se=0,pe=16777216,le=1.5707963267341256,ve=6077100506506192e-26,he=2*ve,ye=3*ve,ge=4*ve,de=598523,we=1072243195,be=1073928572,Ne=1074752122,me=1074977148,Ae=1075183036,Ee=1075388923,_e=1075594811,Ue=1094263291,Se=[0,0,0],Ie=[0,0];function ke(r,t){var n,e,i,a,o,u,f;if((i=_r(r)&lt|0)<=we)return t[0]=r,t[1]=0,0;if(i<=Ne)return(i&rn)===de?ce(r,i,t):i<=be?r>0?(f=r-le,t[0]=f-ve,t[1]=f-t[0]-ve,1):(f=r+le,t[0]=f+ve,t[1]=f-t[0]+ve,-1):r>0?(f=r-2*le,t[0]=f-he,t[1]=f-t[0]-he,2):(f=r+2*le,t[0]=f+he,t[1]=f-t[0]+he,-2);if(i<=_e)return i<=Ae?i===me?ce(r,i,t):r>0?(f=r-3*le,t[0]=f-ye,t[1]=f-t[0]-ye,3):(f=r+3*le,t[0]=f+ye,t[1]=f-t[0]+ye,-3):i===Ee?ce(r,i,t):r>0?(f=r-4*le,t[0]=f-ge,t[1]=f-t[0]-ge,4):(f=r+4*le,t[0]=f+ge,t[1]=f-t[0]+ge,-4);if(i<Ue)return ce(r,i,t);if(i>=Yt)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return Wn[0]=r,Ln[Pn]}(r),f=bt(i-((e=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)Se[o]=0|f,f=(f-Se[o])*pe;for(Se[2]=f,a=3;Se[a-1]===se;)a-=1;return u=Qn(Se,Ie,e,a),r<0?(t[0]=-Ie[0],t[1]=-Ie[1],-u):(t[0]=Ie[0],t[1]=Ie[1],u)}var je=1072243195,xe=1045430272,Fe=[0,0];function Te(r){var t;if(t=_r(r),(t&=lt)<=je)return t<xe?r:Hn(r,0);if(t>=Yt)return NaN;switch(3&ke(r,Fe)){case 0:return Hn(Fe[0],Fe[1]);case 1:return Tn(Fe[0],Fe[1]);case 2:return-Hn(Fe[0],Fe[1]);default:return-Tn(Fe[0],Fe[1])}}var Oe=1.5707963267948966;function Ve(r,t,n){return K(t)||K(n)||t>=n||K(r)||r<0||r>1?NaN:t+Nn(Te(Oe*r),2)*(n-t)}function Re(){var r,t=arguments,n="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function $e(){var r,t;if(!(this instanceof $e))return 0===arguments.length?new $e:new $e(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!H(r=arguments[0])||K(r))throw new TypeError(Re("0u18a",r));if(!H(t)||K(t))throw new TypeError(Re("0u18b",t));if(r>=t)throw new RangeError(Re("0u1DV",r,t))}else r=0,t=1;return $(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!H(n)||K(n))throw new TypeError(Re("0u18d",n));if(n>=t)throw new RangeError(Re("0u18e",t,n));r=n}}),$(this,"b",{configurable:!1,enumerable:!0,get:function(){return t},set:function(n){if(!H(n)||K(n))throw new TypeError(Re("0u18d",n));if(n<=r)throw new RangeError(Re("0u18f",r,n));t=n}}),this}G(Ve,"factory",(function(r,t){return K(r)||K(t)||r>=t?Sn(NaN):function(n){if(K(n)||n<0||n>1)return NaN;return r+Nn(Te(Oe*n),2)*(t-r)}})),C($e.prototype,"entropy",(function(){return r=this.a,t=this.b,K(r)||K(t)||r>=t?NaN:Wr+Hr(t-r);var r,t})),C($e.prototype,"kurtosis",(function(){return r=this.a,t=this.b,K(r)||K(t)||r>=t?NaN:-1.5;var r,t})),C($e.prototype,"mean",(function(){return r=this.a,t=this.b,r>=t?NaN:.5*(r+t);var r,t})),C($e.prototype,"median",(function(){return r=this.a,t=this.b,r>=t?NaN:.5*(r+t);var r,t})),C($e.prototype,"mode",(function(){return r=this.a,t=this.b,K(r)||K(t)||r>=t?NaN:r;var r,t})),C($e.prototype,"skewness",(function(){return r=this.a,t=this.b,K(r)||K(t)||r>=t?NaN:0;var r,t})),C($e.prototype,"stdev",(function(){return r=this.a,t=this.b,r>=t?NaN:.35355339059327373*(t-r);var r,t})),C($e.prototype,"variance",(function(){return r=this.a,t=this.b,r>=t?NaN:.125*Nn(t-r,2);var r,t})),G($e.prototype,"cdf",(function(r){return Un(r,this.a,this.b)})),G($e.prototype,"logcdf",(function(r){return jn(r,this.a,this.b)})),G($e.prototype,"logpdf",(function(r){return xn(r,this.a,this.b)})),G($e.prototype,"pdf",(function(r){return Fn(r,this.a,this.b)})),G($e.prototype,"quantile",(function(r){return Ve(r,this.a,this.b)}));export{$e as default};
//# sourceMappingURL=mod.js.map
