(this["webpackJsonpdeep-discoveries-frontend"]=this["webpackJsonpdeep-discoveries-frontend"]||[]).push([[0],{226:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(12),c=n.n(r),s=n(14),l=n(34),o=n(102),d=n.n(o),u=n(135),h=n(284),j=n(285),f=n(277),A=n(156),b=n(281),p=n(282),x=n(283),g=n(294),m=n(295),O=n(56),v=n(89),y=n(272),w=n(274),D=n(276),C=n(80),k=n.n(C),S=n(51),L=n(23),M=n.n(L),P=(n(118),n(179),n(180),n(3));function E(e){var t=e.src,n=e.shadingColor,r=e.shadingOpacity,c=e.selections,o=e.setSelections,d=Object(S.a)(e,["src","shadingColor","shadingOpacity","selections","setSelections"]),u="imageviewer_component",h=Object(a.useState)(new Image),j=Object(s.a)(h,1)[0];j.src=t;var f=Object(a.useState)(j.naturalWidth),A=Object(s.a)(f,2),b=A[0],p=A[1],x=Object(a.useState)(j.naturalHeight),g=Object(s.a)(x,2),m=g[0],O=g[1];return i.a.useEffect((function(){var e=b/j.naturalWidth,t=m/j.naturalHeight,a=e<t?e:t,i=e<t?j.naturalWidth*a*.025*.5:j.naturalHeight*a*.025*.5,s=[];function l(e,t,n){return new M.a.Circle({x:e,y:t,radius:2*i,fillPatternImage:j,fillPatternOffset:{x:e,y:t},fillPatternScale:{x:a,y:a},opacity:n})}var d=new M.a.Stage({container:u,width:j.naturalWidth*a,height:j.naturalHeight*a}),h=new M.a.Image({x:0,y:0,width:j.naturalWidth*a,height:j.naturalHeight*a,image:j}),f=new M.a.Rect({x:0,y:0,width:h.width(),height:h.height(),fill:n,strokeWidth:0,opacity:r,visible:!0}),A=l(0,0,1);A.visible(!1),A.draggable(!0),A.stroke("white"),A.strokeWidth(1);var p=new M.a.Layer;p.add(h),p.add(f),p.add(A),d.add(p),c.forEach((function(e){e.forEach((function(e){var t=e.fillPatternScaleX();t!==e.fillPatternScaleY()&&console.error("Inconsistent scale");var n=Math.max(Math.min(a*(e.x()/t),j.width*a-1),0),i=Math.max(Math.min(a*(e.y()/t),j.height*a-1),0),r=Math.max(a*e.radius()/t,1);e.x(n),e.y(i),e.radius(r),e.fillPatternOffset({x:n,y:i}),e.fillPatternScale({x:a,y:a}),p.add(e)}))})),d.on("mouseenter",(function(e){A.visible(!0),d.container().style.cursor="none"})),d.on("mouseleave",(function(e){A.visible(!1),d.container().style.cursor="default",p.draw()})),d.on("mousemove",(function(e){var t=e.evt.layerX-i,n=e.evt.layerY-i;A.x(t),A.y(n),A.fillPatternOffset({x:t,y:n}),p.batchDraw()})),d.on("mousedown dragmove",(function(e){var t=l(e.evt.layerX-i,e.evt.layerY-i,1);p.add(t),s.push(t),p.batchDraw()})),d.on("mouseup dragend dragleave dragexit",(function(){var e=c.slice();e.push(s),o(e)})),p.draw()}),[b,m,n,r,j,c,o]),Object(a.useEffect)((function(){var e=document.getElementById(u);function t(){(b<e.offsetWidth-1||e.offsetWidth<e.scrollWidth)&&p(e.offsetWidth),(m<e.offsetHeight-1||e.offsetHeight<e.scrollHeight)&&O(e.offsetHeight)}return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[j,b,m]),Object(P.jsx)("div",{children:Object(P.jsx)("div",Object(l.a)({id:u},d))})}function I(e){var t=e.id,n=e.src,i=e.shadingColor,r=e.shadingOpacity,c=e.selections,o=Object(S.a)(e,["id","src","shadingColor","shadingOpacity","selections"]),d="ScaledImage_"+t,u=Object(a.useState)(0),h=Object(s.a)(u,2),j=h[0],f=h[1],A=Object(a.useState)(new Image),b=Object(s.a)(A,1)[0];return b.src=n,Object(a.useEffect)((function(){var e=document.getElementById(d);function t(){b.width===e.offsetWidth&&e.offsetWidth===e.scrollWidth||f(e.offsetWidth)}return t(),window.addEventListener("resize",t),b.onload=function(){var e=j/b.width,t=new M.a.Stage({container:d,width:j,height:b.height*e}),n=new M.a.Image({x:0,y:0,width:b.width*e,height:b.height*e,image:b}),a=new M.a.Rect({x:0,y:0,width:n.width(),height:n.height(),fill:i,strokeWidth:0,opacity:r,visible:!0}),s=new M.a.Layer;s.add(n),s.add(a),c.forEach((function(t){t.forEach((function(t){s.add(function(t){var n=t.fillPatternScaleX();n!==t.fillPatternScaleY()&&console.error("Inconsistent scale");var a=Math.max(Math.min(e*(t.x()/n),b.width*e-1),0),i=Math.max(Math.min(e*(t.y()/n),b.height*e-1),0),r=Math.max(e*t.radius()/n,1);return new M.a.Circle({x:a,y:i,radius:r,fillPatternImage:t.fillPatternImage(),fillPatternOffset:{x:a,y:i},fillPatternScale:{x:e,y:e},opacity:t.opacity()})}(t))}))})),t.add(s),s.draw()},function(){window.removeEventListener("resize",t)}}),[d,b,j,i,r,c]),Object(P.jsx)("div",Object(l.a)({id:d},o))}var H=n(137),T=n.n(H),F=Object(y.a)((function(e){return{masonry:{display:"flex",marginLeft:"-10px"},masonryColumn:{paddingLeft:"10px"},masonryCell:{marginTop:"10px",position:"relative","&:hover":{cursor:"pointer",opacity:e.palette.action.hoverOpacity}}}}));function R(e){var t=e.input,n=e.setInput,i=e.detailList,r=e.setDetailList,c=e.cancelDetailSearch,l=F(),o=Object(a.useState)(t),d=Object(s.a)(o,2),u=d[0],h=d[1],j=Object(a.useState)(t.cloneSelections()),f=Object(s.a)(j,2),b=f[0],p=f[1],x="black";function g(e){r({type:"remove",payload:e})}var m,O=[{datum:t,deleteFunc:function(e){if(0!==i.length){var t=i[0];r({type:"remove",payload:t}),n(t)}else n(void 0)}}].concat(i.map((function(e){return{datum:e,deleteFunc:g}})));if("undefined"!==typeof u){var v=function(){return{stack:b.stack.slice(0,b.current+1),current:b.current}};m=Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(w.a,{item:!0,xs:12,children:Object(P.jsx)(A.a,{variant:"h3",children:"Click and draw over the image to highlight areas of interest."})}),Object(P.jsx)(w.a,{item:!0,xs:10,children:Object(P.jsx)(E,{src:u.url,shadingColor:x,shadingOpacity:.5,selections:b.stack[b.current],setSelections:function(e){var t=b.current+1,n=b.stack.slice(0,t);n.push(e),p({stack:n,current:t})}})}),Object(P.jsx)(w.a,{container:!0,item:!0,xs:2,children:Object(P.jsxs)(w.a,{item:!0,xs:11,children:[Object(P.jsx)(D.a,{fullWidth:!0,onClick:function(){var e=u.clone();e.selections=v(),e.aid===t.aid?n(e):r({type:"update",payload:e}),h(void 0)},disabled:function(){var e=v();if(e.stack.length!==u.selections.stack.length)return!1;if(e.current!==u.selections.current)return!1;for(var t=0;t<e.stack.length;t++)if(e.stack[t].length!==u.selections.stack[t].length)return!1;for(var n=0;n<e.stack.length;n++)for(var a=0;a<e.stack[n].length;a++){var i=e.stack[n][a],r=u.selections.stack[n][a];if(i.radius!==r.radius)return!1;if(i.x!==r.x)return!1;if(i.y!==r.y)return!1}return!0}(),children:"Update selections"}),Object(P.jsx)("div",{style:{paddingTop:"2vh"}}),Object(P.jsx)(D.a,{fullWidth:!0,disabled:0===b.current,onClick:function(){p({stack:b.stack,current:b.current-1})},children:"Undo"}),Object(P.jsx)(D.a,{fullWidth:!0,disabled:b.current===b.stack.length-1,onClick:function(){p({stack:b.stack,current:b.current+1})},children:"Redo"}),Object(P.jsx)(D.a,{fullWidth:!0,disabled:0===b.current,onClick:function(){p({stack:[[]],current:0})},children:"Clear"})]})})]})}return Object(P.jsx)(w.a,{container:!0,children:Object(P.jsxs)(w.a,{container:!0,children:[Object(P.jsxs)(w.a,{container:!0,item:!0,xs:4,children:[Object(P.jsx)(w.a,{item:!0,xs:12,children:Object(P.jsx)(D.a,{onClick:c,children:"Back to results"})}),Object(P.jsx)(w.a,{item:!0,xs:12,children:Object(P.jsx)(k.a,{breakpointCols:2,className:l.masonry,columnClassName:l.masonryColumn,children:O.map((function(e){return Object(P.jsxs)("div",{className:l.masonryCell,children:[Object(P.jsx)(I,{id:e.datum.aid,src:e.datum.url,shadingColor:x,shadingOpacity:.5,selections:e.datum.selections.stack[e.datum.selections.current],onClick:function(){p(e.datum.cloneSelections()),h(e.datum)}}),Object(P.jsx)(T.a,{style:{position:"absolute",top:0,right:0},onClick:function(){e.deleteFunc(e.datum)}})]},e.datum.aid)}))})})]}),Object(P.jsx)(w.a,{container:!0,item:!0,xs:8,align:"right",children:m})]})})}var B=n(293),W=n(304),N=n(278),z=n(153);function Q(e){var t=e.input,n=e.detailList,a=e.onNewSearch,i=e.onDetailSearch;return Object(P.jsxs)(f.a,{children:[Object(P.jsx)(z.a,{images:[t.url].concat(n.map((function(e){return e.url}))),hideOverlay:!0,countFrom:4}),Object(P.jsxs)(w.a,{container:!0,style:{paddingTop:"3vh"},spacing:2,children:[Object(P.jsx)(w.a,{item:!0,xs:6,children:Object(P.jsx)(D.a,{fullWidth:!0,onClick:a,children:"Update search"})}),Object(P.jsx)(w.a,{item:!0,xs:6,align:"right",children:Object(P.jsx)(D.a,{fullWidth:!0,onClick:i,children:"Edit search"})})]}),Object(P.jsx)("div",{style:{paddingTop:"6vh"}}),Object(P.jsxs)(N.a,{fullWidth:!0,children:[Object(P.jsx)(W.a,{id:"recentSearchesLabel",children:"\xa0Recent searches"}),Object(P.jsxs)(B.a,{labelId:"recentSearchesLabel",children:[Object(P.jsx)("option",{children:"Placeholder recent 1"}),Object(P.jsx)("option",{children:"Placeholder recent 2"})]})]}),Object(P.jsx)("div",{style:{paddingTop:"1vh"}}),Object(P.jsxs)(N.a,{fullWidth:!0,children:[Object(P.jsx)(W.a,{id:"savedCollectionsLabel",children:"\xa0Saved collections"}),Object(P.jsxs)(B.a,{labelId:"savedCollectionsLabel",children:[Object(P.jsx)("option",{children:"Placeholder saved 1"}),Object(P.jsx)("option",{children:"Placeholder saved 2"})]})]})]})}var U=n(55),X=n(302),V=n(279),J=n(280),G=n(301),q=n(297),K=n(146),Z=n.n(K),Y=n(145),_=n.n(Y),$="https://decade.ac.uk/deepdiscovery/api/upload";function ee(e,t,n,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Style",r=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c=new FormData;e&&(e.file?c.append("query_file",e.file):e.aid?c.append("query_aid",e.aid):c.append("query_url",e.url)),c.append("searchengine",i),c.append("resultcount",t),n&&c.append("weights",ae(n));var s=new XMLHttpRequest;s.open("POST",$,!r),s.onload=function(){var e=JSON.parse(this.responseText);e=e.filter((function(e){return null!=e.collection&&null!=te(e.collection).name})),a(e)},s.send(c)}function te(e){if(null==e)return null;var t={id:e};return t.name="RGBE"===e?"Royal Botanic Garden Edinburgh":"TNA1"===e||"TNA2"===e||"TNA3"===e?"The National Archives":"VA1"===e||"VA2"===e?"Victoria & Albert Museum":null,t}function ne(e,t){var n=e.fillPatternScaleX();n!==e.fillPatternScaleY()&&console.error("Inconsistent scale");for(var a=Math.max(Math.min(e.x()/n,t.length-1),0),i=Math.max(Math.min(e.y()/n,t[0].length-1),0),r=e.radius()/n,c=Math.max(Math.round(i-r),0),s=Math.min(Math.round(i+r),t[0].length-1),l=Math.max(Math.round(a-r),0),o=Math.min(Math.round(a+r),t.length-1),d=Math.round(r*r),u=!1,h=l;h<=o;h++)for(var j=c;j<=s;j++){var f=h-a,A=j-i;(f*=f)+(A*=A)<d&&(u=!0,t[h][j]=1)}u||(t[Math.round(a)][Math.round(i)]=1)}function ae(e){var t,n=[],a=Object(U.a)(e);try{for(a.s();!(t=a.n()).done;){var i=t.value,r=new Image;r.src=i.url;for(var c=i.aid+"*"+r.naturalWidth+"*"+r.naturalHeight+"*",s=new Array(r.naturalWidth),l=0;l<s.length;l++)s[l]=new Array(r.naturalHeight),s[l].fill(0);var o,d=Object(U.a)(i.selections.stack[i.selections.current]);try{for(d.s();!(o=d.n()).done;){var u,h=o.value,j=Object(U.a)(h);try{for(j.s();!(u=j.n()).done;){ne(u.value,s)}}catch(x){j.e(x)}finally{j.f()}}}catch(x){d.e(x)}finally{d.f()}for(var f=[],A=0;A<r.naturalHeight;A++){for(var b="",p=0;p<r.naturalWidth;p++)b+=s[p][A];f.push(b)}n.push(c+f.join(""))}}catch(x){a.e(x)}finally{a.f()}return n.join("")}var ie=Object(y.a)((function(e){return{masonry:{display:"flex",marginLeft:"-10px"},masonryColumn:{paddingLeft:"10px"},masonryCell:{marginBottom:"10px"}}}));function re(e){e.input;var t=e.results,n=(e.setResults,e.detailList),i=e.setDetailList,r=ie(),c=Object(a.useState)(2),l=Object(s.a)(c,2),o=l[0],d=l[1],u=Object(a.useState)(!1),h=Object(s.a)(u,2),j=h[0],b=h[1];return Object(P.jsxs)(f.a,{children:[Object(P.jsx)(v.a,{}),Object(P.jsx)(A.a,{variant:"h2",align:"left",children:"Similar Images"}),Object(P.jsxs)(w.a,{container:!0,children:[Object(P.jsx)(w.a,{item:!0,xs:6,children:Object(P.jsxs)(X.a,{style:{width:"100%"},exclusive:!0,value:j,onChange:function(e,t){!0!==t&&!1!==t||b(t)},children:[Object(P.jsx)(V.a,{style:{borderRadius:"5px 0   0   5px",width:"50%"},value:!1,disabled:!j,children:"Image view"}),Object(P.jsx)(V.a,{style:{borderRadius:"0   5px 5px 0",width:"50%"},value:!0,disabled:j,"data-tip":'<div><p align="center">Areas of the image that are recognised as most or least alike. The left side (blue) is least alike. The right side (red) is most alike.</p><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="245px" height="24px" viewBox="0 0 245 24" enable-background="new 0 0 245 24" xml:space="preserve">  <image id="image0" width="245" height="24" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPUAAAAYCAMAAAAVtUsLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC4lBMVEUAAIEAAIQAAIcAAI0AAJEAAJUBAJoAAJ0AAKIAAKYAAKsAAK8AALQAALcAALsAAL8AAMIAAMUAAMsAANAAANQBANgAANwAAOAAAOQAAOgAAO0AAPMAAPYAAPkAAvwABP4ACP8ADP8AEP4AFP4AGf8AHf8AIf8AJv8AKf8ALf4AMf4ANf4AOf4AP/4AQv8AR/8AS/8AT/8AVP8AV/4AW/4AX/8AZP8BZ/8AbP8AcP4AdP4AeP8Ae/4Af/4AhP4BiP8Ai/8Akf8Alf8AmP4Anf8Aof8Apf8Aqf8Arv4Asf4Btv8Buf8Avf8Awv8Axf8Ayv8Azv8A0/8A1/8A2/4A4f8A5P8A5/8A6/8A8P4A8/4B+P8C/P4D/vsH//gK//QO//AS/+0X/+gb/+Mf/98i/94n/9ks/9Mw/s82/so5/8c9/8JB/75F/7lH/7dM/7NR/61V/6lZ/6Rd/6Fh/55l/5tq/5Vu/5Fz/4x4/4d7/oR+/3+B/3uE/3eI/3WO/3CS/2yX/2ec/2Of/2Cj/1um/1ir/1Sw/1C1/0u3/0e8/0PA/z7E/zrI/zfL/zPQ/y7U/yrZ/yXd/yLh/x7l/xnp/xXu/xHy/gz3/gn7/gb+/QT/+wH/9gD+8gD/7gD+6QD+5gD/4gD/3gD+2QD/1gD/0QD/zAH/yAH/xAH+wAD/vAD/uAD+tAD+sQD+rAD/pwH/owH/nwH/mwD/lgD/kgD/jgH/igH/hgH/gQD/fgD/egD/dwD/cgD/bgD/aQD/ZgD/YQD/XQD+WQD+VQD+UQH/TAH/SAH/RAD/QQD/PAD/OAD/NAD/MQD+LAD+JwD/JAH+HwD+HAD/FwD/EgH/DgH/CwH/BwD+AwD7AQD4AAD1AADxAADqAADnAADiAADfAQDaAADWAADSAADOAQDJAQHEAQLBAAG9AAC5AAC2AQCzAACtAACpAAClAACgAQGdAACXAACUAACQAAGMAAGIAACFAAD///+0LjPXAAAAAWJLR0T1RdIb2wAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+UFHBIeAwqYXr0AAAFASURBVFjDY2BgZGJmYWVj5+Dk4ubh5eMXEBQSFhEVE5eQlJKWkZWTV1BUUlZRVVPX0NTS1tHV0zcwNDI2MTUzt7C0sraxtbN3cHRydnF1c/fw9PL28fXzDwgMCg4JDQuPiIyKjomNi09ITEpOSU1Lz8jMys7JzcsvKCwqLiktK6+orKquqa2rb2hsam5pbWvv6Ozq7unt658wcdLkKVOnTZ8xc9bsOXPnzV+wcNHiJUuXLV+xctXqNWvXrd+wcdPmLVu3bd+xc9fuPXv37T9w8NDhI0ePHT9x8tTpM2fPnb9w8dLlK1evXb9x89btO3fv3X/w8NHjJ0+fPX/x8tXrN2/fvf/w8dPnLwyjvh719aivR3096utRX4/6etTXo74e9fWor0d9PerrUV+P+nrU16O+HvX1qK9HfT3q6xHmawBSUfLHjvdTOwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNS0yOFQxNzozMDowMyswMTowMHLbfNcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDUtMjhUMTc6MzA6MDMrMDE6MDADhsRrAAAAAElFTkSuQmCC"/></svg></div>',"data-html":!0,children:"Likeness view"})]})}),Object(P.jsx)(w.a,{item:!0,xs:3,children:Object(P.jsx)("div",{})}),Object(P.jsxs)(w.a,{container:!0,item:!0,xs:3,children:[Object(P.jsx)(w.a,{item:!0,xs:12,children:Object(P.jsx)(A.a,{style:{fontSize:12,lineHeight:1,textTransform:"uppercase"},children:"Image Size"})}),Object(P.jsx)(w.a,{item:!0,xs:2,align:"left",children:Object(P.jsx)(J.a,{size:"small",color:"primary",onClick:function(){return d((function(e){return e>1?e-1:e}))},children:Object(P.jsx)(_.a,{})})}),Object(P.jsx)(w.a,{item:!0,xs:8,children:Object(P.jsx)(G.a,{value:o,onChange:function(e,t){d(t)},step:1,min:1,max:3})}),Object(P.jsx)(w.a,{item:!0,xs:2,align:"right",children:Object(P.jsx)(J.a,{size:"small",color:"primary",onClick:function(){return d((function(e){return e<3?e+1:e}))},children:Object(P.jsx)(Z.a,{})})})]})]}),Object(P.jsx)(k.a,{breakpointCols:5-o,className:r.masonry,columnClassName:r.masonryColumn,style:{paddingTop:"3vh"},children:t.map((function(e){return Object(P.jsx)(ce,{className:r.masonryCell,result:e,detailList:n,setDetailList:i,showLikeness:j,tileSize:o},e.aid)}))})]})}function ce(e){var t,n,a=e.result,i=e.detailList,r=e.setDetailList,c=(e.tileSize,e.showLikeness),s=Object(S.a)(e,["result","detailList","setDetailList","tileSize","showLikeness"]),o=!1,d=Object(U.a)(i);try{for(d.s();!(t=d.n()).done;){var u=t.value;if(a.aid===u.aid){o=!0;break}}}catch(h){d.e(h)}finally{d.f()}return c&&(n=Object(P.jsx)("img",{style:{height:"100%",width:"100%",padding:0,margin:0,position:"absolute",top:0,left:0,zIndex:2},src:a.heatmapurl})),Object(P.jsx)(b.a,Object(l.a)(Object(l.a)({},s),{},{variant:"outlined",style:{borderColor:"#292929",borderRadius:"5px 5px 0 0"},children:Object(P.jsxs)(p.a,{style:{margin:0,padding:0},children:[Object(P.jsxs)(w.a,{container:!0,justify:"space-between",children:[Object(P.jsx)(w.a,{item:!0,children:Object(P.jsx)(q.a,{style:{margin:0,padding:0},checked:o,onChange:function(){r({type:o?"remove":"add",payload:a.clone()})}})}),Object(P.jsx)(w.a,{item:!0,children:Object(P.jsx)(A.a,{style:{paddingRight:"3px"},children:te(a.collection).name})})]}),Object(P.jsxs)("div",{style:{position:"relative",top:0,left:0},children:[Object(P.jsx)("img",{style:{height:"100%",width:"100%",padding:0,margin:0,position:"relative",top:0,left:0,zIndex:1},src:a.url}),n]})]})}))}var se=n(147),le=n(148),oe=function(){function e(t,n){Object(se.a)(this,e),this.aid=t,this.url=n,this.selections={stack:[[]],current:0}}return Object(le.a)(e,[{key:"clone",value:function(){var e=Object.create(this);return e.selections=this.cloneSelections(),e}},{key:"cloneSelections",value:function(){return{stack:this.selections.stack.map((function(e){return e.slice()})),current:this.selections.current}}}]),e}();function de(e){var t=e.input,n=e.setInput;e.update;function i(){ee(t,33,[t].concat(h),(function(e){t.aid&&(e=e.filter((function(e){return e.aid!==t.aid}))),o({type:"replace",payload:e.map((function(e){var t=new oe(e.aid,e.url);return t.collection=e.collection,t.heatmapurl=e.heatmapurl,t}))})}))}var r=Object(a.useReducer)((function(e,t){var n=t.payload;switch(t.type){case"replace":return n;case"update":return e.map((function(e){return e.aid===n.aid?n:e}));default:throw new Error}}),[]),c=Object(s.a)(r,2),l=c[0],o=c[1],d=Object(a.useReducer)((function(e,t){var n=t.payload;switch(t.type){case"add":return e.concat(n);case"remove":for(var a=0;a<e.length;a++)if(n.aid===e[a].aid)return e.splice(a,1),e.slice();return console.warn("Attempted to remove non-member from detailList",n,e),e.slice();case"update":return e.map((function(e){return e.aid===n.aid?n:e}));default:throw new Error}}),[]),u=Object(s.a)(d,2),h=u[0],j=u[1],f=Object(a.useState)(!1),A=Object(s.a)(f,2),b=A[0],p=A[1];return 0===l.length&&i(),b?Object(P.jsx)(R,{input:t,setInput:n,results:l,setResults:o,detailList:h,setDetailList:j,cancelDetailSearch:function(){p(!1)}}):Object(P.jsxs)(w.a,{container:!0,spacing:3,children:[Object(P.jsx)(w.a,{item:!0,xs:3,children:Object(P.jsx)(Q,{input:t,detailList:h,onNewSearch:function(){i()},onDetailSearch:function(){p(!0)}})}),Object(P.jsx)(w.a,{item:!0,xs:9,children:Object(P.jsx)(re,{input:t,results:l,setResults:o,detailList:h,setDetailList:j})})]})}var ue=Object(y.a)((function(e){return{uploadText:{textAlign:"center",color:"#3030EE","&:hover":{color:"#3090EE",cursor:"pointer"}},inputZone:{background:"#F5F5F5",border:"1px dashed #595959",boxSizing:"border-box",borderRadius:"5px",textAlign:"center"},tile:{"&:hover":{opacity:e.palette.action.hoverOpacity,cursor:"pointer"}}}}));function he(){for(var e=ue(),t=Object(a.useState)(),n=Object(s.a)(t,2),i=n[0],r=n[1],c=function(e){var t;return ee(null,e,null,(function(e){t=e}),"Random",!0),t}(8),l=0;l<4;l++)c[l].tooltip_pos="top";for(var o=4;o<8;o++)c[o].tooltip_pos="bottom";function b(e){return p.apply(this,arguments)}function p(){return(p=Object(u.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var n=new FileReader;n.onload=function(t){e(t.target.result)},n.readAsDataURL(t)}));case 2:n=e.sent,(a=new oe(0,n)).file=t,r(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return"undefined"===typeof i?Object(P.jsxs)(x.a,{backend:O.a,children:[Object(P.jsx)(v.a,{}),Object(P.jsxs)(f.a,{style:{width:"50vw"},justify:"center",children:[Object(P.jsx)(A.a,{variant:"h1",align:"center",children:"Explore our National Collection"}),Object(P.jsx)(A.a,{style:{color:"#717171",paddingBottom:"1rem"},align:"center",children:"Search with an image to find similar results"}),Object(P.jsx)(fe,{style:{paddingBottom:"1rem"},onFileDrop:function(e){return b(e)},onURLDrop:function(e){return r(new oe(0,e))},onAssetDrop:function(e){return r(new oe(e.aid,e.url))},onFileUpload:function(e){return b(e.target.files[0])}}),Object(P.jsx)(Ae,{style:{paddingBottom:"1rem"},children:Object(P.jsx)(A.a,{children:"\xa0Or\xa0"})}),Object(P.jsx)(A.a,{style:{paddingBottom:"1rem"},align:"center",children:"Click a sample image to try it"}),Object(P.jsx)(h.a,{cols:4,style:{justifyContent:"center"},spacing:.01*document.documentElement.clientWidth,children:c.map((function(t){return Object(P.jsx)(j.a,{style:{height:"11vw",width:"11vw"},"data-tip":te(t.collection).name,"data-effect":"solid","data-place":t.tooltip_pos,children:Object(P.jsx)(je,{className:e.tile,asset:t,onClick:function(){return r(new oe(t.aid,t.url))}})},t.aid)}))})]})]}):Object(P.jsx)(de,{input:i,setInput:r})}function je(e){var t=e.className,n=e.asset,a=e.onClick,i=Object(g.a)({type:"ASSET",item:{asset:n}}),r=Object(s.a)(i,2)[1];return Object(P.jsx)("img",{className:t,ref:r,onClick:a,src:n.url,height:"100%",width:"100%",style:{objectFit:"cover"}})}function fe(e){var t=e.style,n=e.onFileDrop,a=e.onURLDrop,i=e.onAssetDrop,r=e.onFileUpload,c=ue(),l=Object(m.a)({accept:[O.b.FILE,O.b.URL,"ASSET"],drop:function(e,t){if(t.getItemType()===O.b.FILE){var r=t.getItem().files;if(1!==r.length)return;var c=r[0];if("image/jpeg"!==c.type&&"image/png"!==c.type)return;n(c)}else if(t.getItemType()===O.b.URL){var s=t.getItem().urls;if(1!==s.length)return;var l=s[0],o=l.substring(l.lastIndexOf(".")+1);if("jpg"!==o&&"jpeg"!==o&&"png"!==o)return;a(l)}else if("ASSET"===t.getItemType()){var d=t.getItem().asset;i(d)}}}),o=Object(s.a)(l,2)[1];return Object(P.jsx)("div",{ref:o,style:t,children:Object(P.jsx)(b.a,{className:c.inputZone,children:Object(P.jsx)(p.a,{style:{height:"30vh",display:"flex",flexDirection:"column",justifyContent:"center"},children:Object(P.jsxs)(A.a,{children:["Drag an image here or",Object(P.jsxs)("label",{className:c.uploadText,children:[Object(P.jsx)("input",{style:{display:"none"},type:"file",accept:"image/jpeg,image/png",onChange:r}),"\xa0browse files on this computer"]})]})})})})}function Ae(e){var t=e.style,n=e.children;return Object(P.jsxs)("div",{style:Object(l.a)({alignItems:"center",display:"flex"},t),children:[Object(P.jsx)("div",{style:{border:"1px solid #E9E9E9",width:"50%"}}),n,Object(P.jsx)("div",{style:{border:"1px solid #E9E9E9",width:"50%"}})]})}var be=n(152),pe=n(287),xe=n(107),ge=n(288),me=n(289),Oe=n(151),ve=n.n(Oe),ye=n(154),we=n(300),De=n(303),Ce=n(298),ke=n(290),Se=n(291),Le=n(292),Me="#292929",Pe="#FFFFFF",Ee="#1F1F4D",Ie="2px solid",He="5px",Te=Object(be.a)({typography:{fontFamily:'"Open Sans", sans-serif',fontWeightRegular:500,h1:{fontSize:"2rem",lineHeight:"3rem"},h2:{fontWeight:600,fontSize:"1.5rem",lineHeight:"3rem"},h3:{fontSize:"1.3rem",lineHeight:"3rem"},button:{fontSize:"1.1rem"}},palette:{primary:{main:Me},text:{primary:Me},action:{hoverOpacity:.8}},overrides:{MuiButton:{root:{border:Ie,borderColor:Me,borderRadius:He,textTransform:"none","&:hover":{backgroundColor:Ee,color:Pe}}},MuiToggleButton:{root:{border:Ie,borderColor:Me,borderRadius:He,textTransform:"none",color:Me,"&:hover":{backgroundColor:Object(xe.fade)(Ee,.8),borderColor:Me,color:Pe},"&$selected":{backgroundColor:Ee,borderColor:Me,color:Pe},"&$disabled":{backgroundColor:Ee,borderColor:Me,color:Pe}}},MuiSelect:{root:{border:Ie,borderRadius:He}},MuiCheckbox:{colorSecondary:{"&$checked":{color:Ee},"&:hover":{backgroundColor:Object(xe.fade)(Ee,.8)}}},MuiSlider:{root:{color:Ee}}}});function Fe(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(!1),c=Object(s.a)(r,2),l=c[0],o=c[1];return Object(P.jsx)("div",{children:Object(P.jsxs)(pe.a,{theme:Te,children:[Object(P.jsx)(ge.a,{style:{backgroundColor:"#3f51b5"},position:"fixed",children:Object(P.jsxs)(me.a,{children:[Object(P.jsx)(J.a,{edge:"end",onClick:function(e){i(e.currentTarget)},children:Object(P.jsx)(ve.a,{})}),Object(P.jsx)(ye.a,{anchorEl:n,open:Boolean(n),children:Object(P.jsxs)(we.a,{onMouseLeave:function(){i(null)},children:[Object(P.jsx)(De.a,{children:Object(P.jsx)("a",{href:"https://github.com/tanc-ahrc/deep-discoveries-frontend",children:"Source (GitHub)"})}),Object(P.jsx)(De.a,{onClick:function(){o(!0)},children:"About"})]})})]})}),Object(P.jsxs)(Ce.a,{open:l,onClose:function(){o(!1)},children:[Object(P.jsx)(ke.a,{children:"About"}),Object(P.jsxs)(Se.a,{children:[Object(P.jsx)(Le.a,{children:"Designed by ..."}),Object(P.jsx)(Le.a,{children:"Copyright \xa9 2021 Crown Copyright (The National Archives) except where otherwise stated in the source."}),Object(P.jsx)(Le.a,{children:"Licensed under the MIT License."}),Object(P.jsxs)(Le.a,{children:["See ",Object(P.jsx)("a",{href:"https://github.com/tanc-ahrc/deep-discoveries-frontend",children:"source"})," for details."]})]})]}),Object(P.jsx)("div",{style:{position:"relative",top:"10vh"},children:Object(P.jsx)(he,{})})]})})}var Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,305)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(P.jsx)(i.a.StrictMode,{children:Object(P.jsx)(Fe,{})}),document.getElementById("root")),Re()}},[[226,1,2]]]);
//# sourceMappingURL=main.bb49029f.chunk.js.map