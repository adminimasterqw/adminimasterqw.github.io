// build time:Mon Jan 04 2021 10:24:33 GMT+0800 (中国标准时间)
var e={version:"0.2.4",hostname:"https://methiony.work",root:"/",statics:"/",favicon:{normal:"images/favicon.ico",hidden:"images/failure.ico"},darkmode:false,auto_scroll:true,js:{valine:"gh/amehime/MiniValine@4.2.2-beta10/dist/MiniValine.min.js",chart:"npm/frappe-charts@1.5.0/dist/frappe-charts.min.iife.min.js",copy_tex:"npm/katex@0.12.0/dist/contrib/copy-tex.min.js",fancybox:"combine/npm/jquery@3.5.1/dist/jquery.min.js,npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js,npm/justifiedGallery@3.8.1/dist/js/jquery.justifiedGallery.min.js"},css:{valine:"css/comment.css",katex:"npm/katex@0.12.0/dist/katex.min.css",mermaid:"css/mermaid.css",fancybox:"combine/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css,npm/justifiedGallery@3.8.1/dist/css/justifiedGallery.min.css"},loader:{start:true,"switch":true},search:{appID:"UOXVVOUQ1L",apiKey:"a93dacbab201d249dae8c05b450cb8df",indexName:"Andersen",hits:{per_page:10}},valine:{appId:"CcqXFqKHYrVxR776VR5nLwR5-gzGzoHsz",appKey:"laL1nqQbYdmIfbmqb3lShHWN",placeholder:"1. 提问前请先仔细阅读本文档⚡\n2. 页面显示问题💥，请提供控制台截图📸或者您的测试网址\n3. 其他任何报错💣，请提供详细描述和截图📸，祝食用愉快💪",avatar:"mp",pageSize:10,lang:"zh-CN",visitor:true,NoRecordIP:false,serverURLs:null,powerMode:true,tagMeta:{visitor:"新朋友",master:"主人",friend:"小伙伴",investor:"金主baba"},tagColor:{master:"var(--color-orange)",friend:"var(--color-aqua)",investor:"var(--color-pink)"},tagMember:{master:null,friend:null,investor:null}},quicklink:{timeout:3e3,priority:true},audio:[{title:"Silence",list:["https://music.163.com/#/playlist?id=5382015259"]}],fireworks:["rgba(255,182,185,.9)","rgba(250,227,217,.9)","rgba(187,222,214,.9)","rgba(138,198,209,.9)"]};const t=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const n=function(){return u("main > .inner").offsetHeight};const a=function(e,t,n){if(n){t()}else{var a=document.createElement("script");a.onload=a.onreadystatechange=function(e,n){if(n||!a.readyState||/loaded|complete/.test(a.readyState)){a.onload=a.onreadystatechange=null;a=undefined;if(!n&&t)setTimeout(t,0)}};a.src=e;document.head.appendChild(a)}};const i=function(t,n){var a=e[t][n];if(a.indexOf("npm")>-1||a.indexOf("gh")>-1||a.indexOf("combine")>-1)return"//cdn.jsdelivr.net/"+a;if(a.indexOf("http")>-1)return a;return m+a};const r=function(e,t,n){if(LOCAL[e]){a(i("js",e),t||function(){window[e]=true},n||window[e])}};const s=function(e,t){if(window["css"+e])return;if(LOCAL[e]){document.head.createChild("link",{rel:"stylesheet",href:i("css",e)});window["css"+e]=true}};const o=function(e){var t=e.text||e.textContent||e.innerHTML||"";var n=e.parentNode;n.removeChild(e);var a=document.createElement("script");if(e.id){a.id=e.id}if(e.className){a.className=e.className}if(e.type){a.type=e.type}if(e.src){a.src=e.src;a.async=false}if(e.dataset.pjax!==undefined){a.dataset.pjax=""}if(t!==""){a.appendChild(document.createTextNode(t))}n.appendChild(a)};const c=function(e,t,n){var a={targets:typeof t=="number"?e.parentNode:document.scrollingElement,duration:500,easing:"easeInOutQuad",scrollTop:t||(typeof e=="number"?e:e?e.top()+document.documentElement.scrollTop-R:0),complete:function(){n&&n()}};anime(a)};const l=function(e,t,n){var a={};var i="none";switch(t){case 0:a={opacity:[1,0]};break;case 1:a={opacity:[0,1]};i="block";break;case"bounceUpIn":a={begin:function(t){e.display("block")},translateY:[{value:-60,duration:200},{value:10,duration:200},{value:-5,duration:200},{value:0,duration:200}],opacity:[0,1]};i="block";break;case"shrinkIn":a={begin:function(t){e.display("block")},scale:[{value:1.1,duration:300},{value:1,duration:200}],opacity:1};i="block";break;case"slideRightIn":a={begin:function(t){e.display("block")},translateX:[100,0],opacity:[0,1]};i="block";break;case"slideRightOut":a={translateX:[0,100],opacity:[1,0]};break;default:a=t;i=t.display;break}anime(Object.assign({targets:e,duration:200,easing:"linear"},a)).finished.then(function(){e.display(i);n&&n()})};const d={get:function(e){return localStorage.getItem(e)},set:function(e,t){localStorage.setItem(e,t);return t},del:function(e){localStorage.removeItem(e)}};const u=function(e,t){t=t||document;if(e.indexOf("#")===0){return t.getElementById(e.replace("#",""))}return t.querySelector(e)};u.all=function(e,t){t=t||document;return t.querySelectorAll(e)};u.each=function(e,t,n){return u.all(e,n).forEach(t)};Object.assign(HTMLElement.prototype,{createChild:function(e,t,n){var a=document.createElement(e);Object.assign(a,t);switch(n){case"after":this.insertAfter(a);break;case"replace":this.innerHTML="";default:this.appendChild(a)}return a},wrap:function(e){var t=document.createElement("div");Object.assign(t,e);this.parentNode.insertBefore(t,this);this.parentNode.removeChild(this);t.appendChild(this)},height:function(e){if(e){this.style.height=typeof e=="number"?e+"rem":e}return this.getBoundingClientRect().height},width:function(e){if(e){this.style.width=typeof e=="number"?e+"rem":e}return this.getBoundingClientRect().width},top:function(){return this.getBoundingClientRect().top},left:function(){return this.getBoundingClientRect().left},attr:function(e,t){if(t===null){return this.removeAttribute(e)}if(t){this.setAttribute(e,t);return this}else{return this.getAttribute(e)}},insertAfter:function(e){var t=this.parentNode;if(t.lastChild==this){t.appendChild(e)}else{t.insertBefore(e,this.nextSibling)}},display:function(e){if(e==null){return this.style.display}else{this.style.display=e;return this}},child:function(e){return u(e,this)},find:function(e){return u.all(e,this)},_class:function(e,t,n){var a=t.indexOf(" ")?t.split(" "):[t];var i=this;a.forEach(function(t){if(e=="toggle"){i.classList.toggle(t,n)}else{i.classList[e](t)}})},addClass:function(e){this._class("add",e);return this},removeClass:function(e){this._class("remove",e);return this},toggleClass:function(e,t){this._class("toggle",e,t);return this},hasClass:function(e){return this.classList.contains(e)}});var f=null;const h=/mobile/i.test(window.navigator.userAgent);const p=function(e,t){var n={type:"audio",mode:"random",btns:["play-pause","music"],controls:["mode","backward","play-pause","forward","volume"],events:{"play-pause":function(t){if(i.paused){e.player.play()}else{e.player.pause()}},music:function(e){if(r.el.hasClass("show")){r.hide()}else{r.el.addClass("show");s.scroll().title()}}}},a={random:function(e){return Math.floor(Math.random()*e)},parse:function(e){var t=[];[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+).html","tencent","song"],["y.qq.com.*album/(\\w+).html","tencent","album"],["y.qq.com.*singer/(\\w+).html","tencent","artist"],["y.qq.com.*playsquare/(\\w+).html","tencent","playlist"],["y.qq.com.*playlist/(\\w+).html","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(function(n){var a=new RegExp(n[0]);var i=a.exec(e);if(i!==null){t=[n[1],n[2],i[1]]}});return t},fetch:function(e){var t=[];return new Promise(function(n,i){e.forEach(function(e){var i=a.parse(e);if(i[0]){var r=JSON.stringify(i);var s=d.get(r);if(s){t.push.apply(t,JSON.parse(s));n(t)}else{fetch("https://api.i-meto.com/meting/api?server="+i[0]+"&type="+i[1]+"&id="+i[2]+"&r="+Math.random()).then(function(e){return e.json()}).then(function(e){d.set(r,JSON.stringify(e));t.push.apply(t,e);n(t)}).catch(function(e){})}}else{t.push(e);n(t)}})})},secondToTime:function(e){var t=function(e){return isNaN(e)?"00":e<10?"0"+e:""+e};var n=Math.floor(e/3600);var a=Math.floor((e-n*3600)/60);var i=Math.floor(e-n*3600-a*60);return(n>0?[n,a,i]:[a,i]).map(t).join(":")},nameMap:{dragStart:h?"touchstart":"mousedown",dragMove:h?"touchmove":"mousemove",dragEnd:h?"touchend":"mouseup"}},i=null;e.player={_id:a.random(999999),group:true,load:function(e){var t="";var n=this;if(e&&e.length>0){if(this.options.rawList!==e){this.options.rawList=e;s.clear()}}else{t="none";this.pause()}for(var a in g.el){g.el[a].display(t)}return this},fetch:function(){var e=this;return new Promise(function(t,n){if(s.data.length>0){t()}else{if(e.options.rawList){var i=[];e.options.rawList.forEach(function(t,n){i.push(new Promise(function(i,r){var o=n;var c;if(!t.list){o=0;e.group=false;c=[t]}else{c=t.list}a.fetch(c).then(function(e){s.add(o,e);i()})}))});Promise.all(i).then(function(){t(true)})}}}).then(function(t){if(t){s.create();m.create();e.mode()}})},mode:function(){var e=s.data.length;if(!e||s.errnum==e)return;var t=m.step=="next"?1:-1;var n=function(){var n=s.index+t;if(n>e||n<0){n=m.step=="next"?0:e-1}s.index=n};var i=function(){var t=a.random(e);if(s.index!==t){s.index=t}else{n()}};switch(this.options.mode){case"random":i();break;case"order":n();break;case"loop":if(m.step)n();if(s.index==-1)i();break}this.init()},"switch":function(e){if(typeof e=="number"&&e!=s.index&&s.current()&&!s.current().error){s.index=e;this.init()}},init:function(){var e=s.current();if(!e||e["error"]){this.mode();return}var t=false;if(!i.paused){t=true;this.stop()}i.attr("src",e.url);i.attr("title",e.name+" - "+e.artist);p.create();if(this.options.type=="audio")l.create();if(t==true){this.play()}},play:function(){f&&f.player.pause();if(s.current().error){this.mode();return}var e=this;i.play().then(function(){s.scroll()}).catch(function(e){})},pause:function(){i.pause();document.title=y},stop:function(){i.pause();i.currentTime=0;document.title=y},seek:function(e){e=Math.max(e,0);e=Math.min(e,i.duration);i.currentTime=e;p.update(e/i.duration)},mini:function(){r.hide()}};var r={el:null,create:function(){if(this.el)return;this.el=e.createChild("div",{className:"player-info",innerHTML:(e.player.options.type=="audio"?'<div class="preview"></div>':"")+'<div class="controller"></div><div class="playlist"></div>'},"after");l.el=this.el.child(".preview");s.el=this.el.child(".playlist");m.el=this.el.child(".controller")},hide:function(){var e=this.el;e.addClass("hide");window.setTimeout(function(){e.removeClass("show hide")},300)}};var s={el:null,data:[],index:-1,errnum:0,add:function(e,t){var n=this;t.forEach(function(t,a){t.group=e;t.name=t.name||t.title||"Meida name";t.artist=t.artist||t.author||"Anonymous";t.cover=t.cover||t.pic;t.type=t.type||"normal";n.data.push(t)})},clear:function(){this.data=[];this.el.innerHTML=""},create:function(){var t=this.el;this.data.map(function(n,a){if(n.el)return;var r="list-"+e.player._id+"-"+n.group;var o=u("#"+r);if(!o){o=t.createChild("div",{id:r,className:e.player.group?"tab":"",innerHTML:"<ol></ol>"});if(e.player.group){o.attr("data-title",e.player.options.rawList[n.group]["title"]).attr("data-id",e.player._id)}}n.el=o.child("ol").createChild("li",{title:n.name+" - "+n.artist,innerHTML:'<span class="info"><span>'+n.name+"</span><span>"+n.artist+"</span></span>",onclick:function(t){var n=t.currentTarget;if(s.index===a&&p.el){if(i.paused){e.player.play()}else{e.player.seek(i.duration*p.percent(t,n))}return}e.player.switch(a);e.player.play()}});return n});he()},current:function(){return this.data[this.index]},scroll:function(){var e=this.current();var t=this.el.child("li.active");t&&t.removeClass("active");var n=this.el.child(".tab.active");n&&n.removeClass("active");t=this.el.find(".nav li")[e.group];t&&t.addClass("active");n=this.el.find(".tab")[e.group];n&&n.addClass("active");c(e.el,e.el.offsetTop);return this},title:function(){if(i.paused)return;var e=this.current();document.title="Now Playing..."+e["name"]+" - "+e["artist"]+" | "+y},error:function(){var e=this.current();e.el.removeClass("current").addClass("error");e.error=true;this.errnum++}};var o={el:null,data:null,index:0,create:function(e){var t=s.index;var n=this;var a=s.current().lrc;var i=function(a){if(t!==s.index)return;n.data=n.parse(a);var i="";n.data.forEach(function(e,t){i+="<p"+(t===0?' class="current"':"")+">"+e[1]+"</p>"});n.el=e.createChild("div",{className:"inner",innerHTML:i},"replace");n.index=0};if(a.startsWith("http"))this.fetch(a,i);else i(a)},update:function(e){if(!this.data)return;if(this.index>this.data.length-1||e<this.data[this.index][0]||(!this.data[this.index+1]||e>=this.data[this.index+1][0])){for(var t=0;t<this.data.length;t++){if(e>=this.data[t][0]&&(!this.data[t+1]||e<this.data[t+1][0])){this.index=t;var n=-(this.index-1);this.el.style.transform="translateY("+n+"rem)";this.el.style.webkitTransform="translateY("+n+"rem)";this.el.getElementsByClassName("current")[0].removeClass("current");this.el.getElementsByTagName("p")[t].addClass("current")}}}},parse:function(e){if(e){e=e.replace(/([^\]^\n])\[/g,function(e,t){return t+"\n["});const t=e.split("\n");var n=[];const a=t.length;for(var i=0;i<a;i++){const r=t[i].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g);const s=t[i].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").replace(/^\s+|\s+$/g,"");if(r){const o=r.length;for(var c=0;c<o;c++){const l=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(r[c]);const d=l[1]*60;const u=parseInt(l[2]);const f=l[4]?parseInt(l[4])/((l[4]+"").length===2?100:1e3):0;const h=d+u+f;n.push([h,s])}}}n=n.filter(function(e){return e[1]});n.sort(function(e,t){return e[0]-t[0]});return n}else{return[]}},fetch:function(e,t){fetch(e).then(function(e){return e.text()}).then(function(e){t(e)}).catch(function(e){})}};var l={el:null,create:function(){var t=s.current();this.el.innerHTML='<div class="cover"><div class="disc"><img src="'+t.cover+'" class="blur" /></div></div>'+'<div class="info"><h4 class="title">'+t.name+"</h4><span>"+t.artist+"</span>"+'<div class="lrc"></div></div>';this.el.child(".cover").addEventListener("click",e.player.options.events["play-pause"]);o.create(this.el.child(".lrc"))}};var p={el:null,bar:null,create:function(){var e=s.current().el;if(e){if(this.el){this.el.parentNode.removeClass("current").removeEventListener(a.nameMap.dragStart,this.drag);this.el.remove()}this.el=e.createChild("div",{className:"progress"});this.el.attr("data-dtime",a.secondToTime(0));this.bar=this.el.createChild("div",{className:"bar"});e.addClass("current");e.addEventListener(a.nameMap.dragStart,this.drag);s.scroll()}},update:function(e){this.bar.width(Math.floor(e*100)+"%");this.el.attr("data-ptime",a.secondToTime(e*i.duration))},seeking:function(e){if(e)this.el.addClass("seeking");else this.el.removeClass("seeking")},percent:function(e,t){var n=((e.clientX||e.changedTouches[0].clientX)-t.left())/t.width();n=Math.max(n,0);return Math.min(n,1)},drag:function(){var t=s.current().el;var n=function(e){var n=p.percent(e,t);p.update(n);o.update(n*i.duration)};var r=function(s){t.removeEventListener(a.nameMap.dragEnd,r);t.removeEventListener(a.nameMap.dragMove,n);var o=p.percent(s,t);p.update(o);e.player.seek(o*i.duration);i.disableTimeupdate=false;p.seeking(false)};i.disableTimeupdate=true;p.seeking(true);t.addEventListener(a.nameMap.dragMove,n);t.addEventListener(a.nameMap.dragEnd,r)}};var m={el:null,btns:{},step:"next",create:function(){if(!e.player.options.controls)return;var t=this;e.player.options.controls.forEach(function(n){if(t.btns[n])return;var a="";switch(n){case"mode":a=" "+e.player.options.mode;break;case"volume":a=" "+(i.muted?"off":"on");break}t.btns[n]=t.el.createChild("div",{className:n+a+" btn",onclick:function(a){t[n]?t[n](a):e.player.options.events[n](a)}})})},mode:function(t){switch(e.player.options.mode){case"loop":e.player.options.mode="random";break;case"random":e.player.options.mode="order";break;default:e.player.options.mode="loop"}this.btns["mode"].className="mode "+e.player.options.mode+" btn";d.set("_PlayerMode",e.player.options.mode)},volume:function(e){i.muted=!i.muted;this.btns["volume"].className="volume "+(i.muted?"off":"on")+" btn"},backward:function(t){m.step="prev";e.player.mode()},forward:function(t){m.step="next";e.player.mode()}};var v={onerror:function(){s.error();e.player.mode()},ondurationchange:function(){if(i.duration!==1){p.el.attr("data-dtime",a.secondToTime(i.duration))}},onloadedmetadata:function(){e.player.seek(0);p.el.attr("data-dtime",a.secondToTime(i.duration))},onplay:function(){e.parentNode.addClass("playing");$(this.attr("title"));f=e},onpause:function(){e.parentNode.removeClass("playing");f=null},ontimeupdate:function(){if(!this.disableTimeupdate){p.update(this.currentTime/this.duration);o.update(this.currentTime)}},onended:function(t){e.player.mode();e.player.play()}};var g={el:{},create:function(){if(!e.player.options.btns)return;var t=this;e.player.options.btns.forEach(function(n){if(t.el[n])return;t.el[n]=e.createChild("div",{className:n+" btn",onclick:function(t){e.player.fetch().then(function(){e.player.options.events[n](t)})}})})}};var b=function(t){if(e.player.created)return;e.player.options=Object.assign(n,t);e.player.options.mode=d.get("_PlayerMode")||e.player.options.mode;g.create();i=e.createChild(e.player.options.type,v);r.create();e.parentNode.addClass(e.player.options.type);e.player.created=true};b(t);return e};var m=e.statics.indexOf("//")>0?e.statics:e.root;var v={x:"undefined",y:"undefined"};var g=0;var y,b;const w=document.getElementsByTagName("body")[0];const C=document.documentElement;const x=u("#container");const k=u("#loading");const L=u("#nav");const E=u("#header");const T=L.child(".toggle");const N=u("#quick");const M=u("#sidebar");const O=u("#brand");var j=u("#tool"),I,H,q,A;var S=u("#search");var R,_,P;var z=window.innerHeight;var W=window.innerWidth;var B=0,Y=window.location.href;var D;const F=lozad("img, [data-background-image]",{loaded:function(e){e.addClass("lozaded")}});const U={timer:null,lock:false,show:function(){clearTimeout(this.timer);document.body.removeClass("loaded");k.attr("style","display:block");U.lock=false},hide:function(t){if(!e.loader.start)t=-1;this.timer=setTimeout(this.vanish,t||3e3)},vanish:function(){if(U.lock)return;if(e.loader.start)l(k,0);document.body.addClass("loaded");U.lock=true}};const V=function(e){var t=u(".theme .ic");if(e=="dark"){C.attr("data-theme",e);t.removeClass("i-sun");t.addClass("i-moon")}else{C.attr("data-theme",null);t.removeClass("i-moon");t.addClass("i-sun")}};const X=function(e){if(C.attr("data-theme")=="dark")e="#222";u('meta[name="theme-color"]').attr("content",e)};const G=function(){window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e){if(e.matches){V("dark")}else{V()}});var t=d.get("theme");if(t){V(t)}else{if(e.darkmode){V("dark")}}u(".theme").addEventListener("click",function(e){var t=e.currentTarget.child(".ic");var n=w.createChild("div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'});var a=function(){l(n,{delay:2500,opacity:0},function(){w.removeChild(n)})};if(t.hasClass("i-sun")){var i=function(){n.addClass("dark");V("dark");d.set("theme","dark");a()}}else{n.addClass("dark");var i=function(){n.removeClass("dark");V();d.set("theme","light");a()}}l(n,1,function(){setTimeout(i,210)})})};const Q=function(){document.addEventListener("visibilitychange",function(){switch(document.visibilityState){case"hidden":u('[rel="icon"]').attr("href",m+e.favicon.hidden);document.title=LOCAL.favicon.hide;if(e.loader.switch)U.show();clearTimeout(b);break;case"visible":u('[rel="icon"]').attr("href",m+e.favicon.normal);document.title=LOCAL.favicon.show;if(e.loader.switch)U.hide(1e3);b=setTimeout(function(){document.title=y},2e3);break}})};const $=function(e){if(!e)return;var t=w.createChild("div",{innerHTML:e,className:"tip"});setTimeout(function(){t.addClass("hide");setTimeout(function(){w.removeChild(t)},300)},3e3)};const J=function(e){R=L.height();_=E.height();P=_+u("#waves").height();if(W!=window.innerWidth)ne(null,1);z=window.innerHeight;W=window.innerWidth;M.child(".panels").height(z+"px")};const K=function(e){var t=window.innerHeight;var a=n();var i=a>t?a-t:document.body.scrollHeight-t;var r=window.pageYOffset>_;var s=window.pageYOffset>0;if(r){X("#FFF")}else{X("#222")}L.toggleClass("show",r);j.toggleClass("affix",s);O.toggleClass("affix",s);M.toggleClass("affix",window.pageYOffset>P&&document.body.offsetWidth>991);if(typeof v.y=="undefined"){v.y=window.pageYOffset}g=v.y-window.pageYOffset;if(g<0){L.removeClass("up");L.toggleClass("down",r)}else if(g>0){L.removeClass("down");L.toggleClass("up",r)}else{}v.y=window.pageYOffset;var o=Math.round(Math.min(100*window.pageYOffset/i,100))+"%";H.child("span").innerText=o;u(".percent").width(o)};const Z=function(){if(e.auto_scroll)d.set(Y,v.y)};const ee=function(t){var n=window.location.hash;var a=null;if(B){d.del(Y);return}if(n)a=u(decodeURI(n));else{a=e.auto_scroll?parseInt(d.get(Y)):0}if(a){c(a);B=1}if(t&&n&&!B){c(a);B=1}};const te=function(e,t){var n=w.createChild("textarea",{style:{top:window.scrollY+"px",position:"absolute",opacity:"0"},readOnly:true,value:e});const a=document.getSelection();const i=a.rangeCount>0?a.getRangeAt(0):false;n.select();n.setSelectionRange(0,e.length);n.readOnly=false;var r=document.execCommand("copy");t&&t(r);n.blur();if(i){a.removeAllRanges();a.addRange(i)}w.removeChild(n)};const ne=function(e,t){if(M.hasClass("on")){M.removeClass("on");T.removeClass("close");if(t){M.style=""}else{l(M,"slideRightOut")}}else{if(t){M.style=""}else{l(M,"slideRightIn",function(){M.addClass("on");T.addClass("close")})}}};const ae=function(){var e=M.child(".inner");var t=M.find(".panel");if(M.child(".tab")){e.removeChild(M.child(".tab"))}var n=document.createElement("ul"),a="active";n.className="tab";["contents","related","overview"].forEach(function(e){var t=M.child(".panel."+e);if(t.innerHTML.replace(/(^\s*)|(\s*$)/g,"").length<1){if(e=="contents"){A.display("none")}return}if(e=="contents"){A.display("")}var i=document.createElement("li");var r=document.createElement("span");var s=document.createTextNode(t.attr("data-title"));r.appendChild(s);i.appendChild(r);i.addClass(e+" item");if(a){t.addClass(a);i.addClass(a)}else{t.removeClass("active")}i.addEventListener("click",function(e){var t=event.currentTarget;if(t.hasClass("active"))return;M.find(".tab .item").forEach(function(e){e.removeClass("active")});M.find(".panel").forEach(function(e){e.removeClass("active")});M.child(".panel."+t.className.replace(" item","")).addClass("active");t.addClass("active")});n.appendChild(i);a=""});if(n.childNodes.length>1){e.insertBefore(n,e.childNodes[0]);M.child(".panels").style.paddingTop=""}else{M.child(".panels").style.paddingTop=".625rem"}};const ie=function(){var t=u.all(".contents li");if(t.length<1){return}var n=Array.prototype.slice.call(t)||[];var a=null;n=n.map(function(t,n){var i=t.child("a.toc-link");var s=u(decodeURI(i.attr("href")));if(!s)return;var o=s.child("a.anchor");var l=function(e){e.preventDefault();var t=u(decodeURI(e.currentTarget.attr("href")));a=n;c(t,null,function(){r(n);a=null})};i.addEventListener("click",l);o&&o.addEventListener("click",function(t){l(t);te(e.hostname+"/"+LOCAL.path+t.currentTarget.attr("href"))});return s});var i=M.child(".contents.panel");var r=function(e,a){var r=t[e];if(!r)return;if(r.hasClass("current")){return}u.each(".toc .active",function(e){e&&e.removeClass("active current")});n.forEach(function(e){e&&e.removeClass("active")});r.addClass("active current");n[e]&&n[e].addClass("active");var s=r.parentNode;while(!s.matches(".contents")){if(s.matches("li")){s.addClass("active");var o=u(s.child("a.toc-link").attr("href"));if(o){o.addClass("active")}}s=s.parentNode}if(getComputedStyle(M).display!="none"&&i.hasClass("active")){c(i,r.offsetTop-i.offsetHeight/4)}};var s=function(e){var t=0;var a=e[t];if(a.boundingClientRect.top>0){t=n.indexOf(a.target);return t===0?0:t-1}for(;t<e.length;t++){if(e[t].boundingClientRect.top<=0){a=e[t]}else{return n.indexOf(a.target)}}return n.indexOf(a.target)};var o=function(){if(!window.IntersectionObserver)return;var e=new IntersectionObserver(function(e,t){var n=s(e)+(g<0?1:0);if(a===null){r(n)}},{rootMargin:"0px 0px -100% 0px",threshold:0});n.forEach(function(t){t&&e.observe(t)})};o()};const re=function(){c(0)};const se=function(){c(parseInt(x.height()))};const oe=function(){c(u("#comments"))};const ce=function(){u.each(".menu .item:not(.title)",function(t){var n=t.child("a[href]");if(!n)return;var a=n.pathname===location.pathname||n.pathname===location.pathname.replace("index.html","");var i=!e.root.startsWith(n.pathname)&&location.pathname.startsWith(n.pathname);var r=n.hostname===location.hostname&&(a||i);t.toggleClass("active",r);t.parentNode.parentNode.toggleClass("expand",t.parentNode.hasClass("submenu")&&t.parentNode.child(".active"))})};const le=function(){if(!u(".index.wrap"))return;if(!window.IntersectionObserver){u.each(".index.wrap article.item, .index.wrap section.item",function(e){if(e.hasClass("show")===false){e.addClass("show")}})}else{var e=new IntersectionObserver(function(t){t.forEach(function(t){if(t.target.hasClass("show")){e.unobserve(t.target)}else{if(t.isIntersecting){t.target.addClass("show");e.unobserve(t.target)}}})},{root:null,threshold:[.3]});u.each(".index.wrap article.item, .index.wrap section.item",function(t){e.observe(t)});u(".index.wrap .item:first-child").addClass("show")}u.each(".cards .item",function(e,t){["mouseenter","touchstart"].forEach(function(t){e.addEventListener(t,function(t){if(u(".cards .item.active")){u(".cards .item.active").removeClass("active")}e.addClass("active")})});["mouseleave"].forEach(function(t){e.addEventListener(t,function(t){e.removeClass("active")})})})};const de=function(){u.each("span.exturl",function(e){var t=document.createElement("a");t.href=decodeURIComponent(atob(e.dataset.url).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));t.rel="noopener external nofollow noreferrer";t.target="_blank";t.className=e.className;t.title=e.title||e.innerText;t.innerHTML=e.innerHTML;if(e.dataset.backgroundImage){t.dataset.backgroundImage=e.dataset.backgroundImage}e.parentNode.replaceChild(t,e)})};const ue=function(e){if(u(e+" .md img")){s("fancybox");r("fancybox",function(){var t=jQuery.noConflict();u.each(e+" p.gallery",function(e){var t=document.createElement("div");t.className="gallery";t.attr("data-height",e.attr("data-height")||120);t.innerHTML=e.innerHTML.replace(/<br>/g,"");e.parentNode.insertBefore(t,e);e.remove()});u.each(e+" .md img:not(.emoji):not(.vemoji)",function(e){var n=t(e);var a,i="image-info";if(!n.is("a img")){var r=n.attr("data-src")||n.attr("src");n.data("safe-src",r);var s=n.wrap('<a class="fancybox" href="'+r+'" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>').parent("a");if(!n.is(".gallery img")){s.attr("data-fancybox","default").attr("rel","default")}else{i="jg-caption"}}if(a=e.attr("title")){var o=document.createElement("span");var c=document.createTextNode(a);o.appendChild(c);o.addClass(i);e.insertAfter(o)}});u.each(e+" div.gallery",function(e,n){t(e).justifiedGallery({rowHeight:t(e).data("height")||120,rel:"gallery-"+n}).on("jg.complete",function(){t(this).find("a").each(function(e,t){t.attr("data-fancybox","gallery-"+n)})})});t.fancybox.defaults.hash=false;t(e+" .fancybox").fancybox({loop:true,helpers:{overlay:{locked:false}}})},window.jQuery)}};const fe=function(){pe();if(!u(".md"))return;ue(".post.block");u(".post.block").oncopy=function(e){$(LOCAL.copyright);var t=u("#copyright");if(window.getSelection().toString().length>30&&t){e.preventDefault();var n="# "+t.child(".author").innerText;var a="# "+t.child(".link").innerText;var i="# "+t.child(".license").innerText;var r=n+"<br>"+a+"<br>"+i+"<br><br>"+window.getSelection().toString().replace(/\r\n/g,"<br>");var s=n+"\n"+a+"\n"+i+"\n\n"+window.getSelection().toString().replace(/\r\n/g,"\n");if(e.clipboardData){e.clipboardData.setData("text/html",r);e.clipboardData.setData("text/plain",s)}else if(window.clipboardData){return window.clipboardData.setData("text",s)}}};u.each("li ruby",function(e){var t=e.parentNode;if(e.parentNode.tagName!="LI"){t=e.parentNode.parentNode}t.addClass("ruby")});u.each(".md table",function(e){e.wrap({className:"table-container"})});u.each(".highlight > .table-container",function(e){e.className="code-container"});u.each("figure.highlight",function(e){var t=e.child(".code-container");var n=e.child("figcaption");e.insertAdjacentHTML("beforeend",'<div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div>');var a=e.child(".copy-btn");a.addEventListener("click",function(e){var n=e.currentTarget;var a="",i="";t.find("pre").forEach(function(e){i+=a+e.innerText;a="\n"});te(i,function(e){n.child(".ic").className=e?"ic i-check":"ic i-times";n.blur();$(LOCAL.copyright)})});a.addEventListener("mouseleave",function(e){setTimeout(function(){e.target.child(".ic").className="ic i-clipboard"},1e3)});var i=e.child(".breakline-btn");i.addEventListener("click",function(t){var n=t.currentTarget;if(e.hasClass("breakline")){e.removeClass("breakline");n.child(".ic").className="ic i-align-left"}else{e.addClass("breakline");n.child(".ic").className="ic i-align-justify"}});var r=e.child(".fullscreen-btn");var s=function(){e.removeClass("fullscreen");e.scrollTop=0;w.removeClass("fullscreen");r.child(".ic").className="ic i-expand"};var o=function(t){var n=t.currentTarget;if(e.hasClass("fullscreen")){s();f&&f();c(e)}else{e.addClass("fullscreen");w.addClass("fullscreen");r.child(".ic").className="ic i-compress";u&&u()}};r.addEventListener("click",o);n&&n.addEventListener("click",o);if(t&&t.height()>300){t.style.maxHeight="300px";t.insertAdjacentHTML("beforeend",'<div class="show-btn"><i class="ic i-angle-down"></i></div>');var l=t.child(".show-btn");var d=l.child("i");var u=function(){t.style.maxHeight="";l.addClass("open")};var f=function(){t.style.maxHeight="300px";l.removeClass("open")};l.addEventListener("click",function(e){if(l.hasClass("open")){s();f();c(t)}else{u()}})}});u.each("pre.mermaid > svg",function(e){e.style.maxWidth=""});u.each(".reward button",function(e){e.addEventListener("click",function(e){e.preventDefault();var t=u("#qr");if(t.display()==="inline-flex"){l(t,0)}else{l(t,1,function(){t.display("inline-flex")})}})});u.each(".quiz > ul.options li",function(e){e.addEventListener("click",function(t){if(e.hasClass("correct")){e.toggleClass("right");e.parentNode.parentNode.addClass("show")}else{e.toggleClass("wrong")}})});u.each(".quiz > p",function(e){e.addEventListener("click",function(t){e.parentNode.toggleClass("show")})});u.each(".quiz > p:first-child",function(e){var t=e.parentNode;var n="choice";if(t.hasClass("true")||t.hasClass("false"))n="true_false";if(t.hasClass("multi"))n="multiple";if(t.hasClass("fill"))n="gap_fill";if(t.hasClass("essay"))n="essay";e.attr("data-type",LOCAL.quiz[n])});u.each(".quiz .mistake",function(e){e.attr("data-type",LOCAL.quiz.mistake)});u.each("div.tags a",function(e){e.className=["primary","success","info","warning","danger"][Math.floor(Math.random()*5)]});u.each(".md div.player",function(e){p(e,{type:e.attr("data-type"),mode:"order",btns:[]}).player.load(JSON.parse(e.attr("data-src"))).fetch()})};const he=function(){var e;u.each("div.tab",function(t,n){if(t.attr("data-ready"))return;var a=t.attr("data-id");var i=t.attr("data-title");var r=u("#"+a);if(!r){r=document.createElement("div");r.className="tabs";r.id=a;r.innerHTML='<div class="show-btn"></div>';var s=r.child(".show-btn");s.addEventListener("click",function(e){c(r)});t.parentNode.insertBefore(r,t);e=true}else{e=false}var o=r.child(".nav ul");if(!o){o=r.createChild("div",{className:"nav",innerHTML:"<ul></ul>"}).child("ul")}var l=o.createChild("li",{innerHTML:i});if(e){l.addClass("active");
t.addClass("active")}l.addEventListener("click",function(e){var n=e.currentTarget;r.find(".active").forEach(function(e){e.removeClass("active")});t.addClass("active");n.addClass("active")});r.appendChild(t);t.attr("data-ready",true)})};const pe=function(){var e=u("#comments");if(!e){q.display("none");return}else{q.display("")}if(!window.IntersectionObserver){s("valine")}else{var t=new IntersectionObserver(function(e,t){var n=e[0];s("valine");if(n.isIntersecting){l(u("#comments"),"bounceUpIn");t.disconnect()}});t.observe(e)}};const me=function(t){if(e.search===null)return;if(!S){S=w.createChild("div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'})}var n=instantsearch({indexName:e.search.indexName,searchClient:algoliasearch(e.search.appID,e.search.apiKey),searchFunction:function(e){var t=u(".search-input");if(t.value){e.search()}}});n.on("render",function(){t.refresh(u("#search-hits"))});n.addWidgets([instantsearch.widgets.configure({hitsPerPage:e.search.hits.per_page||10}),instantsearch.widgets.searchBox({container:".search-input-container",placeholder:LOCAL.search.placeholder,showReset:false,showSubmit:false,showLoadingIndicator:false,cssClasses:{input:"search-input"}}),instantsearch.widgets.stats({container:"#search-stats",templates:{text:function(e){var t=LOCAL.search.stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS);return t+'<span class="algolia-powered"></span><hr>'}}}),instantsearch.widgets.hits({container:"#search-hits",templates:{item:function(t){var n=t.categories?"<span>"+t.categories.join('<i class="ic i-angle-right"></i>')+"</span>":"";return'<a href="'+e.root+t.path+'">'+n+t._highlightResult.title.value+"</a>"},empty:function(e){return'<div id="hits-empty">'+LOCAL.search.empty.replace(/\$\{query}/,e.query)+"</div>"}},cssClasses:{item:"item"}}),instantsearch.widgets.pagination({container:"#search-pagination",scrollTo:false,showFirst:false,showLast:false,templates:{first:'<i class="ic i-angle-double-left"></i>',last:'<i class="ic i-angle-double-right"></i>',previous:'<i class="ic i-angle-left"></i>',next:'<i class="ic i-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",selectedItem:"current",disabledItem:"disabled-item"}})]);n.start();u.each(".search",function(e){e.addEventListener("click",function(){document.body.style.overflow="hidden";l(S,"shrinkIn",function(){u(".search-input").focus()})})});const a=function(){document.body.style.overflow="";l(S,0)};S.addEventListener("click",function(e){if(e.target===S){a()}});u(".close-btn").addEventListener("click",a);window.addEventListener("pjax:success",a);window.addEventListener("keyup",function(e){if(e.key==="Escape"){a()}})};const ve=function(){u.each(".overview .menu > .item",function(e){L.child(".menu").appendChild(e.cloneNode(true))});k.addEventListener("click",U.vanish);T.addEventListener("click",ne);u(".dimmer").addEventListener("click",ne);N.child(".down").addEventListener("click",se);N.child(".up").addEventListener("click",re);if(!j){j=E.createChild("div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})}I=j.child(".player");H=j.child(".back-to-top");q=j.child(".chat");A=j.child(".contents");H.addEventListener("click",re);q.addEventListener("click",oe);A.addEventListener("click",ne);p(I);u("main").addEventListener("click",function(){I.player.mini()})};const ge=function(){Z();if(M.hasClass("on")){l(M,function(){M.removeClass("on");T.removeClass("close")})}u("#main").innerHTML="";u("#main").appendChild(k.lastChild.cloneNode(true));c(0)};const ye=function(t){B=0;Y=window.location.href;s("katex");r("copy_tex");s("mermaid");r("chart");r("valine",function(){var t=Object.assign({},e.valine);t=Object.assign(t,LOCAL.valine||{});t.el="#comments";t.pathname=LOCAL.path;t.pjax=D;t.lazyload=F;new MiniValine(t);setTimeout(function(){ee(1);ue(".v")},1e3)},window.MiniValine);if(!t){u.each("script[data-pjax]",o)}y=document.title;J();ce();ae();ie();de();fe();he();I.player.load(LOCAL.audio||e.audio||{});U.hide();setTimeout(function(){ee()},500);le();F.observe()};const be=function(){ve();D=new Pjax({selectors:["head title",".languages",".pjax","script[data-config]"],analytics:false,cacheBust:false});e.quicklink.ignores=LOCAL.ignores;quicklink.listen(e.quicklink);Q();G();me(D);window.addEventListener("scroll",K);window.addEventListener("resize",J);window.addEventListener("pjax:send",ge);window.addEventListener("pjax:success",ye);window.addEventListener("beforeunload",function(){Z()});ye(1)};window.addEventListener("DOMContentLoaded",be);console.log("%c Theme.Shoka v"+e.version+" %c https://shoka.lostyu.me/ ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");var we=document.createElement("canvas");we.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:9999999";document.body.appendChild(we);var Ce=we.getContext("2d");var xe=30;var ke=0;var Le=0;var Ee="click";var Te=e.fireworks;function Ne(){we.width=window.innerWidth*2;we.height=window.innerHeight*2;we.style.width=window.innerWidth+"px";we.style.height=window.innerHeight+"px";we.getContext("2d").scale(2,2)}function Me(e){ke=e.clientX||e.touches&&e.touches[0].clientX;Le=e.clientY||e.touches&&e.touches[0].clientY}function Oe(e){var t=anime.random(0,360)*Math.PI/180;var n=anime.random(50,180);var a=[-1,1][anime.random(0,1)]*n;return{x:e.x+a*Math.cos(t),y:e.y+a*Math.sin(t)}}function je(e,t){var n={};n.x=e;n.y=t;n.color=Te[anime.random(0,Te.length-1)];n.radius=anime.random(16,32);n.endPos=Oe(n);n.draw=function(){Ce.beginPath();Ce.arc(n.x,n.y,n.radius,0,2*Math.PI,true);Ce.fillStyle=n.color;Ce.fill()};return n}function Ie(e,t){var n={};n.x=e;n.y=t;n.color="#FFF";n.radius=.1;n.alpha=.5;n.lineWidth=6;n.draw=function(){Ce.globalAlpha=n.alpha;Ce.beginPath();Ce.arc(n.x,n.y,n.radius,0,2*Math.PI,true);Ce.lineWidth=n.lineWidth;Ce.strokeStyle=n.color;Ce.stroke();Ce.globalAlpha=1};return n}function He(e){for(var t=0;t<e.animatables.length;t++){e.animatables[t].target.draw()}}function qe(e,t){var n=Ie(e,t);var a=[];for(var i=0;i<xe;i++){a.push(je(e,t))}anime.timeline().add({targets:a,x:function(e){return e.endPos.x},y:function(e){return e.endPos.y},radius:.1,duration:anime.random(1200,1800),easing:"easeOutExpo",update:He}).add({targets:n,radius:anime.random(80,160),lineWidth:0,alpha:{value:0,easing:"linear",duration:anime.random(600,800)},duration:anime.random(1200,1800),easing:"easeOutExpo",update:He},0)}var Ae=anime({duration:Infinity,update:function(){Ce.clearRect(0,0,we.width,we.height)}});document.addEventListener(Ee,function(e){Ae.play();Me(e);qe(ke,Le)},false);Ne();window.addEventListener("resize",Ne,false);
//rebuild by hrmmi 