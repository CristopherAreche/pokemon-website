(this["webpackJsonppokemon-website"]=this["webpackJsonppokemon-website"]||[]).push([[0],{17:function(e,t,a){e.exports={img1:"Detail_img1__1IQl8",mainContainer:"Detail_mainContainer__3DZAk",container:"Detail_container__2ApKk",imageContainer:"Detail_imageContainer__3YF_f",textContainer:"Detail_textContainer__2XM7-",pokemonName:"Detail_pokemonName__2XXH0",details:"Detail_details__1iwrJ",estadisticas:"Detail_estadisticas__VFOnH",types:"Detail_types__TyBjT",tLabel:"Detail_tLabel__xboXk",button:"Detail_button__SGTlj"}},22:function(e,t,a){e.exports={card:"Card_card__1eE8R",imgContainer:"Card_imgContainer__1Tcz3",infoContainer:"Card_infoContainer__Sbc3s",text:"Card_text__3MSXi",types:"Card_types__uLNws",label:"Card_label__33GJ2"}},23:function(e,t,a){e.exports={img1:"LandingPage_img1__2CL0r",img2:"LandingPage_img2__3xld-",mainContainer:"LandingPage_mainContainer__1YU_q",container:"LandingPage_container__1C8Y0",imageContainer:"LandingPage_imageContainer__30mem",textContainer:"LandingPage_textContainer__3tBBL",button:"LandingPage_button__1wxIs"}},24:function(e,t,a){e.exports={body:"Home_body__3nqpq",filterContainer:"Home_filterContainer__6rueO",container:"Home_container__3Z4dY",searchContainer:"Home_searchContainer__1UCe8",pokedexContainer:"Home_pokedexContainer__28bbp",footer:"Home_footer__27Ver"}},26:function(e,t,a){e.exports={mainContainer:"Navbar_mainContainer__2c20y",title:"Navbar_title__1Do-7",container:"Navbar_container__1ESpZ",link:"Navbar_link__TNvz9",form:"Navbar_form__3b0xB"}},40:function(e,t,a){e.exports={container:"Pagination_container__3xQir",btn:"Pagination_btn__AV51c"}},46:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(44),r=a.n(s),i=(a(56),a(57),a(16)),o=a(26),l=a.n(o),j=a.p+"static/media/ash.a6d6a164.png",b=a.p+"static/media/title.9631a0e0.png",d=a.p+"static/media/charmander.5bc6e242.png",u=a.p+"static/media/loupe.c6544d31.png",m={image1:j,image2:b,image3:d,image4:u},h=a(1),p=function(){return Object(h.jsxs)("div",{className:l.a.mainContainer,children:[Object(h.jsx)("img",{className:l.a.title,src:m.image2,alt:"something"}),Object(h.jsxs)("div",{className:l.a.container,children:[Object(h.jsx)(i.b,{to:"/home",className:l.a.link,children:"Home"}),Object(h.jsx)(i.b,{to:"/create",className:l.a.form,children:"Form"})]})]})},O=a(17),g=a.n(O),x=a(4),f=a(15),_=a(5),v=a(11),y=a(69),F="GET_POKEMONS",k=function(){return function(){var e=Object(v.a)(Object(_.a)().mark((function e(t){var a;return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("http://localhost:3001/pokemons");case 2:return a=e.sent,e.abrupt("return",t({type:F,payload:a.data[0]}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C="GET_POKEMON",N="GET_TYPES",w="FILTER_BY_TYPE",E="ORDER_DAMAGE",D="ORDER",A="GET_NAME",P={normal:["#AAA67F","#FFFFFF"],fighting:["#C12239","#FFFFFF"],flying:["#A891EC","#FFFFFF"],ground:["#DEC16B","#FFFFFF"],poison:["#A43E9E","#FFFFFF"],rock:["#B69E31","#000"],bug:["#A7B723","#FFFFFF"],ghost:["#70559B","#000"],steel:["#B7B9D0","#000"],fire:["#F57D31","#FFFFFF"],water:["#6493EB","#FFFFFF"],grass:["#74CB48","#000"],electric:["#F9CF30","#FFFFFF"],psychic:["#FB5584","#FFFFFF"],ice:["#9AD6DF","#000"],dragon:["#7037FF","#FFFFFF"],dark:["#75574C","#000"],fairy:["#E69EAC","#FFFFFF"],unknown:["#526677","#000"],shadow:["#4F507B","#000"]},S={normal:"#AAA67F93",fighting:"#C1223993",flying:"#A891EC93",ground:"#DEC16B93",poison:"#A43E9E93",rock:"#B69E3193",bug:"#A7B72393",ghost:"#70559B93",steel:"#B7B9D093",fire:"#F57D3193",water:"#6493EB93",grass:"#74CB4893",electric:"#F9CF3093",psychic:"#FB558493",ice:"#9AD6DF93",dragon:"#7037FF93",dark:"#75574C93",fairy:"#E69EAC93",unknown:"#52667793",shadow:"#4F507B93"},B=["normal","fighting","flying","ground","poison","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon","dark","fairy","unknown","shadow"],I=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e})).pokemon,a=Object(x.o)().id;if(Object(n.useEffect)((function(){e(function(e){return function(){var t=Object(v.a)(Object(_.a)().mark((function t(a){var n;return Object(_.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("http://localhost:3001/pokemons/".concat(e));case 2:return n=t.sent,t.abrupt("return",a({type:C,payload:n.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(a))}),[e]),t){var c=(null===t||void 0===t?void 0:t.type)&&t.type[0],s=S["".concat(c)];return Object(h.jsx)("div",{className:g.a.mainContainer,children:Object(h.jsxs)("div",{className:g.a.container,children:[Object(h.jsx)("div",{className:g.a.imageContainer,style:{backgroundColor:"".concat(s)},children:Object(h.jsx)("img",{className:g.a.img1,src:null===t||void 0===t?void 0:t.image,alt:"something"})}),Object(h.jsxs)("div",{className:g.a.textContainer,children:[Object(h.jsxs)("div",{className:g.a.pokemonName,children:[Object(h.jsx)("h2",{children:t.name}),Object(h.jsxs)("h2",{children:["#",t.pokemonId]})]}),Object(h.jsxs)("div",{className:g.a.details,children:[Object(h.jsxs)("div",{className:g.a.estadisticas,children:[Object(h.jsxs)("h5",{children:["Hp: ",t.hp]}),Object(h.jsxs)("h5",{children:["Attack: ",t.attack]}),Object(h.jsxs)("h5",{children:["Defense: ",t.defense]})]}),Object(h.jsxs)("div",{className:g.a.estadisticas,children:[Object(h.jsxs)("h5",{children:["Speed: ",t.speed]}),Object(h.jsxs)("h5",{children:["Height: ",t.height]}),Object(h.jsxs)("h5",{children:["Weight: ",t.weight]})]}),Object(h.jsx)("div",{className:g.a.types,children:(null===t||void 0===t?void 0:t.type)&&t.type.map((function(e,t){return Object(h.jsx)("div",{className:g.a.tLabel,style:{backgroundColor:"".concat(P["".concat(e)][0]),color:"".concat(P["".concat(e)][1])},children:e},t)}))})]})]}),Object(h.jsx)(i.b,{to:"/home",style:{textDecoration:"none"},children:Object(h.jsx)("p",{className:g.a.button,children:"Close"})})]})})}},L=a(12),H=a(10),T=a(8),M=a(6),q=a(9),R=a.n(q),Y=function(){var e=Object(n.useState)({name:"",hp:"",attack:"",defense:"",speed:"",height:"",weight:"",image:"",type:[]}),t=Object(M.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)({}),r=Object(M.a)(s,2),i=r[0],o=r[1],l=Object(n.useState)(!1),j=Object(M.a)(l,2),b=(j[0],j[1],Object(n.useState)(null)),u=Object(M.a)(b,2),m=u[0],p=(u[1],Object(n.useRef)()),O=Object(n.useState)([]),g=Object(M.a)(O,2),f=(g[0],g[1],Object(x.m)()),_=function(e){var t=e.target,n=t.name,s=t.value;c(Object(T.a)(Object(T.a)({},a),{},Object(H.a)({},n,s)));var r=v(Object(T.a)(Object(T.a)({},a),{},Object(H.a)({},n,s)));o(r)},v=function(e){var t={};return e.name?/^[a-zA-Z\xc0-\xd6\xd8-\xf6\xf8-\xff]+(([',. -][a-zA-Z\xc0-\xd6\xd8-\xf6\xf8-\xff ])?[a-zA-Z\xc0-\xd6\xd8-\xf6\xf8-\xff]*)*$/.test(e.name)||(t.name="the name cannot contain numbers"):t.name="name is required",e.hp?e.hp<1?t.hp="the hp cannot be less than 1":e.hp>100&&(t.hp="the hp cannot be more than 100"):t.hp="hp is required",e.attack?e.attack<1?t.attack="the attack cannot be less than 1":e.attack>100&&(t.attack="the attack cannot be more than 100"):t.attack="attack is required",e.defense?e.defense<1?t.defense="the defense cannot be less than 1":e.defense>100&&(t.defense="the defense cannot be more than 100"):t.defense="defense is required",e.speed?e.speed<1?t.speed="the speed cannot be less than 1":e.speed>100&&(t.speed="the speed cannot be more than 100"):t.speed="speed is required",e.height?e.height<1?t.height="the height cannot be less than 1":e.height>100&&(t.height="the height cannot be more than 100"):t.height="height is required",e.weight?e.weight<1?t.weight="the weight cannot be less than 1":e.weight>100&&(t.weight="the weight cannot be more than 100"):t.weight="weight is required",e.image||(t.image="You should select an image"),e.type.length?1===e.type.length?t.types="":e.type.length>2&&(t.types="You only can select two types."):t.types="You should select at least one type.",t},F=function(e){var t,n=e.target.value;if(e.target.checked)c(Object(T.a)(Object(T.a)({},a),{},{type:[].concat(Object(L.a)(a.type),[n])})),t=v(Object(T.a)(Object(T.a)({},a),{},{type:[].concat(Object(L.a)(a.type),[n])}));else{var s=a.type.filter((function(e){return e!==n}));c(Object(T.a)(Object(T.a)({},a),{},{type:s})),t=v(Object(T.a)(Object(T.a)({},a),{},{type:s}))}o(t)};return Object(n.useEffect)((function(){Object.keys(i).length}),[i]),Object(h.jsx)("div",{className:R.a.container,children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),Object.keys(i).length>0?alert("Please complete all the fields correctly."):(y.a.post("http://localhost:3001/pokemons",a).then((function(e){return alert("Pokemon has been created")})).catch((function(e){return alert(e)})),f("/home"))},className:R.a.form,children:[Object(h.jsx)("h1",{children:"Create Pokemon"}),Object(h.jsx)("label",{className:R.a.label,htmlFor:"name",children:"Name:"}),Object(h.jsx)("input",{placeholder:"Name",type:"text",name:"name",className:R.a.input,onChange:_,value:a.name}),Object(h.jsx)("p",{children:i.name}),Object(h.jsxs)("div",{className:R.a.imputA,children:[Object(h.jsxs)("div",{className:R.a.col,children:[Object(h.jsx)("label",{className:R.a.label,htmlFor:"vida",children:"Hp:"}),Object(h.jsx)("input",{placeholder:"Hp",type:"number",name:"hp",className:R.a.input,onChange:_,value:a.hp}),Object(h.jsx)("p",{children:i.hp}),Object(h.jsx)("label",{className:R.a.label,htmlFor:"attack",children:"Attack:"}),Object(h.jsx)("input",{placeholder:"Attack",type:"number",name:"attack",className:R.a.input,onChange:_,value:a.attack}),Object(h.jsx)("p",{children:i.attack}),Object(h.jsx)("label",{className:R.a.label,htmlFor:"defense",children:"Defense:"}),Object(h.jsx)("input",{placeholder:"Defense",type:"number",name:"defense",className:R.a.input,onChange:_,value:a.defense}),Object(h.jsx)("p",{children:i.defense})]}),Object(h.jsxs)("div",{className:R.a.col2,children:[Object(h.jsx)("label",{className:R.a.label,htmlFor:"speed",children:"Speed:"}),Object(h.jsx)("input",{placeholder:"Speed",type:"number",name:"speed",className:R.a.input,onChange:_,value:a.speed}),Object(h.jsx)("p",{children:i.speed}),Object(h.jsx)("label",{className:R.a.label,htmlFor:"height",children:"Height:"}),Object(h.jsx)("input",{placeholder:"Height",type:"number",name:"height",className:R.a.input,onChange:_,value:a.height}),Object(h.jsx)("p",{children:i.height}),Object(h.jsx)("label",{className:R.a.label,htmlFor:"weight",children:"Weight:"}),Object(h.jsx)("input",{placeholder:"Weight",type:"number",name:"weight",className:R.a.input,onChange:_,value:a.weight}),Object(h.jsx)("p",{children:i.weight})]})]}),Object(h.jsxs)("label",{className:R.a.imageLabel,htmlFor:"image",children:["Image:",Object(h.jsx)("input",{type:"text",name:"image",className:R.a.input,onChange:function(e){c(Object(T.a)(Object(T.a)({},a),{},{image:e.target.value}))},ref:p}),m&&Object(h.jsx)("img",{src:m||d,alt:"Preview",className:R.a.imagePreview})]}),Object(h.jsx)("p",{children:i.image}),Object(h.jsxs)("fieldset",{className:R.a.fieldset,children:[Object(h.jsx)("legend",{children:"Select the types:"}),B.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{style:{width:"30px"},type:"checkbox",value:e,name:e,onChange:F}),Object(h.jsx)("label",{className:R.a.typeLabel,htmlFor:e,style:{backgroundColor:"".concat(P[e][0]),color:"".concat(P[e][1])},children:e})]},e)})),Object(h.jsx)("p",{children:i.types})]}),Object(h.jsxs)("footer",{className:R.a.btnContainer,children:[Object(h.jsx)("button",{type:"submit",className:R.a.btn,children:"Create"}),Object(h.jsx)("button",{className:R.a.btn2,children:"Cancel"})]})]})})},G=a(24),X=a.n(G),z=a(22),Z=a.n(z),K=function(e){var t=e.element,a=P["".concat(t)];return Object(h.jsx)("div",{className:Z.a.label,style:{backgroundColor:"".concat(a[0]),color:"".concat(a[1])},children:t})},J=function(e){var t=e.name,a=e.image,n=e.pokemonId,c=e.type,s=S["".concat(c[0])];return Object(h.jsx)(i.b,{to:"/detail/".concat(n),style:{textDecoration:"none",color:"black"},children:Object(h.jsxs)("div",{className:Z.a.card,children:[Object(h.jsx)("div",{style:{backgroundColor:"".concat(s)},className:Z.a.imgContainer,children:Object(h.jsx)("img",{className:Z.a.imgCont,src:a||d,alt:"img not found",width:"200px",height:"250vh"})}),Object(h.jsxs)("div",{className:Z.a.infoContainer,children:[Object(h.jsxs)("div",{className:Z.a.text,children:[Object(h.jsxs)("p",{style:{color:"black"},children:["#",n]}),Object(h.jsx)("h4",{children:t})]}),Object(h.jsx)("div",{className:Z.a.types,children:c.map((function(e,t){return Object(h.jsx)(K,{element:e},t)}))})]})]})})},U=(a(66),function(){var e=Object(f.c)((function(e){return e})),t=Object(n.useState)("all"),a=Object(M.a)(t,2),c=(a[0],a[1],Object(f.b)()),s=Object(n.useState)(!1),r=Object(M.a)(s,2),i=(r[0],r[1]),o=Object(n.useState)("all"),l=Object(M.a)(o,2),j=l[0],b=l[1],d=Object(f.c)((function(e){return e.order}));return Object(n.useEffect)((function(){c(function(){var e=Object(v.a)(Object(_.a)().mark((function e(t){var a,n;return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("http://localhost:3001/types");case 2:a=e.sent,n=a.data,t({type:N,payload:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),c(k())}),[c]),Object(h.jsxs)("div",{className:"filter",children:[Object(h.jsx)("h2",{children:"Filter"}),Object(h.jsxs)("div",{className:"select",children:[Object(h.jsx)("label",{children:"Type:"}),Object(h.jsxs)("select",{onChange:function(e){var t,a=e.target.value;"all"===a?(c(k()),i(!1)):"type"===a&&i(!0),b(a),c((t=a,function(){var e=Object(v.a)(Object(_.a)().mark((function e(a){var n,c,s;return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("http://localhost:3001/pokemons");case 2:if(n=e.sent,c=n.data[0],!(s=null===c||void 0===c?void 0:c.filter((function(e){var a;return null===(a=e.type)||void 0===a?void 0:a.includes(t)})))){e.next=9;break}return e.abrupt("return",a({type:w,payload:s}));case 9:return alert("This Pokemon type is not on the list"),e.abrupt("return",a({type:w,payload:c}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},value:j,children:[Object(h.jsx)("option",{value:"all",children:"All"}),e.types.map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},t)}))]})]}),Object(h.jsxs)("div",{className:"select",children:[Object(h.jsx)("label",{children:"Alphabetical Order:"}),Object(h.jsxs)("select",{onChange:function(e){c(function(e){return{type:D,payload:e}}(e.target.value))},value:d,children:[Object(h.jsx)("option",{value:"default",children:"Default"}),Object(h.jsx)("option",{value:"asc",children:"Ascending"}),Object(h.jsx)("option",{value:"desc",children:"Descending"})]})]}),Object(h.jsxs)("div",{className:"select",children:[Object(h.jsx)("label",{children:" Attack Damage:"}),Object(h.jsxs)("select",{onChange:function(e){var t;c((t=e.target.value,{type:E,payload:t}))},value:d,children:[Object(h.jsx)("option",{value:"default",children:"Default"}),Object(h.jsx)("option",{value:"max",children:"Max Damage"}),Object(h.jsx)("option",{value:"min",children:"Min Damage"})]})]}),Object(h.jsx)("button",{onClick:function(){c(k()),i(!1),b("all");var e=document.querySelector("select:nth-child(2)");e&&(e.value="all")},className:"clear-btn",children:"Clear filter"})]})}),Q=a(40),V=a.n(Q),W=function(e){var t=e.page,a=e.setPage,c=e.max,s=Object(n.useState)(1),r=Object(M.a)(s,2),i=r[0],o=r[1];return Object(h.jsxs)("div",{className:V.a.container,children:[Object(h.jsx)("button",{disabled:1===t||t<1,className:V.a.btn,onClick:function(){o(parseInt(i)-1),a(parseInt(t)-1)},children:"Back"}),Object(h.jsx)("input",{style:{width:"50px"},onChange:function(e){return function(e){o(e.target.value)}(e)},onKeyDown:function(e){return function(e){13===e.keyCode&&(a(parseInt(e.target.value)),parseInt(e.target.value<1||parseInt(e.target.value)>Math.ceil(c)||isNaN(parseInt(e.target.value)))?(a(1),o(1)):a(parseInt(e.target.value)))}(e)},name:"page",autoComplete:"off",value:i}),Object(h.jsxs)("p",{children:[" de ",Math.ceil(c)]}),Object(h.jsx)("button",{disabled:t===Math.ceil(c)||t>Math.ceil(c),className:V.a.btn,onClick:function(){o(parseInt(i)+1),a(parseInt(t)+1)},children:"Next"})]})},$=a(46),ee=a.n($),te=function(){var e=c.a.useState(""),t=Object(M.a)(e,2),a=t[0],n=t[1],s=Object(f.b)(),r=function(e){var t;console.log("en el search bar --",e),s((t=e,function(){var e=Object(v.a)(Object(_.a)().mark((function e(a){var n,c,s;return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("http://localhost:3001/pokemons/");case 3:n=e.sent,c=n.data[0],(s=c.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))).length?a({type:A,payload:s}):alert("Pokemon not found"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))};return Object(h.jsx)("input",{className:ee.a.input,placeholder:"Search...",value:a,onChange:function(e){""===e.target.value&&s(k()),n(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(0!==a.length?r(a):s(k()))}})},ae=function(){var e=Object(f.c)((function(e){return e})).pokemons,t=Object(f.b)(),a=Object(n.useState)(1),c=Object(M.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(12),o=Object(M.a)(i,1)[0],l=e.length/o;return Object(n.useEffect)((function(){t(k())}),[t]),Object(h.jsxs)("div",{className:X.a.body,children:[Object(h.jsxs)("div",{className:X.a.searchContainer,children:[Object(h.jsx)("h1",{children:"Pokemons"}),Object(h.jsx)("p",{children:"Search for a pokemon by name or using its national pokedex number"}),Object(h.jsx)(te,{})]}),Object(h.jsx)("aside",{className:X.a.filterContainer,children:Object(h.jsx)(U,{})}),Object(h.jsx)("main",{className:X.a.container,children:Object(h.jsx)("section",{className:X.a.pokedexContainer,children:e.slice((s-1)*o,(s-1)*o+o).map((function(e,t){return Object(h.jsx)(J,{name:null===e||void 0===e?void 0:e.name,image:null===e||void 0===e?void 0:e.image,pokemonId:null===e||void 0===e?void 0:e.pokemonId,type:null===e||void 0===e?void 0:e.type},t)}))})}),Object(h.jsx)("footer",{className:X.a.footer,children:Object(h.jsx)(W,{page:s,setPage:r,max:l})})]})},ne=a(23),ce=a.n(ne),se=function(){return Object(h.jsx)("div",{className:ce.a.mainContainer,children:Object(h.jsxs)("div",{className:ce.a.container,children:[Object(h.jsx)("div",{className:ce.a.imageContainer,children:Object(h.jsx)("img",{className:ce.a.img1,src:m.image1,alt:"something"})}),Object(h.jsxs)("div",{className:ce.a.textContainer,children:[Object(h.jsx)("img",{className:ce.a.img2,src:m.image2,alt:"something"}),Object(h.jsx)("p",{children:"\xa1Bienvenido a mi nueva p\xe1gina para ver y crear Pokemones! Esta p\xe1gina ha sido creada especialmente para los fan\xe1ticos de Pokemon, que desean explorar el fascinante mundo de los Pokemon y crear sus propios monstruos de bolsillo. Aqu\xed encontrar\xe1s una amplia variedad de informaci\xf3n sobre los Pokemon, incluyendo sus caracter\xedsticas, habilidades y estad\xedsticas, as\xed como una herramienta para crear tus propios Pokemon personalizados."}),Object(h.jsx)(i.b,{to:"/home",children:Object(h.jsx)("button",{className:ce.a.button,children:"Go Home"})})]})]})})};var re=function(){var e=Object(x.k)();return Object(h.jsxs)("div",{className:"App",children:["/"!==e.pathname&&Object(h.jsx)(p,{}),Object(h.jsxs)(x.c,{children:[Object(h.jsx)(x.a,{exact:!0,path:"/",element:Object(h.jsx)(se,{})}),Object(h.jsx)(x.a,{exact:!0,path:"/home",element:Object(h.jsx)(ae,{})}),Object(h.jsx)(x.a,{exact:!0,path:"/create",element:Object(h.jsx)(Y,{})}),Object(h.jsx)(x.a,{exact:!0,path:"/detail/:id",element:Object(h.jsx)(I,{})})]})]})},ie=a(41),oe={pokemons:[],pokemon:{},types:[]},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(T.a)(Object(T.a)({},e),{},{pokemons:t.payload});case C:return Object(T.a)(Object(T.a)({},e),{},{pokemon:Object(T.a)(Object(T.a)({},e.pokemon),t.payload)});case w:return Object(T.a)(Object(T.a)({},e),{},{pokemons:t.payload});case N:return Object(T.a)(Object(T.a)({},e),{},{types:t.payload});case D:var a;return a="asc"===t.payload?e.pokemons.sort((function(e,t){return e.name.localeCompare(t.name)})):e.pokemons.sort((function(e,t){return t.name.localeCompare(e.name)})),"default"===t.payload&&(a=e.pokemons.sort((function(e,t){return e.pokemonId-t.pokemonId}))),Object(T.a)(Object(T.a)({},e),{},{pokemons:a});case E:var n;return"max"===t.payload&&(n=e.pokemons.sort((function(e,t){return t.attack-e.attack}))),"min"===t.payload&&(n=e.pokemons.sort((function(e,t){return e.attack-t.attack}))),"default"===t.payload&&(a=e.pokemons.sort((function(e,t){return e.pokemonId-t.pokemonId}))),Object(T.a)(Object(T.a)({},e),{},{pokemons:n});case A:return Object(T.a)(Object(T.a)({},e),{},{pokemons:t.payload});default:return Object(T.a)({},e)}},je=a(47),be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.b,de=Object(ie.c)(le,be(Object(ie.a)(je.a)));r.a.createRoot(document.getElementById("root")).render(Object(h.jsx)(f.a,{store:de,children:Object(h.jsx)(i.a,{basename:"/pokemon-website",children:Object(h.jsx)(re,{})})}))},9:function(e,t,a){e.exports={container:"Form_container__QGuRd",form:"Form_form__SgHMH",label:"Form_label__UdcyA",input:"Form_input__4O0Yw",select:"Form_select__1FvrY",imageLabel:"Form_imageLabel__1DzP5",btnContainer:"Form_btnContainer__2jcmJ",btn:"Form_btn__niQRS",btn2:"Form_btn2__1HEIu",typeLabel:"Form_typeLabel__3LM-7",imagePreview:"Form_imagePreview__3TgR0",fieldset:"Form_fieldset__10Zrh",imputA:"Form_imputA__13FUX",col:"Form_col__3rHhw",col2:"Form_col2__1K1iF"}}},[[67,1,2]]]);
//# sourceMappingURL=main.32a700cc.chunk.js.map