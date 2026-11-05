(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();const jr="187",$c=0,Oo=1,qc=2,$s=1,Vl=2,ts=3,Ni=0,He=1,Te=2,Dn=0,Nn=1,Mi=2,Bo=3,ko=4,Yc=5,Pn=100,Kc=101,Zc=102,Jc=103,Qc=104,jc=200,th=201,eh=202,ih=203,Wl=204,Xl=205,nh=206,sh=207,ah=208,rh=209,oh=210,lh=211,ch=212,hh=213,dh=214,cr=0,hr=1,dr=2,ns=3,ur=4,fr=5,pr=6,mr=7,$l=0,uh=1,fh=2,Ii=0,ql=1,Yl=2,Kl=3,va=4,Zl=5,Jl=6,Ql=7,jl=300,Fn=301,ss=302,Ca=303,La=304,Ui=1e3,Li=1001,gr=1002,Le=1003,ph=1004,vs=1005,Ve=1006,Pa=1007,$i=1008,Ye=1009,tc=1010,ec=1011,as=1012,to=1013,yi=1014,xi=1015,bi=1016,eo=1017,io=1018,On=1020,ic=35902,nc=35899,sc=1021,ac=1022,_i=1023,Zi=1026,qi=1027,rc=1028,no=1029,dn=1030,so=1031,ao=1033,qs=33776,Ys=33777,Ks=33778,Zs=33779,vr=35840,xr=35841,_r=35842,Mr=35843,Sr=36196,yr=37492,br=37496,Er=37488,wr=37489,ea=37490,Tr=37491,Ar=37808,Rr=37809,Cr=37810,Lr=37811,Pr=37812,Ir=37813,Dr=37814,Nr=37815,Ur=37816,Fr=37817,Or=37818,Br=37819,kr=37820,zr=37821,Hr=36492,Gr=36494,Vr=36495,Wr=36283,Xr=36284,ia=36285,$r=36286,mh=3200,qr=0,gh=1,Xi="",le="srgb",na="srgb-linear",sa="linear",ie="srgb",Ia=7680,vh=519,xh=512,_h=513,Mh=514,oc=515,Sh=516,yh=517,lc=518,cc=519,hc=35044,zo="300 es",hi=2e3,rs=2001;function bh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function aa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Eh(){const s=aa("canvas");return s.style.display="block",s}const Ho={};function ra(...s){const t="THREE."+s.shift();console.log(t,...s)}function dc(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Dt(...s){s=dc(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Jt(...s){s=dc(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Js(...s){const t=s.join(" ");t in Ho||(Ho[t]=!0,Dt(...s))}function wh(s,t,e){return new Promise(function(i,n){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}const Th={[cr]:cr,[dr]:pr,[ur]:ur,[ns]:fr,[hr]:hr,[pr]:dr,[mr]:mr,[fr]:ns};class un{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const a=n.indexOf(e);a!==-1&&n.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let a=0,r=n.length;a<r;a++)n[a].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Da=Math.PI/180,oa=180/Math.PI;function fn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[s&255]+De[s>>8&255]+De[s>>16&255]+De[s>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function Kt(s,t,e){return Math.max(t,Math.min(e,s))}function Ah(s,t){return(s%t+t)%t}function Na(s,t,e){return(1-e)*s+e*t}function Rh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function xa(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function uc(s,t){if(t.constructor===Float32Array)return s;const e=xa(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function fc(s,t){if(t.constructor===Float32Array)return s;const e=xa(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}const yo=class yo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*n+t.x,this.y=a*n+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yo.prototype.isVector2=!0;let Nt=yo;class Hn{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,a,r,o){let c=i[n+0],l=i[n+1],u=i[n+2],f=i[n+3],d=a[r+0],h=a[r+1],p=a[r+2],v=a[r+3];if(f!==v||c!==d||l!==h||u!==p){let g=c*d+l*h+u*p+f*v;g<0&&(d=-d,h=-h,p=-p,v=-v,g=-g);let m=1-o;if(g<.9995){const _=Math.acos(g),E=Math.sin(_);m=Math.sin(m*_)/E,o=Math.sin(o*_)/E,c=c*m+d*o,l=l*m+h*o,u=u*m+p*o,f=f*m+v*o}else{c=c*m+d*o,l=l*m+h*o,u=u*m+p*o,f=f*m+v*o;const _=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=_,l*=_,u*=_,f*=_}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,a,r){const o=i[n],c=i[n+1],l=i[n+2],u=i[n+3],f=a[r],d=a[r+1],h=a[r+2],p=a[r+3];return t[e]=o*p+u*f+c*h-l*d,t[e+1]=c*p+u*d+l*f-o*h,t[e+2]=l*p+u*h+o*d-c*f,t[e+3]=u*p-o*f-c*d-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,a=t._z,r=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(n/2),f=o(a/2),d=c(i/2),h=c(n/2),p=c(a/2);switch(r){case"XYZ":this._x=d*u*f+l*h*p,this._y=l*h*f-d*u*p,this._z=l*u*p+d*h*f,this._w=l*u*f-d*h*p;break;case"YXZ":this._x=d*u*f+l*h*p,this._y=l*h*f-d*u*p,this._z=l*u*p-d*h*f,this._w=l*u*f+d*h*p;break;case"ZXY":this._x=d*u*f-l*h*p,this._y=l*h*f+d*u*p,this._z=l*u*p+d*h*f,this._w=l*u*f-d*h*p;break;case"ZYX":this._x=d*u*f-l*h*p,this._y=l*h*f+d*u*p,this._z=l*u*p-d*h*f,this._w=l*u*f+d*h*p;break;case"YZX":this._x=d*u*f+l*h*p,this._y=l*h*f+d*u*p,this._z=l*u*p-d*h*f,this._w=l*u*f-d*h*p;break;case"XZY":this._x=d*u*f-l*h*p,this._y=l*h*f-d*u*p,this._z=l*u*p+d*h*f,this._w=l*u*f+d*h*p;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],a=e[8],r=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(a-l)*h,this._z=(r-n)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-c)/h,this._x=.25*h,this._y=(n+r)/h,this._z=(a+l)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(a-l)/h,this._x=(n+r)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(r-n)/h,this._x=(a+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,a=t._z,r=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+r*o+n*l-a*c,this._y=n*u+r*c+a*o-i*l,this._z=a*u+r*l+i*c-n*o,this._w=r*u-i*o-n*c-a*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,a=-a,r=-r,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+a*e,this._w=this._w*c+r*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+a*e,this._w=this._w*c+r*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bo=class bo{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Go.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Go.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*n,this.y=a[1]*e+a[4]*i+a[7]*n,this.z=a[2]*e+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=t.elements,r=1/(a[3]*e+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*n+a[12])*r,this.y=(a[1]*e+a[5]*i+a[9]*n+a[13])*r,this.z=(a[2]*e+a[6]*i+a[10]*n+a[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,a=t.x,r=t.y,o=t.z,c=t.w,l=2*(r*n-o*i),u=2*(o*e-a*n),f=2*(a*i-r*e);return this.x=e+c*l+r*f-o*u,this.y=i+c*u+o*l-a*f,this.z=n+c*f+a*u-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n,this.y=a[1]*e+a[5]*i+a[9]*n,this.z=a[2]*e+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,a=t.z,r=e.x,o=e.y,c=e.z;return this.x=n*c-a*o,this.y=a*r-i*c,this.z=i*o-n*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ua.copy(this).projectOnVector(t),this.sub(Ua)}reflect(t){return this.sub(Ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bo.prototype.isVector3=!0;let P=bo;const Ua=new P,Go=new Hn,Eo=class Eo{constructor(t,e,i,n,a,r,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,r,o,c,l)}set(t,e,i,n,a,r,o,c,l){const u=this.elements;return u[0]=t,u[1]=n,u[2]=o,u[3]=e,u[4]=a,u[5]=c,u[6]=i,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,r=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],h=i[5],p=i[8],v=n[0],g=n[3],m=n[6],_=n[1],E=n[4],y=n[7],T=n[2],w=n[5],x=n[8];return a[0]=r*v+o*_+c*T,a[3]=r*g+o*E+c*w,a[6]=r*m+o*y+c*x,a[1]=l*v+u*_+f*T,a[4]=l*g+u*E+f*w,a[7]=l*m+u*y+f*x,a[2]=d*v+h*_+p*T,a[5]=d*g+h*E+p*w,a[8]=d*m+h*y+p*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*r*u-e*o*l-i*a*u+i*o*c+n*a*l-n*r*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*r-o*l,d=o*c-u*a,h=l*a-r*c,p=e*f+i*d+n*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=f*v,t[1]=(n*l-u*i)*v,t[2]=(o*i-n*r)*v,t[3]=d*v,t[4]=(u*e-n*c)*v,t[5]=(n*a-o*e)*v,t[6]=h*v,t[7]=(i*c-l*e)*v,t[8]=(r*e-i*a)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*r+l*o)+r+t,-n*l,n*c,-n*(-l*r+c*o)+o+e,0,0,1),this}scale(t,e){return Js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fa.makeScale(t,e)),this}rotate(t){return Js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fa.makeRotation(-t)),this}translate(t,e){return Js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Eo.prototype.isMatrix3=!0;let Bt=Eo;const Fa=new Bt,Vo=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wo=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ch(){const s={enabled:!0,workingColorSpace:na,spaces:{},convert:function(n,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ie&&(n.r=Di(n.r),n.g=Di(n.g),n.b=Di(n.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(n.applyMatrix3(this.spaces[a].toXYZ),n.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ie&&(n.r=Un(n.r),n.g=Un(n.g),n.b=Un(n.b))),n},workingToColorSpace:function(n,a){return this.convert(n,this.workingColorSpace,a)},colorSpaceToWorking:function(n,a){return this.convert(n,a,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Xi?sa:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,a=this.workingColorSpace){return n.fromArray(this.spaces[a].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,a,r){return n.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[na]:{primaries:t,whitePoint:i,transfer:sa,toXYZ:Vo,fromXYZ:Wo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:le},outputColorSpaceConfig:{drawingBufferColorSpace:le}},[le]:{primaries:t,whitePoint:i,transfer:ie,toXYZ:Vo,fromXYZ:Wo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:le}}}),s}const Yt=Ch();function Di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Un(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let pn;class Lh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{pn===void 0&&(pn=aa("canvas")),pn.width=t.width,pn.height=t.height;const n=pn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=pn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=aa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),a=n.data;for(let r=0;r<a.length;r++)a[r]=Di(a[r]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Di(e[i]/255)*255):e[i]=Di(e[i]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ph=0;class ro{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=fn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?a.push(Oa(n[r].image)):a.push(Oa(n[r]))}else a=Oa(n);i.url=a}return e||(t.images[this.uuid]=i),i}}function Oa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Lh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}let Ih=0;const Ba=new P;class Fe extends un{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,i=Li,n=Li,a=Ve,r=$i,o=_i,c=Ye,l=Fe.DEFAULT_ANISOTROPY,u=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=fn(),this.name="",this.source=new ro(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ba).x}get height(){return this.source.getSize(Ba).y}get depth(){return this.source.getSize(Ba).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ui:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case gr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ui:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case gr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=jl;Fe.DEFAULT_ANISOTROPY=1;const wo=class wo{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*a,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*a,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*a,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,a;const c=t.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],p=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(p+g)<.1&&Math.abs(l+h+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,y=(h+1)/2,T=(m+1)/2,w=(u+d)/4,x=(f+v)/4,b=(p+g)/4;return E>y&&E>T?E<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(E),n=w/i,a=x/i):y>T?y<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(y),i=w/n,a=b/n):T<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(T),i=x/a,n=b/a),this.set(i,n,a,e),this}let _=Math.sqrt((g-p)*(g-p)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(f-v)/_,this.z=(d-u)/_,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wo.prototype.isVector4=!0;let fe=wo;class Dh extends un{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e),this.textures=[];const n=i.count;for(let a=0;a<n;a++)this.textures[a]=new Fe({width:t,height:e,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new ro(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends Dh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class pc extends Fe{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Le,this.minFilter=Le,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nh extends Fe{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Le,this.minFilter=Le,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ga=class ga{constructor(t,e,i,n,a,r,o,c,l,u,f,d,h,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,r,o,c,l,u,f,d,h,p,v,g)}set(t,e,i,n,a,r,o,c,l,u,f,d,h,p,v,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=a,m[5]=r,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ga().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/mn.setFromMatrixColumn(t,0).length(),a=1/mn.setFromMatrixColumn(t,1).length(),r=1/mn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),u=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){const d=r*u,h=r*f,p=o*u,v=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=h+p*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=p+h*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*u,h=c*f,p=l*u,v=l*f;e[0]=d+v*o,e[4]=p*o-h,e[8]=r*l,e[1]=r*f,e[5]=r*u,e[9]=-o,e[2]=h*o-p,e[6]=v+d*o,e[10]=r*c}else if(t.order==="ZXY"){const d=c*u,h=c*f,p=l*u,v=l*f;e[0]=d-v*o,e[4]=-r*f,e[8]=p+h*o,e[1]=h+p*o,e[5]=r*u,e[9]=v-d*o,e[2]=-r*l,e[6]=o,e[10]=r*c}else if(t.order==="ZYX"){const d=r*u,h=r*f,p=o*u,v=o*f;e[0]=c*u,e[4]=p*l-h,e[8]=d*l+v,e[1]=c*f,e[5]=v*l+d,e[9]=h*l-p,e[2]=-l,e[6]=o*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,h=r*l,p=o*c,v=o*l;e[0]=c*u,e[4]=v-d*f,e[8]=p*f+h,e[1]=f,e[5]=r*u,e[9]=-o*u,e[2]=-l*u,e[6]=h*f+p,e[10]=d-v*f}else if(t.order==="XZY"){const d=r*c,h=r*l,p=o*c,v=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=d*f+v,e[5]=r*u,e[9]=h*f-p,e[2]=p*f-h,e[6]=o*u,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uh,t,Fh)}lookAt(t,e,i){const n=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),ki.crossVectors(i,We),ki.lengthSq()===0&&(Math.abs(i.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),ki.crossVectors(i,We)),ki.normalize(),xs.crossVectors(We,ki),n[0]=ki.x,n[4]=xs.x,n[8]=We.x,n[1]=ki.y,n[5]=xs.y,n[9]=We.y,n[2]=ki.z,n[6]=xs.z,n[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,r=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],h=i[13],p=i[2],v=i[6],g=i[10],m=i[14],_=i[3],E=i[7],y=i[11],T=i[15],w=n[0],x=n[4],b=n[8],D=n[12],R=n[1],I=n[5],U=n[9],O=n[13],L=n[2],z=n[6],W=n[10],B=n[14],tt=n[3],X=n[7],Q=n[11],j=n[15];return a[0]=r*w+o*R+c*L+l*tt,a[4]=r*x+o*I+c*z+l*X,a[8]=r*b+o*U+c*W+l*Q,a[12]=r*D+o*O+c*B+l*j,a[1]=u*w+f*R+d*L+h*tt,a[5]=u*x+f*I+d*z+h*X,a[9]=u*b+f*U+d*W+h*Q,a[13]=u*D+f*O+d*B+h*j,a[2]=p*w+v*R+g*L+m*tt,a[6]=p*x+v*I+g*z+m*X,a[10]=p*b+v*U+g*W+m*Q,a[14]=p*D+v*O+g*B+m*j,a[3]=_*w+E*R+y*L+T*tt,a[7]=_*x+E*I+y*z+T*X,a[11]=_*b+E*U+y*W+T*Q,a[15]=_*D+E*O+y*B+T*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],a=t[12],r=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],d=t[10],h=t[14],p=t[3],v=t[7],g=t[11],m=t[15],_=c*h-l*d,E=o*h-l*f,y=o*d-c*f,T=r*h-l*u,w=r*d-c*u,x=r*f-o*u;return e*(v*_-g*E+m*y)-i*(p*_-g*T+m*w)+n*(p*E-v*T+m*x)-a*(p*y-v*w+g*x)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],a=t[1],r=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(r*u-o*l)-i*(a*u-o*c)+n*(a*l-r*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],d=t[10],h=t[11],p=t[12],v=t[13],g=t[14],m=t[15],_=e*o-i*r,E=e*c-n*r,y=e*l-a*r,T=i*c-n*o,w=i*l-a*o,x=n*l-a*c,b=u*v-f*p,D=u*g-d*p,R=u*m-h*p,I=f*g-d*v,U=f*m-h*v,O=d*m-h*g,L=_*O-E*U+y*I+T*R-w*D+x*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/L;return t[0]=(o*O-c*U+l*I)*z,t[1]=(n*U-i*O-a*I)*z,t[2]=(v*x-g*w+m*T)*z,t[3]=(d*w-f*x-h*T)*z,t[4]=(c*R-r*O-l*D)*z,t[5]=(e*O-n*R+a*D)*z,t[6]=(g*y-p*x-m*E)*z,t[7]=(u*x-d*y+h*E)*z,t[8]=(r*U-o*R+l*b)*z,t[9]=(i*R-e*U-a*b)*z,t[10]=(p*w-v*y+m*_)*z,t[11]=(f*y-u*w-h*_)*z,t[12]=(o*D-r*I-c*b)*z,t[13]=(e*I-i*D+n*b)*z,t[14]=(v*E-p*T-g*_)*z,t[15]=(u*T-f*E+d*_)*z,this}scale(t){const e=this.elements,i=t.x,n=t.y,a=t.z;return e[0]*=i,e[4]*=n,e[8]*=a,e[1]*=i,e[5]*=n,e[9]*=a,e[2]*=i,e[6]*=n,e[10]*=a,e[3]*=i,e[7]*=n,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),a=1-i,r=t.x,o=t.y,c=t.z,l=a*r,u=a*o;return this.set(l*r+i,l*o-n*c,l*c+n*o,0,l*o+n*c,u*o+i,u*c-n*r,0,l*c-n*o,u*c+n*r,a*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,a,r){return this.set(1,i,a,0,t,1,r,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,a=e._x,r=e._y,o=e._z,c=e._w,l=a+a,u=r+r,f=o+o,d=a*l,h=a*u,p=a*f,v=r*u,g=r*f,m=o*f,_=c*l,E=c*u,y=c*f,T=i.x,w=i.y,x=i.z;return n[0]=(1-(v+m))*T,n[1]=(h+y)*T,n[2]=(p-E)*T,n[3]=0,n[4]=(h-y)*w,n[5]=(1-(d+m))*w,n[6]=(g+_)*w,n[7]=0,n[8]=(p+E)*x,n[9]=(g-_)*x,n[10]=(1-(d+v))*x,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const a=this.determinantAffine();if(a===0)return i.set(1,1,1),e.identity(),this;let r=mn.set(n[0],n[1],n[2]).length();const o=mn.set(n[4],n[5],n[6]).length(),c=mn.set(n[8],n[9],n[10]).length();a<0&&(r=-r),si.copy(this);const l=1/r,u=1/o,f=1/c;return si.elements[0]*=l,si.elements[1]*=l,si.elements[2]*=l,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=f,si.elements[9]*=f,si.elements[10]*=f,e.setFromRotationMatrix(si),i.x=r,i.y=o,i.z=c,this}makePerspective(t,e,i,n,a,r,o=hi,c=!1){const l=this.elements,u=2*a/(e-t),f=2*a/(i-n),d=(e+t)/(e-t),h=(i+n)/(i-n);let p,v;if(c)p=a/(r-a),v=r*a/(r-a);else if(o===hi)p=-(r+a)/(r-a),v=-2*r*a/(r-a);else if(o===rs)p=-r/(r-a),v=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,a,r,o=hi,c=!1){const l=this.elements,u=2/(e-t),f=2/(i-n),d=-(e+t)/(e-t),h=-(i+n)/(i-n);let p,v;if(c)p=1/(r-a),v=r/(r-a);else if(o===hi)p=-2/(r-a),v=-(r+a)/(r-a);else if(o===rs)p=-1/(r-a),v=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};ga.prototype.isMatrix4=!0;let ae=ga;const mn=new P,si=new ae,Uh=new P(0,0,0),Fh=new P(1,1,1),ki=new P,xs=new P,We=new P,Xo=new ae,$o=new Hn;class Fi{constructor(t=0,e=0,i=0,n=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,a=n[0],r=n[4],o=n[8],c=n[1],l=n[5],u=n[9],f=n[2],d=n[6],h=n[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Kt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Xo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $o.setFromEuler(this),this.setFromQuaternion($o,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Oh=0;const qo=new P,gn=new Hn,wi=new ae,_s=new P,Wn=new P,Bh=new P,kh=new Hn,Yo=new P(1,0,0),Ko=new P(0,1,0),Zo=new P(0,0,1),Jo={type:"added"},zh={type:"removed"},vn={type:"childadded",child:null},ka={type:"childremoved",child:null};class pe extends un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new P,e=new Fi,i=new Hn,n=new P(1,1,1);function a(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ae},normalMatrix:{value:new Bt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gn.setFromAxisAngle(t,e),this.quaternion.multiply(gn),this}rotateOnWorldAxis(t,e){return gn.setFromAxisAngle(t,e),this.quaternion.premultiply(gn),this}rotateX(t){return this.rotateOnAxis(Yo,t)}rotateY(t){return this.rotateOnAxis(Ko,t)}rotateZ(t){return this.rotateOnAxis(Zo,t)}translateOnAxis(t,e){return qo.copy(t).applyQuaternion(this.quaternion),this.position.add(qo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yo,t)}translateY(t){return this.translateOnAxis(Ko,t)}translateZ(t){return this.translateOnAxis(Zo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?_s.copy(t):_s.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Wn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Wn,_s,this.up):wi.lookAt(_s,Wn,this.up),this.quaternion.setFromRotationMatrix(wi),n&&(wi.extractRotation(n.matrixWorld),gn.setFromRotationMatrix(wi),this.quaternion.premultiply(gn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jo),vn.child=t,this.dispatchEvent(vn),vn.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zh),ka.child=t,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jo),vn.child=t,this.dispatchEvent(vn),vn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wn,t,Bh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wn,kh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,a=this.matrix.elements;a[12]+=e-a[0]*e-a[4]*i-a[8]*n,a[13]+=i-a[1]*e-a[5]*i-a[9]*n,a[14]+=n-a[2]*e-a[6]*i-a[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];a(t.shapes,f)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(t.materials,this.material[c]));n.material=o}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];n.animations.push(a(t.animations,c))}}if(e){const o=r(t.geometries),c=r(t.materials),l=r(t.textures),u=r(t.images),f=r(t.shapes),d=r(t.skeletons),h=r(t.animations),p=r(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=n,i;function r(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}pe.DEFAULT_UP=new P(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ue extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hh={type:"move"};class za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,i),m=this._getHandJoint(l,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,p=.005;l.inputState.pinching&&d>h+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=h-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hh)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ue;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Ha(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class gt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Yt.workingColorSpace){if(t=Ah(t,1),e=Kt(e,0,1),i=Kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,r=2*i-a;this.r=Ha(r,a,t+1/3),this.g=Ha(r,a,t),this.b=Ha(r,a,t-1/3)}return Yt.colorSpaceToWorking(this,n),this}setStyle(t,e=le){function i(a){a!==void 0&&parseFloat(a)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,e);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=n[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=le){const i=gc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=le){return Yt.workingToColorSpace(Ne.copy(this),t),Math.round(Kt(Ne.r*255,0,255))*65536+Math.round(Kt(Ne.g*255,0,255))*256+Math.round(Kt(Ne.b*255,0,255))}getHexString(t=le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(Ne.copy(this),e);const i=Ne.r,n=Ne.g,a=Ne.b,r=Math.max(i,n,a),o=Math.min(i,n,a);let c,l;const u=(o+r)/2;if(o===r)c=0,l=0;else{const f=r-o;switch(l=u<=.5?f/(r+o):f/(2-r-o),r){case i:c=(n-a)/f+(n<a?6:0);break;case n:c=(a-i)/f+2;break;case a:c=(i-n)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=le){Yt.workingToColorSpace(Ne.copy(this),t);const e=Ne.r,i=Ne.g,n=Ne.b;return t!==le?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL(Ms);const i=Na(zi.h,Ms.h,e),n=Na(zi.s,Ms.s,e),a=Na(zi.l,Ms.l,e);return this.setHSL(i,n,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*n,this.g=a[1]*e+a[4]*i+a[7]*n,this.b=a[2]*e+a[5]*i+a[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new gt;gt.NAMES=gc;class _a{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new gt(t),this.near=e,this.far=i}clone(){return new _a(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class oo extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ai=new P,Ti=new P,Ga=new P,Ai=new P,xn=new P,_n=new P,Qo=new P,Va=new P,Wa=new P,Xa=new P,$a=new fe,qa=new fe,Ya=new fe;class ei{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),ai.subVectors(t,e),n.cross(ai);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,e,i,n,a){ai.subVectors(n,e),Ti.subVectors(i,e),Ga.subVectors(t,e);const r=ai.dot(ai),o=ai.dot(Ti),c=ai.dot(Ga),l=Ti.dot(Ti),u=Ti.dot(Ga),f=r*l-o*o;if(f===0)return a.set(0,0,0),null;const d=1/f,h=(l*c-o*u)*d,p=(r*u-o*c)*d;return a.set(1-h-p,p,h)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(t,e,i,n,a,r,o,c){return this.getBarycoord(t,e,i,n,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Ai.x),c.addScaledVector(r,Ai.y),c.addScaledVector(o,Ai.z),c)}static getInterpolatedAttribute(t,e,i,n,a,r){return $a.setScalar(0),qa.setScalar(0),Ya.setScalar(0),$a.fromBufferAttribute(t,e),qa.fromBufferAttribute(t,i),Ya.fromBufferAttribute(t,n),r.setScalar(0),r.addScaledVector($a,a.x),r.addScaledVector(qa,a.y),r.addScaledVector(Ya,a.z),r}static isFrontFacing(t,e,i,n){return ai.subVectors(i,e),Ti.subVectors(t,e),ai.cross(Ti).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),ai.cross(Ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ei.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,a){return ei.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}containsPoint(t){return ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,a=this.c;let r,o;xn.subVectors(n,i),_n.subVectors(a,i),Va.subVectors(t,i);const c=xn.dot(Va),l=_n.dot(Va);if(c<=0&&l<=0)return e.copy(i);Wa.subVectors(t,n);const u=xn.dot(Wa),f=_n.dot(Wa);if(u>=0&&f<=u)return e.copy(n);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0&&c-u>0)return r=c/(c-u),e.copy(i).addScaledVector(xn,r);Xa.subVectors(t,a);const h=xn.dot(Xa),p=_n.dot(Xa);if(p>=0&&h<=p)return e.copy(a);const v=h*l-c*p;if(v<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(i).addScaledVector(_n,o);const g=u*p-h*f;if(g<=0&&f-u>=0&&h-p>=0)return Qo.subVectors(a,n),o=(f-u)/(f-u+(h-p)),e.copy(n).addScaledVector(Qo,o);const m=1/(g+v+d);return r=v*m,o=d*m,e.copy(i).addScaledVector(xn,r).addScaledVector(_n,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ds{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ri):ri.fromBufferAttribute(a,r),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ss.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ss.copy(i.boundingBox)),Ss.applyMatrix4(t.matrixWorld),this.union(Ss)}const n=t.children;for(let a=0,r=n.length;a<r;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xn),ys.subVectors(this.max,Xn),Mn.subVectors(t.a,Xn),Sn.subVectors(t.b,Xn),yn.subVectors(t.c,Xn),Hi.subVectors(Sn,Mn),Gi.subVectors(yn,Sn),sn.subVectors(Mn,yn);let e=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-sn.z,sn.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,sn.z,0,-sn.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-sn.y,sn.x,0];return!Ka(e,Mn,Sn,yn,ys)||(e=[1,0,0,0,1,0,0,0,1],!Ka(e,Mn,Sn,yn,ys))?!1:(bs.crossVectors(Hi,Gi),e=[bs.x,bs.y,bs.z],Ka(e,Mn,Sn,yn,ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ri=[new P,new P,new P,new P,new P,new P,new P,new P],ri=new P,Ss=new ds,Mn=new P,Sn=new P,yn=new P,Hi=new P,Gi=new P,sn=new P,Xn=new P,ys=new P,bs=new P,an=new P;function Ka(s,t,e,i,n){for(let a=0,r=s.length-3;a<=r;a+=3){an.fromArray(s,a);const o=n.x*Math.abs(an.x)+n.y*Math.abs(an.y)+n.z*Math.abs(an.z),c=t.dot(an),l=e.dot(an),u=i.dot(an);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ve=new P,Es=new Nt;let Gh=0;class ii extends un{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=hc,this.updateRanges=[],this.gpuType=xi,this.version=0,this._normalizationScale=t!==void 0?xa(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Es.fromBufferAttribute(this,e),Es.applyMatrix3(t),this.setXY(e,Es.x,Es.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),a=this._normalize(a)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):uc(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):fc(t,this.array)}}class vc extends ii{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class xc extends ii{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class te extends ii{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Vh=new ds,$n=new P,Za=new P;class us{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Vh.setFromPoints(t).getCenter(i);let n=0;for(let a=0,r=t.length;a<r;a++)n=Math.max(n,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$n.subVectors(t,this.center);const e=$n.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector($n,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($n.copy(t.center).add(Za)),this.expandByPoint($n.copy(t.center).sub(Za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Wh=0;const ti=new ae,Ja=new pe,bn=new P,Xe=new ds,qn=new ds,we=new P;class me extends un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bh(t)?xc:vc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Bt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,i){return ti.makeTranslation(t,e,i),this.applyMatrix4(ti),this}scale(t,e,i){return ti.makeScale(t,e,i),this.applyMatrix4(ti),this}lookAt(t){return Ja.lookAt(t),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bn).negate(),this.translate(bn.x,bn.y,bn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,a=t.length;n<a;n++){const r=t[n];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new te(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const a=t[n];e.setXYZ(n,a.x,a.y,a.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const a=e[i];Xe.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];qn.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(Xe.min,qn.min),Xe.expandByPoint(we),we.addVectors(Xe.max,qn.max),Xe.expandByPoint(we)):(Xe.expandByPoint(qn.min),Xe.expandByPoint(qn.max))}Xe.getCenter(i);let n=0;for(let a=0,r=t.count;a<r;a++)we.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(we));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)we.fromBufferAttribute(o,l),c&&(bn.fromBufferAttribute(t,l),we.add(bn)),n=Math.max(n,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,a=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new ii(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],c=[],l=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new P,c[D]=new P;const u=new P,f=new P,d=new P,h=new Nt,p=new Nt,v=new Nt,g=new P,m=new P;function _(D,R,I){l[D]=l[R]=l[I]=1,u.fromBufferAttribute(i,D),f.fromBufferAttribute(i,R),d.fromBufferAttribute(i,I),h.fromBufferAttribute(a,D),p.fromBufferAttribute(a,R),v.fromBufferAttribute(a,I),f.sub(u),d.sub(u),p.sub(h),v.sub(h);const U=1/(p.x*v.y-v.x*p.y);isFinite(U)&&(g.copy(f).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(U),o[D].add(g),o[R].add(g),o[I].add(g),c[D].add(m),c[R].add(m),c[I].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let D=0,R=E.length;D<R;++D){const I=E[D],U=I.start,O=I.count;for(let L=U,z=U+O;L<z;L+=3)_(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const y=new P,T=new P,w=new P,x=new P;function b(D){w.fromBufferAttribute(n,D),x.copy(w);const R=o[D];y.copy(R),y.sub(w.multiplyScalar(w.dot(R))).normalize(),T.crossVectors(x,R);const U=T.dot(c[D])<0?-1:1;r.setXYZW(D,y.x,y.y,y.z,U)}for(let D=0,R=i.count;D<R;++D)l[D]&&b(D);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ii(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const n=new P,a=new P,r=new P,o=new P,c=new P,l=new P,u=new P,f=new P;if(t)for(let d=0,h=t.count;d<h;d+=3){const p=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);n.fromBufferAttribute(e,p),a.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),u.subVectors(r,a),f.subVectors(n,a),u.cross(f),o.fromBufferAttribute(i,p),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),o.add(u),c.add(u),l.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,h=e.count;d<h;d+=3)n.fromBufferAttribute(e,d+0),a.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),u.subVectors(r,a),f.subVectors(n,a),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let h=0,p=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?h=c[v]*o.data.stride+o.offset:h=c[v]*u;for(let m=0;m<u;m++)d[p++]=l[h++]}return new ii(d,u,f)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new me,i=this.index.array,n=this.attributes;for(const o in n){const c=n[o],l=t(c,i);e.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],h=t(d,i);c.push(h)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const n={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const h=l[f];u.push(h.toJSON(t.data))}u.length>0&&(n[c]=u,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const l in n){const u=n[l];this.setAttribute(l,u.clone(e))}const a=t.morphAttributes;for(const l in a){const u=[],f=a[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,u=r.length;l<u;l++){const f=r[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hc,this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,a=this.stride;n<a;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=jo(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=jo(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function jo(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=fn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const Be=new P;class la{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?xa(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),a=this._normalize(a)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=a,this}clone(t){if(t===void 0){ra("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[n+a])}return new ii(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new la(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ra("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[n+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):uc(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):fc(t,this.data.array)}}const Qa=new P,$h=new P,qh=new Bt;class Wi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Qa.subVectors(i,e).cross($h.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta(Qa),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||qh.getNormalMatrix(t),n=this.coplanarPoint(Qa).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Yh=0;class ji extends un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=Nn,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=Pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ia,this.stencilZFail=Ia,this.stencilZPass=Ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(e){const a=n(t.textures),r=n(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Wi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Nt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fs extends ji{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let En;const Yn=new P,wn=new P,Tn=new P,An=new Nt,Kn=new Nt,_c=new ae,ws=new P,Zn=new P,Ts=new P,tl=new Nt,ja=new Nt,el=new Nt;class Ma extends pe{constructor(t=new fs){if(super(),this.isSprite=!0,this.type="Sprite",En===void 0){En=new me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Xh(e,5);En.setIndex([0,1,2,0,2,3]),En.setAttribute("position",new la(i,3,0,!1)),En.setAttribute("uv",new la(i,2,3,!1))}this.geometry=En,this.material=t,this.center=new Nt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wn.setFromMatrixScale(this.matrixWorld),_c.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Tn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wn.multiplyScalar(-Tn.z);const i=this.material.rotation;let n,a;i!==0&&(a=Math.cos(i),n=Math.sin(i));const r=this.center;As(ws.set(-.5,-.5,0),Tn,r,wn,n,a),As(Zn.set(.5,-.5,0),Tn,r,wn,n,a),As(Ts.set(.5,.5,0),Tn,r,wn,n,a),tl.set(0,0),ja.set(1,0),el.set(1,1);let o=t.ray.intersectTriangle(ws,Zn,Ts,!1,Yn);if(o===null&&(As(Zn.set(-.5,.5,0),Tn,r,wn,n,a),ja.set(0,1),o=t.ray.intersectTriangle(ws,Ts,Zn,!1,Yn),o===null))return;const c=t.ray.origin.distanceTo(Yn);c<t.near||c>t.far||e.push({distance:c,point:Yn.clone(),uv:ei.getInterpolation(Yn,ws,Zn,Ts,tl,ja,el,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function As(s,t,e,i,n,a){An.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Kn.x=a*An.x-n*An.y,Kn.y=n*An.x+a*An.y):Kn.copy(An),s.copy(t),s.x+=Kn.x,s.y+=Kn.y,s.applyMatrix4(_c)}const Ci=new P,tr=new P,Rs=new P,Cs=new P;class lo{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){tr.copy(t).add(e).multiplyScalar(.5),Rs.copy(e).sub(t).normalize(),Cs.copy(this.origin).sub(tr);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Rs),o=Cs.dot(this.direction),c=-Cs.dot(Rs),l=Cs.lengthSq(),u=Math.abs(1-r*r);let f,d,h,p;if(u>0)if(f=r*c-o,d=r*o-c,p=a*u,f>=0)if(d>=-p)if(d<=p){const v=1/u;f*=v,d*=v,h=f*(f+r*d+2*o)+d*(r*f+d+2*c)+l}else d=a,f=Math.max(0,-(r*d+o)),h=-f*f+d*(d+2*c)+l;else d=-a,f=Math.max(0,-(r*d+o)),h=-f*f+d*(d+2*c)+l;else d<=-p?(f=Math.max(0,-(-r*a+o)),d=f>0?-a:Math.min(Math.max(-a,-c),a),h=-f*f+d*(d+2*c)+l):d<=p?(f=0,d=Math.min(Math.max(-a,-c),a),h=d*(d+2*c)+l):(f=Math.max(0,-(r*a+o)),d=f>0?a:Math.min(Math.max(-a,-c),a),h=-f*f+d*(d+2*c)+l);else d=r>0?-a:a,f=Math.max(0,-(r*d+o)),h=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(tr).addScaledVector(Rs,d),h}intersectSphere(t,e){if(t.radius<0)return null;Ci.subVectors(t.center,this.origin);const i=Ci.dot(this.direction),n=Ci.dot(Ci)-i*i,a=t.radius*t.radius;if(n>a)return null;const r=Math.sqrt(a-n),o=i-r,c=i+r;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,a,r,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,n=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,n=(t.min.x-d.x)*l),u>=0?(a=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(a=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),i>r||a>n||((a>i||isNaN(i))&&(i=a),(r<n||isNaN(n))&&(n=r),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,i,n,a){const r=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=t.x-r.x,d=t.y-r.y,h=t.z-r.z,p=e.x-r.x,v=e.y-r.y,g=e.z-r.z,m=i.x-r.x,_=i.y-r.y,E=i.z-r.z,y=Math.abs(c),T=Math.abs(l),w=Math.abs(u);let x,b,D,R,I,U,O,L,z,W,B,tt;if(y>=T&&y>=w?(D=c,U=f,z=p,tt=m,c>=0?(x=l,b=u,R=d,I=h,O=v,L=g,W=_,B=E):(x=u,b=l,R=h,I=d,O=g,L=v,W=E,B=_)):T>=w?(D=l,U=d,z=v,tt=_,l>=0?(x=u,b=c,R=h,I=f,O=g,L=p,W=E,B=m):(x=c,b=u,R=f,I=h,O=p,L=g,W=m,B=E)):(D=u,U=h,z=g,tt=E,u>=0?(x=c,b=l,R=f,I=d,O=p,L=v,W=m,B=_):(x=l,b=c,R=d,I=f,O=v,L=p,W=_,B=m)),D===0)return null;const X=x/D,Q=b/D,j=1/D,Mt=R-X*U,Pt=I-Q*U,Y=O-X*z,ut=L-Q*z,xt=W-X*tt,Tt=B-Q*tt,ft=xt*ut-Tt*Y,Ut=Mt*Tt-Pt*xt,ce=Y*Pt-ut*Mt;if(n){if(ft<0||Ut<0||ce<0)return null}else if((ft<0||Ut<0||ce<0)&&(ft>0||Ut>0||ce>0))return null;const wt=ft+Ut+ce;if(wt===0)return null;const It=j*(ft*U+Ut*z+ce*tt);return(wt>0?It<0:It>0)?null:this.at(It/wt,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const il=new ae,rn=new lo,Ls=new us,nl=new P,Ps=new P,Is=new P,Ds=new P,er=new P,Ns=new P,sl=new P,Us=new P;class Rt extends pe{constructor(t=new me,e=new ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(a&&o){Ns.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=o[c],f=a[c];u!==0&&(er.fromBufferAttribute(f,t),r?Ns.addScaledVector(er,u):Ns.addScaledVector(er.sub(e),u))}e.add(Ns)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(a),rn.copy(t.ray).recast(t.near),!(Ls.containsPoint(rn.origin)===!1&&(rn.intersectSphere(Ls,nl)===null||rn.origin.distanceToSquared(nl)>(t.far-t.near)**2))&&(il.copy(a).invert(),rn.copy(t.ray).applyMatrix4(il),!(i.boundingBox!==null&&rn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,rn)))}_computeIntersections(t,e,i){let n;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,d=a.groups,h=a.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=r[g.materialIndex],_=Math.max(g.start,h.start),E=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let y=_,T=E;y<T;y+=3){const w=o.getX(y),x=o.getX(y+1),b=o.getX(y+2);n=Fs(this,m,t,i,l,u,f,w,x,b),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{const p=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let g=p,m=v;g<m;g+=3){const _=o.getX(g),E=o.getX(g+1),y=o.getX(g+2);n=Fs(this,r,t,i,l,u,f,_,E,y),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(r))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=r[g.materialIndex],_=Math.max(g.start,h.start),E=Math.min(c.count,Math.min(g.start+g.count,h.start+h.count));for(let y=_,T=E;y<T;y+=3){const w=y,x=y+1,b=y+2;n=Fs(this,m,t,i,l,u,f,w,x,b),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{const p=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let g=p,m=v;g<m;g+=3){const _=g,E=g+1,y=g+2;n=Fs(this,r,t,i,l,u,f,_,E,y),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}}function Kh(s,t,e,i,n,a,r,o){let c;if(t.side===He?c=i.intersectTriangle(r,a,n,!0,o):c=i.intersectTriangle(n,a,r,t.side===Ni,o),c===null)return null;Us.copy(o),Us.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Us);return l<e.near||l>e.far?null:{distance:l,point:Us.clone(),object:s}}function Fs(s,t,e,i,n,a,r,o,c,l){s.getVertexPosition(o,Ps),s.getVertexPosition(c,Is),s.getVertexPosition(l,Ds);const u=Kh(s,t,e,i,Ps,Is,Ds,sl);if(u){const f=new P;ei.getBarycoord(sl,Ps,Is,Ds,f),n&&(u.uv=ei.getInterpolatedAttribute(n,o,c,l,f,new Nt)),a&&(u.uv1=ei.getInterpolatedAttribute(a,o,c,l,f,new Nt)),r&&(u.normal=ei.getInterpolatedAttribute(r,o,c,l,f,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new P,materialIndex:0};ei.getNormal(Ps,Is,Ds,d.normal),u.face=d,u.barycoord=f}return u}class Zh extends Fe{constructor(t=null,e=1,i=1,n,a,r,o,c,l=Le,u=Le,f,d){super(null,r,o,c,l,u,n,a,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const on=new us,Jh=new Nt(.5,.5),Os=new P;class os{constructor(t=new Wi,e=new Wi,i=new Wi,n=new Wi,a=new Wi,r=new Wi){this.planes=[t,e,i,n,a,r]}set(t,e,i,n,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=hi,i=!1){const n=this.planes,a=t.elements,r=a[0],o=a[1],c=a[2],l=a[3],u=a[4],f=a[5],d=a[6],h=a[7],p=a[8],v=a[9],g=a[10],m=a[11],_=a[12],E=a[13],y=a[14],T=a[15];if(n[0].setComponents(l-r,h-u,m-p,T-_).normalize(),n[1].setComponents(l+r,h+u,m+p,T+_).normalize(),n[2].setComponents(l+o,h+f,m+v,T+E).normalize(),n[3].setComponents(l-o,h-f,m-v,T-E).normalize(),i)n[4].setComponents(c,d,g,y).normalize(),n[5].setComponents(l-c,h-d,m-g,T-y).normalize();else if(n[4].setComponents(l-c,h-d,m-g,T-y).normalize(),e===hi)n[5].setComponents(l+c,h+d,m+g,T+y).normalize();else if(e===rs)n[5].setComponents(c,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),on.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),on.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(on)}intersectsSprite(t){on.center.set(0,0,0);const e=Jh.distanceTo(t.center);return on.radius=.7071067811865476+e,on.applyMatrix4(t.matrixWorld),this.intersectsSphere(on)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Os.x=n.normal.x>0?t.max.x:t.min.x,Os.y=n.normal.y>0?t.max.y:t.min.y,Os.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Os)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const al=new ae;class co{constructor(){this.coordinateSystem=hi,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){const a=e[n];al.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),i[n]===void 0&&(i[n]=new os),i[n].setFromProjectionMatrix(al,a.coordinateSystem,a.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new os),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new co().copy(this)}}class Mc extends ji{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ca=new P,ha=new P,rl=new ae,Jn=new lo,Bs=new us,ir=new P,ol=new P;class Qh extends pe{constructor(t=new me,e=new Mc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,a=e.count;n<a;n++)ca.fromBufferAttribute(e,n-1),ha.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=ca.distanceTo(ha);t.setAttribute("lineDistance",new te(i,1))}else Dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(n),Bs.radius+=a,t.ray.intersectsSphere(Bs)===!1)return;rl.copy(n).invert(),Jn.copy(t.ray).applyMatrix4(rl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let v=h,g=p-1;v<g;v+=l){const m=u.getX(v),_=u.getX(v+1),E=ks(this,t,Jn,c,m,_,v);E&&e.push(E)}if(this.isLineLoop){const v=u.getX(p-1),g=u.getX(h),m=ks(this,t,Jn,c,v,g,p-1);m&&e.push(m)}}else{const h=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let v=h,g=p-1;v<g;v+=l){const m=ks(this,t,Jn,c,v,v+1,v);m&&e.push(m)}if(this.isLineLoop){const v=ks(this,t,Jn,c,p-1,h,p-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function ks(s,t,e,i,n,a,r){const o=s.geometry.attributes.position;if(ca.fromBufferAttribute(o,n),ha.fromBufferAttribute(o,a),e.distanceSqToSegment(ca,ha,ir,ol)>i)return;ir.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ir);if(!(l<t.near||l>t.far))return{distance:l,point:ol.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}class Sa extends ji{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ll=new ae,Yr=new lo,zs=new us,Hs=new P;class ho extends pe{constructor(t=new me,e=new Sa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere),zs.applyMatrix4(n),zs.radius+=a,t.ray.intersectsSphere(zs)===!1)return;ll.copy(n).invert(),Yr.copy(t.ray).applyMatrix4(ll);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){const d=Math.max(0,r.start),h=Math.min(l.count,r.start+r.count);for(let p=d,v=h;p<v;p++){const g=l.getX(p);Hs.fromBufferAttribute(f,g),cl(Hs,g,c,n,t,e,this)}}else{const d=Math.max(0,r.start),h=Math.min(f.count,r.start+r.count);for(let p=d,v=h;p<v;p++)Hs.fromBufferAttribute(f,p),cl(Hs,p,c,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function cl(s,t,e,i,n,a,r){const o=Yr.distanceSqToPoint(s);if(o<e){const c=new P;Yr.closestPointToPoint(s,c),c.applyMatrix4(i);const l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Sc extends Fe{constructor(t=[],e=Fn,i,n,a,r,o,c,l,u){super(t,e,i,n,a,r,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class di extends Fe{constructor(t,e,i,n,a,r,o,c,l){super(t,e,i,n,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bn extends Fe{constructor(t,e,i=yi,n,a,r,o=Le,c=Le,l,u=Zi,f=1){if(u!==Zi&&u!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:f};super(d,n,a,r,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ro(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class yc extends Bn{constructor(t,e=yi,i=Fn,n,a,r=Le,o=Le,c,l=Zi){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,n,a,r,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class bc extends Fe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ke extends me{constructor(t=1,e=1,i=1,n=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:a,depthSegments:r};const o=this;n=Math.floor(n),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],u=[],f=[];let d=0,h=0;p("z","y","x",-1,-1,i,e,t,r,a,0),p("z","y","x",1,-1,i,e,-t,r,a,1),p("x","z","y",1,1,t,i,e,n,r,2),p("x","z","y",1,-1,t,i,-e,n,r,3),p("x","y","z",1,-1,t,e,i,n,a,4),p("x","y","z",-1,-1,t,e,-i,n,a,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(f,2));function p(v,g,m,_,E,y,T,w,x,b,D){const R=y/x,I=T/b,U=y/2,O=T/2,L=w/2,z=x+1,W=b+1;let B=0,tt=0;const X=new P;for(let Q=0;Q<W;Q++){const j=Q*I-O;for(let Mt=0;Mt<z;Mt++){const Pt=Mt*R-U;X[v]=Pt*_,X[g]=j*E,X[m]=L,l.push(X.x,X.y,X.z),X[v]=0,X[g]=0,X[m]=w>0?1:-1,u.push(X.x,X.y,X.z),f.push(Mt/x),f.push(1-Q/b),B+=1}}for(let Q=0;Q<b;Q++)for(let j=0;j<x;j++){const Mt=d+j+z*Q,Pt=d+j+z*(Q+1),Y=d+(j+1)+z*(Q+1),ut=d+(j+1)+z*Q;c.push(Mt,Pt,ut),c.push(Pt,Y,ut),tt+=6}o.addGroup(h,tt,D),h+=tt,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class uo extends me{constructor(t=1,e=1,i=4,n=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:a},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),a=Math.max(1,Math.floor(a));const r=[],o=[],c=[],l=[],u=e/2,f=Math.PI/2*t,d=e,h=2*f+d,p=i*2+a,v=n+1,g=new P,m=new P;for(let _=0;_<=p;_++){let E=0,y=0,T=0,w=0;if(_<=i){const D=_/i,R=D*Math.PI/2;y=-u-t*Math.cos(R),T=t*Math.sin(R),w=-t*Math.cos(R),E=D*f}else if(_<=i+a){const D=(_-i)/a;y=-u+D*e,T=t,w=0,E=f+D*d}else{const D=(_-i-a)/i,R=D*Math.PI/2;y=u+t*Math.sin(R),T=t*Math.cos(R),w=t*Math.sin(R),E=f+d+D*f}const x=Math.max(0,Math.min(1,E/h));let b=0;_===0?b=.5/n:_===p&&(b=-.5/n);for(let D=0;D<=n;D++){const R=D/n,I=R*Math.PI*2,U=Math.sin(I),O=Math.cos(I);m.x=-T*O,m.y=y,m.z=T*U,o.push(m.x,m.y,m.z),g.set(-T*O,w,T*U),g.normalize(),c.push(g.x,g.y,g.z),l.push(R+b,x)}if(_>0){const D=(_-1)*v;for(let R=0;R<n;R++){const I=D+R,U=D+R+1,O=_*v+R,L=_*v+R+1;r.push(I,U,O),r.push(U,L,O)}}}this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uo(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class fo extends me{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const a=[],r=[],o=[],c=[],l=new P,u=new Nt;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const h=i+f/e*n;l.x=t*Math.cos(h),l.y=t*Math.sin(h),r.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(r[d]/t+1)/2,u.y=(r[d+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)a.push(f,f+1,0);this.setIndex(a),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ji extends me{constructor(t=1,e=1,i=1,n=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;n=Math.floor(n),a=Math.floor(a);const u=[],f=[],d=[],h=[];let p=0;const v=[],g=i/2;let m=0;_(),r===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new te(f,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(h,2));function _(){const y=new P,T=new P;let w=0;const x=(e-t)/i;for(let b=0;b<=a;b++){const D=[],R=b/a,I=R*(e-t)+t;for(let U=0;U<=n;U++){const O=U/n,L=O*c+o,z=Math.sin(L),W=Math.cos(L);T.x=I*z,T.y=-R*i+g,T.z=I*W,f.push(T.x,T.y,T.z),y.set(z,x,W).normalize(),d.push(y.x,y.y,y.z),h.push(O,1-R),D.push(p++)}v.push(D)}for(let b=0;b<n;b++)for(let D=0;D<a;D++){const R=v[D][b],I=v[D+1][b],U=v[D+1][b+1],O=v[D][b+1];(t>0||D!==0)&&(u.push(R,I,O),w+=3),(e>0||D!==a-1)&&(u.push(I,U,O),w+=3)}l.addGroup(m,w,0),m+=w}function E(y){const T=p,w=new Nt,x=new P;let b=0;const D=y===!0?t:e,R=y===!0?1:-1;for(let U=1;U<=n;U++)f.push(0,g*R,0),d.push(0,R,0),h.push(.5,.5),p++;const I=p;for(let U=0;U<=n;U++){const L=U/n*c+o,z=Math.cos(L),W=Math.sin(L);x.x=D*W,x.y=g*R,x.z=D*z,f.push(x.x,x.y,x.z),d.push(0,R,0),w.x=z*.5+.5,w.y=W*.5*R+.5,h.push(w.x,w.y),p++}for(let U=0;U<n;U++){const O=T+U,L=I+U;y===!0?u.push(L,L+1,O):u.push(L+1,L,O),b+=3}l.addGroup(m,b,y===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hn extends Ji{constructor(t=1,e=1,i=32,n=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,i,n,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new hn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class po extends me{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const a=[],r=[];o(n),l(i),u(),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(a.slice(),3)),this.setAttribute("uv",new te(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const E=new P,y=new P,T=new P;for(let w=0;w<e.length;w+=3)h(e[w+0],E),h(e[w+1],y),h(e[w+2],T),c(E,y,T,_)}function c(_,E,y,T){const w=T+1,x=[];for(let b=0;b<=w;b++){x[b]=[];const D=_.clone().lerp(y,b/w),R=E.clone().lerp(y,b/w),I=w-b;for(let U=0;U<=I;U++)U===0&&b===w?x[b][U]=D:x[b][U]=D.clone().lerp(R,U/I)}for(let b=0;b<w;b++)for(let D=0;D<2*(w-b)-1;D++){const R=Math.floor(D/2);D%2===0?(d(x[b][R+1]),d(x[b+1][R]),d(x[b][R])):(d(x[b][R+1]),d(x[b+1][R+1]),d(x[b+1][R]))}}function l(_){const E=new P;for(let y=0;y<a.length;y+=3)E.x=a[y+0],E.y=a[y+1],E.z=a[y+2],E.normalize().multiplyScalar(_),a[y+0]=E.x,a[y+1]=E.y,a[y+2]=E.z}function u(){const _=new P;for(let E=0;E<a.length;E+=3){_.x=a[E+0],_.y=a[E+1],_.z=a[E+2];const y=g(_)/2/Math.PI+.5,T=m(_)/Math.PI+.5;r.push(y,1-T)}p(),f()}function f(){for(let _=0;_<r.length;_+=6){const E=r[_+0],y=r[_+2],T=r[_+4],w=Math.max(E,y,T),x=Math.min(E,y,T);w>.9&&x<.1&&(E<.2&&(r[_+0]+=1),y<.2&&(r[_+2]+=1),T<.2&&(r[_+4]+=1))}}function d(_){a.push(_.x,_.y,_.z)}function h(_,E){const y=_*3;E.x=t[y+0],E.y=t[y+1],E.z=t[y+2]}function p(){const _=new P,E=new P,y=new P,T=new P,w=new Nt,x=new Nt,b=new Nt;for(let D=0,R=0;D<a.length;D+=9,R+=6){_.set(a[D+0],a[D+1],a[D+2]),E.set(a[D+3],a[D+4],a[D+5]),y.set(a[D+6],a[D+7],a[D+8]),w.set(r[R+0],r[R+1]),x.set(r[R+2],r[R+3]),b.set(r[R+4],r[R+5]),T.copy(_).add(E).add(y).divideScalar(3);const I=g(T);v(w,R+0,_,I),v(x,R+2,E,I),v(b,R+4,y,I)}}function v(_,E,y,T){T<0&&_.x===1&&(r[E]=_.x-1),y.x===0&&y.z===0&&(r[E]=T/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.vertices,t.indices,t.radius,t.detail)}}class mo extends po{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new mo(t.radius,t.detail)}}class qe extends me{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const a=t/2,r=e/2,o=Math.floor(i),c=Math.floor(n),l=o+1,u=c+1,f=t/o,d=e/c,h=[],p=[],v=[],g=[];for(let m=0;m<u;m++){const _=m*d-r;for(let E=0;E<l;E++){const y=E*f-a;p.push(y,-_,0),v.push(0,0,1),g.push(E/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<o;_++){const E=_+l*m,y=_+l*(m+1),T=_+1+l*(m+1),w=_+1+l*m;h.push(E,y,w),h.push(y,T,w)}this.setIndex(h),this.setAttribute("position",new te(p,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.width,t.height,t.widthSegments,t.heightSegments)}}class Yi extends me{constructor(t=.5,e=1,i=32,n=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:a,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const o=[],c=[],l=[],u=[];let f=t;const d=(e-t)/n,h=new P,p=new Nt;for(let v=0;v<=n;v++){for(let g=0;g<=i;g++){const m=a+g/i*r;h.x=f*Math.cos(m),h.y=f*Math.sin(m),c.push(h.x,h.y,h.z),l.push(0,0,1),p.x=(h.x/e+1)/2,p.y=(h.y/e+1)/2,u.push(p.x,p.y)}f+=d}for(let v=0;v<n;v++){const g=v*(i+1);for(let m=0;m<i;m++){const _=m+g,E=_,y=_+i+1,T=_+i+2,w=_+1;o.push(E,y,w),o.push(y,T,w)}}this.setIndex(o),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ls extends me{constructor(t=1,e=32,i=16,n=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+o,Math.PI);let l=0;const u=[],f=new P,d=new P,h=[],p=[],v=[],g=[];for(let m=0;m<=i;m++){const _=[],E=m/i,y=r+E*o,T=t*Math.cos(y),w=Math.sqrt(t*t-T*T);let x=0;m===0&&r===0?x=.5/e:m===i&&c===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){const D=b/e,R=n+D*a;f.x=-w*Math.cos(R),f.y=T,f.z=w*Math.sin(R),p.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),g.push(D+x,1-E),_.push(l++)}u.push(_)}for(let m=0;m<i;m++)for(let _=0;_<e;_++){const E=u[m][_+1],y=u[m][_],T=u[m+1][_],w=u[m+1][_+1];(m!==0||r>0)&&h.push(E,y,w),(m!==i-1||c<Math.PI)&&h.push(y,T,w)}this.setIndex(h),this.setAttribute("position",new te(p,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ki extends me{constructor(t=1,e=.4,i=12,n=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:a,thetaStart:r,thetaLength:o},i=Math.floor(i),n=Math.floor(n);const c=[],l=[],u=[],f=[],d=new P,h=new P,p=new P;for(let v=0;v<=i;v++){const g=r+v/i*o;for(let m=0;m<=n;m++){const _=m/n*a;h.x=(t+e*Math.cos(g))*Math.cos(_),h.y=(t+e*Math.cos(g))*Math.sin(_),h.z=e*Math.sin(g),l.push(h.x,h.y,h.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),p.subVectors(h,d).normalize(),u.push(p.x,p.y,p.z),f.push(m/n),f.push(v/i)}}for(let v=1;v<=i;v++)for(let g=1;g<=n;g++){const m=(n+1)*v+g-1,_=(n+1)*(v-1)+g-1,E=(n+1)*(v-1)+g,y=(n+1)*v+g;c.push(m,_,y),c.push(_,E,y)}this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ki(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function kn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];if(hl(n))n.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(hl(n[0])){const a=[];for(let r=0,o=n.length;r<o;r++)a[r]=n[r].clone();t[e][i]=a}else t[e][i]=n.slice();else t[e][i]=n}}return t}function ke(s){const t={};for(let e=0;e<s.length;e++){const i=kn(s[e]);for(const n in i)t[n]=i[n]}return t}function hl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function jh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ec(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const td={clone:kn,merge:ke};var ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ed,this.fragmentShader=id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=kn(t.uniforms),this.uniformsGroups=jh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new gt().setHex(n.value);break;case"v2":this.uniforms[i].value=new Nt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new P().fromArray(n.value);break;case"v4":this.uniforms[i].value=new fe().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Bt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new ae().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class nd extends Qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ci extends ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sd extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ad extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ya extends pe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class go extends ya{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const nr=new ae,dl=new P,ul=new P;class vo{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=Ye,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new os,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;dl.setFromMatrixPosition(t.matrixWorld),e.position.copy(dl),ul.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ul),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){nr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(nr,t.coordinateSystem,t.reversedDepth);const a=this._frameExtents,r=n?n.z/a.x:1,o=n?n.w/a.y:1,c=n?n.x/a.x:0,l=n?n.y/a.y:0;t.coordinateSystem===rs||t.reversedDepth?e.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(nr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Gs=new P,Vs=new Hn,fi=new P;class wc extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Gs,Vs,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gs,Vs,fi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Gs,Vs,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gs,Vs,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new P,fl=new Nt,pl=new Nt;class ze extends wc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=oa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,fl,pl),e.subVectors(pl,fl)}setViewOffset(t,e,i,n,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Da*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,a=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*n/c,e-=r.offsetY*i/l,n*=r.width/c,i*=r.height/l}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class rd extends vo{constructor(){super(new ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=oa*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,a=t.distance||e.far;(i!==e.fov||n!==e.aspect||a!==e.far)&&(e.fov=i,e.aspect=n,e.far=a,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class od extends ya{constructor(t,e,i=0,n=Math.PI/3,a=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.distance=i,this.angle=n,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new rd}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class ld extends vo{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0}}class $e extends ya{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new ld}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Tc extends wc{constructor(t=-1,e=1,i=1,n=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-t,r=i+t,o=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class cd extends vo{constructor(){super(new Tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zn extends ya{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new cd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Rn=-90,Cn=1;class Kr extends pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new ze(Rn,Cn,t,e);n.layers=this.layers,this.add(n);const a=new ze(Rn,Cn,t,e);a.layers=this.layers,this.add(a);const r=new ze(Rn,Cn,t,e);r.layers=this.layers,this.add(r);const o=new ze(Rn,Cn,t,e);o.layers=this.layers,this.add(o);const c=new ze(Rn,Cn,t,e);c.layers=this.layers,this.add(c);const l=new ze(Rn,Cn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,a,r,o,c]=e;for(const l of e)this.remove(l);if(t===hi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===rs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,1,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,2,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.mipmapsAutoUpdate=v,t.setRenderTarget(i,5,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,d,h),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class hd extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}function ml(s,t,e,i){const n=dd(i);switch(e){case sc:return s*t;case rc:return s*t/n.components*n.byteLength;case no:return s*t/n.components*n.byteLength;case dn:return s*t*2/n.components*n.byteLength;case so:return s*t*2/n.components*n.byteLength;case ac:return s*t*3/n.components*n.byteLength;case _i:return s*t*4/n.components*n.byteLength;case ao:return s*t*4/n.components*n.byteLength;case qs:case Ys:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ks:case Zs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xr:case Mr:return Math.max(s,16)*Math.max(t,8)/4;case vr:case _r:return Math.max(s,8)*Math.max(t,8)/2;case Sr:case yr:case Er:case wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case br:case ea:case Tr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ar:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Cr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Lr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Pr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ir:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Dr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Nr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ur:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Fr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Or:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Br:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case kr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case zr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Hr:case Gr:case Vr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Wr:case Xr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ia:case $r:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dd(s){switch(s){case Ye:case tc:return{byteLength:1,components:1};case as:case ec:case bi:return{byteLength:2,components:1};case eo:case io:return{byteLength:2,components:4};case yi:case to:case xi:return{byteLength:4,components:1};case ic:case nc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jr}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jr);function Ac(){let s=null,t=!1,e=null,i=null;function n(a,r){i=s.requestAnimationFrame(n),e(a,r)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function ud(s){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),o.onUploadCallback();let h;if(l instanceof Float32Array)h=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=s.HALF_FLOAT:h=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=s.SHORT;else if(l instanceof Uint32Array)h=s.UNSIGNED_INT;else if(l instanceof Int32Array)h=s.INT;else if(l instanceof Int8Array)h=s.BYTE;else if(l instanceof Uint8Array)h=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c.updateRanges;if(s.bindBuffer(l,o),f.length===0)s.bufferSubData(l,0,u);else{f.sort((h,p)=>h.start-p.start);let d=0;for(let h=1;h<f.length;h++){const p=f[d],v=f[h];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,f[d]=v)}f.length=d+1;for(let h=0,p=f.length;h<p;h++){const v=f[h];s.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:n,remove:a,update:r}}var fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_d=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Td=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ad=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Id=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ud=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Fd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Od=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,su=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,au=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ru=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ou=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,du=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pu=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,mu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_u=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Su=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tu=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Au=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ru=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Uu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ou=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ku=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Gu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$u=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ju=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ju=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ef=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,of=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gf=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Af=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,If=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ff=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:fd,alphahash_pars_fragment:pd,alphamap_fragment:md,alphamap_pars_fragment:gd,alphatest_fragment:vd,alphatest_pars_fragment:xd,aomap_fragment:_d,aomap_pars_fragment:Md,batching_pars_vertex:Sd,batching_vertex:yd,begin_vertex:bd,beginnormal_vertex:Ed,bsdfs:wd,iridescence_fragment:Td,bumpmap_pars_fragment:Ad,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:Cd,clipping_planes_pars_vertex:Ld,clipping_planes_vertex:Pd,color_fragment:Id,color_pars_fragment:Dd,color_pars_vertex:Nd,color_vertex:Ud,common:Fd,defaultnormal_vertex:Od,displacementmap_pars_vertex:Bd,displacementmap_vertex:kd,emissivemap_fragment:zd,emissivemap_pars_fragment:Hd,colorspace_fragment:Gd,colorspace_pars_fragment:Vd,envmap_fragment:Wd,envmap_common_pars_fragment:Xd,envmap_pars_fragment:$d,envmap_pars_vertex:qd,envmap_physical_pars_fragment:su,envmap_vertex:Yd,fog_vertex:Kd,fog_pars_vertex:Zd,fog_fragment:Jd,fog_pars_fragment:Qd,gradientmap_pars_fragment:jd,lightmap_pars_fragment:tu,lights_lambert_fragment:eu,lights_lambert_pars_fragment:iu,lights_pars_begin:nu,lights_toon_fragment:au,lights_toon_pars_fragment:ru,lights_phong_fragment:ou,lights_phong_pars_fragment:lu,lights_physical_fragment:cu,lights_physical_pars_fragment:hu,lights_fragment_begin:du,lights_fragment_maps:uu,lights_fragment_end:fu,lightprobes_pars_fragment:pu,logdepthbuf_fragment:mu,logdepthbuf_pars_fragment:gu,logdepthbuf_pars_vertex:vu,logdepthbuf_vertex:xu,map_fragment:_u,map_pars_fragment:Mu,map_particle_fragment:Su,map_particle_pars_fragment:yu,metalnessmap_fragment:bu,metalnessmap_pars_fragment:Eu,morphinstance_vertex:wu,morphcolor_vertex:Tu,morphnormal_vertex:Au,morphtarget_pars_vertex:Ru,morphtarget_vertex:Cu,normal_fragment_begin:Lu,normal_fragment_maps:Pu,normal_pars_fragment:Iu,normal_pars_vertex:Du,normal_vertex:Nu,normalmap_pars_fragment:Uu,clearcoat_normal_fragment_begin:Fu,clearcoat_normal_fragment_maps:Ou,clearcoat_pars_fragment:Bu,iridescence_pars_fragment:ku,opaque_fragment:zu,packing:Hu,premultiplied_alpha_fragment:Gu,project_vertex:Vu,dithering_fragment:Wu,dithering_pars_fragment:Xu,roughnessmap_fragment:$u,roughnessmap_pars_fragment:qu,shadowmap_pars_fragment:Yu,shadowmap_pars_vertex:Ku,shadowmap_vertex:Zu,shadowmask_pars_fragment:Ju,skinbase_vertex:Qu,skinning_pars_vertex:ju,skinning_vertex:tf,skinnormal_vertex:ef,specularmap_fragment:nf,specularmap_pars_fragment:sf,tonemapping_fragment:af,tonemapping_pars_fragment:rf,transmission_fragment:of,transmission_pars_fragment:lf,uv_pars_fragment:cf,uv_pars_vertex:hf,uv_vertex:df,worldpos_vertex:uf,background_vert:ff,background_frag:pf,backgroundCube_vert:mf,backgroundCube_frag:gf,cube_vert:vf,cube_frag:xf,depth_vert:_f,depth_frag:Mf,distance_vert:Sf,distance_frag:yf,equirect_vert:bf,equirect_frag:Ef,linedashed_vert:wf,linedashed_frag:Tf,meshbasic_vert:Af,meshbasic_frag:Rf,meshlambert_vert:Cf,meshlambert_frag:Lf,meshmatcap_vert:Pf,meshmatcap_frag:If,meshnormal_vert:Df,meshnormal_frag:Nf,meshphong_vert:Uf,meshphong_frag:Ff,meshphysical_vert:Of,meshphysical_frag:Bf,meshtoon_vert:kf,meshtoon_frag:zf,points_vert:Hf,points_frag:Gf,shadow_vert:Vf,shadow_frag:Wf,sprite_vert:Xf,sprite_frag:$f},mt={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},mi={basic:{uniforms:ke([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:ke([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:ke([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:ke([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:ke([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new gt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:ke([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:ke([mt.points,mt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:ke([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:ke([mt.common,mt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:ke([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:ke([mt.sprite,mt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:ke([mt.common,mt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:ke([mt.lights,mt.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};mi.physical={uniforms:ke([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Ws={r:0,b:0,g:0},qf=new ae,Rc=new Bt;Rc.set(-1,0,0,0,1,0,0,0,1);function Yf(s,t,e,i,n,a){const r=new gt(0);let o=n===!0?0:1,c,l,u=null,f=0,d=null;function h(_){let E=_.isScene===!0?_.background:null;if(E&&E.isTexture){const y=_.backgroundBlurriness>0;E=t.get(E,y)}return E}function p(_){let E=!1;const y=h(_);y===null?g(r,o):y&&y.isColor&&(g(y,1),E=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,a),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(_,E){const y=h(E);y&&y.isCubeTexture?(l===void 0&&(l=new Rt(new Ke(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:kn(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(qf.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Rc),l.material.toneMapped=Yt.getTransfer(y.colorSpace)!==ie,(u!==y||f!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Rt(new qe(2,2),new Qi({name:"BackgroundMaterial",uniforms:kn(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(y.colorSpace)!==ie,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,E){_.getRGB(Ws,Ec(s)),e.buffers.color.setClear(Ws.r,Ws.g,Ws.b,E,a)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,E=1){r.set(_),o=E,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(r,o)},render:p,addToRenderList:v,dispose:m}}function Kf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null);let a=n,r=!1;function o(I,U,O,L,z){let W=!1;const B=f(I,L,O,U);a!==B&&(a=B,l(a.object)),W=h(I,L,O,z),W&&p(I,L,O,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,y(I,U,O,L),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return s.createVertexArray()}function l(I){return s.bindVertexArray(I)}function u(I){return s.deleteVertexArray(I)}function f(I,U,O,L){const z=L.wireframe===!0;let W=i[U.id];W===void 0&&(W={},i[U.id]=W);const B=I.isInstancedMesh===!0?I.id:0;let tt=W[B];tt===void 0&&(tt={},W[B]=tt);let X=tt[O.id];X===void 0&&(X={},tt[O.id]=X);let Q=X[z];return Q===void 0&&(Q=d(c()),X[z]=Q),Q}function d(I){const U=[],O=[],L=[];for(let z=0;z<e;z++)U[z]=0,O[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:L,object:I,attributes:{},index:null}}function h(I,U,O,L){const z=a.attributes,W=U.attributes;let B=0;const tt=O.getAttributes();for(const X in tt)if(tt[X].location>=0){const j=z[X];let Mt=W[X];if(Mt===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(Mt=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(Mt=I.instanceColor)),j===void 0||j.attribute!==Mt||Mt&&j.data!==Mt.data)return!0;B++}return a.attributesNum!==B||a.index!==L}function p(I,U,O,L){const z={},W=U.attributes;let B=0;const tt=O.getAttributes();for(const X in tt)if(tt[X].location>=0){let j=W[X];j===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));const Mt={};Mt.attribute=j,j&&j.data&&(Mt.data=j.data),z[X]=Mt,B++}a.attributes=z,a.attributesNum=B,a.index=L}function v(){const I=a.newAttributes;for(let U=0,O=I.length;U<O;U++)I[U]=0}function g(I){m(I,0)}function m(I,U){const O=a.newAttributes,L=a.enabledAttributes,z=a.attributeDivisors;O[I]=1,L[I]===0&&(s.enableVertexAttribArray(I),L[I]=1),z[I]!==U&&(s.vertexAttribDivisor(I,U),z[I]=U)}function _(){const I=a.newAttributes,U=a.enabledAttributes;for(let O=0,L=U.length;O<L;O++)U[O]!==I[O]&&(s.disableVertexAttribArray(O),U[O]=0)}function E(I,U,O,L,z,W,B){B===!0?s.vertexAttribIPointer(I,U,O,z,W):s.vertexAttribPointer(I,U,O,L,z,W)}function y(I,U,O,L){v();const z=L.attributes,W=O.getAttributes(),B=U.defaultAttributeValues;for(const tt in W){const X=W[tt];if(X.location>=0){let Q=z[tt];if(Q===void 0&&(tt==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),tt==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){const j=Q.normalized,Mt=Q.itemSize,Pt=t.get(Q);if(Pt===void 0)continue;const Y=Pt.buffer,ut=Pt.type,xt=Pt.bytesPerElement,Tt=ut===s.INT||ut===s.UNSIGNED_INT||Q.gpuType===to;if(Q.isInterleavedBufferAttribute){const ft=Q.data,Ut=ft.isInterleavedBuffer===!0?ft.stride:ft.itemSize,ce=Q.offset;if(ft.isInstancedInterleavedBuffer||ft.isInstancedBufferAttribute){for(let wt=0;wt<X.locationSize;wt++)m(X.location+wt,ft.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let wt=0;wt<X.locationSize;wt++)g(X.location+wt);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let wt=0;wt<X.locationSize;wt++)E(X.location+wt,Mt/X.locationSize,ut,j,Ut*xt,(ce+Mt/X.locationSize*wt)*xt,Tt)}else{if(Q.isInstancedBufferAttribute){for(let ft=0;ft<X.locationSize;ft++)m(X.location+ft,Q.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ft=0;ft<X.locationSize;ft++)g(X.location+ft);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let ft=0;ft<X.locationSize;ft++)E(X.location+ft,Mt/X.locationSize,ut,j,Mt*xt,Mt/X.locationSize*ft*xt,Tt)}}else if(B!==void 0){const j=B[tt];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(X.location,j);break;case 3:s.vertexAttrib3fv(X.location,j);break;case 4:s.vertexAttrib4fv(X.location,j);break;default:s.vertexAttrib1fv(X.location,j)}}}}_()}function T(){D();for(const I in i){const U=i[I];for(const O in U){const L=U[O];for(const z in L){const W=L[z];for(const B in W)u(W[B].object),delete W[B];delete L[z]}}delete i[I]}}function w(I){if(i[I.id]===void 0)return;const U=i[I.id];for(const O in U){const L=U[O];for(const z in L){const W=L[z];for(const B in W)u(W[B].object),delete W[B];delete L[z]}}delete i[I.id]}function x(I){for(const U in i){const O=i[U];for(const L in O){const z=O[L];if(z[I.id]===void 0)continue;const W=z[I.id];for(const B in W)u(W[B].object),delete W[B];delete z[I.id]}}}function b(I){for(const U in i){const O=i[U],L=I.isInstancedMesh===!0?I.id:0,z=O[L];if(z!==void 0){for(const W in z){const B=z[W];for(const tt in B)u(B[tt].object),delete B[tt];delete z[W]}delete O[L],Object.keys(O).length===0&&delete i[U]}}}function D(){R(),r=!0,a!==n&&(a=n,l(a.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:D,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function Zf(s,t,e){let i;function n(c){i=c}function a(c,l){s.drawArrays(i,c,l),e.update(l,i,1)}function r(c,l,u){u!==0&&(s.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let d=0;for(let h=0;h<u;h++)d+=l[h];e.update(d,i,1)}this.setMode=n,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function Jf(s,t,e,i){let n;function a(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(x){return!(x!==_i&&i.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const b=x===bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Ye&&x!==xi&&!b&&i.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Dt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Dt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:y,maxSamples:T,samples:w}}function Qf(s){const t=this;let e=null,i=0,n=!1,a=!1;const r=new Wi,o=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||n;return n=d,i=f.length,h},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,h){const p=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,m=s.get(f);if(!n||p===null||p.length===0||a&&!g)a?u(null):l();else{const _=a?0:i,E=_*4;let y=m.clippingState||null;c.value=y,y=u(p,d,E,h);for(let T=0;T!==E;++T)y[T]=e[T];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,h,p){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=c.value,p!==!0||g===null){const m=h+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,y=h;E!==v;++E,y+=4)r.copy(f[E]).applyMatrix4(_,o),r.normal.toArray(g,y),g[y+3]=r.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}class xo extends Si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Sc(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Ke(5,5,5),a=new Qi({name:"CubemapFromEquirect",uniforms:kn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:He,blending:Dn});a.uniforms.tEquirect.value=e;const r=new Rt(n,a),o=e.minFilter;return e.minFilter===$i&&(e.minFilter=Ve),new Kr(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(a)}}const gl=256,jf=3,tp=20,Cc=256,Lc=16,ep=3,ip=new P,np=new gt;class da{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Kr(1,10,null),this._boxMesh=new Rt(new Ke(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,a={}){const{size:r=256,position:o=ip}=a,c=this._renderer;this._setSize(r);const l=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);const f=c.autoClear,d=c.autoClearColor,h=c.autoClearDepth,p=c.autoClearStencil,v=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(t.background=c.getClearColor(np));const g=new Kr(i,n,u);return g.position.copy(o),g.update(c,t),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=h,c.autoClearStencil=p,t.background=v,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(gl,Rh(t))}_fromTexture(t,e){t.mapping===Fn||t.mapping===ss?this._setSize(t.image.length===0?gl:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){const t=this._cubeSize,e=vl(t,!1,!1),i=Math.log2(t)-jf;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=vl(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){const n=this._boxMesh,a=this._cubeCamera;n.material=i,a.renderTarget=t,a.activeMipmapLevel=e;const r=t.width>>e;t.viewport.set(0,0,r,r),a.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Fn||t.mapping===ss?(this._cubemapMaterial===null&&(this._cubemapMaterial=_l()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=xl()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=sp(),this._integrationMaterial=ap());const e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;const a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(e/Lc);for(let r=0;r<=i;r++){const o=da.lodToRoughness(r,i);if(r>i-ep)a.roughness.value=o,this._renderCube(t,r,this._integrationMaterial);else{const c=o>0?Math.log2(e)+.5*Math.log2(6/(Cc*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=c,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=rp());const i=this._blurMaterial,n=i.uniforms,a=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=a.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(a,0,i)}}function vl(s,t,e){return new xo(s,{minFilter:$i,generateMipmaps:t,type:bi,colorSpace:na,depthBuffer:e})}function ps(s,t,e){return new Qi({name:s,uniforms:t,vertexShader:Vt.cube_vert,fragmentShader:e,side:He,blending:Dn,depthTest:!1,depthWrite:!1})}function sp(){return ps("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Cc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ap(){return ps("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Lc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function rp(){return ps("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${tp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function xl(){return ps("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function _l(){return ps("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function op(s){let t=new WeakMap,e=new WeakMap,i=null;function n(d,h=!1){return d==null?null:h?r(d):a(d)}function a(d){if(d&&d.isTexture){const h=d.mapping;if(h===Ca||h===La)if(t.has(d)){const p=t.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const v=new xo(p.height);return v.fromEquirectangularTexture(s,d),t.set(d,v),d.addEventListener("dispose",l),o(v.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const h=d.mapping,p=h===Ca||h===La,v=h===Fn||h===ss;if(p||v){let g=e.get(d);const m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new da(s)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const _=d.image;return p&&_&&_.height>0||v&&_&&c(_)?(i===null&&(i=new da(s)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,h){return h===Ca?d.mapping=Fn:h===La&&(d.mapping=ss),d}function c(d){let h=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&h++;return h===p}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:f}}function lp(s){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Js("WebGLRenderer: "+i+" extension not supported."),n}}}function cp(s,t,e,i){const n={},a=new WeakMap,r=new FinalizationRegistry(p=>delete n[p]);function o(p){c(p.target)}function c(p){p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete n[p.id],r.unregister(p);const v=a.get(p);v&&(t.remove(v),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function l(p,v){return n[v.id]!==void 0||(v.addEventListener("dispose",o),n[v.id]=new WeakRef(v),r.register(v,v.id,v),e.memory.geometries++),v}function u(p){const v=p.attributes;for(const g in v)t.update(v[g],s.ARRAY_BUFFER)}function f(p){const v=p.index,g=p.attributes.position;let m=0;if(g===void 0)return;const _=v!==null?v.array.length:g.array.length/3-1,E=g.count>=65535?xc:vc,y=new E(Math.ceil(_/3)*6,1),T=y.array;if(v!==null){const x=v.array;m=v.version;for(let b=0,D=0;b<_;b+=3){const R=x[b+0],I=x[b+1],U=x[b+2];T[D++]=R,T[D++]=I,T[D++]=I,T[D++]=U,T[D++]=U,T[D++]=R}}else{m=g.version;for(let x=0,b=0;x<_;x+=3){const D=x+0,R=x+1,I=x+2;T[b++]=D,T[b++]=R,T[b++]=R,T[b++]=I,T[b++]=I,T[b++]=D}}y.version=m;const w=a.get(p);w&&t.remove(w),a.set(p,y)}function d(p){const v=a.get(p);if(v){const g=p.index;g!==null&&v.version<g.version&&f(p)}else f(p);return a.get(p)}function h(){for(const p in n){const v=n[p].deref();v!==void 0&&c(v)}}return{get:l,update:u,getWireframeAttribute:d,dispose:h}}function hp(s,t,e){let i;function n(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function c(f,d){s.drawElements(i,d,a,f*r),e.update(d,i,1)}function l(f,d,h){h!==0&&(s.drawElementsInstanced(i,d,a,f*r,h),e.update(d,i,h))}function u(f,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,a,f,0,h);let v=0;for(let g=0;g<h;g++)v+=d[g];e.update(v,i,1)}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function dp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:Jt("WebGLInfo: Unknown draw mode:",r);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function up(s,t,e){const i=new WeakMap,n=new fe;function a(r,o,c){const l=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let R=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var h=R;d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let T=o.attributes.position.count*y,w=1;T>t.maxTextureSize&&(w=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const x=new Float32Array(T*w*4*f),b=new pc(x,T,w,f);b.type=xi,b.needsUpdate=!0;const D=y*4;for(let I=0;I<f;I++){const U=m[I],O=_[I],L=E[I],z=T*w*4*I;for(let W=0;W<U.count;W++){const B=W*D;p===!0&&(n.fromBufferAttribute(U,W),x[z+B+0]=n.x,x[z+B+1]=n.y,x[z+B+2]=n.z,x[z+B+3]=0),v===!0&&(n.fromBufferAttribute(O,W),x[z+B+4]=n.x,x[z+B+5]=n.y,x[z+B+6]=n.z,x[z+B+7]=0),g===!0&&(n.fromBufferAttribute(L,W),x[z+B+8]=n.x,x[z+B+9]=n.y,x[z+B+10]=n.z,x[z+B+11]=L.itemSize===4?n.w:1)}}d={count:f,texture:b,size:new Nt(T,w)},i.set(o,d),o.addEventListener("dispose",R)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const v=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",v),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:a}}function fp(s,t,e,i,n){let a=new WeakMap;function r(l){const u=n.render.frame,f=l.geometry,d=t.get(l,f);if(a.get(d)!==u&&(t.update(d),a.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),a.get(l)!==u&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),a.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==u&&(h.update(),a.set(h,u))}return d}function o(){a=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}const pp={[ql]:"LINEAR_TONE_MAPPING",[Yl]:"REINHARD_TONE_MAPPING",[Kl]:"CINEON_TONE_MAPPING",[va]:"ACES_FILMIC_TONE_MAPPING",[Jl]:"AGX_TONE_MAPPING",[Ql]:"NEUTRAL_TONE_MAPPING",[Zl]:"CUSTOM_TONE_MAPPING"};function mp(s,t,e,i,n,a){const r=new Si(t,e,{type:s,depthBuffer:n,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const u=new me;u.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new te([0,2,0,0,2,0],2));const f=new nd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Rt(u,f),h=new Tc(-1,1,1,-1,0,1);let p=null,v=null,g=!1,m,_=null,E=[],y=!1;this.setSize=function(T,w){r.setSize(T,w),o!==null&&o.setSize(T,w),c!==null&&c.setSize(T,w);for(let x=0;x<E.length;x++){const b=E[x];b.setSize&&b.setSize(T,w)}},this.setEffects=function(T){E=T,y=E.length>0&&E[0].isRenderPass===!0;const w=r.width,x=r.height;E.length>0&&o===null&&(o=new Si(w,x,{type:bi,depthBuffer:!1,stencilBuffer:!1}),c=new Si(w,x,{type:bi,depthBuffer:!1,stencilBuffer:!1}));const b=n===!0&&E.some(D=>D.needsDepthTexture===!0);b!==(r.depthTexture!==null)&&(b===!0&&l===null&&(l=new Bn(w,x),a===!0&&(l.format=qi,l.type=On)),r.dispose(),r.depthTexture=b?l:null,r.resolveDepthBuffer=b,r.storeMultisampledDepthBuffer=b);for(let D=0;D<E.length;D++){const R=E[D];R.setSize&&R.setSize(w,x),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(T,w){if(g||T.toneMapping===Ii&&E.length===0)return!1;if(_=w,w!==null){const x=w.width,b=w.height;(r.width!==x||r.height!==b)&&this.setSize(x,b)}return y===!1&&T.setRenderTarget(r),m=T.toneMapping,T.toneMapping=Ii,!0},this.hasRenderPass=function(){return y},this.end=function(T,w){T.toneMapping=m,g=!0;let x=r,b=o;for(let D=0;D<E.length;D++){const R=E[D];R.enabled!==!1&&(R.render(T,b,x,w),R.needsSwap!==!1&&(x=b,b=b===o?c:o))}if(p!==T.outputColorSpace||v!==T.toneMapping){p=T.outputColorSpace,v=T.toneMapping,f.defines={},Yt.getTransfer(p)===ie&&(f.defines.SRGB_TRANSFER="");const D=pp[v];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(_),T.render(d,h),_=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),f.dispose()}}const Pc=new Fe,Ic=new Bn(1,1),Dc=new yc(1),Nc=new pc,Uc=new Nh,Fc=new Sc,Ml=[],Sl=[],yl=new Float32Array(16),bl=new Float32Array(9),El=new Float32Array(4);function Gn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let a=Ml[n];if(a===void 0&&(a=new Float32Array(n),Ml[n]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function Me(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Se(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function ba(s,t){let e=Sl[t];e===void 0&&(e=new Int32Array(t),Sl[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function gp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function vp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2fv(this.addr,t),Se(e,t)}}function xp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;s.uniform3fv(this.addr,t),Se(e,t)}}function _p(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4fv(this.addr,t),Se(e,t)}}function Mp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;El.set(i),s.uniformMatrix2fv(this.addr,!1,El),Se(e,i)}}function Sp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;bl.set(i),s.uniformMatrix3fv(this.addr,!1,bl),Se(e,i)}}function yp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;yl.set(i),s.uniformMatrix4fv(this.addr,!1,yl),Se(e,i)}}function bp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ep(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2iv(this.addr,t),Se(e,t)}}function wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;s.uniform3iv(this.addr,t),Se(e,t)}}function Tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4iv(this.addr,t),Se(e,t)}}function Ap(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Rp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2uiv(this.addr,t),Se(e,t)}}function Cp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;s.uniform3uiv(this.addr,t),Se(e,t)}}function Lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4uiv(this.addr,t),Se(e,t)}}function Ea(s){return s.version===0&&(s.compareFunction=cc,s.needsUpdate=!0),s}function Pp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let a;this.type===s.SAMPLER_2D_SHADOW?a=Ea(Ic):a=Pc,e.setTexture2D(t||a,n)}function Ip(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Uc,n)}function Dp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Ea(Dc):a=Fc,e.setTextureCube(t||a,n)}function Np(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Nc,n)}function Up(s){switch(s){case 5126:return gp;case 35664:return vp;case 35665:return xp;case 35666:return _p;case 35674:return Mp;case 35675:return Sp;case 35676:return yp;case 5124:case 35670:return bp;case 35667:case 35671:return Ep;case 35668:case 35672:return wp;case 35669:case 35673:return Tp;case 5125:return Ap;case 36294:return Rp;case 36295:return Cp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Pp;case 35679:case 36299:case 36307:return Ip;case 35680:case 36300:case 36308:case 36293:return Dp;case 36289:case 36303:case 36311:case 36292:return Np}}function Fp(s,t){s.uniform1fv(this.addr,t)}function Op(s,t){const e=Gn(t,this.size,2);s.uniform2fv(this.addr,e)}function Bp(s,t){const e=Gn(t,this.size,3);s.uniform3fv(this.addr,e)}function kp(s,t){const e=Gn(t,this.size,4);s.uniform4fv(this.addr,e)}function zp(s,t){const e=Gn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Hp(s,t){const e=Gn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Gp(s,t){const e=Gn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Vp(s,t){s.uniform1iv(this.addr,t)}function Wp(s,t){s.uniform2iv(this.addr,t)}function Xp(s,t){s.uniform3iv(this.addr,t)}function $p(s,t){s.uniform4iv(this.addr,t)}function qp(s,t){s.uniform1uiv(this.addr,t)}function Yp(s,t){s.uniform2uiv(this.addr,t)}function Kp(s,t){s.uniform3uiv(this.addr,t)}function Zp(s,t){s.uniform4uiv(this.addr,t)}function Jp(s,t,e){const i=this.cache,n=t.length,a=ba(e,n);Me(i,a)||(s.uniform1iv(this.addr,a),Se(i,a));let r;this.type===s.SAMPLER_2D_SHADOW?r=Ea(Ic):r=Pc;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||r,a[o])}function Qp(s,t,e){const i=this.cache,n=t.length,a=ba(e,n);Me(i,a)||(s.uniform1iv(this.addr,a),Se(i,a));for(let r=0;r!==n;++r)e.setTexture3D(t[r]||Uc,a[r])}function jp(s,t,e){const i=this.cache,n=t.length,a=ba(e,n);Me(i,a)||(s.uniform1iv(this.addr,a),Se(i,a));let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Ea(Dc):r=Fc;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||r,a[o])}function tm(s,t,e){const i=this.cache,n=t.length,a=ba(e,n);Me(i,a)||(s.uniform1iv(this.addr,a),Se(i,a));for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||Nc,a[r])}function em(s){switch(s){case 5126:return Fp;case 35664:return Op;case 35665:return Bp;case 35666:return kp;case 35674:return zp;case 35675:return Hp;case 35676:return Gp;case 5124:case 35670:return Vp;case 35667:case 35671:return Wp;case 35668:case 35672:return Xp;case 35669:case 35673:return $p;case 5125:return qp;case 36294:return Yp;case 36295:return Kp;case 36296:return Zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return tm}}class im{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Up(e.type)}}class nm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=em(e.type)}}class sm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let a=0,r=n.length;a!==r;++a){const o=n[a];o.setValue(t,e[o.id],i)}}}const sr=/(\w+)(\])?(\[|\.)?/g;function wl(s,t){s.seq.push(t),s.map[t.id]=t}function am(s,t,e){const i=s.name,n=i.length;for(sr.lastIndex=0;;){const a=sr.exec(i),r=sr.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===n){wl(e,l===void 0?new im(o,s,t):new nm(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new sm(o),wl(e,f)),e=f}}}class Qs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(e,r),c=t.getUniformLocation(e,o.name);am(o,c,this)}const n=[],a=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(r):a.push(r);n.length>0&&(this.seq=n.concat(a))}setValue(t,e,i,n){const a=this.map[e];a!==void 0&&a.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let a=0,r=e.length;a!==r;++a){const o=e[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,a=t.length;n!==a;++n){const r=t[n];r.id in e&&i.push(r)}return i}}function Tl(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const rm=37297;let om=0;function lm(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=n;r<a;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}const Al=new Bt;function cm(s){Yt._getMatrix(Al,Yt.workingColorSpace,s);const t=`mat3( ${Al.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(s)){case sa:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Rl(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),a=(s.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+lm(s.getShaderSource(t),o)}else return a}function hm(s,t){const e=cm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const dm={[ql]:"Linear",[Yl]:"Reinhard",[Kl]:"Cineon",[va]:"ACESFilmic",[Jl]:"AgX",[Ql]:"Neutral",[Zl]:"Custom"};function um(s,t){const e=dm[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xs=new P;function fm(){Yt.getLuminanceCoefficients(Xs);const s=Xs.x.toFixed(4),t=Xs.y.toFixed(4),e=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function mm(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function gm(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=s.getActiveAttrib(t,n),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function es(s){return s!==""}function Cl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ll(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zr(s){return s.replace(vm,xm)}function xm(s,t){const e=Vt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Zr(e)}const _m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pl(s){return s.replace(_m,Mm)}function Mm(s,t,e,i){let n="";for(let a=parseInt(t);a<parseInt(e);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Il(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Sm={[$s]:"SHADOWMAP_TYPE_PCF",[ts]:"SHADOWMAP_TYPE_VSM"};function ym(s){return Sm[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bm={[ss]:"ENVMAP_MODE_REFRACTION"};function Em(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":bm[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wm={[$l]:"ENVMAP_BLENDING_MULTIPLY",[uh]:"ENVMAP_BLENDING_MIX",[fh]:"ENVMAP_BLENDING_ADD"};function Tm(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":wm[s.combine]||"ENVMAP_BLENDING_NONE"}function Am(s,t,e,i){const n=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const c=ym(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Em(e),f=Tm(e),d=pm(e),h=mm(a),p=n.createProgram();let v,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h].filter(es).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h].filter(es).join(`
`),g.length>0&&(g+=`
`)):(v=[Il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),g=[Il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Ii?um("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,hm("linearToOutputTexel",e.outputColorSpace),fm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(es).join(`
`)),r=Zr(r),r=Cl(r,e),r=Ll(r,e),o=Zr(o),o=Cl(o,e),o=Ll(o,e),r=Pl(r),o=Pl(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",e.glslVersion===zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=m+v+r,E=m+g+o,y=Tl(n,n.VERTEX_SHADER,_),T=Tl(n,n.FRAGMENT_SHADER,E);n.attachShader(p,y),n.attachShader(p,T),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function w(R){if(s.debug.checkShaderErrors){const I=n.getProgramInfoLog(p)||"",U=n.getShaderInfoLog(y)||"",O=n.getShaderInfoLog(T)||"",L=I.trim(),z=U.trim(),W=O.trim();let B=!0,tt=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,y,T);else{const X=Rl(n,y,"vertex"),Q=Rl(n,T,"fragment");Jt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+X+`
`+Q)}else L!==""?Dt("WebGLProgram: Program Info Log:",L):(z===""||W==="")&&(tt=!1);tt&&(R.diagnostics={runnable:B,programLog:L,vertexShader:{log:z,prefix:v},fragmentShader:{log:W,prefix:g}})}n.deleteShader(y),n.deleteShader(T),x=new Qs(n,p),b=gm(n,p)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=n.getProgramParameter(p,rm)),D},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=om++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=T,this}let Rm=0;class Cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Lm(t),e.set(t,i)),i}}class Lm{constructor(t){this.id=Rm++,this.code=t,this.usedTimes=0}}function Pm(s){return s===dn||s===ea||s===ia}function Im(s,t,e,i,n,a){const r=new mc,o=new Cm,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,b,D,R,I,U){const O=R.fog,L=I.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=t.get(x.envMap||z,W),tt=d[x.type];let X=i.precision;x.precision!==null&&(X=i.getMaxPrecision(x.precision),X!==x.precision&&Dt("WebGLProgram.getParameters:",x.precision,"not supported, using",X,"instead."));const Q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,j=Q!==void 0?Q.length:0;let Mt=0;L.morphAttributes.position!==void 0&&(Mt=1),L.morphAttributes.normal!==void 0&&(Mt=2),L.morphAttributes.color!==void 0&&(Mt=3);let Pt,Y,ut,xt;if(tt){const pt=mi[tt];Pt=pt.vertexShader,Y=pt.fragmentShader}else{Pt=x.vertexShader,Y=x.fragmentShader;const pt=o.getVertexShaderStage(x),ee=o.getFragmentShaderStage(x);o.update(x,pt,ee),ut=pt.id,xt=ee.id}const Tt=s.getRenderTarget(),ft=s.state.buffers.depth.getReversed(),Ut=I.isInstancedMesh===!0,ce=I.isBatchedMesh===!0,wt=!!x.map,It=!!x.matcap,zt=!!B,Wt=zt&&B.isPMREMTexture===!0,Ae=!!x.aoMap,xe=!!x.lightMap,Ge=!!x.bumpMap&&x.wireframe===!1,he=!!x.normalMap,ui=!!x.displacementMap,ye=!!x.emissiveMap,Ze=!!x.metalnessMap,Je=!!x.roughnessMap,Qe=x.anisotropy>0,F=x.clearcoat>0,je=x.diffuseRoughness>0,re=x.dispersion>0,oe=x.retroreflectivity>0,dt=x.iridescence>0,_e=x.sheen>0,Ct=x.transmission>0,Ft=Qe&&!!x.anisotropyMap,A=F&&!!x.clearcoatMap,M=F&&!!x.clearcoatNormalMap,H=F&&!!x.clearcoatRoughnessMap,et=je&&!!x.diffuseRoughnessMap,J=dt&&!!x.iridescenceMap,st=dt&&!!x.iridescenceThicknessMap,ct=_e&&!!x.sheenColorMap,q=_e&&!!x.sheenRoughnessMap,K=!!x.specularMap,rt=!!x.specularColorMap,C=!!x.specularIntensityMap,Z=Ct&&!!x.transmissionMap,$=Ct&&!!x.thicknessMap,ot=!!x.gradientMap,nt=!!x.alphaMap,at=x.alphaTest>0,Et=!!x.alphaHash,Gt=!!x.extensions;let it=Ii;x.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(it=s.toneMapping);const At=Wt?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,Ht={shaderID:tt,shaderType:x.type,shaderName:x.name,vertexShader:Pt,fragmentShader:Y,defines:x.defines,customVertexShaderID:ut,customFragmentShaderID:xt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:X,batching:ce,batchingColor:ce&&I._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&I.instanceColor!==null,instancingMorph:Ut&&I.morphTexture!==null,outputColorSpace:Tt===null?s.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:wt,matcap:It,envMap:zt,envMapMode:zt&&B.mapping,envMapPMREM:Wt,envMapMaxLod:Wt?At.length-1:null,envMapSize:Wt?At[0].width:null,aoMap:Ae,lightMap:xe,bumpMap:Ge,normalMap:he,displacementMap:ui,emissiveMap:ye,normalMapObjectSpace:he&&x.normalMapType===gh,normalMapTangentSpace:he&&x.normalMapType===qr,packedNormalMap:he&&x.normalMapType===qr&&Pm(x.normalMap.format),metalnessMap:Ze,roughnessMap:Je,anisotropy:Qe,anisotropyMap:Ft,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:H,diffuseRoughness:je,diffuseRoughnessMap:et,dispersion:re,retroreflection:oe,iridescence:dt,iridescenceMap:J,iridescenceThicknessMap:st,sheen:_e,sheenColorMap:ct,sheenRoughnessMap:q,specularMap:K,specularColorMap:rt,specularIntensityMap:C,transmission:Ct,transmissionMap:Z,thicknessMap:$,gradientMap:ot,opaque:x.transparent===!1&&x.blending===Nn&&x.alphaToCoverage===!1,alphaMap:nt,alphaTest:at,alphaHash:Et,combine:x.combine,mapUv:wt&&h(x.map.channel),aoMapUv:Ae&&h(x.aoMap.channel),lightMapUv:xe&&h(x.lightMap.channel),bumpMapUv:Ge&&h(x.bumpMap.channel),normalMapUv:he&&h(x.normalMap.channel),displacementMapUv:ui&&h(x.displacementMap.channel),emissiveMapUv:ye&&h(x.emissiveMap.channel),metalnessMapUv:Ze&&h(x.metalnessMap.channel),roughnessMapUv:Je&&h(x.roughnessMap.channel),anisotropyMapUv:Ft&&h(x.anisotropyMap.channel),clearcoatMapUv:A&&h(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&h(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&h(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&h(x.diffuseRoughnessMap.channel),iridescenceMapUv:J&&h(x.iridescenceMap.channel),iridescenceThicknessMapUv:st&&h(x.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&h(x.sheenColorMap.channel),sheenRoughnessMapUv:q&&h(x.sheenRoughnessMap.channel),specularMapUv:K&&h(x.specularMap.channel),specularColorMapUv:rt&&h(x.specularColorMap.channel),specularIntensityMapUv:C&&h(x.specularIntensityMap.channel),transmissionMapUv:Z&&h(x.transmissionMap.channel),thicknessMapUv:$&&h(x.thicknessMap.channel),alphaMapUv:nt&&h(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(he||Qe),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(wt||nt),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&he===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ft,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Mt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:U.filter(pt=>pt.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:wt&&x.map.isVideoTexture===!0&&Yt.getTransfer(x.map.colorSpace)===ie,decodeVideoTextureEmissive:ye&&x.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(x.emissiveMap.colorSpace)===ie,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Te,flipSided:x.side===He,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Gt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&x.extensions.multiDraw===!0||ce)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function v(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)b.push(D),b.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(g(b,x),m(b,x),b.push(s.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function g(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function m(x,b){r.disableAll(),b.instancing&&r.enable(0),b.instancingColor&&r.enable(1),b.instancingMorph&&r.enable(2),b.matcap&&r.enable(3),b.envMap&&r.enable(4),b.normalMapObjectSpace&&r.enable(5),b.normalMapTangentSpace&&r.enable(6),b.clearcoat&&r.enable(7),b.iridescence&&r.enable(8),b.alphaTest&&r.enable(9),b.vertexColors&&r.enable(10),b.vertexAlphas&&r.enable(11),b.vertexUv1s&&r.enable(12),b.vertexUv2s&&r.enable(13),b.vertexUv3s&&r.enable(14),b.vertexTangents&&r.enable(15),b.anisotropy&&r.enable(16),b.alphaHash&&r.enable(17),b.batching&&r.enable(18),b.dispersion&&r.enable(19),b.retroreflection&&r.enable(24),b.diffuseRoughness&&r.enable(25),b.batchingColor&&r.enable(20),b.gradientMap&&r.enable(21),b.packedNormalMap&&r.enable(22),b.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reversedDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),b.numLightProbeGrids>0&&r.enable(22),b.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function _(x){const b=d[x.type];let D;if(b){const R=mi[b];D=td.clone(R.uniforms)}else D=x.uniforms;return D}function E(x,b){let D=u.get(b);return D!==void 0?++D.usedTimes:(D=new Am(s,b,x,n),l.push(D),u.set(b,D)),D}function y(x){if(--x.usedTimes===0){const b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function w(){o.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:_,acquireProgram:E,releaseProgram:y,releaseShaderCache:T,programs:l,dispose:w}}function Dm(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function i(r){s.delete(r)}function n(r,o,c){s.get(r)[o]=c}function a(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:a}}function Nm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Dl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Nl(){const s=[];let t=0;const e=[],i=[],n=[];function a(){t=0,e.length=0,i.length=0,n.length=0}function r(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,p,v,g,m){let _=s[t];return _===void 0?(_={id:d.id,object:d,geometry:h,material:p,materialVariant:r(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},s[t]=_):(_.id=d.id,_.object=d,_.geometry=h,_.material=p,_.materialVariant=r(d),_.groupOrder=v,_.renderOrder=d.renderOrder,_.z=g,_.group=m),t++,_}function c(d,h,p,v,g,m,_){_.reversedDepth===!0&&(g=-g);const E=o(d,h,p,v,g,m);p.transmission>0?i.push(E):p.transparent===!0?n.push(E):e.push(E)}function l(d,h,p,v,g,m){const _=o(d,h,p,v,g,m);p.transmission>0?i.unshift(_):p.transparent===!0?n.unshift(_):e.unshift(_)}function u(d,h){e.length>1&&e.sort(d||Nm),i.length>1&&i.sort(h||Dl),n.length>1&&n.sort(h||Dl)}function f(){for(let d=t,h=s.length;d<h;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:a,push:c,unshift:l,finish:f,sort:u}}function Um(){let s=new WeakMap;function t(i,n){const a=s.get(i);let r;return a===void 0?(r=new Nl,s.set(i,[r])):n>=a.length?(r=new Nl,a.push(r)):r=a[n],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function Fm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new gt};break;case"SpotLight":e={position:new P,direction:new P,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":e={color:new gt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function Om(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Bm=0;function km(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function zm(s){const t=new Fm,e=Om(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const n=new P,a=new ae,r=new ae;function o(l){let u=0,f=0,d=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let h=0,p=0,v=0,g=0,m=0,_=0,E=0,y=0,T=0,w=0,x=0,b=0,D=0,R=0;l.sort(km);for(let U=0,O=l.length;U<O;U++){const L=l[U],z=L.color,W=L.intensity,B=L.distance;let tt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===dn?tt=L.shadow.map.texture:tt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=z.r*W,f+=z.g*W,d+=z.b*W;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],W);R++}else if(L.isSunLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,j=e.get(L);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[p]=j,i.sunShadowMap[p]=tt;const Mt=Q.getViewportCount();for(let Pt=0;Pt<Mt;Pt++)i.sunShadowMatrix[v+Pt]=Q.getMatrix(Pt),i.sunShadowCascade[v+Pt]=Q._cascadeData[Pt];v+=Mt,p++}i.sun[h]=X,h++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,j=e.get(L);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,i.directionalShadow[g]=j,i.directionalShadowMap[g]=tt,i.directionalShadowMatrix[g]=L.shadow.matrix,T++}i.directional[g]=X,g++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(z).multiplyScalar(W),X.distance=B,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[_]=X;const Q=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,Q.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[_]=Q.matrix,L.castShadow){const j=e.get(L);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=tt,x++}_++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(z).multiplyScalar(W),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[E]=X,E++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const Q=L.shadow,j=e.get(L);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=tt,i.pointShadowMatrix[m]=L.shadow.matrix,w++}i.point[m]=X,m++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(W),X.groundColor.copy(L.groundColor).multiplyScalar(W),i.hemi[y]=X,y++}}E>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const I=i.hash;(I.sunLength!==h||I.directionalLength!==g||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==E||I.hemiLength!==y||I.numSunShadows!==p||I.numDirectionalShadows!==T||I.numPointShadows!==w||I.numSpotShadows!==x||I.numSpotMaps!==b||I.numLightProbes!==R)&&(i.sun.length=h,i.directional.length=g,i.spot.length=_,i.rectArea.length=E,i.point.length=m,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-D,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=R,I.sunLength=h,I.directionalLength=g,I.pointLength=m,I.spotLength=_,I.rectAreaLength=E,I.hemiLength=y,I.numSunShadows=p,I.numDirectionalShadows=T,I.numPointShadows=w,I.numSpotShadows=x,I.numSpotMaps=b,I.numLightProbes=R,i.version=Bm++)}function c(l,u){let f=0,d=0,h=0,p=0,v=0,g=0;const m=u.matrixWorldInverse;for(let _=0,E=l.length;_<E;_++){const y=l[_];if(y.isSunLight){const T=i.sun[f];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),f++}else if(y.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(m),d++}else if(y.isSpotLight){const T=i.spot[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const T=i.rectArea[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),r.identity(),a.copy(y.matrixWorld),a.premultiply(m),r.extractRotation(a),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),v++}else if(y.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const T=i.hemi[g];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:i}}function Ul(s){const t=new zm(s),e=[],i=[],n=[];function a(f){u.camera=f,e.length=0,i.length=0,n.length=0}function r(f){f.isLightProbeGrid?n.push(f):e.push(f)}function o(f){i.push(f)}function c(){t.setup(e),n.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function l(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:r,pushShadow:o}}function Hm(s){let t=new WeakMap;function e(n,a=0){const r=t.get(n);let o;return r===void 0?(o=new Ul(s),t.set(n,[o])):a>=r.length?(o=new Ul(s),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Gm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Wm=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Xm=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Fl=new ae,Qn=new P,ar=new P;function $m(s,t,e){let i=new os;const n=new Nt,a=new Nt,r=new fe,o=new sd,c=new ad,l={},u=e.maxTextureSize,f={[Ni]:He,[He]:Ni,[Te]:Te},d=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Gm,fragmentShader:Vm}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const p=new me;p.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Rt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$s;let m=this.type;this.render=function(w,x,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Vl&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$s);const D=s.getRenderTarget(),R=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Dn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=m!==this.type;O&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=w.length;L<z;L++){const W=w[L],B=W.shadow;if(B===void 0){Dt("WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;n.copy(B.mapSize);const tt=B.getFrameExtents();n.multiply(tt),a.copy(B.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(a.x=Math.floor(u/tt.x),n.x=a.x*tt.x,B.mapSize.x=a.x),n.y>u&&(a.y=Math.floor(u/tt.y),n.y=a.y*tt.y,B.mapSize.y=a.y));const X=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=X,B.map===null||O===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ts){if(W.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Si(n.x,n.y,{format:dn,type:bi,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),B.map.texture.name=W.name+".shadowMap",B.map.depthTexture=new Bn(n.x,n.y,xi),B.map.depthTexture.name=W.name+".shadowMapDepth",B.map.depthTexture.format=Zi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Le,B.map.depthTexture.magFilter=Le}else W.isPointLight?(B.map=new xo(n.x),B.map.depthTexture=new yc(n.x,yi)):(B.map=new Si(n.x,n.y),B.map.depthTexture=new Bn(n.x,n.y,yi)),B.map.depthTexture.name=W.name+".shadowMap",B.map.depthTexture.format=Zi,this.type===$s?(B.map.depthTexture.compareFunction=X?lc:oc,B.map.depthTexture.minFilter=Ve,B.map.depthTexture.magFilter=Ve):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Le,B.map.depthTexture.magFilter=Le);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==n.x||B.map.height!==n.y)&&B.map.setSize(n.x,n.y);const Q=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();W.isPointLight!==!0&&B.updateMatrices(W,b);const j=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:b.layers;for(let Mt=0;Mt<Q;Mt++){const Pt=B.getCamera(Mt);if(W.isPointLight){const Y=B.camera,ut=B.matrix,xt=W.distance||Y.far;xt!==Y.far&&(Y.far=xt,Y.updateProjectionMatrix()),Qn.setFromMatrixPosition(W.matrixWorld),Y.position.copy(Qn),ar.copy(Y.position),ar.add(Wm[Mt]),Y.up.copy(Xm[Mt]),Y.lookAt(ar),Y.updateMatrixWorld(),ut.makeTranslation(-Qn.x,-Qn.y,-Qn.z),Fl.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Fl,Y.coordinateSystem,Y.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,Mt),s.clear();else{Mt===0&&(s.setRenderTarget(B.map),s.clear());const Y=B.getViewport(Mt);r.set(a.x*Y.x,a.y*Y.y,a.x*Y.z,a.y*Y.w),U.viewport(r)}i=B.getFrustum(Mt),y(x,b,Pt,W,j,this.type)}B.isPointLightShadow!==!0&&this.type===ts&&_(B,b),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(D,R,I)};function _(w,x){const b=t.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null?w.mapPass=new Si(n.x,n.y,{format:dn,type:bi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(x,null,b,d,v,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(x,null,b,h,v,null)}function E(w,x,b,D){let R=null;const I=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)R=I;else if(R=b.isPointLight===!0?c:o,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const U=R.uuid,O=x.uuid;let L=l[U];L===void 0&&(L={},l[U]=L);let z=L[O];z===void 0&&(z=R.clone(),L[O]=z,x.addEventListener("dispose",T)),R=z}if(R.visible=x.visible,R.wireframe=x.wireframe,D===ts?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:f[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const U=s.properties.get(R);U.light=b}return R}function y(w,x,b,D,R,I){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===ts)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const L=t.update(w),z=w.material;if(Array.isArray(z)){const W=L.groups;for(let B=0,tt=W.length;B<tt;B++){const X=W[B],Q=z[X.materialIndex];if(Q&&Q.visible){const j=E(w,Q,D,I);w.onBeforeShadow(s,w,x,b,L,j,X),s.renderBufferDirect(b,null,L,j,w,X),w.onAfterShadow(s,w,x,b,L,j,X)}}}else if(z.visible){const W=E(w,z,D,I);w.onBeforeShadow(s,w,x,b,L,W,null),s.renderBufferDirect(b,null,L,W,w,null),w.onAfterShadow(s,w,x,b,L,W,null)}}const O=w.children;for(let L=0,z=O.length;L<z;L++)y(O[L],x,b,D,R,I)}function T(w){w.target.removeEventListener("dispose",T);for(const b in l){const D=l[b],R=w.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function qm(s,t){function e(){let C=!1;const Z=new fe;let $=null;const ot=new fe(0,0,0,0);return{setMask:function(nt){$!==nt&&!C&&(s.colorMask(nt,nt,nt,nt),$=nt)},setLocked:function(nt){C=nt},setClear:function(nt,at,Et,Gt,it){it===!0&&(nt*=Gt,at*=Gt,Et*=Gt),Z.set(nt,at,Et,Gt),ot.equals(Z)===!1&&(s.clearColor(nt,at,Et,Gt),ot.copy(Z))},reset:function(){C=!1,$=null,ot.set(-1,0,0,0)}}}function i(){let C=!1,Z=!1,$=null,ot=null,nt=null;return{setReversed:function(at){if(Z!==at){const Et=t.get("EXT_clip_control");at?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),Z=at;const Gt=nt;nt=null,this.setClear(Gt)}},getReversed:function(){return Z},setTest:function(at){at?ft(s.DEPTH_TEST):Ut(s.DEPTH_TEST)},setMask:function(at){$!==at&&!C&&(s.depthMask(at),$=at)},setFunc:function(at){if(Z&&(at=Th[at]),ot!==at){switch(at){case cr:s.depthFunc(s.NEVER);break;case hr:s.depthFunc(s.ALWAYS);break;case dr:s.depthFunc(s.LESS);break;case ns:s.depthFunc(s.LEQUAL);break;case ur:s.depthFunc(s.EQUAL);break;case fr:s.depthFunc(s.GEQUAL);break;case pr:s.depthFunc(s.GREATER);break;case mr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ot=at}},setLocked:function(at){C=at},setClear:function(at){nt!==at&&(nt=at,Z&&(at=1-at),s.clearDepth(at))},reset:function(){C=!1,$=null,ot=null,nt=null,Z=!1}}}function n(){let C=!1,Z=null,$=null,ot=null,nt=null,at=null,Et=null,Gt=null,it=null;return{setTest:function(At){C||(At?ft(s.STENCIL_TEST):Ut(s.STENCIL_TEST))},setMask:function(At){Z!==At&&!C&&(s.stencilMask(At),Z=At)},setFunc:function(At,Ht,pt){($!==At||ot!==Ht||nt!==pt)&&(s.stencilFunc(At,Ht,pt),$=At,ot=Ht,nt=pt)},setOp:function(At,Ht,pt){(at!==At||Et!==Ht||Gt!==pt)&&(s.stencilOp(At,Ht,pt),at=At,Et=Ht,Gt=pt)},setLocked:function(At){C=At},setClear:function(At){it!==At&&(s.clearStencil(At),it=At)},reset:function(){C=!1,Z=null,$=null,ot=null,nt=null,at=null,Et=null,Gt=null,it=null}}}const a=new e,r=new i,o=new n;let c={};const l=new WeakMap;let u={},f={},d={},h=new WeakMap,p=[],v=null,g=!1,m=null,_=null,E=null,y=null,T=null,w=null,x=null,b=new gt(0,0,0),D=0,R=!1,I=null,U=null,O=null,L=null,z=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,tt=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=tt>=1):X.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=tt>=2);let Q=null,j={};const Mt=s.getParameter(s.SCISSOR_BOX),Pt=s.getParameter(s.VIEWPORT),Y=new fe().fromArray(Mt),ut=new fe().fromArray(Pt);function xt(C,Z,$,ot){const nt=new Uint8Array(4),at=s.createTexture();s.bindTexture(C,at),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Et=0;Et<$;Et++)C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY?s.texImage3D(Z,0,s.RGBA,1,1,ot,0,s.RGBA,s.UNSIGNED_BYTE,nt):s.texImage2D(Z+Et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,nt);return at}const Tt={};Tt[s.TEXTURE_2D]=xt(s.TEXTURE_2D,s.TEXTURE_2D,1),Tt[s.TEXTURE_CUBE_MAP]=xt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[s.TEXTURE_2D_ARRAY]=xt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Tt[s.TEXTURE_3D]=xt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ft(s.DEPTH_TEST),r.setFunc(ns),Ge(!1),he(Oo),ft(s.CULL_FACE),Ae(Dn);function ft(C){u[C]!==!0&&(s.enable(C),u[C]=!0)}function Ut(C){u[C]!==!1&&(s.disable(C),u[C]=!1)}function ce(C,Z){return d[C]!==Z?(s.bindFramebuffer(C,Z),d[C]=Z,C===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Z),C===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Z),!0):!1}function wt(C,Z){let $=p,ot=!1;if(C){$=h.get(Z),$===void 0&&($=[],h.set(Z,$));const nt=C.textures;if($.length!==nt.length||$[0]!==s.COLOR_ATTACHMENT0){for(let at=0,Et=nt.length;at<Et;at++)$[at]=s.COLOR_ATTACHMENT0+at;$.length=nt.length,ot=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,ot=!0);ot&&s.drawBuffers($)}function It(C){return v!==C?(s.useProgram(C),v=C,!0):!1}const zt={[Pn]:s.FUNC_ADD,[Kc]:s.FUNC_SUBTRACT,[Zc]:s.FUNC_REVERSE_SUBTRACT};zt[Jc]=s.MIN,zt[Qc]=s.MAX;const Wt={[jc]:s.ZERO,[th]:s.ONE,[eh]:s.SRC_COLOR,[Wl]:s.SRC_ALPHA,[oh]:s.SRC_ALPHA_SATURATE,[ah]:s.DST_COLOR,[nh]:s.DST_ALPHA,[ih]:s.ONE_MINUS_SRC_COLOR,[Xl]:s.ONE_MINUS_SRC_ALPHA,[rh]:s.ONE_MINUS_DST_COLOR,[sh]:s.ONE_MINUS_DST_ALPHA,[lh]:s.CONSTANT_COLOR,[ch]:s.ONE_MINUS_CONSTANT_COLOR,[hh]:s.CONSTANT_ALPHA,[dh]:s.ONE_MINUS_CONSTANT_ALPHA};function Ae(C,Z,$,ot,nt,at,Et,Gt,it,At){if(C===Dn){g===!0&&(Ut(s.BLEND),g=!1);return}if(g===!1&&(ft(s.BLEND),g=!0),C!==Yc){if(C!==m||At!==R){if((_!==Pn||T!==Pn)&&(s.blendEquation(s.FUNC_ADD),_=Pn,T=Pn),At)switch(C){case Nn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mi:s.blendFunc(s.ONE,s.ONE);break;case Bo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ko:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Jt("WebGLState: Invalid blending: ",C);break}else switch(C){case Nn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Bo:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ko:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",C);break}E=null,y=null,w=null,x=null,b.set(0,0,0),D=0,m=C,R=At}return}nt=nt||Z,at=at||$,Et=Et||ot,(Z!==_||nt!==T)&&(s.blendEquationSeparate(zt[Z],zt[nt]),_=Z,T=nt),($!==E||ot!==y||at!==w||Et!==x)&&(s.blendFuncSeparate(Wt[$],Wt[ot],Wt[at],Wt[Et]),E=$,y=ot,w=at,x=Et),(Gt.equals(b)===!1||it!==D)&&(s.blendColor(Gt.r,Gt.g,Gt.b,it),b.copy(Gt),D=it),m=C,R=!1}function xe(C,Z){C.side===Te?Ut(s.CULL_FACE):ft(s.CULL_FACE);let $=C.side===He;Z&&($=!$),Ge($),C.blending===Nn&&C.transparent===!1?Ae(Dn):Ae(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),a.setMask(C.colorWrite);const ot=C.stencilWrite;o.setTest(ot),ot&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ye(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ft(s.SAMPLE_ALPHA_TO_COVERAGE):Ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(C){I!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),I=C)}function he(C){C!==$c?(ft(s.CULL_FACE),C!==U&&(C===Oo?s.cullFace(s.BACK):C===qc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ut(s.CULL_FACE),U=C}function ui(C){C!==O&&(B&&s.lineWidth(C),O=C)}function ye(C,Z,$){C?(ft(s.POLYGON_OFFSET_FILL),(L!==Z||z!==$)&&(L=Z,z=$,r.getReversed()&&(Z=-Z,$=-$),s.polygonOffset(Z,$))):Ut(s.POLYGON_OFFSET_FILL)}function Ze(C){C?ft(s.SCISSOR_TEST):Ut(s.SCISSOR_TEST)}function Je(C){C===void 0&&(C=s.TEXTURE0+W-1),Q!==C&&(s.activeTexture(C),Q=C)}function Qe(C,Z,$){$===void 0&&(Q===null?$=s.TEXTURE0+W-1:$=Q);let ot=j[$];ot===void 0&&(ot={type:void 0,texture:void 0},j[$]=ot),(ot.type!==C||ot.texture!==Z)&&(Q!==$&&(s.activeTexture($),Q=$),s.bindTexture(C,Z||Tt[C]),ot.type=C,ot.texture=Z)}function F(){const C=j[Q];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function je(){try{s.compressedTexImage2D(...arguments)}catch(C){Jt("WebGLState:",C)}}function re(){try{s.compressedTexImage3D(...arguments)}catch(C){Jt("WebGLState:",C)}}function oe(){try{s.texSubImage2D(...arguments)}catch(C){Jt("WebGLState:",C)}}function dt(){try{s.texSubImage3D(...arguments)}catch(C){Jt("WebGLState:",C)}}function _e(){try{s.compressedTexSubImage2D(...arguments)}catch(C){Jt("WebGLState:",C)}}function Ct(){try{s.compressedTexSubImage3D(...arguments)}catch(C){Jt("WebGLState:",C)}}function Ft(){try{s.texStorage2D(...arguments)}catch(C){Jt("WebGLState:",C)}}function A(){try{s.texStorage3D(...arguments)}catch(C){Jt("WebGLState:",C)}}function M(){try{s.texImage2D(...arguments)}catch(C){Jt("WebGLState:",C)}}function H(){try{s.texImage3D(...arguments)}catch(C){Jt("WebGLState:",C)}}function et(C){return f[C]!==void 0?f[C]:s.getParameter(C)}function J(C,Z){f[C]!==Z&&(s.pixelStorei(C,Z),f[C]=Z)}function st(C){Y.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),Y.copy(C))}function ct(C){ut.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),ut.copy(C))}function q(C,Z){let $=l.get(Z);$===void 0&&($=new WeakMap,l.set(Z,$));let ot=$.get(C);ot===void 0&&(ot=s.getUniformBlockIndex(Z,C.name),s.uniformBlockBinding(Z,ot,ot),$.set(C,ot))}function K(C,Z,$){const nt=l.get(Z).get(C);c[nt]!==$&&(s.bindBufferBase(s.UNIFORM_BUFFER,nt,$),c[nt]=$)}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},f={},Q=null,j={},d={},c={},h=new WeakMap,p=[],v=null,g=!1,m=null,_=null,E=null,y=null,T=null,w=null,x=null,b=new gt(0,0,0),D=0,R=!1,I=null,U=null,O=null,L=null,z=null,Y.set(0,0,s.canvas.width,s.canvas.height),ut.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:ft,disable:Ut,bindFramebuffer:ce,drawBuffers:wt,useProgram:It,setBlending:Ae,setMaterial:xe,setFlipSided:Ge,setCullFace:he,setLineWidth:ui,setPolygonOffset:ye,setScissorTest:Ze,activeTexture:Je,bindTexture:Qe,unbindTexture:F,compressedTexImage2D:je,compressedTexImage3D:re,texImage2D:M,texImage3D:H,pixelStorei:J,getParameter:et,updateUBOMapping:q,uniformBlockBinding:K,texStorage2D:Ft,texStorage3D:A,texSubImage2D:oe,texSubImage3D:dt,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ct,scissor:st,viewport:ct,reset:rt}}function Ym(s,t,e,i,n,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,u=new WeakMap,f=new Set;let d;const h=new WeakMap,p=new Set,v=new FinalizationRegistry(A=>p.delete(A));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return g?new OffscreenCanvas(A,M):aa("canvas")}function _(A,M,H){let et=1;const J=Ft(A);if((J.width>H||J.height>H)&&(et=H/Math.max(J.width,J.height)),et<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const st=Math.floor(et*J.width),ct=Math.floor(et*J.height);d===void 0&&(d=m(st,ct));const q=M?m(st,ct):d;return q.width=st,q.height=ct,q.getContext("2d").drawImage(A,0,0,st,ct),Dt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+st+"x"+ct+")."),q}else return"data"in A&&Dt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function E(A){return A.generateMipmaps}function y(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(A,M,H,et,J,st=!1){if(A!==null){if(s[A]!==void 0)return s[A];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ct;et&&(ct=t.get("EXT_texture_norm16"),ct||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=M;if(M===s.RED&&(H===s.FLOAT&&(q=s.R32F),H===s.HALF_FLOAT&&(q=s.R16F),H===s.UNSIGNED_BYTE&&(q=s.R8),H===s.UNSIGNED_SHORT&&ct&&(q=ct.R16_EXT),H===s.SHORT&&ct&&(q=ct.R16_SNORM_EXT)),M===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(q=s.R8UI),H===s.UNSIGNED_SHORT&&(q=s.R16UI),H===s.UNSIGNED_INT&&(q=s.R32UI),H===s.BYTE&&(q=s.R8I),H===s.SHORT&&(q=s.R16I),H===s.INT&&(q=s.R32I)),M===s.RG&&(H===s.FLOAT&&(q=s.RG32F),H===s.HALF_FLOAT&&(q=s.RG16F),H===s.UNSIGNED_BYTE&&(q=s.RG8),H===s.UNSIGNED_SHORT&&ct&&(q=ct.RG16_EXT),H===s.SHORT&&ct&&(q=ct.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(q=s.RG8UI),H===s.UNSIGNED_SHORT&&(q=s.RG16UI),H===s.UNSIGNED_INT&&(q=s.RG32UI),H===s.BYTE&&(q=s.RG8I),H===s.SHORT&&(q=s.RG16I),H===s.INT&&(q=s.RG32I)),M===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(q=s.RGB8UI),H===s.UNSIGNED_SHORT&&(q=s.RGB16UI),H===s.UNSIGNED_INT&&(q=s.RGB32UI),H===s.BYTE&&(q=s.RGB8I),H===s.SHORT&&(q=s.RGB16I),H===s.INT&&(q=s.RGB32I)),M===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),H===s.UNSIGNED_INT&&(q=s.RGBA32UI),H===s.BYTE&&(q=s.RGBA8I),H===s.SHORT&&(q=s.RGBA16I),H===s.INT&&(q=s.RGBA32I)),M===s.RGB&&(H===s.UNSIGNED_SHORT&&ct&&(q=ct.RGB16_EXT),H===s.SHORT&&ct&&(q=ct.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),M===s.RGBA){const K=st?sa:Yt.getTransfer(J);H===s.FLOAT&&(q=s.RGBA32F),H===s.HALF_FLOAT&&(q=s.RGBA16F),H===s.UNSIGNED_BYTE&&(q=K===ie?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&ct&&(q=ct.RGBA16_EXT),H===s.SHORT&&ct&&(q=ct.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(A,M){let H;return A?M===null||M===yi||M===On?H=s.DEPTH24_STENCIL8:M===xi?H=s.DEPTH32F_STENCIL8:M===as&&(H=s.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===yi||M===On?H=s.DEPTH_COMPONENT24:M===xi?H=s.DEPTH_COMPONENT32F:M===as&&(H=s.DEPTH_COMPONENT16),H}function b(A,M){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==Le&&A.minFilter!==Ve?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function D(A){const M=new WeakRef(A);i.get(A).__ref=M,p.add(M),v.register(A,M,M)}function R(A){const M=i.get(A).__ref;M!==void 0&&(p.delete(M),v.unregister(M))}function I(A){O(A.target)}function U(A){L(A.target)}function O(A){A.removeEventListener("dispose",I),R(A),W(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&f.delete(A)}function L(A){A.removeEventListener("dispose",U),R(A),tt(A)}function z(){for(const A of p){const M=A.deref();M!==void 0&&(M.isRenderTarget===!0?L(M):O(M))}p.clear(),f.clear()}function W(A){const M=i.get(A);if(M.__webglInit===void 0)return;const H=A.source,et=h.get(H);if(et){const J=et[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&B(A),Object.keys(et).length===0&&h.delete(H)}i.remove(A)}function B(A){const M=i.get(A);s.deleteTexture(M.__webglTexture);const H=A.source,et=h.get(H);delete et[M.__cacheKey],r.memory.textures--}function tt(A){const M=i.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();const H=A.depthTexture;if(H&&H.renderTarget===A&&O(H),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let st=0;st<M.__webglFramebuffer[J].length;st++)s.deleteFramebuffer(M.__webglFramebuffer[J][st]);else s.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)s.deleteFramebuffer(M.__webglFramebuffer[J]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const et=A.textures;for(let J=0,st=et.length;J<st;J++){const ct=i.get(et[J]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),r.memory.textures--),i.remove(et[J])}i.remove(A)}let X=0;function Q(){X=0}function j(){return X}function Mt(A){X=A}function Pt(){const A=X;return A>=n.maxTextures&&Dt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures),X+=1,A}function Y(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function ut(A,M){const H=i.get(A);if(A.isVideoTexture&&_e(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){const et=A.image;if(et===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(H,A,M);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+M)}function xt(A,M){const H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){xe(H,A,M);return}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+M)}function Tt(A,M){const H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){xe(H,A,M);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+M)}function ft(A,M){const H=i.get(A);if(A.version>0&&H.__version!==A.version){Ge(H,A,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+M)}const Ut={[Ui]:s.REPEAT,[Li]:s.CLAMP_TO_EDGE,[gr]:s.MIRRORED_REPEAT},ce={[Le]:s.NEAREST,[ph]:s.NEAREST_MIPMAP_NEAREST,[vs]:s.NEAREST_MIPMAP_LINEAR,[Ve]:s.LINEAR,[Pa]:s.LINEAR_MIPMAP_NEAREST,[$i]:s.LINEAR_MIPMAP_LINEAR},wt={[xh]:s.NEVER,[cc]:s.ALWAYS,[_h]:s.LESS,[oc]:s.LEQUAL,[Mh]:s.EQUAL,[lc]:s.GEQUAL,[Sh]:s.GREATER,[yh]:s.NOTEQUAL};function It(A,M){if(M.type===xi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ve||M.magFilter===Pa||M.magFilter===vs||M.magFilter===$i||M.minFilter===Ve||M.minFilter===Pa||M.minFilter===vs||M.minFilter===$i)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Ut[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Ut[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Ut[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ce[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ce[M.minFilter]),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,wt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Le||M.minFilter!==vs&&M.minFilter!==$i||M.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function zt(A,M){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",I),D(M));const et=M.source;let J=h.get(et);J===void 0&&(J={},h.set(et,J));const st=Y(M);if(st!==A.__cacheKey){J[st]===void 0&&(J[st]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,H=!0),J[st].usedTimes++;const ct=J[A.__cacheKey];ct!==void 0&&(J[A.__cacheKey].usedTimes--,ct.usedTimes===0&&B(M)),A.__cacheKey=st,A.__webglTexture=J[st].texture}return H}function Wt(A,M,H){return Math.floor(Math.floor(A/H)/M)}function Ae(A,M,H,et){const st=A.updateRanges;if(st.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,H,et,M.data);else{st.sort((C,Z)=>C.start-Z.start);let ct=0;for(let C=1;C<st.length;C++){const Z=st[ct],$=st[C],ot=Z.start+Z.count,nt=Wt($.start,M.width,4),at=Wt(Z.start,M.width,4);$.start<=ot+1&&nt===at&&Wt($.start+$.count-1,M.width,4)===nt?Z.count=Math.max(Z.count,$.start+$.count-Z.start):(++ct,st[ct]=$)}st.length=ct+1;const q=e.getParameter(s.UNPACK_ROW_LENGTH),K=e.getParameter(s.UNPACK_SKIP_PIXELS),rt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let C=0,Z=st.length;C<Z;C++){const $=st[C],ot=Math.floor($.start/4),nt=Math.ceil($.count/4),at=ot%M.width,Et=Math.floor(ot/M.width),Gt=nt,it=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,at),e.pixelStorei(s.UNPACK_SKIP_ROWS,Et),e.texSubImage2D(s.TEXTURE_2D,0,at,Et,Gt,it,H,et,M.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,q),e.pixelStorei(s.UNPACK_SKIP_PIXELS,K),e.pixelStorei(s.UNPACK_SKIP_ROWS,rt)}}function xe(A,M,H){let et=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(et=s.TEXTURE_3D);const J=zt(A,M),st=M.source;e.bindTexture(et,A.__webglTexture,s.TEXTURE0+H);const ct=i.get(st);if(st.version!==ct.__version||J===!0){if(e.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const it=Yt.getPrimaries(Yt.workingColorSpace),At=M.colorSpace===Xi?null:Yt.getPrimaries(M.colorSpace),Ht=M.colorSpace===Xi||it===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht)}e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let K=_(M.image,!1,n.maxTextureSize);K=Ct(M,K);const rt=a.convert(M.format,M.colorSpace),C=a.convert(M.type);let Z=w(M.internalFormat,rt,C,M.normalized,M.colorSpace,M.isVideoTexture);It(et,M);let $;const ot=M.mipmaps,nt=M.isVideoTexture!==!0,at=ct.__version===void 0||J===!0,Et=st.dataReady,Gt=b(M,K);if(M.isDepthTexture)Z=x(M.format===qi,M.type),at&&(nt?e.texStorage2D(s.TEXTURE_2D,1,Z,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,Z,K.width,K.height,0,rt,C,null));else if(M.isDataTexture)if(ot.length>0){nt&&at&&e.texStorage2D(s.TEXTURE_2D,Gt,Z,ot[0].width,ot[0].height);for(let it=0,At=ot.length;it<At;it++)$=ot[it],nt?Et&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,$.width,$.height,rt,C,$.data):e.texImage2D(s.TEXTURE_2D,it,Z,$.width,$.height,0,rt,C,$.data);M.generateMipmaps=!1}else nt?(at&&e.texStorage2D(s.TEXTURE_2D,Gt,Z,K.width,K.height),Et&&Ae(M,K,rt,C)):e.texImage2D(s.TEXTURE_2D,0,Z,K.width,K.height,0,rt,C,K.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){nt&&at&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,Z,ot[0].width,ot[0].height,K.depth);for(let it=0,At=ot.length;it<At;it++)if($=ot[it],M.format!==_i)if(rt!==null)if(nt){if(Et)if(M.layerUpdates.size>0){const Ht=ml($.width,$.height,M.format,M.type);for(const pt of M.layerUpdates){const ee=$.data.subarray(pt*Ht/$.data.BYTES_PER_ELEMENT,(pt+1)*Ht/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,pt,$.width,$.height,1,rt,ee)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,$.width,$.height,K.depth,rt,$.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,it,Z,$.width,$.height,K.depth,0,$.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?Et&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,$.width,$.height,K.depth,rt,C,$.data):e.texImage3D(s.TEXTURE_2D_ARRAY,it,Z,$.width,$.height,K.depth,0,rt,C,$.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{nt&&at&&e.texStorage2D(s.TEXTURE_2D,Gt,Z,ot[0].width,ot[0].height);for(let it=0,At=ot.length;it<At;it++)$=ot[it],M.format!==_i?rt!==null?nt?Et&&e.compressedTexSubImage2D(s.TEXTURE_2D,it,0,0,$.width,$.height,rt,$.data):e.compressedTexImage2D(s.TEXTURE_2D,it,Z,$.width,$.height,0,$.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?Et&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,$.width,$.height,rt,C,$.data):e.texImage2D(s.TEXTURE_2D,it,Z,$.width,$.height,0,rt,C,$.data)}else if(M.isDataArrayTexture)if(nt){if(at&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,Z,K.width,K.height,K.depth),Et)if(M.layerUpdates.size>0){const it=ml(K.width,K.height,M.format,M.type);for(const At of M.layerUpdates){const Ht=K.data.subarray(At*it/K.data.BYTES_PER_ELEMENT,(At+1)*it/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,At,K.width,K.height,1,rt,C,Ht)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,rt,C,K.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Z,K.width,K.height,K.depth,0,rt,C,K.data);else if(M.isData3DTexture)nt?(at&&e.texStorage3D(s.TEXTURE_3D,Gt,Z,K.width,K.height,K.depth),Et&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,rt,C,K.data)):e.texImage3D(s.TEXTURE_3D,0,Z,K.width,K.height,K.depth,0,rt,C,K.data);else if(M.isFramebufferTexture){if(at)if(nt)e.texStorage2D(s.TEXTURE_2D,Gt,Z,K.width,K.height);else{let it=K.width,At=K.height;for(let Ht=0;Ht<Gt;Ht++)e.texImage2D(s.TEXTURE_2D,Ht,Z,it,At,0,rt,C,null),it>>=1,At>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const it=s.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),K.parentNode!==it){it.appendChild(K),f.add(M),it.onpaint=At=>{const Ht=At.changedElements;for(const pt of f)Ht.includes(pt.image)&&(pt.needsUpdate=!0)},it.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,K);else{const Ht=s.RGBA,pt=s.RGBA,ee=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ht,pt,ee,K)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ot.length>0){if(nt&&at){const it=Ft(ot[0]);e.texStorage2D(s.TEXTURE_2D,Gt,Z,it.width,it.height)}for(let it=0,At=ot.length;it<At;it++)$=ot[it],nt?Et&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,rt,C,$):e.texImage2D(s.TEXTURE_2D,it,Z,rt,C,$);M.generateMipmaps=!1}else if(nt){if(at){const it=Ft(K);e.texStorage2D(s.TEXTURE_2D,Gt,Z,it.width,it.height)}Et&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt,C,K)}else e.texImage2D(s.TEXTURE_2D,0,Z,rt,C,K);E(M)&&M.mipmapsAutoUpdate===!0&&y(et),ct.__version=st.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Ge(A,M,H){if(M.image.length!==6)return;const et=zt(A,M),J=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+H);const st=i.get(J);if(J.version!==st.__version||et===!0){e.activeTexture(s.TEXTURE0+H);const ct=Yt.getPrimaries(Yt.workingColorSpace),q=M.colorSpace===Xi?null:Yt.getPrimaries(M.colorSpace),K=M.colorSpace===Xi||ct===q?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const rt=M.isCompressedTexture||M.image[0].isCompressedTexture,C=M.image[0]&&M.image[0].isDataTexture,Z=[];for(let pt=0;pt<6;pt++)!rt&&!C?Z[pt]=_(M.image[pt],!0,n.maxCubemapSize):Z[pt]=C?M.image[pt].image:M.image[pt],Z[pt]=Ct(M,Z[pt]);const $=Z[0],ot=a.convert(M.format,M.colorSpace),nt=a.convert(M.type);let at=w(M.internalFormat,ot,nt,M.normalized,M.colorSpace);const Et=M.isVideoTexture!==!0,Gt=st.__version===void 0||et===!0,it=J.dataReady;let At=b(M,$);It(s.TEXTURE_CUBE_MAP,M);let Ht;if(M.isDepthTexture){if(at=x(M.format===qi,M.type),Gt)if(Et)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,at,$.width,$.height);else for(let pt=0;pt<6;pt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,at,$.width,$.height,0,ot,nt,null)}else if(rt){Et&&Gt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,At,at,$.width,$.height);for(let pt=0;pt<6;pt++){Ht=Z[pt].mipmaps;for(let ee=0;ee<Ht.length;ee++){const be=Ht[ee];M.format!==_i?ot!==null?Et?it&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ee,0,0,be.width,be.height,ot,be.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ee,at,be.width,be.height,0,be.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ee,0,0,be.width,be.height,ot,nt,be.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ee,at,be.width,be.height,0,ot,nt,be.data)}}}else{if(Ht=M.mipmaps,Et&&Gt){Ht.length>0&&At++;const pt=Ft(Z[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,At,at,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(C){Et?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Z[pt].width,Z[pt].height,ot,nt,Z[pt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,at,Z[pt].width,Z[pt].height,0,ot,nt,Z[pt].data);for(let ee=0;ee<Ht.length;ee++){const Oi=Ht[ee].image[pt].image;Et?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ee+1,0,0,Oi.width,Oi.height,ot,nt,Oi.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ee+1,at,Oi.width,Oi.height,0,ot,nt,Oi.data)}}else{Et?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,ot,nt,Z[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,at,ot,nt,Z[pt]);for(let ee=0;ee<Ht.length;ee++){const be=Ht[ee];Et?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ee+1,0,0,ot,nt,be.image[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ee+1,at,ot,nt,be.image[pt])}}}E(M)&&M.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),st.__version=J.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function he(A,M,H,et,J,st){const ct=a.convert(H.format,H.colorSpace),q=a.convert(H.type),K=w(H.internalFormat,ct,q,H.normalized,H.colorSpace),rt=i.get(M),C=i.get(H);if(C.__renderTarget=M,!rt.__hasExternalTextures){const Z=Math.max(1,M.width>>st),$=Math.max(1,M.height>>st);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,st,K,Z,$,M.depth,0,ct,q,null):e.texImage2D(J,st,K,Z,$,0,ct,q,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),dt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,J,C.__webglTexture,0,oe(M)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,J,C.__webglTexture,st),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ui(A,M,H){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer){const et=M.depthTexture,J=et&&et.isDepthTexture?et.type:null,st=x(M.stencilBuffer,J),ct=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;dt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe(M),st,M.width,M.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe(M),st,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,st,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,A)}else{const et=M.textures;for(let J=0;J<et.length;J++){const st=et[J],ct=a.convert(st.format,st.colorSpace),q=a.convert(st.type),K=w(st.internalFormat,ct,q,st.normalized,st.colorSpace);dt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe(M),K,M.width,M.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe(M),K,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,K,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(A,M,H){const et=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(M.depthTexture);J.__renderTarget=M;const st=et?M.depthTexture.image[0]:M.depthTexture.image;(!J.__webglTexture||st.width!==M.width||st.height!==M.height)&&(st.width=M.width,st.height=M.height,M.depthTexture.needsUpdate=!0),et?ft(M.depthTexture,0):ut(M.depthTexture,0);const ct=J.__webglTexture,q=oe(M),K=et?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,rt=M.depthTexture.format===qi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Zi)dt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,K,ct,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,rt,K,ct,0);else if(M.depthTexture.format===qi)dt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,K,ct,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,rt,K,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ze(A){const M=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const et=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),et){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,et.removeEventListener("dispose",J)};et.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=et}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let et=0;et<6;et++)ye(M.__webglFramebuffer[et],A,et);else A.texture.mipmaps.length>0?ye(M.__webglFramebuffer[0],A,0):ye(M.__webglFramebuffer,A,0);else if(H){M.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[et]),M.__webglDepthbuffer[et]===void 0)M.__webglDepthbuffer[et]=s.createRenderbuffer(),ui(M.__webglDepthbuffer[et],A,!1);else{const J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=M.__webglDepthbuffer[et];s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,st)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ui(M.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,st)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Je(A,M,H){const et=i.get(A);M!==void 0&&he(et.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Ze(A)}function Qe(A){const M=A.texture,H=i.get(A),et=i.get(M);A.addEventListener("dispose",U),D(A);const J=A.textures,st=A.isWebGLCubeRenderTarget===!0,ct=J.length>1;if(ct||(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=M.version,r.memory.textures++),st){H.__webglFramebuffer=[];for(let q=0;q<6;q++)if(M.mipmaps.length>0){H.__webglFramebuffer[q]=[];for(let K=0;K<M.mipmaps.length;K++)H.__webglFramebuffer[q][K]=s.createFramebuffer()}else H.__webglFramebuffer[q]=s.createFramebuffer()}else{if(M.mipmaps.length>0){H.__webglFramebuffer=[];for(let q=0;q<M.mipmaps.length;q++)H.__webglFramebuffer[q]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(ct)for(let q=0,K=J.length;q<K;q++){const rt=i.get(J[q]);rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture(),r.memory.textures++)}if(A.samples>0&&dt(A)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let q=0;q<J.length;q++){const K=J[q];H.__webglColorRenderbuffer[q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[q]);const rt=a.convert(K.format,K.colorSpace),C=a.convert(K.type),Z=w(K.internalFormat,rt,C,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),$=oe(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,Z,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+q,s.RENDERBUFFER,H.__webglColorRenderbuffer[q])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),ui(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(st){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),It(s.TEXTURE_CUBE_MAP,M);for(let q=0;q<6;q++)if(M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)he(H.__webglFramebuffer[q][K],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,K);else he(H.__webglFramebuffer[q],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);E(M)?y(s.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(ct){for(let q=0,K=J.length;q<K;q++){const rt=J[q],C=i.get(rt);let Z=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Z,C.__webglTexture),It(Z,rt),he(H.__webglFramebuffer,A,rt,s.COLOR_ATTACHMENT0+q,Z,0),E(rt)&&y(Z)}e.unbindTexture()}else{let q=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(q=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(q,et.__webglTexture),It(q,M),M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)he(H.__webglFramebuffer[K],A,M,s.COLOR_ATTACHMENT0,q,K);else he(H.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,q,0);E(M)?y(q):M.mipmaps.length>0&&s.texParameteri(q,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&Ze(A)}function F(A){const M=A.textures;for(let H=0,et=M.length;H<et;H++){const J=M[H];if(E(J)&&J.mipmapsAutoUpdate===!0){const st=T(A),ct=i.get(J).__webglTexture;e.bindTexture(st,ct),y(st),e.unbindTexture()}}}const je=[];function re(A){if(A.samples>0){if(dt(A)===!1){const M=A.textures,H=A.width,et=A.height;let J=s.COLOR_BUFFER_BIT;const st=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=i.get(A),q=M.length>1;if(q)for(let rt=0;rt<M.length;rt++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let rt=0;rt<M.length;rt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[rt]);const C=i.get(M[rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,C,0)}s.blitFramebuffer(0,0,H,et,0,0,H,et,J,s.NEAREST),c===!0&&(je.length=0,je.push(s.COLOR_ATTACHMENT0+rt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&je.push(st),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,je))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),q)for(let rt=0;rt<M.length;rt++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,ct.__webglColorRenderbuffer[rt]);const C=i.get(M[rt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,C,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const M=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function oe(A){return Math.min(n.maxSamples,A.samples)}function dt(A){const M=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function _e(A){const M=r.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function Ct(A,M){const H=A.colorSpace,et=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==na&&H!==Xi&&(Yt.getTransfer(H)===ie?(et!==_i||J!==Ye)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",H)),M}function Ft(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Pt,this.resetTextureUnits=Q,this.getTextureUnits=j,this.setTextureUnits=Mt,this.setTexture2D=ut,this.setTexture2DArray=xt,this.setTexture3D=Tt,this.setTextureCube=ft,this.rebindTextures=Je,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=he,this.useMultisampledRTT=dt,this.dispose=z}function Km(s,t){function e(i,n=Xi){let a;const r=Yt.getTransfer(n);if(i===Ye)return s.UNSIGNED_BYTE;if(i===eo)return s.UNSIGNED_SHORT_4_4_4_4;if(i===io)return s.UNSIGNED_SHORT_5_5_5_1;if(i===ic)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===nc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===tc)return s.BYTE;if(i===ec)return s.SHORT;if(i===as)return s.UNSIGNED_SHORT;if(i===to)return s.INT;if(i===yi)return s.UNSIGNED_INT;if(i===xi)return s.FLOAT;if(i===bi)return s.HALF_FLOAT;if(i===sc)return s.ALPHA;if(i===ac)return s.RGB;if(i===_i)return s.RGBA;if(i===Zi)return s.DEPTH_COMPONENT;if(i===qi)return s.DEPTH_STENCIL;if(i===rc)return s.RED;if(i===no)return s.RED_INTEGER;if(i===dn)return s.RG;if(i===so)return s.RG_INTEGER;if(i===ao)return s.RGBA_INTEGER;if(i===qs||i===Ys||i===Ks||i===Zs)if(r===ie)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===qs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===qs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ys)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ks)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vr||i===xr||i===_r||i===Mr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===vr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_r)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sr||i===yr||i===br||i===Er||i===wr||i===ea||i===Tr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Sr||i===yr)return r===ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===br)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Er)return a.COMPRESSED_R11_EAC;if(i===wr)return a.COMPRESSED_SIGNED_R11_EAC;if(i===ea)return a.COMPRESSED_RG11_EAC;if(i===Tr)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ar||i===Rr||i===Cr||i===Lr||i===Pr||i===Ir||i===Dr||i===Nr||i===Ur||i===Fr||i===Or||i===Br||i===kr||i===zr)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ar)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ir)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ur)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Or)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Br)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zr)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hr||i===Gr||i===Vr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Hr)return r===ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wr||i===Xr||i===ia||i===$r)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Wr)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Xr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ia)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$r)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===On?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const Zm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Qm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new bc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Qi({vertexShader:Zm,fragmentShader:Jm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rt(new qe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jm extends un{constructor(t,e){super();const i=this;let n=null,a=1,r=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,p=null;const v=typeof XRWebGLBinding<"u",g=new Qm,m={},_=e.getContextAttributes();let E=null,y=null;const T=[],w=[],x=new Nt;let b=null,D=null;const R=new ze;R.viewport=new fe;const I=new ze;I.viewport=new fe;const U=[R,I],O=new hd;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ut=T[Y];return ut===void 0&&(ut=new za,T[Y]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(Y){let ut=T[Y];return ut===void 0&&(ut=new za,T[Y]=ut),ut.getGripSpace()},this.getHand=function(Y){let ut=T[Y];return ut===void 0&&(ut=new za,T[Y]=ut),ut.getHandSpace()};function W(Y){const ut=w.indexOf(Y.inputSource);if(ut===-1)return;const xt=T[ut];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,l||r),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){n.removeEventListener("select",W),n.removeEventListener("selectstart",W),n.removeEventListener("selectend",W),n.removeEventListener("squeeze",W),n.removeEventListener("squeezestart",W),n.removeEventListener("squeezeend",W),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",tt);for(let Y=0;Y<T.length;Y++){const ut=w[Y];ut!==null&&(w[Y]=null,T[Y].disconnect(ut))}L=null,z=null,g.reset();for(const Y in m)delete m[Y];if(t.setRenderTarget(E),h=null,d=null,f=null,n=null,y=null,Pt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),D!==null){const Y=D.camera;Y.fov=D.fov,Y.zoom=D.zoom,Y.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(n,e)),f},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(E=t.getRenderTarget(),n.addEventListener("select",W),n.addEventListener("selectstart",W),n.addEventListener("selectend",W),n.addEventListener("squeeze",W),n.addEventListener("squeezestart",W),n.addEventListener("squeezeend",W),n.addEventListener("end",B),n.addEventListener("inputsourceschange",tt),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Tt=null,ft=null;_.depth&&(ft=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=_.stencil?qi:Zi,Tt=_.stencil?On:yi);const Ut={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:a};f=this.getBinding(),d=f.createProjectionLayer(Ut),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Si(d.textureWidth,d.textureHeight,{format:_i,type:Ye,depthTexture:new Bn(d.textureWidth,d.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const xt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};h=new XRWebGLLayer(n,e,xt),n.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Si(h.framebufferWidth,h.framebufferHeight,{format:_i,type:Ye,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await n.requestReferenceSpace(o),Pt.setContext(n),Pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function tt(Y){for(let ut=0;ut<Y.removed.length;ut++){const xt=Y.removed[ut],Tt=w.indexOf(xt);Tt>=0&&(w[Tt]=null,T[Tt].disconnect(xt))}for(let ut=0;ut<Y.added.length;ut++){const xt=Y.added[ut];let Tt=w.indexOf(xt);if(Tt===-1){for(let Ut=0;Ut<T.length;Ut++)if(Ut>=w.length){w.push(xt),Tt=Ut;break}else if(w[Ut]===null){w[Ut]=xt,Tt=Ut;break}if(Tt===-1)break}const ft=T[Tt];ft&&ft.connect(xt)}}function X(Y,ut){ut===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ut.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let ut=Y.near,xt=Y.far;g.texture!==null&&(g.depthNear>0&&(ut=g.depthNear),g.depthFar>0&&(xt=g.depthFar)),O.near=I.near=R.near=ut,O.far=I.far=R.far=xt,(L!==O.near||z!==O.far)&&(n.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,z=O.far),O.layers.mask=Y.layers.mask|6,R.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;const Tt=Y.parent,ft=O.cameras;X(O,Tt);for(let Ut=0;Ut<ft.length;Ut++)X(ft[Ut],Tt);O.projectionMatrix.copy(R.projectionMatrix),O.projectionMatrixInverse.copy(R.projectionMatrixInverse),D===null&&Y.isPerspectiveCamera&&(D={camera:Y,fov:Y.fov,zoom:Y.zoom}),Q(Y,O,Tt)};function Q(Y,ut,xt){xt===null?Y.matrix.copy(ut.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ut.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ut.projectionMatrix),Y.projectionMatrixInverse.copy(ut.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=oa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(Y){return m[Y]};let j=null;function Mt(Y,ut){if(u=ut.getViewerPose(l||r),p=ut,u!==null){const xt=u.views;h!==null&&(t.setRenderTargetFramebuffer(y,h.framebuffer),t.setRenderTarget(y));let Tt=!1;xt.length!==O.cameras.length&&(O.cameras.length=0,Tt=!0);for(let wt=0;wt<xt.length;wt++){const It=xt[wt];let zt=null;if(h!==null)zt=h.getViewport(It);else{const Ae=f.getViewSubImage(d,It);zt=Ae.viewport,wt===0&&(t.setRenderTargetTextures(y,Ae.colorTexture,Ae.depthStencilTexture),t.setRenderTarget(y))}let Wt=U[wt];Wt===void 0&&(Wt=new ze,Wt.layers.enable(wt),Wt.viewport=new fe,U[wt]=Wt),Wt.matrix.fromArray(It.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(It.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(zt.x,zt.y,zt.width,zt.height),wt===0&&(O.matrix.copy(Wt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Tt===!0&&O.cameras.push(Wt)}const ft=n.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const wt=f.getDepthInformation(xt[0]);wt&&wt.isValid&&wt.texture&&g.init(wt,n.renderState)}if(ft&&ft.includes("camera-access")&&v){t.state.unbindTexture(),f=i.getBinding();for(let wt=0;wt<xt.length;wt++){const It=xt[wt].camera;if(It){let zt=m[It];zt||(zt=new bc,m[It]=zt);const Wt=f.getCameraImage(It);zt.sourceTexture=Wt}}}}for(let xt=0;xt<T.length;xt++){const Tt=w[xt],ft=T[xt];Tt!==null&&ft!==void 0&&ft.update(Tt,ut,l||r)}j&&j(Y,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),p=null}const Pt=new Ac;Pt.setAnimationLoop(Mt),this.setAnimationLoop=function(Y){j=Y},this.dispose=function(){}}}const t0=new ae,Oc=new Bt;Oc.set(-1,0,0,0,1,0,0,0,1);function e0(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Ec(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,_,E,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?a(g,m):m.isMeshLambertMaterial?(a(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(g,m),f(g,m)):m.isMeshPhongMaterial?(a(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(g,m),d(g,m),m.isMeshPhysicalMaterial&&h(g,m,y)):m.isMeshMatcapMaterial?(a(g,m),p(g,m)):m.isMeshDepthMaterial?a(g,m):m.isMeshDistanceMaterial?(a(g,m),v(g,m)):m.isMeshNormalMaterial?a(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,_,E):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===He&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===He&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const _=t.get(m),E=_.envMap,y=_.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(t0.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Oc),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,_,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=E*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,_){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===He&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function i0(s,t,e,i){let n={},a={};function r(_,E){const y=E.program;i.uniformBlockBinding(_,y,n[_.id])}function o(_,E){let y=n[_.id];y===void 0&&(p(_),y=c(_),n[_.id]=y,_.addEventListener("dispose",g));const T=E.program;i.updateUBOMapping(_,T);const w=t.render.frame;a[_.id]!==w&&(l(_),a[_.id]=w)}function c(_){const E=s.createBuffer(),y=_.__size,T=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,y,T),s.bindBuffer(s.UNIFORM_BUFFER,null),E}function l(_){const E=n[_.id],y=_.uniforms,T=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let w=0,x=y.length;w<x;w++){const b=y[w];if(Array.isArray(b))for(let D=0,R=b.length;D<R;D++)u(b[D],w,D,T);else u(b,w,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(_,E,y,T){if(d(_,E,y,T)===!0){const w=_.__offset,x=_.value;if(Array.isArray(x)){let b=0;for(let D=0;D<x.length;D++){const R=x[D],I=v(R,!0);f(R,_.__data,b),b+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,_.__data)}}function f(_,E,y){typeof _=="number"||typeof _=="boolean"?E[y]=_:_.isMatrix3?(E[y]=_.elements[0],E[y+1]=_.elements[1],E[y+2]=_.elements[2],E[y+3]=0,E[y+4]=_.elements[3],E[y+5]=_.elements[4],E[y+6]=_.elements[5],E[y+7]=0,E[y+8]=_.elements[6],E[y+9]=_.elements[7],E[y+10]=_.elements[8],E[y+11]=0):ArrayBuffer.isView(_)?E.set(_.subarray(0,E.length-y),y):_.toArray(E,y)}function d(_,E,y,T){const w=_.value,x=E+"_"+y;if(Array.isArray(w)){T[x]===void 0&&(T[x]=[]);const b=T[x];let D=!1;for(let R=0;R<w.length;R++)h(w[R],b,R)===!0&&(D=!0);return D}return h(w,T,x)}function h(_,E,y){if(E[y]===void 0)return typeof _=="number"||typeof _=="boolean"?E[y]=_:ArrayBuffer.isView(_)?E[y]=_.slice():E[y]=_.clone(),!0;{const T=E[y];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return E[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function p(_){const E=_.uniforms;let y=0;const T=16;for(let x=0,b=E.length;x<b;x++){const D=Array.isArray(E[x])?E[x]:[E[x]];for(let R=0,I=D.length;R<I;R++){const U=D[R],O=Array.isArray(U.value)?U.value:[U.value],L=Array.isArray(E[x])||Array.isArray(U.value);let z=y;for(let B=0,tt=O.length;B<tt;B++){const X=O[B],Q=v(X,L),j=y%T,Mt=j%Q.boundary,Pt=j+Mt;y+=Mt,Pt!==0&&T-Pt<Q.storage&&(y+=T-Pt),B===0&&(z=y),y+=Q.storage}const W=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new W((y-z)/Float32Array.BYTES_PER_ELEMENT),U.__offset=z}}const w=y%T;return w>0&&(y+=T-w),_.__size=y,_.__cache={},this}function v(_,E){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=16,y.storage=48):_.isMatrix4?(y.boundary=16,y.storage=64):_.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",_),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(_){const E=_.target;E.removeEventListener("dispose",g),s.deleteBuffer(n[E.id]),delete n[E.id],delete a[E.id]}function m(){for(const _ in n)s.deleteBuffer(n[_]);n={},a={}}return{bind:r,update:o,dispose:m}}const n0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pi=null;function s0(){return pi===null&&(pi=new Zh(n0,16,16,dn,bi),pi.name="DFG_LUT",pi.minFilter=Ve,pi.magFilter=Ve,pi.wrapS=Li,pi.wrapT=Li,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}class Bc{constructor(t={}){const{canvas:e=Eh(),context:i=null,depth:n=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Ye}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;const v=h,g=new Set([ao,so,no]),m=new Set([Ye,yi,as,On,eo,io]),_=new Uint32Array(4),E=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let T=null,w=null;const x=[],b=[];let D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,U=null,O=null,L=null,z=null;this._outputColorSpace=le;let W=0,B=0,tt=null,X=-1,Q=null;const j=new fe,Mt=new fe;let Pt=null;const Y=new gt(0);let ut=0,xt=e.width,Tt=e.height,ft=1,Ut=null,ce=null;const wt=new fe(0,0,xt,Tt),It=new fe(0,0,xt,Tt);let zt=!1;const Wt=new os,Ae=new co;let xe=!1,Ge=!1;const he=new ae,ui=new P,ye=new fe,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Qe(){return tt===null?ft:1}let F=i;function je(S,N){return e.getContext(S,N)}let re,oe,dt,_e,Ct,Ft,A,M,H,et,J,st,ct,q,K,rt,C,Z,$,ot,nt,at,Et;try{const S={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jr}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",pt,!1),F===null){const N="webgl2";if(F=je(N,S),F===null)throw je(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(S){throw e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Jt("WebGLRenderer: "+S.message),S}function Gt(){re=new lp(F),re.init(),nt=new Km(F,re),oe=new Jf(F,re,t,nt),dt=new qm(F,re),oe.reversedDepthBuffer&&d&&dt.buffers.depth.setReversed(!0),O=F.createFramebuffer(),L=F.createFramebuffer(),z=F.createFramebuffer(),_e=new dp(F),Ct=new Dm,Ft=new Ym(F,re,dt,Ct,oe,nt,_e),A=new op(R),M=new ud(F),at=new Kf(F,M),H=new cp(F,M,_e,at),et=new fp(F,H,M,at,_e),Z=new up(F,oe,Ft),K=new Qf(Ct),J=new Im(R,A,re,oe,at,K),st=new e0(R,Ct),ct=new Um,q=new Hm(re),C=new Yf(R,A,dt,et,p,c),rt=new $m(R,et,oe),Et=new i0(F,_e,oe,dt),$=new Zf(F,re,_e),ot=new hp(F,re,_e),_e.programs=J.programs,R.capabilities=oe,R.extensions=re,R.properties=Ct,R.renderLists=ct,R.shadowMap=rt,R.state=dt,R.info=_e}v!==Ye&&(D=new mp(v,e.width,e.height,o,n,a));const it=new jm(R,F);this.xr=it,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=re.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=re.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(S){S!==void 0&&(ft=S,this.setSize(xt,Tt,!1))},this.getSize=function(S){return S.set(xt,Tt)},this.setSize=function(S,N,V=!0){if(it.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}xt=S,Tt=N,e.width=Math.floor(S*ft),e.height=Math.floor(N*ft),V===!0&&(e.style.width=S+"px",e.style.height=N+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(xt*ft,Tt*ft).floor()},this.setDrawingBufferSize=function(S,N,V){xt=S,Tt=N,ft=V,e.width=Math.floor(S*V),e.height=Math.floor(N*V),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(v===Ye){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(j)},this.getViewport=function(S){return S.copy(wt)},this.setViewport=function(S,N,V,k){S.isVector4?wt.set(S.x,S.y,S.z,S.w):wt.set(S,N,V,k),dt.viewport(j.copy(wt).multiplyScalar(Qe()).round())},this.getScissor=function(S){return S.copy(It)},this.setScissor=function(S,N,V,k){S.isVector4?It.set(S.x,S.y,S.z,S.w):It.set(S,N,V,k),dt.scissor(Mt.copy(It).multiplyScalar(Qe()).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(S){dt.setScissorTest(zt=S)},this.setOpaqueSort=function(S){Ut=S},this.setTransparentSort=function(S){ce=S},this.getClearColor=function(S){return S.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,V=!0){let k=0;if(S){let G=!1;if(tt!==null){const ht=tt.texture.format;G=g.has(ht)}if(G){const ht=tt.texture.type,_t=m.has(ht),lt=C.getClearColor(),vt=C.getClearAlpha(),bt=lt.r,kt=lt.g,$t=lt.b;_t?(_[0]=bt,_[1]=kt,_[2]=$t,_[3]=vt,F.clearBufferuiv(F.COLOR,0,_)):(E[0]=bt,E[1]=kt,E[2]=$t,E[3]=vt,F.clearBufferiv(F.COLOR,0,E))}else k|=F.COLOR_BUFFER_BIT}N&&(k|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),C.dispose(),ct.dispose(),q.dispose(),Ft.dispose(),Ct.dispose(),A.dispose(),et.dispose(),H.dispose(),at.dispose(),Et.dispose(),J.dispose(),it.dispose(),it.removeEventListener("sessionstart",Ao),it.removeEventListener("sessionend",Ro),tn.stop()};function At(S){S.preventDefault(),ra("WebGLRenderer: Context Lost."),I=!0}function Ht(){ra("WebGLRenderer: Context Restored."),I=!1;const S=_e.autoReset,N=rt.enabled,V=rt.autoUpdate,k=rt.needsUpdate,G=rt.type;Gt(),_e.autoReset=S,rt.enabled=N,rt.autoUpdate=V,rt.needsUpdate=k,rt.type=G}function pt(S){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ee(S){const N=S.target;N.removeEventListener("dispose",ee),be(N)}function be(S){Oi(S),Ct.remove(S)}function Oi(S){const N=Ct.get(S).programs;N!==void 0&&(N.forEach(function(V){J.releaseProgram(V)}),S.isShaderMaterial&&J.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,V,k,G,ht){N===null&&(N=Ze);const _t=G.isMesh&&G.matrixWorld.determinantAffine()<0,lt=Vc(S,N,V,k,G);dt.setMaterial(k,_t);let vt=V.index,bt=1;if(k.wireframe===!0){if(vt=H.getWireframeAttribute(V),vt===void 0)return;bt=2}const kt=V.drawRange,$t=V.attributes.position;let St=kt.start*bt,qt=(kt.start+kt.count)*bt;ht!==null&&(St=Math.max(St,ht.start*bt),qt=Math.min(qt,(ht.start+ht.count)*bt)),vt!==null?(St=Math.max(St,0),qt=Math.min(qt,vt.count)):$t!=null&&(St=Math.max(St,0),qt=Math.min(qt,$t.count));const ge=qt-St;if(ge<0||ge===1/0)return;at.setup(G,k,lt,V,vt);let se,ne=$;if(vt!==null&&(se=M.get(vt),ne=ot,ne.setIndex(se)),G.isMesh)k.wireframe===!0?(dt.setLineWidth(k.wireframeLinewidth*Qe()),ne.setMode(F.LINES)):ne.setMode(F.TRIANGLES);else if(G.isLine){let Pe=k.linewidth;Pe===void 0&&(Pe=1),dt.setLineWidth(Pe*Qe()),G.isLineSegments?ne.setMode(F.LINES):G.isLineLoop?ne.setMode(F.LINE_LOOP):ne.setMode(F.LINE_STRIP)}else G.isPoints?ne.setMode(F.POINTS):G.isSprite&&ne.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(re.get("WEBGL_multi_draw"))ne.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Pe=G._multiDrawStarts,yt=G._multiDrawCounts,Oe=G._multiDrawCount,jt=vt?M.get(vt).bytesPerElement:1,en=Ct.get(k).currentProgram.getUniforms();for(let Ie=0;Ie<Oe;Ie++)en.setValue(F,"_gl_DrawID",Ie),ne.render(Pe[Ie]/jt,yt[Ie])}else if(G.isInstancedMesh)ne.renderInstances(St,ge,G.count);else if(V.isInstancedBufferGeometry){const Pe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,yt=Math.min(V.instanceCount,Pe);ne.renderInstances(St,ge,yt)}else ne.render(St,ge)};function To(S,N,V,k){U!==null&&S.isNodeMaterial&&U.setObject(k,S),xe===!0&&K.setState(S,V,!1),S.transparent===!0&&S.side===Te&&S.forceSinglePass===!1?(S.side=He,S.needsUpdate=!0,Vn(S,N,k),S.side=Ni,S.needsUpdate=!0,Vn(S,N,k),S.side=Te):Vn(S,N,k)}this.compile=function(S,N,V=null){V===null&&(V=S),U!==null&&U.renderStart(S,N,V),w=q.get(V),w.init(N),b.push(w),V.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),S!==V&&S.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),Ge=this.localClippingEnabled,xe=K.init(this.clippingPlanes,Ge),xe===!0&&K.setGlobalState(this.clippingPlanes,N),U!==null&&rt.render(w.state.shadowsArray,V,N);const k=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ht=G.material;if(ht)if(Array.isArray(ht))for(let _t=0;_t<ht.length;_t++){const lt=ht[_t];To(lt,V,N,G),k.add(lt)}else To(ht,V,N,G),k.add(ht)}),w=b.pop(),U!==null&&U.renderEnd(),k},this.compileAsync=function(S,N,V=null){const k=this.compile(S,N,V);return new Promise(G=>{function ht(){if(k.forEach(function(_t){const vt=Ct.get(_t).currentProgram;(vt===void 0||vt.isReady())&&k.delete(_t)}),k.size===0){G(S);return}setTimeout(ht,10)}re.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Aa=null;function Hc(S){Aa&&Aa(S)}function Ao(){tn.stop()}function Ro(){tn.start()}const tn=new Ac;tn.setAnimationLoop(Hc),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(S){Aa=S,it.setAnimationLoop(S),S===null?tn.stop():tn.start()},it.addEventListener("sessionstart",Ao),it.addEventListener("sessionend",Ro),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(S,N);const V=it.enabled===!0&&it.isPresenting===!0,k=D!==null&&(tt===null||V)&&D.begin(R,tt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(N),N=it.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,N,tt),w=q.get(S,b.length),w.init(N),w.state.textureUnits=Ft.getTextureUnits(),b.push(w),he.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?Ae.setFromArrayCamera(N):Wt.setFromProjectionMatrix(he,hi,N.reversedDepth),Ge=this.localClippingEnabled,xe=K.init(this.clippingPlanes,Ge),T=ct.get(S,x.length),T.init(),x.push(T),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){const _t=R.xr.getDepthSensingMesh();_t!==null&&Ra(_t,N,-1/0,R.sortObjects)}Ra(S,N,0,R.sortObjects),T.finish(),U!==null&&U.updateLights(w.state.lightsArray),R.sortObjects===!0&&T.sort(Ut,ce),Je=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Je&&C.addToRenderList(T,S),this.info.autoReset===!0&&this.info.reset(),xe===!0&&K.beginShadows();const G=w.state.shadowsArray;if(rt.render(G,S,N),xe===!0&&K.endShadows(),(k&&D.hasRenderPass())===!1){const _t=T.opaque,lt=T.transmissive;if(w.setupLights(),N.isArrayCamera){const vt=N.cameras;if(lt.length>0)for(let bt=0,kt=vt.length;bt<kt;bt++){const $t=vt[bt];Lo(_t,lt,S,$t)}Je&&C.render(S);for(let bt=0,kt=vt.length;bt<kt;bt++){const $t=vt[bt];Co(T,S,$t,$t.viewport)}}else lt.length>0&&Lo(_t,lt,S,N),Je&&C.render(S),Co(T,S,N)}tt!==null&&B===0&&(Ft.updateMultisampleRenderTarget(tt),Ft.updateRenderTargetMipmap(tt)),k&&D.end(R),S.isScene===!0&&S.onAfterRender(R,S,N),at.resetDefaultState(),X=-1,Q=null,b.pop(),b.length>0?(w=b[b.length-1],Ft.setTextureUnits(w.state.textureUnits),xe===!0&&K.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,U!==null&&U.renderEnd()};function Ra(S,N,V,k){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){const _t=N.isArrayCamera?Ae:Wt;if(!S.frustumCulled||S.intersectsFrustum(_t)){k&&ye.setFromMatrixPosition(S.matrixWorld).applyMatrix4(he);const lt=et.update(S),vt=S.material;vt.visible&&T.push(S,lt,vt,V,ye.z,null,N)}}else if(S.isMesh||S.isLine||S.isPoints){const _t=N.isArrayCamera?Ae:Wt;if(!S.frustumCulled||S.intersectsFrustum(_t)){const lt=et.update(S),vt=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ye.copy(S.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),ye.copy(lt.boundingSphere.center)),ye.applyMatrix4(S.matrixWorld).applyMatrix4(he)),Array.isArray(vt)){const bt=lt.groups;for(let kt=0,$t=bt.length;kt<$t;kt++){const St=bt[kt],qt=vt[St.materialIndex];qt&&qt.visible&&T.push(S,lt,qt,V,ye.z,St,N)}}else vt.visible&&T.push(S,lt,vt,V,ye.z,null,N)}}}const ht=S.children;for(let _t=0,lt=ht.length;_t<lt;_t++)Ra(ht[_t],N,V,k)}function Co(S,N,V,k){const{opaque:G,transmissive:ht,transparent:_t}=S;w.setupLightsView(V),xe===!0&&K.setGlobalState(R.clippingPlanes,V),k&&dt.viewport(j.copy(k)),G.length>0&&ms(G,N,V),ht.length>0&&ms(ht,N,V),_t.length>0&&ms(_t,N,V),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Lo(S,N,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){const St=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new Si(1,1,{generateMipmaps:!0,type:St?bi:Ye,minFilter:$i,samples:Math.max(4,oe.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}const ht=w.state.transmissionRenderTarget[k.id],_t=k.viewport||j;ht.setSize(_t.z*R.transmissionResolutionScale,_t.w*R.transmissionResolutionScale);const lt=R.getRenderTarget(),vt=R.getActiveCubeFace(),bt=R.getActiveMipmapLevel();R.setRenderTarget(ht),R.getClearColor(Y),ut=R.getClearAlpha(),ut<1&&R.setClearColor(16777215,.5),R.clear(),Je&&C.render(V);const kt=R.toneMapping;R.toneMapping=Ii;const $t=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),xe===!0&&K.setGlobalState(R.clippingPlanes,k),ms(S,V,k),Ft.updateMultisampleRenderTarget(ht),Ft.updateRenderTargetMipmap(ht),re.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let qt=0,ge=N.length;qt<ge;qt++){const se=N[qt],{object:ne,geometry:Pe,material:yt,group:Oe}=se;if(yt.side===Te&&ne.layers.test(k.layers)){const jt=yt.side;yt.side=He,yt.needsUpdate=!0,Po(ne,V,k,Pe,yt,Oe),yt.side=jt,yt.needsUpdate=!0,St=!0}}St===!0&&(Ft.updateMultisampleRenderTarget(ht),Ft.updateRenderTargetMipmap(ht))}R.setRenderTarget(lt,vt,bt),R.setClearColor(Y,ut),$t!==void 0&&(k.viewport=$t),R.toneMapping=kt}function ms(S,N,V){const k=N.isScene===!0?N.overrideMaterial:null;for(let G=0,ht=S.length;G<ht;G++){const _t=S[G],{object:lt,geometry:vt,group:bt}=_t;let kt=_t.material;kt.allowOverride===!0&&k!==null&&(kt=k),lt.layers.test(V.layers)&&Po(lt,N,V,vt,kt,bt)}}function Po(S,N,V,k,G,ht){U!==null&&G.isNodeMaterial&&U.setObject(S,G),S.onBeforeRender(R,N,V,k,G,ht),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(R,N,V,k,S,ht),G.transparent===!0&&G.side===Te&&G.forceSinglePass===!1?(G.side=He,G.needsUpdate=!0,R.renderBufferDirect(V,N,k,G,S,ht),G.side=Ni,G.needsUpdate=!0,R.renderBufferDirect(V,N,k,G,S,ht),G.side=Te):R.renderBufferDirect(V,N,k,G,S,ht),S.onAfterRender(R,N,V,k,G,ht)}function Io(S){let N=0;for(const V of S)V.texture!==null&&N++;return N}function Vn(S,N,V){N.isScene!==!0&&(N=Ze);const k=Ct.get(S),G=w.state.lights,ht=w.state.shadowsArray,_t=G.state.version,lt=J.getParameters(S,G.state,ht,N,V,w.state.lightProbeGridArray),vt=J.getProgramCacheKey(lt);let bt=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;const kt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=A.get(S.envMap||k.environment,kt),k.envMapRotation=k.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,bt===void 0&&(S.addEventListener("dispose",ee),bt=new Map,k.programs=bt,k.programVariants=new Map);let $t=bt.get(vt);if($t!==void 0){if(k.currentProgram===$t&&k.lightsStateVersion===_t)return No(S,lt),$t}else lt.uniforms=J.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,V,lt),S.onBeforeCompile(lt,R),$t=J.acquireProgram(lt,vt),bt.set(vt,$t),k.uniforms=lt.uniforms;const St=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(St.clippingPlanes=K.uniform),No(S,lt),k.needsLights=Xc(S),k.lightsStateVersion=_t,k.needsLights&&(St.ambientLightColor.value=G.state.ambient,St.lightProbe.value=G.state.probe,St.sunLights.value=G.state.sun,St.sunLightShadows.value=G.state.sunShadow,St.directionalLights.value=G.state.directional,St.directionalLightShadows.value=G.state.directionalShadow,St.spotLights.value=G.state.spot,St.spotLightShadows.value=G.state.spotShadow,St.rectAreaLights.value=G.state.rectArea,St.ltc_1.value=G.state.rectAreaLTC1,St.ltc_2.value=G.state.rectAreaLTC2,St.pointLights.value=G.state.point,St.pointLightShadows.value=G.state.pointShadow,St.hemisphereLights.value=G.state.hemi,St.sunShadowMatrix.value=G.state.sunShadowMatrix,St.sunShadowCascade.value=G.state.sunShadowCascade,St.directionalShadowMatrix.value=G.state.directionalShadowMatrix,St.spotLightMatrix.value=G.state.spotLightMatrix,St.spotLightMap.value=G.state.spotLightMap,St.pointShadowMatrix.value=G.state.pointShadowMatrix),k.numLightProbeGrids=Io(w.state.lightProbeGridArray),k.currentProgram=$t,k.uniformsList=null,$t}function Gc(S,N,V,k,G){const ht=Ct.get(S),_t=ht.currentProgram.id+","+k+","+G;let lt=ht.programVariants.get(_t);return lt===void 0?(lt=Vn(S,N,V),ht.programVariants.set(_t,lt)):(ht.currentProgram=lt,ht.uniformsList=null,ht.outputColorSpace=k,ht.toneMapping=G),lt}function Do(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Qs.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function No(S,N){const V=Ct.get(S);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Vc(S,N,V,k,G){N.isScene!==!0&&(N=Ze),Ft.resetTextureUnits();const ht=N.fog,_t=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,lt=tt===null?R.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Yt.workingColorSpace,vt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,bt=A.get(k.envMap||_t,vt),kt=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,$t=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),St=!!V.morphAttributes.position,qt=!!V.morphAttributes.normal,ge=!!V.morphAttributes.color;let se=Ii;k.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(se=R.toneMapping);const ne=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Pe=ne!==void 0?ne.length:0,yt=Ct.get(k),Oe=w.state.lights;if(xe===!0&&(Ge===!0||S!==Q)){const de=S===Q&&k.id===X;K.setState(k,S,de)}let jt=!1,en=!1;k.version===yt.__version?yt.needsLights&&yt.lightsStateVersion!==Oe.state.version||G.isBatchedMesh&&yt.batching===!1||!G.isBatchedMesh&&yt.batching===!0||G.isBatchedMesh&&yt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&yt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&yt.instancing===!1||!G.isInstancedMesh&&yt.instancing===!0||G.isSkinnedMesh&&yt.skinning===!1||!G.isSkinnedMesh&&yt.skinning===!0||G.isInstancedMesh&&yt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&yt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&yt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&yt.instancingMorph===!1&&G.morphTexture!==null||yt.envMap!==bt||k.fog===!0&&yt.fog!==ht||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==K.numPlanes||yt.numIntersection!==K.numIntersection)||yt.vertexAlphas!==kt||yt.vertexTangents!==$t||yt.morphTargets!==St||yt.morphNormals!==qt||yt.morphColors!==ge||yt.morphTargetsCount!==Pe||yt.numLightProbeGrids!==Io(w.state.lightProbeGridArray)?jt=!0:(yt.outputColorSpace!==lt||yt.toneMapping!==se)&&(en=!0):(jt=!0,yt.__version=k.version);let Ie=yt.currentProgram;(jt===!0||en===!0)&&(Ie=en===!0?Gc(k,N,G,lt,se):Vn(k,N,G),U&&k.isNodeMaterial&&U.onUpdateProgram(k,Ie,yt));let gs=!1,Bi=!1,nn=!1;const Zt=Ie.getUniforms(),Re=yt.uniforms;if(dt.useProgram(Ie.program)&&(gs=!0,Bi=!0,nn=!0),k.id!==X&&(X=k.id,Bi=!0),gs||Q!==S){dt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Zt.setValue(F,"projectionMatrix",S.projectionMatrix),Zt.setValue(F,"viewMatrix",S.matrixWorldInverse);const Ee=Zt.map.cameraPosition;Ee!==void 0&&Ee.setValue(F,ui.setFromMatrixPosition(S.matrixWorld)),oe.logarithmicDepthBuffer&&Zt.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Zt.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),Q!==S&&(Q=S,Bi=!0,nn=!0)}if(yt.needsLights&&(Oe.state.sunShadowMap.length>0&&Zt.setValue(F,"sunShadowMap",Oe.state.sunShadowMap,Ft),Oe.state.directionalShadowMap.length>0&&Zt.setValue(F,"directionalShadowMap",Oe.state.directionalShadowMap,Ft),Oe.state.spotShadowMap.length>0&&Zt.setValue(F,"spotShadowMap",Oe.state.spotShadowMap,Ft),Oe.state.pointShadowMap.length>0&&Zt.setValue(F,"pointShadowMap",Oe.state.pointShadowMap,Ft)),G.isSkinnedMesh){Zt.setOptional(F,G,"bindMatrix"),Zt.setOptional(F,G,"bindMatrixInverse");const de=G.skeleton;de&&(de.boneTexture===null&&de.computeBoneTexture(),Zt.setValue(F,"boneTexture",de.boneTexture,Ft))}G.isBatchedMesh&&(Zt.setOptional(F,G,"batchingTexture"),Zt.setValue(F,"batchingTexture",G._matricesTexture,Ft),Zt.setOptional(F,G,"batchingIdTexture"),Zt.setValue(F,"batchingIdTexture",G._indirectTexture,Ft),Zt.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&Zt.setValue(F,"batchingColorTexture",G._colorsTexture,Ft));const ni=V.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&Z.update(G,V,Ie),(Bi||yt.receiveShadow!==G.receiveShadow)&&(yt.receiveShadow=G.receiveShadow,Zt.setValue(F,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(Re.envMapIntensity.value=N.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=s0()),Bi){if(Zt.setValue(F,"toneMappingExposure",R.toneMappingExposure),yt.needsLights&&Wc(Re,nn),ht&&k.fog===!0&&st.refreshFogUniforms(Re,ht),st.refreshMaterialUniforms(Re,k,ft,Tt,w.state.transmissionRenderTarget[S.id]),yt.needsLights&&yt.numLightProbeGrids>0){const de=y;let Ee=0;for(const Ei of w.state.lightProbeGridArray)Ei.texture!==null&&(de.textures[Ee]=Ei.texture,de.min[Ee]=Ei.boundingBox.min,de.max[Ee]=Ei.boundingBox.max,de.resolution[Ee]=Ei.resolution,Ee++);for(const Ei in de)de[Ei].length=Ee;Re.probesSH.value=de.textures,Re.probesMin.value=de.min,Re.probesMax.value=de.max,Re.probesResolution.value=de.resolution}Qs.upload(F,Do(yt),Re,Ft)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Qs.upload(F,Do(yt),Re,Ft),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Zt.setValue(F,"center",G.center),Zt.setValue(F,"modelViewMatrix",G.modelViewMatrix),Zt.setValue(F,"normalMatrix",G.normalMatrix),Zt.setValue(F,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){const de=k.uniformsGroups;for(let Ee=0,Ei=de.length;Ee<Ei;Ee++){const Fo=de[Ee];Et.update(Fo,Ie),Et.bind(Fo,Ie)}}return Ie}function Wc(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Xc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(S,N,V){const k=Ct.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Ct.get(S.texture).__webglTexture=N,Ct.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const V=Ct.get(S);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,V=0){tt=S,W=N,B=V;let k=null,G=!1,ht=!1;if(S){const lt=Ct.get(S);if(lt.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(F.FRAMEBUFFER,lt.__webglFramebuffer),j.copy(S.viewport),Mt.copy(S.scissor),Pt=S.scissorTest,dt.viewport(j),dt.scissor(Mt),dt.setScissorTest(Pt),X=-1;return}else if(lt.__webglFramebuffer===void 0)Ft.setupRenderTarget(S);else if(lt.__hasExternalTextures)Ft.rebindTextures(S,Ct.get(S.texture).__webglTexture,Ct.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const kt=S.depthTexture;if(lt.__boundDepthTexture!==kt){if(kt!==null&&Ct.has(kt)&&(S.width!==kt.image.width||S.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(S)}}const vt=S.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ht=!0);const bt=Ct.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(bt[N])?k=bt[N][V]:k=bt[N],G=!0):S.samples>0&&Ft.useMultisampledRTT(S)===!1?k=Ct.get(S).__webglMultisampledFramebuffer:Array.isArray(bt)?k=bt[V]:k=bt,j.copy(S.viewport),Mt.copy(S.scissor),Pt=S.scissorTest}else j.copy(wt).multiplyScalar(ft).floor(),Mt.copy(It).multiplyScalar(ft).floor(),Pt=zt;if(V!==0&&(k=O),dt.bindFramebuffer(F.FRAMEBUFFER,k)&&dt.drawBuffers(S,k),dt.viewport(j),dt.scissor(Mt),dt.setScissorTest(Pt),G){const lt=Ct.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,lt.__webglTexture,V)}else if(ht){const lt=N;for(let vt=0;vt<S.textures.length;vt++){const bt=Ct.get(S.textures[vt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+vt,bt.__webglTexture,V,lt)}}else if(S!==null&&V!==0){const lt=Ct.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,lt.__webglTexture,V)}X=-1};function Uo(S){const N=Ct.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=oe.textureFormatReadable(S.format),N.__typeReadable=oe.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,V,k,G,ht,_t,lt=0){if(!(S&&S.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Ct.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(vt=vt[_t],Array.isArray(vt)&&(vt=vt[0])),vt){dt.bindFramebuffer(F.FRAMEBUFFER,vt);try{const bt=S.textures[lt],kt=bt.format,$t=bt.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+lt);const St=Uo(bt);if(St.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-k&&V>=0&&V<=S.height-G&&F.readPixels(N,V,k,G,nt.convert(kt),nt.convert($t),ht)}finally{const bt=tt!==null?Ct.get(tt).__webglFramebuffer:null;dt.bindFramebuffer(F.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(S,N,V,k,G,ht,_t,lt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Ct.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(vt=vt[_t],Array.isArray(vt)&&(vt=vt[0])),vt)if(N>=0&&N<=S.width-k&&V>=0&&V<=S.height-G){dt.bindFramebuffer(F.FRAMEBUFFER,vt);const bt=S.textures[lt],kt=bt.format,$t=bt.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+lt);const St=Uo(bt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,qt),F.bufferData(F.PIXEL_PACK_BUFFER,ht.byteLength,F.STREAM_READ),F.readPixels(N,V,k,G,nt.convert(kt),nt.convert($t),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const ge=tt!==null?Ct.get(tt).__webglFramebuffer:null;dt.bindFramebuffer(F.FRAMEBUFFER,ge);const se=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await wh(F,se,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,qt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ht),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(qt),F.deleteSync(se),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,V=0){const k=Math.pow(2,-V),G=Math.floor(S.image.width*k),ht=Math.floor(S.image.height*k),_t=N!==null?N.x:0,lt=N!==null?N.y:0;Ft.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,_t,lt,G,ht),dt.unbindTexture()},this.copyTextureToTexture=function(S,N,V=null,k=null,G=0,ht=0){let _t,lt,vt,bt,kt,$t,St,qt,ge;const se=S.isCompressedTexture?S.mipmaps[ht]:S.image;if(V!==null)_t=V.max.x-V.min.x,lt=V.max.y-V.min.y,vt=V.isBox3?V.max.z-V.min.z:1,bt=V.min.x,kt=V.min.y,$t=V.isBox3?V.min.z:0;else{const Zt=Math.pow(2,-G);_t=Math.floor(se.width*Zt),lt=Math.floor(se.height*Zt),S.isDataArrayTexture?vt=se.depth:S.isData3DTexture?vt=Math.floor(se.depth*Zt):vt=1,bt=0,kt=0,$t=0}k!==null?(St=k.x,qt=k.y,ge=k.z):(St=0,qt=0,ge=0);const ne=nt.convert(N.format),Pe=nt.convert(N.type);let yt;N.isData3DTexture?(Ft.setTexture3D(N,0),yt=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ft.setTexture2DArray(N,0),yt=F.TEXTURE_2D_ARRAY):(Ft.setTexture2D(N,0),yt=F.TEXTURE_2D),dt.activeTexture(F.TEXTURE0),dt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),dt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),dt.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const Oe=dt.getParameter(F.UNPACK_ROW_LENGTH),jt=dt.getParameter(F.UNPACK_IMAGE_HEIGHT),en=dt.getParameter(F.UNPACK_SKIP_PIXELS),Ie=dt.getParameter(F.UNPACK_SKIP_ROWS),gs=dt.getParameter(F.UNPACK_SKIP_IMAGES);dt.pixelStorei(F.UNPACK_ROW_LENGTH,se.width),dt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,se.height),dt.pixelStorei(F.UNPACK_SKIP_PIXELS,bt),dt.pixelStorei(F.UNPACK_SKIP_ROWS,kt),dt.pixelStorei(F.UNPACK_SKIP_IMAGES,$t);const Bi=S.isDataArrayTexture||S.isData3DTexture,nn=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const Zt=Ct.get(S),Re=Ct.get(N),ni=Ct.get(Zt.__renderTarget),de=Ct.get(Re.__renderTarget);dt.bindFramebuffer(F.READ_FRAMEBUFFER,ni.__webglFramebuffer),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ee=0;Ee<vt;Ee++)Bi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.get(S).__webglTexture,G,$t+Ee),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.get(N).__webglTexture,ht,ge+Ee)),F.blitFramebuffer(bt,kt,bt+_t,kt+lt,St,qt,St+_t,qt+lt,F.DEPTH_BUFFER_BIT,F.NEAREST);dt.bindFramebuffer(F.READ_FRAMEBUFFER,null),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||Ct.has(S)){const Zt=Ct.get(S),Re=Ct.get(N);dt.bindFramebuffer(F.READ_FRAMEBUFFER,L),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let ni=0;ni<vt;ni++)Bi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Zt.__webglTexture,G,$t+ni):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Zt.__webglTexture,G),nn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.__webglTexture,ht,ge+ni):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Re.__webglTexture,ht),G!==0?F.blitFramebuffer(bt,kt,bt+_t,kt+lt,St,qt,St+_t,qt+lt,F.COLOR_BUFFER_BIT,F.NEAREST):nn?F.copyTexSubImage3D(yt,ht,St,qt,ge+ni,bt,kt,_t,lt):F.copyTexSubImage2D(yt,ht,St,qt,bt,kt,_t,lt);dt.bindFramebuffer(F.READ_FRAMEBUFFER,null),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else nn?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(yt,ht,St,qt,ge,_t,lt,vt,ne,Pe,se.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(yt,ht,St,qt,ge,_t,lt,vt,ne,se.data):F.texSubImage3D(yt,ht,St,qt,ge,_t,lt,vt,ne,Pe,se):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ht,St,qt,_t,lt,ne,Pe,se.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ht,St,qt,se.width,se.height,ne,se.data):F.texSubImage2D(F.TEXTURE_2D,ht,St,qt,_t,lt,ne,Pe,se);dt.pixelStorei(F.UNPACK_ROW_LENGTH,Oe),dt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,jt),dt.pixelStorei(F.UNPACK_SKIP_PIXELS,en),dt.pixelStorei(F.UNPACK_SKIP_ROWS,Ie),dt.pixelStorei(F.UNPACK_SKIP_IMAGES,gs),ht===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&F.generateMipmap(yt),dt.unbindTexture()},this.initRenderTarget=function(S){Ct.get(S).__webglFramebuffer===void 0&&Ft.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ft.setTextureCube(S,0):S.isData3DTexture?Ft.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ft.setTexture2DArray(S,0):Ft.setTexture2D(S,0),dt.unbindTexture()},this.resetState=function(){W=0,B=0,tt=null,dt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}const ua={common:{label:"STANDART",color:"#9aa7b8"},rare:{label:"NADİR",color:"#3ea6ff"},epic:{label:"EPİK",color:"#b06bff"},legendary:{label:"EFSANE",color:"#ffb02e"}},Ce={ar:{id:"ar",name:"AR-9 VANGUARD",cls:"SALDIRI TÜFEĞİ",slot:"primary",damage:23,rpm:620,mag:30,reserve:150,reload:2.05,falloff:[24,48,.62],head:1.65,hipSpread:1.35,adsSpread:.16,moveSpread:.9,recoil:.95,recoilYaw:.32,adsTime:.2,pellets:1,auto:!0,move:1,adsMove:.62,color:3949648,accent:5890246,desc:"Her mesafede güvenilir. Orta menzilin standart referansı; öğrenmesi kolay, tavana yakın.",role:"DENGE"},smg:{id:"smg",name:"VX-4 SPECTER",cls:"HAFİF MAKİNELİ",slot:"primary",damage:16,rpm:880,mag:35,reserve:175,reload:1.62,falloff:[12,28,.5],head:1.5,hipSpread:1.05,adsSpread:.34,moveSpread:.55,recoil:.62,recoilYaw:.28,adsTime:.16,pellets:1,auto:!0,move:1.07,adsMove:.72,color:3093824,accent:16747325,desc:"Yakın mesafede keskin, uzakta cezalandırır. Hareket hızı yüksek; kontrol senin elinde.",role:"YAKIN"},shotgun:{id:"shotgun",name:"BR-12 BREAKER",cls:"POMPALI",slot:"primary",damage:10,rpm:68,mag:6,reserve:48,reload:2.65,falloff:[7,22,.15],head:1.3,hipSpread:4.6,adsSpread:3.3,moveSpread:1.4,recoil:3.2,recoilYaw:1.2,adsTime:.26,pellets:10,auto:!1,move:.98,adsMove:.6,color:3812904,accent:15316060,desc:"Tek isabetle 100 hasar. 7 metreden sonra hızla düşer; köşe tutan oyuncunun silahı.",role:"YAKIN"},sniper:{id:"sniper",name:"AX-50 LONGSHOT",cls:"KESKİN NİŞANCI",slot:"primary",damage:92,rpm:44,mag:5,reserve:35,reload:3.05,falloff:[65,130,.9],head:2,hipSpread:5.6,adsSpread:.025,moveSpread:2.4,recoil:5.8,recoilYaw:.9,adsTime:.34,pellets:1,auto:!1,move:.9,adsMove:.42,color:3160122,accent:7529727,desc:"Kafada tek atış. Gövdede iki atış. Yavaş hareket ve uzun reload ile dengelenir.",role:"UZAK"},lmg:{id:"lmg",name:"MK-7 BULWARK",cls:"MAKİNELİ TÜFEK",slot:"primary",damage:25,rpm:520,mag:75,reserve:225,reload:4.6,falloff:[26,58,.65],head:1.55,hipSpread:2.25,adsSpread:.3,moveSpread:1.6,recoil:1.55,recoilYaw:.45,adsTime:.32,pellets:1,auto:!0,move:.86,adsMove:.45,color:4014650,accent:16762967,desc:"75 mermi, sürekli baskı. Ağır hareket ve uzun reload ile dengelenmiş alan kontrolü.",role:"BASKI"},dmr:{id:"dmr",name:"DMR-14 WARDEN",cls:"YARI OTOMATİK",slot:"primary",damage:44,rpm:230,mag:12,reserve:84,reload:2.35,falloff:[42,88,.8],head:1.8,hipSpread:2.4,adsSpread:.07,moveSpread:1.5,recoil:2.35,recoilYaw:.55,adsTime:.26,pellets:1,auto:!1,move:.96,adsMove:.55,color:3555914,accent:10485704,desc:"Üç isabet, iki kafa. Hassas oyuncular için ödüllendirici; yakın dövüşte affetmez.",role:"HASSAS"},pistol:{id:"pistol",name:"P-19 SIDEWINDER",cls:"TABANCA",slot:"secondary",damage:26,rpm:420,mag:12,reserve:72,reload:1.5,falloff:[15,34,.55],head:1.7,hipSpread:1.5,adsSpread:.3,moveSpread:.7,recoil:1.1,recoilYaw:.3,adsTime:.14,pellets:1,auto:!1,move:1.06,adsMove:.75,color:3027513,accent:14279402,desc:"Yedek plan. Hızlı çekilir, dört isabetle öldürür; birincil silahın yanında dürüst bir seçenek.",role:"YEDEK"}},cs=["ar","smg","shotgun","sniper","lmg","dmr","pistol"];cs.filter(s=>Ce[s].slot==="primary");const js=[{id:"ar_sand",weapon:"ar",name:"KUM KAMUFLJI",rarity:"common",price:300,pattern:"camo",colors:{base:"#8a7a58",accent:"#c7b48c",metal:"#3a3832",emissive:"#000000"},finish:{rough:.72,metal:.15}},{id:"ar_neon",weapon:"ar",name:"NEON BASKIN",rarity:"epic",price:1250,pattern:"circuit",colors:{base:"#1b2230",accent:"#27f2d0",metal:"#4b5a6d",emissive:"#27f2d0"},finish:{rough:.34,metal:.65}},{id:"ar_gold",weapon:"ar",name:"ALTIN STANDART",rarity:"legendary",price:2400,pattern:"solid",colors:{base:"#c89b3c",accent:"#ffe9a3",metal:"#f5d27a",emissive:"#000000"},finish:{rough:.2,metal:.95}},{id:"smg_arctic",weapon:"smg",name:"ARKTİK NABIZ",rarity:"rare",price:650,pattern:"solid",colors:{base:"#d7e8ef",accent:"#5bc8ff",metal:"#8ba3b0",emissive:"#5bc8ff"},finish:{rough:.38,metal:.55}},{id:"smg_hex",weapon:"smg",name:"MOR DALGA",rarity:"epic",price:1250,pattern:"hex",colors:{base:"#2c1d42",accent:"#b06bff",metal:"#5c4a78",emissive:"#b06bff"},finish:{rough:.4,metal:.6}},{id:"smg_ember",weapon:"smg",name:"KIVILCIM",rarity:"legendary",price:2400,pattern:"ember",colors:{base:"#241713",accent:"#ff6a2a",metal:"#6d4a3a",emissive:"#ff8a3d"},finish:{rough:.42,metal:.72}},{id:"sg_rust",weapon:"shotgun",name:"PASLI ÇELİK",rarity:"common",price:300,pattern:"carbon",colors:{base:"#6b4b38",accent:"#b98756",metal:"#4b4038",emissive:"#000000"},finish:{rough:.78,metal:.4}},{id:"sg_emerald",weapon:"shotgun",name:"ZÜMRÜT KIRILMA",rarity:"rare",price:650,pattern:"hex",colors:{base:"#12302a",accent:"#3ddc97",metal:"#315a4b",emissive:"#3ddc97"},finish:{rough:.32,metal:.7}},{id:"sg_inferno",weapon:"shotgun",name:"CEHENNEM",rarity:"epic",price:1250,pattern:"ember",colors:{base:"#2b1210",accent:"#ff4a2a",metal:"#5c2b22",emissive:"#ff5c2a"},finish:{rough:.46,metal:.65}},{id:"sn_now",weapon:"sniper",name:"KAR PERDESİ",rarity:"rare",price:650,pattern:"camo",colors:{base:"#dfe9ed",accent:"#9fb6c2",metal:"#6d7c84",emissive:"#000000"},finish:{rough:.6,metal:.3}},{id:"sn_cobalt",weapon:"sniper",name:"KOBALT",rarity:"epic",price:1250,pattern:"circuit",colors:{base:"#101b33",accent:"#3e7dff",metal:"#45536d",emissive:"#3e7dff"},finish:{rough:.3,metal:.8}},{id:"sn_mamba",weapon:"sniper",name:"KARA MAMBA",rarity:"legendary",price:2400,pattern:"camo",colors:{base:"#11150f",accent:"#80ff5c",metal:"#303a2c",emissive:"#80ff5c"},finish:{rough:.28,metal:.85}},{id:"lmg_industrial",weapon:"lmg",name:"SANAYİ",rarity:"common",price:300,pattern:"carbon",colors:{base:"#3c4148",accent:"#ffb84d",metal:"#696f78",emissive:"#000000"},finish:{rough:.66,metal:.55}},{id:"lmg_volcano",weapon:"lmg",name:"VOLKAN",rarity:"epic",price:1250,pattern:"ember",colors:{base:"#22191a",accent:"#ff5d2e",metal:"#4f3b38",emissive:"#ff5d2e"},finish:{rough:.48,metal:.7}},{id:"dmr_wolf",weapon:"dmr",name:"ÇÖL KURDU",rarity:"rare",price:650,pattern:"camo",colors:{base:"#9d8456",accent:"#e0c18a",metal:"#4d483c",emissive:"#000000"},finish:{rough:.7,metal:.25}},{id:"dmr_wave",weapon:"dmr",name:"SİBER DALGA",rarity:"epic",price:1250,pattern:"circuit",colors:{base:"#12262b",accent:"#26e6c2",metal:"#3e5b5e",emissive:"#26e6c2"},finish:{rough:.33,metal:.72}},{id:"p_chrome",weapon:"pistol",name:"KROM",rarity:"rare",price:650,pattern:"solid",colors:{base:"#c9d3d8",accent:"#ffffff",metal:"#e8eef2",emissive:"#000000"},finish:{rough:.16,metal:.98}},{id:"p_midnight",weapon:"pistol",name:"GECE YARISI",rarity:"epic",price:1250,pattern:"hex",colors:{base:"#131827",accent:"#6a8cff",metal:"#363f59",emissive:"#6a8cff"},finish:{rough:.35,metal:.7}}],is=Object.fromEntries(js.map(s=>[s.id,s])),cn=[{id:"vanguard",name:"KARTAL",title:"HÜCUM PİYADESİ",callsign:"VANGUARD",bio:"Ön safta açılan koridorun sahibi. Hücum yeteneğiyle kısa süreli hız ve hızlı şarjör değişimi kazanır.",ability:{name:"HÜCUM",key:"Q",desc:"+30% hareket hızı ve +25% reload hızı · 4 sn",cooldown:24,duration:4,type:"rush"},stats:{health:105,speed:1.02,ads:1,reload:1},perk:"Sağlam Duruş: +5 can",colors:{suit:"#243d48",accent:"#37e0c8",visor:"#7dfff0",skin:"#8d654e"},tags:["HIZ","SALDIRI"]},{id:"specter",name:"HAYALET",title:"KEŞİF UZMANI",callsign:"SPECTER",bio:"Sessiz ayaklar, keskin gözler. Nabız taraması düşmanları kısa süreliğine duvar arkasında bile işaretler.",ability:{name:"NABIZ",key:"Q",desc:"Düşmanları 4 sn duvar arkasından işaretle · 28 sn",cooldown:28,duration:4,type:"scan"},stats:{health:100,speed:1.04,ads:1.15,reload:1},perk:"Nişan Ustalığı: +15% ADS hızı",colors:{suit:"#2a2440",accent:"#b06bff",visor:"#63f5ff",skin:"#a26f53"},tags:["KEŞİF","ÇEVİKLİK"]},{id:"bastion",name:"KALE",title:"DESTEK ZIRHLISI",callsign:"BASTION",bio:"Takımın kalkanı. Ağır zırhı ve siper yeteneğiyle ön safta alan açar, ama yavaş hareket eder.",ability:{name:"SİPER",key:"Q",desc:"5 sn boyunca 55 geçici kalkan · 32 sn",cooldown:32,duration:5,type:"shield"},stats:{health:125,speed:.92,ads:.92,reload:.95},perk:"Ağır Zırh: +25 can",colors:{suit:"#3a3528",accent:"#ffc857",visor:"#ffd98a",skin:"#7a5842"},tags:["DAYANIKLILIK","DESTEK"]},{id:"wraith",name:"KIVILCIM",title:"GÖLGE AVCI",callsign:"WRAITH",bio:"Hız ve sürpriz. Sis perdesi düşman nişanını bozar; ince zırhı ise hata affetmez.",ability:{name:"SİS PERDESİ",key:"Q",desc:"4 sn boyunca düşman isabeti -35% · 26 sn",cooldown:26,duration:4,type:"smoke"},stats:{health:95,speed:1.08,ads:1,reload:1.1},perk:"Hafif Ekipman: +8% hız, +10% reload",colors:{suit:"#2b1d2a",accent:"#ff4f8b",visor:"#ff8fb8",skin:"#b17a5e"},tags:["HIZ","SESSİZLİK"]}],Pi=Object.fromEntries(cn.map(s=>[s.id,s])),In=[{id:"harbor",name:"SANCAK LİMANI",code:"LIMAN",region:"İSTANBUL",time:"ALACAKARANLIK",kind:"harbor",desc:"Paslı konteynerler ve vinç gölgeleri. Orta mesafe çatışmaları için simetrik liman.",tags:["ORTA MENZİL","KONTEYNER"],size:"ORTA",palette:{sky:"#1b3346",fog:"#284455",ground:"#373c3c",accent:"#ff9a4d",sun:"#ffc38a",ambient:"#5d7f96",css:["#132733","#ef7f3c"]},botCap:10},{id:"bazaar",name:"NEON ÇARŞI",code:"ÇARŞI",region:"İZMİR",time:"GECE",kind:"bazaar",desc:"Dar sokaklar, neon tabelalar ve tenteli tezgâhlar. Yakın menzilde refleks savaşı.",tags:["YAKIN MENZİL","NEON"],size:"KÜÇÜK",palette:{sky:"#120d24",fog:"#1d1434",ground:"#25202e",accent:"#ff3d9a",sun:"#8a70ff",ambient:"#44326b",css:["#160f2b","#ff3d9a"]},botCap:10},{id:"dunes",name:"KUM FIRTINASI",code:"ÇÖL",region:"KONYA",time:"ÖĞLE",kind:"dunes",desc:"Kavurucu güneş altında kum taşı siperleri. Uzun koridorlar keskin nişancıya yarar.",tags:["UZUN MENZİL","AÇIK ALAN"],size:"BÜYÜK",palette:{sky:"#d7b27a",fog:"#c9a56e",ground:"#b5905a",accent:"#7cc7ff",sun:"#fff0c8",ambient:"#e8cba0",css:["#b68e58","#7cc7ff"]},botCap:10},{id:"frost",name:"BUZ KALESİ",code:"KALE",region:"KARS",time:"ŞAFAK",kind:"frost",desc:"Kar altında kalmış taş avlu. Kalın duvarlar ve dar geçitler taktik disiplin ister.",tags:["KAPALI","ORTA MENZİL"],size:"ORTA",palette:{sky:"#9fb6c8",fog:"#b9cbd8",ground:"#dbe4e6",accent:"#64d8ff",sun:"#eaf6ff",ambient:"#b7c9d4",css:["#8ea7b8","#64d8ff"]},botCap:10},{id:"foundry",name:"DEMİR FABRİKA",code:"FABRİKA",region:"GEBZE",time:"GECE VARDİYASI",kind:"foundry",desc:"Boru hatları, erimiş metal parıltısı ve dar platformlar. Sürekli hareket gerekir.",tags:["ENDÜSTRİYEL","KAPALI"],size:"ORTA",palette:{sky:"#1a1714",fog:"#2a211b",ground:"#33302b",accent:"#ff7a2a",sun:"#ffad66",ambient:"#6a5846",css:["#17140f","#ff7a2a"]},botCap:10},{id:"jungle",name:"ORMAN KARAKOLU",code:"ORMAN",region:"RİZE",time:"SABAH",kind:"jungle",desc:"Nemli ormanın içinde terk edilmiş karakol. Görüş hattı kısa, pusu fırsatı bol.",tags:["YAKIN MENZİL","PUSU"],size:"ORTA",palette:{sky:"#6f8b6a",fog:"#7e9a76",ground:"#4d5c3a",accent:"#ffd166",sun:"#d8e8a8",ambient:"#91a97c",css:["#3f5230","#ffd166"]},botCap:10},{id:"orbital",name:"YÖRÜNGE İSTASYONU",code:"YÖRÜNGE",region:"LEO-7",time:"YÖRÜNGE GECESİ",kind:"orbital",desc:"Beyaz kompozit paneller ve cam koridorlar. Temiz çizgiler, soğuk ve ölümcül.",tags:["BİLİMKURGU","DENGE"],size:"ORTA",palette:{sky:"#050b18",fog:"#0b1830",ground:"#b8c4ce",accent:"#4dc5ff",sun:"#dbeeff",ambient:"#7a9cbd",css:["#050b18","#4dc5ff"]},botCap:10},{id:"metro",name:"TERK EDİLMİŞ METRO",code:"METRO",region:"ANKARA",time:"GECE",kind:"metro",desc:"Karanlık tüneller, sütunlar ve durmuş bir tren. Sesler yankılanır, sırtını kolla.",tags:["KAPALI","KARANLIK"],size:"KÜÇÜK",palette:{sky:"#0a0908",fog:"#15110d",ground:"#2b2824",accent:"#ffb44d",sun:"#ffca7a",ambient:"#4a4038",css:["#0a0908","#ffb44d"]},botCap:10},{id:"rooftop",name:"GÜN BATIMI ÇATILARI",code:"ÇATI",region:"İSTANBUL",time:"GÜN BATIMI",kind:"rooftop",desc:"Kızıl gökyüzü altında havalandırma üniteleri ve alçak duvarlar. Dikey dövüş.",tags:["ÇATI","HIZLI"],size:"ORTA",palette:{sky:"#4a1e3d",fog:"#7a3b4a",ground:"#4a4148",accent:"#ff6a5c",sun:"#ffb08a",ambient:"#a26a72",css:["#4a1e3d","#ff6a5c"]},botCap:10},{id:"volcano",name:"VOLKAN ÜSSÜ",code:"VOLKAN",region:"AĞRI",time:"GECE",kind:"volcano",desc:"Lav ışığıyla yarılan bazalt platformlar. Dar köprüler ve yüksek riskli açılar.",tags:["TEHLİKELİ","KAPALI"],size:"ORTA",palette:{sky:"#1a0d0c",fog:"#2a1210",ground:"#2e2724",accent:"#ff4a1f",sun:"#ff6a3a",ambient:"#6d3a2e",css:["#1a0d0c","#ff4a1f"]},botCap:10}],fa=Object.fromEntries(In.map(s=>[s.id,s])),kc=["ALPHA","BORAN","CENGİZ","DENİZ","EFE","FİRUZE","GÖKÇE","HAKAN","IRMAK","JANDARMA","KORAY","LEYLA","MERT","NAZ","ONUR","PUSU","RUZGAR","SERKAN","TAYFUN","UMAY","VOLKAN","YILDIZ","ZEYNEP","ATLAS","BARIŞ","CEYLAN","DOĞA","EMRE","FERİT","GÜNEŞ"];function a0(s){return(Math.ceil(100/s.damage)-1)*(60/s.rpm)}function r0(s,t){const[e,i,n]=s.falloff;if(t<=e)return s.damage;const a=Math.min(1,(t-e)/Math.max(1,i-e));return s.damage*(1+(n-1)*a)}const rr=new Map;function wa(s,t){return rr.has(s)||rr.set(s,t()),rr.get(s)}const Lt=(s,t,e,i)=>new Rt(wa(`b${s},${t},${e}`,()=>new Ke(s,t,e)),i),li=(s,t,e,i,n)=>new Rt(wa(`c${s},${t},${e},${i}`,()=>new Ji(s,t,e,i)),n),o0=(s,t,e)=>new Rt(wa(`s${s},${t}`,()=>new ls(s,t,Math.max(6,t/2))),e),Ol=(s,t,e)=>new Rt(wa(`p${s},${t}`,()=>new uo(s,t,4,8)),e),gi=(s,t={})=>new ci({color:s,roughness:t.rough??.62,metalness:t.metal??.25,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,flatShading:t.flat??!1,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??Ni});function or(s){const t=new gt(s);return[Math.round(t.r*255),Math.round(t.g*255),Math.round(t.b*255)]}function oi([s,t,e],i=1){return`rgba(${s},${t},${e},${i})`}function l0(s,t=256){if(!s||s.pattern==="solid")return null;const e=document.createElement("canvas");e.width=e.height=t;const i=e.getContext("2d"),n=or(s.colors.base),a=or(s.colors.accent),r=or(s.colors.metal);if(i.fillStyle=oi(n),i.fillRect(0,0,t,t),s.pattern==="camo")for(let l=0;l<46;l++){i.fillStyle=oi(l%3===0?a:l%3===1?r:n,l%3===1?.9:.65),i.beginPath();const u=Math.random()*t,f=Math.random()*t,d=18+Math.random()*45;i.ellipse(u,f,d,12+Math.random()*28,Math.random()*Math.PI,0,Math.PI*2),i.fill()}else if(s.pattern==="hex"){i.strokeStyle=oi(a,.8),i.lineWidth=2;const c=16;for(let l=-c;l<t+c;l+=c*1.5)for(let u=-c;u<t+c;u+=c*1.732){const f=Math.round(l/(c*1.5))%2*c*.866;i.beginPath();for(let d=0;d<6;d++){const h=Math.PI/3*d+Math.PI/6,p=u+f+Math.cos(h)*c,v=l+Math.sin(h)*c;d===0?i.moveTo(p,v):i.lineTo(p,v)}i.closePath(),i.stroke()}i.globalAlpha=.3,i.fillStyle=oi(a);for(let l=0;l<8;l++)i.fillRect(Math.random()*t,Math.random()*t,c*1.6,c*.34);i.globalAlpha=1}else if(s.pattern==="circuit"){i.strokeStyle=oi(a,.85),i.lineWidth=2.2;for(let c=0;c<12;c++){let l=Math.random()*t,u=Math.random()*t;i.beginPath(),i.moveTo(l,u);for(let f=0;f<4;f++)Math.random()>.5?l+=(Math.random()-.5)*90:u+=(Math.random()-.5)*90,i.lineTo(l,u);i.stroke(),i.fillStyle=oi(a),i.beginPath(),i.arc(l,u,4,0,Math.PI*2),i.fill()}i.globalAlpha=.25;for(let c=0;c<30;c++)i.fillRect(Math.random()*t,Math.random()*t,4,4);i.globalAlpha=1}else if(s.pattern==="carbon"){i.fillStyle="rgba(0,0,0,0.18)";for(let c=0;c<t;c+=8)for(let l=0;l<t;l+=8)(l+c)/8%2===0&&i.fillRect(l,c,8,8);i.strokeStyle=oi(a,.55),i.lineWidth=4,i.strokeRect(10,10,t-20,t-20)}else if(s.pattern==="ember"){const c=i.createLinearGradient(0,t,t,0);c.addColorStop(0,oi(n)),c.addColorStop(.65,oi(r)),c.addColorStop(1,oi(a,.9)),i.fillStyle=c,i.fillRect(0,0,t,t),i.strokeStyle=oi(a,.9),i.lineWidth=2;for(let l=0;l<10;l++){i.beginPath();let u=Math.random()*t,f=Math.random()*t;i.moveTo(u,f);for(let d=0;d<5;d++)u+=(Math.random()-.4)*45,f+=(Math.random()-.5)*35,i.lineTo(u,f);i.stroke()}}const o=new di(e);return o.colorSpace=le,o.wrapS=o.wrapT=Ui,o}function _o(s,t=null,e={}){const i=t,n=Jr[s]||Jr.ar||{color:3949648,accent:5890246},a=i?l0(i,256):null,r=i?new gt(i.colors.base):new gt(n.color),o=i?new gt(i.colors.accent):new gt(n.accent),c=i?new gt(i.colors.metal):new gt(n.color).multiplyScalar(1.3),l=i&&i.pattern!=="solid"?new gt(i.colors.emissive):new gt(0),u=i?.finish?.rough??.5,f=i?.finish?.metal??.5,d=new ci({color:r,roughness:u,metalness:f,map:a,emissive:l,emissiveIntensity:i?.pattern==="circuit"||i?.pattern==="ember"?.35:.08}),h=gi(o,{rough:.4,metal:.55,emissive:o,emissiveIntensity:.35}),p=gi(c,{rough:.32,metal:.92}),v=gi(1316635,{rough:.7,metal:.35}),g=gi(1908773,{rough:.86,metal:.05}),m=new ci({color:8254463,emissive:3593983,emissiveIntensity:1.5,roughness:.1,metalness:.2,transparent:!0,opacity:.85}),_=new Ue;_.name=`weapon-${s}`;const E=(I,U,O,L,z=0,W=0,B=0)=>(I.position.set(U,O,L),I.rotation.set(z,W,B),_.add(I),I),y=s==="sniper"?1.24:s==="lmg"?1.1:s==="smg"?.82:s==="shotgun"?1.06:s==="pistol"?.6:1,T=.34*y,w=.44*y;E(Lt(.075,.115,T,d),0,0,.02),E(Lt(.081,.035,T*.72,p),0,.07,.01),E(Lt(.062,.075,.28*y,d),0,.002,-.34*y),E(Lt(.07,.02,.24*y,h),0,-.035,-.34*y);for(let I=0;I<4;I++)E(Lt(.068,.012,.02,v),0,.045,-.25*y-I*.055*y);E(li(.017,.019,w,10,p),0,.012,-.47*y-w/2+.06,Math.PI/2),E(li(.028,.026,.075,12,v),0,.012,-.47*y-w+.08,Math.PI/2),(s==="sniper"||s==="lmg")&&E(li(.036,.034,.16,12,v),0,.012,-.47*y-w+0,Math.PI/2),E(Lt(.06,.1,.25*y,d),0,-.005,.3*y),E(Lt(.055,.13,.045,v),0,-.02,.43*y),E(Lt(.05,.15,.065,v),0,-.125,.14,-.28),E(Lt(.05,.02,.065,h),0,-.055,.14,-.28);const x=s==="lmg"?.24:s==="pistol"?.11:.17,b=s==="pistol"?.095:-.02;E(Lt(.048,x,.08,d),0,-.1-x/2,b,s==="lmg"?.05:.14),E(Lt(.052,.012,.084,h),0,-.1-x+.01,b,.14);const D=new Rt(new Ki(.035,.007,6,12,Math.PI*1.35),v);if(D.rotation.set(Math.PI/2,0,.3),E(D,0,-.08,.075),s!=="pistol")for(let I=0;I<5;I++)E(Lt(.05,.012,.018,v),0,.096,-.1+I*.045);s==="pistol"?(E(Lt(.02,.014,.018,h),0,.066,-.12),E(Lt(.018,.012,.016,v),0,.068,.13)):(E(Lt(.05,.028,.16,v),0,.104,-.005),E(li(.032,.032,.15,12,p),0,.14,-.005,Math.PI/2),E(li(.035,.035,.022,12,v),0,.14,-.085,Math.PI/2),E(li(.028,.028,.006,12,m),0,.14,-.099,Math.PI/2),E(li(.033,.033,.018,12,v),0,.14,.075,Math.PI/2),s==="sniper"&&(E(li(.043,.043,.26,12,p),0,.15,-.02,Math.PI/2),E(li(.046,.046,.03,12,v),0,.15,-.16,Math.PI/2),E(li(.038,.038,.007,12,m),0,.15,-.178,Math.PI/2))),(s==="ar"||s==="smg"||s==="lmg")&&(E(Lt(.02,.03,.13,v),.052,.02,-.24),E(Lt(.012,.012,.04,h),.052,.02,-.32)),s==="shotgun"&&(E(Lt(.04,.032,.2,v),0,-.055,-.29),E(Lt(.044,.012,.07,h),0,-.04,-.24)),s==="lmg"&&E(Lt(.045,.2,.055,v),0,-.16,.22,.1);const R=new pe;if(R.position.set(0,.012,-.47*y-w+.04),_.add(R),_.userData.muzzle=R,e.hands!==!1){const I=Ol(.038,.1,g);I.rotation.z=1.2,I.rotation.x=.2,E(I,.028,-.16,.2);const U=Ol(.036,.1,g);U.rotation.z=1.45,U.rotation.y=.2,E(U,-.035,-.055,-.35*y),E(Lt(.03,.02,.05,h),.05,-.12,.16,0,0,.4)}return _.userData.isWeaponModel=!0,_.userData.dispose=()=>{a?.dispose();const I=new Set;_.traverse(U=>{U.material&&I.add(U.material)}),I.forEach(U=>U.dispose())},_}const Jr={};function c0(s){Object.assign(Jr,s)}const h0=new gt(5096959),d0=new gt(16734797);function Mo(s,t="blue",e={}){const i=s,n=gi(i.colors.suit,{rough:.82,metal:.1}),a=gi(new gt(i.colors.suit).multiplyScalar(.55),{rough:.9,metal:.05}),r=gi(i.colors.accent,{rough:.45,metal:.4,emissive:i.colors.accent,emissiveIntensity:.25}),o=gi(i.colors.skin,{rough:.88,metal:.02}),c=new ci({color:i.colors.visor,emissive:i.colors.visor,emissiveIntensity:1.1,roughness:.15,metalness:.6}),l=t==="blue"?h0:d0,u=gi(l,{rough:.45,metal:.35,emissive:l,emissiveIntensity:.45}),f=gi(1382171,{rough:.75,metal:.2}),d=new Ue;d.name=`operator-${i.id}`;const h=new Ue;d.add(h);const p=i.id==="bastion",v=i.id==="wraith",g=p?1.08:v?.97:1;h.scale.setScalar(g);const m=new Ue,_=new Ue;m.position.set(-.13,.93,0),_.position.set(.13,.93,0);const E=Lt(.17,.8,.19,n);E.position.y=-.4;const y=Lt(.18,.17,.21,a);y.position.set(0,-.3,-.03);const T=Lt(.19,.14,.28,f);T.position.set(0,-.8,-.04),m.add(E.clone(),y.clone(),T.clone()),_.add(E.clone(),y.clone(),T.clone()),h.add(m,_);const w=Lt(.44,.24,.28,a);w.position.y=1,h.add(w);const x=Lt(.46,.07,.3,f);x.position.y=1.1,h.add(x);const b=Lt(.08,.05,.02,r);b.position.set(0,1.1,-.16),h.add(b);const D=Lt(.47,.52,.28,n);D.position.y=1.38,h.add(D);const R=Lt(.42,.34,.1,a);R.position.set(0,1.42,-.19),h.add(R);const I=Lt(.1,.24,.02,u);I.position.set(-.14,1.4,-.25),h.add(I);const U=Lt(.06,.02,.02,r);U.position.set(.12,1.47,-.25),h.add(U);const O=Lt(.34,.38,.18,a);O.position.set(0,1.39,.22),h.add(O);const L=Lt(.28,.06,.16,f);L.position.set(0,1.6,.22),h.add(L);const z=Lt(.2,.2,.26,p?a:n);z.position.set(-.32,1.5,0),z.rotation.z=.12;const W=z.clone();if(W.position.x=.32,W.rotation.z=-.12,h.add(z,W),p){const It=Lt(.21,.1,.3,r);It.position.set(-.33,1.61,0),It.rotation.z=.14;const zt=It.clone();zt.position.x=.33,zt.rotation.z=-.14,h.add(It,zt)}const B=new Ue,tt=new Ue;B.position.set(-.32,1.48,0),tt.position.set(.32,1.48,0);const X=Lt(.15,.36,.16,n);X.position.set(-.01,-.16,-.04),X.rotation.x=-.7;const Q=Lt(.13,.34,.14,a);Q.position.set(-.06,-.36,-.26),Q.rotation.x=-1;const j=X.clone();j.position.set(.01,-.16,-.04);const Mt=Q.clone();Mt.position.set(.09,-.36,-.24);const Pt=Lt(.12,.1,.14,f);Pt.position.set(-.06,-.5,-.4);const Y=Lt(.12,.1,.14,f);Y.position.set(.1,-.5,-.38),B.add(X,Q,Pt),tt.add(j,Mt,Y),h.add(B,tt);const ut=Lt(.16,.1,.16,o);ut.position.y=1.68,h.add(ut);const xt=Lt(.27,.29,.27,o);xt.position.y=1.84,h.add(xt);const Tt=Lt(.28,.09,.24,f);if(Tt.position.set(0,1.73,-.02),h.add(Tt),i.id==="specter"){const It=new Rt(new hn(.3,.4,6,1,!0),a);It.position.set(0,1.94,.02),h.add(It);const zt=Lt(.24,.13,.05,f);zt.position.set(0,1.8,-.15),h.add(zt)}else if(i.id==="bastion"){const It=Lt(.36,.22,.36,a);It.position.y=1.97,h.add(It);const zt=Lt(.4,.05,.38,r);zt.position.y=1.9,h.add(zt)}else if(i.id==="wraith"){const It=Lt(.34,.13,.06,r);It.position.set(0,1.73,-.14),It.rotation.z=.08,h.add(It);const zt=Lt(.32,.14,.32,a);zt.position.y=1.98,h.add(zt)}else{const It=Lt(.31,.18,.32,a);It.position.set(0,1.98,.01),h.add(It);const zt=li(.008,.008,.22,5,f);zt.position.set(.14,2.12,.06),h.add(zt);const Wt=o0(.018,6,u);Wt.position.set(.14,2.24,.06),h.add(Wt)}const ft=Lt(.23,.075,.025,c);ft.position.set(0,1.86,-.142),h.add(ft);const Ut=Lt(.155,.06,.17,u);Ut.position.set(-.33,1.42,0),h.add(Ut);const ce=Lt(.08,.16,.08,f);ce.position.set(.25,1.01,.05),h.add(ce);const wt=_o("ar",null,{hands:!1});return wt.scale.setScalar(.82),wt.position.set(.1,1.17,-.46),wt.rotation.set(0,0,0),h.add(wt),d.userData.parts={leftLeg:m,rightLeg:_,armL:B,armR:tt,body:h,head:xt,gun:wt},d.userData.team=t,d.userData.character=i.id,d.userData.phase=Math.random()*Math.PI*2,d}function pa(s,t,e=0,i=!1){const n=s.userData.parts;if(!n)return;if(i){s.rotation.z+=(Math.PI/2-s.rotation.z)*.12,s.position.y+=(.25-s.position.y)*.12;return}const a=Math.min(1,e/4.5);n.phase=(s.userData.phase+=.001)%1;const r=Math.sin(t*9+s.userData.phase*10)*.55*a;n.leftLeg.rotation.x=r,n.rightLeg.rotation.x=-r,n.armL.rotation.x=-r*.18,n.armR.rotation.x=r*.18,n.body.position.y=Math.abs(Math.sin(t*9))*.025*a,n.body.rotation.z=Math.sin(t*4.5)*.012*a}function u0(s,t="#7ddf8f",e=!0){const i=document.createElement("canvas");i.width=256,i.height=64;const n=i.getContext("2d");n.clearRect(0,0,256,64),n.font="600 26px Rajdhani, sans-serif",n.textAlign="center",n.fillStyle="rgba(5,8,12,0.66)",n.fillRect(20,10,216,40),n.fillStyle=t,n.fillText(s,128,39),e&&(n.fillStyle=t,n.fillRect(20,50,216,3));const a=new di(i);a.colorSpace=le;const r=new fs({map:a,transparent:!0,depthWrite:!1,depthTest:!1}),o=new Ma(r);return o.scale.set(1.9,.48,1),o.position.y=2.35,o.renderOrder=5,o}const So="iron-protocol-profile-v1",ln={version:1,callsign:"OPERATÖR-07",credits:2400,xp:0,level:1,character:"vanguard",primary:"ar",secondary:"pistol",ownedSkins:["ar_sand"],equipped:{ar:"ar_sand"},stats:{kills:0,deaths:0,wins:0,matches:0,bestStreak:0,damage:0},settings:{sensitivity:1,sound:!0,quality:"high",fov:78}};function ta(s){return JSON.parse(JSON.stringify(s))}function f0(){try{const s=localStorage.getItem(So);if(!s)return ta(ln);const t=JSON.parse(s),e={...ta(ln),...t};return e.settings={...ln.settings,...t.settings||{}},e.stats={...ln.stats,...t.stats||{}},e.equipped={...ln.equipped,...t.equipped||{}},e.ownedSkins=Array.isArray(t.ownedSkins)?t.ownedSkins:[],e.credits=Number.isFinite(e.credits)?e.credits:2400,e}catch{return ta(ln)}}function vi(s){try{localStorage.setItem(So,JSON.stringify(s))}catch{}}function p0(){try{localStorage.removeItem(So)}catch{}return ta(ln)}function ma(s){return 700+(s-1)*320}function m0(s,t){s.xp+=Math.max(0,Math.round(t));let e=0;for(;s.xp>=ma(s.level);)s.xp-=ma(s.level),s.level+=1,e+=1;return e}function Bl(s){return s>=40?"EFSANE":s>=30?"ELMAS":s>=22?"PLATİN":s>=15?"ALTIN":s>=9?"GÜMÜŞ":s>=4?"BRONZ":"ÇIRAK"}function g0(s,t){return t?s.ownedSkins.includes(t.id)?{ok:!1,reason:"Bu skin zaten envanterinde."}:s.credits<t.price?{ok:!1,reason:"Yetersiz kredi. Maç kazanarak kredi kazan."}:(s.credits-=t.price,s.ownedSkins.push(t.id),vi(s),{ok:!0}):{ok:!1,reason:"Skin bulunamadı."}}function kl(s,t){return t?s.ownedSkins.includes(t.id)?(s.equipped[t.weapon]=t.id,vi(s),{ok:!0}):{ok:!1,reason:"Önce bu skini satın al."}:{ok:!1,reason:"Skin bulunamadı."}}class v0{constructor(t){this.canvas=t,this.keys=new Set,this.pressed=new Set,this.mouse={dx:0,dy:0,left:!1,right:!1},this.locked=!1,this.sensitivity=1,this.touch=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,this.touchState={moveX:0,moveY:0,fire:!1,ads:!1},this.enabled=!1,this.wantLock=!1,this.lockListeners=[],this._bind()}_bind(){window.addEventListener("keydown",t=>{this.enabled&&(["Space","Tab","ShiftLeft","ControlLeft","KeyW","KeyA","KeyS","KeyD"].includes(t.code)&&t.preventDefault(),t.repeat||this.pressed.add(t.code),this.keys.add(t.code))}),window.addEventListener("keyup",t=>{this.keys.delete(t.code)}),window.addEventListener("blur",()=>{this.keys.clear(),this.mouse.left=!1,this.mouse.right=!1}),this.canvas.addEventListener("mousedown",t=>{!this.enabled||this.touch||(t.button===0&&(this.mouse.left=!0),t.button===2&&(this.mouse.right=!0))}),window.addEventListener("mouseup",t=>{t.button===0&&(this.mouse.left=!1),t.button===2&&(this.mouse.right=!1)}),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("mousemove",t=>{!this.locked||!this.enabled||(this.mouse.dx+=t.movementX||0,this.mouse.dy+=t.movementY||0)}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.lockListeners.forEach(t=>t(this.locked))}),this._bindTouch()}onLock(t){this.lockListeners.push(t)}setEnabled(t){this.enabled=t,t||(this.keys.clear(),this.pressed.clear(),this.mouse.left=!1,this.mouse.right=!1,this.touchState.fire=!1,this.touchState.ads=!1,this.touchState.moveX=0,this.touchState.moveY=0)}requestLock(){if(!this.touch&&(this.wantLock=!0,document.pointerLockElement!==this.canvas)){const t=this.canvas.requestPointerLock?.();t&&t.catch&&t.catch(()=>{})}}exitLock(){document.pointerLockElement&&document.exitPointerLock(),this.wantLock=!1}consume(t){return this.pressed.has(t)?(this.pressed.delete(t),!0):!1}endFrame(){this.mouse.dx=0,this.mouse.dy=0,this.pressed.clear()}get firing(){return this.mouse.left||this.touchState.fire}get aiming(){return this.mouse.right||this.touchState.ads}_bindTouch(){const t=document.getElementById("stick-zone"),e=document.getElementById("stick-base"),i=document.getElementById("stick-knob"),n=document.getElementById("touch-controls");if(!t||!e||!i)return;this.touch&&document.body.classList.add("touch-mode");let a=null;const r={x:0,y:0},o=52,c=(h,p)=>{const v=Math.hypot(h,p),g=Math.min(1,v/o),m=v?h/v*g:0,_=v?p/v*g:0;this.touchState.moveX=m,this.touchState.moveY=-_,i.style.transform=`translate(${m*o}px, ${_*o}px)`};t.addEventListener("pointerdown",h=>{h.pointerId!==void 0&&(a=h.pointerId),t.setPointerCapture?.(h.pointerId);const p=t.getBoundingClientRect();r.x=p.left+p.width/2,r.y=p.top+p.height/2,c(h.clientX-r.x,h.clientY-r.y),e.classList.add("active"),h.preventDefault()}),t.addEventListener("pointermove",h=>{a===null||h.pointerId!==a||(c(h.clientX-r.x,h.clientY-r.y),h.preventDefault())});const l=h=>{a!==null&&h.pointerId!==a||(a=null,this.touchState.moveX=0,this.touchState.moveY=0,i.style.transform="translate(0px, 0px)",e.classList.remove("active"))};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l),n.querySelectorAll("[data-touch]").forEach(h=>{const p=h.dataset.touch;if(p==="fire"||p==="ads"){const v=m=>{m.preventDefault(),m.stopPropagation(),h.classList.add("pressed"),p==="fire"?this.touchState.fire=!0:this.touchState.ads=!this.touchState.ads,p==="ads"&&h.classList.toggle("toggled",this.touchState.ads)},g=m=>{m.preventDefault(),p==="fire"&&(this.touchState.fire=!1,h.classList.remove("pressed"))};h.addEventListener("pointerdown",v),h.addEventListener("pointerup",g),h.addEventListener("pointercancel",g),h.addEventListener("pointerleave",g)}else h.addEventListener("pointerdown",v=>{v.preventDefault(),v.stopPropagation();const g={reload:"KeyR",ability:"KeyQ",jump:"Space",swap:"KeyF"};this.pressed.add(g[p]||"KeyR"),h.classList.add("pressed"),setTimeout(()=>h.classList.remove("pressed"),120)})});let u=null,f={x:0,y:0};this.canvas.addEventListener("pointerdown",h=>{!this.touch||!this.enabled||(u=h.pointerId,f={x:h.clientX,y:h.clientY},this.canvas.setPointerCapture?.(h.pointerId))}),this.canvas.addEventListener("pointermove",h=>{u===h.pointerId&&(this.mouse.dx+=(h.clientX-f.x)*1.4,this.mouse.dy+=(h.clientY-f.y)*1.4,f={x:h.clientX,y:h.clientY})});const d=h=>{u===h.pointerId&&(u=null)};this.canvas.addEventListener("pointerup",d),this.canvas.addEventListener("pointercancel",d)}}class x0{constructor(){this.ctx=null,this.master=null,this.enabled=!0,this.ambient=null,this.noise=null}ensure(){if(this.ctx)return this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx;const t=window.AudioContext||window.webkitAudioContext;if(!t)return null;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?.7:0;const e=this.ctx.createDynamicsCompressor();return e.threshold.value=-18,e.ratio.value=6,this.master.connect(e).connect(this.ctx.destination),this.noise=this.makeNoise(),this.ctx}setEnabled(t){this.enabled=t,this.master&&(this.master.gain.value=t?.7:0),t&&this.ensure()}makeNoise(){const t=this.ctx,e=t.createBuffer(1,t.sampleRate*1.2,t.sampleRate),i=e.getChannelData(0);for(let n=0;n<i.length;n++)i[n]=Math.random()*2-1;return e}noiseBurst({t=.12,gain:e=.5,filter:i=1800,q:n=1,type:a="lowpass",pan:r=0}){const o=this.ensure();if(!o)return;const c=o.currentTime,l=o.createBufferSource();l.buffer=this.noise,l.playbackRate.value=.8+Math.random()*.4;const u=o.createBiquadFilter();u.type=a,u.frequency.setValueAtTime(i,c),u.frequency.exponentialRampToValueAtTime(Math.max(80,i*.25),c+t),u.Q.value=n;const f=o.createGain();f.gain.setValueAtTime(e,c),f.gain.exponentialRampToValueAtTime(1e-4,c+t);const d=o.createStereoPanner();d.pan.value=Math.max(-1,Math.min(1,r)),l.connect(u).connect(f).connect(d).connect(this.master),l.start(c),l.stop(c+t+.02)}tone({freq:t=440,freq2:e,t:i=.12,gain:n=.15,type:a="sine",delay:r=0}){const o=this.ensure();if(!o)return;const c=o.currentTime+r,l=o.createOscillator();l.type=a,l.frequency.setValueAtTime(t,c),e&&l.frequency.exponentialRampToValueAtTime(Math.max(20,e),c+i);const u=o.createGain();u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(n,c+.012),u.gain.exponentialRampToValueAtTime(1e-4,c+i),l.connect(u).connect(this.master),l.start(c),l.stop(c+i+.03)}shoot(t,e=0,i=0){if(!this.enabled)return;const n=Math.max(.12,1-i/90);t==="sniper"?(this.noiseBurst({t:.3,gain:.9*n,filter:3200,q:.7,pan:e}),this.tone({freq:120,freq2:45,t:.3,gain:.5*n,type:"triangle"})):t==="shotgun"?(this.noiseBurst({t:.24,gain:.9*n,filter:1500,q:.6,pan:e}),this.tone({freq:90,freq2:40,t:.24,gain:.45*n,type:"triangle"})):t==="lmg"?(this.noiseBurst({t:.16,gain:.7*n,filter:1900,q:.9,pan:e}),this.tone({freq:105,freq2:50,t:.14,gain:.35*n,type:"square"})):t==="pistol"?(this.noiseBurst({t:.1,gain:.55*n,filter:2600,q:1,pan:e}),this.tone({freq:180,freq2:90,t:.09,gain:.25*n,type:"square"})):(this.noiseBurst({t:.11,gain:.62*n,filter:2400,q:.9,pan:e}),this.tone({freq:140,freq2:60,t:.1,gain:.28*n,type:"triangle"}))}reload(t=2){this.enabled&&(this.noiseBurst({t:.05,gain:.25,filter:3500,q:2}),this.tone({freq:340,t:.04,gain:.08,type:"square",delay:.04}),this.noiseBurst({t:.05,gain:.3,filter:2600,q:2}),this.tone({freq:220,t:.05,gain:.1,type:"square",delay:Math.min(.8,t*.55)}))}hit(t=!1){this.enabled&&(this.tone({freq:t?880:1500,freq2:t?1200:1500,t:.05,gain:.09,type:"sine"}),t&&this.tone({freq:700,freq2:1100,t:.12,gain:.07,type:"triangle",delay:.03}))}ability(){this.enabled&&(this.tone({freq:220,freq2:880,t:.3,gain:.12,type:"sine"}),this.noiseBurst({t:.25,gain:.12,filter:900,type:"bandpass",q:4}))}damage(){this.enabled&&(this.noiseBurst({t:.12,gain:.35,filter:700,type:"lowpass"}),this.tone({freq:70,freq2:40,t:.18,gain:.35,type:"sine"}))}ui(t="click"){if(!this.enabled)return;const e=t==="hover"?640:t==="buy"?520:880;this.tone({freq:e,freq2:t==="buy"?1040:e,t:t==="hover"?.03:.07,gain:t==="hover"?.02:.05,type:"sine"})}startAmbient(){if(!this.enabled||!this.ensure()||this.ambient)return;const t=this.ctx,e=t.createGain();e.gain.value=1e-4,e.gain.exponentialRampToValueAtTime(.035,t.currentTime+3);const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=340,e.connect(i).connect(this.master);const n=[55,82.4,110,164.8].map((a,r)=>{const o=t.createOscillator();o.type=r%2?"sawtooth":"sine",o.frequency.value=a,o.detune.value=r*4-6;const c=t.createGain();return c.gain.value=.12/(r+1),o.connect(c).connect(e),o.start(),o});this.ambient={gain:e,oscs:n}}stopAmbient(){if(!this.ambient||!this.ctx)return;const{gain:t,oscs:e}=this.ambient,i=this.ctx.currentTime;t.gain.cancelScheduledValues(i),t.gain.setValueAtTime(t.gain.value,i),t.gain.exponentialRampToValueAtTime(1e-4,i+.8),e.forEach(n=>{try{n.stop(i+.9)}catch{}}),this.ambient=null}victory(t=!0){if(!this.enabled)return;(t?[392,523,659,784]:[330,294,247,196]).forEach((i,n)=>this.tone({freq:i,t:.5,gain:.1,type:"triangle",delay:n*.16}))}}const Qt=new x0;function _0(){const s=document.createElement("canvas");s.width=s.height=512;const t=s.getContext("2d");t.fillStyle="#101519",t.fillRect(0,0,512,512),t.strokeStyle="rgba(80,160,180,0.14)",t.lineWidth=2;for(let i=0;i<=512;i+=32)t.beginPath(),t.moveTo(i,0),t.lineTo(i,512),t.stroke(),t.beginPath(),t.moveTo(0,i),t.lineTo(512,i),t.stroke();t.strokeStyle="rgba(255,255,255,0.04)";for(let i=0;i<=512;i+=128)t.beginPath(),t.moveTo(i,0),t.lineTo(i,512),t.stroke(),t.beginPath(),t.moveTo(0,i),t.lineTo(512,i),t.stroke();const e=new di(s);return e.colorSpace=le,e.wrapS=e.wrapT=Ui,e.repeat.set(8,8),e}function M0(){const s=document.createElement("canvas");s.width=1024,s.height=512;const t=s.getContext("2d");t.clearRect(0,0,1024,512),t.textAlign="center",t.font="700 210px Teko, sans-serif",t.fillStyle="rgba(230,245,250,0.09)",t.fillText("IRON",512,230),t.strokeStyle="rgba(255,107,44,0.28)",t.lineWidth=4,t.strokeText("IRON",512,230),t.font="600 92px Rajdhani, sans-serif",t.fillStyle="rgba(72,230,210,0.15)",t.letterSpacing="18px",t.fillText("PROTOCOL",512,330),t.fillStyle="rgba(255,107,44,0.35)",t.fillRect(340,360,344,3);const e=new di(s);return e.colorSpace=le,e}class S0{constructor(){const t=new oo;this.scene=t,t.background=new gt(329739),t.fog=new _a(329739,16,58),this.camera=new ze(44,1,.1,120),this.camera.position.set(3,3.1,12.5);const e=new go(6127506,526860,.6);t.add(e);const i=new zn(16765608,1.7);i.position.set(-6,12,8),i.castShadow=!1,t.add(i);const n=new zn(4777682,1.4);n.position.set(8,6,-10),t.add(n);const a=new $e(16739116,30,30,2);a.position.set(-7,3.5,1),t.add(a);const r=new $e(4777682,25,26,2);r.position.set(7.5,4.5,.5),t.add(r);const o=new $e(12577279,22,22,2);o.position.set(2,9,1),t.add(o);const c=_0(),l=new Rt(new qe(90,90),new ci({map:c,color:9083040,roughness:.34,metalness:.72}));l.rotation.x=-Math.PI/2,l.position.y=-.02,t.add(l);const u=new ci({color:1449250,roughness:.32,metalness:.85}),f=new Rt(new Ji(9.4,9.8,.34,72),u);f.position.set(2.2,.15,0),t.add(f);const d=new Rt(new Ki(9.42,.045,8,90),new ue({color:4777682}));d.rotation.x=Math.PI/2,d.position.set(2.2,.34,0),t.add(d);const h=new Rt(new Yi(6.8,6.86,72),new ue({color:16739116,transparent:!0,opacity:.38,side:Te}));h.rotation.x=-Math.PI/2,h.position.set(2.2,.35,0),t.add(h);const p=new Rt(new Yi(7.9,8.06,72),new ue({color:4777682,transparent:!0,opacity:.2,side:Te}));p.rotation.x=-Math.PI/2,p.position.set(2.2,.36,0),t.add(p);const v=new ci({color:725269,roughness:.86,metalness:.3}),g=new Rt(new Ke(60,18,1),v);g.position.set(2,8,-16),t.add(g);const m=new Rt(new Ke(1,18,50),v);m.position.set(-24,8,-4),t.add(m);const _=m.clone();_.position.x=28,t.add(_);for(const[O,L]of[[-12,-9],[18,-9],[-12,7],[18,7]]){const z=new Rt(new Ke(.9,11,.9),new ci({color:1449250,roughness:.5,metalness:.7}));z.position.set(O,5.5,L),t.add(z);const W=new Rt(new Ke(.06,8,.06),new ue({color:4777682}));W.position.set(O+.5,5,L+.48),t.add(W)}const E=new ci({color:922648,roughness:.7,metalness:.6});for(let O=-3;O<=3;O++){const L=new Rt(new Ke(.35,.35,40),E);L.position.set(2+O*5,11.5,-2),t.add(L)}const y=new Rt(new qe(20,10),new ue({map:M0(),transparent:!0,opacity:.9,depthWrite:!1}));y.position.set(2,6.4,-15.2),t.add(y);const T=new Rt(new Ki(6.2,.035,6,90),new ue({color:4777682,transparent:!0,opacity:.35}));T.position.set(2,4.2,-13),t.add(T);const w=new Rt(new Ki(4.6,.02,6,80),new ue({color:16739116,transparent:!0,opacity:.28}));w.position.set(2,4.2,-13),t.add(w),this.holo=T,this.holo2=w,new ue({color:10479871,transparent:!0,opacity:.028,side:Te,depthWrite:!1,blending:Mi});for(const[O,L,z]of[[-2,-1,16761994],[5,0,9434602],[10,-2,16752746]]){const W=new od(z,60,28,.32,.5,1.5);W.position.set(O,11,L),W.target.position.set(O,0,L),t.add(W,W.target);const B=new Rt(new hn(3.4,11,24,1,!0),new ue({color:z,transparent:!0,opacity:.028,side:Te,depthWrite:!1,blending:Mi}));B.position.set(O,5.6,L),t.add(B)}this.ops=[];const x=2.15;cn.forEach((O,L)=>{const z=Mo(O,"blue"),W=2.2+(L-1.5)*x,B=-.3+Math.abs(L-1.5)*.55;z.position.set(W,.36,B),z.rotation.y=Math.PI+(L-1.5)*.08,z.scale.setScalar(L===2?1.12:1.05),t.add(z),this.ops.push({model:z,baseX:W,baseZ:B,phase:L*1.7,char:O})});const b=new Rt(new Yi(3.2,3.26,64),new ue({color:16739116,transparent:!0,opacity:.2,side:Te}));b.rotation.x=-Math.PI/2,b.position.set(2.2,.37,0),t.add(b);const D=260,R=new Float32Array(D*3);this.seeds=[];for(let O=0;O<D;O++)R[O*3]=(Math.random()-.5)*44,R[O*3+1]=Math.random()*10,R[O*3+2]=(Math.random()-.5)*30-2,this.seeds.push(Math.random());const I=new me;I.setAttribute("position",new ii(R,3));const U=new Sa({color:10475752,size:.035,transparent:!0,opacity:.35,depthWrite:!1,blending:Mi});this.dust=new ho(I,U),t.add(this.dust),this.t=0,this.reduce=!1}update(t){this.t+=t;const e=this.t,i=Math.sin(e*.09)*.16-.06,n=12.6;this.camera.position.set(2.2+Math.sin(i)*n,3.05+Math.sin(e*.3)*.08,Math.cos(i)*n),this.camera.lookAt(2.2,1.65,-.6),this.holo.rotation.z=e*.06,this.holo2.rotation.z=-e*.09,this.ops.forEach((r,o)=>{r.model.position.y=.36+Math.sin(e*.7+r.phase)*.012,r.model.rotation.y=Math.PI+(o-1.5)*.08+Math.sin(e*.2+r.phase)*.015,pa(r.model,e,.15,!1)});const a=this.dust.geometry.attributes.position.array;for(let r=0;r<this.seeds.length;r++)a[r*3+1]+=t*(.06+this.seeds[r]*.12),a[r*3]+=Math.sin(e*.2+this.seeds[r]*10)*t*.08,a[r*3+1]>10&&(a[r*3+1]=.2);this.dust.geometry.attributes.position.needsUpdate=!0}}const zl=new Ke(1,1,1);function Ta(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function hs(s){const t=document.createElement("canvas");return t.width=t.height=s,[t,t.getContext("2d")]}function Qr(s,t,e,i,n,a=.2,r=3){for(let o=0;o<e;o++)s.globalAlpha=a*(.3+n()*.7),s.fillStyle=i[n()*i.length|0],s.beginPath(),s.arc(n()*t,n()*t,.6+n()*r,0,Math.PI*2),s.fill();s.globalAlpha=1}function y0(s){const[t,e]=hs(512),i=Ta(9173+s.id.length*77),n=new gt(s.palette.ground);e.fillStyle=`#${n.getHexString()}`,e.fillRect(0,0,512,512);const a=`#${n.clone().multiplyScalar(1.35).getHexString()}`,r=`#${n.clone().multiplyScalar(.62).getHexString()}`;Qr(e,512,2400,[a,r],i,.1,2.2),e.globalAlpha=.18,e.strokeStyle=r,e.lineWidth=2;for(let l=0;l<18;l++){let u=i()*512,f=i()*512;e.beginPath(),e.moveTo(u,f);for(let d=0;d<5;d++)u+=(i()-.5)*80,f+=(i()-.5)*80,e.lineTo(u,f);e.stroke()}e.globalAlpha=1;const o=s.kind;if(o==="dunes")for(let l=0;l<512;l+=26){e.strokeStyle=`rgba(255,240,200,${.06+i()*.08})`,e.lineWidth=7,e.beginPath();for(let u=0;u<=512;u+=16)e.lineTo(u,l+Math.sin(u*.03+l)*7);e.stroke()}else if(o==="frost")for(let l=0;l<30;l++)e.fillStyle=`rgba(220,240,255,${.08+i()*.12})`,e.beginPath(),e.ellipse(i()*512,i()*512,20+i()*70,10+i()*35,i()*3,0,7),e.fill();else if(o==="bazaar"||o==="metro"){const l=o==="metro"?52:44;for(let u=0;u<512;u+=l)for(let f=0;f<512;f+=l)e.fillStyle=`rgba(0,0,0,${.05+i()*.1})`,e.fillRect(f+2,u+2,l-4,l-4),e.strokeStyle="rgba(0,0,0,0.24)",e.strokeRect(f+1,u+1,l-2,l-2);if(o==="metro")for(let u=0;u<28;u++)e.fillStyle="rgba(10,8,6,0.35)",e.beginPath(),e.ellipse(i()*512,i()*512,10+i()*40,6+i()*18,i()*3,0,7),e.fill()}else if(o==="orbital"){e.strokeStyle="rgba(80,190,255,0.22)",e.lineWidth=2;for(let l=0;l<512;l+=64)e.beginPath(),e.moveTo(l,0),e.lineTo(l,512),e.stroke(),e.beginPath(),e.moveTo(0,l),e.lineTo(512,l),e.stroke();for(let l=0;l<14;l++)e.fillStyle="rgba(0,0,0,0.1)",e.fillRect(i()*512,i()*512,60+i()*120,18)}else if(o==="volcano")for(let l=0;l<16;l++){let u=i()*512,f=i()*512;e.strokeStyle=`rgba(255,90,30,${.15+i()*.2})`,e.lineWidth=1+i()*2.5,e.beginPath(),e.moveTo(u,f);for(let d=0;d<6;d++)u+=(i()-.5)*60,f+=(i()-.5)*60,e.lineTo(u,f);e.stroke()}else if(o==="rooftop"){e.strokeStyle="rgba(0,0,0,0.25)",e.lineWidth=3;for(let l=0;l<512;l+=86)e.beginPath(),e.moveTo(l,0),e.lineTo(l,512),e.stroke();Qr(e,512,900,["#8d8386","#2f2a2e"],i,.12,1.6)}else if(o==="harbor"||o==="foundry"){for(let l=0;l<24;l++)e.fillStyle=`rgba(12,14,15,${.08+i()*.12})`,e.beginPath(),e.ellipse(i()*512,i()*512,12+i()*55,6+i()*22,i()*3,0,7),e.fill();e.strokeStyle="rgba(230,220,180,0.12)",e.lineWidth=4,e.beginPath(),e.moveTo(0,256),e.lineTo(512,256),e.stroke()}else if(o==="jungle")for(let l=0;l<40;l++)e.fillStyle=`rgba(60,92,40,${.1+i()*.2})`,e.beginPath(),e.ellipse(i()*512,i()*512,8+i()*36,4+i()*16,i()*3,0,7),e.fill();const c=new di(t);return c.colorSpace=le,c.wrapS=c.wrapT=Ui,c.repeat.set(12,12),c.anisotropy=8,c}function b0(s){const[t,e]=hs(256),[i,n]=hs(256),a=Ta(551+s.id.length*31),r=new gt(s.palette.ground).multiplyScalar(.85);e.fillStyle=`#${r.getHexString()}`,e.fillRect(0,0,256,256),n.fillStyle="#000",n.fillRect(0,0,256,256),Qr(e,256,900,[`#${r.clone().multiplyScalar(1.4).getHexString()}`,`#${r.clone().multiplyScalar(.55).getHexString()}`],a,.1,1.6);const o=4,c=5,l=256/o,u=256/c,f=[s.palette.accent,"#ffd9a0","#bfe8ff","#ffb46a"];for(let p=0;p<c;p++)for(let v=0;v<o;v++){const g=v*l+l*.3,m=p*u+u*.26,_=l*.4,E=u*.3;if(e.fillStyle="rgba(8,12,16,0.75)",e.fillRect(g-2,m-2,_+4,E+4),a()>.44){const T=f[a()*f.length|0];e.fillStyle=T,e.globalAlpha=.85,e.fillRect(g,m,_,E),e.globalAlpha=1,n.fillStyle=T,n.fillRect(g,m,_,E)}else e.fillStyle="rgba(24,32,40,0.9)",e.fillRect(g,m,_,E);e.strokeStyle="rgba(0,0,0,0.4)",e.strokeRect(g,m,_,E)}const d=new di(t);d.colorSpace=le,d.wrapS=d.wrapT=Ui;const h=new di(i);return h.colorSpace=le,h.wrapS=h.wrapT=Ui,{map:d,emissive:h}}function Hl(s,t){const[e,i]=hs(256),n=new gt(s);i.fillStyle=`#${n.getHexString()}`,i.fillRect(0,0,256,256);for(let r=0;r<256;r+=16)i.fillStyle="rgba(0,0,0,0.16)",i.fillRect(r,0,5,256),i.fillStyle="rgba(255,255,255,0.07)",i.fillRect(r+6,0,2,256);i.fillStyle=`#${new gt(t).getHexString()}`,i.globalAlpha=.8,i.fillRect(0,214,256,9),i.globalAlpha=.4;for(let r=0;r<10;r++)i.fillStyle="rgba(0,0,0,0.2)",i.beginPath(),i.arc(Math.random()*256,Math.random()*190,Math.random()*16,0,7),i.fill();i.globalAlpha=1;const a=new di(e);return a.colorSpace=le,a.wrapS=a.wrapT=Ui,a}function E0(s,t,e="rgba(4,6,10,0.86)"){const i=document.createElement("canvas");i.width=512,i.height=128;const n=i.getContext("2d");n.fillStyle=e,n.fillRect(0,0,512,128),n.strokeStyle=t,n.lineWidth=4,n.strokeRect(8,8,496,112),n.font="700 64px Rajdhani, sans-serif",n.textAlign="center",n.textBaseline="middle",n.shadowColor=t,n.shadowBlur=24,n.fillStyle=t,n.fillText(s,256,68);const a=new di(i);return a.colorSpace=le,a}function w0(){const[s,t]=hs(128),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,230,190,0.75)"),e.addColorStop(.6,"rgba(255,190,120,0.18)"),e.addColorStop(1,"rgba(255,180,100,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const i=new di(s);return i.colorSpace=le,i}function T0(s){const t=Ta(4411+s.id.length),e=s.kind==="orbital"||s.kind==="metro"?900:420,i=new Float32Array(e*3);for(let r=0;r<e;r++){const o=t()*Math.PI*2,c=Math.acos(.1+t()*.85),l=170;i[r*3]=Math.cos(o)*Math.sin(c)*l,i[r*3+1]=Math.cos(c)*l,i[r*3+2]=Math.sin(o)*Math.sin(c)*l}const n=new me;n.setAttribute("position",new ii(i,3));const a=new Sa({color:14674687,size:.65,sizeAttenuation:!0,transparent:!0,opacity:.9,depthWrite:!1});return new ho(n,a)}class A0{constructor(t,e){this.scene=t,this.def=e,this.group=new Ue,this.group.name=`world-${e.id}`,t.add(this.group),this.colliders=[],this.spawns={blue:[],red:[]},this.nav=[],this.disposables=[],this.time=0,this.lamps=[],this.teamColor={blue:5096959,red:16734797},this.rand=Ta(2027+e.id.length*967),this.build()}mat(t,e={}){const i=new ci({color:t,roughness:e.rough??.82,metalness:e.metal??.12,emissive:e.emissive??0,emissiveIntensity:e.emissiveIntensity??1,map:e.map??null,transparent:e.transparent??!1,opacity:e.opacity??1,side:e.side??Ni});return this.disposables.push(i),i}addBox({x:t,z:e,y:i=0,w:n=1,h:a=1,d:r=1,rot:o=0,color:c,mat:l,collide:u=!0,shadow:f=!0,name:d=""}){const h=new Rt(zl,l||this.mat(c??5592405));if(h.scale.set(n,a,r),h.position.set(t,i+a/2,e),h.rotation.y=o,h.castShadow=f,h.receiveShadow=!0,d&&(h.name=d),this.group.add(h),u){const p=Math.abs(Math.cos(o)),v=Math.abs(Math.sin(o)),g=(p*n+v*r)/2,m=(v*n+p*r)/2;this.colliders.push({minX:t-g,maxX:t+g,minY:i,maxY:i+a,minZ:e-m,maxZ:e+m})}return h}addCylinder({x:t,z:e,y:i=0,r:n=.4,h:a=1,color:r,mat:o,collide:c=!0,segments:l=12,rotX:u=0,rotZ:f=0}){const d=new Rt(new Ji(n,n,a,l),o||this.mat(r??5592405));return d.position.set(t,i+a/2,e),d.rotation.x=u,d.rotation.z=f,d.castShadow=!0,d.receiveShadow=!0,this.group.add(d),c&&this.colliders.push({minX:t-n,maxX:t+n,minY:i,maxY:i+a,minZ:e-n,maxZ:e+n}),d}addPlane(t,e,i,n,a,r,o=-Math.PI/2,c=0){const l=new Rt(new qe(t,e),i);return l.position.set(n,a,r),l.rotation.set(o,c,0),l.receiveShadow=!0,this.group.add(l),l}addSign(t,e,i,n,a,r=0,o=1){const c=E0(t,e);this.disposables.push(c);const l=new ue({map:c,transparent:!0,side:Te});this.disposables.push(l);const u=new Rt(new qe(4.6*o,1.15*o),l);return u.position.set(i,n,a),u.rotation.y=r,this.group.add(u),u}addLamp(t,e,i=16777215,n=12,a=5){const r=this.addCylinder({x:t,z:e,r:.07,h:a,color:2237995,collide:!1,segments:6}).material;r.metalness=.7;const o=this.addBox({x:t,z:e,y:a-.16,w:.7,h:.12,d:.3,color:1777186,collide:!1,shadow:!1});o.material.emissive=new gt(i),o.material.emissiveIntensity=.8;const c=new $e(i,n,18,2);return c.position.set(t,a-.3,e),this.group.add(c),this.lamps.push(c),c}addTree(t,e,i=1){const n=this.mat(4863268,{rough:.95}),a=this.mat(this.def.kind==="frost"?7244679:3038259,{rough:.9}),r=this.mat(this.def.kind==="frost"?8890017:4160060,{rough:.9});this.addCylinder({x:t,z:e,r:.18*i,h:2.6*i,mat:n,collide:!1,segments:6});const o=new Rt(new hn(1.5*i,2.4*i,7),a);o.position.set(t,3.2*i,e),o.castShadow=!0,this.group.add(o);const c=new Rt(new hn(1.1*i,2*i,7),r);c.position.set(t,4.1*i,e),c.castShadow=!0,this.group.add(c),this.colliders.push({minX:t-.25*i,maxX:t+.25*i,minY:0,maxY:4*i,minZ:e-.25*i,maxZ:e+.25*i})}addCrate(t,e,i=1.2,n=7035454,a=3813926,r=0){const o=this.mat(n,{rough:.85,metal:.15,map:this.crateTex||(this.crateTex=Hl(n,a))});this.addBox({x:t,z:e,y:r,w:i,h:i,d:i,mat:o});const c=this.mat(a,{metal:.5,rough:.55});this.addBox({x:t,z:e,y:r+i-.07,w:i+.02,h:.07,d:i+.02,mat:c,collide:!1})}addContainer(t,e,i,n,a=0,r=0,o=5.6){const c=`c-${i}-${n}`;if(this.containerMats=this.containerMats||{},!this.containerMats[c]){const m=Hl(i,n);this.disposables.push(m),this.containerMats[c]=this.mat(16777215,{map:m,rough:.72,metal:.4})}const l=o,u=2.5,f=2.6;this.addBox({x:t,z:e,y:r,w:l,h:f,d:u,rot:a,mat:this.containerMats[c]});const d=this.mat(2106408,{metal:.7,rough:.4}),h=Math.cos(a),p=Math.sin(a),v=m=>t+m*h,g=m=>e-m*p;for(const m of[-l/2+.05,l/2-.05])this.addBox({x:v(m),z:g(m),y:r,w:.12,h:f+.02,d:u+.02,rot:a,mat:d,collide:!1});this.addBox({x:t,z:e,y:r+f,w:l+.06,h:.1,d:u+.06,rot:a,mat:d,collide:!1})}build(){const t=this.def,e=t.palette,i=this.scene;i.background=new gt(e.sky),i.fog=new _a(new gt(e.fog),48,155),i.fog.color=new gt(e.fog);const n=new Qi({uniforms:{top:{value:new gt(e.sky).multiplyScalar(1.15)},bottom:{value:new gt(e.fog)}},vertexShader:"varying vec3 vWorld; void main(){ vWorld = (modelMatrix*vec4(position,1.0)).xyz; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying vec3 vWorld; void main(){ float h = clamp(normalize(vWorld).y*0.5+0.5,0.0,1.0); vec3 col = mix(bottom, top, pow(h,0.7)); gl_FragColor = vec4(col,1.0); }",side:He,depthWrite:!1,fog:!1}),a=new Rt(new ls(190,24,16),n);this.group.add(a),this.disposables.push(n);const r=["bazaar","metro","orbital","foundry","volcano"].includes(t.kind);if(r||t.kind==="harbor"){const T=T0(t);this.group.add(T),this.disposables.push(T.geometry,T.material)}const o=w0();this.disposables.push(o);const c=new Ma(new fs({map:o,color:e.sun,transparent:!0,opacity:r?.5:.9,depthWrite:!1,blending:Mi}));c.scale.set(26,26,1),c.position.set(-70,62,-95),this.group.add(c);const l=new go(e.ambient,new gt(e.ground).multiplyScalar(.5),r?.75:1.15);i.add(l),this.group.userData.hemi=l;const u=new zn(e.sun,r?1.2:2.1);u.position.set(-34,48,-28),u.castShadow=!0,u.shadow.mapSize.set(2048,2048),u.shadow.camera.left=-58,u.shadow.camera.right=58,u.shadow.camera.top=58,u.shadow.camera.bottom=-58,u.shadow.camera.near=1,u.shadow.camera.far=150,u.shadow.bias=-9e-4,u.shadow.normalBias=.03,i.add(u),this.group.userData.sun=u;const f=new zn(e.accent,r?.45:.3);f.position.set(38,20,42),i.add(f),this.group.userData.fill=f;const d=y0(t);this.disposables.push(d);const h=this.mat(16777215,{map:d,rough:.94,metal:.06}),p=new Rt(new qe(110,110),h);p.rotation.x=-Math.PI/2,p.receiveShadow=!0,this.group.add(p);const v=new ue({color:e.accent,transparent:!0,opacity:.5});this.disposables.push(v);for(const T of[-1,1]){const w=new Rt(new qe(86,.18),v);w.rotation.x=-Math.PI/2,w.position.set(0,.02,T*21),this.group.add(w)}const g=new Rt(new Yi(5.2,5.6,48),new ue({color:e.accent,transparent:!0,opacity:.28,side:Te}));g.rotation.x=-Math.PI/2,g.position.y=.018,this.group.add(g),this.disposables.push(g.geometry,g.material);const m=this.wallMaterial||this.mat(new gt(e.ground).multiplyScalar(.7),{rough:.9}),_=t.kind==="metro"?9:5.2;for(const[T,w,x,b]of[[0,-50,102,2.4],[0,50,102,2.4],[-50,0,2.4,102],[50,0,2.4,102]])this.addBox({x:T,z:w,w:x,h:_,d:b,mat:m}),this.addBox({x:T,z:w,y:_,w:x+.3,h:.22,d:b+.3,mat:this.mat(e.accent,{metal:.5,rough:.4,emissive:e.accent,emissiveIntensity:.4}),collide:!1});const E=this.rand,y=this.mat(new gt(e.fog).multiplyScalar(.55),{rough:1});for(let T=0;T<36;T++){const w=E()*Math.PI*2,x=66+E()*22,b=8+E()*28,D=5+E()*9;Math.abs(Math.cos(w)*x)<52&&Math.abs(Math.sin(w)*x)<52||this.addBox({x:Math.cos(w)*x,z:Math.sin(w)*x,y:-2,w:D,h:b,d:D,mat:y,collide:!1,shadow:!1,rot:w})}this.addSpawnZone("blue",36),this.addSpawnZone("red",-36),this.buildBlocks(),this.buildSpecific();for(let T=-42;T<=42;T+=5)for(let w=-42;w<=42;w+=5)this.isFree(T,w,.9)&&this.nav.push({x:T,z:w});this.buildParticles(),t.kind==="metro"&&this.buildCeiling()}addSpawnZone(t,e){const i=this.teamColor[t],n=new ue({color:i,transparent:!0,opacity:.18,side:Te});this.disposables.push(n);const a=new Rt(new qe(28,7),n);a.rotation.x=-Math.PI/2,a.position.set(0,.025,e),this.group.add(a);const r=new ue({color:i,transparent:!0,opacity:.6});this.disposables.push(r);for(const c of[-13.4,13.4]){const l=new Rt(new qe(.16,7),r);l.rotation.x=-Math.PI/2,l.position.set(c,.03,e),this.group.add(l)}for(this.addSign(t==="blue"?"ALFA":"BRAVO",`#${new gt(i).getHexString()}`,0,3.1,e-(t==="blue"?3:-3),t==="blue"?Math.PI:0,.65),[-11,-5.5,0,5.5,11].forEach(c=>{this.isFree(c,e,.7)&&this.spawns[t].push(new P(c,0,e))});this.spawns[t].length<5;)this.spawns[t].push(new P((this.spawns[t].length-2)*4,0,e))}buildBlocks(){const t=this.def.kind,e=this.def.palette,i=new gt(e.accent);this.mat(new gt(e.ground).multiplyScalar(.8),{rough:.86});const n=this.mat(new gt(e.ground).multiplyScalar(.45),{rough:.6,metal:.3}),a=this.mat(i,{rough:.25,metal:.7,emissive:i,emissiveIntensity:.35}),r=(f,d,h,p,v)=>{const g=`${h}-${v}`;if(this.buildingMats=this.buildingMats||{},!this.buildingMats[g]){const{map:m,emissive:_}=b0(this.def);this.disposables.push(m,_);const E={x:Math.max(1,Math.round(h/7)),y:Math.max(1,Math.round(v/5))};m.repeat.set(E.x,E.y),_.repeat.set(E.x,E.y),this.buildingMats[g]=this.mat(16777215,{map:m,rough:.78,metal:.18,emissive:16777215,emissiveIntensity:.35}),this.buildingMats[g].emissiveMap=_,this.buildingMats[g].emissiveIntensity=.9}this.addBox({x:f,z:d,w:h,h:v,d:p,mat:this.buildingMats[g]}),this.addBox({x:f,z:d,y:v,w:h+.35,h:.28,d:p+.35,mat:n,collide:!1}),this.addBox({x:f,z:d,y:v+.28,w:h*.35,h:.12,d:p*.35,mat:a,collide:!1})};r(-18,-14,8,7,5.5),r(18,14,8,7,5.5),r(20,-18,6,9,4.2),r(-20,18,6,9,4.2);const o=(f,d,h=0,p=3.2,v=null)=>{const g=this.mat(v??new gt(e.ground).multiplyScalar(.9),{rough:.85});this.addBox({x:f,z:d,w:p,h:1.05,d:.5,rot:h,mat:g}),this.addBox({x:f,z:d,y:1.05,w:p+.06,h:.08,d:.56,rot:h,mat:n,collide:!1});const m=this.mat(i,{emissive:i,emissiveIntensity:.25,rough:.5});this.addBox({x:f,z:d,y:.78,w:.5,h:.09,d:.54,rot:h,mat:m,collide:!1})};[[12,4,.2],[-26,7,Math.PI/2],[8,24,0],[-9,-24,Math.PI/2],[30,5,Math.PI/2],[-30,-5,Math.PI/2],[3,-12,.5],[-3,12,.5],[24,30,0],[-24,-30,0],[36,18,Math.PI/2],[-36,-18,Math.PI/2],[14,-32,0],[-14,32,0],[42,-2,0],[-42,2,0],[7,12,.4],[-7,-12,.4]].forEach(([f,d,h],p)=>o(f,d,h,2.8+p%3*.8));for(const[f,d]of[[18,0],[-18,0],[0,15],[0,-15],[26,-28],[-26,28]])this.addCrate(f,d,1.35,new gt(e.ground).multiplyScalar(1.05).getHex(),i.getHex());if(t==="harbor"){const f=[3037803,9059630,5008188,7035438],d=i.getHex();[[-8,4,Math.PI/2],[8,-4,Math.PI/2],[28,12,0],[-28,-12,0],[-34,26,Math.PI/2],[34,-26,Math.PI/2],[6,30,0],[-6,-30,0]].forEach(([p,v,g],m)=>{this.addContainer(p,v,f[m%f.length],d,g),m%3===0&&this.addContainer(p+(g?0:.2),v+(g?.2:0),f[(m+1)%f.length],d,g,2.6)});for(const p of[-1,1])this.addBox({x:p*40,z:p*6,w:1.2,h:13,d:1.2,mat:n,collide:!1}),this.addBox({x:p*33,z:p*6,y:12,w:16,h:.8,d:.8,mat:n,collide:!1}),this.addBox({x:p*27,z:p*6,y:9.5,w:.15,h:2.5,d:.15,mat:n,collide:!1});this.addSign("SANCAK","#ff9a4d",-34,4.2,-24,.2,.75)}else if(t==="bazaar"){const f=[16727450,3662024,16762967,11561983];for(const[d,h,p]of[[-10,8,0],[10,-8,0],[30,24,Math.PI/2],[-30,-24,Math.PI/2],[12,20,0],[-12,-20,0],[-32,12,0],[32,-12,0]]){const v=f[this.rand()*f.length|0];this.addBox({x:d,z:h,w:2.6,h:.9,d:1.3,mat:this.mat(v,{rough:.82})});const g=this.mat(2826520,{rough:.8,metal:.3});for(const m of[-1.2,1.2])for(const _ of[-.55,.55])this.addBox({x:d+m,z:h+_,w:.07,h:2.4,d:.07,mat:g,collide:!1});this.addBox({x:d,z:h,y:2.4,w:3,h:.12,d:1.8,rot:p,mat:this.mat(v,{rough:.7}),collide:!1}),this.addBox({x:d,z:h,y:2.52,w:3.02,h:.05,d:.4,rot:p,mat:this.mat(16777215,{emissive:v,emissiveIntensity:.7}),collide:!1})}this.addSign("NEON ÇARŞI","#ff3d9a",-8,4.4,-30,0,1.1),this.addSign("KEBAP","#37e0c8",30,4.6,22,-Math.PI/2,.7),this.addSign("24/7","#ffc857",33,3.4,-2,Math.PI/2,.55);for(const[d,h,p]of[[-15,26,16727450],[15,-26,3662024],[36,10,11561983]]){const v=new $e(p,16,17,2);v.position.set(d,4,h),this.group.add(v),this.lamps.push(v)}}else if(t==="dunes"){const f=this.mat(11569749,{rough:.96});for(const[d,h,p]of[[-8,2,1],[8,-2,1],[28,-16,1.3],[-28,16,1.3],[-32,-24,.8],[32,24,.8]])this.addBox({x:d,z:h,w:6*p,h:2.2*p,d:2.2*p,rot:.2,mat:f}),this.addBox({x:d,z:h,y:2.2*p,w:6.1*p,h:.22,d:2.3*p,rot:.2,mat:this.mat(9268546),collide:!1});for(const d of[-1,1])this.addCylinder({x:d*20,z:d*10,r:1.3,h:5.5,mat:f,segments:8}),this.addCylinder({x:d*20,z:d*10,y:5.5,r:1.7,h:.5,mat:f,segments:8,collide:!1});this.addSign("KUM FIRTINASI","#7cc7ff",0,4.5,-31,0,.9)}else if(t==="frost"){const f=this.mat(13229540,{rough:.55,metal:.15}),d=this.mat(15660792,{rough:.98});for(const[h,p,v,g]of[[-7,3,5,.15],[7,-3,5,.15],[30,22,4,Math.PI/2],[-30,-22,4,Math.PI/2],[12,28,3,0],[-12,-28,3,0]])this.addBox({x:h,z:p,w:v,h:1.7,d:.9,rot:g,mat:d}),this.addBox({x:h,z:p,y:1.7,w:v+.15,h:.25,d:1.05,rot:g,mat:f,collide:!1});for(const[h,p]of[[-24,-6],[24,6],[10,-36],[-10,36]]){this.addCylinder({x:h,z:p,r:.45,h:3.4,mat:f,segments:6});const v=new Rt(new hn(.55,1.2,6),f);v.position.set(h,4,p),this.group.add(v)}this.addSign("BUZ KALESİ","#64d8ff",-18,4.4,-26,.1,.7)}else if(t==="foundry"){const f=this.mat(5979436,{rough:.8,metal:.4}),d=this.mat(3815992,{rough:.45,metal:.8});for(const[h,p,v]of[[-7,4,6],[7,-4,6],[-30,-18,7],[30,18,7]])this.addCylinder({x:h,z:p,r:1.5,h:v,mat:f,segments:12}),this.addCylinder({x:h,z:p,y:v,r:1.55,h:.3,mat:d,segments:12,collide:!1});for(const h of[-1,1])for(const p of[2.2,3.4,4.6])this.addCylinder({x:h*12,z:h*12,y:p,r:.26,h:13,mat:d,segments:8,collide:!1,rotZ:Math.PI/2});for(const[h,p]of[[-18,12],[18,-12],[26,0],[-26,0]]){const v=new $e(16742954,14,14,2);v.position.set(h,3,p),this.group.add(v),this.lamps.push(v),this.addBox({x:h,z:p,y:0,w:.6,h:2.4,d:.6,mat:this.mat(16738848,{emissive:16734741,emissiveIntensity:1.4,rough:.5}),collide:!1})}this.addSign("DEMİR FABRİKA","#ff7a2a",0,5.6,-31,0,.95)}else if(t==="jungle"){for(const[d,h,p]of[[-12,6,1],[12,-6,1],[-30,-26,1.4],[30,26,1.4],[8,28,1.1],[-8,-28,1.1],[32,-12,1.2],[-32,12,1.2],[20,34,.8],[-20,-34,.8],[38,4,.9],[-38,-4,.9]])this.addTree(d,h,p);const f=this.mat(8022856,{rough:.95});for(const[d,h,p]of[[-6,0,0],[6,0,0],[26,18,Math.PI/2],[-26,-18,Math.PI/2]])this.addBox({x:d,z:h,w:4,h:.9,d:.8,rot:p,mat:f}),this.addBox({x:d,z:h,y:.9,w:4.1,h:.12,d:.9,rot:p,mat:this.mat(9272662),collide:!1});this.addSign("KARAKOL","#ffd166",18,4.2,-32,.1,.7)}else if(t==="orbital"){const f=this.mat(14148072,{rough:.45,metal:.55}),d=this.mat(1779508,{rough:.5,metal:.6});for(const[h,p,v,g]of[[-8,4,7,0],[8,-4,7,0],[28,-22,6,Math.PI/2],[-28,22,6,Math.PI/2]])this.addBox({x:h,z:p,w:v,h:1.4,d:.7,rot:g,mat:f}),this.addBox({x:h,z:p,y:.5,w:v+.1,h:.12,d:.74,rot:g,mat:this.mat(5096959,{emissive:5096959,emissiveIntensity:1.1}),collide:!1});for(const h of[-1,1])this.addBox({x:h*34,z:0,w:.6,h:7,d:12,mat:d,collide:!1}),this.addBox({x:h*34,z:0,y:7,w:.7,h:.12,d:12.1,mat:this.mat(5096959,{emissive:5096959,emissiveIntensity:1.5}),collide:!1});this.addSign("YÖRÜNGE-7","#4dc5ff",0,5.4,-31,0,.9)}else if(t==="rooftop"){const f=this.mat(8093571,{rough:.55,metal:.5}),d=this.mat(2960175,{rough:.8,metal:.3});for(const[v,g,m]of[[-8,5,0],[8,-5,0],[-26,-20,Math.PI/2],[26,20,Math.PI/2],[30,6,0],[-30,-6,0]])this.addBox({x:v,z:g,w:2.6,h:1.2,d:1.8,rot:m,mat:f}),this.addCylinder({x:v,z:g,y:1.2,r:.65,h:.12,mat:d,segments:12,collide:!1});const h=new ue({color:16738908,transparent:!0,opacity:.5});this.disposables.push(h);const p=new Rt(new Yi(3.4,3.6,40),h);p.rotation.x=-Math.PI/2,p.position.set(0,.024,0),this.group.add(p),this.addSign("ÇATI 09","#ff6a5c",0,4.1,30,Math.PI,.65);for(const[v,g]of[[-15,-3],[15,3]]){const m=new $e(16738908,10,12,2);m.position.set(v,1.2,g),this.group.add(m),this.lamps.push(m)}}else if(t==="volcano"){const f=this.mat(2762019,{rough:.95});for(const[h,p,v]of[[-9,3,1.2],[9,-3,1.2],[-28,20,1.6],[28,-20,1.6],[12,28,1],[-12,-28,1]]){const g=new Rt(new mo(v,0),f);g.position.set(h,v*.7,p),g.rotation.set(this.rand()*3,this.rand()*3,this.rand()*3),g.castShadow=!0,g.receiveShadow=!0,this.group.add(g),this.colliders.push({minX:h-v*.8,maxX:h+v*.8,minY:0,maxY:v*1.4,minZ:p-v*.8,maxZ:p+v*.8})}const d=new ue({color:16730655});this.disposables.push(d);for(const[h,p,v,g]of[[0,20,14,1.1],[0,-20,14,1.1],[-22,0,1.1,12],[22,0,1.1,12]]){const m=new Rt(new qe(v,g),d);m.rotation.x=-Math.PI/2,m.position.set(h,.027,p),this.group.add(m);const _=new $e(16730655,9,10,2);_.position.set(h,.8,p),this.group.add(_),this.lamps.push(_)}this.addSign("VOLKAN","#ff4a1f",0,4.6,-31,0,.85)}const l={harbor:9059630,bazaar:4015698,dunes:7035454,frost:8365749,foundry:9063214,jungle:4872762,orbital:10466500,metro:5656648,rooftop:6711920,volcano:4864564},u=this.mat(l[t]||5592405,{rough:.6,metal:.5});for(const[f,d]of[[14,8],[-14,-8],[33,-22],[-33,22],[2,34],[-2,-34],[27,-4],[-27,4]])this.addCylinder({x:f,z:d,r:.35,h:1,mat:u,segments:10})}buildSpecific(){const t=this.def.kind,e=this.def.palette,i=new gt(e.accent),n=this.mat(2895924,{rough:.4,metal:.8}),a=this.mat(new gt(e.ground).multiplyScalar(.9),{rough:.9});if(t==="metro"){const r=this.mat(9278104,{rough:.3,metal:.85}),o=this.mat(i,{emissive:i,emissiveIntensity:.6,rough:.4});this.addBox({x:0,z:-2,w:15,h:2.8,d:2.5,mat:r}),this.addBox({x:0,z:-2,y:1.15,w:15.05,h:.22,d:2.55,mat:o,collide:!1});for(const c of[-5,0,5])this.addBox({x:c,z:-.78,y:1.55,w:2.4,h:.9,d:.04,mat:this.mat(1450026,{metal:.8,rough:.1}),collide:!1});this.addBox({x:0,z:2,w:15.5,h:.25,d:1.2,mat:n,collide:!1});for(const c of[-24,-12,12,24])for(const l of[-16,14])this.addCylinder({x:c,z:l,r:.55,h:7.6,mat:a,segments:8});for(const c of[-9,9])this.addBox({x:0,z:c,w:70,h:.05,d:.14,mat:n,collide:!1,shadow:!1});this.addLamp(-10,6,16757837,16,4),this.addLamp(10,-6,16757837,16,4),this.addLamp(-30,-12,16746564,10,3.8),this.addLamp(30,12,16746564,10,3.8)}else if(t==="harbor")this.addContainer(-3,-1,3037803,i.getHex(),0,0,6),this.addContainer(3.2,1,9059630,i.getHex(),0,0,6),this.addContainer(0,0,5008188,i.getHex(),Math.PI/2,2.6,4.5),this.addBox({x:36,z:-34,w:14,h:7,d:6,mat:a}),this.addSign("DEPO 4","#ff9a4d",34,4.2,-30.8,.3,.7),this.addLamp(-36,12,16757866,12,6),this.addLamp(36,-12,16757866,12,6);else if(t==="bazaar"){this.addCylinder({x:0,z:0,r:2.6,h:.6,mat:a,segments:16}),this.addCylinder({x:0,z:0,r:1.4,h:1.1,mat:this.mat(3820120,{rough:.35,metal:.6}),segments:16}),this.addCylinder({x:0,z:0,r:.35,h:2.4,mat:this.mat(4475474,{rough:.5,metal:.5}),segments:8});const r=new ue({color:16765578});this.disposables.push(r);for(let o=0;o<14;o++){const c=o/14*Math.PI*2,l=Math.cos(c)*9,u=Math.sin(c)*9,f=new Rt(new ls(.06,6,4),r);f.position.set(l,3.4+Math.sin(o*2)*.2,u),this.group.add(f)}}else if(t==="dunes")this.addBox({x:-3,z:0,w:1.6,h:5,d:1.6,mat:a}),this.addBox({x:3,z:0,w:1.6,h:5,d:1.6,mat:a}),this.addBox({x:0,z:0,y:5,w:7.6,h:1.1,d:1.8,mat:a}),this.addBox({x:0,z:12,w:8,h:2.2,d:2,mat:a,rot:.1}),this.addLamp(-24,-28,16773320,8,4.5),this.addLamp(24,28,16773320,8,4.5);else if(t==="frost"){this.addBox({x:0,z:0,w:10,h:3.2,d:10,mat:this.mat(10993865,{rough:.8})}),this.addBox({x:0,z:0,y:3.2,w:11,h:.4,d:11,mat:this.mat(15266548),collide:!1});for(const[o,c]of[[-4.5,-4.5],[4.5,-4.5],[-4.5,4.5],[4.5,4.5]])this.addBox({x:o,z:c,y:3.2,w:1.4,h:1.4,d:1.4,mat:this.mat(12571865,{rough:.85}),collide:!1});const r=new $e(6609151,12,12,2);r.position.set(0,4.4,0),this.group.add(r),this.lamps.push(r)}else if(t==="foundry"){this.addCylinder({x:0,z:0,r:3.2,h:4.4,mat:this.mat(4930094,{rough:.8,metal:.5}),segments:12}),this.addCylinder({x:0,z:0,r:2.2,h:.5,mat:this.mat(16738848,{emissive:16730640,emissiveIntensity:1.6,rough:.3}),segments:12,collide:!1});const r=new $e(16738848,24,20,2);r.position.set(0,3,0),this.group.add(r),this.lamps.push(r),this.addBox({x:-20,z:-10,y:4.6,w:18,h:.3,d:1.4,mat:n,collide:!1});for(const o of[-28,-20,-12])this.addCylinder({x:o,z:-10,r:.08,h:4.6,mat:n,segments:6,collide:!1})}else if(t==="jungle"){this.addBox({x:0,z:-2,w:8,h:2.6,d:4.5,mat:this.mat(5200452,{rough:.92})}),this.addBox({x:0,z:-2,y:2.6,w:9,h:.6,d:5.5,mat:this.mat(3885364,{rough:.9}),collide:!1});for(const r of[-2.6,0,2.6])this.addBox({x:r,z:-4.22,y:1.45,w:.9,h:.35,d:.06,mat:this.mat(1119503),collide:!1});this.addBox({x:0,z:2,y:3.2,w:3,h:.3,d:2,mat:this.mat(3885364),collide:!1})}else if(t==="orbital"){const r=new Rt(new Ki(4.8,.35,10,48),this.mat(12110036,{rough:.3,metal:.9}));r.rotation.x=Math.PI/2,r.position.y=.5,this.group.add(r),this.colliders.push({minX:-5.1,maxX:5.1,minY:0,maxY:.8,minZ:-1.2,maxZ:1.2}),this.colliders.push({minX:-1.2,maxX:1.2,minY:0,maxY:.8,minZ:-5.1,maxZ:5.1});const o=new Rt(new Ji(1,1,5.4,16),this.mat(5096959,{emissive:5096959,emissiveIntensity:1.4,transparent:!0,opacity:.35,rough:.1}));o.position.y=2.7,this.group.add(o);const c=new $e(5096959,20,18,2);c.position.set(0,3,0),this.group.add(c),this.lamps.push(c)}else if(t==="rooftop")this.addBox({x:28,z:-34,w:14,h:20,d:12,mat:a,collide:!1}),this.addBox({x:-32,z:30,w:12,h:24,d:12,mat:a,collide:!1}),this.addSign("TERAS","#ff6a5c",-28,3.2,36,0,.5),this.addLamp(0,6,16756874,8,3.2);else if(t==="volcano"){this.addBox({x:0,z:2,w:4.5,h:.3,d:18,mat:this.mat(3813936,{rough:.9}),collide:!1}),this.addBox({x:0,z:2,y:.3,w:4.6,h:.05,d:18.1,mat:this.mat(16730655,{emissive:16730655,emissiveIntensity:1.2}),collide:!1});for(const[r,o]of[[-10,6],[10,-6]])this.addBox({x:r,z:o,w:4,h:1.8,d:1,mat:this.mat(3090470,{rough:.9})})}t!=="metro"&&t!=="orbital"&&(this.addLamp(0,34,this.def.palette.accent,6,4.2),this.addLamp(0,-34,this.def.palette.accent,6,4.2))}buildCeiling(){const t=this.def.palette,e=this.mat(new gt(t.ground).multiplyScalar(.7),{rough:.9});this.addBox({x:0,z:0,y:8.2,w:101,h:.6,d:101,mat:e,collide:!1,shadow:!1});for(const i of[-30,-15,0,15,30])for(const n of[-30,0,30]){const a=new Rt(new Ke(.4,.08,6),new ue({color:16761466}));a.position.set(i,8.1,n),this.group.add(a)}}buildParticles(){const t=this.def.kind,e=t==="frost",i=t==="volcano"||t==="foundry",n=t==="jungle",a=e?520:i?160:n?220:240,r=new Float32Array(a*3),o=[];for(let d=0;d<a;d++)r[d*3]=(Math.random()-.5)*90,r[d*3+1]=Math.random()*(e?16:8),r[d*3+2]=(Math.random()-.5)*90,o.push(Math.random());const c=new me;c.setAttribute("position",new ii(r,3));const l=e?14676735:i?16742970:n?11065738:new gt(this.def.palette.accent).getHex(),u=new Sa({color:l,size:e?.11:i?.08:.055,transparent:!0,opacity:n?.5:.7,depthWrite:!1,blending:i?Mi:Nn}),f=new ho(c,u);this.group.add(f),this.disposables.push(c,u),this.particles={pts:f,positions:r,seeds:o,kind:t,count:a}}update(t,e){if(this.time=e,this.particles){const{positions:i,seeds:n,kind:a,count:r}=this.particles,o=i,c=a==="frost",l=a==="volcano"||a==="foundry",u=a==="jungle";for(let f=0;f<r;f++){const d=f*3,h=.2+n[f]*.5;c?(o[d+1]-=t*(1.1+n[f]*1.5),o[d]+=Math.sin(e*.7+n[f]*10)*t*.5,o[d+1]<0&&(o[d+1]=14,o[d]=(Math.random()-.5)*90)):l?(o[d+1]+=t*(.5+n[f]*1.1),o[d]+=Math.sin(e+n[f]*8)*t*.7,o[d+1]>9&&(o[d+1]=.2,o[d]=(Math.random()-.5)*80)):u?(o[d]+=Math.sin(e*.3+n[f]*7)*t*.4,o[d+1]+=Math.sin(e*.5+n[f]*3)*t*.22,o[d+2]+=Math.cos(e*.35+n[f]*9)*t*.4):(o[d]+=t*.3*h,o[d+2]+=Math.cos(e*.3+n[f]*8)*t*.35,o[d]>45&&(o[d]=-45))}this.particles.pts.geometry.attributes.position.needsUpdate=!0}}isFree(t,e,i=.45){if(Math.abs(t)>47.5||Math.abs(e)>47.5)return!1;for(const n of this.colliders)if(!(n.maxY<.25)&&t+i>n.minX&&t-i<n.maxX&&e+i>n.minZ&&e-i<n.maxZ)return!1;return!0}moveCircle(t,e,i,n){const a=(r,o)=>{if(!o)return;const c=t.x+(r==="x"?o:0),l=t.z+(r==="z"?o:0);let u=Math.abs(c)>47.3||Math.abs(l)>47.3;if(!u){for(const f of this.colliders)if(!(f.maxY<.35)&&c+e>f.minX&&c-e<f.maxX&&l+e>f.minZ&&l-e<f.maxZ){u=!0;break}}u||(r==="x"?t.x=c:t.z=l)};a("x",i),a("z",n)}raycast(t,e,i=160){let n=i,a=null,r=null;if(e.y<-1e-4){const o=-t.y/e.y;o>.05&&o<n&&(n=o,a="ground",r=new P(0,1,0))}for(const o of this.colliders){const c=R0(t,e,o);c!==null&&c<n&&c>.02&&(n=c,a=o,r=C0(t,e,o,c))}return a?{dist:n,point:new P(t.x+e.x*n,t.y+e.y*n,t.z+e.z*n),normal:r||new P(0,1,0),object:a}:null}los(t,e){const i=new P().subVectors(e,t),n=i.length();if(n<.01)return!0;i.divideScalar(n);const a=this.raycast(t,i,n);return!a||a.dist>=n-.6}nearestNav(t,e,i=null){let n=null,a=1/0;for(const r of this.nav){if(i&&i(r))continue;const o=(r.x-t)**2+(r.z-e)**2;o<a&&(a=o,n=r)}return n}randomNav(){return this.nav[Math.random()*this.nav.length|0]}spawnPoint(t,e){const i=this.spawns[t];let n=i[0],a=-1;for(const r of i){let o=999;for(const c of e)o=Math.min(o,(c.x-r.x)**2+(c.z-r.z)**2);o>a&&(a=o,n=r)}return n.clone()}dispose(){this.scene.remove(this.group);const t=this.group.userData.hemi,e=this.group.userData.sun,i=this.group.userData.fill;t&&this.scene.remove(t),e&&this.scene.remove(e),i&&this.scene.remove(i),this.group.traverse(n=>{n.geometry&&n.geometry!==zl&&n.geometry.dispose?.()}),this.disposables.forEach(n=>n?.dispose?.()),this.scene.fog=null}}function R0(s,t,e){let i=(e.minX-s.x)/(t.x||1e-9),n=(e.maxX-s.x)/(t.x||1e-9);i>n&&([i,n]=[n,i]);let a=(e.minY-s.y)/(t.y||1e-9),r=(e.maxY-s.y)/(t.y||1e-9);return a>r&&([a,r]=[r,a]),i>r||a>n||(i=Math.max(i,a),n=Math.min(n,r),n<0)?null:i>=0?i:null}function C0(s,t,e,i){const n={x:s.x+t.x*i,y:s.y+t.y*i,z:s.z+t.z*i},a=.02;return Math.abs(n.x-e.minX)<a?new P(-1,0,0):Math.abs(n.x-e.maxX)<a?new P(1,0,0):Math.abs(n.y-e.minY)<a?new P(0,-1,0):Math.abs(n.y-e.maxY)<a?new P(0,1,0):Math.abs(n.z-e.minZ)<a?new P(0,0,-1):new P(0,0,1)}function zc(s,t,e,i){const n=s.x-e.x,a=s.y-e.y,r=s.z-e.z,o=n*t.x+a*t.y+r*t.z,c=n*n+a*a+r*r-i*i,l=o*o-c;if(l<0)return null;const u=-o-Math.sqrt(l);return u>=0?u:-o+Math.sqrt(l)>=0?.001:null}function L0(s,t,e,i,n){const a=new P,r=new P().subVectors(i,e),o=r.lengthSq(),c=new P().subVectors(s,e),l=t.dot(t)||1,u=r.dot(t),f=r.dot(c),d=l*o-u*u;let h=d!==0?(f*l-u*t.dot(c))/d:0;h=Math.max(0,Math.min(1,h)),a.copy(e).addScaledVector(r,h);const p=zc(s,t,a,n);return p!==null?{t:p,point:a}:null}function P0(){const s=document.createElement("canvas");s.width=s.height=128;const t=s.getContext("2d"),e=t.createRadialGradient(64,64,2,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,220,150,0.8)"),e.addColorStop(1,"rgba(255,150,60,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new di(s)}class I0{constructor(t,e){this.scene=t,this.camera=e,this.glowTex=P0(),this.glowTex.colorSpace=le,this.tracers=[],this.impacts=[],this.sparks=[],this.muzzle=null,this.muzzleLight=new $e(16756838,0,7,2),this.muzzleLight.position.set(.2,-.05,-.6),e.add(this.muzzleLight),this._initTracers()}_initTracers(){const t=new me;t.setAttribute("position",new ii(new Float32Array(6),3));for(let e=0;e<28;e++){const i=new Mc({color:16767392,transparent:!0,opacity:0,depthWrite:!1,blending:Mi}),n=new Qh(t.clone(),i);n.frustumCulled=!1,n.visible=!1,this.scene.add(n),this.tracers.push({line:n,life:0})}}attachMuzzle(t){this.muzzle&&this.muzzle.removeFromParent(),this.muzzle=t}flash(t=16760944){this.muzzle&&(this.muzzle.visible=!0,this.muzzle.material.color.setHex(t),this.muzzle.scale.setScalar(.3+Math.random()*.2),this.muzzle.material.rotation=Math.random()*Math.PI*2,this.muzzleLight.intensity=9,this.muzzleLight.color.setHex(t))}tracer(t,e,i=16769192){const n=this.tracers.find(r=>r.life<=0)||this.tracers[this.tracers.length-1],a=n.line.geometry.attributes.position;a.setXYZ(0,t.x,t.y,t.z),a.setXYZ(1,e.x,e.y,e.z),a.needsUpdate=!0,n.line.material.color.setHex(i),n.line.material.opacity=.55,n.line.visible=!0,n.life=.075}impact(t,e,i=16760944,n=!1){const a=new fs({map:this.glowTex,color:n?16730698:i,transparent:!0,opacity:1,depthWrite:!1,blending:Mi}),r=new Ma(a);if(r.position.copy(t),r.scale.setScalar(n?.6:.34),this.scene.add(r),this.sparks.push({sprite:r,life:n?.24:.16,max:n?.24:.16}),!n&&e){const o=new fo(.045+Math.random()*.02,7),c=new ue({color:789775,transparent:!0,opacity:.68,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),l=new Rt(o,c);if(l.position.copy(t).addScaledVector(e,.012),l.quaternion.setFromUnitVectors(new P(0,0,1),e),this.scene.add(l),this.impacts.push({mesh:l,life:8}),this.impacts.length>36){const u=this.impacts.shift();this.scene.remove(u.mesh),u.mesh.geometry.dispose(),u.mesh.material.dispose()}}}update(t){for(const e of this.tracers)e.life>0&&(e.life-=t,e.line.material.opacity=Math.max(0,e.life/.075)*.55,e.life<=0&&(e.line.visible=!1));for(let e=this.sparks.length-1;e>=0;e--){const i=this.sparks[e];i.life-=t,i.sprite.material.opacity=Math.max(0,i.life/i.max),i.sprite.scale.multiplyScalar(1+t*4),i.life<=0&&(this.scene.remove(i.sprite),i.sprite.material.dispose(),this.sparks.splice(e,1))}for(let e=this.impacts.length-1;e>=0;e--){const i=this.impacts[e];i.life-=t,i.life<1&&(i.mesh.material.opacity=Math.max(0,i.life)*.68),i.life<=0&&(this.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose(),this.impacts.splice(e,1))}this.muzzle&&this.muzzle.visible?(this.muzzle.visible=!1,this.muzzleLight.intensity=0):this.muzzleLight.intensity>0&&(this.muzzleLight.intensity=Math.max(0,this.muzzleLight.intensity-t*120))}}class D0{constructor(t){this.game=t}hitscan(t,e,i,n,a={}){const r=this.game.world,o=a.maxDist??170,c=r.raycast(e,i,o);let l=c?c.dist:o,u=null,f=!1;for(const p of this.game.getCombatants()){if(!p||p===t||!p.alive||p.team===t.team)continue;const v=p.getHitCapsule(),g=L0(e,i,v.a,v.b,v.radius),m=zc(e,i,v.head,v.headRadius);let _=null,E=!1;g&&g.t<l&&(_=g.t),m!==null&&m<l&&(_===null||m<_)&&(_=m,E=!0),_!==null&&_<l&&(l=_,u=p,f=E)}const d=new P(e.x+i.x*l,e.y+i.y*l,e.z+i.z*l);let h=!1;if(u){let p=r0(n,l)*(a.damageScale??1);f&&(p*=n.head),p=Math.round(p),t.isPlayer&&(this.game.player.damageDealt+=p),h=u.takeDamage(p,t,f,n.id),this.game.fx.impact(d,null,f?16728128:16752736,f),t.isPlayer&&this.game.ui.hitmarker(h,f)}else c&&this.game.fx.impact(d,c.normal,16760944,!1);if(a.tracer!==!1){const p=a.muzzle?a.muzzle.clone():e.clone();this.game.fx.tracer(p,d,t.team==="blue"?16769192:16747114)}return{hit:!!u,headshot:f,killed:h,target:u,point:d,dist:l}}}const lr=Math.PI/180;class N0{constructor(t,e,i,n,a){this.game=t,this.world=t.world,this.camera=t.camera,this.isPlayer=!0,this.team="blue",this.name="SEN",this.character=Pi[e]||Pi.vanguard,this.primaryId=i in Ce?i:"ar",this.secondaryId=n in Ce?n:"pistol",this.skins=a||{},this.maxHealth=this.character.stats.health,this.health=this.maxHealth,this.overshield=0,this.alive=!0,this.radius=.42,this.pos=new P,this.vel=new P,this.vy=0,this.onGround=!0,this.yaw=0,this.pitch=0,this.eye=1.66,this.eyeTarget=1.66,this.crouching=!1,this.sprinting=!1,this.adsT=0,this.scoped=!1,this.bobT=0,this.stepT=0,this.slot=0,this.cooldown=0,this.reloading=!1,this.reloadT=0,this.reloadTotal=1,this.switchT=0,this.triggerHeld=!1,this.recoilPitch=0,this.recoilYaw=0,this.kick=0,this.swayX=0,this.swayY=0,this.abilityCd=0,this.abilityActive=0,this.rushT=0,this.shieldT=0,this.evadeT=0,this.lastDamage=99,this.streak=0,this.kills=0,this.deaths=0,this.assists=0,this.damageDealt=0,this.headshots=0,this.deadT=0,this.ammo={};for(const r of[this.primaryId,this.secondaryId]){const o=Ce[r];this.ammo[r]={mag:o.mag,reserve:o.reserve}}this.viewGroup=new Ue,this.viewGroup.name="viewmodel",this.camera.add(this.viewGroup),this.viewmodels=[],this.buildViewmodels(),this.sensitivity=1,this.baseFov=t.baseFov,this.currentFov=this.baseFov,this.aimAssistEnabled=t.isTouch}get weaponId(){return this.slot===0?this.primaryId:this.secondaryId}get weaponDef(){return Ce[this.weaponId]}get ammoState(){return this.ammo[this.weaponId]}get activeView(){return this.viewmodels[this.slot]}get charHealthRatio(){return this.health/this.maxHealth}buildViewmodels(){this.viewGroup.clear(),this.viewmodels=[],[this.primaryId,this.secondaryId].forEach(t=>{const e=Ce[t],i=this.skins[t],n=i?this.game.skinById(i,t):null,a=new Ue,r=_o(t,n);r.scale.setScalar(t==="pistol"?.9:.92),r.traverse(l=>{l.isMesh&&(l.castShadow=!1,l.receiveShadow=!1,l.renderOrder=5,l.frustumCulled=!1)}),a.add(r),this.viewGroup.add(a);const o=new fs({map:this.game.fx.glowTex,color:16760944,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,blending:Mi}),c=new Ma(o);c.scale.setScalar(.28),c.visible=!1,r.userData.muzzle.add(c),a.userData={weaponId:t,def:e,model:r,flash:c,skin:n},this.viewmodels.push(a)}),this.setViewmodelForSlot()}setViewmodelForSlot(){this.viewmodels.forEach((e,i)=>{e.visible=i===this.slot});const t=this.activeView;t&&this.game.fx.attachMuzzle(t.userData.flash)}spawn(t,e=0){this.pos.copy(t),this.vel.set(0,0,0),this.vy=0,this.yaw=e,this.pitch=0,this.health=this.maxHealth,this.overshield=0,this.shieldT=0,this.alive=!0,this.crouching=!1,this.sprinting=!1,this.adsT=0,this.scoped=!1,this.reloading=!1,this.reloadT=0,this.cooldown=0,this.switchT=0,this.lastDamage=99,this.rushT=0,this.evadeT=0,this.abilityCd=0;for(const i of[this.primaryId,this.secondaryId]){const n=Ce[i];this.ammo[i]={mag:n.mag,reserve:n.reserve}}this.viewGroup.visible=!0,this.setViewmodelForSlot(),this.updateCamera(0)}update(t){if(!this.alive){this.deadT-=t;return}this.lastDamage+=t,this.cooldown-=t,this.switchT-=t,this.abilityCd=Math.max(0,this.abilityCd-t),this.rushT=Math.max(0,this.rushT-t),this.evadeT=Math.max(0,this.evadeT-t),this.shieldT=Math.max(0,this.shieldT-t),this.shieldT<=0&&this.overshield>0&&(this.overshield=Math.max(0,this.overshield-t*18)),this.abilityActive=Math.max(0,this.abilityActive-t),this.lastDamage>5&&this.health<this.maxHealth&&(this.health=Math.min(this.maxHealth,this.health+t*15));const e=this.game.input,i=.0021*e.sensitivity*(this.adsT>.5?.62:1);this.yaw-=e.mouse.dx*i,this.pitch-=e.mouse.dy*i,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch)),this.swayX+=(e.mouse.dx*.0014-this.swayX)*Math.min(1,t*10),this.swayY+=(e.mouse.dy*.0014-this.swayY)*Math.min(1,t*10);const n=(e.keys.has("KeyW")?1:0)-(e.keys.has("KeyS")?1:0);let r=(e.keys.has("KeyD")?1:0)-(e.keys.has("KeyA")?1:0),o=n;e.touch&&(r+=e.touchState.moveX,o+=e.touchState.moveY);const c=Math.hypot(r,o);c>1&&(r/=c,o/=c),this.crouching=e.keys.has("ControlLeft")||e.keys.has("ControlRight"),this.sprinting=(e.keys.has("ShiftLeft")||e.keys.has("ShiftRight")||e.touch&&Math.hypot(e.touchState.moveX,e.touchState.moveY)>.94)&&o>.2&&!this.crouching&&!this.reloading;const l=e.aiming&&!this.sprinting&&!this.reloading&&this.switchT<.1,u=1/Math.max(.08,this.weaponDef.adsTime)*this.character.stats.ads;this.adsT+=((l?1:0)-this.adsT)*Math.min(1,t*14*u),this.adsT=Math.max(0,Math.min(1,this.adsT)),this.scoped=this.weaponId==="sniper"&&this.adsT>.86;let d=5.5*this.character.stats.speed;this.sprinting&&(d*=1.5),this.crouching&&(d*=.52),this.adsT>.5&&(d*=this.weaponDef.adsMove),this.rushT>0&&(d*=1.3);const h=Math.sin(this.yaw),p=Math.cos(this.yaw),v=(r*p-o*h)*d,g=(-r*h-o*p)*d,m=this.onGround?13:3.5;this.vel.x+=(v-this.vel.x)*Math.min(1,t*m),this.vel.z+=(g-this.vel.z)*Math.min(1,t*m),this.onGround&&e.keys.has("Space")&&(this.vy=5.6,this.onGround=!1,Qt.ui("click")),this.vy-=20*t,this.pos.y+=this.vy*t,this.pos.y<=0&&(this.pos.y=0,this.vy=0,this.onGround=!0),this.world.moveCircle(this.pos,this.radius,this.vel.x*t,this.vel.z*t);const _=Math.hypot(this.vel.x,this.vel.z);this.onGround&&_>.4&&(this.bobT+=t*_*1.75,this.stepT-=t*_,this.stepT<=0&&(this.stepT=3.4)),this.eyeTarget=this.crouching?1.06:1.66,this.eye+=(this.eyeTarget-this.eye)*Math.min(1,t*11),this.recoilPitch*=Math.exp(-9*t),this.recoilYaw*=Math.exp(-9*t),this.kick*=Math.exp(-10*t),e.consume("KeyR")&&this.startReload(),e.consume("Digit1")&&this.switchWeapon(0),e.consume("Digit2")&&this.switchWeapon(1),e.consume("KeyF")&&this.switchWeapon(this.slot===0?1:0),e.consume("KeyQ")&&this.useAbility(),this.reloading&&(this.reloadT-=t,this.reloadT<=0&&this.finishReload()),e.firing&&!this.sprinting&&!this.reloading&&this.switchT<=0&&(this.ammoState.mag<=0?this.reloading||this.startReload():this.cooldown<=0&&(this.weaponDef.auto||!this.triggerHeld)&&this.shoot()),this.triggerHeld=e.firing,this.updateCamera(t),this.updateViewmodel(t,_),this.game.hud?.updatePlayer(this)}updateCamera(t){const e=this.sprinting?1.25:1,i=Math.cos(this.bobT)*.018*e,n=Math.abs(Math.sin(this.bobT*2))*.022*e;this.camera.position.set(this.pos.x+i,this.pos.y+this.eye+n,this.pos.z);const a=-this.vel.x*.0016+Math.sin(this.bobT)*.002;this.camera.rotation.set(this.pitch+this.recoilPitch,this.yaw+this.recoilYaw,a,"YXZ");const r=this.scoped?30:this.adsT>.05?this.baseFov-this.adsT*(this.baseFov-(this.weaponId==="sniper"?38:55)):this.baseFov;this.currentFov+=(r-this.currentFov)*Math.min(1,(t||1)*16),Math.abs(this.camera.fov-this.currentFov)>.01&&(this.camera.fov=this.currentFov,this.camera.updateProjectionMatrix())}updateViewmodel(t,e){const i=this.activeView;if(!i)return;const n=i.userData.def,a=this.scoped;i.visible=!a;const r=this.adsT;i.userData.model;const o=n.id==="pistol"?[0,-.09,-.32]:[0,-.117,-.4],c=[.245,-.235,-.52],l=1-r*.7,u=Math.sin(this.bobT)*.012*(1-r*.6),f=Math.abs(Math.cos(this.bobT*2))*.012*(1-r*.6),d=c[0]+(o[0]-c[0])*r,h=c[1]+(o[1]-c[1])*r,p=c[2]+(o[2]-c[2])*r,v=this.reloading?Math.sin(Math.min(1,(1-this.reloadT/this.reloadTotal)*Math.PI))*.16:0,g=Math.max(0,this.switchT)*.55;i.position.set(d+u+this.swayX*.3*l,h+f-v-g+this.swayY*.14*l-this.kick*.06,p+this.kick*.16),i.rotation.set(this.kick*.5+(this.reloading?.35:0)+(r?0:.015),-.045+(r?0:.03)+this.swayX*.5*l,(this.reloading?.5:0)+(r?0:-.02)),i.position.y+=Math.sin(performance.now()*.0011)*.0035*(1-r*.8),a?this.game.hud?.setScoped(!0):this.game.hud?.setScoped(!1)}switchWeapon(t){t===this.slot||this.switchT>.15||(this.slot=t,this.reloading=!1,this.reloadT=0,this.adsT=0,this.switchT=.38,this.setViewmodelForSlot(),Qt.ui("click"),this.game.hud?.refreshWeapon(this))}startReload(){const t=this.weaponDef,e=this.ammoState;if(this.reloading||e.mag>=t.mag||e.reserve<=0)return;this.reloading=!0;const i=this.rushT>0?1.25:1;this.reloadTotal=t.reload/(this.character.stats.reload*i),this.reloadT=this.reloadTotal,this.adsT=0,Qt.reload(this.reloadTotal),this.game.hud?.refreshWeapon(this)}finishReload(){const t=this.weaponDef,e=this.ammoState,i=t.mag-e.mag,n=Math.min(i,e.reserve);e.mag+=n,e.reserve-=n,this.reloading=!1,this.game.hud?.refreshWeapon(this)}shoot(){const t=this.weaponDef,e=this.ammoState;if(e.mag<=0)return;e.mag-=1,this.cooldown=60/t.rpm;const i=Math.hypot(this.vel.x,this.vel.z),n=t.hipSpread+(t.adsSpread-t.hipSpread)*this.adsT+Math.min(1.8,i/5.4)*t.moveSpread*(this.adsT>.5?.35:1)+(this.onGround?0:1.6)+(this.crouching?-.18:0),a=Math.max(.001,n)*lr,r=(this.adsT>.5?.55:1)*(this.crouching?.8:1);this.recoilPitch+=t.recoil*lr*(.8+Math.random()*.35)*r,this.recoilYaw+=(Math.random()-.5)*t.recoilYaw*lr*r,this.kick=Math.min(1.2,this.kick+.55),this.streak=0,Qt.shoot(t.id,0,0),this.game.fx.flash(this.weaponId==="sniper"?16769200:16760944),this.game.hud?.crosshairKick(n+.5);const o=new P;this.camera.getWorldPosition(o);const c=new P;this.activeView?.userData.model.userData.muzzle.getWorldPosition(c);for(let u=0;u<t.pellets;u++){let f=this.getAimDirection();this.aimAssistEnabled&&(f=this.game.aimAssist(o,f));const d=Math.random()*Math.PI*2,h=Math.sqrt(Math.random())*a,p=new P(0,1,0),v=new P().crossVectors(f,p).normalize(),g=new P().crossVectors(v,f).normalize();f.addScaledVector(v,Math.cos(d)*h).addScaledVector(g,Math.sin(d)*h).normalize();const m=this.game.combat.hitscan(this,o,f,t,{muzzle:c,tracer:!0});this.shots=(this.shots||0)+1,m.hit&&(this.hits=(this.hits||0)+1)}this.game.hud?.refreshWeapon(this)}getAimDirection(){const t=new Fi(this.pitch+this.recoilPitch,this.yaw+this.recoilYaw,0,"YXZ");return new P(0,0,-1).applyEuler(t).normalize()}useAbility(){if(this.abilityCd>0||!this.alive)return;const t=this.character.ability;this.abilityCd=t.cooldown,this.abilityActive=t.duration,Qt.ability(),t.type==="rush"&&(this.rushT=t.duration,this.game.ui.abilityFlash("HÜCUM AKTİF","#37e0c8")),t.type==="scan"&&(this.game.revealT=t.duration,this.game.ui.abilityFlash("NABIZ TARAMASI","#b06bff")),t.type==="shield"&&(this.overshield=55,this.shieldT=t.duration,this.game.ui.abilityFlash("SİPER AKTİF","#ffc857")),t.type==="smoke"&&(this.evadeT=t.duration,this.game.ui.abilityFlash("SİS PERDESİ","#ff4f8b")),this.game.hud?.refreshAbility(this)}takeDamage(t,e,i=!1,n="ar"){if(!this.alive||t<=0)return!1;let a=t;if(this.evadeT>0&&(a*=.65),this.lastDamage=0,this.overshield>0){const r=Math.min(this.overshield,a);this.overshield-=r,a-=r}return this.health-=a,Qt.damage(),this.game.onPlayerDamaged(e,a,i),this.health<=0?(this.die(e,n,i),!0):!1}die(t,e,i){this.alive&&(this.alive=!1,this.health=0,this.deaths+=1,this.streak=0,this.deadT=4.2,this.viewGroup.visible=!1,this.reloading=!1,this.sprinting=!1,this.adsT=0,this.game.onPlayerDeath(t,e,i))}respawn(t,e){this.spawn(t,e),this.game.hud?.refreshAll(this)}getHitCapsule(){return{a:new P(this.pos.x,this.pos.y+.55,this.pos.z),b:new P(this.pos.x,this.pos.y+1.42,this.pos.z),head:new P(this.pos.x,this.pos.y+this.eye-.06,this.pos.z),radius:.36,headRadius:.25}}}class U0{constructor(t,e){this.game=t,this.world=t.world,this.isBot=!0,this.name=e.name,this.team=e.team,this.character=e.character,this.weaponDef=Ce[e.weapon],this.weaponId=e.weapon,this.skill=e.skill??.55,this.maxHealth=this.character.stats.health,this.health=this.maxHealth,this.overshield=0,this.alive=!0,this.radius=.42,this.pos=new P,this.vel=new P,this.yaw=0,this.ammo=this.weaponDef.mag,this.reserve=this.weaponDef.reserve,this.reloadT=0,this.fireCd=0,this.burst=0,this.burstPause=0,this.reaction=0,this.target=null,this.canSee=!1,this.lastSeen=new P,this.hasLastSeen=!1,this.losT=Math.random()*.2,this.roam=null,this.strafe=Math.random()>.5?1:-1,this.strafeT=0,this.stuckT=0,this.lastPos=new P,this.deadT=0,this.kills=0,this.deaths=0,this.damageDealt=0,this.abilityCd=6+Math.random()*20,this.damagers=[],this.flash=Math.random()*6,this.model=Mo(this.character,this.team),this.model.position.copy(this.pos),t.scene.add(this.model),this.nameplate=null,this.team==="blue"&&(this.nameplate=u0(this.name,"#7ee7ff",!0),this.nameplate.scale.set(1.7,.42,1),this.model.add(this.nameplate)),this.ring=new Rt(new Yi(.42,.52,24),new ue({color:this.team==="blue"?5096959:16734797,transparent:!0,opacity:.55,side:Te,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.03,this.model.add(this.ring)}spawn(t,e=0){this.pos.copy(t),this.pos.y=0,this.vel.set(0,0,0),this.yaw=e,this.health=this.maxHealth,this.overshield=0,this.alive=!0,this.ammo=this.weaponDef.mag,this.reserve=this.weaponDef.reserve,this.reloadT=0,this.fireCd=.3+Math.random()*.4,this.reaction=0,this.target=null,this.canSee=!1,this.hasLastSeen=!1,this.roam=null,this.deadT=0,this.model.rotation.set(0,e,0),this.model.position.copy(this.pos),this.model.visible=!0,this.model.position.y=0,this.nameplate&&(this.nameplate.visible=!0),this.ring.visible=!0}update(t,e){if(!this.alive){this.deadT-=t,pa(this.model,e,0,!0),this.model.position.copy(this.pos),this.deadT<=0&&this.game.respawnBot(this);return}this.fireCd-=t,this.reaction-=t,this.strafeT-=t,this.losT-=t,this.abilityCd-=t,this.damagers=this.damagers.filter(p=>(p.t+=t,p.t<5)),this.health<this.maxHealth&&!this.target&&(this.health=Math.min(this.maxHealth,this.health+t*9)),this.losT<=0&&(this.losT=.18+Math.random()*.1,this.updatePerception());let i=0,n=0,a=4.6*this.character.stats.speed;this.rushT>0&&(a*=1.3);let r=!1;if(this.target&&this.canSee){const p=this.pos.distanceTo(this.target.pos),v=this.weaponDef,g=v.id==="shotgun"?5:v.id==="smg"?9:v.id==="sniper"?32:v.id==="lmg"?17:v.id==="dmr"?24:v.id==="pistol"?10:15,m=this.target.pos.x-this.pos.x,_=this.target.pos.z-this.pos.z;this.yaw=Math.atan2(-m,-_);const E=m/(p||1),y=_/(p||1);let T=0;p>g*1.35?T=1:p<g*.62&&(T=-1),this.strafeT<=0&&(this.strafeT=.8+Math.random()*1.4,this.strafe=Math.random()>.5?1:-1);const w=p<25?.85:.35;i=E*T+-y*this.strafe*w,n=y*T+E*this.strafe*w,a*=this.weaponDef.id==="sniper"||this.weaponDef.id==="lmg"?.72:1,p<4&&(a*=.7),r=!0}else if(this.hasLastSeen){const p=this.lastSeen.x-this.pos.x,v=this.lastSeen.z-this.pos.z,g=Math.hypot(p,v);g<2.5?this.hasLastSeen=!1:(i=p/g,n=v/g),this.yaw=Math.atan2(-p,-v),a*=.9}else{if(!this.roam||Math.hypot(this.roam.x-this.pos.x,this.roam.z-this.pos.z)<2.5||this.stuckT>1.1){const p=this.world.nav.filter(v=>this.team==="blue"?v.z<25:v.z>-25);this.roam=p[Math.random()*p.length|0]||this.world.randomNav(),this.stuckT=0}if(this.roam){const p=this.roam.x-this.pos.x,v=this.roam.z-this.pos.z,g=Math.hypot(p,v)||1;i=p/g,n=v/g,this.yaw=Math.atan2(-p,-v)}a*=.78}for(const p of this.game.bots){if(p===this||!p.alive)continue;const v=this.pos.x-p.pos.x,g=this.pos.z-p.pos.z,m=v*v+g*g;if(m<2.4&&m>.001){const _=Math.sqrt(m);i+=v/_*(1.5-_)*.7,n+=g/_*(1.5-_)*.7}}const o=Math.hypot(i,n);o>1&&(i/=o,n/=o);const c=i*a,l=n*a;this.vel.x+=(c-this.vel.x)*Math.min(1,t*9),this.vel.z+=(l-this.vel.z)*Math.min(1,t*9);const u=this.pos.x,f=this.pos.z;this.world.moveCircle(this.pos,this.radius,this.vel.x*t,this.vel.z*t),Math.hypot(this.pos.x-u,this.pos.z-f)<.001&&o>.1?this.stuckT+=t*2.4:this.stuckT=Math.max(0,this.stuckT-t),r&&this.canSee&&this.updateFire(t),this.abilityCd<=0&&this.health<this.maxHealth*.4&&(this.abilityCd=26+Math.random()*10,this.character.id==="bastion"&&(this.overshield=45,this.overShieldT=4),this.character.id==="wraith"&&(this.evadeT=3),this.character.id==="vanguard"&&(this.rushT=3)),this.overshield>0&&(this.overShieldT-=t,this.overShieldT<=0&&(this.overshield=0)),this.rushT=Math.max(0,(this.rushT||0)-t),this.evadeT=Math.max(0,(this.evadeT||0)-t);const h=Math.hypot(this.vel.x,this.vel.z);if(pa(this.model,e,h,!1),this.model.position.set(this.pos.x,0,this.pos.z),this.model.rotation.y=this.yaw,this.flash=Math.max(0,this.flash-t),this.ring&&(this.ring.material.opacity=.4+Math.sin(e*3+this.flash)*.08),this.nameplate){const p=this.game.camera.position.distanceTo(this.model.position);this.nameplate.visible=p<42}}updatePerception(){let t=null,e=1/0;for(const i of this.game.getCombatants()){if(!i.alive||i===this||i.team===this.team)continue;i.getHitCapsule();const n=new P(this.pos.x,this.pos.y+1.55,this.pos.z),a=new P(i.pos.x,i.pos.y+1.15,i.pos.z),r=n.distanceTo(a);if(r>75)continue;const o=this.world.los(n,a);let c=r;i===this.target&&(c*=.65),o&&(c*=.6),c<e&&(e=c,t={other:i,visible:o,chest:a})}if(t){const i=this.target!==t.other;this.target=t.other,this.canSee=t.visible,t.visible&&(i&&(this.reaction=Math.max(.12,.38-this.skill*.24)),this.lastSeen.copy(t.other.pos),this.hasLastSeen=!0)}else this.target=null,this.canSee=!1}updateFire(t){if(!this.target||!this.target.alive)return;if(this.reloadT>0){this.reloadT-=t,this.reloadT<=0&&(this.ammo=this.weaponDef.mag,this.reserve-=this.weaponDef.mag);return}if(this.ammo<=0){this.reloadT=this.weaponDef.reload*(.95+Math.random()*.2),this.ammo=0;return}if(this.reaction>0||this.burstPause>0){this.burstPause-=t;return}if(this.fireCd>0)return;const e=this.target.pos,i=new P(this.pos.x,this.pos.y+1.5,this.pos.z),n=new P(this.pos.x-Math.sin(this.yaw)*.55,this.pos.y+1.3,this.pos.z-Math.cos(this.yaw)*.55),r=new P(e.x+(Math.random()-.5)*.5,e.y+(Math.random()>.82?1.55:1.05),e.z+(Math.random()-.5)*.5).sub(n).normalize(),o=i.distanceTo(new P(e.x,e.y+1.2,e.z)),c=Math.hypot(this.vel.x,this.vel.z)/5;let l=(1.15-this.skill)*.07+c*.022+Math.max(0,o-30)*7e-4;this.target.isPlayer&&this.target.evadeT>0&&(l*=2.2),this.target.isPlayer&&this.target.crouching&&(l*=.88);const u=l,f=this.weaponDef.pellets;for(let m=0;m<f;m++){const _=r.clone();_.x+=(Math.random()-.5)*u*2,_.y+=(Math.random()-.5)*u*2,_.z+=(Math.random()-.5)*u*2,_.normalize(),this.game.combat.hitscan(this,n,_,this.weaponDef,{muzzle:n,damageScale:.72,tracer:!0})}this.ammo-=1,this.fireCd=60/this.weaponDef.rpm,this.damageDealt+=this.weaponDef.damage*.72,this.flash=.1,this.burst+=1;const d=this.weaponDef.auto?5+(Math.random()*5|0):1;this.burst>=d&&(this.burst=0,this.burstPause=this.weaponDef.auto?.28+Math.random()*.5:.12,this.reaction=Math.max(this.reaction,.06));const h=new P().subVectors(this.pos,this.game.camera.position),p=new P(1,0,0).applyEuler(this.game.camera.rotation),v=Math.max(-1,Math.min(1,h.dot(p)/18)),g=h.length();g<70&&Qt.shoot(this.weaponId,v,g),this.muzzleFlashFx(n,r)}muzzleFlashFx(t,e){const i=t.clone().addScaledVector(e,.2);this.game.fx.impact(i,null,16760944,!1)}takeDamage(t,e,i=!1,n="ar"){if(!this.alive)return!1;let a=t;if(this.evadeT>0&&(a*=.65),this.overshield>0){const r=Math.min(this.overshield,a);this.overshield-=r,a-=r}if(this.health-=a,this.flash=.12,e&&e!==this){const r=this.damagers.find(o=>o.id===e.id);r?r.t=0:this.damagers.push({id:e.id,attacker:e,t:0}),this.damagers.length>6&&this.damagers.shift()}return this.health<=0?(this.die(e,n,i),!0):!1}die(t,e,i){this.alive&&(this.alive=!1,this.health=0,this.deadT=4.2,this.deaths+=1,this.model.visible=!0,this.nameplate&&(this.nameplate.visible=!1),this.ring&&(this.ring.visible=!1),this.game.onBotKilled(this,t,e,i))}getHitCapsule(){return{a:new P(this.pos.x,this.pos.y+.55,this.pos.z),b:new P(this.pos.x,this.pos.y+1.42,this.pos.z),head:new P(this.pos.x,this.pos.y+1.72,this.pos.z),radius:.38,headRadius:.24}}dispose(){this.game.scene.remove(this.model),this.nameplate?.material?.map&&this.nameplate.material.map.dispose(),this.nameplate?.material&&this.nameplate.material.dispose(),this.ring?.geometry&&this.ring.geometry.dispose(),this.ring?.material&&this.ring.material.dispose()}}function F0(s){const t=s.botNames,e=new Set,i=()=>{let c=t[Math.random()*t.length|0],l=0;for(;e.has(c)&&l++<40;)c=t[Math.random()*t.length|0];return e.add(c),c},n=cn,a=()=>n[Math.random()*n.length|0],r=["ar","smg","shotgun","sniper","lmg","dmr"],o=[];for(let c=0;c<4;c++)o.push({name:i(),team:"blue",character:a(),weapon:r[Math.random()*r.length|0],skill:.46+Math.random()*.24});for(let c=0;c<5;c++)o.push({name:i(),team:"red",character:a(),weapon:r[Math.random()*r.length|0],skill:.48+Math.random()*.24});return o}const O0=50,B0=360;function k0(s){const t=s.slice();for(let e=t.length-1;e>0;e--){const i=Math.random()*(e+1)|0;[t[e],t[i]]=[t[i],t[e]]}return t}class z0{constructor(t,e){this.app=t,this.profile=t.profile,this.ui=t.ui,this.hud=t.hud,this.input=t.input,this.isTouch=t.input.touch,this.mapDef=fa[e]||fa.harbor,this.baseFov=this.profile.settings?.fov??78,this.scene=new oo,this.camera=new ze(this.baseFov,t.aspect,.05,260),this.camera.rotation.order="YXZ",this.scene.add(this.camera),this.world=new A0(this.scene,this.mapDef),this.fx=new I0(this.scene,this.camera),this.combat=new D0(this),this.botNames=k0(kc).map(i=>i),this.bots=[],this.score={blue:0,red:0},this.timeLeft=B0,this.target=O0,this.phase="countdown",this.countdown=3.4,this.countShown=0,this.revealT=0,this.elapsed=0,this.hudTimer=0,this.assistToast=0,this.paused=!1,this.ended=!1,this.player=null,this.startMatch()}startMatch(){const t=this.app,e={};for(const l of cs){const u=this.profile.equipped?.[l];u&&is[u]&&this.profile.ownedSkins.includes(u)&&(e[l]=u)}const i=Pi[this.profile.character]?this.profile.character:"vanguard",n=this.profile.primary in cs&&this.profile.primary!=="pistol"?this.profile.primary:"ar";this.player=new N0(this,i,n,"pistol",e);const a=this.world.spawns.blue[4]||new P(0,0,36),r=a.z>0?0:Math.PI;this.player.spawn(a,r);const o=F0(this),c={blue:0,red:0};for(const l of o){const u=new U0(this,l),f=c[l.team]++,d=this.world.spawns[l.team],h=d[f%d.length];u.spawn(h,h.z>0?0:Math.PI),u.id=`${l.team}-${l.name}-${f}`,this.bots.push(u)}this.player.id="player",this.hud.show(this),this.hud.refreshAll(this.player),this.hud.updateMatch(this),this.hud.showCountdown(3),t.setScene(this.scene,this.camera)}getCombatants(){const t=[];this.player?.alive&&t.push(this.player);for(const e of this.bots)e.alive&&t.push(e);return t}getEnemiesOf(t){return this.getCombatants().filter(e=>e.team!==t)}respawnPlayer(){const t=this.bots.filter(n=>n.team==="red"&&n.alive).map(n=>n.pos),e=this.world.spawnPoint("blue",t),i=e.z>0?0:Math.PI;this.player.respawn(e,i),this.hud.hideDeath(),this.hud.refreshAll(this.player),Qt.ability()}respawnBot(t){if(this.phase==="ended")return;const e=this.getCombatants().filter(n=>n.team!==t.team).map(n=>n.pos),i=this.world.spawnPoint(t.team,e);t.spawn(i,i.z>0?0:Math.PI)}onPlayerDamaged(t,e,i){t&&this.hud.damageFrom(t.pos,e,i)}onPlayerDeath(t,e,i){this.phase==="live"&&(this.score.red+=1,this.hud.killfeed({killer:t?.name||"BOT",victim:"SEN",killerTeam:"red",victimTeam:"blue",weapon:e,headshot:i,playerVictim:!0}),this.hud.showDeath(t?.name||"BİLİNMEYEN",e,i,this.player.deadT),this.hud.updateMatch(this),this.checkEnd())}onBotKilled(t,e,i,n){if(this.phase==="live"&&e){this.score[e.team]+=1;for(const a of t.damagers||[])a.attacker!==e&&a.attacker?.isPlayer&&(this.player.assists+=1,this.hud.assistToast());e.isPlayer?(this.player.kills+=1,this.player.streak+=1,n&&(this.player.headshots+=1),Qt.hit(!0),this.hud.killPopup(t.name,n,this.player.streak),this.hud.scoreFlash("blue")):(e.kills=(e.kills||0)+1,this.hud.scoreFlash("red")),t.team==="blue"&&t.isPlayer,this.hud.killfeed({killer:e.name,victim:t.name,killerTeam:e.team,victimTeam:t.team,weapon:i,headshot:n,playerKill:e.isPlayer}),this.hud.updateMatch(this),this.checkEnd()}}checkEnd(){this.phase==="live"&&(this.score.blue>=this.target||this.score.red>=this.target)&&this.endMatch("score")}endMatch(t){if(this.ended)return;this.ended=!0,this.phase="ended",this.input.setEnabled(!1),this.input.exitLock(),Qt.stopAmbient?.();const e=this.score.blue>this.score.red,i=this.score.blue===this.score.red,n=Math.max(0,...this.bots.map(p=>p.kills||0)),a=this.player.kills>0&&this.player.kills>=n,r=this.player.kills,o=this.player.assists,c=120+r*24+o*12+(e?220:i?110:70)+(a?120:0)+Math.floor(this.player.damageDealt/90),l=160+r*45+o*18+(e?260:90)+(a?120:0),u=this.profile,f=u.level;u.credits+=c,u.stats.kills+=r,u.stats.deaths+=this.player.deaths,u.stats.matches+=1,u.stats.damage+=Math.round(this.player.damageDealt),u.stats.bestStreak=Math.max(u.stats.bestStreak,this.player.streak),e&&(u.stats.wins+=1);const d=m0(u,l);vi(u);const h={win:e,draw:i,mvp:a,reason:t,score:{...this.score},target:this.target,player:{kills:r,deaths:this.player.deaths,assists:o,headshots:this.player.headshots,damage:Math.round(this.player.damageDealt),streak:this.player.streak,accuracy:this.player.shots?Math.round(this.player.hits/this.player.shots*100):0},credits:c,xp:l,levelUps:d,levelBefore:f,map:this.mapDef,allies:this.bots.filter(p=>p.team==="blue").map(p=>({name:p.name,kills:p.kills||0,deaths:p.deaths})),enemies:this.bots.filter(p=>p.team==="red").map(p=>({name:p.name,kills:p.kills||0,deaths:p.deaths})),mvpName:a?"SEN":this.bots.slice().sort((p,v)=>(v.kills||0)-(p.kills||0))[0]?.name||"—"};Qt.victory(e),this.app.onMatchEnd(h,this)}aimAssist(t,e){if(!this.isTouch)return e;let i=null,n=Math.cos(7*Math.PI/180);for(const a of this.bots){if(!a.alive||a.team==="blue")continue;const o=new P(a.pos.x,a.pos.y+1.2,a.pos.z).sub(t),c=o.length();if(c>60)continue;o.divideScalar(c);const l=o.dot(e);l>n&&(n=l,i=o)}return i&&e.lerp(i,.35).normalize(),e}update(t){if(this.paused||this.ended){this.fx.update(t);return}if(this.elapsed+=t,this.phase==="countdown"){this.countdown-=t,this.player.updateCamera(0),this.world.update(t,this.elapsed),this.fx.update(t);const e=Math.ceil(this.countdown);e!==this.countShown&&e>0&&(this.countShown=e,this.hud.showCountdown(e)),this.countdown<=0&&(this.phase="live",this.hud.hideCountdown(),this.hud.matchLive(this.mapDef),Qt.ui("buy"));return}if(this.phase==="live"){if(this.timeLeft-=t,this.timeLeft<=0){this.timeLeft=0,this.endMatch("time");return}this.revealT=Math.max(0,this.revealT-t),this.player.update(t),!this.player.alive&&this.player.deadT<=0&&this.respawnPlayer();for(const e of this.bots)e.update(t,this.elapsed);this.world.update(t,this.elapsed),this.fx.update(t),this.hudTimer-=t,this.hud.updateMinimap(this),this.hudTimer<=0&&(this.hudTimer=.1,this.hud.updateMatch(this)),this.player.alive||this.hud.updateDeathTimer(this.player.deadT)}}pause(){this.paused=!0}resume(){this.paused=!1}dispose(){for(const t of this.bots)t.dispose();this.bots=[],this.hud.hide(),Qt.stopAmbient?.(),this.scene.traverse(t=>{t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>{i.map?.dispose&&i.map.dispose(),i.dispose?.()}),t.geometry&&t.geometry.dispose?.()}),this.scene.clear()}}class Gl{constructor(t){this.canvas=t,this.renderer=new Bc({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.toneMapping=va,this.renderer.toneMappingExposure=1.05,this.scene=new oo,this.camera=new ze(34,1,.05,50),this.scene.add(new go(11196654,658962,.9));const e=new zn(16769216,2.4);e.position.set(-3,4,5),this.scene.add(e);const i=new zn(4777682,2.2);i.position.set(4,2,-4),this.scene.add(i);const n=new $e(16739116,14,14,2);n.position.set(-3,.8,2),this.scene.add(n),this.camera.position.set(0,.2,3.4),this.camera.lookAt(0,.05,0),this.obj=null,this.mode=null,this.t=0,this.targetRot=0,this.currentRot=0,this.visible=!1,this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize()}resize(){const t=this.canvas.getBoundingClientRect(),e=Math.max(1,Math.floor(t.width)),i=Math.max(1,Math.floor(t.height));this.renderer.setSize(e,i,!1),this.camera.aspect=e/i,this.camera.updateProjectionMatrix()}clear(){this.obj&&(this.scene.remove(this.obj),this.obj.traverse(t=>{t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>i.dispose?.())}),this.obj=null)}setWeapon(t,e){this.clear(),this.mode="weapon";const i=_o(t,e,{hands:!1}),n=new Ue;n.add(i);const a=t==="sniper"?1.26:t==="pistol"?.75:1.05;i.scale.setScalar(1.5/a),i.position.set(0,0,0),i.rotation.set(.06,.55,0),n.position.y=.02,this.scene.add(n),this.obj=n,this.t=0,this.currentRot=-.25,this.targetRot=.18,this.camera.position.set(.5,.42,2.5),this.camera.lookAt(0,.02,0),this.visible=!0,this.renderer.render(this.scene,this.camera)}setCharacter(t,e="blue"){this.clear(),this.mode="character";const i=Pi[t]||Pi.vanguard,n=Mo(i,e);n.scale.setScalar(1.15);const a=new Ue;a.add(n);const r=new Rt(new Ji(.9,1,.12,48),new ci({color:1120285,roughness:.3,metalness:.8}));r.position.y=-.06,a.add(r);const o=new Rt(new Ki(.92,.012,6,64),new ue({color:4777682}));o.rotation.x=Math.PI/2,o.position.y=.01,a.add(o),this.scene.add(a),this.obj=a,this.t=0,this.currentRot=0,this.targetRot=.12,this.camera.position.set(0,1.45,4.35),this.camera.lookAt(0,1.05,0),this.visible=!0,this.renderer.render(this.scene,this.camera)}update(t){if(!(!this.visible||!this.obj)){if(this.t+=t,this.currentRot+=(this.targetRot-this.currentRot)*Math.min(1,t*2),this.mode==="weapon")this.obj.rotation.y=Math.sin(this.t*.45)*.32+.2,this.obj.rotation.x=Math.sin(this.t*.3)*.025,this.obj.position.y=.02+Math.sin(this.t*.7)*.012,this.camera.position.x=.5+Math.sin(this.t*.22)*.18,this.camera.lookAt(0,.02,0);else{this.obj.rotation.y=Math.sin(this.t*.35)*.22;const e=this.obj.children[0];e&&pa(e,this.t,.1,!1)}this.renderer.render(this.scene,this.camera)}}dispose(){this.ro.disconnect(),this.clear(),this.renderer.dispose()}}const Xt=(s,t=document)=>t.querySelector(s),Ln=(s,t=document)=>[...t.querySelectorAll(s)];function H0(s){let t=s;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function G0(s,t){const e=H0(71+t*1301),[i,n]=s.palette.css,a=[];for(let o=0;o<9;o++){const c=30+e()*110,l=30+e()*80,u=18+e()*46,f=12+e()*30,d=.05+e()*.08;a.push(`<rect x="${c.toFixed(1)}" y="${l.toFixed(1)}" width="${u.toFixed(1)}" height="${f.toFixed(1)}" fill="rgba(255,255,255,${d.toFixed(2)})" stroke="rgba(255,255,255,0.16)" stroke-width=".8"/>`),a.push(`<rect x="${(300-c-u).toFixed(1)}" y="${(200-l-f).toFixed(1)}" width="${u.toFixed(1)}" height="${f.toFixed(1)}" fill="rgba(255,255,255,${(d*.8).toFixed(2)})" stroke="rgba(255,255,255,0.12)" stroke-width=".8"/>`)}const r=[];for(let o=0;o<4;o++){const c=30+o*45;r.push(`<line x1="0" y1="${c}" x2="300" y2="${c}" stroke="${n}" stroke-opacity="0.07" stroke-width="1"/>`),r.push(`<line x1="${o*75}" y1="0" x2="${o*75}" y2="200" stroke="${n}" stroke-opacity="0.07" stroke-width="1"/>`)}return`<svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g${s.id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${i}"/><stop offset="0.7" stop-color="${i}"/><stop offset="1" stop-color="${n}" stop-opacity=".42"/>
      </linearGradient>
      <radialGradient id="r${s.id}" cx=".5" cy=".5" r=".6">
        <stop offset="0" stop-color="${n}" stop-opacity=".24"/><stop offset="1" stop-color="${n}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="200" fill="url(#g${s.id})"/>
    <rect width="300" height="200" fill="url(#r${s.id})"/>
    ${r.join("")}
    ${a.join("")}
    <circle cx="150" cy="100" r="26" fill="none" stroke="${n}" stroke-opacity=".5" stroke-width="1.4" stroke-dasharray="4 4"/>
    <circle cx="150" cy="100" r="5" fill="${n}" fill-opacity=".7"/>
    <path d="M150 88 L158 100 L150 112 L142 100 Z" fill="none" stroke="${n}" stroke-opacity=".8"/>
    <text x="14" y="190" fill="${n}" fill-opacity=".55" font-family="Teko, sans-serif" font-size="15" letter-spacing="3">${s.code}</text>
  </svg>`}function V0(s,t,e=""){const i=t||{accent:"#9aa7b8",base:"#333a42"},n=i.accent,a=i.base,r={ar:`<rect x="48" y="36" width="86" height="14" rx="1.5" fill="${n}"/><rect x="128" y="39" width="38" height="5" fill="${n}" opacity=".8"/><rect x="74" y="50" width="12" height="17" transform="rotate(12 80 58)" fill="${a}"/><rect x="38" y="35" width="16" height="18" rx="2" fill="${a}"/><rect x="58" y="28" width="24" height="8" rx="1" fill="${a}"/><rect x="88" y="30" width="18" height="6" fill="${a}"/><rect x="84" y="50" width="7" height="12" transform="rotate(-14 87 56)" fill="${a}"/>`,smg:`<rect x="62" y="37" width="62" height="13" rx="1.5" fill="${n}"/><rect x="120" y="40" width="26" height="4" fill="${n}" opacity=".8"/><rect x="82" y="50" width="10" height="17" transform="rotate(10 87 58)" fill="${a}"/><rect x="52" y="36" width="14" height="16" rx="2" fill="${a}"/><rect x="74" y="28" width="26" height="7" rx="1" fill="${a}"/>`,shotgun:`<rect x="40" y="36" width="106" height="11" rx="1.5" fill="${n}"/><rect x="142" y="38" width="30" height="6" fill="${n}" opacity=".8"/><rect x="66" y="46" width="36" height="8" rx="3" fill="${a}"/><rect x="38" y="34" width="22" height="16" rx="2" fill="${a}"/><rect x="86" y="49" width="7" height="10" transform="rotate(-18 89 54)" fill="${a}"/>`,sniper:`<rect x="34" y="38" width="118" height="9" rx="1" fill="${n}"/><rect x="148" y="39" width="32" height="4" fill="${n}" opacity=".8"/><rect x="74" y="27" width="40" height="8" rx="3" fill="${a}"/><circle cx="94" cy="31" r="5.5" fill="${a}" stroke="${n}" stroke-width="1.4"/><rect x="26" y="34" width="18" height="18" rx="2" fill="${a}"/><rect x="94" y="46" width="7" height="11" transform="rotate(-18 97 51)" fill="${a}"/>`,lmg:`<rect x="46" y="34" width="98" height="17" rx="2" fill="${n}"/><rect x="140" y="38" width="34" height="6" fill="${n}" opacity=".8"/><rect x="72" y="51" width="28" height="22" rx="2" fill="${a}"/><rect x="34" y="32" width="18" height="20" rx="2" fill="${a}"/><rect x="62" y="52" width="7" height="12" transform="rotate(-14 65 58)" fill="${a}"/><rect x="102" y="24" width="22" height="8" fill="${a}"/>`,dmr:`<rect x="42" y="37" width="106" height="10" rx="1.5" fill="${n}"/><rect x="144" y="39" width="28" height="4" fill="${n}" opacity=".8"/><rect x="80" y="27" width="30" height="7" rx="2" fill="${a}"/><rect x="92" y="21" width="8" height="9" fill="${n}" opacity=".7"/><rect x="34" y="34" width="18" height="18" rx="2" fill="${a}"/><rect x="84" y="47" width="8" height="14" transform="rotate(10 88 54)" fill="${a}"/>`,pistol:`<rect x="76" y="34" width="54" height="13" rx="2" fill="${n}"/><rect x="128" y="37" width="18" height="5" fill="${n}" opacity=".8"/><rect x="80" y="45" width="15" height="24" rx="2" transform="rotate(8 87 57)" fill="${a}"/><rect x="76" y="30" width="48" height="5" fill="${a}"/>`};return`<svg viewBox="0 0 200 82" class="${e}" xmlns="http://www.w3.org/2000/svg">${r[s]||r.ar}</svg>`}const W0=[["menu","ANA MENÜ"],["maps","MAÇ BUL"],["operators","OPERATÖRLER"],["market","MARKET"],["weapons","CEPHANE"]];function jn(s){return`<header class="topbar">
    <div class="logo" data-nav="menu">
      <div class="logo-mark"></div>
      <div class="logo-text">IRON<small>PROTOCOL</small></div>
    </div>
    <nav class="nav">
      ${W0.map(([t,e])=>`<button data-nav="${t}" class="${s===t?"active":""}">${t==="maps"?'<span class="dot"></span>':""}${e}</button>`).join("")}
    </nav>
    <div class="topbar-right">
      <div class="chip level-chip"><div class="level-badge" data-ref="level">1</div><div><span class="label">SEVİYE</span><span class="val" data-ref="rank">ÇIRAK</span></div></div>
      <div class="chip"><span class="icon">◈</span><div><span class="label">KREDİ</span><span class="val" data-ref="credits">2.400</span></div></div>
      <button class="settings-btn" data-action="settings" title="Ayarlar">⚙</button>
    </div>
  </header>`}class X0{constructor(t){this.app=t,this.root=document.getElementById("ui"),this.current=null,this.selectedMap="harbor",this.marketCat="ar",this.selectedSkinId=null,this.selectedCharId=t.profile.character,this.previewOps=null,this.previewMarket=null,this.mmTimer=null,this.build(),this.bind(),this.refreshChrome()}get profile(){return this.app.profile}build(){const t=Pi[this.profile.character]||cn[0];this.root.innerHTML=`
      <div class="screen" id="screen-menu">
        ${jn("menu")}
        <div class="menu-wrap">
          <div class="menu-gradient"></div>
          <div class="menu-badge"><span class="pulse"></span> ÇEVRİMİÇİ · 8.428 OYUNCU</div>
          <div class="hero">
            <div class="eyebrow">SEZON 01 <span>//</span> <span class="live">● CANLI</span> <span>//</span> 5v5 TAKIM ÖLÜMÜ</div>
            <h1>IRON<span class="line2">PROTOCOL</span></h1>
            <p class="sub"><b>10 harita. 4 operatör. 7 dengeli silah.</b><br>Her maç kredi kazan, envanterini büyüt, savaş alanına kendi stilini taşı.</p>
            <div class="hero-actions">
              <button class="btn primary big" data-action="quick">HIZLI MAÇ <span>▶</span></button>
              <button class="btn ghost big" data-nav="maps">HARİTA SEÇ</button>
            </div>
            <div class="hero-meta">
              <div class="m">AKTİF HARİTA<b>10 <span>/ 10</span></b></div>
              <div class="m">SUNUCU GECİKMESİ<b>24 <span>MS</span></b></div>
              <div class="m">SEZON GÖREVİ<b>3 <span>/ 5</span></b></div>
              <div class="m">KAZANILAN KREDİ<b data-ref="totalcredits">2.400</b></div>
            </div>
          </div>
          <aside class="menu-side">
            <div class="panel op-card">
              <div class="op-head">
                <div>
                  <div class="op-role" data-ref="op-role">${t.title}</div>
                  <div class="op-name" data-ref="op-name">${t.name}</div>
                </div>
                <div class="tag-balanced">AKTİF</div>
              </div>
              <div class="op-ability"><b>YETENEK · ${t.ability.name}</b>${t.ability.desc}</div>
              <div class="op-stats">
                <div>CAN<b data-ref="op-hp">${t.stats.health}</b></div>
                <div>HIZ<b data-ref="op-spd">${t.stats.speed.toFixed(2)}x</b></div>
                <div>ADS<b data-ref="op-ads">${t.stats.ads.toFixed(2)}x</b></div>
              </div>
              <button class="btn small" style="width:100%;margin-top:14px" data-nav="operators">OPERATÖRÜ DEĞİŞTİR</button>
            </div>
          </aside>
          <div class="menu-footer"><span>IRON PROTOCOL · SEZON 01</span><span class="bar"></span><span>5v5 TAKIM ÖLÜMÜ · 50 ÖLDÜRME</span></div>
        </div>
      </div>

      <div class="screen" id="screen-maps">
        ${jn("maps")}
        <div class="screen-scroll" style="padding-bottom:0">
          <div class="page-head">
            <div class="page-title"><small>HARİTA HAVUZU · 10 SAHA</small>SAVAŞ ALANI</div>
            <div class="page-desc">Her harita farklı bir ritim. Yakın menzil sokaklarından uzun koridorlara kadar her oynanış stiline uygun bir saha var.</div>
            <div class="spacer"></div>
            <div class="chip" style="padding:10px 14px"><span class="icon">◎</span><div><span class="label">SEÇİLİ HARİTA</span><span class="val" data-ref="sel-map">SANCAK LİMANI</span></div></div>
          </div>
          <div class="maps-grid" id="maps-grid"></div>
        </div>
        <div class="maps-bar panel">
          <div class="sel-name" data-ref="sel-name">SANCAK LİMANI</div>
          <div class="sel-desc" data-ref="sel-desc"></div>
          <div class="spacer"></div>
          <button class="btn primary" data-action="start-map">MAÇA BAŞLA ▶</button>
        </div>
      </div>

      <div class="screen" id="screen-operators">
        ${jn("operators")}
        <div class="screen-scroll" style="padding-bottom:0">
          <div class="page-head">
            <div class="page-title"><small>4 OPERATÖR · DENGELİ YETENEKLER</small>OPERATÖRLER</div>
            <div class="page-desc">Her operatörün net bir gücü ve dengeli bir zayıflığı var. Kazanan tarafı belirleyen yetenek değil, takım oyunu.</div>
            <div class="spacer"></div>
            <button class="btn small" data-nav="weapons">SİLAH DENGESİ →</button>
          </div>
          <div class="ops-layout">
            <div class="ops-preview panel">
              <canvas id="op-preview-canvas"></canvas>
              <div class="preview-label"><div class="kicker">OPERATÖR PROFİLİ</div></div>
              <div class="preview-name"><h3 data-ref="char-name">KARTAL</h3><p data-ref="char-title">HÜCUM PİYADESİ</p></div>
              <div class="ability-card panel">
                <div class="kicker" data-ref="char-abil-key">YETENEK · Q</div>
                <div class="ab-name" data-ref="char-abil">HÜCUM</div>
                <p data-ref="char-abil-desc"></p>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:10px;overflow:hidden">
              <div class="ops-list" id="ops-list"></div>
              <div class="panel op-detail" style="padding:14px" id="op-detail"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="screen" id="screen-market">
        ${jn("market")}
        <div class="screen-scroll" style="padding-bottom:0">
          <div class="page-head">
            <div class="page-title"><small>KOZMETİK ENVANTER · SADECE GÖRÜNÜM</small>MARKET</div>
            <div class="page-desc">Maçlardan kazandığın kredilerle silahlarına görünüm kazandır. Skinler oynanışı değiştirmez; denge her zaman aynı kalır.</div>
            <div class="spacer"></div>
            <div class="credits-big"><span>◈</span><span data-ref="market-credits">2.400</span><small>KREDİ</small></div>
          </div>
          <div class="market-layout">
            <div class="market-cats" id="market-cats"></div>
            <div class="skin-grid" id="skin-grid"></div>
            <div class="market-preview panel">
              <div class="pv-canvas-wrap"><canvas id="market-preview-canvas"></canvas>
                <div class="pv-head">
                  <div><div class="kicker" data-ref="pv-rarity">NADİR</div><div class="pv-name" data-ref="pv-name">SKIN</div><div class="pv-weapon" data-ref="pv-weapon">AR-9 VANGUARD</div></div>
                  <div class="tag-balanced" data-ref="pv-owned" style="display:none">SAHİPSİN</div>
                </div>
              </div>
              <div class="pv-foot">
                <div class="pv-price"><span class="lbl">FİYAT</span><span class="amt"><span data-ref="pv-price">650</span> <small>KREDİ</small></span></div>
                <button class="btn primary" style="width:100%" data-action="skin-action" id="skin-action">SATIN AL</button>
                <div style="font-size:8px;letter-spacing:1.3px;color:var(--dim);margin-top:10px;line-height:1.6">KOZMETİK İÇERİK · SİLAH İSTATİSTİKLERİNİ ETKİLEMEZ</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="screen" id="screen-weapons">
        ${jn("weapons")}
        <div class="screen-scroll" style="padding-bottom:0">
          <div class="page-head">
            <div class="page-title"><small>SİLAH DENGESİ · 7 SINIF</small>CEPHANE</div>
            <div class="page-desc">Tüm silahlar amaçlanan menzilde benzer TTK'ya sahip. Her güçlü yön, açık bir zayıflıkla dengelenir. Birincil silahını seç.</div>
            <div class="spacer"></div>
            <div class="tag-balanced" style="padding:8px 12px">DENGELİ TTK · 0.42–0.55 SN</div>
          </div>
          <div class="weapon-table" id="weapon-table"></div>
        </div>
      </div>

      <div id="matchmaking">
        <div class="mm-radar"><div class="sweep"></div></div>
        <div class="mm-wrap">
          <div class="mm-left">
            <div class="kicker">ÇEVRİMİÇİ EŞLEŞTİRME · TAKIM ÖLÜMÜ</div>
            <div class="mm-title">SUNUCU<br>ARANIYOR</div>
            <div class="mm-map" data-ref="mm-map">SANCAK LİMANI</div>
            <div class="mm-sub" data-ref="mm-sub">EU-WEST-01 · 5v5 · 50 ÖLDÜRME</div>
            <div class="mm-status"><span class="loading"></span><span data-ref="mm-status">Uygun sunucu taranıyor…</span></div>
            <div class="mm-deploy" id="mm-deploy"><button class="btn primary big" data-action="deploy">SAVAŞA KATIL ▶</button></div>
            <div style="margin-top:16px;font-size:9px;letter-spacing:1.6px;color:var(--dim)">TAKIMINDA 4 OPERATÖR SENİ BEKLİYOR · TARAYICI TEST SUNUCUSU</div>
          </div>
          <div class="mm-players" id="mm-players"></div>
        </div>
        <div class="mm-foot"><span>IRON PROTOCOL · SEZON 01</span><span>TAHMINİ BEKLEME: <b style="color:var(--accent-2)">00:06</b></span></div>
      </div>

      <div class="screen" id="postmatch">
        <div class="pm-wrap">
          <div class="pm-result">
            <div class="kicker">MAÇ SONUCU · <span data-ref="pm-map">SANCAK LİMANI</span></div>
            <h2 class="win" data-ref="pm-title">ZAFER</h2>
            <div class="score"><b data-ref="pm-blue">50</b> — <b data-ref="pm-red">37</b> <span style="font-size:10px;letter-spacing:2px;color:var(--dim)">TAKIM SKORU</span></div>
            <div class="mvp-tag" data-ref="pm-mvp">★ MAÇIN OYUNCUSU</div>
          </div>
          <div class="pm-panel">
            <div class="panel pm-block">
              <h4>PERFORMANS</h4>
              <div class="pm-stats">
                <div class="pm-stat"><div class="v" data-ref="pm-kills">0</div><div class="l">ÖLDÜRME</div></div>
                <div class="pm-stat"><div class="v" data-ref="pm-deaths">0</div><div class="l">ÖLÜM</div></div>
                <div class="pm-stat"><div class="v" data-ref="pm-assists">0</div><div class="l">ASİST</div></div>
                <div class="pm-stat"><div class="v" data-ref="pm-damage">0</div><div class="l">HASAR</div></div>
                <div class="pm-stat"><div class="v" data-ref="pm-hs">0</div><div class="l">KAFA VURUŞU</div></div>
                <div class="pm-stat"><div class="v" data-ref="pm-acc">0%</div><div class="l">İSABET</div></div>
              </div>
            </div>
            <div class="panel pm-block">
              <h4>MAÇ ÖDÜLÜ</h4>
              <div class="pm-rewards">
                <div class="pm-reward-row"><span>Performans ödülü</span><b data-ref="pm-reward-kill">+0</b></div>
                <div class="pm-reward-row"><span>Galibiyet bonusu</span><b data-ref="pm-reward-win">+0</b></div>
                <div class="pm-reward-row"><span>MVP bonusu</span><b data-ref="pm-reward-mvp">+0</b></div>
                <div class="pm-reward-row total"><span>KAZANILAN KREDİ</span><b data-ref="pm-credits">+0</b></div>
                <div class="pm-reward-row xp"><span>TECRÜBE</span><b data-ref="pm-xp">+0 XP</b></div>
              </div>
              <div class="xp-track"><i data-ref="pm-xpbar" style="width:0%"></i></div>
              <div class="pm-level"><span data-ref="pm-level">SEVİYE 1</span><span data-ref="pm-xptext">0 / 700 XP</span></div>
            </div>
          </div>
          <div class="pm-actions">
            <button class="btn primary" data-action="rematch">TEKRAR OYNA</button>
            <button class="btn" data-nav="market">MARKET'E GİT</button>
            <button class="btn ghost" data-action="menu">ANA MENÜ</button>
          </div>
        </div>
      </div>

      <div class="modal pause-menu" id="pause">
        <div class="panel modal-panel">
          <h3>DURAKLATILDI</h3>
          <div class="sub">MAÇ ASKIDA · RAKİPLER BEKLİYOR</div>
          <div class="modal-actions">
            <button class="btn primary" data-action="resume">DEVAM ET</button>
            <button class="btn" data-action="settings">AYARLAR</button>
            <button class="btn danger" data-action="quit-match">MAÇTAN AYRIL</button>
          </div>
        </div>
      </div>

      <div class="modal" id="settings">
        <div class="panel modal-panel">
          <h3>AYARLAR</h3>
          <div class="sub">KONTROL · SES · GÖRÜNTÜ</div>
          <div class="setting-row"><span>Fare hassasiyeti</span><input type="range" min="0.35" max="2.4" step="0.05" data-ref="sens" value="${this.profile.settings.sensitivity}"></div>
          <div class="setting-row"><span>Görüş açısı (FOV)</span><input type="range" min="65" max="100" step="1" data-ref="fov" value="${this.profile.settings.fov}"></div>
          <div class="setting-row"><span>Ses efektleri</span><div class="switch on" data-action="toggle-sound" id="sound-switch"></div></div>
          <div class="setting-row"><span>Görüntü kalitesi</span>
            <select data-ref="quality" style="background:#0c1217;border:1px solid var(--line);color:var(--text);padding:5px 8px;font-family:inherit;font-size:10px">
              <option value="low">DÜŞÜK</option><option value="medium">ORTA</option><option value="high">YÜKSEK</option>
            </select>
          </div>
          <div class="modal-actions">
            <button class="btn primary" data-action="close-settings">KAPAT</button>
            <button class="btn danger" data-action="reset" style="font-size:9px">İLERLEMEYİ SIFIRLA</button>
          </div>
        </div>
      </div>

      <div id="hud-root"></div>
      <div id="toasts"></div>
    `,this.renderMaps(),this.renderOperators(),this.marketCat=this.profile.primary==="pistol"?"ar":this.profile.primary,this.renderMarketCats(),this.renderMarket(),this.renderWeapons(),this.updateSelectionBar()}bind(){this.root.addEventListener("click",t=>{const e=t.target.closest("[data-nav]");if(e){Qt.ui("click"),this.go(e.dataset.nav);return}const i=t.target.closest("[data-action]");if(i){t.preventDefault(),this.handleAction(i.dataset.action,i);return}const n=t.target.closest("[data-map]");if(n){this.selectedMap=n.dataset.map,Qt.ui("click"),this.updateSelectionBar(),this.renderMaps();return}const a=t.target.closest("[data-cat]");if(a){this.marketCat=a.dataset.cat;const c=js.filter(l=>l.weapon===this.marketCat);this.selectedSkinId=(c.find(l=>this.profile.equipped[l.weapon]===l.id)||c[0])?.id,Qt.ui("click"),this.renderMarketCats(),this.renderMarket();return}const r=t.target.closest("[data-skin]");if(r){this.selectedSkinId=r.dataset.skin,Qt.ui("hover"),this.renderMarket();return}const o=t.target.closest("[data-char]");if(o){this.selectedCharId=o.dataset.char,Qt.ui("click"),this.renderOperators();return}}),this.root.addEventListener("input",t=>{t.target.matches("[data-ref=sens]")&&(this.profile.settings.sensitivity=Number(t.target.value),this.app.input.sensitivity=Number(t.target.value),vi(this.profile)),t.target.matches("[data-ref=fov]")&&(this.profile.settings.fov=Number(t.target.value),vi(this.profile),this.app.match?.player&&(this.app.match.baseFov=Number(t.target.value),this.app.match.player.baseFov=Number(t.target.value))),t.target.matches("[data-ref=quality]")&&(this.profile.settings.quality=t.target.value,vi(this.profile),this.app.applyQuality())})}handleAction(t,e){switch(Qt.ui("click"),t){case"quick":{const i=In[Math.random()*In.length|0];this.app.startMatchmaking(i.id);break}case"start-map":this.app.startMatchmaking(this.selectedMap);break;case"deploy":this.app.deployMatch();break;case"settings":this.openSettings();break;case"close-settings":this.closeSettings();break;case"toggle-sound":{const i=!this.profile.settings.sound;this.profile.settings.sound=i,Qt.setEnabled(i),Xt("#sound-switch").classList.toggle("on",i),vi(this.profile);break}case"reset":{window.confirm("Tüm ilerleme, krediler ve skinler sıfırlanacak. Emin misin?")&&(this.app.resetProgress(),this.closeSettings());break}case"select-char":{this.profile.character=this.selectedCharId,vi(this.profile),this.refreshChrome(),this.renderOperators(),this.renderMenuSide(),this.toast(`${Pi[this.selectedCharId].name} aktif operatör olarak seçildi.`,"ok");break}case"skin-action":{const i=is[this.selectedSkinId];if(!i)break;if(this.profile.ownedSkins.includes(i.id))this.profile.equipped[i.weapon]===i.id?this.toast("Bu skin zaten kuşanılı."):(kl(this.profile,i),this.toast(`${i.name} kuşanıldı.`,"ok"));else{const a=g0(this.profile,i);a.ok?(kl(this.profile,i),this.toast(`${i.name} satın alındı ve kuşanıldı.`,"ok"),Qt.ui("buy")):this.toast(a.reason,"err")}this.refreshChrome(),this.renderMarket();break}case"equip-weapon":{const i=e.dataset.weapon;if(i==="pistol")break;this.profile.primary=i,vi(this.profile),this.toast(`${Ce[i].name} birincil silah olarak kuşanıldı.`,"ok"),this.renderWeapons(),this.renderMarketCats(),this.renderMarket();break}case"resume":this.app.resumeMatch();break;case"quit-match":this.app.quitMatch();break;case"menu":this.app.backToMenu();break;case"rematch":this.app.rematch();break}}go(t){if(this.app.match&&!this.app.match.ended&&t!=="menu")return;this.current=t,Ln(".screen",this.root).forEach(i=>i.classList.remove("active"));const e=Xt(`#screen-${t}`);e&&e.classList.add("active"),this.refreshChrome(),t==="menu"&&(this.renderMenuSide(),this.showNav("menu")),t==="maps"&&(this.updateSelectionBar(),this.showNav("maps")),t==="operators"&&(this.showNav("operators"),this.ensureOpsPreview()),t==="market"&&(this.showNav("market"),this.ensureMarketPreview()),t==="weapons"&&(this.showNav("weapons"),this.renderWeapons()),t==="postmatch"&&this.showNav(""),this.app.match?.paused}showNav(t){Ln(".nav button",this.root).forEach(e=>e.classList.toggle("active",e.dataset.nav===t))}refreshChrome(){const t=this.profile,e=Bl(t.level);Ln("[data-ref=level]",this.root).forEach(n=>{n.textContent=t.level}),Ln("[data-ref=rank]",this.root).forEach(n=>{n.textContent=e}),Ln("[data-ref=credits]",this.root).forEach(n=>{n.textContent=t.credits.toLocaleString("tr-TR")}),Ln("[data-ref=totalcredits]",this.root).forEach(n=>{n.textContent=t.credits.toLocaleString("tr-TR")});const i=Xt("[data-ref=market-credits]",this.root);i&&(i.textContent=t.credits.toLocaleString("tr-TR")),this.renderMenuSide()}renderMenuSide(){const t=Pi[this.profile.character]||cn[0],e=(n,a)=>{const r=Xt(`[data-ref=${n}]`,this.root);r&&(r.textContent=a)};e("op-role",t.title),e("op-name",t.name),e("op-hp",t.stats.health),e("op-spd",`${t.stats.speed.toFixed(2)}x`),e("op-ads",`${t.stats.ads.toFixed(2)}x`);const i=Xt(".op-ability",this.root);i&&(i.innerHTML=`<b>YETENEK · ${t.ability.name}</b>${t.ability.desc}`)}renderMaps(){const t=Xt("#maps-grid",this.root);t&&(t.innerHTML=In.map((e,i)=>`
      <div class="map-card ${e.id===this.selectedMap?"selected":""}" data-map="${e.id}">
        <div class="art">${G0(e,i)}</div>
        <div class="shade"></div>
        <div class="tags">${e.tags.map(n=>`<span>${n}</span>`).join("")}</div>
        <div class="check">✓</div>
        <div class="info">
          <div class="nm">${e.name}</div>
          <div class="meta"><span>${e.region}</span><span>${e.time}</span></div>
        </div>
      </div>`).join(""))}updateSelectionBar(){const t=fa[this.selectedMap]||In[0],e=(i,n)=>{const a=Xt(`[data-ref=${i}]`,this.root);a&&(a.textContent=n)};e("sel-map",t.name),e("sel-name",t.name),e("sel-desc",t.desc)}renderOperators(){const t=Xt("#ops-list",this.root);if(!t)return;const e=Pi[this.selectedCharId]||cn[0];t.innerHTML=cn.map(a=>`
      <div class="op-tile ${a.id===this.selectedCharId?"active":""}" data-char="${a.id}">
        ${this.profile.character===a.id?'<div class="equipped">AKTİF</div>':""}
        <div class="codename">${a.name}</div>
        <div class="role">${a.title}</div>
        <div class="tags">${a.tags.map(r=>`<span>${r}</span>`).join("")}${a.id===this.profile.character?'<span style="color:var(--accent);border-color:rgba(255,107,44,.35)">SEÇİLİ</span>':""}</div>
      </div>`).join("");const i=(a,r)=>{const o=Xt(`[data-ref=${a}]`,this.root);o&&(o.textContent=r)};i("char-name",e.name),i("char-title",e.title),i("char-abil-key",`YETENEK · ${e.ability.key} · ${e.ability.cooldown}SN BEKLEME`),i("char-abil",e.ability.name),i("char-abil-desc",`${e.ability.desc} ${e.perk}`);const n=Xt("#op-detail",this.root);if(n){const a=(r,o,c,l="")=>`<div class="stat-row"><span>${r}</span><div class="track"><i style="width:${Math.min(100,o/c*100)}%"></i></div><b>${o}${l}</b></div>`;n.innerHTML=`
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
          <div><div class="kicker">${e.callsign} DOSYASI</div><div style="font-family:Teko;font-size:23px;line-height:1">${e.name}</div></div>
          <button class="btn small ${this.profile.character===e.id?"":"primary"}" data-action="select-char" ${this.profile.character===e.id?"disabled":""}>${this.profile.character===e.id?"AKTİF OPERATÖR":"OPERATÖRÜ SEÇ"}</button>
        </div>
        <p style="font-size:10.5px;line-height:1.55;color:var(--muted);margin-bottom:10px">${e.bio}</p>
        ${a("DAYANIKLILIK",e.stats.health,125)}
        ${a("HAREKET",e.stats.speed,1.12,"x")}
        ${a("NİŞAN HIZI",e.stats.ads,1.2,"x")}
        ${a("ŞARJÖR",e.stats.reload,1.15,"x")}
        <div style="margin-top:9px;padding-top:9px;border-top:1px solid var(--line);font-size:9px;letter-spacing:1px;color:var(--accent-2)">PASİF · ${e.perk}</div>
      `}this.ensureOpsPreview(),this.previewOps&&this.previewOps.setCharacter(e.id)}ensureOpsPreview(){if(this.previewOps)return;const t=Xt("#op-preview-canvas",this.root);t&&(this.previewOps=new Gl(t),this.previewOps.setCharacter(this.selectedCharId))}renderMarketCats(){const t=Xt("#market-cats",this.root);t&&(t.innerHTML=[...cs.map(e=>`<button class="cat-btn ${this.marketCat===e?"active":""}" data-cat="${e}">${Ce[e].cls}<span>${js.filter(i=>i.weapon===e).length}</span></button>`)].join(""))}renderMarket(){const t=Xt("#skin-grid",this.root);if(!t)return;const e=js.filter(f=>f.weapon===this.marketCat);if(!e.find(f=>f.id===this.selectedSkinId)){const f=this.profile.equipped[this.marketCat];this.selectedSkinId=(e.find(d=>d.id===f)||e[0])?.id}t.innerHTML=e.map(f=>{const d=this.profile.ownedSkins.includes(f.id),h=this.profile.equipped[f.weapon]===f.id,p=ua[f.rarity];return`<div class="skin-card ${this.selectedSkinId===f.id?"active":""}" data-skin="${f.id}">
        ${h?'<div class="badge-eq">KUŞANILDI</div>':""}
        <div class="swatch" style="background:radial-gradient(ellipse at 50% 40%, ${f.colors.base} 0%, #0b1116 85%)">
          ${V0(f.weapon,f.colors)}
          <div style="position:absolute;left:0;right:0;bottom:0;height:2px;background:${p.color}"></div>
        </div>
        <div class="bottom">
          <div class="nm">${f.name}</div>
          <div class="rar" style="color:${p.color}">${p.label}</div>
          <div class="price">${d?'<span style="color:var(--accent-2)">ENVANTERDE</span>':`<span>◈</span><b>${f.price.toLocaleString("tr-TR")}</b>`}</div>
        </div>
      </div>`}).join("");const i=is[this.selectedSkinId];if(!i)return;const n=ua[i.rarity],a=Ce[i.weapon],r=(f,d,h)=>{const p=Xt(`[data-ref=${f}]`,this.root);p&&(p.textContent=d,h&&(p.style.color=h))};r("pv-rarity",n.label,n.color),r("pv-name",i.name),r("pv-weapon",a.name),r("pv-price",i.price.toLocaleString("tr-TR"));const o=this.profile.ownedSkins.includes(i.id),c=this.profile.equipped[i.weapon]===i.id,l=Xt("[data-ref=pv-owned]",this.root);l&&(l.style.display=o?"":"none");const u=Xt("#skin-action",this.root);u&&(c?(u.textContent="KUŞANILDI",u.disabled=!0):o?(u.textContent="KUŞAN",u.disabled=!1):(u.textContent=`SATIN AL · ${i.price.toLocaleString("tr-TR")} KREDİ`,u.disabled=this.profile.credits<i.price)),this.ensureMarketPreview(),this.previewMarket&&this.previewMarket.setWeapon(i.weapon,i),this.refreshChrome()}ensureMarketPreview(){if(this.previewMarket)return;const t=Xt("#market-preview-canvas",this.root);if(!t)return;this.previewMarket=new Gl(t);const e=is[this.selectedSkinId];e&&this.previewMarket.setWeapon(e.weapon,e)}renderWeapons(){const t=Xt("#weapon-table",this.root);if(!t)return;const e=cs.map(i=>{const n=Ce[i],a=n.slot==="primary",r=this.profile.primary===i,o={Hasar:Math.min(100,n.damage*(n.pellets||1)/92*100),"Atış Hızı":Math.min(100,n.rpm/900*100),Menzil:Math.min(100,n.falloff[1]/130*100),Kontrol:Math.max(12,100-n.recoil/6*100),Hareket:Math.min(100,n.move/1.1*100)},c=Object.entries(o).map(([l,u])=>`<div style="display:grid;grid-template-columns:64px 1fr;align-items:center;gap:8px"><span style="font-size:8px;letter-spacing:1px;color:var(--dim)">${l.toUpperCase()}</span><div class="bar"><i style="width:${u.toFixed(0)}%"></i></div></div>`).join("");return`<div class="weapon-row ${a?"":"disabled"}">
        <div>
          <div class="wname">${n.name}</div>
          <div class="wcls">${n.cls} · ${n.pellets>1?`${n.pellets} SAÇMA`:`KAFA x${n.head}`}</div>
        </div>
        <div class="ttk">${a0(n).toFixed(2)}<small> SN TTK</small></div>
        <div style="display:flex;flex-direction:column;gap:4px">${c}</div>
        <div><div class="bar"><i style="width:${Math.min(100,n.mag/75*100)}%"></i></div><div style="font-size:7px;letter-spacing:1px;color:var(--dim);margin-top:3px">ŞARJÖR ${n.mag}</div></div>
        <div><div class="bar"><i style="width:${Math.min(100,n.reload/4.6*100)}%"></i></div><div style="font-size:7px;letter-spacing:1px;color:var(--dim);margin-top:3px">RELOAD ${n.reload.toFixed(1)}SN</div></div>
        <div class="act">${r?'<div class="equipped-tag">KUŞANILDI</div>':a?`<button class="btn small" data-action="equip-weapon" data-weapon="${i}">KUŞAN</button>`:'<div class="tag-balanced">YEDEK</div>'}</div>
      </div>`}).join("");t.innerHTML=`
      <div class="weapon-row head"><div>SİLAH</div><div>TTK</div><div>DENGE PROFİLİ</div><div>ŞARJÖR</div><div>YENİLEME</div><div style="text-align:right">KUŞAN</div></div>
      ${e}
      <div style="margin-top:12px;font-size:9px;line-height:1.7;letter-spacing:.8px;color:var(--dim)">
        DENGE NOTU · Her silahın gövde TTK'si amaçlanan menzilinde 0,42–0,55 sn aralığında tutulur. Yakın menzil araçları (SMG, pompalı) uzakta; uzun menzil araçları (keskin nişancı, DMR) yakında cezalandırılır. Tüm skinler kozmetiktir.
      </div>
    `}showMatchmaking(t){const e=fa[t]||In[0];this.app.pendingMap=e.id;const i=Xt("#matchmaking",this.root);i.classList.add("active"),Xt("[data-ref=mm-map]",i).textContent=e.name,Xt("[data-ref=mm-sub]",i).textContent=`${["EU-WEST-01","TR-01","EU-EAST-02"][Math.random()*3|0]} · 5v5 TAKIM ÖLÜMÜ · ${e.region}`,Xt("[data-ref=mm-status]",i).textContent="Uygun sunucu taranıyor…",Xt("#mm-deploy").classList.remove("show");const n=[this.profile.callsign||"SEN"],a=[...kc].sort(()=>Math.random()-.5);for(let u=0;u<9;u++)n.push(a[u]);const r=Xt("#mm-players",i);r.innerHTML="",n.forEach((u,f)=>{const d=f<5?"blue":"red",h=document.createElement("div");h.className=`mm-player ${f===0?"me":""}`,h.style.animationDelay=`${.06*f}s`,h.innerHTML=`<span class="tm" style="color:${d==="blue"?"var(--blue)":"var(--red)"}">${d==="blue"?"ALFA":"BRAVO"}</span><span class="nn">${f===0?u+" (SEN)":u}</span><span class="ping">${12+(Math.random()*40|0)} ms</span>`,r.appendChild(h)});const o=["Sunucuya bağlanılıyor…","9 oyuncu bulundu · takımlar kuruluyor…","Sunucu hazır · harita yükleniyor…"];clearTimeout(this.mmTimer);let c=0;const l=()=>{Xt("[data-ref=mm-status]",i).textContent=o[c]||o[2],c+=1,c===2&&Xt("#mm-deploy").classList.add("show"),c<3&&(this.mmTimer=setTimeout(l,900))};this.mmTimer=setTimeout(l,700)}hideMatchmaking(){clearTimeout(this.mmTimer),Xt("#matchmaking",this.root).classList.remove("active")}showPostMatch(t){this.go("postmatch");const e=(o,c)=>{const l=Xt(`[data-ref=${o}]`,this.root);l&&(l.textContent=c)};e("pm-map",(t.map?.name||"").toUpperCase());const i=Xt("[data-ref=pm-title]",this.root);i.textContent=t.draw?"BERABERE":t.win?"ZAFER":"YENİLGİ",i.className=t.win?"win":"lose",e("pm-blue",t.score.blue),e("pm-red",t.score.red),e("pm-kills",t.player.kills),e("pm-deaths",t.player.deaths),e("pm-assists",t.player.assists),e("pm-damage",t.player.damage),e("pm-hs",t.player.headshots),e("pm-acc",`${t.player.accuracy}%`),e("pm-reward-kill",`+${120+t.player.kills*24+Math.floor(t.player.damage/90)}`),e("pm-reward-win",`+${t.win?220:t.draw?110:70}`),e("pm-reward-mvp",`+${t.mvp?120:0}`),e("pm-credits",`+${t.credits}`),e("pm-xp",`+${t.xp} XP`),e("pm-mvp","★ MAÇIN OYUNCUSU");const n=Xt("[data-ref=pm-mvp]",this.root);n&&(n.style.display=t.mvp?"":"none");const a=this.profile;e("pm-level",`SEVİYE ${a.level} · ${Bl(a.level)}`),e("pm-xptext",`${a.xp} / ${ma(a.level)} XP`);const r=Xt("[data-ref=pm-xpbar]",this.root);r&&(r.style.width=`${Math.min(100,a.xp/ma(a.level)*100)}%`),this.refreshChrome()}openSettings(){Xt("#settings",this.root).classList.add("active");const e=Xt("#sound-switch",this.root);e&&e.classList.toggle("on",this.profile.settings.sound);const i=Xt("[data-ref=quality]",this.root);i&&(i.value=this.profile.settings.quality);const n=Xt("[data-ref=sens]",this.root);n&&(n.value=this.profile.settings.sensitivity);const a=Xt("[data-ref=fov]",this.root);a&&(a.value=this.profile.settings.fov)}closeSettings(){Xt("#settings",this.root).classList.remove("active")}showPause(t){Xt("#pause",this.root).classList.toggle("active",t)}toast(t,e=""){const i=Xt("#toasts",this.root);if(!i)return;const n=document.createElement("div");n.className=`toast ${e}`,n.textContent=t,i.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transition="opacity .3s",setTimeout(()=>n.remove(),320)},2600)}updatePreviews(t){this.current==="operators"&&this.previewOps?.update(t),this.current==="market"&&this.previewMarket?.update(t)}show(){}}const Ot=(s,t=document)=>t.querySelector(s);class $0{constructor(t){this.app=t,this.root=document.getElementById("hud-root"),this.match=null,this.cache={},this.killTimers=[],this.crossGap=5,this.hitTimer=null,this.killPopupTimer=null,this.vignetteTimer=null,this.gamepadHints="",this.build(),this.bind()}build(){this.root.innerHTML=`
      <div id="hud">
        <div class="hud-top">
          <div class="score-bar">
            <div class="score-team"><div class="tname">ALFA</div><div class="tval" data-hud="blue">0</div></div>
            <div class="score-mid"><div class="timer" data-hud="timer">06:00</div><div class="mode">TAKIM ÖLÜMÜ · 50</div></div>
            <div class="score-team red"><div class="tname">BRAVO</div><div class="tval" data-hud="red">0</div></div>
          </div>
          <div class="hud-map" data-hud="map">SANCAK LİMANI · <b>EU-WEST-01</b></div>
        </div>

        <div class="minimap">
          <div class="frame"><canvas id="minimap-canvas" width="332" height="332"></canvas><div class="reveal-tag" id="reveal-tag">NABIZ · DÜŞMANLAR İŞARETLİ</div></div>
          <div class="mm-meta"><span>ALFA <b data-hud="mm-blue">0</b></span><span>HARİTA</span><span>BRAVO <b data-hud="mm-red">0</b></span></div>
        </div>

        <div class="killfeed" id="killfeed"></div>
        <div class="net-indicator"><i></i><span data-hud="net">TR-01 · 24ms</span></div>

        <div class="crosshair" id="crosshair"><i class="c-top"></i><i class="c-bottom"></i><i class="c-left"></i><i class="c-right"></i><i class="c-dot"></i></div>
        <div class="hitmarker" id="hitmarker"><i></i><i></i><i></i><i></i></div>
        <div class="damage-vignette" id="damage-vignette"></div>
        <div class="damage-arcs" id="damage-arcs"></div>

        <div class="health-panel">
          <div class="health-head">
            <div class="char-badge" id="char-badge"></div>
            <div><div class="health-name" data-hud="char">KARTAL</div><div class="health-sub" data-hud="charrole">HÜCUM PİYADESİ</div></div>
            <div class="health-numbers"><div class="hp" data-hud="hp">100</div><div class="lbl">CAN</div></div>
          </div>
          <div class="health-bar"><div class="fill" data-hud="hpfill" style="width:100%"></div><div class="shield" data-hud="shieldfill" style="width:0%"></div><div class="ticks"></div></div>
          <div class="ability-row">
            <div class="ability-icon" id="ability-icon"><span>✦</span><div class="cd" id="ability-cd" style="transform:scaleY(0)"></div></div>
            <div class="ability-text"><b data-hud="abil">HÜCUM <span class="key">Q</span></b><span data-hud="abilcd">HAZIR</span></div>
          </div>
          <div class="streak-tag" id="streak-tag">SERİ · 3</div>
        </div>

        <div class="weapon-panel">
          <div class="weapon-name" data-hud="wname">AR-9 VANGUARD</div>
          <div class="weapon-skin" data-hud="wskin">STANDART</div>
          <div class="ammo" id="ammo"><span class="mag" data-hud="mag">30</span><span class="reserve" data-hud="reserve"> / 150</span></div>
          <div class="reload-bar"><div class="fill" data-hud="reload" style="width:0%"></div></div>
          <div class="weapon-slots" id="weapon-slots"></div>
        </div>

        <div class="kill-popup" id="kill-popup">
          <div class="kp-top">HEDEF İMHA EDİLDİ</div>
          <div class="kp-name" data-hud="kpname">ALPHA</div>
          <div class="kp-reward">+1 <span data-hud="kphs" class="kp-hs"></span></div>
        </div>

        <div class="ability-flash" id="ability-flash"></div>
        <div class="assist-toast" id="assist-toast">ASİST · +1</div>

        <div class="countdown" id="countdown"><div class="cd-num" data-hud="count">3</div><div class="cd-label">HAZIR OL</div><div class="cd-map" data-hud="cdmap">SANCAK LİMANI</div></div>

        <div class="scope-overlay" id="scope">
          <div class="scope-ring"></div><div class="sc-h"></div><div class="sc-v"></div><div class="sc-dot"></div><div class="sc-ticks"></div><div class="sc-label">AX-50 · 6.5x</div>
        </div>

        <div class="death-screen" id="death">
          <div class="death-title">ELENDİN</div>
          <div class="death-by"><b data-hud="killer">ALPHA</b> TARAFINDAN <span data-hud="killweapon">AR-9</span> İLE</div>
          <div class="death-timer"><b data-hud="respawnt">4</b>YENİDEN DOĞUŞ</div>
          <div class="death-hint">TAKIMIN SAVAŞMAYA DEVAM EDİYOR</div>
        </div>

        <div class="scoreboard" id="scoreboard"><div class="sb-panel">
          <div class="sb-head"><div class="sb-title">TAKIM ÖLÜMÜ</div><div class="sb-score"><span class="b" data-hud="sbb">0</span> — <span class="r" data-hud="sbr">0</span></div></div>
          <div class="sb-cols" id="sb-cols"></div>
        </div></div>
      </div>
    `,this.hudEl=Ot("#hud",this.root),this.minimap=Ot("#minimap-canvas",this.root),this.mmCtx=this.minimap.getContext("2d")}bind(){window.addEventListener("keydown",t=>{t.code==="Tab"&&this.match&&!this.match.ended&&(t.preventDefault(),this.scoreboardOpen||(this.scoreboardOpen=!0,this.renderScoreboard()),Ot("#scoreboard",this.root)?.classList.add("active"))}),window.addEventListener("keyup",t=>{t.code==="Tab"&&(this.scoreboardOpen=!1,Ot("#scoreboard",this.root)?.classList.remove("active"))})}show(t){this.match=t,this.hudEl.classList.add("active"),document.body.classList.add("in-match");const e=t.player,i=t.mapDef;this.setText("map",`${i.name} · <b>${t.app.region||"EU-WEST-01"}</b>`),this.setText("cdmap",i.name.toUpperCase()),this.setText("net",`${["TR-01","EU-WEST-01","EU-EAST-02"][Math.random()*3|0]} · ${18+(Math.random()*22|0)}ms`),this.setText("blue",0),this.setText("red",0),this.setText("mm-blue",0),this.setText("mm-red",0),Ot("#killfeed",this.root).innerHTML="",Ot("#death",this.root).classList.remove("active"),Ot("#scope",this.root).classList.remove("active"),Ot("#countdown",this.root).classList.remove("active"),Ot("#kill-popup",this.root).classList.remove("show"),Ot("#damage-vignette",this.root).style.opacity="0",this.scoreboardOpen=!1,Ot("#scoreboard",this.root).classList.remove("active"),this.buildMinimapBg(),this.refreshAll(e),this.setScoped(!1),this.updateMatch(t),this.updateMinimap(t)}hide(){this.hudEl.classList.remove("active"),document.body.classList.remove("in-match"),Ot("#scoreboard",this.root)?.classList.remove("active"),this.scoreboardOpen=!1}setText(t,e){const i=Ot(`[data-hud=${t}]`,this.root);i&&this.cache[t]!==e&&(this.cache[t]=e,i.textContent=e)}setHTML(t,e){const i=Ot(`[data-hud=${t}]`,this.root);i&&this.cache[t]!==e&&(this.cache[t]=e,i.innerHTML=e)}refreshAll(t){if(!t)return;const e=t.character,i=Ot("#char-badge",this.root);i&&(i.innerHTML=`<svg viewBox="0 0 64 64"><path d="M32 5 L55 17 L55 44 L32 59 L9 44 L9 17 Z" fill="none" stroke="${e.colors.accent}" stroke-opacity=".6" stroke-width="1.5"/><path d="M20 27 Q32 16 44 27 L42 39 Q32 45 22 39 Z" fill="${e.colors.suit}" stroke="${e.colors.accent}" stroke-width="1.2"/><path d="M24 31 Q32 27 40 31 L39 36 Q32 39 25 36 Z" fill="${e.colors.visor}"/></svg><div class="lvl">${t.game?.profile?.level||1}</div>`),this.setText("char",e.name),this.setText("charrole",e.title),this.refreshWeapon(t),this.refreshAbility(t),this.updatePlayer(t)}refreshWeapon(t){if(!t)return;const e=t.weaponDef,i=t.weaponId;this.setText("wname",e.name);const n=this.app.profile.equipped[i],a=n?is[n]:null,r=Ot("[data-hud=wskin]",this.root);r&&(r.textContent=a?`${a.name} · ${ua[a.rarity].label}`:"STANDART KAPLAMA",r.style.color=a?ua[a.rarity].color:"var(--dim)"),this.setText("mag",t.ammoState.mag),this.setText("reserve",` / ${t.ammoState.reserve}`),Ot("#ammo",this.root).classList.toggle("low",t.ammoState.mag<=Math.ceil(e.mag*.2));const o=Ot("#weapon-slots",this.root);if(o){const c=Ce[t.primaryId],l=Ce[t.secondaryId];o.innerHTML=`<div class="wslot ${t.slot===0?"active":""}"><span class="num">1</span>${c.name.split(" ")[0]}</div><div class="wslot ${t.slot===1?"active":""}"><span class="num">2</span>${l.name.split(" ")[0]}</div>`}this.cache.weapon=i}refreshAbility(t){if(!t)return;const e=t.character.ability;this.setText("abil",`${e.name} · Q`);const i=Ot("[data-hud=abilcd]",this.root);i&&(t.abilityCd<=0?(i.textContent="HAZIR",i.style.color="var(--accent-2)"):(i.textContent=`${Math.ceil(t.abilityCd)} SN`,i.style.color="var(--dim)"));const n=Ot("#ability-icon",this.root);n&&n.classList.toggle("ready",t.abilityCd<=0);const a=Ot("#ability-cd",this.root);a&&(a.style.transform=`scaleY(${Math.min(1,t.abilityCd/e.cooldown)})`)}updatePlayer(t){if(!t)return;const e=Math.max(0,Math.ceil(t.health));this.setText("hp",e);const i=Ot("[data-hud=hpfill]",this.root);i&&(i.style.width=`${e/t.maxHealth*100}%`);const n=Ot("[data-hud=shieldfill]",this.root);n&&(n.style.width=`${Math.min(100,t.overshield/t.maxHealth*100)}%`);const a=Ot("[data-hud=hp]",this.root);a&&a.classList.toggle("low",e<=30);const r=t.ammoState.mag;this.setText("mag",r),this.setText("reserve",` / ${t.ammoState.reserve}`),Ot("#ammo",this.root).classList.toggle("low",r<=Math.ceil(t.weaponDef.mag*.2));const o=Ot("[data-hud=reload]",this.root);o&&(o.style.width=t.reloading?`${Math.max(0,Math.min(100,(1-t.reloadT/t.reloadTotal)*100))}%`:"0%"),this.crossGap+=(5+Math.min(10,Math.hypot(t.vel.x,t.vel.z)*1.6)-this.crossGap)*.15;const c=Ot("#crosshair",this.root);c&&c.style.setProperty("--gap",`${this.crossGap.toFixed(1)}px`);const l=Ot("#streak-tag",this.root);if(l){const u=t.streak>=2;l.classList.toggle("on",u),u&&(l.textContent=`SERİ · ${t.streak}  ${t.streak>=5?"· DURDURULAMAZ":""}`)}t.abilityCd>0?this.refreshAbility(t):this.cache.abilState!=="ready"&&(this.cache.abilState="ready",this.refreshAbility(t)),t.abilityCd<=0&&(this.cache.abilState="ready")}updateMatch(t){this.match=t,this.setText("blue",t.score.blue),this.setText("red",t.score.red),this.setText("mm-blue",t.score.blue),this.setText("mm-red",t.score.red),this.setText("sbb",t.score.blue),this.setText("sbr",t.score.red);const e=Math.max(0,Math.ceil(t.timeLeft)),i=Math.floor(e/60).toString().padStart(2,"0"),n=Math.floor(e%60).toString().padStart(2,"0");this.setText("timer",`${i}:${n}`);const a=Ot("#reveal-tag",this.root);a&&a.classList.toggle("on",t.revealT>0),this.scoreboardOpen&&this.renderScoreboard()}buildMinimapBg(){const t=this.minimap.width,e=document.createElement("canvas");e.width=e.height=t;const i=e.getContext("2d");this.match.mapDef,i.fillStyle="rgba(9,14,18,0.94)",i.fillRect(0,0,t,t);const n=t/100;i.strokeStyle="rgba(120,160,180,0.08)",i.lineWidth=1;for(let a=0;a<=100;a+=10)i.beginPath(),i.moveTo(a*n,0),i.lineTo(a*n,t),i.stroke(),i.beginPath(),i.moveTo(0,a*n),i.lineTo(t,a*n),i.stroke();i.fillStyle="rgba(77,197,255,0.10)",i.fillRect(23*n,33*n,54*n,10*n),i.fillStyle="rgba(255,90,77,0.10)",i.fillRect(23*n,57*n,54*n,10*n);for(const a of this.match.world.colliders){if(a.maxY<.4)continue;const r=(a.minX+50)*n,o=(a.minZ+50)*n,c=(a.maxX-a.minX)*n,l=(a.maxZ-a.minZ)*n;i.fillStyle=a.maxY>3?"rgba(140,175,195,0.34)":"rgba(110,140,160,0.24)",i.fillRect(r,o,Math.max(1,c),Math.max(1,l))}i.strokeStyle="rgba(255,255,255,0.22)",i.lineWidth=2,i.strokeRect(2,2,t-4,t-4),this.mapBg=e}updateMinimap(t){if(!this.match)return;const e=this.mmCtx,i=this.minimap.width;this.mapBg&&e.drawImage(this.mapBg,0,0);const n=i/100,a=t.player,r=(a.pos.x+50)*n,o=(a.pos.z+50)*n,c=-Math.sin(a.yaw),l=-Math.cos(a.yaw),u=Math.atan2(l,c);e.save(),e.translate(r,o),e.rotate(u);const f=e.createRadialGradient(0,0,4,0,0,40*n);f.addColorStop(0,"rgba(77,197,255,0.22)"),f.addColorStop(1,"rgba(77,197,255,0)"),e.fillStyle=f,e.beginPath(),e.moveTo(0,0),e.arc(0,0,40*n,-.52,.52),e.closePath(),e.fill(),e.restore();for(const d of t.bots){if(!d.alive)continue;const h=(d.pos.x+50)*n,p=(d.pos.z+50)*n,v=a.pos.distanceTo(d.pos),g=t.revealT>0;d.team==="blue"?(e.fillStyle="rgba(77,197,255,0.95)",e.beginPath(),e.arc(h,p,4,0,7),e.fill()):(g||v<15||d.flash>0&&v<34)&&(e.fillStyle=g?"rgba(176,107,255,1)":"rgba(255,90,77,0.95)",e.beginPath(),e.arc(h,p,4.4,0,7),e.fill(),g&&(e.strokeStyle="rgba(176,107,255,0.5)",e.lineWidth=2,e.beginPath(),e.arc(h,p,8,0,7),e.stroke()))}e.save(),e.translate(r,o),e.rotate(u),e.fillStyle="#ffffff",e.beginPath(),e.moveTo(8,0),e.lineTo(-5,5),e.lineTo(-2,0),e.lineTo(-5,-5),e.closePath(),e.fill(),e.strokeStyle="rgba(0,0,0,0.6)",e.lineWidth=1,e.stroke(),e.restore(),e.strokeStyle=`rgba(72,230,210,${.1+(Math.sin(performance.now()/500)+1)*.06})`,e.lineWidth=2,e.beginPath(),e.arc(r,o,14,0,7),e.stroke()}killfeed(t){const e=Ot("#killfeed",this.root);if(!e)return;const i=document.createElement("div");i.className=`kf-item ${t.killerTeam==="blue"?"blue":"red"}`;const n=(Ce[t.weapon]?.name||"SİLAH").split(" ")[0];i.innerHTML=`<span class="k">${t.killer}</span><span class="wpn">[${n}]</span>${t.headshot?'<span class="hs">✦</span>':""}<span class="v ${t.playerVictim?"me":""}">${t.victim}</span>`,e.appendChild(i),e.children.length>6&&e.firstElementChild.remove();const a=setTimeout(()=>{i.style.opacity="0",i.style.transition="opacity .4s",setTimeout(()=>i.remove(),450)},4600);this.killTimers.push(a)}hitmarker(t,e){const i=Ot("#hitmarker",this.root);i&&(i.classList.remove("show","kill","head"),i.offsetWidth,i.classList.add("show"),t&&i.classList.add("kill"),e&&i.classList.add("head"),clearTimeout(this.hitTimer),this.hitTimer=setTimeout(()=>i.classList.remove("show","kill","head"),t?260:120))}damageFrom(t,e){const i=Ot("#damage-vignette",this.root);i&&(i.style.opacity=String(Math.min(.9,.25+e/90)),clearTimeout(this.vignetteTimer),this.vignetteTimer=setTimeout(()=>{i.style.opacity="0"},520));const n=this.match?.player;if(!n||!t)return;const a=t.x-n.pos.x,r=t.z-n.pos.z,o=-Math.sin(n.yaw),c=-Math.cos(n.yaw),l=Math.cos(n.yaw),u=-Math.sin(n.yaw),f=a*o+r*c,d=a*l+r*u;let h=Math.atan2(d,f)*180/Math.PI;h<-180&&(h+=360);const p=document.createElement("div");p.className="dmg-arc show",p.style.transform=`translate(-50%,-50%) rotate(${h}deg) translateY(-120px)`,Ot("#damage-arcs",this.root).appendChild(p),setTimeout(()=>p.remove(),950)}showDeath(t,e,i,n){const a=Ot("#death",this.root);a&&(this.setText("killer",t||"BİLİNMEYEN"),this.setText("killweapon",Ce[e]?.name||"SİLAH"),this.setText("respawnt",Math.max(1,Math.ceil(n))),a.classList.add("active"))}updateDeathTimer(t){this.setText("respawnt",Math.max(0,Math.ceil(t)))}hideDeath(){Ot("#death",this.root)?.classList.remove("active")}showCountdown(t){const e=Ot("#countdown",this.root);if(!e)return;e.classList.add("active"),this.setText("count",t>0?t:"");const i=Ot("[data-hud=count]",this.root);i&&(i.style.animation="none",i.offsetWidth,i.style.animation="pulse .7s ease-out")}hideCountdown(){Ot("#countdown",this.root)?.classList.remove("active")}matchLive(t){this.hideCountdown(),this.abilityFlash("SAVAŞ BAŞLADI","#5dff9d")}setScoped(t){const e=Ot("#scope",this.root);e&&e.classList.toggle("active",t),Ot("#crosshair",this.root)?.classList.toggle("scoped",t)}crosshairKick(t){this.crossGap=Math.min(22,this.crossGap+t*1.15)}abilityFlash(t,e){const i=Ot("#ability-flash",this.root);i&&(i.textContent=t,i.style.color=e||"var(--accent)",i.classList.remove("show"),i.offsetWidth,i.classList.add("show"),setTimeout(()=>i.classList.remove("show"),1700))}killPopup(t,e,i){const n=Ot("#kill-popup",this.root);n&&(this.setText("kpname",t),this.setText("kphs",e?"KAFA VURUŞU":""),n.classList.add("show"),clearTimeout(this.killPopupTimer),this.killPopupTimer=setTimeout(()=>n.classList.remove("show"),1300))}assistToast(){const t=Ot("#assist-toast",this.root);t&&(t.classList.remove("show"),t.offsetWidth,t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),1400))}scoreFlash(t){const e=Ot("[data-hud="+(t==="blue"?"blue":"red")+"]",this.root);e&&(e.style.color=t==="blue"?"var(--blue)":"var(--red)",e.style.textShadow=`0 0 22px ${t==="blue"?"var(--blue)":"var(--red)"}`,setTimeout(()=>{e.style.textShadow="none",e.style.color=""},450))}renderScoreboard(){if(!this.match)return;const t=Ot("#sb-cols",this.root);if(!t)return;const e=(i,n)=>{const a=this.match.bots.filter(r=>r.team===i).map(r=>({name:r.name,kills:r.kills||0,deaths:r.deaths,me:!1}));return i==="blue"&&a.unshift({name:this.match.player.name,kills:this.match.player.kills,deaths:this.match.player.deaths,me:!0}),a.sort((r,o)=>o.kills-r.kills),`<div class="sb-team ${i}"><h4>${n}</h4>
        <div class="sb-row head"><span>OPERATÖR</span><span>K</span><span>Ö</span></div>
        ${a.map(r=>`<div class="sb-row ${r.me?"me":""}"><span>${r.name}${r.me?" (SEN)":""}</span><span>${r.kills}</span><span>${r.deaths}</span></div>`).join("")}
      </div>`};t.innerHTML=e("blue","ALFA TAKIMI")+e("red","BRAVO TAKIMI")}}class q0{constructor(){this.canvas=document.getElementById("scene"),this.renderer=new Bc({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=le,this.renderer.toneMapping=va,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Vl,this.profile=f0(),this.region=["EU-WEST-01","TR-01","EU-EAST-02"][Math.random()*3|0],this.input=new v0(this.canvas),this.input.sensitivity=this.profile.settings.sensitivity,this.audio=Qt,Qt.setEnabled(this.profile.settings.sound),this.baseFov=this.profile.settings.fov||78,this.aspect=window.innerWidth/window.innerHeight,this.applyQuality(),this.ui=new X0(this),this.hud=new $0(this),this.match=null,this.pendingMap=null,this.activeScene=null,this.activeCamera=null,this.lastTime=performance.now(),this.fps=60,this.ambientStarted=!1,this.menuScene=new S0,this.setScene(this.menuScene.scene,this.menuScene.camera),this.ui.go("menu"),this.resize(),this.bind(),window.addEventListener("resize",()=>this.resize()),requestAnimationFrame(t=>this.loop(t)),this.startAmbientOnce()}startAmbientOnce(){const t=()=>{this.ambientStarted||(this.ambientStarted=!0,Qt.ensure(),this.profile.settings.sound&&Qt.startAmbient(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t))};window.addEventListener("pointerdown",t),window.addEventListener("keydown",t)}bind(){this.input.onLock(t=>{this.match&&!this.match.ended&&(!t&&!this.match.paused&&!this.input.touch?(this.pauseFromLock=!0,this.pauseMatch()):t&&this.match.paused&&this.pauseFromLock&&(this.pauseFromLock=!1,this.ui.showPause(!1),this.match.resume(),this.input.setEnabled(!0)))}),window.addEventListener("keydown",t=>{t.code==="Escape"&&this.match&&!this.match.ended&&(this.match.paused||this.pauseMatch())}),this.canvas.addEventListener("click",()=>{this.match&&!this.match.ended&&!this.match.paused&&!this.input.locked&&!this.input.touch&&this.input.requestLock()}),window.addEventListener("error",t=>{console.error("[iron-protocol]",t.message)})}applyQuality(){const t=this.profile.settings.quality||"high",e=window.devicePixelRatio||1,i=t==="high"?1.8:t==="medium"?1.35:1;this.renderer.setPixelRatio(Math.min(e,i)),this.renderer.shadowMap.enabled=t!=="low",this.renderer.setSize(window.innerWidth,window.innerHeight,!1)}resize(){const t=window.innerWidth,e=window.innerHeight;this.aspect=t/e,this.renderer.setSize(t,e,!1),this.menuScene.camera.aspect=this.aspect,this.menuScene.camera.updateProjectionMatrix(),this.match&&(this.match.camera.aspect=this.aspect,this.match.camera.updateProjectionMatrix()),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.profile.settings.quality==="high"?1.8:this.profile.settings.quality==="medium"?1.35:1))}setScene(t,e){this.activeScene=t,this.activeCamera=e}startMatchmaking(t){Qt.ensure(),this.pendingMap=t,this.ui.showMatchmaking(t),this.ambientStarted||(this.ambientStarted=!0,Qt.startAmbient())}deployMatch(){this.pendingMap&&(Qt.ensure(),Qt.stopAmbient(),this.ui.hideMatchmaking(),this.ui.go("menu"),this.ui.current=null,this.startMatch(this.pendingMap),this.input.setEnabled(!0),this.input.requestLock(),setTimeout(()=>{this.match&&!this.match.ended&&!this.match.paused&&!this.input.locked&&!this.input.touch&&(this.pauseFromLock=!0,this.pauseMatch())},900))}startMatch(t){if(this.match){try{this.match.dispose()}catch{}this.match=null}document.querySelectorAll(".screen").forEach(e=>e.classList.remove("active")),this.match=new z0(this,t),this.setScene(this.match.scene,this.match.camera),this.match.camera.aspect=this.aspect,this.match.camera.updateProjectionMatrix(),this.ui.current=null}rematch(){const t=this.match?.mapDef?.id||this.pendingMap||"harbor";if(Qt.ensure(),this.match){try{this.match.dispose()}catch{}this.match=null}this.ui.showPause(!1),document.querySelectorAll(".screen").forEach(e=>e.classList.remove("active")),this.startMatch(t),this.input.setEnabled(!0),this.input.requestLock()}pauseMatch(){!this.match||this.match.ended||(this.input.setEnabled(!1),this.input.exitLock(),this.match.pause(),this.ui.showPause(!0))}resumeMatch(){this.match&&(this.ui.showPause(!1),this.ui.closeSettings(),this.match.resume(),this.input.setEnabled(!0),this.input.touch||this.input.requestLock())}onMatchEnd(t,e){this.input.setEnabled(!1),this.input.exitLock(),this.hud.hide(),this.ui.showPostMatch(t),this.match=e}quitMatch(){this.hud.hide(),this.match?.dispose(),this.match=null,this.ui.showPause(!1),this.ui.closeSettings(),document.body.classList.remove("in-match"),this.setScene(this.menuScene.scene,this.menuScene.camera),this.input.setEnabled(!1),this.ui.go("menu"),Qt.startAmbient()}backToMenu(){this.hud.hide(),this.match?.dispose(),this.match=null,this.ui.showPause(!1),this.ui.closeSettings(),document.body.classList.remove("in-match"),this.setScene(this.menuScene.scene,this.menuScene.camera),this.input.setEnabled(!1),this.ui.go("menu"),Qt.startAmbient()}resetProgress(){this.profile=p0(),this.input.sensitivity=this.profile.settings.sensitivity,this.ui.refreshChrome(),this.ui.renderMaps(),this.ui.renderOperators(),this.ui.renderMarketCats(),this.ui.renderMarket(),this.ui.renderWeapons(),this.ui.toast("İlerleme sıfırlandı. Yeni bir başlangıç.","ok")}save(){vi(this.profile)}loop(t){const e=(t-this.lastTime)/1e3;this.lastTime=t;const i=Math.min(.05,Math.max(.001,e));this.fps+=(1/i-this.fps)*.05,this.match?this.match.update(i):(this.menuScene.update(i),this.ui.updatePreviews(i)),this.activeScene&&this.activeCamera&&this.renderer.render(this.activeScene,this.activeCamera),this.input.endFrame(),requestAnimationFrame(n=>this.loop(n))}}function Y0(){const s=document.getElementById("scene");if(!(s.getContext("webgl2")||s.getContext("webgl"))){document.getElementById("ui").innerHTML='<div style="position:absolute;inset:0;display:grid;place-items:center;color:#ff6b2c;font-family:Rajdhani;letter-spacing:2px">WebGL desteklenmiyor. Lütfen donanım hızlandırmayı etkinleştir.</div>';return}c0(Ce),window.__iron=new q0}Y0();
