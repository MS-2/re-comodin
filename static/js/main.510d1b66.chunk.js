(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[0],{106:function(e,a,t){},109:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(19),r=t.n(o),c=t(43),i=t(60),u=t(27),m=t(72),s=t(71),E=t(61),d=t.n(E),g=t(62),p=Object(n.createContext)(),b=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this)).logout=function(){n.setState({isAuth:!n.state.isAuth})},n.login=function(e){navigator.onLine?d.a.post("https://valeria-server.herokuapp.com/api/auth/signin",e).then((function(e){n.setState({isAuth:!n.state.isAuth}),console.log("response : ",e.data.token),console.log("response decodificado : ",Object(g.a)(e.data.token))})).catch((function(e){navigator.onLine?n.setState({error:e.response.data.msg}):n.setState({error:"fallo en la conexion a internet, entrando en modo offline"})})):(n.setState({haveInternet:!1}),console.log("fallo en la conexion a internet"))},n.state={isAuth:!0,haveInternet:!1,nombre:"Juan",error:null},n}return Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(p.Provider,{value:Object(c.a)(Object(c.a)({},this.state),{},{logout:this.logout,login:this.login})},this.props.children)}}]),t}(n.Component),f=t(129),h=t(140),v=t(21),C=t(11),j=t(143),O=t(144),x=t(145),S=t(146),y=t(147),k=t(148),I=t(137),G=t(149),w=t(150),N=t(151),L=t(152),A=t(3),M=(t(99),t(155)),P=t(130),D=t(153),F=t(131),T=t(132),R=t(67),W=t(63),_=t.n(W),J=t(64),q=t.n(J),B=function(){var e=Object(n.useState)("admin@localhost"),a=Object(A.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)("admin"),c=Object(A.a)(r,2),i=c[0],u=c[1],m=Object(n.useState)(!1),s=Object(A.a)(m,2),E=s[0],d=s[1],g=Object(n.useContext)(p);return Object(n.useEffect)((function(){g.error&&d(!0)}),[g]),E?l.a.createElement(M.a,{variant:"danger",onClose:function(){return d(!1)},dismissible:!0},l.a.createElement(M.a.Heading,null,g.error)):l.a.createElement(f.a,null,l.a.createElement(P.a,{src:_.a,fluid:!0}),l.a.createElement(D.a,{onSubmit:function(e){e.preventDefault();var a=e.target.email.value,t=e.target.pass.value;g.login({email:a,pass:t})}},l.a.createElement(D.a.Group,{controlId:"email"},l.a.createElement(D.a.Label,null,"Email address"),l.a.createElement(D.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return o(e.target.value)},value:t})),l.a.createElement(D.a.Group,{controlId:"pass"},l.a.createElement(D.a.Label,null,"Password"),l.a.createElement(D.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return u(e.target.value)},value:i})),l.a.createElement(F.a,{size:"lg",block:!0,variant:"dark",type:"submit"},"Iniciar Sesion")),l.a.createElement(T.a,{className:"margen"},l.a.createElement(R.a,null,l.a.createElement(v.b,{className:"center",to:"/"},"\xbfNo tenes cuenta?")),l.a.createElement(R.a,{className:"center"},l.a.createElement(F.a,{variant:"secondary"},"Crear cuenta"))),l.a.createElement(T.a,null,l.a.createElement(R.a,{className:"center"},l.a.createElement(v.b,{to:"/"},"\xbfOlvidaste tu contrase\xf1a?"))),l.a.createElement(T.a,null,l.a.createElement(R.a,{className:"center"},l.a.createElement(P.a,{src:q.a,fluid:!0}))))},U=(t(58),function(){return l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"Iniciar Sesi\xf3n"))}),Y=t(154),z=t(135),H=t(133),V=t(136),$=t(138),K=t(139),Q=(t(106),function(){var e=Object(C.f)(),a=Object(n.useState)(0),t=Object(A.a)(a,2),o=t[0],r=t[1],c=Object(n.useContext)(p);return l.a.createElement("div",{style:{maxWidth:"100%",width:"100%",position:"sticky",bottom:0}},l.a.createElement(H.a,{elevation:3,square:!0},l.a.createElement(Y.a,{value:o,onChange:function(a,t){switch(t){case 0:console.log("inicio"),r(t),e.push("/");break;case 1:console.log("configuracion"),r(t);break;case 2:console.log("ayuda"),r(t);break;case 3:console.log("logout"),r(t),c.logout(),e.push("/")}},variant:"fullWidth",indicatorColor:"primary",textColor:"primary"},l.a.createElement(z.a,{icon:l.a.createElement(V.a,{size:"25"}),label:"Inicio"}),l.a.createElement(z.a,{icon:l.a.createElement(I.a,{size:"25"}),label:"Config"}),l.a.createElement(z.a,{icon:l.a.createElement($.a,{size:"25"}),label:"Ayuda"}),l.a.createElement(z.a,{icon:l.a.createElement(K.a,{size:"25"}),label:"Salir"}))))}),X=function(e){return l.a.createElement("header",{style:{height:25},className:"miniheader"},l.a.createElement("p",null,e.text))},Z=Object(h.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap",flexDirection:"column",alignItems:"center","& > .cubo":{display:"flex",justifyContent:"center",alignContent:"center",flexWrap:"wrap",margin:e.spacing(2),width:e.spacing(9),height:e.spacing(9)}}}}));var ee=function(e){var a=Z();return l.a.createElement("div",{className:a.root},l.a.createElement(H.a,{style:{backgroundColor:e.color},className:"cubo",elevation:3,onClick:e.onclick},l.a.createElement(v.b,{to:e.to},e.icono)),l.a.createElement("p",null,e.text))},ae=t(8),te=t.n(ae),ne=(t(40),t(141)),le=t(142),oe=t(42),re=t.n(oe),ce=(t(30),function(){var e=Object(n.useState)(1),a=Object(A.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)(""),c=Object(A.a)(r,2),i=c[0],u=c[1],m=Object(n.useState)(),s=Object(A.a)(m,2),E=s[0],d=s[1],g=Object(n.useState)(!1),p=Object(A.a)(g,2),b=p[0],h=p[1],v=Object(n.useState)(""),C=Object(A.a)(v,2),j=C[0],O=C[1],x=Object(n.useState)(),S=Object(A.a)(x,2),y=S[0],k=S[1],I=Object(n.useState)(),G=Object(A.a)(I,2),w=G[0],N=G[1],L=Object(n.useState)(""),M=Object(A.a)(L,2),W=M[0],_=M[1],J=Object(n.useState)(),q=Object(A.a)(J,2),B=q[0],U=q[1],Y=Object(n.useState)(),z=Object(A.a)(Y,2),H=z[0],V=z[1],$=Object(n.useState)(""),K=Object(A.a)($,2),Q=K[0],Z=K[1],oe=Object(n.useState)(),ce=Object(A.a)(oe,2),ie=ce[0],ue=ce[1],me=Object(n.useState)(),se=Object(A.a)(me,2),Ee=se[0],de=se[1],ge=Object(n.useState)(""),pe=Object(A.a)(ge,2),be=pe[0],fe=pe[1],he=Object(n.useState)(),ve=Object(A.a)(he,2),Ce=ve[0],je=ve[1],Oe=Object(n.useState)(),xe=Object(A.a)(Oe,2),Se=xe[0],ye=xe[1],ke=Object(n.useState)(""),Ie=Object(A.a)(ke,2),Ge=Ie[0],we=Ie[1],Ne=Object(n.useState)(),Le=Object(A.a)(Ne,2),Ae=Le[0],Me=Le[1],Pe=Object(n.useState)(),De=Object(A.a)(Pe,2),Fe=De[0],Te=De[1],Re=Object(n.useState)(""),We=Object(A.a)(Re,2),_e=We[0],Je=We[1],qe=Object(n.useState)(),Be=Object(A.a)(qe,2),Ue=Be[0],Ye=Be[1],ze=Object(n.useState)(),He=Object(A.a)(ze,2),Ve=He[0],$e=He[1],Ke=Object(n.useState)(),Qe=Object(A.a)(Ke,2),Xe=Qe[0],Ze=Qe[1],ea=Object(n.useState)(),aa=Object(A.a)(ea,2),ta=aa[0],na=aa[1],la=Object(n.useState)(),oa=Object(A.a)(la,2),ra=oa[0],ca=oa[1],ia=Object(n.useState)(),ua=Object(A.a)(ia,2),ma=ua[0],sa=ua[1],Ea=Object(n.useState)(),da=Object(A.a)(Ea,2),ga=da[0],pa=da[1],ba=re()().format("L"),fa=Object(n.useState)(ba),ha=Object(A.a)(fa,2),va=ha[0],Ca=ha[1],ja=Object(n.useState)(),Oa=Object(A.a)(ja,2),xa=Oa[0],Sa=Oa[1],ya=Object(n.useState)(),ka=Object(A.a)(ya,2),Ia=ka[0],Ga=ka[1],wa=Object(n.useState)(),Na=Object(A.a)(wa,2),La=Na[0],Aa=Na[1],Ma=Object(n.useState)(),Pa=Object(A.a)(Ma,2),Da=Pa[0],Fa=Pa[1],Ta=Object(n.useState)(),Ra=Object(A.a)(Ta,2),Wa=Ra[0],_a=Ra[1],Ja=Object(n.useState)(),qa=Object(A.a)(Ja,2),Ba=qa[0],Ua=qa[1],Ya=Object(n.useState)(),za=Object(A.a)(Ya,2),Ha=za[0],Va=za[1],$a=Object(n.useState)(),Ka=Object(A.a)($a,2),Qa=Ka[0],Xa=Ka[1],Za=Object(n.useState)(),et=Object(A.a)(Za,2),at=et[0],tt=et[1],nt=Object(n.useState)(),lt=Object(A.a)(nt,2),ot=lt[0],rt=lt[1],ct=Object(n.useState)(),it=Object(A.a)(ct,2),ut=it[0],mt=it[1],st=Object(n.useState)(),Et=Object(A.a)(st,2),dt=Et[0],gt=Et[1],pt=Object(n.useState)(!1),bt=Object(A.a)(pt,2),ft=bt[0],ht=bt[1],vt=function(e){return function(e){return function(a){o(e)}}};function Ct(e){console.log("handleCameraError",e)}function jt(e){console.log("handleTakePhotoAnimationDone")}return l.a.createElement("div",{className:"containerForm"},l.a.createElement(D.a,{onSubmit:function(e){e.preventDefault(),console.log(i),console.log(j),console.log(Q),console.log(Ge),console.log("registros guardado"),ht(!0)}},l.a.createElement("div",null,1===t&&l.a.createElement(f.a,null,l.a.createElement(D.a.Group,{controlId:"numeroMaquina"},l.a.createElement(D.a.Label,{className:"center"},"numero de maquina"),l.a.createElement(D.a.Control,{type:"text",value:i,onChange:function(e){return u(e.target.value)}})),l.a.createElement(D.a.Group,{controlId:"camara"},b?l.a.createElement(te.a,{isFullscreen:!1,idealResolution:{width:480,height:320},imageType:ae.IMAGE_TYPES.JPG,imageCompression:.01,onTakePhoto:function(e){d(e)}}):null,E?l.a.createElement("p",{className:"center"},"vista previa foto"):null,l.a.createElement(f.a,{className:"center"},l.a.createElement(P.a,{src:E})),l.a.createElement(ee,{text:"Foto on/off camara",color:"#E5B63A",to:"#",onclick:function(){return h(!b)},icono:l.a.createElement(ne.a,{color:"black"})})),l.a.createElement(F.a,{className:"float-right",onClick:vt()(2)},"next")),2===t&&l.a.createElement(f.a,null,l.a.createElement(D.a.Group,{controlId:"contadorDigitalEntrada"},l.a.createElement(X,{text:"Entrada Digital"}),l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return O(e.target.value)},value:j})),l.a.createElement(D.a.Group,{controlId:"camara"},l.a.createElement(D.a.Label,null,"camara"),w?l.a.createElement(te.a,{isFullscreen:!1,idealFacingMode:ae.FACING_MODES.ENVIRONMENT,idealResolution:{width:480,height:320},imageType:ae.IMAGE_TYPES.JPG,imageCompression:.01,onTakePhotoAnimationDone:function(e){jt()},onCameraError:function(e){Ct(e)},onTakePhoto:function(e){k(e)}}):null,y?l.a.createElement("p",null,"vista previa imagen"):null,l.a.createElement(P.a,{src:y}),l.a.createElement(F.a,{onClick:function(){return N(!w)}},"activar camara")),l.a.createElement(D.a.Group,{controlId:"contadorDigitalSalida"},l.a.createElement(X,{text:"Salida Digital"}),l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return _(e.target.value)},value:W})),l.a.createElement(D.a.Group,{controlId:"camara"},l.a.createElement(D.a.Label,null,"camara"),H?l.a.createElement(te.a,{isFullscreen:!1,idealFacingMode:ae.FACING_MODES.USER,idealResolution:{width:480,height:320},imageType:ae.IMAGE_TYPES.JPG,imageCompression:.01,onTakePhoto:function(e){U(e)}}):null,B?l.a.createElement("p",null,"vista previa imagen"):null,l.a.createElement(P.a,{src:B}),l.a.createElement(F.a,{onClick:function(){return V(!H)}},"activar camara")),l.a.createElement(F.a,{color:"mdb-color",className:"float-left",onClick:vt()(1)},"previous"),l.a.createElement(F.a,{color:"mdb-color",className:"float-right",onClick:vt()(3)},"next")),3===t&&l.a.createElement(f.a,null,l.a.createElement(D.a.Group,{controlId:"contadorDigitalManualEntrada"},l.a.createElement(X,{text:"Entrada Digital Manual"}),l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return Z(e.target.value)},value:Q})),l.a.createElement(D.a.Group,{controlId:"camara"},l.a.createElement(D.a.Label,null,"camara"),Ee?l.a.createElement(te.a,{isFullscreen:!1,idealFacingMode:ae.FACING_MODES.USER,idealResolution:{width:480,height:320},imageType:ae.IMAGE_TYPES.JPG,imageCompression:.01,onTakePhotoAnimationDone:function(e){jt()},onCameraError:function(e){Ct(e)},onTakePhoto:function(e){ue(e)}}):null,ie?l.a.createElement("p",null,"vista previa imagen"):null,l.a.createElement(P.a,{src:ie}),l.a.createElement(F.a,{onClick:function(){return de(!Ee)}},"activar camara")),l.a.createElement(D.a.Group,{controlId:"contadorDigitalManualSalida"},l.a.createElement(X,{text:"Salida Digital Manual"}),l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return fe(e.target.value)},value:be})),l.a.createElement(D.a.Group,{controlId:"camara"},l.a.createElement(D.a.Label,null,"camara"),Se?l.a.createElement(te.a,{isFullscreen:!1,idealFacingMode:ae.FACING_MODES.USER,idealResolution:{width:480,height:320},imageType:ae.IMAGE_TYPES.JPG,imageCompression:.01,onTakePhotoAnimationDone:function(e){jt()},onCameraError:function(e){Ct(e)},onTakePhoto:function(e){je(e)}}):null,Ce?l.a.createElement("p",null,"vista previa imagen"):null,l.a.createElement(P.a,{src:Ce}),l.a.createElement(F.a,{onClick:function(){return ye(!Se)}},"activar camara")),l.a.createElement(F.a,{color:"mdb-color",className:"float-left",onClick:vt()(2)},"previous"),l.a.createElement(F.a,{color:"mdb-color",className:"float-right",onClick:vt()(4)},"next")),4===t&&l.a.createElement(f.a,null,l.a.createElement(D.a.Group,{controlId:"contadorMecanico"},l.a.createElement(X,{text:"Mecanico entrada"}),l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return we(e.target.value)},value:Ge})),l.a.createElement(D.a.Group,{controlId:"camara"},l.a.createElement(D.a.Label,null,"camara"),Fe?l.a.createElement(te.a,{isFullscreen:!1,idealFacingMode:ae.FACING_MODES.USER,idealResolution:{width:480,height:320},imageType:ae.IMAGE_TYPES.JPG,imageCompression:.01,onTakePhotoAnimationDone:function(e){jt()},onCameraError:function(e){Ct(e)},onTakePhoto:function(e){Me(e)}}):null,Ae?l.a.createElement("p",null,"vista previa imagen"):null,l.a.createElement(P.a,{src:Ae}),l.a.createElement(F.a,{onClick:function(){return Te(!Fe)}},"activar camara")),l.a.createElement(D.a.Group,{controlId:"contadormecanicosalida"},l.a.createElement(X,{text:"mecanico salida"}),l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return Je(e.target.value)},value:_e})),l.a.createElement(D.a.Group,{controlId:"camara"},l.a.createElement(D.a.Label,null,"camara"),Ve?l.a.createElement(te.a,{isFullscreen:!1,idealFacingMode:ae.FACING_MODES.USER,idealResolution:{width:480,height:320},imageType:ae.IMAGE_TYPES.JPG,imageCompression:.01,onTakePhotoAnimationDone:function(e){jt()},onCameraError:function(e){Ct(e)},onTakePhoto:function(e){Ye(e)}}):null,Ue?l.a.createElement("p",null,"vista previa imagen"):null,l.a.createElement(P.a,{src:Ue}),l.a.createElement(F.a,{onClick:function(){return $e(!Ve)}},"activar camara")),l.a.createElement(F.a,{className:"float-left",onClick:vt()(3)},"previous"),l.a.createElement(F.a,{className:"float-right",onClick:vt()(5)},"next")),5===t&&l.a.createElement(f.a,null,l.a.createElement(D.a.Label,null,"resultados"),l.a.createElement(D.a.Group,{as:T.a,controlId:"contadorMecanico"},l.a.createElement(D.a.Label,{column:!0},"total monedas"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return Ze(e.target.value)},value:Xe}))),l.a.createElement(D.a.Group,{as:T.a,controlId:"contadorMecanico"},l.a.createElement(D.a.Label,{column:!0},"total billetes"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return na(e.target.value)},value:ta}))),l.a.createElement(D.a.Group,{as:T.a,controlId:"contadorMecanico"},l.a.createElement(D.a.Label,{column:!0},"total"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return ca(e.target.value)},value:ra}))),l.a.createElement(D.a.Label,null,"devolucion"),l.a.createElement(D.a.Group,{as:T.a,controlId:"contadorMecanico"},l.a.createElement(D.a.Label,{column:!0},"total monedas"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return sa(e.target.value)},value:ma}))),l.a.createElement(D.a.Label,null,"prestamo"),l.a.createElement(D.a.Group,{as:T.a,controlId:"contadorMecanico"},l.a.createElement(D.a.Label,{column:!0},"total prestamo"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{autoComplete:"false",type:"text",onChange:function(e){return pa(e.target.value)},value:ga}))),l.a.createElement(F.a,{className:"float-left",onClick:vt()(4)},"previous"),l.a.createElement(F.a,{className:"float-right",onClick:vt()(6)},"next")),6===t&&l.a.createElement(f.a,null,l.a.createElement(D.a.Label,null,"liquidacion"),l.a.createElement(D.a.Group,{as:T.a,controlId:"maquina"},l.a.createElement(D.a.Label,{column:!0},"N de maquinas"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{disabled:!0,type:"text",onChange:function(e){return u(e.target.value)},value:i}))),l.a.createElement(D.a.Group,{as:T.a,controlId:"fechaHora"},l.a.createElement(D.a.Label,{column:!0},"fecha y hora"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return Ca(e.target.value)},value:va}))),l.a.createElement("h5",{style:{backgroundColor:"red"}},"ingresos"),l.a.createElement(D.a.Group,{as:T.a,controlId:"ingresoResultado"},l.a.createElement(D.a.Label,{column:!0},"resultado"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return Sa(e.target.value)},value:xa}))),l.a.createElement(D.a.Group,{as:T.a,controlId:"ingrdevolucion"},l.a.createElement(D.a.Label,{column:!0},"devolucion"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return Ga(e.target.value)},value:Ia}))),l.a.createElement(D.a.Group,{as:T.a,controlId:"contadorMecanico"},l.a.createElement(D.a.Label,{column:!0},"total"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{autoComplete:"false",type:"text",onChange:function(e){return Aa(e.target.value)},value:La}))),l.a.createElement("h5",{style:{backgroundColor:"red"}},"egresos"),l.a.createElement(D.a.Group,{as:T.a,controlId:"contadorMecanico"},l.a.createElement(D.a.Label,{column:!0},"prestamos"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return Fa(e.target.value)},value:Da}))),l.a.createElement(D.a.Group,{as:T.a,controlId:"contadorMecanico"},l.a.createElement(D.a.Label,{column:!0},"total"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return _a(e.target.value)},value:Wa}))),l.a.createElement("h5",{style:{backgroundColor:"red"}},"comisiones"),l.a.createElement(D.a.Group,{as:T.a,controlId:"contadorMecanico"},l.a.createElement(D.a.Label,{column:!0},"devolucion"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return Ua(e.target.value)},value:Ba}))),l.a.createElement(D.a.Group,{as:T.a,controlId:"totalComisiones"},l.a.createElement(D.a.Label,{column:!0},"total"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return Va(e.target.value)},value:Ha}))),l.a.createElement("h5",{style:{backgroundColor:"red"}},"resultado"),l.a.createElement(D.a.Group,{as:T.a,controlId:"quinceporciento"},l.a.createElement(D.a.Label,{column:!0},"comision 15%"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return Xa(e.target.value)},value:Qa}))),l.a.createElement(D.a.Group,{as:T.a,controlId:"treintaPorciento"},l.a.createElement(D.a.Label,{column:!0},"comision 30%"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return tt(e.target.value)},value:at}))),l.a.createElement(D.a.Group,{as:T.a,controlId:"totalPagar"},l.a.createElement(D.a.Label,{column:!0},"total a pagar"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return rt(e.target.value)},value:ot}))),l.a.createElement(D.a.Group,{as:T.a,controlId:"promedioPV"},l.a.createElement(D.a.Label,{column:!0},"promedio PV"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return mt(e.target.value)},value:ut}))),l.a.createElement(D.a.Group,{as:T.a,controlId:"estadoContadores"},l.a.createElement(D.a.Label,{column:!0},"estado de contadores"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return gt(e.target.value)},value:dt}))),l.a.createElement(F.a,{className:"float-left",onClick:vt()(5)},"previous"),l.a.createElement(F.a,{size:"lg",block:!0,variant:"dark",type:"submit"},"guardar datos")),ft?l.a.createElement("a",{style:{display:"flex",justifyContent:"center"},href:"https://wa.me/?text=datos del formulario : "+i,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(le.a,{size:"100px",color:"white",style:{backgroundColor:"#01e675",borderRadius:7}},"compartir en ws")):null)))}),ie=function(){return l.a.createElement("div",{className:"containerForm"},"asdasd")},ue=function(){return l.a.createElement("div",{className:"containerForm"},"gastos")},me=t(68),se=t.n(me),Ee=(t(59),Object(h.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > .cubo":{display:"flex",justifyContent:"center",alignContent:"center",flexWrap:"wrap",margin:e.spacing(2),width:e.spacing(9),height:e.spacing(9)}}}}))),de=function(){var e=Object(n.useState)(""),a=Object(A.a)(e,2),t=(a[0],a[1],Object(n.useState)("")),o=Object(A.a)(t,2),r=o[0],c=o[1],i=Object(n.useState)(""),u=Object(A.a)(i,2),m=u[0],s=u[1],E=Object(n.useState)(""),d=Object(A.a)(E,2),g=d[0],p=d[1],b=Object(n.useState)(!1),h=Object(A.a)(b,2),v=h[0],C=h[1],j=Object(n.useState)(""),O=Object(A.a)(j,2),x=O[0],S=O[1],y=Ee(),k=["one","two","three"],I=k[0];return l.a.createElement("div",{className:"containerForm"},l.a.createElement(D.a,{onSubmit:function(e){e.preventDefault(),console.log(r),console.log(x),console.log("registros guardado"),alert("se guardaran los datos : "+r+m)}},"(",l.a.createElement(f.a,null,v?null:l.a.createElement("div",null,l.a.createElement(D.a.Group,{as:T.a,controlId:"maquina"},l.a.createElement(D.a.Label,{column:!0},"cierre"),l.a.createElement(R.a,null,l.a.createElement(se.a,{options:k,onChange:function(e){console.log(e)},value:I,placeholder:"Select an option"}))),l.a.createElement(D.a.Group,{as:T.a,controlId:"numeroBoleta"},l.a.createElement(D.a.Label,{column:!0},"numero de boleta"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return c(e.target.value)},value:r}))),l.a.createElement(D.a.Group,{as:T.a,controlId:"fechaDeposito"},l.a.createElement(D.a.Label,{column:!0},"fecha deposito"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"date",onChange:function(e){return s(e.target.value)},value:m}))),l.a.createElement(D.a.Group,{as:T.a,controlId:"totalDeposito"},l.a.createElement(D.a.Label,{column:!0},"total deposito"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return p(e.target.value)},value:g})))),l.a.createElement(D.a.Group,{controlId:"camara"},v?l.a.createElement(te.a,{isFullscreen:!1,idealFacingMode:ae.FACING_MODES.USER,idealResolution:{width:480,height:320},imageType:ae.IMAGE_TYPES.JPG,imageCompression:.01,onTakePhoto:function(e){S(e)}}):null,x?l.a.createElement("p",{className:"center"},"vista previa foto"):null,l.a.createElement(f.a,{className:"center"},l.a.createElement(P.a,{src:x}))),l.a.createElement(f.a,{className:y.root},l.a.createElement(ee,{text:"Foto Boleta on/off camara",color:"#E5B63A",to:"#",onclick:function(){return C(!v)},icono:l.a.createElement(ne.a,{color:"black"})})),x?l.a.createElement(F.a,{className:"float-right margen",variant:"danger",onClick:function(){S(""),C(!1)}},"eliminar foto"):null,x?l.a.createElement(F.a,{block:!0,variant:"dark",type:"submit"},"confirmar"):null),")"))},ge=Object(h.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > .cubo":{display:"flex",justifyContent:"center",alignContent:"center",flexWrap:"wrap",margin:e.spacing(2),width:e.spacing(9),height:e.spacing(9)}}}})),pe=function(){var e=Object(n.useState)(""),a=Object(A.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)(""),c=Object(A.a)(r,2),i=c[0],u=(c[1],Object(n.useState)("")),m=Object(A.a)(u,2),s=m[0],E=m[1],d=Object(n.useState)(""),g=Object(A.a)(d,2),p=g[0];g[1],ge();return l.a.createElement("div",null,l.a.createElement(D.a,{onSubmit:function(e){e.preventDefault(),console.log(t),console.log(p),console.log("registros guardado"),alert("se guardaran los datos : "+t+i)}},"(",l.a.createElement(f.a,null,l.a.createElement(D.a.Group,{as:T.a,controlId:"numeroBoleta"},l.a.createElement(D.a.Label,{column:!0},"cierre"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return o(e.target.value)},value:t}))),l.a.createElement(D.a.Group,{as:T.a,controlId:"totalDeposito"},l.a.createElement(D.a.Label,{column:!0},"maquina"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return E(e.target.value)},value:s}))),l.a.createElement(D.a.Group,{as:T.a,controlId:"totalDeposito"},l.a.createElement(D.a.Label,{column:!0},"local"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return E(e.target.value)},value:s})))),")"))},be=function(){var e=Object(n.useState)(""),a=Object(A.a)(e,2),t=a[0],o=a[1];return l.a.createElement("div",{style:{minHeight:"50vh"}},l.a.createElement(D.a,{onSubmit:function(e){e.preventDefault(),alert("dato")}},"(",l.a.createElement(f.a,null,l.a.createElement(D.a.Group,{as:T.a,controlId:"totalDeposito"},l.a.createElement(D.a.Label,{column:!0},"buscar"),l.a.createElement(R.a,null,l.a.createElement(D.a.Control,{type:"text",onChange:function(e){return o(e.target.value)},value:t}))),l.a.createElement(F.a,{block:!0,variant:"success",type:"submit"},"descargar")),")"))},fe=Object(h.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > .cubo":{display:"flex",justifyContent:"center",alignContent:"center",flexWrap:"wrap",margin:e.spacing(2),width:e.spacing(9),height:e.spacing(9)}}}}));var he=function(){var e=Object(n.useContext)(p),a=fe();return console.log(e),e.isAuth?l.a.createElement(v.a,{basename:"/re-comodin"},l.a.createElement(C.a,{exact:!0,path:"/"},l.a.createElement(U,null),l.a.createElement(X,{text:"semana x"}),l.a.createElement(f.a,{className:a.root},l.a.createElement(ee,{text:"Recaudaciones",color:"#F8DC27",to:"/recaudaciones",icono:l.a.createElement(j.a,{color:"black"})}),l.a.createElement(ee,{text:"Libro Diario",color:"#F8DC27",to:"/libro",icono:l.a.createElement(O.a,{color:"black"})}),l.a.createElement(ee,{text:"Calendario",color:"#F8DC27",to:"/calendario",icono:l.a.createElement(x.a,{color:"black"})})),l.a.createElement(X,{text:"semana x"}),l.a.createElement(f.a,{className:a.root},l.a.createElement(ee,{text:"Depositos",color:"#E5B63A",to:"/depositos",icono:l.a.createElement(S.a,{color:"black"})}),l.a.createElement(ee,{text:"Planilla Resumen",color:"#E5B63A",to:"/resumen",icono:l.a.createElement(y.a,{color:"black"})}),l.a.createElement(ee,{text:"Auditorias",color:"#E5B63A",to:"/auditorias",icono:l.a.createElement(k.a,{color:"black"})})),l.a.createElement(X,{text:"semana x"}),l.a.createElement(f.a,{className:a.root},l.a.createElement(ee,{text:"Servicio Tecnico",color:"#AF2C2F",to:"/calendario",icono:l.a.createElement(I.a,{color:"black"})}),l.a.createElement(ee,{text:"Sugerencias",color:"#AF2C2F",to:"/calendario",icono:l.a.createElement(G.a,{color:"black"})}),l.a.createElement(ee,{text:"DenunciasPY",to:"/calendario",icono:l.a.createElement(w.a,{color:"black"})})),l.a.createElement(X,{text:"semana x"}),l.a.createElement(f.a,{className:a.root},l.a.createElement(ee,{text:"Mis Ingresos",to:"/calendario",color:"black",icono:l.a.createElement(N.a,{color:"white"})}),l.a.createElement(ee,{text:"Dashboard",to:"/calendario",color:"black",icono:l.a.createElement(L.a,{color:"white"})})),l.a.createElement(Q,null)),l.a.createElement(C.c,null,l.a.createElement(C.a,{path:"/recaudaciones"},l.a.createElement(U,null),l.a.createElement(ce,null),l.a.createElement(Q,null)),l.a.createElement(C.a,{path:"/libro"},l.a.createElement(U,null),l.a.createElement(X,{text:"semana x"}),l.a.createElement("div",{style:{minHeight:"100vh"}},l.a.createElement(f.a,{className:a.root},l.a.createElement(ee,{to:"/devoluciones",icono:l.a.createElement(G.a,null)}),l.a.createElement(ee,{to:"/prestamos",icono:l.a.createElement(G.a,null)}),l.a.createElement(ee,{to:"/gastos",icono:l.a.createElement(G.a,null)}))),l.a.createElement(Q,null)),l.a.createElement(C.a,{path:"/gastos"},l.a.createElement(U,null),l.a.createElement(ue,null),l.a.createElement(Q,null)),l.a.createElement(C.a,{path:"/devoluciones"},l.a.createElement(U,null),l.a.createElement(ie,null),l.a.createElement(Q,null)),l.a.createElement(C.a,{path:"/depositos"},l.a.createElement(U,null),l.a.createElement(X,{text:"semana x"}),l.a.createElement(de,null),l.a.createElement(Q,null)),l.a.createElement(C.a,{path:"/resumen"},l.a.createElement(U,null),l.a.createElement(pe,null),l.a.createElement(X,{text:"resumen recaudaciones"}),l.a.createElement(be,null),l.a.createElement(Q,null)))):l.a.createElement(v.a,{basename:"/re-comodin"},l.a.createElement(C.a,{exact:!0,path:"/"},l.a.createElement(U,null),l.a.createElement(B,null)))},ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ce(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(108);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null,l.a.createElement(he,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){var a=new URL("/re-comodin",window.location.href);if(console.log(a),a.origin!==window.location.origin)return void console.log("yalhallo");window.addEventListener("load",(function(){var a="".concat("/re-comodin","/service-worker.js");ve?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ce(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ce(a,e)}))}}()},30:function(e,a,t){},58:function(e,a,t){},63:function(e,a,t){e.exports=t.p+"static/media/LogoComodin.84541d38.png"},64:function(e,a,t){e.exports=t.p+"static/media/quattro.6c59861b.png"},77:function(e,a,t){e.exports=t(109)},99:function(e,a,t){}},[[77,1,2]]]);
//# sourceMappingURL=main.510d1b66.chunk.js.map