(this["webpackJsonpdeep-discoveries-frontend"]=this["webpackJsonpdeep-discoveries-frontend"]||[]).push([[0],{145:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(13),c=n.n(a),s=n(14),o=n(42),l=n(87),d=n.n(l),u=n(104),h=n(203),j=n(204),b=n(196),f=n(117),p=n(200),x=n(201),O=n(202),m=n(214),g=n(213),v=n(51),y=n(114),w=n(191),k=n(193),C=n(195),S=n(65),L=n.n(S),E=n(29),I=n.n(E),W=(n(102),n(139),n(140),n(2));function T(e){var t=e.src,n=e.shadingColor,a=e.shadingOpacity,c=e.selections,o=e.setSelections,l="imageviewer_component",d=Object(i.useState)(new Image),u=Object(s.a)(d,1)[0];u.src=t;var h=Object(i.useState)(u.naturalWidth),j=Object(s.a)(h,2),b=j[0],f=j[1],p=Object(i.useState)(u.naturalHeight),x=Object(s.a)(p,2),O=x[0],m=x[1];return r.a.useEffect((function(){var e=b/u.naturalWidth,t=O/u.naturalHeight,i=e<t?e:t,r=e<t?u.naturalWidth*i*.025*.5:u.naturalHeight*i*.025*.5,s=[];function d(e,t,n){return new I.a.Circle({x:e,y:t,radius:2*r,fillPatternImage:u,fillPatternOffset:{x:e,y:t},fillPatternScale:{x:i,y:i},opacity:n})}var h=new I.a.Stage({container:l,width:u.naturalWidth*i,height:u.naturalHeight*i}),j=new I.a.Image({x:0,y:0,width:u.naturalWidth*i,height:u.naturalHeight*i,image:u}),f=new I.a.Rect({x:0,y:0,width:j.width(),height:j.height(),fill:n,strokeWidth:0,opacity:a,visible:!0}),p=d(0,0,1);p.visible(!1),p.draggable(!0),p.stroke("white"),p.strokeWidth(1);var x=new I.a.Layer;x.add(j),x.add(f),x.add(p),h.add(x),c.forEach((function(e){e.forEach((function(e){x.add(e)}))})),h.on("mouseenter",(function(e){p.visible(!0),h.container().style.cursor="none"})),h.on("mouseleave",(function(e){p.visible(!1),h.container().style.cursor="default",x.draw()})),h.on("mousemove",(function(e){var t=e.evt.layerX-r,n=e.evt.layerY-r;p.x(t),p.y(n),p.fillPatternOffset({x:t,y:n}),x.batchDraw()})),h.on("mousedown dragmove",(function(e){var t=d(e.evt.layerX-r,e.evt.layerY-r,1);x.add(t),s.push(t),x.batchDraw()})),h.on("mouseup dragend dragleave dragexit",(function(){var e=c.slice();e.push(s),o(e)})),x.draw()}),[b,O,n,a,u,c,o]),Object(i.useEffect)((function(){var e=document.getElementById(l);function t(){(b<e.offsetWidth-1||e.offsetWidth<e.scrollWidth)&&f(e.offsetWidth),(O<e.offsetHeight-1||e.offsetHeight<e.scrollHeight)&&m(e.offsetHeight)}return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[u,b,O]),Object(W.jsx)("div",{width:"100%",children:Object(W.jsx)("div",{style:{overflow:"hidden",height:"70vh",width:"70vw"},id:l})})}var D=n(75);function R(e){var t=e.id,n=e.src,r=(e.tileSize,Object(D.a)(e,["id","src","tileSize"])),a="ScaledImage_"+t,c=Object(i.useState)(0),l=Object(s.a)(c,2),d=l[0],u=l[1],h=Object(i.useState)(new Image),j=Object(s.a)(h,1)[0];return j.src=n,Object(i.useEffect)((function(){var e=document.getElementById(a);function t(){j.width===e.offsetWidth&&e.offsetWidth===e.scrollWidth||u(e.offsetWidth)}return t(),window.addEventListener("resize",t),j.onload=function(){var e=d/j.width,t=new I.a.Stage({container:a,width:d,height:j.height*e}),n=new I.a.Image({x:0,y:0,width:j.width*e,height:j.height*e,image:j}),i=new I.a.Layer;i.add(n),t.add(i),i.draw()},function(){window.removeEventListener("resize",t)}}),[a,j,d]),Object(W.jsx)("div",Object(o.a)({id:a},r))}var F=Object(w.a)((function(e){return{masonry:{display:"flex",marginLeft:"-10px"},masonryColumn:{paddingLeft:"10px"},masonryCell:{marginBottom:"10px","&:hover":{cursor:"pointer",opacity:e.palette.action.hoverOpacity}}}}));function M(e){var t=e.input,n=e.setInput,r=e.detailList,a=e.setDetailList,c=e.cancelDetailSearch,o=F(),l=Object(i.useState)(),d=Object(s.a)(l,2),u=d[0],h=d[1],j=Object(i.useState)(),b=Object(s.a)(j,2),p=b[0],x=b[1];if("undefined"===typeof u)return Object(W.jsxs)(k.a,{container:!0,children:[Object(W.jsx)(k.a,{item:!0,xs:12,children:Object(W.jsx)(f.a,{variant:"h3",children:"Click an image to highlight areas of interest"})}),Object(W.jsxs)(k.a,{container:!0,children:[Object(W.jsx)(k.a,{container:!0,item:!0,xs:2,children:Object(W.jsx)(k.a,{item:!0,xs:11,children:Object(W.jsx)(C.a,{fullWidth:!0,onClick:c,children:"Update search"})})}),Object(W.jsx)(k.a,{item:!0,xs:10,children:Object(W.jsx)(L.a,{breakpointCols:3,className:o.masonry,columnClassName:o.masonryColumn,children:[t].concat(r).map((function(e){return Object(W.jsx)(R,{className:o.masonryCell,id:e.aid,src:e.url,onClick:function(){x(e.cloneSelections()),h(e)}},e.aid)}))})})]})]});var O=function(){return{stack:p.stack.slice(0,p.current+1),current:p.current}};return Object(W.jsxs)(k.a,{container:!0,children:[Object(W.jsx)(k.a,{item:!0,xs:12,children:Object(W.jsx)(f.a,{variant:"h3",children:"Click and draw over the image to highlight areas of interest."})}),Object(W.jsx)(k.a,{container:!0,item:!0,xs:2,children:Object(W.jsxs)(k.a,{item:!0,xs:11,children:[Object(W.jsx)(C.a,{fullWidth:!0,onClick:function(){h(void 0)},children:"Cancel"}),Object(W.jsx)(C.a,{fullWidth:!0,onClick:function(){var e=u.clone();e.selections=O(),e.aid===t.aid?n(e):a({type:"update",payload:e}),h(void 0)},disabled:function(){var e=O();if(e.stack.length!==u.selections.stack.length)return!1;if(e.current!==u.selections.current)return!1;for(var t=0;t<e.stack.length;t++)if(e.stack[t].length!==u.selections.stack[t].length)return!1;for(var n=0;n<e.stack.length;n++)for(var i=0;i<e.stack[n].length;i++){var r=e.stack[n][i],a=u.selections.stack[n][i];if(r.radius!==a.radius)return!1;if(r.x!==a.x)return!1;if(r.y!==a.y)return!1}return!0}(),children:"Update selections"}),Object(W.jsx)("div",{style:{paddingTop:"2vh"}}),Object(W.jsx)(C.a,{fullWidth:!0,disabled:0===p.current,onClick:function(){x({stack:p.stack,current:p.current-1})},children:"Undo"}),Object(W.jsx)(C.a,{fullWidth:!0,disabled:p.current===p.stack.length-1,onClick:function(){x({stack:p.stack,current:p.current+1})},children:"Redo"}),Object(W.jsx)(C.a,{fullWidth:!0,disabled:0===p.current,onClick:function(){x({stack:[[]],current:0})},children:"Clear"})]})}),Object(W.jsx)(k.a,{item:!0,xs:10,children:Object(W.jsx)(T,{src:u.url,shadingColor:"black",shadingOpacity:.5,selections:p.stack[p.current],setSelections:function(e){var t=p.current+1,n=p.stack.slice(0,t);n.push(e),x({stack:n,current:t})}})})]})}var A=n(212),N=n(218),z=n(197);function H(e){var t=e.input,n=e.onNewSearch,i=e.onDetailSearch;return Object(W.jsxs)(b.a,{children:[Object(W.jsx)("img",{src:t.url,width:"100%"}),Object(W.jsxs)(k.a,{container:!0,style:{paddingTop:"3vh"},spacing:2,children:[Object(W.jsx)(k.a,{item:!0,xs:6,children:Object(W.jsx)(C.a,{fullWidth:!0,onClick:n,children:"New search"})}),Object(W.jsx)(k.a,{item:!0,xs:6,align:"right",children:Object(W.jsx)(C.a,{fullWidth:!0,onClick:i,children:"Detail search"})})]}),Object(W.jsx)("div",{style:{paddingTop:"6vh"}}),Object(W.jsxs)(z.a,{fullWidth:!0,children:[Object(W.jsx)(N.a,{id:"recentSearchesLabel",children:"\xa0Recent searches"}),Object(W.jsxs)(A.a,{labelId:"recentSearchesLabel",children:[Object(W.jsx)("option",{children:"Placeholder recent 1"}),Object(W.jsx)("option",{children:"Placeholder recent 2"})]})]}),Object(W.jsx)("div",{style:{paddingTop:"1vh"}}),Object(W.jsxs)(z.a,{fullWidth:!0,children:[Object(W.jsx)(N.a,{id:"savedCollectionsLabel",children:"\xa0Saved collections"}),Object(W.jsxs)(A.a,{labelId:"savedCollectionsLabel",children:[Object(W.jsx)("option",{children:"Placeholder saved 1"}),Object(W.jsx)("option",{children:"Placeholder saved 2"})]})]})]})}var B=n(50),P=n(221),U=n(198),_=n(199),q=n(223),X=n(216),G=n(109),J=n.n(G),V=n(108),Y=n.n(V),$=n(106),Z=n(107),K=function(){function e(t,n){Object($.a)(this,e),this.aid=t,this.url=n,this.selections={stack:[[]],current:0}}return Object(Z.a)(e,[{key:"clone",value:function(){var e=Object.create(this);return e.selections=this.cloneSelections(),e}},{key:"cloneSelections",value:function(){return{stack:this.selections.stack.map((function(e){return e.slice()})),current:this.selections.current}}}]),e}(),Q="https://decade.ac.uk/deepdiscovery/api/upload";function ee(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Style",a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c=new FormData;e&&(e.file?c.append("query_file",e.file):e.aid?c.append("query_aid",e.aid):c.append("query_url",e.url)),c.append("searchengine",r),c.append("resultcount",t),n&&c.append("weights",ie(n));var s=new XMLHttpRequest;s.open("POST",Q,!a),s.onload=function(){var e=JSON.parse(this.responseText);e=e.filter((function(e){return null!=e.collection&&null!=te(e.collection).name})),i(e)},s.send(c)}function te(e){if(null==e)return null;var t={id:e};return t.name="RGBE"===e?"Royal Botanic Garden Edinburgh":"TNA1"===e||"TNA2"===e||"TNA3"===e?"The National Archives":"VA1"===e||"VA2"===e?"Victoria & Albert Museum":null,t}function ne(e,t){var n=e.fillPatternScaleX();n!==e.fillPatternScaleY()&&console.error("Inconsistent scale");for(var i=Math.max(Math.min(e.x()/n,t.length-1),0),r=Math.max(Math.min(e.y()/n,t[0].length-1),0),a=e.radius()/n,c=Math.max(Math.round(r-a),0),s=Math.min(Math.round(r+a),t[0].length-1),o=Math.max(Math.round(i-a),0),l=Math.min(Math.round(i+a),t.length-1),d=Math.round(a*a),u=!1,h=o;h<=l;h++)for(var j=c;j<=s;j++){var b=h-i,f=j-r;(b*=b)+(f*=f)<d&&(u=!0,t[h][j]=1)}u||(t[Math.round(i)][Math.round(r)]=1)}function ie(e){var t,n=[],i=Object(B.a)(e);try{for(i.s();!(t=i.n()).done;){var r=t.value,a=new Image;a.src=r.url;for(var c=r.aid+"*"+a.naturalWidth+"*"+a.naturalHeight+"*",s=new Array(a.naturalWidth),o=0;o<s.length;o++)s[o]=new Array(a.naturalHeight),s[o].fill(0);var l,d=Object(B.a)(r.selections.stack[r.selections.current]);try{for(d.s();!(l=d.n()).done;){var u,h=l.value,j=Object(B.a)(h);try{for(j.s();!(u=j.n()).done;){ne(u.value,s)}}catch(O){j.e(O)}finally{j.f()}}}catch(O){d.e(O)}finally{d.f()}for(var b=[],f=0;f<a.naturalHeight;f++){for(var p="",x=0;x<a.naturalWidth;x++)p+=s[x][f];b.push(p)}n.push(c+b.join(""))}}catch(O){i.e(O)}finally{i.f()}return n.join("")}var re=Object(w.a)((function(e){return{masonry:{display:"flex",marginLeft:"-10px"},masonryColumn:{paddingLeft:"10px"},masonryCell:{marginBottom:"10px"}}}));function ae(e){var t=e.input,n=e.results,r=e.setResults,a=e.detailList,c=e.setDetailList,o=re(),l=Object(i.useState)(2),d=Object(s.a)(l,2),u=d[0],h=d[1],j=Object(i.useState)(!1),p=Object(s.a)(j,2),x=p[0],O=p[1];return Object(i.useEffect)((function(){ee(t,33,[t].concat(a),(function(e){t.aid&&(e=e.filter((function(e){return e.aid!==t.aid}))),r({type:"replace",payload:e.map((function(e){var t=new K(e.aid,e.url);return t.collection=e.collection,t.heatmapurl=e.heatmapurl,t}))})}))}),[t,r,a]),Object(W.jsxs)(b.a,{children:[Object(W.jsx)(f.a,{variant:"h2",align:"left",children:"Similar Images"}),Object(W.jsxs)(k.a,{container:!0,children:[Object(W.jsx)(k.a,{item:!0,xs:6,children:Object(W.jsxs)(P.a,{style:{width:"100%"},exclusive:!0,value:x,onChange:function(e,t){!0!==t&&!1!==t||O(t)},children:[Object(W.jsx)(U.a,{style:{borderRadius:"5px 0   0   5px",width:"50%"},value:!1,disabled:!x,children:"Image view"}),Object(W.jsx)(U.a,{style:{borderRadius:"0   5px 5px 0",width:"50%"},value:!0,disabled:x,children:"Likeness view"})]})}),Object(W.jsx)(k.a,{item:!0,xs:3,children:Object(W.jsx)("div",{})}),Object(W.jsxs)(k.a,{container:!0,item:!0,xs:3,children:[Object(W.jsx)(k.a,{item:!0,xs:12,children:Object(W.jsx)(f.a,{style:{fontSize:12,lineHeight:1,textTransform:"uppercase"},children:"Image Size"})}),Object(W.jsx)(k.a,{item:!0,xs:2,align:"left",children:Object(W.jsx)(_.a,{size:"small",color:"primary",onClick:function(){return h((function(e){return e>1?e-1:e}))},children:Object(W.jsx)(Y.a,{})})}),Object(W.jsx)(k.a,{item:!0,xs:8,children:Object(W.jsx)(q.a,{value:u,onChange:function(e,t){h(t)},step:1,min:1,max:3})}),Object(W.jsx)(k.a,{item:!0,xs:2,align:"right",children:Object(W.jsx)(_.a,{size:"small",color:"primary",onClick:function(){return h((function(e){return e<3?e+1:e}))},children:Object(W.jsx)(J.a,{})})})]})]}),Object(W.jsx)(L.a,{breakpointCols:5-u,className:o.masonry,columnClassName:o.masonryColumn,style:{paddingTop:"3vh"},children:n.map((function(e){return Object(W.jsx)(ce,{className:o.masonryCell,result:e,detailList:a,setDetailList:c,showLikeness:x,tileSize:u},e.aid)}))})]})}function ce(e){var t,n,i=e.result,r=e.detailList,a=e.setDetailList,c=(e.tileSize,e.showLikeness),s=Object(D.a)(e,["result","detailList","setDetailList","tileSize","showLikeness"]),l=!1,d=Object(B.a)(r);try{for(d.s();!(t=d.n()).done;){var u=t.value;if(i.aid===u.aid){l=!0;break}}}catch(h){d.e(h)}finally{d.f()}return c&&(n=Object(W.jsx)("img",{style:{height:"100%",width:"100%",padding:0,margin:0,position:"absolute",top:0,left:0,zIndex:2},src:i.heatmapurl})),Object(W.jsx)(p.a,Object(o.a)(Object(o.a)({},s),{},{variant:"outlined",style:{borderColor:"#292929",borderRadius:"5px 5px 0 0"},children:Object(W.jsxs)(x.a,{style:{margin:0,padding:0},children:[Object(W.jsxs)(k.a,{container:!0,justify:"space-between",children:[Object(W.jsx)(k.a,{item:!0,children:Object(W.jsx)(X.a,{style:{margin:0,padding:0},checked:l,onChange:function(){a({type:l?"remove":"add",payload:i.clone()})}})}),Object(W.jsx)(k.a,{item:!0,children:Object(W.jsx)(f.a,{style:{paddingRight:"3px"},children:te(i.collection).name})})]}),Object(W.jsxs)("div",{style:{position:"relative",top:0,left:0},children:[Object(W.jsx)("img",{style:{height:"100%",width:"100%",padding:0,margin:0,position:"relative",top:0,left:0,zIndex:1},src:i.url}),n]})]})}))}function se(e){var t=e.input,n=e.setInput,r=Object(i.useReducer)((function(e,t){var n=t.payload;switch(t.type){case"replace":return n;case"update":return e.map((function(e){return e.aid===n.aid?n:e}));default:throw new Error}}),[]),a=Object(s.a)(r,2),c=a[0],o=a[1],l=Object(i.useReducer)((function(e,t){var n=t.payload;switch(t.type){case"add":return e.concat(n);case"remove":for(var i=0;i<e.length;i++)if(n.aid===e[i].aid)return e.splice(i,1),e.slice();return console.warn("Attempted to remove non-member from detailList",n,e),e.slice();case"update":return e.map((function(e){return e.aid===n.aid?n:e}));default:throw new Error}}),[]),d=Object(s.a)(l,2),u=d[0],h=d[1],j=Object(i.useState)(!1),b=Object(s.a)(j,2),f=b[0],p=b[1];return f?Object(W.jsx)(M,{input:t,setInput:n,results:c,setResults:o,detailList:u,setDetailList:h,cancelDetailSearch:function(){p(!1)}}):Object(W.jsxs)(k.a,{container:!0,spacing:3,children:[Object(W.jsx)(k.a,{item:!0,xs:3,children:Object(W.jsx)(H,{input:t,onNewSearch:function(){n(void 0)},onDetailSearch:function(){p(!0)}})}),Object(W.jsx)(k.a,{item:!0,xs:9,children:Object(W.jsx)(ae,{input:t,results:c,setResults:o,detailList:u,setDetailList:h})})]})}var oe=Object(w.a)((function(e){return{uploadText:{textAlign:"center",color:"#3030EE","&:hover":{color:"#3090EE",cursor:"pointer"}},inputZone:{background:"#F5F5F5",border:"1px dashed #595959",boxSizing:"border-box",borderRadius:"5px",textAlign:"center"},tile:{"&:hover":{opacity:e.palette.action.hoverOpacity,cursor:"pointer"}}}}));function le(){for(var e=oe(),t=Object(i.useState)(),n=Object(s.a)(t,2),r=n[0],a=n[1],c=function(e){var t;return ee(null,e,null,(function(e){t=e}),"Random",!0),t}(8),o=0;o<4;o++)c[o].tooltip_pos="top";for(var l=4;l<8;l++)c[l].tooltip_pos="bottom";function p(e){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(d.a.mark((function e(t){var n,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var n=new FileReader;n.onload=function(t){e(t.target.result)},n.readAsDataURL(t)}));case 2:n=e.sent,(i=new K(0,n)).file=t,a(i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return"undefined"===typeof r?Object(W.jsxs)(O.a,{backend:v.a,children:[Object(W.jsx)(y.a,{}),Object(W.jsxs)(b.a,{style:{width:"50vw"},justify:"center",children:[Object(W.jsx)(f.a,{variant:"h1",align:"center",children:"Explore our National Collection"}),Object(W.jsx)(f.a,{style:{color:"#717171",paddingBottom:"1rem"},align:"center",children:"Search with an image to find similar results"}),Object(W.jsx)(ue,{style:{paddingBottom:"1rem"},onFileDrop:function(e){return p(e)},onURLDrop:function(e){return a(new K(0,e))},onAssetDrop:function(e){return a(e)},onFileUpload:function(e){return p(e.target.files[0])}}),Object(W.jsx)(he,{style:{paddingBottom:"1rem"},children:Object(W.jsx)(f.a,{children:"\xa0Or\xa0"})}),Object(W.jsx)(f.a,{style:{paddingBottom:"1rem"},align:"center",children:"Click a sample image to try it"}),Object(W.jsx)(h.a,{cols:4,style:{justifyContent:"center"},spacing:.01*document.documentElement.clientWidth,children:c.map((function(t){return Object(W.jsx)(j.a,{style:{height:"11vw",width:"11vw"},"data-tip":te(t.collection).name,"data-effect":"solid","data-place":t.tooltip_pos,children:Object(W.jsx)(de,{className:e.tile,asset:t,onClick:function(){return a(new K(t.aid,t.url))}})},t.aid)}))})]})]}):Object(W.jsx)(se,{input:r,setInput:a})}function de(e){var t=e.className,n=e.asset,i=e.onClick,r=Object(m.a)({type:"ASSET",item:{asset:n}}),a=Object(s.a)(r,2)[1];return Object(W.jsx)("img",{className:t,ref:a,onClick:i,src:n.url,height:"100%",width:"100%",style:{objectFit:"cover"}})}function ue(e){var t=e.style,n=e.onFileDrop,i=e.onURLDrop,r=e.onAssetDrop,a=e.onFileUpload,c=oe(),o=Object(g.a)({accept:[v.b.FILE,v.b.URL,"ASSET"],drop:function(e,t){if(t.getItemType()===v.b.FILE){var a=t.getItem().files;if(1!==a.length)return;var c=a[0];if("image/jpeg"!==c.type&&"image/png"!==c.type)return;n(c)}else if(t.getItemType()===v.b.URL){var s=t.getItem().urls;if(1!==s.length)return;var o=s[0],l=o.substring(o.lastIndexOf(".")+1);if("jpg"!==l&&"jpeg"!==l&&"png"!==l)return;i(o)}else if("ASSET"===t.getItemType()){var d=t.getItem().asset;r(d)}}}),l=Object(s.a)(o,2)[1];return Object(W.jsx)("div",{ref:l,style:t,children:Object(W.jsx)(p.a,{className:c.inputZone,children:Object(W.jsx)(x.a,{style:{height:"30vh",display:"flex",flexDirection:"column",justifyContent:"center"},children:Object(W.jsxs)(f.a,{children:["Drag an image here or",Object(W.jsxs)("label",{className:c.uploadText,children:[Object(W.jsx)("input",{style:{display:"none"},type:"file",accept:"image/jpeg,image/png",onChange:a}),"\xa0browse files on this computer"]})]})})})})}function he(e){var t=e.style,n=e.children;return Object(W.jsxs)("div",{style:Object(o.a)({alignItems:"center",display:"flex"},t),children:[Object(W.jsx)("div",{style:{border:"1px solid #E9E9E9",width:"50%"}}),n,Object(W.jsx)("div",{style:{border:"1px solid #E9E9E9",width:"50%"}})]})}var je=n(113),be=n(206),fe=n(91),pe=n(207),xe=n(208),Oe=n(112),me=n.n(Oe),ge=n(115),ve=n(219),ye=n(220),we=n(217),ke=n(209),Ce=n(210),Se=n(211),Le="#292929",Ee="#FFFFFF",Ie="#1F1F4D",We="2px solid",Te="5px",De=Object(je.a)({typography:{fontFamily:'"Open Sans", sans-serif',fontWeightRegular:500,h1:{fontSize:"2rem",lineHeight:"3rem"},h2:{fontWeight:600,fontSize:"1.5rem",lineHeight:"3rem"},h3:{fontSize:"1.3rem",lineHeight:"3rem"},button:{fontSize:"1.1rem"}},palette:{primary:{main:Le},text:{primary:Le},action:{hoverOpacity:.8}},overrides:{MuiButton:{root:{border:We,borderColor:Le,borderRadius:Te,textTransform:"none","&:hover":{backgroundColor:Ie,color:Ee}}},MuiToggleButton:{root:{border:We,borderColor:Le,borderRadius:Te,textTransform:"none",color:Le,"&:hover":{backgroundColor:Object(fe.fade)(Ie,.8),borderColor:Le,color:Ee},"&$selected":{backgroundColor:Ie,borderColor:Le,color:Ee},"&$disabled":{backgroundColor:Ie,borderColor:Le,color:Ee}}},MuiSelect:{root:{border:We,borderRadius:Te}},MuiCheckbox:{colorSecondary:{"&$checked":{color:Ie},"&:hover":{backgroundColor:Object(fe.fade)(Ie,.8)}}},MuiSlider:{root:{color:Ie}}}});function Re(){var e=Object(i.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)(!1),c=Object(s.a)(a,2),o=c[0],l=c[1];return Object(W.jsx)("div",{children:Object(W.jsxs)(be.a,{theme:De,children:[Object(W.jsx)(pe.a,{style:{backgroundColor:"#3f51b5"},position:"fixed",children:Object(W.jsxs)(xe.a,{children:[Object(W.jsx)(_.a,{edge:"end",onClick:function(e){r(e.currentTarget)},children:Object(W.jsx)(me.a,{})}),Object(W.jsx)(ge.a,{anchorEl:n,open:Boolean(n),children:Object(W.jsxs)(ve.a,{onMouseLeave:function(){r(null)},children:[Object(W.jsx)(ye.a,{children:Object(W.jsx)("a",{href:"https://github.com/tanc-ahrc/deep-discoveries-frontend",children:"Source (GitHub)"})}),Object(W.jsx)(ye.a,{onClick:function(){l(!0)},children:"About"})]})})]})}),Object(W.jsxs)(we.a,{open:o,onClose:function(){l(!1)},children:[Object(W.jsx)(ke.a,{children:"About"}),Object(W.jsxs)(Ce.a,{children:[Object(W.jsx)(Se.a,{children:"Designed by ..."}),Object(W.jsx)(Se.a,{children:"Copyright \xa9 2021 Crown Copyright (The National Archives) except where otherwise stated in the source."}),Object(W.jsx)(Se.a,{children:"Licensed under the MIT License."}),Object(W.jsxs)(Se.a,{children:["See ",Object(W.jsx)("a",{href:"https://github.com/tanc-ahrc/deep-discoveries-frontend",children:"source"})," for details."]})]})]}),Object(W.jsx)("div",{style:{position:"relative",top:"10vh"},children:Object(W.jsx)(le,{})})]})})}var Fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,224)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),r(e),a(e),c(e)}))};c.a.render(Object(W.jsx)(r.a.StrictMode,{children:Object(W.jsx)(Re,{})}),document.getElementById("root")),Fe()}},[[145,1,2]]]);
//# sourceMappingURL=main.f512890e.chunk.js.map