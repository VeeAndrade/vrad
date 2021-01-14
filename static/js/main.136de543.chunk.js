(this.webpackJsonpvrad=this.webpackJsonpvrad||[]).push([[0],{23:function(e,t,a){e.exports=a(44)},28:function(e,t,a){},29:function(e,t,a){},32:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(19),i=a.n(s),o=(a(28),a(20)),c=a(22),l=a(9),u=a(10),m=a(12),d=a(11),p=a(1),h=(a(29),a(13)),g=a(6),v=a(3),f=a.n(v),E=(a(32),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.updateUserInfo=function(t,a){e.setState({user:t}),e.setState({purpose:a})},e.validateUser=function(t){e.state.user&&e.state.purpose&&e.state.email?e.props.updateUserInfo(e.state.user,e.state.purpose):window.alert("You must fill out all fields")},e.state={user:"",purpose:""},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"user-input-form"},r.a.createElement("input",{className:"username-input",type:"text",placeholder:"Name",value:this.state.title,name:"user",onChange:this.handleChange}),r.a.createElement("input",{className:"useremail-input",type:"email",placeholder:"Email",name:"email",onChange:this.handleChange,required:!0}),r.a.createElement("section",{className:"purpose-section"},r.a.createElement("label",{className:"purpose-label"},"Reason for trip: "),r.a.createElement("select",{name:"purpose",className:"purpose-selection",onChange:this.handleChange},r.a.createElement("option",{value:""},"Select one--"),r.a.createElement("option",{value:"Vacation"},"Vacation"),r.a.createElement("option",{value:"Business"},"Business"),r.a.createElement("option",{value:"Other"},"Other"))),r.a.createElement(g.b,{className:"continue-btn",onClick:this.validateUser,to:function(){return e.state.user&&e.state.purpose&&e.state.email?"/areas":"/"}},"Continue"))}}]),a}(n.Component));n.Component.propTypes={user:f.a.string,purpose:f.a.string};a(36);var N=function(e){var t=e.shortName,a=e.name,n=e.description,s=e.areaId,i=e.listings;return r.a.createElement("section",{className:"area-card-section"},r.a.createElement("h3",{className:"area-card-name"},a,r.a.createElement("p",{className:"area-card-shortName"},"(",t,")")),r.a.createElement("img",{src:"/vrad"+"/images/den-pic-".concat(s,".jpg"),className:"area-card-image",alt:"Pictures of a rental in ".concat(t)}),r.a.createElement("section",{className:"describe-sect"},r.a.createElement("aside",{className:"area-card-description"},n),r.a.createElement(g.b,{className:"view-listings-button",listings:i,to:"/areas/".concat(s,"/listings")},"View Listings")))},b=(a(37),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).displayAreas=function(){return e.state.areas.map((function(e){return r.a.createElement(N,{shortName:e.shortName,name:e.name,description:e.about,areaId:e.id,key:e.id})}))},e.state={areas:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({areas:this.props.areasData})}},{key:"render",value:function(){return this.state.areas?r.a.createElement("main",{className:"main-areas"},r.a.createElement("section",{className:"card-container"},this.displayAreas())):r.a.createElement("h1",null,"Loading...")}}]),a}(n.Component));n.Component.propTypes={areas:f.a.array};var F=b,k=(a(38),function(e){if(e.matched){var t=e.matched.listing_id.toString();return r.a.createElement("article",{className:"listing-section-article"},r.a.createElement("h1",{className:"single-listing-heading"},e.matched.name),r.a.createElement("section",{className:"images-section"},r.a.createElement("img",{alt:"area listing",className:"listing-image",src:"/vrad"+"/images/".concat(t,"_a.jpg")}),r.a.createElement("img",{alt:"area listing",className:"listing-image",src:"/vrad"+"/images/".concat(t,"_b.jpg")}),r.a.createElement("img",{alt:"area listing",className:"listing-image",src:"/vrad"+"/images/".concat(t,"_c.jpg")})),r.a.createElement("section",{className:"listing-description-section"},r.a.createElement("section",{className:"listing-paragraph-decription"},r.a.createElement("p",null,"Great for entertaining: spacious, updated ",e.matched.details.beds," bedroom,",e.matched.details.baths," bathroom apartment in Lakeview, available May 1st. Close to nightlife with private backyard. Cost Per Night: $",e.matched.details.cost_per_night,". The building is pet-friendly with heat included. This property is managed by a responsible landlord using Avail landlord software. Applicants are required to complete a rental application and authorize a $45 credit and background check.")),r.a.createElement("section",{className:"short-description"},r.a.createElement("section",{className:"p-tags"},r.a.createElement("p",null,"Address: ",e.matched.address.street),r.a.createElement("p",null,"Zip Code: ",e.matched.address.zip),r.a.createElement("p",null,"Beds: ",e.matched.details.beds),r.a.createElement("p",null,"Baths: ",e.matched.details.baths),r.a.createElement("p",null,"Cost Per Night: $",e.matched.details.cost_per_night)),r.a.createElement("section",{className:"unordered-list"},r.a.createElement("ul",null,r.a.createElement("p",null,"This place includes:"),e.matched.details.features.map((function(e){return r.a.createElement("li",{key:e},e)}))))),r.a.createElement("section",{className:"buttons-container"},r.a.createElement("button",{className:"favorite-button",onClick:function(){return e.addToFavorites(e.matched)}},"Favorite"),r.a.createElement("button",{className:"remove-from-favorites",name:parseInt(t),onClick:function(t){return function(t){if(e.userFavorites.length){var a=e.userFavorites.find((function(e){return e.listing_id===parseInt(t)}));if(e.userFavorites.includes(a)){var n=e.userFavorites.indexOf(a);e.userFavorites.splice(n,1),e.removeFromFavorites(e.userFavorites)}else window.alert("You do not have that listing in your favorites")}else window.alert("You have no favorites")}(t.target.name)}},"Remove"))))}return r.a.createElement("h1",null,"Loading...")}),w=(a(39),function(e){var t=e.listings,a=e.id;return t.map((function(e){return r.a.createElement("article",{className:"area-listing-section",key:e.listing_id},r.a.createElement("header",{className:"area-listing-name"},e.name),r.a.createElement("img",{alt:"area listings",className:"area-listing-image",src:"/vrad"+"/images/".concat(e.listing_id,"_a.jpg")}),r.a.createElement("button",{className:"view-listings-link-button"},r.a.createElement(g.b,{className:"view-listing-link",to:"/areas/".concat(a,"/listings/").concat(e.listing_id)},"View This Listing")))}))}),y=(a(40),function(e){var t=e.listings,a=e.id;return r.a.createElement("section",{className:"area-listings-container"},r.a.createElement(w,{listings:t,id:a}))}),j=(a(41),function(e){var t=e.user,a=e.purpose,n=e.userFavorites,s=e.updateUserInfo;return t&&a?r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"logged-in-header"},r.a.createElement("h2",{className:"welcome-user"},"Welcome, ",t),r.a.createElement("h1",{className:"logged-in-heading"},"Denver Rentals"),r.a.createElement("section",{className:"links-buttons"},r.a.createElement(g.c,{className:"favorites-nav-link",to:"/favorites"},"Favorites:",n.length),r.a.createElement(g.c,{className:"signout-btn",to:"/",onClick:function(){s("","")}},"Signout"))),r.a.createElement("article",{className:"user-info"},r.a.createElement("p",{className:"purpose"},"We found the perfect ",a," rentals for you!"))):""}),_=(a(42),function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-heading"},"Denver Rentals"))}),C=function(e){return r.a.createElement("section",null,r.a.createElement("h1",null,"There was an error: ",e))},O=(a(43),function(e){if(e.userFavorites.length){var t=e.userFavorites.map((function(t){return r.a.createElement("article",{className:"fav-card"},r.a.createElement("h2",{className:"fav-heading"},t.name),r.a.createElement("section",{className:"fav-images-section"},r.a.createElement("img",{alt:"area listing",className:"fav-image",src:"/vrad"+"/images/".concat(t.listing_id,"_a.jpg")})),r.a.createElement("button",{name:t.listing_id,className:"remove-fav-btn",onClick:function(t){return function(t){var a=e.userFavorites.find((function(e){return e.listing_id===parseInt(t)})),n=e.userFavorites.indexOf(a);e.userFavorites.splice(n,1),e.removeFromFavorites(e.userFavorites)}(t.target.name)}},"Remove From Favorites"))}));return r.a.createElement("section",{className:"fav-section"},t)}return r.a.createElement("h1",null,"You have no userFavorites")}),I=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).addToFavorites=function(t){e.state.userFavorites.includes(t)||e.setState({userFavorites:[].concat(Object(c.a)(e.state.userFavorites),[t])})},e.updateUserInfo=function(t,a){e.setState({user:t}),e.setState({purpose:a})},e.removeFromFavorites=function(t){e.setState({userFavorites:t})},e.state={user:"",purpose:"",areas:"",listings:"",error:!1,userFavorites:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3001/api/v1/areas").then((function(e){if(!e.ok)throw Error("Error getting areas");return e.json()})).then((function(t){(function(e){return Promise.all(e)})(t.areas.map((function(t){return function(e){return fetch("http://localhost:3001"+e.details).then((function(e){if(!e.ok)throw Error("Error getting listings");return e.json()}))}(t).then((function(e){return Object(o.a)({shortName:t.area},e)})).catch((function(t){return e.setState({error:t})}))}))).then((function(t){var a=t.reduce((function(e,t){return e[t.name]=t.listings,e}),{});e.setState({areas:t,listings:a});var n=Object.values(e.state.listings),r=[];n.map((function(t){t.map((function(t){(function(e){return fetch("http://localhost:3001"+e).then((function(e){if(!e.ok)throw Error("Error getting that listing");return e.json()}))})(t).then((function(t){r.push(t),e.setState({listings:r})}))}))}))}))}))}},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement(C,{errorMessage:this.state.error}):this.state.areas&&this.state.listings.length?r.a.createElement("main",{className:"App-main"},this.state.user?r.a.createElement(j,{user:this.state.user,purpose:this.state.purpose,userFavorites:this.state.userFavorites,updateUserInfo:this.updateUserInfo}):r.a.createElement(_,null),r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(E,{updateUserInfo:e.updateUserInfo})}}),r.a.createElement(p.a,{exact:!0,path:"/areas",render:function(){return r.a.createElement(F,{areasData:e.state.areas})}}),r.a.createElement(p.a,{exact:!0,path:"/areas/:area_id/listings",render:function(t){var a=t.match.params.area_id,n=e.state.listings.filter((function(e){return e.area_id===parseInt(a)}));return r.a.createElement(y,{listings:n,id:a})}}),r.a.createElement(p.a,{exact:!0,path:"/areas/:area_id/listings/:listing_id",render:function(t){var a=t.match,n=e.state.listings.find((function(e){return parseInt(a.params.listing_id)===e.listing_id}));return r.a.createElement(k,{matched:n,userFavorites:e.state.userFavorites,removeFromFavorites:e.removeFromFavorites,addToFavorites:e.addToFavorites})}}),r.a.createElement(p.a,{exact:!0,path:"/favorites",render:function(){return r.a.createElement(O,{userFavorites:e.state.userFavorites,removeFromFavorites:e.removeFromFavorites})}})):r.a.createElement("h1",null,"LOADING . . .")}}]),a}(n.Component);n.Component.propTypes={user:f.a.string,purpose:f.a.string,areas:f.a.array,listings:f.a.array,error:f.a.bool,userFavorites:f.a.array};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=r.a.createElement(g.a,null,r.a.createElement(I,null));i.a.render(S,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.136de543.chunk.js.map