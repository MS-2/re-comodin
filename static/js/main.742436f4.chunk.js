(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[0],{102:function(e,t,a){},110:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),l=a.n(r),c=a(43),i=a(62),s=a(28),u=a(72),m=a(71),d=a(34),E=a.n(d),f=a(63),g=Object(n.createContext)(),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).logout=function(){n.setState({isAuth:!n.state.isAuth})},n.login=function(e){navigator.onLine?E.a.post("https://valeria-server.herokuapp.com/api/auth/signin",e).then((function(e){n.setState({isAuth:!n.state.isAuth}),console.log(Object(f.a)(e.data.token))})).catch((function(e){navigator.onLine?n.setState({error:e.response.data.msg}):n.setState({error:"fallo en la conexion a internet, entrando en modo offline"})})):(n.setState({haveInternet:!1}),console.log("fallo en la conexion a internet"))},n.state={isAuth:!0,haveInternet:!1,nombre:"Juan",error:null},n}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(g.Provider,{value:Object(c.a)(Object(c.a)({},this.state),{},{logout:this.logout,login:this.login})},this.props.children)}}]),a}(n.Component),h=a(24),b=a(10),v=a(11),j=(a(102),a(161)),O=a(149),x=a(108),w=a(159),C=a(150),y=a(151),k=a(68),S=a(138),N=(a(139),a(140),a(141),a(142),a(143),a(144)),W=(a(145),a(146),a(147),a(148),a(137)),I=a(135),A=(a(59),function(e){return o.a.createElement("header",{className:"miniheader"},o.a.createElement("p",null,e.text))});Object(I.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > .cubo":{display:"flex",justifyContent:"center",alignContent:"center",flexWrap:"wrap",margin:e.spacing(3),width:e.spacing(9),height:e.spacing(9)}}}}));function L(e){e.label;var t=e.to,a=e.activeOnlyWhenExact;Object(b.f)({path:t,exact:a});return o.a.createElement(W.a,{className:"cubo",elevation:3},o.a.createElement(h.b,{to:t},o.a.createElement(S.a,null)))}Object(I.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > .cubo":{display:"flex",justifyContent:"center",alignContent:"center",flexWrap:"wrap",margin:e.spacing(3),width:e.spacing(9),height:e.spacing(9)}}}}));var G=a(64),P=a.n(G),z=a(65),T=a.n(z),R=function(){var e=Object(n.useState)("admin@localhost"),t=Object(v.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)("admin"),c=Object(v.a)(l,2),i=c[0],s=c[1],u=Object(n.useState)(!1),m=Object(v.a)(u,2),d=m[0],E=m[1],f=Object(n.useContext)(g);return Object(n.useEffect)((function(){f.error&&E(!0)}),[f]),d?o.a.createElement(j.a,{variant:"danger",onClose:function(){return E(!1)},dismissible:!0},o.a.createElement(j.a.Heading,null,f.error)):o.a.createElement(O.a,null,o.a.createElement(x.a,{src:P.a,fluid:!0}),o.a.createElement(w.a,{onSubmit:function(e){e.preventDefault();var t=e.target.email.value,a=e.target.pass.value;f.login({email:t,pass:a})}},o.a.createElement(w.a.Group,{controlId:"email"},o.a.createElement(w.a.Label,null,"Email address"),o.a.createElement(w.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return r(e.target.value)},value:a})),o.a.createElement(w.a.Group,{controlId:"pass"},o.a.createElement(w.a.Label,null,"Password"),o.a.createElement(w.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return s(e.target.value)},value:i})),o.a.createElement(C.a,{size:"lg",block:!0,variant:"dark",type:"submit"},"Iniciar Sesion")),o.a.createElement(y.a,{className:"margen"},o.a.createElement(k.a,null,o.a.createElement("a",{className:"center"},"\xbfNo tenes cuenta?")),o.a.createElement(k.a,{className:"center"},o.a.createElement(C.a,{variant:"secondary"},"Crear cuenta"))),o.a.createElement(y.a,null,o.a.createElement(k.a,{className:"center"},o.a.createElement("a",{className:"center",href:"/asd"},"\xbfOlvidaste tu contrase\xf1a?"))),o.a.createElement(y.a,null,o.a.createElement(k.a,{className:"center"},o.a.createElement(x.a,{src:T.a,fluid:!0}))))},B=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"Iniciar Sesi\xf3n"))},J=a(160),U=a(152),q=a(153),D=a(154),M=a(155),_=(a(110),function(){var e=Object(n.useState)(0),t=Object(v.a)(e,2),a=t[0],r=t[1],l=Object(n.useContext)(g);return o.a.createElement("div",{style:{maxWidth:"100%",width:"100%",position:"sticky",bottom:0}},o.a.createElement(W.a,{elevation:3,square:!0},o.a.createElement(J.a,{value:a,onChange:function(e,t){switch(t){case 0:console.log("inicio"),r(t);break;case 1:console.log("configuracion"),r(t);break;case 2:console.log("ayuda"),r(t);break;case 3:console.log("logout"),r(t),l.logout()}},variant:"fullWidth",indicatorColor:"primary",textColor:"primary"},o.a.createElement(U.a,{icon:o.a.createElement(q.a,{size:"25"}),label:"Inicio"}),o.a.createElement(U.a,{icon:o.a.createElement(N.a,{size:"25"}),label:"Config"}),o.a.createElement(U.a,{icon:o.a.createElement(D.a,{size:"25"}),label:"Ayuda"}),o.a.createElement(U.a,{icon:o.a.createElement(M.a,{size:"25"}),label:"Salir"}))))}),F=(a(163),a(156),a(162),a(158),a(157),a(37)),H=a.n(F);a(61),Object(I.a)((function(e){return{root:{width:"100%"},backButton:{marginRight:e.spacing(1)},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}));var Y=function(){var e=Object(n.useState)(1),t=Object(v.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),c=Object(v.a)(l,2),i=(c[0],c[1],Object(n.useState)("cuatro")),s=Object(v.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)("este es un mensaje de prueba"),f=Object(v.a)(d,2),g=f[0],p=f[1],h=Object(n.useState)("dos"),b=Object(v.a)(h,2),j=b[0],O=b[1],x=Object(n.useState)("tres"),y=Object(v.a)(x,2),k=y[0],S=y[1],N=Object(n.useState)(!1),W=Object(v.a)(N,2),I=W[0],A=W[1],L=Object(n.useState)(),G=Object(v.a)(L,2),P=G[0],z=G[1],T=Object(n.useState)(!1),R=Object(v.a)(T,2),B=R[0],J=R[1],U=Object(n.useState)(),q=Object(v.a)(U,2),D=(q[0],q[1],function(e){return function(e){return function(t){r(e)}}});return o.a.createElement("div",null,o.a.createElement(w.a,{onSubmit:function(e){e.preventDefault(),console.log(g),console.log(j),console.log(k),console.log(u),console.log(P),console.log("registros guardado"),J(!0),E.a.post("https://wa.me/?text=hola",{body:{},headers:{origin:"*",methods:"post",preflightContinue:!1,optionsSuccessStatus:204}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},o.a.createElement("div",null,1===a&&o.a.createElement("div",null,o.a.createElement(w.a.Group,{controlId:"email"},o.a.createElement(w.a.Label,null,"Email address"),o.a.createElement(w.a.Control,{type:"text",placeholder:"Enter email",onChange:function(e){return p(e.target.value)},value:g})),o.a.createElement(w.a.Group,{controlId:"camara"},o.a.createElement(w.a.Label,null,"camara"),I?o.a.createElement(H.a,{isFullscreen:!1,idealResolution:{width:480,height:320},imageType:F.IMAGE_TYPES.JPG,imageCompression:.01,onTakePhoto:function(e){!function(e){z(e)}(e)}}):null,o.a.createElement("img",{src:P}),o.a.createElement(C.a,{onClick:function(){return A(!I)}},"activar camara")),o.a.createElement(C.a,{className:"float-right",onClick:D()(2)},"next")),2===a&&o.a.createElement("div",null,o.a.createElement(w.a.Group,{controlId:"segundo"},o.a.createElement(w.a.Label,null,"segundo"),o.a.createElement(w.a.Control,{type:"text",placeholder:"Enter",onChange:function(e){return O(e.target.value)},value:j})),o.a.createElement(C.a,{color:"mdb-color",className:"float-left",onClick:D()(1)},"previous"),o.a.createElement(C.a,{color:"mdb-color",className:"float-right",onClick:D()(3)},"next")),3===a&&o.a.createElement("div",null,o.a.createElement(w.a.Group,{controlId:"tercero"},o.a.createElement(w.a.Label,null,"segundo"),o.a.createElement(w.a.Control,{type:"text",placeholder:"Enter",onChange:function(e){return S(e.target.value)},value:k})),o.a.createElement(C.a,{color:"mdb-color",className:"float-left",onClick:D()(2)},"previous"),o.a.createElement(C.a,{color:"mdb-color",className:"float-right",onClick:D()(4)},"next")),4===a&&o.a.createElement("div",null,o.a.createElement(w.a.Group,{controlId:"fin"},o.a.createElement(w.a.Label,null,"Email address"),o.a.createElement(w.a.Control,{type:"text",placeholder:"Enter fin",onChange:function(e){return m(e.target.value)},value:u})),o.a.createElement(C.a,{className:"float-left",onClick:D()(3)},"previous"),o.a.createElement(C.a,{size:"lg",block:!0,variant:"dark",type:"submit"},"guardar datos")),B?o.a.createElement("a",{href:"https://wa.me/?text="+g,target:"_blank"},"enviar data a ws"):null)))},$=Object(I.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > .cubo":{display:"flex",justifyContent:"center",alignContent:"center",flexWrap:"wrap",margin:e.spacing(2),width:e.spacing(9),height:e.spacing(9)}}}}));var K=function(){var e=Object(n.useContext)(g),t=$();return console.log(e),e.isAuth?o.a.createElement(h.a,{basename:"/re-comodin"},o.a.createElement(b.a,{exact:!0,path:"/"},o.a.createElement(B,null),o.a.createElement(A,{text:"semana x"}),o.a.createElement(O.a,{className:t.root},o.a.createElement(L,{to:"/a"}),o.a.createElement(L,{to:"/recaudaciones"}),o.a.createElement(L,{to:"/nuevo"})),o.a.createElement(A,{text:"semana x"}),o.a.createElement(O.a,{className:t.root},o.a.createElement(L,{to:"/nuevo"}),o.a.createElement(L,{to:"/nuevo"}),o.a.createElement(L,{to:"/nuevo"})),o.a.createElement(A,{text:"semana x"}),o.a.createElement(O.a,{className:t.root},o.a.createElement(L,{to:"/nuevo"}),o.a.createElement(L,{to:"/nuevo"}),o.a.createElement(L,{to:"/nuevo"})),o.a.createElement(A,{text:"semana x"}),o.a.createElement(O.a,{className:t.root},o.a.createElement(L,{to:"/nuevo"}),o.a.createElement(L,{to:"/nuevo"}),o.a.createElement(L,{to:"/nuevo"})),o.a.createElement(A,{text:"semana final"}),o.a.createElement(_,null)),o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/recaudaciones"},o.a.createElement(Y,null)))):o.a.createElement(h.a,{basename:"/re-comodin"},o.a.createElement(b.a,{exact:!0,path:"/"},o.a.createElement(B,null),o.a.createElement(R,null)))},Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(111);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null,o.a.createElement(K,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){var t=new URL("/re-comodin",window.location.href);if(console.log(t),t.origin!==window.location.origin)return void console.log("yalhallo");window.addEventListener("load",(function(){var t="".concat("/re-comodin","/service-worker.js");Q?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):V(t,e)}))}}()},59:function(e,t,a){},64:function(e,t,a){e.exports=a.p+"static/media/LogoComodin.84541d38.png"},65:function(e,t,a){e.exports=a.p+"static/media/quattro.6c59861b.png"},80:function(e,t,a){e.exports=a(112)}},[[80,1,2]]]);
//# sourceMappingURL=main.742436f4.chunk.js.map