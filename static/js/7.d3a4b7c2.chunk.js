(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[7],{91:function(t,e,a){"use strict";a.r(e);var c=a(50),r=a(51),s=a(54),n=a(53),i=a(0),h=a(52),l=(a(11),a(1)),o=function(t){var e=t.name,a=t.path,c=t.character,r="https://image.tmdb.org/t/p/w300"+a;return Object(l.jsxs)("li",{className:"cast-gallery__item",children:[Object(l.jsx)("img",{src:r,alt:e,className:"cast-gallery__img",width:"150"}),Object(l.jsx)("h3",{children:e}),Object(l.jsxs)("p",{children:["Character: ",c]})]})},j=a(16),u=a.n(j),m=function(t){Object(s.a)(a,t);var e=Object(n.a)(a);function a(){var t;Object(c.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(t=e.call.apply(e,[this].concat(s))).state={casts:[],error:null},t}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.movieId;h.a.fetchCast(e).then((function(e){return t.setState({casts:e})})).catch((function(e){return t.setState(e)}))}},{key:"render",value:function(){var t=this.state,e=t.casts,a=t.error,c=t.isLoading;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{className:"cast-gallery",children:c?Object(l.jsx)("div",{className:"Loader",children:Object(l.jsx)(u.a,{type:"Rings",color:"#00BFFF",height:200,width:200})}):e.length>0?e.map((function(t){var e=t.name,a=t.profile_path,c=t.cast_id,r=t.character;return Object(l.jsx)(o,{name:e,path:a,character:r},c)})):Object(l.jsx)("span",{children:"No cast"})}),a&&Object(l.jsx)("h3",{className:"ErrorMessage",children:a.message})]})}}]),a}(i.Component);e.default=m}}]);
//# sourceMappingURL=7.d3a4b7c2.chunk.js.map