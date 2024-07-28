// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,y=/e-(\d)$/,h=/^(\d+)$/,g=/^(\d+)e/,v=/\.0$/,d=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,b,"$1e"),e=p.call(e,d,"e"),e=p.call(e,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,y,"e-0$1"),r.alternate&&(e=p.call(e,h,"$1."),e=p.call(e,g,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function N(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}var m=String.fromCharCode,A=Array.isArray;function E(r){return r!=r}function _(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function U(r){var n,t,e,o,a,f,c,s,p,l,y,h,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(e=r[s]))f+=e;else{if(n=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,E(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):m(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,y=e.width,h=e.padRight,g=void 0,(g=y-l.length)<0?l:l=h?l+N(g):N(g)+l)),f+=e.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function k(r){var n,t,e,i;for(t=[],i=0,e=S.exec(r);e;)(n=r.slice(i,S.lastIndex-e[0].length)).length&&t.push(n),t.push(I(e)),i=S.lastIndex,e=S.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function j(r){var n,t;if("string"!=typeof r)throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[k(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return U.apply(null,n)}var x=Object.prototype,T=x.toString,F=x.__defineGetter__,O=x.__defineSetter__,V=x.__lookupGetter__,R=x.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,n)||R.call(r,n)?(e=r.__proto__,r.__proto__=x,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,n,t.get),a&&O&&O.call(r,n,t.set),r};function G(r,n,t){$(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function C(r,n,t){$(r,n,{configurable:!1,enumerable:!1,get:t})}function H(r){return"number"==typeof r}var P="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return P&&"symbol"==typeof Symbol.toStringTag}var L=Object.prototype.toString,M=Object.prototype.hasOwnProperty,Z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Z?Z.toStringTag:"",X=W()?function(r){var n,t,e,i,o;if(null==r)return L.call(r);t=r[q],o=q,n=null!=(i=r)&&M.call(i,o);try{r[q]=void 0}catch(n){return L.call(r)}return e=L.call(r),n?r[q]=t:delete r[q],e}:function(r){return L.call(r)},Y=Number,z=Y.prototype.toString,D=W();function B(r){return"object"==typeof r&&(r instanceof Y||(D?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function J(r){return H(r)||B(r)}function K(r){return r!=r}G(J,"isPrimitive",H),G(J,"isObject",B);var Q,rr="function"==typeof Uint32Array,nr="function"==typeof Uint32Array?Uint32Array:null,tr="function"==typeof Uint32Array?Uint32Array:void 0;Q=function(){var r,n,t;if("function"!=typeof nr)return!1;try{n=new nr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(rr&&t instanceof Uint32Array||"[object Uint32Array]"===X(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var er,ir=Q,or="function"==typeof Float64Array,ar="function"==typeof Float64Array?Float64Array:null,ur="function"==typeof Float64Array?Float64Array:void 0;er=function(){var r,n,t;if("function"!=typeof ar)return!1;try{n=new ar([1,3.14,-3.14,NaN]),t=n,r=(or&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr,cr=er,sr="function"==typeof Uint8Array,pr="function"==typeof Uint8Array?Uint8Array:null,lr="function"==typeof Uint8Array?Uint8Array:void 0;fr=function(){var r,n,t;if("function"!=typeof pr)return!1;try{n=new pr(n=[1,3.14,-3.14,256,257]),t=n,r=(sr&&t instanceof Uint8Array||"[object Uint8Array]"===X(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var yr,hr=fr,gr="function"==typeof Uint16Array,vr="function"==typeof Uint16Array?Uint16Array:null,dr="function"==typeof Uint16Array?Uint16Array:void 0;yr=function(){var r,n,t;if("function"!=typeof vr)return!1;try{n=new vr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(gr&&t instanceof Uint16Array||"[object Uint16Array]"===X(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var br,wr={uint16:yr,uint8:hr};(br=new wr.uint16(1))[0]=4660;var Nr=52===new wr.uint8(br.buffer)[0],mr=!0===Nr?1:0,Ar=new cr(1),Er=new ir(Ar.buffer);function _r(r){return Ar[0]=r,Er[mr]}var Ur=!0===Nr?1:0,Sr=new cr(1),Ir=new ir(Sr.buffer);function kr(r,n){return Sr[0]=r,Ir[Ur]=n>>>0,Sr[0]}var jr=1023,xr=Y.NEGATIVE_INFINITY,Tr=.6931471803691238,Fr=1.9082149292705877e-10,Or=0x40000000000000,Vr=.3333333333333333,Rr=1048575,$r=2146435072,Gr=1048576,Cr=1072693248;function Hr(r){var n,t,e,i,o,a,u,f,c,s,p,l;return 0===r?xr:K(r)||r<0?NaN:(o=0,(t=_r(r))<Gr&&(o-=54,t=_r(r*=Or)),t>=$r?r+r:(o+=(t>>20)-jr|0,o+=(f=614244+(t&=Rr)&1048576|0)>>20|0,u=(r=kr(r,t|f^Cr))-1,(Rr&2+t)<3?0===u?0===o?0:o*Tr+o*Fr:(a=u*u*(.5-Vr*u),0===o?u-a:o*Tr-(a-o*Fr-u)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-s*(n+a)):o*Tr-(n-(s*(n+a)+o*Fr)-u)):0===o?u-s*(u-a):o*Tr-(s*(u-a)-o*Fr-u))))}var Pr=.7853981633974483,Wr=Hr(Pr),Lr=Math.floor;function Mr(r){return Lr(r)===r}function Zr(r){return Mr(r/2)}function qr(r){return Zr(r>0?r-1:r+1)}var Xr=Number.POSITIVE_INFINITY;function Yr(r){return r===Xr||r===xr}var zr,Dr,Br=Math.sqrt;function Jr(r){return Math.abs(r)}!0===Nr?(zr=1,Dr=0):(zr=0,Dr=1);var Kr={HIGH:zr,LOW:Dr},Qr=new cr(1),rn=new ir(Qr.buffer),nn=Kr.HIGH,tn=Kr.LOW;function en(r,n,t,e){return Qr[0]=r,n[e]=rn[nn],n[e+t]=rn[tn],n}function on(r){return en(r,[0,0],1,0)}G(on,"assign",en);var an=!0===Nr?0:1,un=new cr(1),fn=new ir(un.buffer);function cn(r,n){return un[0]=r,fn[an]=n>>>0,un[0]}function sn(r){return 0|r}var pn,ln,yn=2147483647,hn=2147483648;!0===Nr?(pn=1,ln=0):(pn=0,ln=1);var gn={HIGH:pn,LOW:ln},vn=new cr(1),dn=new ir(vn.buffer),bn=gn.HIGH,wn=gn.LOW;function Nn(r,n){return dn[bn]=r,dn[wn]=n,vn[0]}var mn=[0,0];function An(r,n){var t,e;return on.assign(r,mn,1,0),t=mn[0],t&=yn,e=_r(n),Nn(t|=e&=hn,mn[1])}var En=1072693247,_n=1e300,Un=1e-300,Sn=1048575,In=1048576,kn=1072693248,jn=536870912,xn=524288,Tn=20,Fn=9007199254740992,On=.9617966939259756,Vn=.9617967009544373,Rn=-7.028461650952758e-9,$n=[1,1.5],Gn=[0,.5849624872207642],Cn=[0,1.350039202129749e-8],Hn=1.4426950408889634,Pn=1.4426950216293335,Wn=1.9259629911266175e-8,Ln=1023,Mn=-1023,Zn=-1074,qn=22250738585072014e-324,Xn=4503599627370496;function Yn(r,n,t,e){return K(r)||Yr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Jr(r)<qn?(n[e]=r*Xn,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}G((function(r){return Yn(r,[0,0],1,0)}),"assign",Yn);var zn=2146435072,Dn=2220446049250313e-31,Bn=2148532223,Jn=[0,0],Kn=[0,0];function Qn(r,n){var t,e;return 0===n||0===r||K(r)||Yr(r)?r:(Yn(r,Jn,1,0),r=Jn[0],n+=Jn[1],n+=function(r){var n=_r(r);return(n=(n&zn)>>>20)-jr|0}(r),n<Zn?An(0,r):n>Ln?r<0?xr:Xr:(n<=Mn?(n+=52,e=Dn):e=1,on.assign(r,Kn,1,0),t=Kn[0],t&=Bn,e*Nn(t|=n+jr<<20,Kn[1])))}var rt=.6931471805599453,nt=1048575,tt=1048576,et=1071644672,it=20,ot=.6931471824645996,at=-1.904654299957768e-9,ut=1072693247,ft=1105199104,ct=1139802112,st=1083179008,pt=1072693248,lt=1083231232,yt=3230714880,ht=31,gt=1e300,vt=1e-300,dt=8008566259537294e-32,bt=[0,0],wt=[0,0];function Nt(r,n){var t,e,i,o,a,u,f,c,s,p,l,y,h,g;if(K(r)||K(n))return NaN;if(on.assign(n,bt,1,0),a=bt[0],0===bt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Br(r);if(-.5===n)return 1/Br(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Yr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Jr(r)<1==(n===Xr)?0:Xr}(r,n)}if(on.assign(r,bt,1,0),o=bt[0],0===bt[1]){if(0===o)return function(r,n){return n===xr?Xr:n===Xr?0:n>0?qr(n)?r:0:qr(n)?An(Xr,r):Xr}(r,n);if(1===r)return 1;if(-1===r&&qr(n))return-1;if(Yr(r))return r===xr?Nt(-0,-n):n<0?0:Xr}if(r<0&&!1===Mr(n))return(r-r)/(r-r);if(i=Jr(r),t=o&yn|0,e=a&yn|0,f=a>>>ht|0,u=(u=o>>>ht|0)&&qr(n)?-1:1,e>ft){if(e>ct)return function(r,n){return(_r(r)&yn)<=En?n<0?_n*_n:Un*Un:n>0?_n*_n:Un*Un}(r,n);if(t<ut)return 1===f?u*gt*gt:u*vt*vt;if(t>pt)return 0===f?u*gt*gt:u*vt*vt;l=function(r,n){var t,e,i,o,a,u,f;return o=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(u=i*Wn-o*Hn)-((e=cn(e=(a=Pn*i)+u,0))-a),r[0]=e,r[1]=t,r}(wt,i)}else l=function(r,n,t){var e,i,o,a,u,f,c,s,p,l,y,h,g,v,d,b,w,N,m,A,E;return N=0,t<In&&(N-=53,t=_r(n*=Fn)),N+=(t>>Tn)-jr|0,t=(m=t&Sn|0)|kn|0,m<=235662?A=0:m<767610?A=1:(A=0,N+=1,t-=In),a=cn(i=(b=(n=kr(n,t))-(c=$n[A]))*(w=1/(n+c)),0),e=(t>>1|jn)+xn,f=kr(0,e+=A<<18),d=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=cn(f=3+(o=a*a)+(d+=(u=w*(b-a*f-a*(n-(f-c))))*(a+i)),0),p=cn(p=(b=a*f)+(w=u*f+(d-(f-3-o))*i),0),l=Vn*p,g=(y=Rn*p+(w-(p-b))*On+Cn[A])-((h=cn(h=l+y+(s=Gn[A])+(v=N),0))-v-s-l),r[0]=h,r[1]=g,r}(wt,i,t);if(y=(p=(n-(c=cn(n,0)))*l[0]+n*l[1])+(s=c*l[0]),on.assign(y,bt,1,0),h=sn(bt[0]),g=sn(bt[1]),h>=st){if(0!=(h-st|g))return u*gt*gt;if(p+dt>y-s)return u*gt*gt}else if((h&yn)>=lt){if(0!=(h-yt|g))return u*vt*vt;if(p<=y-s)return u*vt*vt}return y=function(r,n,t){var e,i,o,a,u,f,c,s,p,l;return p=((s=r&yn|0)>>it)-jr|0,c=0,s>et&&(i=kr(0,((c=r+(tt>>p+1)>>>0)&~(nt>>(p=((c&yn)>>it)-jr|0)))>>>0),c=(c&nt|tt)>>it-p>>>0,r<0&&(c=-c),n-=i),r=sn(r=_r(f=1-((f=(o=(i=cn(i=t+n,0))*ot)+(a=(t-(i-n))*rt+i*at))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<it>>>0)>>it<=0?Qn(f,c):kr(f,r)}(h,s,p),u*y}var mt=6123233995736766e-32;function At(r){var n,t,e,i,o;if(K(r))return NaN;if(r>0?e=r:(n=!0,e=-r),e>1)return NaN;if(e>.625)i=(t=1-e)*function(r){var n,t;return 0===r?.08333333333333809:((r<0?-r:r)<=1?(n=28.536655482610616+r*(r*(6.968710824104713+r*(.002967721961301243*r-.5634242780008963))-25.56901049652825),t=342.43986579130785+r*(r*(147.0656354026815+r*(1*r-21.947795316429207))-383.8770957603691)):(n=.002967721961301243+(r=1/r)*(r*(6.968710824104713+r*(28.536655482610616*r-25.56901049652825))-.5634242780008963),t=1+r*(r*(147.0656354026815+r*(342.43986579130785*r-383.8770957603691))-21.947795316429207)),n/t)}(t),t=Br(t+t),o=Pr-t,o-=t=t*i-mt,o+=Pr;else{if(e<1e-8)return r;o=(t=e*e)*function(r){var n,t;return 0===r?.16666666666666713:((r<0?-r:r)<=1?(n=r*(19.562619833175948+r*(r*(5.444622390564711+r*(.004253011369004428*r-.6019598008014124))-16.262479672107002))-8.198089802484825,t=r*(139.51056146574857+r*(r*(70.49610280856842+r*(1*r-14.740913729888538))-147.1791292232726))-49.18853881490881):(n=.004253011369004428+(r=1/r)*(r*(5.444622390564711+r*(r*(19.562619833175948+-8.198089802484825*r)-16.262479672107002))-.6019598008014124),t=1+r*(r*(70.49610280856842+r*(r*(139.51056146574857+-49.18853881490881*r)-147.1791292232726))-14.740913729888538)),n/t)}(t),o=e*o+e}return n?-o:o}var Et=3.141592653589793,_t=2/Et;function Ut(r,n,t){return K(r)||K(n)||K(t)||n>=t?NaN:r<n?0:r>=t?1:_t*At(Br((r-n)/(t-n)))}function St(r){return function(){return r}}var It=2/Et;G(Ut,"factory",(function(r,n){return K(r)||K(n)||r>=n?St(NaN):function(t){return K(t)?NaN:t<r?0:t>=n?1:It*At(Br((t-r)/(n-r)))}}));var kt=1.1447298858494002;function jt(r,n,t){return K(r)||K(n)||K(t)||n>=t?NaN:r<n?xr:r>=t?0:rt-kt+Hr(At(Br((r-n)/(t-n))))}function xt(r,n,t){return K(r)||K(n)||K(t)||n>=t?NaN:r<n||r>t?xr:-(kt+Hr((r-n)*(t-r))/2)}function Tt(r,n,t){return K(r)||K(n)||K(t)||n>=t?NaN:r<n||r>t?0:1/(Et*Br((r-n)*(t-r)))}function Ft(r,n){var t,e,i,o;return i=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(t=.5*o))+(1-i-t+(o*e-r*n))}G(jt,"factory",(function(r,n){return K(r)||K(n)||r>=n?St(NaN):function(t){return K(t)?NaN:t<r?xr:t>=n?0:rt-kt+Hr(At(Br((t-r)/(n-r))))}})),G(xt,"factory",(function(r,n){return K(r)||K(n)||r>=n?St(NaN):function(t){return K(t)?NaN:t<r||t>n?xr:-(kt+Hr((t-r)*(n-t))/2)}})),G(Tt,"factory",(function(r,n){return K(r)||K(n)||r>=n?St(NaN):function(t){return K(t)?NaN:t<r||t>n?0:1/(Et*Br((t-r)*(n-t)))}}));var Ot=-.16666666666666632,Vt=.00833333333332249,Rt=-.0001984126982985795,$t=27557313707070068e-22,Gt=-2.5050760253406863e-8,Ct=1.58969099521155e-10;function Ht(r,n){var t,e,i;return t=Vt+(i=r*r)*(Rt+i*$t)+i*(i*i)*(Gt+i*Ct),e=i*r,0===n?r+e*(Ot+i*t):r-(i*(.5*n-e*t)-n-e*Ot)}var Pt=!0===Nr?0:1,Wt=new cr(1),Lt=new ir(Wt.buffer);function Mt(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Zt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],qt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Xt=16777216,Yt=5.960464477539063e-8,zt=Mt(20),Dt=Mt(20),Bt=Mt(20),Jt=Mt(20);function Kt(r,n,t,e,i,o,a,u,f){var c,s,p,l,y,h,g,v,d;for(l=o,d=e[t],v=t,y=0;v>0;y++)s=Yt*d|0,Jt[y]=d-Xt*s|0,d=e[v-1]+s,v-=1;if(d=Qn(d,i),d-=8*Lr(.125*d),d-=g=0|d,p=0,i>0?(g+=y=Jt[t-1]>>24-i,Jt[t-1]-=y<<24-i,p=Jt[t-1]>>23-i):0===i?p=Jt[t-1]>>23:d>=.5&&(p=2),p>0){for(g+=1,c=0,y=0;y<t;y++)v=Jt[y],0===c?0!==v&&(c=1,Jt[y]=16777216-v):Jt[y]=16777215-v;if(i>0)switch(i){case 1:Jt[t-1]&=8388607;break;case 2:Jt[t-1]&=4194303}2===p&&(d=1-d,0!==c&&(d-=Qn(1,i)))}if(0===d){for(v=0,y=t-1;y>=o;y--)v|=Jt[y];if(0===v){for(h=1;0===Jt[o-h];h++);for(y=t+1;y<=t+h;y++){for(f[u+y]=Zt[a+y],s=0,v=0;v<=u;v++)s+=r[v]*f[u+(y-v)];e[y]=s}return Kt(r,n,t+=h,e,i,o,a,u,f)}}if(0===d)for(t-=1,i-=24;0===Jt[t];)t-=1,i-=24;else(d=Qn(d,-i))>=Xt?(s=Yt*d|0,Jt[t]=d-Xt*s|0,i+=24,Jt[t+=1]=s):Jt[t]=0|d;for(s=Qn(1,i),y=t;y>=0;y--)e[y]=s*Jt[y],s*=Yt;for(y=t;y>=0;y--){for(s=0,h=0;h<=l&&h<=t-y;h++)s+=qt[h]*e[y+h];Bt[t-y]=s}for(s=0,y=t;y>=0;y--)s+=Bt[y];for(n[0]=0===p?s:-s,s=Bt[0]-s,y=1;y<=t;y++)s+=Bt[y];return n[1]=0===p?s:-s,7&g}function Qt(r,n,t,e){var i,o,a,u,f,c,s;for((o=(t-3)/24|0)<0&&(o=0),u=t-24*(o+1),c=o-(a=e-1),s=a+4,f=0;f<=s;f++)zt[f]=c<0?0:Zt[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=r[c]*zt[a+(f-c)];Dt[f]=i}return Kt(r,n,4,Dt,u,4,o,a,zt)}var re=Math.round,ne=.6366197723675814,te=1.5707963267341256,ee=6077100506506192e-26,ie=6077100506303966e-26,oe=20222662487959506e-37,ae=20222662487111665e-37,ue=84784276603689e-45,fe=2047;function ce(r,n,t){var e,i,o,a,u;return o=r-(e=re(r*ne))*te,a=e*ee,u=n>>20|0,t[0]=o-a,u-(_r(t[0])>>20&fe)>16&&(a=e*oe-((i=o)-(o=i-(a=e*ie))-a),t[0]=o-a,u-(_r(t[0])>>20&fe)>49&&(a=e*ue-((i=o)-(o=i-(a=e*ae))-a),t[0]=o-a)),t[1]=o-t[0]-a,e}var se=0,pe=16777216,le=1.5707963267341256,ye=6077100506506192e-26,he=2*ye,ge=3*ye,ve=4*ye,de=598523,be=1072243195,we=1073928572,Ne=1074752122,me=1074977148,Ae=1075183036,Ee=1075388923,_e=1075594811,Ue=1094263291,Se=[0,0,0],Ie=[0,0];function ke(r,n){var t,e,i,o,a,u,f;if((i=_r(r)&yn|0)<=be)return n[0]=r,n[1]=0,0;if(i<=Ne)return(i&nt)===de?ce(r,i,n):i<=we?r>0?(f=r-le,n[0]=f-ye,n[1]=f-n[0]-ye,1):(f=r+le,n[0]=f+ye,n[1]=f-n[0]+ye,-1):r>0?(f=r-2*le,n[0]=f-he,n[1]=f-n[0]-he,2):(f=r+2*le,n[0]=f+he,n[1]=f-n[0]+he,-2);if(i<=_e)return i<=Ae?i===me?ce(r,i,n):r>0?(f=r-3*le,n[0]=f-ge,n[1]=f-n[0]-ge,3):(f=r+3*le,n[0]=f+ge,n[1]=f-n[0]+ge,-3):i===Ee?ce(r,i,n):r>0?(f=r-4*le,n[0]=f-ve,n[1]=f-n[0]-ve,4):(f=r+4*le,n[0]=f+ve,n[1]=f-n[0]+ve,-4);if(i<Ue)return ce(r,i,n);if(i>=zn)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Wt[0]=r,Lt[Pt]}(r),f=Nn(i-((e=(i>>20)-1046)<<20|0),t),a=0;a<2;a++)Se[a]=0|f,f=(f-Se[a])*pe;for(Se[2]=f,o=3;Se[o-1]===se;)o-=1;return u=Qt(Se,Ie,e,o),r<0?(n[0]=-Ie[0],n[1]=-Ie[1],-u):(n[0]=Ie[0],n[1]=Ie[1],u)}var je=1072243195,xe=1045430272,Te=[0,0];function Fe(r){var n;if(n=_r(r),(n&=yn)<=je)return n<xe?r:Ht(r,0);if(n>=zn)return NaN;switch(3&ke(r,Te)){case 0:return Ht(Te[0],Te[1]);case 1:return Ft(Te[0],Te[1]);case 2:return-Ht(Te[0],Te[1]);default:return-Ft(Te[0],Te[1])}}var Oe=1.5707963267948966;function Ve(r,n,t){return K(n)||K(t)||n>=t||K(r)||r<0||r>1?NaN:n+Nt(Fe(Oe*r),2)*(t-n)}function Re(){var r,n=arguments,t="https://stdlib.io/e/"+n[0]+"?";for(r=1;r<n.length;r++)t+="&arg[]="+encodeURIComponent(n[r]);return t}function $e(){var r,n;if(!(this instanceof $e))return 0===arguments.length?new $e:new $e(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!H(r=arguments[0])||K(r))throw new TypeError(Re("0u18a",r));if(!H(n)||K(n))throw new TypeError(Re("0u18b",n));if(r>=n)throw new RangeError(Re("0u1DV",r,n))}else r=0,n=1;return $(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!H(t)||K(t))throw new TypeError(Re("0u18d",t));if(t>=n)throw new RangeError(Re("0u18e",n,t));r=t}}),$(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(t){if(!H(t)||K(t))throw new TypeError(Re("0u18d",t));if(t<=r)throw new RangeError(Re("0u18f",r,t));n=t}}),this}return G(Ve,"factory",(function(r,n){return K(r)||K(n)||r>=n?St(NaN):function(t){return K(t)||t<0||t>1?NaN:r+Nt(Fe(Oe*t),2)*(n-r)}})),C($e.prototype,"entropy",(function(){return r=this.a,n=this.b,K(r)||K(n)||r>=n?NaN:Wr+Hr(n-r);var r,n})),C($e.prototype,"kurtosis",(function(){return r=this.a,n=this.b,K(r)||K(n)||r>=n?NaN:-1.5;var r,n})),C($e.prototype,"mean",(function(){return r=this.a,n=this.b,r>=n?NaN:.5*(r+n);var r,n})),C($e.prototype,"median",(function(){return r=this.a,n=this.b,r>=n?NaN:.5*(r+n);var r,n})),C($e.prototype,"mode",(function(){return r=this.a,n=this.b,K(r)||K(n)||r>=n?NaN:r;var r,n})),C($e.prototype,"skewness",(function(){return r=this.a,n=this.b,K(r)||K(n)||r>=n?NaN:0;var r,n})),C($e.prototype,"stdev",(function(){return r=this.a,n=this.b,r>=n?NaN:.35355339059327373*(n-r);var r,n})),C($e.prototype,"variance",(function(){return r=this.a,n=this.b,r>=n?NaN:.125*Nt(n-r,2);var r,n})),G($e.prototype,"cdf",(function(r){return Ut(r,this.a,this.b)})),G($e.prototype,"logcdf",(function(r){return jt(r,this.a,this.b)})),G($e.prototype,"logpdf",(function(r){return xt(r,this.a,this.b)})),G($e.prototype,"pdf",(function(r){return Tt(r,this.a,this.b)})),G($e.prototype,"quantile",(function(r){return Ve(r,this.a,this.b)})),$e},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).Arcsine=n();
//# sourceMappingURL=browser.js.map