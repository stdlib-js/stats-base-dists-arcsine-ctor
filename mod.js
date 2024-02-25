// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function o(r){var n,e,o;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,o=parseInt(e,10),!isFinite(o)){if(!t(e))throw new Error("invalid integer. Value: "+e);o=0}return o<0&&("u"===r.specifier||10!==n)&&(o=4294967295+o+1),o<0?(e=(-o).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=o.toString(n),o||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===u.call(r.specifier)?u.call(e):a.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,l=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,y=/\.0$/,g=/\.0*e/,b=/(\..*[^0])0*e/;function d(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,b,"$1e"),e=p.call(e,g,"e"),e=p.call(e,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,v,"e+0$1"),e=p.call(e,l,"e-0$1"),r.alternate&&(e=p.call(e,h,"$1."),e=p.call(e,w,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function N(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}var m=String.fromCharCode,A=isNaN,E=Array.isArray;function _(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function I(r){var n,t,e,a,u,f,c,s,p,v,l,h,w;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(e=r[s],"string"==typeof e)f+=e;else{if(n=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,A(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,A(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=o(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!A(e.arg)){if((u=parseInt(e.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=A(u)?String(e.arg):m(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=d(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(v=e.arg,l=e.width,h=e.padRight,w=void 0,(w=l-v.length)<0?v:v=h?v+N(w):N(w)+v)),f+=e.arg||"",c+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function k(r){var n,t,e,i;for(t=[],i=0,e=U.exec(r);e;)(n=r.slice(i,U.lastIndex-e[0].length)).length&&t.push(n),t.push(S(e)),i=U.lastIndex,e=U.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function x(r){var n,t;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[k(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return I.apply(null,n)}var j=Object.prototype,F=j.toString,O=j.__defineGetter__,T=j.__defineSetter__,H=j.__lookupGetter__,V=j.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,a,u;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(H.call(r,n)||V.call(r,n)?(e=r.__proto__,r.__proto__=j,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),a="get"in t,u="set"in t,i&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,n,t.get),u&&T&&T.call(r,n,t.set),r};function W(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r,n,t){G(r,n,{configurable:!1,enumerable:!1,get:t})}function M(r){return"number"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function $(){return R&&"symbol"==typeof Symbol.toStringTag}var C=Object.prototype.toString;var P=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,Z="function"==typeof q?q.toStringTag:"";var X=$()?function(r){var n,t,e,i,a;if(null==r)return C.call(r);t=r[Z],a=Z,n=null!=(i=r)&&P.call(i,a);try{r[Z]=void 0}catch(n){return C.call(r)}return e=C.call(r),n?r[Z]=t:delete r[Z],e}:function(r){return C.call(r)},Y=Number,z=Y.prototype.toString;var D=$();function B(r){return"object"==typeof r&&(r instanceof Y||(D?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function J(r){return M(r)||B(r)}function K(r){return r!=r}W(J,"isPrimitive",M),W(J,"isObject",B);var Q="function"==typeof Uint32Array;var rr="function"==typeof Uint32Array?Uint32Array:null;var nr,tr="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,n,t;if("function"!=typeof rr)return!1;try{n=new rr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(Q&&t instanceof Uint32Array||"[object Uint32Array]"===X(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var er=nr,ir="function"==typeof Float64Array;var ar="function"==typeof Float64Array?Float64Array:null;var ur,or="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,n,t;if("function"!=typeof ar)return!1;try{n=new ar([1,3.14,-3.14,NaN]),t=n,r=(ir&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?or:function(){throw new Error("not implemented")};var fr=ur,cr="function"==typeof Uint8Array;var sr="function"==typeof Uint8Array?Uint8Array:null;var pr,vr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,n,t;if("function"!=typeof sr)return!1;try{n=new sr(n=[1,3.14,-3.14,256,257]),t=n,r=(cr&&t instanceof Uint8Array||"[object Uint8Array]"===X(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var lr=pr,hr="function"==typeof Uint16Array;var wr="function"==typeof Uint16Array?Uint16Array:null;var yr,gr="function"==typeof Uint16Array?Uint16Array:void 0;yr=function(){var r,n,t;if("function"!=typeof wr)return!1;try{n=new wr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(hr&&t instanceof Uint16Array||"[object Uint16Array]"===X(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var br,dr=yr,Nr={uint16:dr,uint8:lr};(br=new Nr.uint16(1))[0]=4660;var mr=52===new Nr.uint8(br.buffer)[0],Ar=!0===mr?1:0,Er=new fr(1),_r=new er(Er.buffer);function Ir(r){return Er[0]=r,_r[Ar]}var Ur=!0===mr?1:0,Sr=new fr(1),kr=new er(Sr.buffer);var xr=1023,jr=Y.NEGATIVE_INFINITY;var Fr=.6931471803691238,Or=1.9082149292705877e-10,Tr=0x40000000000000,Hr=.3333333333333333,Vr=1048575,Gr=2146435072,Wr=1048576,Lr=1072693248;function Mr(r){var n,t,e,i,a,u,o,f,c,s,p,v;return 0===r?jr:K(r)||r<0?NaN:(a=0,(t=Ir(r))<Wr&&(a-=54,t=Ir(r*=Tr)),t>=Gr?r+r:(a+=(t>>20)-xr|0,a+=(f=(t&=Vr)+614244&1048576|0)>>20|0,o=(r=function(r,n){return Sr[0]=r,kr[Ur]=n>>>0,Sr[0]}(r,t|f^Lr))-1,(Vr&2+t)<3?0===o?0===a?0:a*Fr+a*Or:(u=o*o*(.5-Hr*o),0===a?o-u:a*Fr-(u-a*Or-o)):(f=t-398458|0,c=440401-t|0,i=(p=(v=(s=o/(2+o))*s)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=e+i,(f|=c)>0?(n=.5*o*o,0===a?o-(n-s*(n+u)):a*Fr-(n-(s*(n+u)+a*Or)-o)):0===a?o-s*(o-u):a*Fr-(s*(o-u)-a*Or-o))))}var Rr=.7853981633974483,$r=Mr(Rr);var Cr=Math.floor;function Pr(r){return Cr(r)===r}function qr(r){return Pr(r/2)}function Zr(r){return qr(r>0?r-1:r+1)}var Xr=Number.POSITIVE_INFINITY;function Yr(r){return r===Xr||r===jr}var zr=Math.sqrt;function Dr(r){return Math.abs(r)}var Br,Jr={uint16:dr,uint8:lr};Br=function(){var r;return(r=new Jr.uint16(1))[0]=4660,52===new Jr.uint8(r.buffer)[0]}();var Kr,Qr,rn=Br;!0===rn?(Kr=1,Qr=0):(Kr=0,Qr=1);var nn={HIGH:Kr,LOW:Qr},tn=new fr(1),en=new er(tn.buffer),an=nn.HIGH,un=nn.LOW;function on(r,n,t,e){return tn[0]=r,n[e]=en[an],n[e+t]=en[un],n}function fn(r){return on(r,[0,0],1,0)}W(fn,"assign",on);var cn=!0===rn?0:1,sn=new fr(1),pn=new er(sn.buffer);function vn(r,n){return sn[0]=r,pn[cn]=n>>>0,sn[0]}function ln(r){return 0|r}var hn,wn,yn=2147483647,gn=2147483648,bn=!0===rn?1:0,dn=new fr(1),Nn=new er(dn.buffer);function mn(r){return dn[0]=r,Nn[bn]}!0===rn?(hn=1,wn=0):(hn=0,wn=1);var An={HIGH:hn,LOW:wn},En=new fr(1),_n=new er(En.buffer),In=An.HIGH,Un=An.LOW;function Sn(r,n){return _n[In]=r,_n[Un]=n,En[0]}var kn=[0,0];function xn(r,n){var t,e;return fn.assign(r,kn,1,0),t=kn[0],t&=yn,e=mn(n),Sn(t|=e&=gn,kn[1])}var jn=1072693247,Fn=1e300,On=1e-300;var Tn=!0===rn?1:0,Hn=new fr(1),Vn=new er(Hn.buffer);function Gn(r,n){return Hn[0]=r,Vn[Tn]=n>>>0,Hn[0]}var Wn=1023;var Ln=1048575,Mn=1048576,Rn=1072693248,$n=536870912,Cn=524288,Pn=20,qn=9007199254740992,Zn=.9617966939259756,Xn=.9617967009544373,Yn=-7.028461650952758e-9,zn=[1,1.5],Dn=[0,.5849624872207642],Bn=[0,1.350039202129749e-8];var Jn=1.4426950408889634,Kn=1.4426950216293335,Qn=1.9259629911266175e-8;var rt=1023,nt=-1023,tt=-1074,et=22250738585072014e-324,it=4503599627370496;function at(r,n,t,e){return K(r)||Yr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Dr(r)<et?(n[e]=r*it,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}W((function(r){return at(r,[0,0],1,0)}),"assign",at);var ut=2146435072;var ot=2220446049250313e-31,ft=2148532223,ct=[0,0],st=[0,0];function pt(r,n){var t,e;return 0===n||0===r||K(r)||Yr(r)?r:(at(r,ct,1,0),r=ct[0],n+=ct[1],n+=function(r){var n=mn(r);return(n=(n&ut)>>>20)-Wn|0}(r),n<tt?xn(0,r):n>rt?r<0?jr:Xr:(n<=nt?(n+=52,e=ot):e=1,fn.assign(r,st,1,0),t=st[0],t&=ft,e*Sn(t|=n+Wn<<20,st[1])))}var vt=.6931471805599453,lt=1048575;var ht=1048576,wt=1071644672,yt=20,gt=.6931471824645996,bt=-1.904654299957768e-9;var dt=1072693247,Nt=1105199104,mt=1139802112,At=1083179008,Et=1072693248,_t=1083231232,It=3230714880,Ut=31,St=1e300,kt=1e-300,xt=8008566259537294e-32,jt=[0,0],Ft=[0,0];function Ot(r,n){var t,e,i,a,u,o,f,c,s,p,v,l,h,w;if(K(r)||K(n))return NaN;if(fn.assign(n,jt,1,0),u=jt[0],0===jt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return zr(r);if(-.5===n)return 1/zr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Yr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Dr(r)<1==(n===Xr)?0:Xr}(r,n)}if(fn.assign(r,jt,1,0),a=jt[0],0===jt[1]){if(0===a)return function(r,n){return n===jr?Xr:n===Xr?0:n>0?Zr(n)?r:0:Zr(n)?xn(Xr,r):Xr}(r,n);if(1===r)return 1;if(-1===r&&Zr(n))return-1;if(Yr(r))return r===jr?Ot(-0,-n):n<0?0:Xr}if(r<0&&!1===Pr(n))return(r-r)/(r-r);if(i=Dr(r),t=a&yn|0,e=u&yn|0,f=u>>>Ut|0,o=(o=a>>>Ut|0)&&Zr(n)?-1:1,e>Nt){if(e>mt)return function(r,n){return(mn(r)&yn)<=jn?n<0?Fn*Fn:On*On:n>0?Fn*Fn:On*On}(r,n);if(t<dt)return 1===f?o*St*St:o*kt*kt;if(t>Et)return 0===f?o*St*St:o*kt*kt;v=function(r,n){var t,e,i,a,u,o,f;return a=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(o=i*Qn-a*Jn)-((e=vn(e=(u=Kn*i)+o,0))-u),r[0]=e,r[1]=t,r}(Ft,i)}else v=function(r,n,t){var e,i,a,u,o,f,c,s,p,v,l,h,w,y,g,b,d,N,m,A,E;return N=0,t<Mn&&(N-=53,t=mn(n*=qn)),N+=(t>>Pn)-Wn|0,t=(m=t&Ln|0)|Rn|0,m<=235662?A=0:m<767610?A=1:(A=0,N+=1,t-=Mn),u=vn(i=(b=(n=Gn(n,t))-(c=zn[A]))*(d=1/(n+c)),0),e=(t>>1|$n)+Cn,f=Gn(0,e+=A<<18),g=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=vn(f=3+(a=u*u)+(g+=(o=d*(b-u*f-u*(n-(f-c))))*(u+i)),0),p=vn(p=(b=u*f)+(d=o*f+(g-(f-3-a))*i),0),v=Xn*p,w=(l=Yn*p+(d-(p-b))*Zn+Bn[A])-((h=vn(h=v+l+(s=Dn[A])+(y=N),0))-y-s-v),r[0]=h,r[1]=w,r}(Ft,i,t);if(l=(p=(n-(c=vn(n,0)))*v[0]+n*v[1])+(s=c*v[0]),fn.assign(l,jt,1,0),h=ln(jt[0]),w=ln(jt[1]),h>=At){if(0!=(h-At|w))return o*St*St;if(p+xt>l-s)return o*St*St}else if((h&yn)>=_t){if(0!=(h-It|w))return o*kt*kt;if(p<=l-s)return o*kt*kt}return l=function(r,n,t){var e,i,a,u,o,f,c,s,p,v;return p=((s=r&yn|0)>>yt)-Wn|0,c=0,s>wt&&(i=Gn(0,((c=r+(ht>>p+1)>>>0)&~(lt>>(p=((c&yn)>>yt)-Wn|0)))>>>0),c=(c&lt|ht)>>yt-p>>>0,r<0&&(c=-c),n-=i),r=ln(r=mn(f=1-((f=(a=(i=vn(i=t+n,0))*gt)+(u=(t-(i-n))*vt+i*bt))*(e=f-(i=f*f)*(0===(v=i)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=u-(f-a))+f*o)-f))),(r+=c<<yt>>>0)>>yt<=0?pt(f,c):Gn(f,r)}(h,s,p),o*l}var Tt=Math.sqrt;var Ht=6123233995736766e-32;function Vt(r){var n,t,e,i,a;if(K(r))return NaN;if(r>0?e=r:(n=!0,e=-r),e>1)return NaN;if(e>.625)i=(t=1-e)*function(r){var n,t;return 0===r?.08333333333333809:((r<0?-r:r)<=1?(n=28.536655482610616+r*(r*(6.968710824104713+r*(.002967721961301243*r-.5634242780008963))-25.56901049652825),t=342.43986579130785+r*(r*(147.0656354026815+r*(1*r-21.947795316429207))-383.8770957603691)):(n=.002967721961301243+(r=1/r)*(r*(6.968710824104713+r*(28.536655482610616*r-25.56901049652825))-.5634242780008963),t=1+r*(r*(147.0656354026815+r*(342.43986579130785*r-383.8770957603691))-21.947795316429207)),n/t)}(t),t=Tt(t+t),a=Rr-t,a-=t=t*i-Ht,a+=Rr;else{if(e<1e-8)return r;a=(t=e*e)*function(r){var n,t;return 0===r?.16666666666666713:((r<0?-r:r)<=1?(n=r*(19.562619833175948+r*(r*(5.444622390564711+r*(.004253011369004428*r-.6019598008014124))-16.262479672107002))-8.198089802484825,t=r*(139.51056146574857+r*(r*(70.49610280856842+r*(1*r-14.740913729888538))-147.1791292232726))-49.18853881490881):(n=.004253011369004428+(r=1/r)*(r*(5.444622390564711+r*(r*(19.562619833175948+-8.198089802484825*r)-16.262479672107002))-.6019598008014124),t=1+r*(r*(70.49610280856842+r*(r*(139.51056146574857+-49.18853881490881*r)-147.1791292232726))-14.740913729888538)),n/t)}(t),a=e*a+e}return n?-a:a}var Gt=Math.sqrt,Wt=3.141592653589793,Lt=2/Wt;function Mt(r,n,t){return K(r)||K(n)||K(t)||n>=t?NaN:r<n?0:r>=t?1:Lt*Vt(Gt((r-n)/(t-n)))}W(Mt,"factory",(function(r,n){return K(r)||K(n)||r>=n?(t=NaN,function(){return t}):function(t){if(K(t))return NaN;if(t<r)return 0;if(t>=n)return 1;return.6366197723675814*Vt(Gt((t-r)/(n-r)))};var t}));var Rt,$t=Math.sqrt,Ct={uint16:dr,uint8:lr};Rt=function(){var r;return(r=new Ct.uint16(1))[0]=4660,52===new Ct.uint8(r.buffer)[0]}();var Pt=Rt,qt=!0===Pt?1:0,Zt=new fr(1),Xt=new er(Zt.buffer);function Yt(r){return Zt[0]=r,Xt[qt]}var zt=!0===Pt?1:0,Dt=new fr(1),Bt=new er(Dt.buffer);var Jt=1023;var Kt=.6931471803691238,Qt=1.9082149292705877e-10,re=0x40000000000000,ne=.3333333333333333,te=1048575,ee=2146435072,ie=1048576,ae=1072693248;function ue(r){var n,t,e,i,a,u,o,f,c,s,p,v;return 0===r?jr:K(r)||r<0?NaN:(a=0,(t=Yt(r))<ie&&(a-=54,t=Yt(r*=re)),t>=ee?r+r:(a+=(t>>20)-Jt|0,a+=(f=(t&=te)+614244&1048576|0)>>20|0,o=(r=function(r,n){return Dt[0]=r,Bt[zt]=n>>>0,Dt[0]}(r,t|f^ae))-1,(te&2+t)<3?0===o?0===a?0:a*Kt+a*Qt:(u=o*o*(.5-ne*o),0===a?o-u:a*Kt-(u-a*Qt-o)):(f=t-398458|0,c=440401-t|0,i=(p=(v=(s=o/(2+o))*s)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=e+i,(f|=c)>0?(n=.5*o*o,0===a?o-(n-s*(n+u)):a*Kt-(n-(s*(n+u)+a*Qt)-o)):0===a?o-s*(o-u):a*Kt-(s*(o-u)-a*Qt-o))))}var oe=1.1447298858494002,fe=.6931471805599453;function ce(r,n,t){return K(r)||K(n)||K(t)||n>=t?NaN:r<n?jr:r>=t?0:fe-oe+ue(Vt($t((r-n)/(t-n))))}W(ce,"factory",(function(r,n){return K(r)||K(n)||r>=n?(t=NaN,function(){return t}):function(t){if(K(t))return NaN;if(t<r)return jr;if(t>=n)return 0;return fe-oe+ue(Vt($t((t-r)/(n-r))))};var t}));var se,pe={uint16:dr,uint8:lr};se=function(){var r;return(r=new pe.uint16(1))[0]=4660,52===new pe.uint8(r.buffer)[0]}();var ve=se,le=!0===ve?1:0,he=new fr(1),we=new er(he.buffer);function ye(r){return he[0]=r,we[le]}var ge=!0===ve?1:0,be=new fr(1),de=new er(be.buffer);var Ne=1023;var me=.6931471803691238,Ae=1.9082149292705877e-10,Ee=0x40000000000000,_e=.3333333333333333,Ie=1048575,Ue=2146435072,Se=1048576,ke=1072693248;function xe(r){var n,t,e,i,a,u,o,f,c,s,p,v;return 0===r?jr:K(r)||r<0?NaN:(a=0,(t=ye(r))<Se&&(a-=54,t=ye(r*=Ee)),t>=Ue?r+r:(a+=(t>>20)-Ne|0,a+=(f=(t&=Ie)+614244&1048576|0)>>20|0,o=(r=function(r,n){return be[0]=r,de[ge]=n>>>0,be[0]}(r,t|f^ke))-1,(Ie&2+t)<3?0===o?0===a?0:a*me+a*Ae:(u=o*o*(.5-_e*o),0===a?o-u:a*me-(u-a*Ae-o)):(f=t-398458|0,c=440401-t|0,i=(p=(v=(s=o/(2+o))*s)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=e+i,(f|=c)>0?(n=.5*o*o,0===a?o-(n-s*(n+u)):a*me-(n-(s*(n+u)+a*Ae)-o)):0===a?o-s*(o-u):a*me-(s*(o-u)-a*Ae-o))))}function je(r,n,t){return K(r)||K(n)||K(t)||n>=t?NaN:r<n||r>t?jr:-(oe+xe((r-n)*(t-r))/2)}W(je,"factory",(function(r,n){return K(r)||K(n)||r>=n?(t=NaN,function(){return t}):function(t){if(K(t))return NaN;if(t<r||t>n)return jr;return-(oe+xe((t-r)*(n-t))/2)};var t}));var Fe=Math.sqrt,Oe=3.141592653589793;function Te(r,n,t){return K(r)||K(n)||K(t)||n>=t?NaN:r<n||r>t?0:1/(Oe*Fe((r-n)*(t-r)))}function He(r){return qr(r>0?r-1:r+1)}function Ve(r){return r===Xr||r===jr}W(Te,"factory",(function(r,n){return K(r)||K(n)||r>=n?(t=NaN,function(){return t}):function(t){if(K(t))return NaN;if(t<r||t>n)return 0;return 1/(Oe*Fe((t-r)*(n-t)))};var t}));var Ge=Math.sqrt;function We(r){return Math.abs(r)}var Le,Me={uint16:dr,uint8:lr};Le=function(){var r;return(r=new Me.uint16(1))[0]=4660,52===new Me.uint8(r.buffer)[0]}();var Re,$e,Ce=Le;!0===Ce?(Re=1,$e=0):(Re=0,$e=1);var Pe={HIGH:Re,LOW:$e},qe=new fr(1),Ze=new er(qe.buffer),Xe=Pe.HIGH,Ye=Pe.LOW;function ze(r,n,t,e){return qe[0]=r,n[e]=Ze[Xe],n[e+t]=Ze[Ye],n}function De(r){return ze(r,[0,0],1,0)}W(De,"assign",ze);var Be=!0===Ce?0:1,Je=new fr(1),Ke=new er(Je.buffer);function Qe(r,n){return Je[0]=r,Ke[Be]=n>>>0,Je[0]}function ri(r){return 0|r}var ni,ti,ei=2147483647,ii=2147483648,ai=!0===Ce?1:0,ui=new fr(1),oi=new er(ui.buffer);function fi(r){return ui[0]=r,oi[ai]}!0===Ce?(ni=1,ti=0):(ni=0,ti=1);var ci={HIGH:ni,LOW:ti},si=new fr(1),pi=new er(si.buffer),vi=ci.HIGH,li=ci.LOW;function hi(r,n){return pi[vi]=r,pi[li]=n,si[0]}var wi=[0,0];function yi(r,n){var t,e;return De.assign(r,wi,1,0),t=wi[0],t&=ei,e=fi(n),hi(t|=e&=ii,wi[1])}var gi=1072693247,bi=1e300,di=1e-300;var Ni=!0===Ce?1:0,mi=new fr(1),Ai=new er(mi.buffer);function Ei(r,n){return mi[0]=r,Ai[Ni]=n>>>0,mi[0]}var _i=1023;var Ii=1048575,Ui=1048576,Si=1072693248,ki=536870912,xi=524288,ji=20,Fi=9007199254740992,Oi=.9617966939259756,Ti=.9617967009544373,Hi=-7.028461650952758e-9,Vi=[1,1.5],Gi=[0,.5849624872207642],Wi=[0,1.350039202129749e-8];var Li=1.4426950408889634,Mi=1.4426950216293335,Ri=1.9259629911266175e-8;var $i=1023,Ci=-1023,Pi=-1074,qi=22250738585072014e-324,Zi=4503599627370496;function Xi(r,n,t,e){return K(r)||Ve(r)?(n[e]=r,n[e+t]=0,n):0!==r&&We(r)<qi?(n[e]=r*Zi,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}W((function(r){return Xi(r,[0,0],1,0)}),"assign",Xi);var Yi=2146435072;var zi=2220446049250313e-31,Di=2148532223,Bi=[0,0],Ji=[0,0];function Ki(r,n){var t,e;return 0===n||0===r||K(r)||Ve(r)?r:(Xi(r,Bi,1,0),r=Bi[0],n+=Bi[1],n+=function(r){var n=fi(r);return(n=(n&Yi)>>>20)-_i|0}(r),n<Pi?yi(0,r):n>$i?r<0?jr:Xr:(n<=Ci?(n+=52,e=zi):e=1,De.assign(r,Ji,1,0),t=Ji[0],t&=Di,e*hi(t|=n+_i<<20,Ji[1])))}var Qi=.6931471805599453,ra=1048575;var na=1048576,ta=1071644672,ea=20,ia=.6931471824645996,aa=-1.904654299957768e-9;var ua=1072693247,oa=1105199104,fa=1139802112,ca=1083179008,sa=1072693248,pa=1083231232,va=3230714880,la=31,ha=1e300,wa=1e-300,ya=8008566259537294e-32,ga=[0,0],ba=[0,0];function da(r,n){var t,e,i,a,u,o,f,c,s,p,v,l,h,w;if(K(r)||K(n))return NaN;if(De.assign(n,ga,1,0),u=ga[0],0===ga[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Ge(r);if(-.5===n)return 1/Ge(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Ve(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:We(r)<1==(n===Xr)?0:Xr}(r,n)}if(De.assign(r,ga,1,0),a=ga[0],0===ga[1]){if(0===a)return function(r,n){return n===jr?Xr:n===Xr?0:n>0?He(n)?r:0:He(n)?yi(Xr,r):Xr}(r,n);if(1===r)return 1;if(-1===r&&He(n))return-1;if(Ve(r))return r===jr?da(-0,-n):n<0?0:Xr}if(r<0&&!1===Pr(n))return(r-r)/(r-r);if(i=We(r),t=a&ei|0,e=u&ei|0,f=u>>>la|0,o=(o=a>>>la|0)&&He(n)?-1:1,e>oa){if(e>fa)return function(r,n){return(fi(r)&ei)<=gi?n<0?bi*bi:di*di:n>0?bi*bi:di*di}(r,n);if(t<ua)return 1===f?o*ha*ha:o*wa*wa;if(t>sa)return 0===f?o*ha*ha:o*wa*wa;v=function(r,n){var t,e,i,a,u,o,f;return a=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(o=i*Ri-a*Li)-((e=Qe(e=(u=Mi*i)+o,0))-u),r[0]=e,r[1]=t,r}(ba,i)}else v=function(r,n,t){var e,i,a,u,o,f,c,s,p,v,l,h,w,y,g,b,d,N,m,A,E;return N=0,t<Ui&&(N-=53,t=fi(n*=Fi)),N+=(t>>ji)-_i|0,t=(m=t&Ii|0)|Si|0,m<=235662?A=0:m<767610?A=1:(A=0,N+=1,t-=Ui),u=Qe(i=(b=(n=Ei(n,t))-(c=Vi[A]))*(d=1/(n+c)),0),e=(t>>1|ki)+xi,f=Ei(0,e+=A<<18),g=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=Qe(f=3+(a=u*u)+(g+=(o=d*(b-u*f-u*(n-(f-c))))*(u+i)),0),p=Qe(p=(b=u*f)+(d=o*f+(g-(f-3-a))*i),0),v=Ti*p,w=(l=Hi*p+(d-(p-b))*Oi+Wi[A])-((h=Qe(h=v+l+(s=Gi[A])+(y=N),0))-y-s-v),r[0]=h,r[1]=w,r}(ba,i,t);if(l=(p=(n-(c=Qe(n,0)))*v[0]+n*v[1])+(s=c*v[0]),De.assign(l,ga,1,0),h=ri(ga[0]),w=ri(ga[1]),h>=ca){if(0!=(h-ca|w))return o*ha*ha;if(p+ya>l-s)return o*ha*ha}else if((h&ei)>=pa){if(0!=(h-va|w))return o*wa*wa;if(p<=l-s)return o*wa*wa}return l=function(r,n,t){var e,i,a,u,o,f,c,s,p,v;return p=((s=r&ei|0)>>ea)-_i|0,c=0,s>ta&&(i=Ei(0,((c=r+(na>>p+1)>>>0)&~(ra>>(p=((c&ei)>>ea)-_i|0)))>>>0),c=(c&ra|na)>>ea-p>>>0,r<0&&(c=-c),n-=i),r=ri(r=fi(f=1-((f=(a=(i=Qe(i=t+n,0))*ia)+(u=(t-(i-n))*Qi+i*aa))*(e=f-(i=f*f)*(0===(v=i)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=u-(f-a))+f*o)-f))),(r+=c<<ea>>>0)>>ea<=0?Ki(f,c):Ei(f,r)}(h,s,p),o*l}function Na(r,n){var t,e,i,a;return i=(a=r*r)*a,e=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(t=.5*a))+(1-i-t+(a*e-r*n))}var ma=-.16666666666666632,Aa=.00833333333332249,Ea=-.0001984126982985795,_a=27557313707070068e-22,Ia=-2.5050760253406863e-8,Ua=1.58969099521155e-10;function Sa(r,n){var t,e,i;return t=Aa+(i=r*r)*(Ea+i*_a)+i*(i*i)*(Ia+i*Ua),e=i*r,0===n?r+e*(ma+i*t):r-(i*(.5*n-e*t)-n-e*ma)}var ka=!0===Ce?0:1,xa=new fr(1),ja=new er(xa.buffer);function Fa(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Oa=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ta=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ha=16777216,Va=5.960464477539063e-8,Ga=Fa(20),Wa=Fa(20),La=Fa(20),Ma=Fa(20);function Ra(r,n,t,e,i,a,u,o,f){var c,s,p,v,l,h,w,y,g;for(v=a,g=e[t],y=t,l=0;y>0;l++)s=Va*g|0,Ma[l]=g-Ha*s|0,g=e[y-1]+s,y-=1;if(g=Ki(g,i),g-=8*Cr(.125*g),g-=w=0|g,p=0,i>0?(w+=l=Ma[t-1]>>24-i,Ma[t-1]-=l<<24-i,p=Ma[t-1]>>23-i):0===i?p=Ma[t-1]>>23:g>=.5&&(p=2),p>0){for(w+=1,c=0,l=0;l<t;l++)y=Ma[l],0===c?0!==y&&(c=1,Ma[l]=16777216-y):Ma[l]=16777215-y;if(i>0)switch(i){case 1:Ma[t-1]&=8388607;break;case 2:Ma[t-1]&=4194303}2===p&&(g=1-g,0!==c&&(g-=Ki(1,i)))}if(0===g){for(y=0,l=t-1;l>=a;l--)y|=Ma[l];if(0===y){for(h=1;0===Ma[a-h];h++);for(l=t+1;l<=t+h;l++){for(f[o+l]=Oa[u+l],s=0,y=0;y<=o;y++)s+=r[y]*f[o+(l-y)];e[l]=s}return Ra(r,n,t+=h,e,i,a,u,o,f)}}if(0===g)for(t-=1,i-=24;0===Ma[t];)t-=1,i-=24;else(g=Ki(g,-i))>=Ha?(s=Va*g|0,Ma[t]=g-Ha*s|0,i+=24,Ma[t+=1]=s):Ma[t]=0|g;for(s=Ki(1,i),l=t;l>=0;l--)e[l]=s*Ma[l],s*=Va;for(l=t;l>=0;l--){for(s=0,h=0;h<=v&&h<=t-l;h++)s+=Ta[h]*e[l+h];La[t-l]=s}for(s=0,l=t;l>=0;l--)s+=La[l];for(n[0]=0===p?s:-s,s=La[0]-s,l=1;l<=t;l++)s+=La[l];return n[1]=0===p?s:-s,7&w}function $a(r,n,t,e){var i,a,u,o,f,c,s;for(4,(a=(t-3)/24|0)<0&&(a=0),o=t-24*(a+1),c=a-(u=e-1),s=u+4,f=0;f<=s;f++)Ga[f]=c<0?0:Oa[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=u;c++)i+=r[c]*Ga[u+(f-c)];Wa[f]=i}return 4,Ra(r,n,4,Wa,o,4,a,u,Ga)}var Ca=Math.round,Pa=.6366197723675814,qa=1.5707963267341256,Za=6077100506506192e-26,Xa=6077100506303966e-26,Ya=20222662487959506e-37,za=20222662487111665e-37,Da=84784276603689e-45,Ba=2047;function Ja(r,n,t){var e,i,a,u,o;return a=r-(e=Ca(r*Pa))*qa,u=e*Za,o=n>>20|0,t[0]=a-u,o-(fi(t[0])>>20&Ba)>16&&(u=e*Ya-((i=a)-(a=i-(u=e*Xa))-u),t[0]=a-u,o-(fi(t[0])>>20&Ba)>49&&(u=e*Da-((i=a)-(a=i-(u=e*za))-u),t[0]=a-u)),t[1]=a-t[0]-u,e}var Ka=0,Qa=16777216,ru=1.5707963267341256,nu=6077100506506192e-26,tu=2*nu,eu=3*nu,iu=4*nu,au=598523,uu=1072243195,ou=1073928572,fu=1074752122,cu=1074977148,su=1075183036,pu=1075388923,vu=1075594811,lu=1094263291,hu=[0,0,0],wu=[0,0];function yu(r,n){var t,e,i,a,u,o,f;if((i=fi(r)&ei|0)<=uu)return n[0]=r,n[1]=0,0;if(i<=fu)return(i&ra)===au?Ja(r,i,n):i<=ou?r>0?(f=r-ru,n[0]=f-nu,n[1]=f-n[0]-nu,1):(f=r+ru,n[0]=f+nu,n[1]=f-n[0]+nu,-1):r>0?(f=r-2*ru,n[0]=f-tu,n[1]=f-n[0]-tu,2):(f=r+2*ru,n[0]=f+tu,n[1]=f-n[0]+tu,-2);if(i<=vu)return i<=su?i===cu?Ja(r,i,n):r>0?(f=r-3*ru,n[0]=f-eu,n[1]=f-n[0]-eu,3):(f=r+3*ru,n[0]=f+eu,n[1]=f-n[0]+eu,-3):i===pu?Ja(r,i,n):r>0?(f=r-4*ru,n[0]=f-iu,n[1]=f-n[0]-iu,4):(f=r+4*ru,n[0]=f+iu,n[1]=f-n[0]+iu,-4);if(i<lu)return Ja(r,i,n);if(i>=Yi)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return xa[0]=r,ja[ka]}(r),f=hi(i-((e=(i>>20)-1046)<<20|0),t),u=0;u<2;u++)hu[u]=0|f,f=(f-hu[u])*Qa;for(hu[2]=f,a=3;hu[a-1]===Ka;)a-=1;return o=$a(hu,wu,e,a),r<0?(n[0]=-wu[0],n[1]=-wu[1],-o):(n[0]=wu[0],n[1]=wu[1],o)}var gu=1072243195,bu=1045430272,du=[0,0];function Nu(r){var n;if(n=fi(r),(n&=ei)<=gu)return n<bu?r:Sa(r,0);if(n>=Yi)return NaN;switch(3&yu(r,du)){case 0:return Sa(du[0],du[1]);case 1:return Na(du[0],du[1]);case 2:return-Sa(du[0],du[1]);default:return-Na(du[0],du[1])}}var mu=1.5707963267948966;function Au(r,n,t){return K(n)||K(t)||n>=t||K(r)||r<0||r>1?NaN:n+da(Nu(mu*r),2)*(t-n)}function Eu(){var r,n=arguments,t="https://stdlib.io/e/"+n[0]+"?";for(r=1;r<n.length;r++)t+="&arg[]="+encodeURIComponent(n[r]);return t}function _u(){var r,n;if(!(this instanceof _u))return 0===arguments.length?new _u:new _u(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!M(r=arguments[0])||K(r))throw new TypeError(Eu("0u18a",r));if(!M(n)||K(n))throw new TypeError(Eu("0u18b",n));if(r>=n)throw new RangeError(Eu("0u1DV",r,n))}else r=0,n=1;return G(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!M(t)||K(t))throw new TypeError(Eu("0u18d",t));if(t>=n)throw new RangeError(Eu("0u18e",n,t));r=t}}),G(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(t){if(!M(t)||K(t))throw new TypeError(Eu("0u18d",t));if(t<=r)throw new RangeError(Eu("0u18f",r,t));n=t}}),this}W(Au,"factory",(function(r,n){return K(r)||K(n)||r>=n?(t=NaN,function(){return t}):function(t){if(K(t)||t<0||t>1)return NaN;return r+da(Nu(mu*t),2)*(n-r)};var t})),L(_u.prototype,"entropy",(function(){return r=this.a,n=this.b,K(r)||K(n)||r>=n?NaN:$r+Mr(n-r);var r,n})),L(_u.prototype,"kurtosis",(function(){return r=this.a,n=this.b,K(r)||K(n)||r>=n?NaN:-1.5;var r,n})),L(_u.prototype,"mean",(function(){return r=this.a,n=this.b,r>=n?NaN:.5*(r+n);var r,n})),L(_u.prototype,"median",(function(){return r=this.a,n=this.b,r>=n?NaN:.5*(r+n);var r,n})),L(_u.prototype,"mode",(function(){return r=this.a,n=this.b,K(r)||K(n)||r>=n?NaN:r;var r,n})),L(_u.prototype,"skewness",(function(){return r=this.a,n=this.b,K(r)||K(n)||r>=n?NaN:0;var r,n})),L(_u.prototype,"stdev",(function(){return r=this.a,n=this.b,r>=n?NaN:.35355339059327373*(n-r);var r,n})),L(_u.prototype,"variance",(function(){return r=this.a,n=this.b,r>=n?NaN:.125*Ot(n-r,2);var r,n})),W(_u.prototype,"cdf",(function(r){return Mt(r,this.a,this.b)})),W(_u.prototype,"logcdf",(function(r){return ce(r,this.a,this.b)})),W(_u.prototype,"logpdf",(function(r){return je(r,this.a,this.b)})),W(_u.prototype,"pdf",(function(r){return Te(r,this.a,this.b)})),W(_u.prototype,"quantile",(function(r){return Au(r,this.a,this.b)}));export{_u as default};
//# sourceMappingURL=mod.js.map