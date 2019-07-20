(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{160:function(t,e,n){"use strict";n.r(e);n(167);var i=n(8),r=n(0),s=n.n(r),c=n(166),o=n(165),a=n(9),l=n.n(a),u=n(60),m=n(191),b=n.n(m),p=Object(u.b)(function(t){return{direction:t.turtleGame.direction}})(function(t){var e={transform:"rotate("+t.direction+"deg)"};return Object(i.b)("img",{style:e,src:b.a})}),d=n(192),f=n.n(d),h=function(t){return Object(i.b)("img",{src:f.a})},v=function(t){function e(e){return t.call(this,e)||this}l()(e,t);var n=e.prototype;return n.clickCell=function(){console.log(this.props)},n.getComp=function(t){return"turtle"===t?{comp:Object(i.b)(p,null),class:"turtle"}:"collision"===t?{comp:Object(i.b)(h,null),class:"mine visited"}:"mine"===t?{comp:Object(i.b)(h,null),class:"mine"}:"visited"===t?{comp:Object(i.b)("div",null),class:"visited"}:{comp:Object(i.b)("div",null),class:"empty"}},n.render=function(){var t=this,e=this.getComp(this.props.type);return Object(i.b)("div",{onClick:function(){return t.clickCell()},className:"cell"},Object(i.b)("div",{className:"mask "+e.class}),e.comp)},e}(r.Component),O=function(t){var e=Object(r.useState)(3),n=e[0],s=e[1];return Object(i.b)("div",null,Object(i.b)("button",{onClick:function(){t.callback("move")}},"Move"),Object(i.b)("button",{onClick:function(){t.callback("rotate")}},"Rotate"),Object(i.b)("button",{onClick:function(){return function(){if(s(n-1),n>0){var t=document.querySelectorAll(".cell .mask");t.forEach(function(e,n){setTimeout(function(){return e.classList.add("display")},50*n),setTimeout(function(){t.forEach(function(t){return t.classList.remove("display")})},t.length+50*n)})}}()},disabled:!(n>0)},"show/hide ",n))},j=n(2),y=n.n(j),g=n(77),k=function(t){var e={};for(var n in t){e[t[n].x+"_"+t[n].y]=1}return e},w=function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t},x=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={turtle:n.props.turtle,mines:n.props.mines,minesMap:k(n.props.mines),direction:n.props._direction,cellVisited:[],col:new Array(n.props.size.h).fill(null),row:new Array(n.props.size.w).fill(null),commands:[]},n}l()(e,t);var n=e.prototype;return n.transformPos=function(t){return t.x+"_"+t.y},n.getType=function(t,e){var n=this.transformPos({x:t,y:e}),i=this.transformPos(this.state.turtle);return n===i&&this.state.minesMap[n]?"collision":this.state.minesMap[n]?"mine":n===i?"turtle":this.state.cellVisited.indexOf(n)>-1?"visited":"cell"},n.componentDidUpdate=function(){},n.updateTurtle=function(t){var e,n,i,r,s;"move"===t?this.setState({turtle:(e=this.state.turtle,n=this.props._direction,r=e.x,s=e.y,0===n?i={x:r,y:s-1}:90===n?i={x:r+1,y:s}:180===n?i={x:r,y:s+1}:270===n&&(i={x:r-1,y:s}),i),cellVisited:[].concat(this.state.cellVisited,[this.transformPos(this.state.turtle)]),commands:[].concat(this.state.commands,[t.charAt(0)])}):(this.setState({commands:[].concat(this.state.commands,[t.charAt(0)])}),this.props._rotate())},n.render=function(){var t,e,n,s,c,o,a,l=this,u=(t=this.state.turtle,e=this.props.size,n=t.x,s=t.y,c=e.h,o=e.w,!(n>0&&n<=o&&s>0&&s<=c)),m=(a=this.transformPos(this.state.turtle),!!this.state.minesMap[a]);return Object(i.b)(r.Fragment,null,u&&Object(i.b)("div",null,"OUTSIDE"),m&&Object(i.b)("div",null,"COLLISION"),Object(i.b)("div",{className:"grid"},this.state.col.map(function(t,e){return Object(i.b)("div",{key:e,className:"row-container"},l.state.row.map(function(t,n){var r=l.getType(n+1,e+1);return Object(i.b)(v,{type:r,key:n,x:n+1,y:e+1})}))})),Object(i.b)(O,{callback:function(t){return l.updateTurtle(t)}}),this.state.commands.length>0&&Object(i.b)(r.Fragment,null,Object(i.b)("h3",null,"Commands"),Object(i.b)("code",null,this.state.commands.map(function(t){return"'"+t+"'"}).join(", "))))},e}(s.a.Component);x.propTypes={size:y.a.object.isRequired,turtle:y.a.object.isRequired,mines:y.a.array.isRequired};var C=Object(u.b)(function(t){return{_direction:t.turtleGame.direction}},function(t){return{_rotate:function(){return t(Object(g.b)())}}})(x),M=w(5,10),T=w(5,10),A=w(2,37.5),_=new Array(A).fill(null).map(function(t){return{x:w(2,10),y:w(2,10)}});console.log(_);var N={w:M,h:T};e.default=function(){return Object(i.b)(c.a,null,Object(i.b)(o.a,{title:"Game",keywords:["gatsby","game","react"]}),Object(i.b)("h1",null,"Deminor Game"),Object(i.b)("p",null,"Find the exit and take care to the mines..."),Object(i.b)(C,{className:"grid-component",size:N,turtle:{x:1,y:1},mines:_}))}},167:function(t,e,n){var i=n(12);i(i.P,"Array",{fill:n(169)}),n(39)("fill")},169:function(t,e,n){"use strict";var i=n(29),r=n(90),s=n(17);t.exports=function(t){for(var e=i(this),n=s(e.length),c=arguments.length,o=r(c>1?arguments[1]:void 0,n),a=c>2?arguments[2]:void 0,l=void 0===a?n:r(a,n);l>o;)e[o++]=t;return e}},191:function(t,e,n){t.exports=n.p+"static/turtle-829e6ff7f2a7a884849e36746513042e.png"},192:function(t,e,n){t.exports=n.p+"static/mine-520178a9e230470dffce265d175ba018.png"}}]);
//# sourceMappingURL=component---src-pages-turtle-game-js-02517e1f8f7a9c406fd7.js.map