(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,n){e.exports=n(356)},152:function(e,t,n){},153:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},355:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(62),l=n.n(i),r=(n(152),n(15)),c=n(22),s=n(18),u=n(16),h=n(17),d=n(41),p=(n(153),n(144)),g=n.n(p),m=n(145),f=n.n(m),v=["name","id","location","picture","link","price_range","overall_star_rating"];function w(e){if(!e.ok)throw e;return e}var b=function(e){return fetch("".concat("https://graph.facebook.com/","/").concat("v3.2","/").concat(e,"?fields=").concat(v,"&access_token=").concat("318542388823429|qfJlfM8Kqqekmt6Me6nND8JdXRU")).then(w)},E=(n(155),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,o.a.createElement("span",{className:"title"},"Auxiliadora ",o.a.createElement("small",null,"&")," Mont'Serrat"),o.a.createElement("hr",null),o.a.createElement("span",{className:"subtitle"},"Porto Alegre \xb7 RS \xb7 Brazil")))}}]),t}(a.Component)),y=(n(156),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",places:[]},n.componentWillReceiveProps=function(e){n.setState({places:e.places})},n.updateQuery=function(e){n.setState({query:e}),n.props.onSearchUpdated(e)},n.onItemClicked=function(e){n.props.onItemSelected(e)},n.onItemHighlighted=function(e){n.props.onItemHighlighted(e)},n.onKeyDown=function(e,t){13===e.keyCode&&n.props.onItemSelected(t)},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.query,a=t.places;return o.a.createElement("aside",{className:"search"},o.a.createElement("input",{autoFocus:!0,type:"text",placeholder:"Search places by name","aria-label":"Search places by name",value:n,onChange:function(t){return e.updateQuery(t.target.value)},disabled:this.props.disabled}),o.a.createElement("ol",{className:"search-results"},a.map(function(t){return o.a.createElement("li",{key:t.id,onClick:function(){return e.onItemClicked(t)},onMouseEnter:function(){return e.onItemHighlighted(t)},onMouseLeave:function(){return e.onItemHighlighted(t)},onFocus:function(){return e.onItemHighlighted(t)},onBlur:function(){return e.onItemHighlighted(t)},onKeyDown:function(n){return e.onKeyDown(n,t)},tabIndex:0},o.a.createElement("span",null,t.name))})))}}]),t}(a.Component)),k=(n(157),n(88)),S=n(28),j=(n(355),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={showInfo:!1},n.onInfoWindowClosed=function(){n.setState({showInfo:!1})},n.toggleInfoWindow=function(){n.setState({showInfo:!n.state.showInfo})},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.showInfo,t=this.props,n=t.place,a=t.select,i=t.highlight,l=new google.maps.LatLng(n.location.latitude,n.location.longitude);return o.a.createElement(S.Marker,{position:l,onClick:this.toggleInfoWindow,animation:i?google.maps.Animation.BOUNCE:null},(e||a)&&o.a.createElement(S.InfoWindow,{onCloseClick:this.onInfoWindowClosed},o.a.createElement("div",{className:"info-window"},o.a.createElement("div",{className:"info-header"},o.a.createElement("img",{src:n.picture.data.url,alt:n.name}),o.a.createElement("h2",null,o.a.createElement("a",{href:n.link,target:"_blank",rel:"noopener noreferrer"},n.name))),o.a.createElement("hr",null),o.a.createElement("p",null,o.a.createElement("strong",null,"Address:")," ",n.location.street),o.a.createElement("p",null,o.a.createElement("strong",null,"Rating:")," ",n.overall_star_rating," of 5"),n.price_range&&o.a.createElement("p",null,o.a.createElement("strong",null,"Price:")," ",n.price_range))))}}]),t}(a.Component)),I=Object(k.a)(Object(k.b)({loadingElement:o.a.createElement("span",null,"Loading Google Maps..."),containerElement:o.a.createElement("main",{className:"map-container",role:"application",tabIndex:"0"}),mapElement:o.a.createElement("div",{className:"map"})}),S.withScriptjs,S.withGoogleMap)(function(e){return o.a.createElement(S.GoogleMap,{defaultZoom:16,defaultCenter:{lat:-30.02502,lng:-51.191165}},e.places.map(function(t){return o.a.createElement(j,{key:t.id,place:t,highlight:e.highlighted&&t.id===e.highlighted.id,select:e.selected&&t.id===e.selected.id})}))}),O=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).render=function(){var e=n.props,t=e.googleMapURL,a=e.places,i=e.selected,l=e.highlighted;return o.a.createElement(I,{googleMapURL:t,places:a,selected:i,highlighted:l})},n}return Object(h.a)(t,e),t}(a.Component),P=[{id:"268669466579003",name:"Fazenda Barbanegra",position:{lat:-30.025769,lng:-51.189295}},{id:"700896006619622",name:"Le Bateau Ivre",position:{lat:-30.028217,lng:-51.187401}},{id:"259281561605091",name:"Amiche Pizzeria Napoletana",position:{lat:-30.027048,lng:-51.189527}},{id:"189014444773149",name:"O Galo Cinza",position:{lat:-30.024158,lng:-51.188978}},{id:"240588242764786",name:"William & Sons",position:{lat:-30.029411,lng:-51.189385}},{id:"467109016766607",name:"Charlie Brownie",position:{lat:-30.026026,lng:-51.19315}},{id:"205312857027290",name:"Sharin",position:{lat:-30.022891,lng:-51.192314}},{id:"764905120382104",name:"Ciao Pizzeria Napoletana",position:{lat:-30.026455,lng:-51.188857}},{id:"1050311255096970",name:"Zero Sen",position:{lat:-30.026493,lng:-51.18895}},{id:"382636498800066",name:"Brizza Pizzeria Napoletana",position:{lat:-30.022364,lng:-51.194586}},{id:"588584797891504",name:"Fornellone",position:{lat:-30.021352,lng:-51.194929}},{id:"1513180848762216",name:"Sette PastaBar",position:{lat:-30.021407,lng:-51.190905}},{id:"143827185807591",name:"Diego Andino P\xe2tisserie",position:{lat:-30.030123,lng:-51.18826}},{id:"139904993338445",name:"The Weiss",position:{lat:-30.024224,lng:-51.189717}},{id:"2069438689812080",name:"Dona Maricota",position:{lat:-30.027357,lng:-51.193457}},{id:"497242480300257",name:"Art & Bar",position:{lat:-30.023047,lng:-51.190388}},{id:"482792791748512",name:"72 New York",position:{lat:-30.021532,lng:-51.19516}}],C="There are some technical issues preventing us from reaching Facebook's API, which this app uses to load the locations it displays. Please try again later. \nMeanwhile, you are welcome to get to know the Auxiliadora and Mont'Serrat neighborhoods, as well as the rest of Porto Alegre, through our map.",A=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={places:[],visiblePlaces:null,selectedPlace:null,highlightedPlace:null,hasError:!1},n.componentDidMount=function(){var e=Object(d.a)(Object(d.a)(n));window.gm_authFailure=function(){e.setState({hasError:!0})},Promise.all(P.map(function(e){return b(e.id).then(function(e){return e.json()})})).then(function(e){return e.sort(f()("name"))}).then(function(e){n.setState({places:e,visiblePlaces:e}),n.forceUpdate()}).catch(function(e){n.setState({places:[],visiblePlaces:[]}),n.forceUpdate(),alert(C,e)})},n.onSearchUpdated=function(e){n.setState({visiblePlaces:n.getFilteredPlaces(e,n.state.places)})},n.onItemSelected=function(e){var t=n.state.selectedPlace;n.setState({selectedPlace:t&&t.id===e.id?null:e})},n.onItemHighlighted=function(e){var t=n.state.highlightedPlace;n.setState({highlightedPlace:t&&t.id===e.id?null:e})},n.getFilteredPlaces=function(e,t){var n;if(e){var a=new RegExp(g()(e.trim()),"i");n=t.filter(function(e){return a.test(e.name)})}else n=t;return n},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.places,n=e.visiblePlaces,a=e.selectedPlace,i=e.highlightedPlace;return e.hasError?o.a.createElement("div",{className:"google-maps-error"},o.a.createElement("h1",null,"Google Maps is unavailable..."),o.a.createElement("p",null,"There are some technical issues preventing us from reaching Google Maps. \nUnfortunatelly, we cannot proceed right now :( \nPlease try again later.")):n&&o.a.createElement("div",{className:"App"},o.a.createElement(E,null),o.a.createElement("div",{id:"content"},o.a.createElement(y,{places:n,selected:a,onSearchUpdated:this.onSearchUpdated,onItemSelected:this.onItemSelected,onItemHighlighted:this.onItemHighlighted,disabled:!(t&&t.length>0)}),o.a.createElement(O,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyBXQcVkKfK_5e3ruKK6eufMpYACSCuYx7o","&v=3"),places:n,selected:a,highlighted:i})))}},{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}}]),t}(a.Component),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(A,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/fend-neighborhood-map",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/fend-neighborhood-map","/service-worker.js");M?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):N(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):N(t,e)})}}()}},[[147,1,2]]]);
//# sourceMappingURL=main.9fbeef73.chunk.js.map