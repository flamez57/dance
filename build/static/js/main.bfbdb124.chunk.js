(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){(function(e){e.onLineEnv={frontHost:"https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1"},e.frApi={lists:e.onLineEnv.frontHost+"/lists",detail:e.onLineEnv.frontHost+"/detail"}}).call(this,t(10))},19:function(e,a,t){"use strict";(function(e){var l=t(1),i=t(2),n=t(4),c=t(3),s=t(5),r=t(0),m=t.n(r),o=t(7),u=t.n(o),d=t(8),p=t.n(d),h=(t(54),t(12),t(20)),E=t(21),f=t(22),g=t(23),v=t(24),b=t(25),N=t(26),y=t(27),j=t(9),w=t.n(j),O=function(a){function t(e){var a;return Object(l.a)(this,t),(a=Object(n.a)(this,Object(c.a)(t).call(this,e))).state={users:[],isLoaded:!1,height:e.height||-1},a}return Object(s.a)(t,a),Object(i.a)(t,[{key:"componentDidMount",value:function(){var a=this;a.updateSize(),window.addEventListener("resize",function(){return a.updateSize()}),p.a.get(e.frApi.lists).then(function(e){a.setState({users:e.data,isLoaded:!0})}).catch(function(e){console.log(e),a.setState({isLoaded:!1,error:e})})}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("resize",function(){return e.updateSize()})}},{key:"updateSize",value:function(){try{var e=u.a.findDOMNode(this).childNodes[1],a=this.props,t=a.width,l=a.height;t||(t=e.offsetWidth),l||(l=e.offsetHeight),this.setState({width:t,height:l})}catch(i){}}},{key:"render",value:function(){return m.a.createElement("div",{className:"App"},m.a.createElement(h.a,null),m.a.createElement(E.a,null),m.a.createElement("div",{className:"copyrights"},"Collect from ",m.a.createElement("a",{href:"http://mysweet95.com",title:"dance"},"dance")),m.a.createElement("div",{className:"modal fade",id:"myModal",tabIndex:"-1",role:"dialog"},m.a.createElement("div",{className:"modal-dialog"},m.a.createElement("div",{className:"modal-content"},m.a.createElement("div",{className:"modal-header"},m.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7"),m.a.createElement("img",{src:"images/2.jpg",alt:" ",className:"img-responsive"}),m.a.createElement("h5",null,"Donec lobortis pharetra dolor"),m.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typeset ting industry. Lorem Ipsum has been the industry's standard dumm y text ever since the 1500s, rds which don't look even slightly believable.."))))),m.a.createElement(f.a,null),m.a.createElement(g.a,null),m.a.createElement("div",{className:"pop-up"},m.a.createElement("div",{id:"small-dialog",className:"mfp-hide book-form"},m.a.createElement("h4",null,"Sign Up Form "),m.a.createElement("form",{action:"#",method:"post"},m.a.createElement("input",{type:"text",name:"Name",placeholder:"Your Name",required:""}),m.a.createElement("input",{type:"text",name:"Email",className:"email",placeholder:"Email",required:""}),m.a.createElement("input",{type:"password",name:"Password",className:"password",placeholder:"Password",required:""}),m.a.createElement("div",{className:"check-box"},m.a.createElement("input",{name:"chekbox",type:"checkbox",id:"brand",value:""}),m.a.createElement("label",{htmlFor:"brand"},m.a.createElement("span",null),"Remember Me.")),m.a.createElement("input",{type:"submit",value:"Sign Up"})))),m.a.createElement(v.a,null),m.a.createElement(b.a,null),m.a.createElement("div",{className:"testmonials",id:"monials",style:{height:this.state.height}},m.a.createElement(w.a,null),m.a.createElement("div",{className:"client-top"},m.a.createElement("h3",{className:"title-w3 three"},"What Our Happy Students Say"),m.a.createElement("p",{className:"sub-text"},"Choose Your Style"),m.a.createElement("div",{className:"slider"},m.a.createElement("div",{className:"callbacks_container"},m.a.createElement("ul",{className:"rslides",id:"slider3"},m.a.createElement("li",null,m.a.createElement("div",{className:"agileits-clients"},m.a.createElement("div",{className:" client_agile_info"},m.a.createElement("div",{className:"c-img"},m.a.createElement("i",{className:"fa fa-quote-right"})," "),m.a.createElement("p",null,"Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."),m.a.createElement("h4",null,m.a.createElement("img",{src:"images/m1.jpg",alt:""}),"Alice Lengthorn")))),m.a.createElement("li",null,m.a.createElement("div",{className:"agileits-clients"},m.a.createElement("div",{className:"client_agile_info"},m.a.createElement("div",{className:"c-img"},m.a.createElement("i",{className:"fa fa-quote-right"})," "),m.a.createElement("p",null,"Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."),m.a.createElement("h4",null,m.a.createElement("img",{src:"images/m2.jpg",alt:""})," Martin Pal")),m.a.createElement("div",{className:"clearfix"}))),m.a.createElement("li",null,m.a.createElement("div",{className:"agileits-clients"},m.a.createElement("div",{className:" client_agile_info"},m.a.createElement("div",{className:"c-img"},m.a.createElement("i",{className:"fa fa-quote-right"})," "),m.a.createElement("p",null,"Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."),m.a.createElement("h4",null,m.a.createElement("img",{src:"images/m3.jpg",alt:""}),"MARTIN NIXON"))))))))),m.a.createElement("div",{className:"agile-contact"},m.a.createElement("div",{className:"col-md-6 contact-map-right"},m.a.createElement("div",{id:"map"})),m.a.createElement("div",{className:"col-md-6 left-contact"},m.a.createElement("div",{className:"cont-top"},m.a.createElement("h5",null,m.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}),"Email"),m.a.createElement("a",{href:"mailto:flamez57@mysweet95.com"},"flamez57@mysweet95.com")),m.a.createElement("div",{className:"con-bot"},m.a.createElement("div",{className:"left-bw3"},m.a.createElement("h5",null,m.a.createElement("i",{className:"fa fa-map-marker","aria-hidden":"true"}),"Address"),m.a.createElement("p",null,"New York 3000"),m.a.createElement("p",null,"40019 Honey Street,"),m.a.createElement("p",null,"Morocco Casablanca")),m.a.createElement("div",{className:"right-bw3"},m.a.createElement("h5",null,m.a.createElement("i",{className:"fa fa-phone","aria-hidden":"true"}),"Phone"),m.a.createElement("p",null,"Telephone : +1 (734) 123-4567"),m.a.createElement("p",null,"+2158 85467"),m.a.createElement("p",null,"+2158 85467")))),m.a.createElement("div",{className:"clearfix"})),m.a.createElement(N.a,null),m.a.createElement(y.a,null),m.a.createElement("a",{href:"/",id:"toTop",style:{display:"block"}}," ",m.a.createElement("span",{id:"toTopHover",style:{opacity:1}}," ")))}}]),t}(r.Component);a.a=O}).call(this,t(10))},20:function(e,a,t){"use strict";t.d(a,"a",function(){return d});var l=t(1),i=t(2),n=t(4),c=t(3),s=t(5),r=t(0),m=t.n(r),o=function(e){function a(){return Object(l.a)(this,a),Object(n.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.props.hmData.map(function(e,a){return m.a.createElement("li",{key:a},m.a.createElement("div",{className:e.cla1},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"agileits-banner-info"},m.a.createElement("h3",null,"Shall We ",m.a.createElement("span",null,"Dance")," ?"),m.a.createElement("p",null,"CELEBRATE YOUR EVENT WITH US"),m.a.createElement("div",{className:"agileits_w3layouts_more menu__item"},m.a.createElement("a",{href:"/",className:"menu__link","data-toggle":"modal","data-target":"#myModal"},"Learn More"))))))})}}]),a}(r.Component),u=function(e){function a(){return Object(l.a)(this,a),Object(n.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"header-w3layouts"},m.a.createElement("nav",{className:"navbar navbar-default navbar-fixed-top"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"navbar-header page-scroll"},m.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":".navbar-ex1-collapse"},m.a.createElement("span",{className:"sr-only"},"Dance Whirl"),m.a.createElement("span",{className:"icon-bar"}),m.a.createElement("span",{className:"icon-bar"}),m.a.createElement("span",{className:"icon-bar"})),m.a.createElement("h1",null,m.a.createElement("a",{className:"navbar-brand",href:"index.html"},"Dance Whirl"))),m.a.createElement("div",{className:"collapse navbar-collapse navbar-ex1-collapse"},m.a.createElement("ul",{className:"nav navbar-nav navbar-right"},m.a.createElement("li",{className:"hidden"},m.a.createElement("a",{className:"page-scroll",href:"#page-top"},"|")),m.a.createElement("li",null,m.a.createElement("a",{className:"page-scroll scroll",href:"#home"},"Home")),m.a.createElement("li",null,m.a.createElement("a",{className:"page-scroll scroll",href:"#about"},"About")),m.a.createElement("li",null,m.a.createElement("a",{className:"page-scroll scroll",href:"#classes"},"Classes")),m.a.createElement("li",null,m.a.createElement("a",{className:"page-scroll scroll",href:"#plans"},"Plans")),m.a.createElement("li",null,m.a.createElement("a",{className:"page-scroll scroll",href:"#instructors"},"Instructors")),m.a.createElement("li",null,m.a.createElement("a",{className:"page-scroll scroll",href:"#gallery"},"Gallery")),m.a.createElement("li",null,m.a.createElement("a",{className:"page-scroll scroll",href:"#contact"},"Contact")))))))}}]),a}(r.Component),d=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(n.a)(this,Object(c.a)(a).call(this,e))).state={hmData:[{cla1:"w3layouts-banner-top"},{cla1:"w3layouts-banner-top w3layouts-banner-top1"},{cla1:"w3layouts-banner-top w3layouts-banner-top2"}],isLoaded:!1},t}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{id:"home",className:"w3ls-banner"},m.a.createElement("div",{className:"slider"},m.a.createElement("div",{className:"callbacks_container"},m.a.createElement("ul",{className:"rslides callbacks callbacks1",id:"slider4"},m.a.createElement(o,{hmData:this.state.hmData}))),m.a.createElement("div",{className:"clearfix"}," ")),m.a.createElement("div",{className:"thim-click-to-bottom"},m.a.createElement("a",{href:"#about",className:"scroll"},m.a.createElement("i",{className:"fa fa-long-arrow-down","aria-hidden":"true"}))),m.a.createElement(u,null))}}]),a}(r.Component)},21:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var l=t(1),i=t(2),n=t(4),c=t(3),s=t(5),r=t(0),m=t.n(r),o=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(n.a)(this,Object(c.a)(a).call(this,e))).state={aboutUs:{title:"About Us",subText:"Choose Your Style",content:"Lorem ipsum dolor sit amet, consectetur adipisc elit. Proin ultricies vestibulum velit.Lorem ipsum dolor sit amet.when an unknown printer took a galley of type and scrambled it to make a type specimen book.Proin ultricies vestibulum velit.Lorem ipsum dolor sit amet.when an unknown printer took  Proin ultricies vestibulum velit.Lorem ipsum dolor sit amet",link:"/"},supplies:{title:"Dancing Supplies",content:"Lorem ipsum dolor sit amet, consectetur adipisc elit. Proin ultricies vestibulum velit. a galley of type and scrambled it to make a type specimen book. Proin ultricies vestibulum velit."},masterClasses:{title:"Master Classes",content:"Lorem ipsum dolor sit amet, consectetur adipisc elit. Proin ultricies vestibulum velit., a galley of type and scrambled it to make a type specimen book. Proin ultricies vestibulum velit."},isLoaded:!1},t}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"about",id:"about"},m.a.createElement("div",{className:"col-md-6 ab-w3-agile-info"},m.a.createElement("div",{className:"ab-w3-agile-info-text"},m.a.createElement("h2",{className:"title-w3"},this.state.aboutUs.title),m.a.createElement("p",{className:"sub-text one"},this.state.aboutUs.subText),m.a.createElement("p",null,this.state.aboutUs.content),m.a.createElement("div",{className:"agileits_w3layouts_more menu__item one"},m.a.createElement("a",{href:this.state.aboutUs.link,className:"menu__link","data-toggle":"modal","data-target":"#myModal"},"Learn More"))),m.a.createElement("div",{className:"ab-w3-agile-inner"},m.a.createElement("div",{className:"col-md-6 ab-w3-agile-part"},m.a.createElement("h4",null,this.state.supplies.title),m.a.createElement("p",null,this.state.supplies.content)),m.a.createElement("div",{className:"col-md-6 ab-w3-agile-part two"},m.a.createElement("h4",null,this.state.masterClasses.title),m.a.createElement("p",null,this.state.masterClasses.content)),m.a.createElement("div",{className:"clearfix"}))),m.a.createElement("div",{className:"col-md-6 ab-w3-agile-img"}),m.a.createElement("div",{className:"clearfix"}))}}]),a}(r.Component)},22:function(e,a,t){"use strict";t.d(a,"a",function(){return u});var l=t(1),i=t(2),n=t(4),c=t(3),s=t(5),r=t(0),m=t.n(r),o=function(e){function a(){return Object(l.a)(this,a),Object(n.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.props.danCls.map(function(e,a){return m.a.createElement("div",{className:"col-md-3 class-grid",key:a},m.a.createElement("div",{className:"class-grid-img hvr-sweep-to-top"},m.a.createElement("img",{src:e.pic,alt:""}),m.a.createElement("div",{className:"caption"},m.a.createElement("h5",null,e.title))),m.a.createElement("h4",null,e.con))})}}]),a}(r.Component),u=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(n.a)(this,Object(c.a)(a).call(this,e))).state={danCls:[{pic:"images/c1.jpg",title:"Class 1",con:"Tango Ballroom "},{pic:"images/c2.jpg",title:"Class 2",con:"Ballet Ballerina"},{pic:"images/c3.jpg",title:"Class 3",con:"Pole Dance "},{pic:"images/c4.jpg",title:"Class 4",con:"BALLET BALLERINA "}],isLoaded:!1},t}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"services",id:"classes"},m.a.createElement("div",{className:"container"},m.a.createElement("h3",{className:"title-w3"},"Dancing Classes"),m.a.createElement("p",{className:"sub-text"},"Choose Your Style"),m.a.createElement("div",{className:"wthree-agile-classes-section"},m.a.createElement(o,{danCls:this.state.danCls}),m.a.createElement("div",{className:"clearfix"}," "))))}}]),a}(r.Component)},23:function(e,a,t){"use strict";(function(e){t.d(a,"a",function(){return g});var l=t(1),i=t(2),n=t(4),c=t(3),s=t(5),r=t(0),m=t.n(r),o=t(7),u=t.n(o),d=t(8),p=t.n(d),h=(t(12),t(9)),E=t.n(h),f=function(e){function a(){return Object(l.a)(this,a),Object(n.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.props.plaData.map(function(e,a){return m.a.createElement("div",{className:e.cla1,key:a},m.a.createElement("div",{className:"price-block agile"},m.a.createElement("div",{className:e.cla3},m.a.createElement("h4",null,e.title),m.a.createElement("h3",null,m.a.createElement("span",null,"$"),e.price),m.a.createElement("h5",null,"each")),m.a.createElement("div",{className:"price-gd-bottom"},m.a.createElement("div",{className:"price-list"},m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"})),m.a.createElement("li",null,m.a.createElement("i",{className:"fa fa-star-o","aria-hidden":"true"})),m.a.createElement("li",null,m.a.createElement("i",{className:"fa fa-star-o","aria-hidden":"true"})),m.a.createElement("li",null,m.a.createElement("i",{className:"fa fa-star-o","aria-hidden":"true"})),m.a.createElement("li",null,m.a.createElement("i",{className:"fa fa-star-o","aria-hidden":"true"}))),m.a.createElement("h6",{className:e.cla2},".",m.a.createElement("i",{className:"fa fa-street-view","aria-hidden":"true"}),".")),m.a.createElement("div",{className:e.cla4},m.a.createElement("a",{className:"book popup-with-zoom-anim button-isi zoomIn animated","data-wow-delay":".5s",href:"#small-dialog"},"Sign Up")))))})}}]),a}(r.Component),g=function(a){function t(e){var a;return Object(l.a)(this,t),(a=Object(n.a)(this,Object(c.a)(t).call(this,e))).state={plaData:[{price:"79",title:"3/4HR LESSON",cla1:"col-md-3 price-grid",cla2:"bed",cla3:"price-gd-top pric-clr1",cla4:"price-selet pric-sclr1"},{price:"119",title:"3/4HR LESSON",cla1:"col-md-3 price-grid",cla2:"bed two",cla3:"price-gd-top pric-clr2",cla4:"price-selet pric-sclr2"},{price:"159",title:"1HR LESSON",cla1:"col-md-3 price-grid lost",cla2:"bed three",cla3:"price-gd-top pric-clr3",cla4:"price-selet pric-sclr3"},{price:"199",title:"1/2HR LESSON",cla1:"col-md-3 price-grid wthree lost",cla2:"bed four",cla3:"price-gd-top pric-clr4",cla4:"price-selet pric-sclr4"}],users:[],isLoaded:!1,height:e.height||-1},a}return Object(s.a)(t,a),Object(i.a)(t,[{key:"componentDidMount",value:function(){var a=this;a.updateSize(),window.addEventListener("resize",function(){return a.updateSize()}),p.a.get(e.frApi.lists).then(function(e){a.setState({users:e.data,isLoaded:!0})}).catch(function(e){console.log(e),a.setState({isLoaded:!1,error:e})})}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("resize",function(){return e.updateSize()})}},{key:"updateSize",value:function(){try{var e=u.a.findDOMNode(this).childNodes[1],a=this.props,t=a.width,l=a.height;t||(t=e.offsetWidth),l||(l=e.offsetHeight+150),this.setState({width:t,height:l})}catch(i){}}},{key:"render",value:function(){return m.a.createElement("div",{className:"main",id:"plans",style:{height:this.state.height}},m.a.createElement(E.a,null),m.a.createElement("div",{className:"priceing-table-main"},m.a.createElement("h3",{className:"title-w3 three"},"Our Pricing Pakages"),m.a.createElement("p",{className:"sub-text"},"Choose Your Style"),m.a.createElement("div",{className:"priceing-table-grids"},m.a.createElement(f,{plaData:this.state.plaData}),m.a.createElement("div",{className:"clearfix"}," "))))}}]),t}(r.Component)}).call(this,t(10))},24:function(e,a,t){"use strict";t.d(a,"a",function(){return u});var l=t(1),i=t(2),n=t(4),c=t(3),s=t(5),r=t(0),m=t.n(r),o=function(e){function a(){return Object(l.a)(this,a),Object(n.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.props.instData.map(function(e,a){return m.a.createElement("div",{className:"col-sm-4 team-grid",key:a},m.a.createElement("div",{className:"ih-item circle effect10 bottom_to_top"},m.a.createElement("div",{className:"img"},m.a.createElement("img",{src:e.pic,alt:"img"})),m.a.createElement("div",{className:"info"},m.a.createElement("h3",null,e.title),m.a.createElement("div",{className:"icons"},m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("a",{href:"//mysweet95.com"},m.a.createElement("i",{className:"fa fa-facebook"}))),m.a.createElement("li",{className:"team-twitter"},m.a.createElement("a",{href:"/"},m.a.createElement("i",{className:"fa fa-twitter"}))),m.a.createElement("li",null,m.a.createElement("a",{href:"//mysweet95.com"},m.a.createElement("i",{className:"fa fa-google-plus","aria-hidden":"true"}),".")))))))})}}]),a}(r.Component),u=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(n.a)(this,Object(c.a)(a).call(this,e))).state={instData:[{pic:"images/t1.jpg",title:"David Watson"},{pic:"images/t2.jpg",title:"Shane Smith"},{pic:"images/t3.jpg",title:"Steve Warner"},{pic:"images/t4.jpg",title:"Dale Duminy"},{pic:"images/t5.jpg",title:"Shane Miller"},{pic:"images/t6.jpg",title:"James Kallis"}],isLoaded:!1},t}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"instructors",id:"instructors"},m.a.createElement("div",{className:"container"},m.a.createElement("h3",{className:"title-w3"},"Our Instructors"),m.a.createElement("p",{className:"sub-text"},"Choose Your Style"),m.a.createElement("div",{className:"team-grids"},m.a.createElement(o,{instData:this.state.instData}),m.a.createElement("div",{className:"clearfix"}," "))))}}]),a}(r.Component)},25:function(e,a,t){"use strict";t.d(a,"a",function(){return u});var l=t(1),i=t(2),n=t(4),c=t(3),s=t(5),r=t(0),m=t.n(r),o=function(e){function a(){return Object(l.a)(this,a),Object(n.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.props.galData.map(function(e,a){return m.a.createElement("div",{className:"col-md-4 gallery-grid",key:a},m.a.createElement("div",{className:"carouselGallery-col-1 carouselGallery-carousel","data-likes":"3144","data-index":a,"data-username":" ","data-imagetext":e.imgText,"data-location":e.project,"data-imagepath":e.pic,"data-posturl":"#",style:{backgroundImage:"url("+e.pic+")"}},m.a.createElement("div",{className:"carouselGallery-item"},m.a.createElement("div",{className:"carouselGallery-item-meta"},m.a.createElement("span",{className:"carouselGallery-item-meta-user"},e.title)))))})}}]),a}(r.Component),u=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(n.a)(this,Object(c.a)(a).call(this,e))).state={galData:[{pic:"images/g1.jpg",imgText:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",title:"Photo Gallery",project:"Project1"},{pic:"images/g2.jpg",imgText:"Occaecati at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",title:"Photo Gallery",project:"Project2"},{pic:"images/g3.jpg",imgText:"similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, Et harum quidem rerum facilis est et expedita distinctio.",title:"Photo Gallery",project:"Project3"},{pic:"images/g4.jpg",imgText:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",title:"Photo Gallery",project:"Project4"},{pic:"images/g5.jpg",imgText:"Similique sunt in culpa qui at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",title:"Photo Gallery",project:"Project5"},{pic:"images/g6.jpg",imgText:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",title:"Photo Gallery",project:"Project6"}],isLoaded:!1},t}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"gallery",id:"gallery"},m.a.createElement("h3",{className:"title-w3"},"Photo Gallery"),m.a.createElement("p",{className:"sub-text"},"Choose Your Style"),m.a.createElement("div",{className:"gallery-grids carouselGallery-grid hidden-xs"},m.a.createElement(o,{galData:this.state.galData}),m.a.createElement("div",{className:"clearfix"}," ")))}}]),a}(r.Component)},26:function(e,a,t){"use strict";(function(e){t.d(a,"a",function(){return f});var l=t(1),i=t(2),n=t(4),c=t(3),s=t(5),r=t(0),m=t.n(r),o=t(7),u=t.n(o),d=t(8),p=t.n(d),h=(t(12),t(9)),E=t.n(h),f=function(a){function t(e){var a;return Object(l.a)(this,t),(a=Object(n.a)(this,Object(c.a)(t).call(this,e))).state={hmData:[{cla1:"w3layouts-banner-top"},{cla1:"w3layouts-banner-top w3layouts-banner-top1"},{cla1:"w3layouts-banner-top w3layouts-banner-top2"}],users:[],isLoaded:!1,height:e.height||-1},a}return Object(s.a)(t,a),Object(i.a)(t,[{key:"componentDidMount",value:function(){var a=this;a.updateSize(),window.addEventListener("resize",function(){return a.updateSize()}),p.a.get(e.frApi.lists).then(function(e){a.setState({users:e.data,isLoaded:!0})}).catch(function(e){console.log(e),a.setState({isLoaded:!1,error:e})})}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("resize",function(){return e.updateSize()})}},{key:"updateSize",value:function(){try{var e=u.a.findDOMNode(this).childNodes[1],a=this.props,t=a.width,l=a.height;t||(t=e.offsetWidth),l||(l=e.offsetHeight+150),this.setState({width:t,height:l})}catch(i){}}},{key:"render",value:function(){return m.a.createElement("div",{className:"contact",id:"contact",style:{height:this.state.height}},m.a.createElement(E.a,null),m.a.createElement("div",{className:"contact-top"},m.a.createElement("h3",{className:"title-w3 con"},"Contact Us"),m.a.createElement("p",{className:"sub-text"},"Choose Your Style"),m.a.createElement("form",{action:"#",method:"post",className:"contact_form slideanim"},m.a.createElement("div",{className:"message"},m.a.createElement("div",{className:"col-md-6 col-sm-6 grid_6 c1"},m.a.createElement("input",{type:"text",className:"margin-right",name:"Name",placeholder:"Name",required:""}),m.a.createElement("input",{type:"email",name:"Email",placeholder:"Email",required:""}),m.a.createElement("input",{type:"text",className:"margin-right",name:"Phone Number",placeholder:"Phone Number",required:""})),m.a.createElement("div",{className:"col-md-6 col-sm-6 grid_6 c1"},m.a.createElement("textarea",{name:"Message",placeholder:"Message",required:""})),m.a.createElement("div",{className:"clearfix"})),m.a.createElement("input",{type:"submit",value:"SEND MESSAGE"})),m.a.createElement("section",{className:"social"},m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("a",{className:"icon fb",href:"//mysweet95.com"},m.a.createElement("i",{className:"fa fa-facebook"}))),m.a.createElement("li",null,m.a.createElement("a",{className:"icon tw",href:"//mysweet95.com"},m.a.createElement("i",{className:"fa fa-twitter"}))),m.a.createElement("li",null,m.a.createElement("a",{className:"icon pin",href:"//mysweet95.com"},m.a.createElement("i",{className:"fa fa-pinterest"}))),m.a.createElement("li",null,m.a.createElement("a",{className:"icon db",href:"//mysweet95.com"},m.a.createElement("i",{className:"fa fa-dribbble"}))),m.a.createElement("li",null,m.a.createElement("a",{className:"icon gp",href:"//mysweet95.com"},m.a.createElement("i",{className:"fa fa-google-plus"})))))))}}]),t}(r.Component)}).call(this,t(10))},27:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var l=t(1),i=t(2),n=t(4),c=t(3),s=t(5),r=t(0),m=t.n(r),o=function(e){function a(){return Object(l.a)(this,a),Object(n.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"copy-right"},m.a.createElement("p",null,"Copyright \xa9 2017.Company name w3layouts All rights reserved. - More Templates",m.a.createElement("a",{href:"http://mysweet95.com/",target:"_blank",title:"dance",rel:"noopener noreferrer"},"dance"),"- Collect from",m.a.createElement("a",{href:"http://mysweet95.com/",title:"whirl",target:"_blank",rel:"noopener noreferrer"},"whirl")))}}]),a}(r.Component)},28:function(e,a,t){e.exports=t(58)},33:function(e,a,t){},54:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var l=t(0),i=t.n(l),n=t(7),c=t.n(n),s=(t(33),t(19));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(56);c.a.render(i.a.createElement(s.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.bfbdb124.chunk.js.map