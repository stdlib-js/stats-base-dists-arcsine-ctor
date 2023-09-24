// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,y=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,l=/e\+(\d)$/,v=/e-(\d)$/,w=/^(\d+)$/,h=/^(\d+)e/,A=/\.0$/,d=/\.0*e/,b=/(\..*[^0])0*e/;function g(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=s.call(e,b,"$1e"),e=s.call(e,d,"e"),e=s.call(e,A,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=s.call(e,l,"e+0$1"),e=s.call(e,v,"e-0$1"),r.alternate&&(e=s.call(e,w,"$1."),e=s.call(e,h,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):y.call(e)}function U(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function N(r,n,t){var e=n-r.length;return e<0?r:r=t?r+U(e):U(e)+r}var m=String.fromCharCode,E=isNaN,F=Array.isArray;function I(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function j(r){var n,t,e,o,a,c,y,p,s;if(!F(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",y=1,p=0;p<r.length;p++)if(f(e=r[p]))c+=e;else{if(n=void 0!==e.precision,!(e=I(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(y=e.mapping),t=e.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[y],10),y+=1,E(e.width))throw new TypeError("the argument for * width at position "+y+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[y],10),y+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+y+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[y],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):m(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=g(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=N(e.arg,e.width,e.padRight)),c+=e.arg||"",y+=1}return c}var _=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function H(r){var n,t,e,i;for(t=[],i=0,e=_.exec(r);e;)(n=r.slice(i,_.lastIndex-e[0].length)).length&&t.push(n),t.push(T(e)),i=_.lastIndex,e=_.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function S(r){return"string"==typeof r}function x(r){var n,t,e;if(!S(r))throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=H(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return j.apply(null,t)}var k=Object.prototype,O=k.toString,V=k.__defineGetter__,G=k.__defineSetter__,M=k.__lookupGetter__,W=k.__lookupSetter__,L=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(M.call(r,n)||W.call(r,n)?(e=r.__proto__,r.__proto__=k,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(r,n,t.get),a&&G&&G.call(r,n,t.set),r};function R(r,n,t){L(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function $(r,n,t){L(r,n,{configurable:!1,enumerable:!1,get:t})}function P(r){return"number"==typeof r}var C="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return C&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString,Z=Object.prototype.hasOwnProperty,X="function"==typeof Symbol?Symbol:void 0,z="function"==typeof X?X.toStringTag:"",B=q()?function(r){var n,t,e,i,o;if(null==r)return Y.call(r);t=r[z],o=z,n=null!=(i=r)&&Z.call(i,o);try{r[z]=void 0}catch(n){return Y.call(r)}return e=Y.call(r),n?r[z]=t:delete r[z],e}:function(r){return Y.call(r)},D=Number,J=D.prototype.toString,K=q();function Q(r){return"object"==typeof r&&(r instanceof D||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===B(r)))}function rr(r){return P(r)||Q(r)}function nr(r){return r!=r}R(rr,"isPrimitive",P),R(rr,"isObject",Q);var tr,er="function"==typeof Uint32Array,ir="function"==typeof Uint32Array?Uint32Array:null,or="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,n,t;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(er&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ar,ur=tr,fr="function"==typeof Float64Array,cr="function"==typeof Float64Array?Float64Array:null,yr="function"==typeof Float64Array?Float64Array:void 0;ar=function(){var r,n,t;if("function"!=typeof cr)return!1;try{n=new cr([1,3.14,-3.14,NaN]),t=n,r=(fr&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var pr,sr=ar,lr="function"==typeof Uint8Array,vr="function"==typeof Uint8Array?Uint8Array:null,wr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,n,t;if("function"!=typeof vr)return!1;try{n=new vr(n=[1,3.14,-3.14,256,257]),t=n,r=(lr&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var hr,Ar=pr,dr="function"==typeof Uint16Array,br="function"==typeof Uint16Array?Uint16Array:null,gr="function"==typeof Uint16Array?Uint16Array:void 0;hr=function(){var r,n,t;if("function"!=typeof br)return!1;try{n=new br(n=[1,3.14,-3.14,65536,65537]),t=n,r=(dr&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var Ur,Nr={uint16:hr,uint8:Ar};(Ur=new Nr.uint16(1))[0]=4660;var mr=52===new Nr.uint8(Ur.buffer)[0],Er=!0===mr?1:0,Fr=new sr(1),Ir=new ur(Fr.buffer);function jr(r){return Fr[0]=r,Ir[Er]}var _r=!0===mr?1:0,Tr=new sr(1),Hr=new ur(Tr.buffer),Sr=D.NEGATIVE_INFINITY,xr=.6931471803691238,kr=1.9082149292705877e-10,Or=1048575;function Vr(r){var n,t,e,i,o,a,u,f,c,y,p,s;return 0===r?Sr:nr(r)||r<0?NaN:(o=0,(t=jr(r))<1048576&&(o-=54,t=jr(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(f=614244+(t&=Or)&1048576|0)>>20|0,u=(r=function(r,n){return Tr[0]=r,Hr[_r]=n>>>0,Tr[0]}(r,t|1072693248^f))-1,(Or&2+t)<3?0===u?0===o?0:o*xr+o*kr:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*xr-(a-o*kr-u)):(f=t-398458|0,c=440401-t|0,i=(p=(s=(y=u/(2+u))*y)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-y*(n+a)):o*xr-(n-(y*(n+a)+o*kr)-u)):0===o?u-y*(u-a):o*xr-(y*(u-a)-o*kr-u))))}var Gr=.7853981633974483,Mr=Vr(Gr),Wr=Math.floor;function Lr(r){return Wr(r)===r}function Rr(r){return Lr(r/2)}function $r(r){return Rr(r>0?r-1:r+1)}var Pr=Number.POSITIVE_INFINITY,Cr=D.NEGATIVE_INFINITY;function qr(r){return r===Pr||r===Cr}var Yr=Math.sqrt;function Zr(r){return Math.abs(r)}var Xr,zr="function"==typeof Uint32Array,Br="function"==typeof Uint32Array?Uint32Array:null,Dr="function"==typeof Uint32Array?Uint32Array:void 0;Xr=function(){var r,n,t;if("function"!=typeof Br)return!1;try{n=new Br(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(zr&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Dr:function(){throw new Error("not implemented")};var Jr,Kr=Xr,Qr="function"==typeof Float64Array,rn="function"==typeof Float64Array?Float64Array:null,nn="function"==typeof Float64Array?Float64Array:void 0;Jr=function(){var r,n,t;if("function"!=typeof rn)return!1;try{n=new rn([1,3.14,-3.14,NaN]),t=n,r=(Qr&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?nn:function(){throw new Error("not implemented")};var tn,en=Jr,on="function"==typeof Uint8Array,an="function"==typeof Uint8Array?Uint8Array:null,un="function"==typeof Uint8Array?Uint8Array:void 0;tn=function(){var r,n,t;if("function"!=typeof an)return!1;try{n=new an(n=[1,3.14,-3.14,256,257]),t=n,r=(on&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?un:function(){throw new Error("not implemented")};var fn,cn=tn,yn="function"==typeof Uint16Array,pn="function"==typeof Uint16Array?Uint16Array:null,sn="function"==typeof Uint16Array?Uint16Array:void 0;fn=function(){var r,n,t;if("function"!=typeof pn)return!1;try{n=new pn(n=[1,3.14,-3.14,65536,65537]),t=n,r=(yn&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?sn:function(){throw new Error("not implemented")};var ln,vn={uint16:fn,uint8:cn};ln=function(){var r;return(r=new vn.uint16(1))[0]=4660,52===new vn.uint8(r.buffer)[0]}();var wn,hn,An=ln;!0===An?(wn=1,hn=0):(wn=0,hn=1);var dn={HIGH:wn,LOW:hn},bn=new en(1),gn=new Kr(bn.buffer),Un=dn.HIGH,Nn=dn.LOW;function mn(r,n,t,e){return bn[0]=r,n[e]=gn[Un],n[e+t]=gn[Nn],n}function En(r){return mn(r,[0,0],1,0)}R(En,"assign",mn);var Fn=!0===An?0:1,In=new en(1),jn=new Kr(In.buffer);function _n(r,n){return In[0]=r,jn[Fn]=n>>>0,In[0]}function Tn(r){return 0|r}var Hn,Sn,xn=2147483647,kn=!0===An?1:0,On=new en(1),Vn=new Kr(On.buffer);function Gn(r){return On[0]=r,Vn[kn]}!0===An?(Hn=1,Sn=0):(Hn=0,Sn=1);var Mn={HIGH:Hn,LOW:Sn},Wn=new en(1),Ln=new Kr(Wn.buffer),Rn=Mn.HIGH,$n=Mn.LOW;function Pn(r,n){return Ln[Rn]=r,Ln[$n]=n,Wn[0]}var Cn=[0,0];function qn(r,n){var t,e;return En.assign(r,Cn,1,0),t=Cn[0],t&=xn,e=Gn(n),Pn(t|=e&=2147483648,Cn[1])}var Yn=!0===An?1:0,Zn=new en(1),Xn=new Kr(Zn.buffer);function zn(r,n){return Zn[0]=r,Xn[Yn]=n>>>0,Zn[0]}var Bn=1023,Dn=1048576,Jn=[1,1.5],Kn=[0,.5849624872207642],Qn=[0,1.350039202129749e-8];function rt(r,n,t,e){return nr(r)||qr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Zr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}R((function(r){return rt(r,[0,0],1,0)}),"assign",rt);var nt=[0,0],tt=[0,0];function et(r,n){var t,e;return 0===n||0===r||nr(r)||qr(r)?r:(rt(r,nt,1,0),n+=nt[1],n+=function(r){var n=Gn(r);return(n=(2146435072&n)>>>20)-Bn|0}(r=nt[0]),n<-1074?qn(0,r):n>1023?r<0?Cr:Pr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,En.assign(r,tt,1,0),t=tt[0],t&=2148532223,e*Pn(t|=n+Bn<<20,tt[1])))}var it=1048575,ot=1048576,at=1083179008,ut=1e300,ft=1e-300,ct=[0,0],yt=[0,0];function pt(r,n){var t,e,i,o,a,u,f,c,y,p,s,l,v,w;if(nr(r)||nr(n))return NaN;if(En.assign(n,ct,1,0),a=ct[0],0===ct[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Yr(r);if(-.5===n)return 1/Yr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(qr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Zr(r)<1==(n===Pr)?0:Pr}(r,n)}if(En.assign(r,ct,1,0),o=ct[0],0===ct[1]){if(0===o)return function(r,n){return n===Cr?Pr:n===Pr?0:n>0?$r(n)?r:0:$r(n)?qn(Pr,r):Pr}(r,n);if(1===r)return 1;if(-1===r&&$r(n))return-1;if(qr(r))return r===Cr?pt(-0,-n):n<0?0:Pr}if(r<0&&!1===Lr(n))return(r-r)/(r-r);if(i=Zr(r),t=o&xn|0,e=a&xn|0,f=a>>>31|0,u=(u=o>>>31|0)&&$r(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(Gn(r)&xn)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*ut*ut:u*ft*ft;if(t>1072693248)return 0===f?u*ut*ut:u*ft*ft;s=function(r,n){var t,e,i,o,a,u;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=_n(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=t,r}(yt,i)}else s=function(r,n,t){var e,i,o,a,u,f,c,y,p,s,l,v,w,h,A,d,b,g,U,N,m;return g=0,t<Dn&&(g-=53,t=Gn(n*=9007199254740992)),g+=(t>>20)-Bn|0,t=1072693248|(U=1048575&t|0),U<=235662?N=0:U<767610?N=1:(N=0,g+=1,t-=Dn),a=_n(i=(d=(n=zn(n,t))-(c=Jn[N]))*(b=1/(n+c)),0),e=524288+(t>>1|536870912),f=zn(0,e+=N<<18),A=(o=i*i)*o*(0===(m=o)?.5999999999999946:.5999999999999946+m*(.4285714285785502+m*(.33333332981837743+m*(.272728123808534+m*(.23066074577556175+.20697501780033842*m))))),f=_n(f=3+(o=a*a)+(A+=(u=b*(d-a*f-a*(n-(f-c))))*(a+i)),0),w=(l=-7.028461650952758e-9*(p=_n(p=(d=a*f)+(b=u*f+(A-(f-3-o))*i),0))+.9617966939259756*(b-(p-d))+Qn[N])-((v=_n(v=(s=.9617967009544373*p)+l+(y=Kn[N])+(h=g),0))-h-y-s),r[0]=v,r[1]=w,r}(yt,i,t);if(l=(p=(n-(c=_n(n,0)))*s[0]+n*s[1])+(y=c*s[0]),En.assign(l,ct,1,0),v=Tn(ct[0]),w=Tn(ct[1]),v>=at){if(0!=(v-at|w))return u*ut*ut;if(p+8008566259537294e-32>l-y)return u*ut*ut}else if((v&xn)>=1083231232){if(0!=(v-3230714880|w))return u*ft*ft;if(p<=l-y)return u*ft*ft}return l=function(r,n,t){var e,i,o,a,u,f,c,y,p,s;return p=((y=r&xn|0)>>20)-Bn|0,c=0,y>1071644672&&(i=zn(0,((c=r+(ot>>p+1)>>>0)&~(it>>(p=((c&xn)>>20)-Bn|0)))>>>0),c=(c&it|ot)>>20-p>>>0,r<0&&(c=-c),n-=i),r=Tn(r=Gn(f=1-((f=(o=.6931471824645996*(i=_n(i=t+n,0)))+(a=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(s=i)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?et(f,c):zn(f,r)}(v,y,p),u*l}var st=Math.sqrt;function lt(r){var n,t,e,i,o;if(nr(r))return NaN;if(r>0?e=r:(n=!0,e=-r),e>1)return NaN;if(e>.625)i=(t=1-e)*function(r){var n,t;return 0===r?.08333333333333809:((r<0?-r:r)<=1?(n=28.536655482610616+r*(r*(6.968710824104713+r*(.002967721961301243*r-.5634242780008963))-25.56901049652825),t=342.43986579130785+r*(r*(147.0656354026815+r*(1*r-21.947795316429207))-383.8770957603691)):(n=.002967721961301243+(r=1/r)*(r*(6.968710824104713+r*(28.536655482610616*r-25.56901049652825))-.5634242780008963),t=1+r*(r*(147.0656354026815+r*(342.43986579130785*r-383.8770957603691))-21.947795316429207)),n/t)}(t),t=st(t+t),o=Gr-t,o-=t=t*i-6123233995736766e-32,o+=Gr;else{if(e<1e-8)return r;o=(t=e*e)*function(r){var n,t;return 0===r?.16666666666666713:((r<0?-r:r)<=1?(n=r*(19.562619833175948+r*(r*(5.444622390564711+r*(.004253011369004428*r-.6019598008014124))-16.262479672107002))-8.198089802484825,t=r*(139.51056146574857+r*(r*(70.49610280856842+r*(1*r-14.740913729888538))-147.1791292232726))-49.18853881490881):(n=.004253011369004428+(r=1/r)*(r*(5.444622390564711+r*(r*(19.562619833175948+-8.198089802484825*r)-16.262479672107002))-.6019598008014124),t=1+r*(r*(70.49610280856842+r*(r*(139.51056146574857+-49.18853881490881*r)-147.1791292232726))-14.740913729888538)),n/t)}(t),o=e*o+e}return n?-o:o}var vt=Math.sqrt;function wt(r,n,t){return nr(r)||nr(n)||nr(t)||n>=t?NaN:r<n?0:r>=t?1:.6366197723675814*lt(vt((r-n)/(t-n)))}R(wt,"factory",(function(r,n){return nr(r)||nr(n)||r>=n?(t=NaN,function(){return t}):function(t){return nr(t)?NaN:t<r?0:t>=n?1:.6366197723675814*lt(vt((t-r)/(n-r)))};var t}));var ht,At=Math.sqrt,dt="function"==typeof Uint32Array,bt="function"==typeof Uint32Array?Uint32Array:null,gt="function"==typeof Uint32Array?Uint32Array:void 0;ht=function(){var r,n,t;if("function"!=typeof bt)return!1;try{n=new bt(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(dt&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?gt:function(){throw new Error("not implemented")};var Ut,Nt=ht,mt="function"==typeof Float64Array,Et="function"==typeof Float64Array?Float64Array:null,Ft="function"==typeof Float64Array?Float64Array:void 0;Ut=function(){var r,n,t;if("function"!=typeof Et)return!1;try{n=new Et([1,3.14,-3.14,NaN]),t=n,r=(mt&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Ft:function(){throw new Error("not implemented")};var It,jt=Ut,_t="function"==typeof Uint8Array,Tt="function"==typeof Uint8Array?Uint8Array:null,Ht="function"==typeof Uint8Array?Uint8Array:void 0;It=function(){var r,n,t;if("function"!=typeof Tt)return!1;try{n=new Tt(n=[1,3.14,-3.14,256,257]),t=n,r=(_t&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Ht:function(){throw new Error("not implemented")};var St,xt=It,kt="function"==typeof Uint16Array,Ot="function"==typeof Uint16Array?Uint16Array:null,Vt="function"==typeof Uint16Array?Uint16Array:void 0;St=function(){var r,n,t;if("function"!=typeof Ot)return!1;try{n=new Ot(n=[1,3.14,-3.14,65536,65537]),t=n,r=(kt&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Vt:function(){throw new Error("not implemented")};var Gt,Mt={uint16:St,uint8:xt};Gt=function(){var r;return(r=new Mt.uint16(1))[0]=4660,52===new Mt.uint8(r.buffer)[0]}();var Wt=Gt,Lt=!0===Wt?1:0,Rt=new jt(1),$t=new Nt(Rt.buffer);function Pt(r){return Rt[0]=r,$t[Lt]}var Ct=!0===Wt?1:0,qt=new jt(1),Yt=new Nt(qt.buffer),Zt=D.NEGATIVE_INFINITY,Xt=.6931471803691238,zt=1.9082149292705877e-10,Bt=1048575;function Dt(r){var n,t,e,i,o,a,u,f,c,y,p,s;return 0===r?Zt:nr(r)||r<0?NaN:(o=0,(t=Pt(r))<1048576&&(o-=54,t=Pt(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(f=614244+(t&=Bt)&1048576|0)>>20|0,u=(r=function(r,n){return qt[0]=r,Yt[Ct]=n>>>0,qt[0]}(r,t|1072693248^f))-1,(Bt&2+t)<3?0===u?0===o?0:o*Xt+o*zt:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*Xt-(a-o*zt-u)):(f=t-398458|0,c=440401-t|0,i=(p=(s=(y=u/(2+u))*y)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-y*(n+a)):o*Xt-(n-(y*(n+a)+o*zt)-u)):0===o?u-y*(u-a):o*Xt-(y*(u-a)-o*zt-u))))}var Jt=1.1447298858494002,Kt=.6931471805599453;function Qt(r,n,t){return nr(r)||nr(n)||nr(t)||n>=t?NaN:r<n?Zt:r>=t?0:Kt-Jt+Dt(lt(At((r-n)/(t-n))))}R(Qt,"factory",(function(r,n){return nr(r)||nr(n)||r>=n?(t=NaN,function(){return t}):function(t){return nr(t)?NaN:t<r?Zt:t>=n?0:Kt-Jt+Dt(lt(At((t-r)/(n-r))))};var t}));var re,ne="function"==typeof Uint32Array,te="function"==typeof Uint32Array?Uint32Array:null,ee="function"==typeof Uint32Array?Uint32Array:void 0;re=function(){var r,n,t;if("function"!=typeof te)return!1;try{n=new te(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ne&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ee:function(){throw new Error("not implemented")};var ie,oe=re,ae="function"==typeof Float64Array,ue="function"==typeof Float64Array?Float64Array:null,fe="function"==typeof Float64Array?Float64Array:void 0;ie=function(){var r,n,t;if("function"!=typeof ue)return!1;try{n=new ue([1,3.14,-3.14,NaN]),t=n,r=(ae&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?fe:function(){throw new Error("not implemented")};var ce,ye=ie,pe="function"==typeof Uint8Array,se="function"==typeof Uint8Array?Uint8Array:null,le="function"==typeof Uint8Array?Uint8Array:void 0;ce=function(){var r,n,t;if("function"!=typeof se)return!1;try{n=new se(n=[1,3.14,-3.14,256,257]),t=n,r=(pe&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?le:function(){throw new Error("not implemented")};var ve,we=ce,he="function"==typeof Uint16Array,Ae="function"==typeof Uint16Array?Uint16Array:null,de="function"==typeof Uint16Array?Uint16Array:void 0;ve=function(){var r,n,t;if("function"!=typeof Ae)return!1;try{n=new Ae(n=[1,3.14,-3.14,65536,65537]),t=n,r=(he&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?de:function(){throw new Error("not implemented")};var be,ge={uint16:ve,uint8:we};be=function(){var r;return(r=new ge.uint16(1))[0]=4660,52===new ge.uint8(r.buffer)[0]}();var Ue=be,Ne=!0===Ue?1:0,me=new ye(1),Ee=new oe(me.buffer);function Fe(r){return me[0]=r,Ee[Ne]}var Ie=!0===Ue?1:0,je=new ye(1),_e=new oe(je.buffer),Te=D.NEGATIVE_INFINITY,He=.6931471803691238,Se=1.9082149292705877e-10,xe=1048575;function ke(r){var n,t,e,i,o,a,u,f,c,y,p,s;return 0===r?Te:nr(r)||r<0?NaN:(o=0,(t=Fe(r))<1048576&&(o-=54,t=Fe(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(f=614244+(t&=xe)&1048576|0)>>20|0,u=(r=function(r,n){return je[0]=r,_e[Ie]=n>>>0,je[0]}(r,t|1072693248^f))-1,(xe&2+t)<3?0===u?0===o?0:o*He+o*Se:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*He-(a-o*Se-u)):(f=t-398458|0,c=440401-t|0,i=(p=(s=(y=u/(2+u))*y)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-y*(n+a)):o*He-(n-(y*(n+a)+o*Se)-u)):0===o?u-y*(u-a):o*He-(y*(u-a)-o*Se-u))))}function Oe(r,n,t){return nr(r)||nr(n)||nr(t)||n>=t?NaN:r<n||r>t?Te:-(Jt+ke((r-n)*(t-r))/2)}R(Oe,"factory",(function(r,n){return nr(r)||nr(n)||r>=n?(t=NaN,function(){return t}):function(t){return nr(t)?NaN:t<r||t>n?Te:-(Jt+ke((t-r)*(n-t))/2)};var t}));var Ve=Math.sqrt,Ge=3.141592653589793;function Me(r,n,t){return nr(r)||nr(n)||nr(t)||n>=t?NaN:r<n||r>t?0:1/(Ge*Ve((r-n)*(t-r)))}R(Me,"factory",(function(r,n){return nr(r)||nr(n)||r>=n?(t=NaN,function(){return t}):function(t){return nr(t)?NaN:t<r||t>n?0:1/(Ge*Ve((t-r)*(n-t)))};var t}));var We=Math.floor;function Le(r){return We(r)===r}function Re(r){return Le(r/2)}function $e(r){return Re(r>0?r-1:r+1)}var Pe=Number.POSITIVE_INFINITY,Ce=D.NEGATIVE_INFINITY;function qe(r){return r===Pe||r===Ce}var Ye=Math.sqrt;function Ze(r){return Math.abs(r)}var Xe,ze="function"==typeof Uint32Array,Be="function"==typeof Uint32Array?Uint32Array:null,De="function"==typeof Uint32Array?Uint32Array:void 0;Xe=function(){var r,n,t;if("function"!=typeof Be)return!1;try{n=new Be(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ze&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?De:function(){throw new Error("not implemented")};var Je,Ke=Xe,Qe="function"==typeof Float64Array,ri="function"==typeof Float64Array?Float64Array:null,ni="function"==typeof Float64Array?Float64Array:void 0;Je=function(){var r,n,t;if("function"!=typeof ri)return!1;try{n=new ri([1,3.14,-3.14,NaN]),t=n,r=(Qe&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?ni:function(){throw new Error("not implemented")};var ti,ei=Je,ii="function"==typeof Uint8Array,oi="function"==typeof Uint8Array?Uint8Array:null,ai="function"==typeof Uint8Array?Uint8Array:void 0;ti=function(){var r,n,t;if("function"!=typeof oi)return!1;try{n=new oi(n=[1,3.14,-3.14,256,257]),t=n,r=(ii&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ai:function(){throw new Error("not implemented")};var ui,fi=ti,ci="function"==typeof Uint16Array,yi="function"==typeof Uint16Array?Uint16Array:null,pi="function"==typeof Uint16Array?Uint16Array:void 0;ui=function(){var r,n,t;if("function"!=typeof yi)return!1;try{n=new yi(n=[1,3.14,-3.14,65536,65537]),t=n,r=(ci&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?pi:function(){throw new Error("not implemented")};var si,li={uint16:ui,uint8:fi};si=function(){var r;return(r=new li.uint16(1))[0]=4660,52===new li.uint8(r.buffer)[0]}();var vi,wi,hi=si;!0===hi?(vi=1,wi=0):(vi=0,wi=1);var Ai={HIGH:vi,LOW:wi},di=new ei(1),bi=new Ke(di.buffer),gi=Ai.HIGH,Ui=Ai.LOW;function Ni(r,n,t,e){return di[0]=r,n[e]=bi[gi],n[e+t]=bi[Ui],n}function mi(r){return Ni(r,[0,0],1,0)}R(mi,"assign",Ni);var Ei=!0===hi?0:1,Fi=new ei(1),Ii=new Ke(Fi.buffer);function ji(r,n){return Fi[0]=r,Ii[Ei]=n>>>0,Fi[0]}function _i(r){return 0|r}var Ti,Hi,Si=2147483647,xi=!0===hi?1:0,ki=new ei(1),Oi=new Ke(ki.buffer);function Vi(r){return ki[0]=r,Oi[xi]}!0===hi?(Ti=1,Hi=0):(Ti=0,Hi=1);var Gi={HIGH:Ti,LOW:Hi},Mi=new ei(1),Wi=new Ke(Mi.buffer),Li=Gi.HIGH,Ri=Gi.LOW;function $i(r,n){return Wi[Li]=r,Wi[Ri]=n,Mi[0]}var Pi=[0,0];function Ci(r,n){var t,e;return mi.assign(r,Pi,1,0),t=Pi[0],t&=Si,e=Vi(n),$i(t|=e&=2147483648,Pi[1])}var qi=!0===hi?1:0,Yi=new ei(1),Zi=new Ke(Yi.buffer);function Xi(r,n){return Yi[0]=r,Zi[qi]=n>>>0,Yi[0]}var zi=1023,Bi=1048576,Di=[1,1.5],Ji=[0,.5849624872207642],Ki=[0,1.350039202129749e-8];function Qi(r,n,t,e){return nr(r)||qe(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Ze(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}R((function(r){return Qi(r,[0,0],1,0)}),"assign",Qi);var ro=2146435072,no=[0,0],to=[0,0];function eo(r,n){var t,e;return 0===n||0===r||nr(r)||qe(r)?r:(Qi(r,no,1,0),n+=no[1],n+=function(r){var n=Vi(r);return(n=(n&ro)>>>20)-zi|0}(r=no[0]),n<-1074?Ci(0,r):n>1023?r<0?Ce:Pe:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,mi.assign(r,to,1,0),t=to[0],t&=2148532223,e*$i(t|=n+zi<<20,to[1])))}var io=1048575,oo=1048576,ao=1083179008,uo=1e300,fo=1e-300,co=[0,0],yo=[0,0];function po(r,n){var t,e,i,o,a,u,f,c,y,p,s,l,v,w;if(nr(r)||nr(n))return NaN;if(mi.assign(n,co,1,0),a=co[0],0===co[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Ye(r);if(-.5===n)return 1/Ye(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(qe(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Ze(r)<1==(n===Pe)?0:Pe}(r,n)}if(mi.assign(r,co,1,0),o=co[0],0===co[1]){if(0===o)return function(r,n){return n===Ce?Pe:n===Pe?0:n>0?$e(n)?r:0:$e(n)?Ci(Pe,r):Pe}(r,n);if(1===r)return 1;if(-1===r&&$e(n))return-1;if(qe(r))return r===Ce?po(-0,-n):n<0?0:Pe}if(r<0&&!1===Le(n))return(r-r)/(r-r);if(i=Ze(r),t=o&Si|0,e=a&Si|0,f=a>>>31|0,u=(u=o>>>31|0)&&$e(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(Vi(r)&Si)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*uo*uo:u*fo*fo;if(t>1072693248)return 0===f?u*uo*uo:u*fo*fo;s=function(r,n){var t,e,i,o,a,u;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=ji(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=t,r}(yo,i)}else s=function(r,n,t){var e,i,o,a,u,f,c,y,p,s,l,v,w,h,A,d,b,g,U,N,m;return g=0,t<Bi&&(g-=53,t=Vi(n*=9007199254740992)),g+=(t>>20)-zi|0,t=1072693248|(U=1048575&t|0),U<=235662?N=0:U<767610?N=1:(N=0,g+=1,t-=Bi),a=ji(i=(d=(n=Xi(n,t))-(c=Di[N]))*(b=1/(n+c)),0),e=524288+(t>>1|536870912),f=Xi(0,e+=N<<18),A=(o=i*i)*o*(0===(m=o)?.5999999999999946:.5999999999999946+m*(.4285714285785502+m*(.33333332981837743+m*(.272728123808534+m*(.23066074577556175+.20697501780033842*m))))),f=ji(f=3+(o=a*a)+(A+=(u=b*(d-a*f-a*(n-(f-c))))*(a+i)),0),w=(l=-7.028461650952758e-9*(p=ji(p=(d=a*f)+(b=u*f+(A-(f-3-o))*i),0))+.9617966939259756*(b-(p-d))+Ki[N])-((v=ji(v=(s=.9617967009544373*p)+l+(y=Ji[N])+(h=g),0))-h-y-s),r[0]=v,r[1]=w,r}(yo,i,t);if(l=(p=(n-(c=ji(n,0)))*s[0]+n*s[1])+(y=c*s[0]),mi.assign(l,co,1,0),v=_i(co[0]),w=_i(co[1]),v>=ao){if(0!=(v-ao|w))return u*uo*uo;if(p+8008566259537294e-32>l-y)return u*uo*uo}else if((v&Si)>=1083231232){if(0!=(v-3230714880|w))return u*fo*fo;if(p<=l-y)return u*fo*fo}return l=function(r,n,t){var e,i,o,a,u,f,c,y,p,s;return p=((y=r&Si|0)>>20)-zi|0,c=0,y>1071644672&&(i=Xi(0,((c=r+(oo>>p+1)>>>0)&~(io>>(p=((c&Si)>>20)-zi|0)))>>>0),c=(c&io|oo)>>20-p>>>0,r<0&&(c=-c),n-=i),r=_i(r=Vi(f=1-((f=(o=.6931471824645996*(i=ji(i=t+n,0)))+(a=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(s=i)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?eo(f,c):Xi(f,r)}(v,y,p),u*l}function so(r,n){var t,e,i,o;return i=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(t=.5*o))+(1-i-t+(o*e-r*n))}var lo=-.16666666666666632;function vo(r,n){var t,e,i;return t=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),e=i*r,0===n?r+e*(lo+i*t):r-(i*(.5*n-e*t)-n-e*lo)}var wo=!0===hi?0:1,ho=new ei(1),Ao=new Ke(ho.buffer);function bo(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var go=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Uo=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],No=16777216,mo=5.960464477539063e-8,Eo=bo(20),Fo=bo(20),Io=bo(20),jo=bo(20);function _o(r,n,t,e,i,o,a,u,f){var c,y,p,s,l,v,w,h,A;for(s=o,A=e[t],h=t,l=0;h>0;l++)y=mo*A|0,jo[l]=A-No*y|0,A=e[h-1]+y,h-=1;if(A=eo(A,i),A-=8*We(.125*A),A-=w=0|A,p=0,i>0?(w+=l=jo[t-1]>>24-i,jo[t-1]-=l<<24-i,p=jo[t-1]>>23-i):0===i?p=jo[t-1]>>23:A>=.5&&(p=2),p>0){for(w+=1,c=0,l=0;l<t;l++)h=jo[l],0===c?0!==h&&(c=1,jo[l]=16777216-h):jo[l]=16777215-h;if(i>0)switch(i){case 1:jo[t-1]&=8388607;break;case 2:jo[t-1]&=4194303}2===p&&(A=1-A,0!==c&&(A-=eo(1,i)))}if(0===A){for(h=0,l=t-1;l>=o;l--)h|=jo[l];if(0===h){for(v=1;0===jo[o-v];v++);for(l=t+1;l<=t+v;l++){for(f[u+l]=go[a+l],y=0,h=0;h<=u;h++)y+=r[h]*f[u+(l-h)];e[l]=y}return _o(r,n,t+=v,e,i,o,a,u,f)}}if(0===A)for(t-=1,i-=24;0===jo[t];)t-=1,i-=24;else(A=eo(A,-i))>=No?(y=mo*A|0,jo[t]=A-No*y|0,i+=24,jo[t+=1]=y):jo[t]=0|A;for(y=eo(1,i),l=t;l>=0;l--)e[l]=y*jo[l],y*=mo;for(l=t;l>=0;l--){for(y=0,v=0;v<=s&&v<=t-l;v++)y+=Uo[v]*e[l+v];Io[t-l]=y}for(y=0,l=t;l>=0;l--)y+=Io[l];for(n[0]=0===p?y:-y,y=Io[0]-y,l=1;l<=t;l++)y+=Io[l];return n[1]=0===p?y:-y,7&w}function To(r,n,t,e){var i,o,a,u,f,c,y;for((o=(t-3)/24|0)<0&&(o=0),u=t-24*(o+1),c=o-(a=e-1),y=a+4,f=0;f<=y;f++)Eo[f]=c<0?0:go[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=r[c]*Eo[a+(f-c)];Fo[f]=i}return _o(r,n,4,Fo,u,4,o,a,Eo)}var Ho=Math.round;function So(r,n,t){var e,i,o,a,u;return o=r-1.5707963267341256*(e=Ho(.6366197723675814*r)),a=6077100506506192e-26*e,u=n>>20|0,t[0]=o-a,u-(Vi(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((i=o)-(o=i-(a=6077100506303966e-26*e))-a),t[0]=o-a,u-(Vi(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((i=o)-(o=i-(a=20222662487111665e-37*e))-a),t[0]=o-a)),t[1]=o-t[0]-a,e}var xo=1.5707963267341256,ko=6077100506506192e-26,Oo=2*ko,Vo=3*ko,Go=4*ko,Mo=[0,0,0],Wo=[0,0];function Lo(r,n){var t,e,i,o,a,u,f;if((i=Vi(r)&Si|0)<=1072243195)return n[0]=r,n[1]=0,0;if(i<=1074752122)return 598523==(i&io)?So(r,i,n):i<=1073928572?r>0?(f=r-xo,n[0]=f-ko,n[1]=f-n[0]-ko,1):(f=r+xo,n[0]=f+ko,n[1]=f-n[0]+ko,-1):r>0?(f=r-2*xo,n[0]=f-Oo,n[1]=f-n[0]-Oo,2):(f=r+2*xo,n[0]=f+Oo,n[1]=f-n[0]+Oo,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?So(r,i,n):r>0?(f=r-3*xo,n[0]=f-Vo,n[1]=f-n[0]-Vo,3):(f=r+3*xo,n[0]=f+Vo,n[1]=f-n[0]+Vo,-3):1075388923===i?So(r,i,n):r>0?(f=r-4*xo,n[0]=f-Go,n[1]=f-n[0]-Go,4):(f=r+4*xo,n[0]=f+Go,n[1]=f-n[0]+Go,-4);if(i<1094263291)return So(r,i,n);if(i>=ro)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return ho[0]=r,Ao[wo]}(r),f=$i(i-((e=(i>>20)-1046)<<20|0),t),a=0;a<2;a++)Mo[a]=0|f,f=16777216*(f-Mo[a]);for(Mo[2]=f,o=3;0===Mo[o-1];)o-=1;return u=To(Mo,Wo,e,o),r<0?(n[0]=-Wo[0],n[1]=-Wo[1],-u):(n[0]=Wo[0],n[1]=Wo[1],u)}var Ro=[0,0];function $o(r){var n;if(n=Vi(r),(n&=Si)<=1072243195)return n<1045430272?r:vo(r,0);if(n>=ro)return NaN;switch(3&Lo(r,Ro)){case 0:return vo(Ro[0],Ro[1]);case 1:return so(Ro[0],Ro[1]);case 2:return-vo(Ro[0],Ro[1]);default:return-so(Ro[0],Ro[1])}}var Po=1.5707963267948966;function Co(r,n,t){return nr(n)||nr(t)||n>=t||nr(r)||r<0||r>1?NaN:n+po($o(Po*r),2)*(t-n)}function qo(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}function Yo(){var r,n;if(!(this instanceof Yo))return 0===arguments.length?new Yo:new Yo(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!P(r=arguments[0])||nr(r))throw new TypeError(qo("0u18a,H5",r));if(!P(n)||nr(n))throw new TypeError(qo("0u18b,H6",n));if(r>=n)throw new RangeError(qo("0u1H7",r,n))}else r=0,n=1;return L(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!P(t)||nr(t))throw new TypeError(qo("0u18d,H8",t));if(t>=n)throw new RangeError(qo("0u18e,H9",n,t));r=t}}),L(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(t){if(!P(t)||nr(t))throw new TypeError(qo("0u18d,H8",t));if(t<=r)throw new RangeError(qo("0u18f,HA",r,t));n=t}}),this}return R(Co,"factory",(function(r,n){return nr(r)||nr(n)||r>=n?(t=NaN,function(){return t}):function(t){return nr(t)||t<0||t>1?NaN:r+po($o(Po*t),2)*(n-r)};var t})),$(Yo.prototype,"entropy",(function(){return r=this.a,n=this.b,nr(r)||nr(n)||r>=n?NaN:Mr+Vr(n-r);var r,n})),$(Yo.prototype,"kurtosis",(function(){return r=this.a,n=this.b,nr(r)||nr(n)||r>=n?NaN:-1.5;var r,n})),$(Yo.prototype,"mean",(function(){return r=this.a,n=this.b,r>=n?NaN:.5*(r+n);var r,n})),$(Yo.prototype,"median",(function(){return r=this.a,n=this.b,r>=n?NaN:.5*(r+n);var r,n})),$(Yo.prototype,"mode",(function(){return r=this.a,n=this.b,nr(r)||nr(n)||r>=n?NaN:r;var r,n})),$(Yo.prototype,"skewness",(function(){return r=this.a,n=this.b,nr(r)||nr(n)||r>=n?NaN:0;var r,n})),$(Yo.prototype,"stdev",(function(){return r=this.a,n=this.b,r>=n?NaN:.35355339059327373*(n-r);var r,n})),$(Yo.prototype,"variance",(function(){return r=this.a,n=this.b,r>=n?NaN:.125*pt(n-r,2);var r,n})),R(Yo.prototype,"cdf",(function(r){return wt(r,this.a,this.b)})),R(Yo.prototype,"logcdf",(function(r){return Qt(r,this.a,this.b)})),R(Yo.prototype,"logpdf",(function(r){return Oe(r,this.a,this.b)})),R(Yo.prototype,"pdf",(function(r){return Me(r,this.a,this.b)})),R(Yo.prototype,"quantile",(function(r){return Co(r,this.a,this.b)})),Yo},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).Arcsine=n();
//# sourceMappingURL=browser.js.map
