(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3/IN":function(t,n,i){"use strict";i.r(n),i.d(n,"MyWorksModule",function(){return h});var e=i("ofXK"),c=i("tyNb"),a=i("fXoL"),r=i("tk/3");let s=(()=>{class t{constructor(t){this.httpClient=t}getWorks(){return this.httpClient.get("assets/works.json")}}return t.\u0275fac=function(n){return new(n||t)(a.Vb(r.a))},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var o=i("Wp6s"),d=i("bTqV");function l(t,n){if(1&t&&(a.Rb(0,"mat-card",2),a.Rb(1,"mat-card-header"),a.Nb(2,"img",3),a.Rb(3,"mat-card-title"),a.nc(4),a.Qb(),a.Qb(),a.Nb(5,"img",4),a.Rb(6,"mat-card-content"),a.Rb(7,"p"),a.nc(8," Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor reiciendis quam velit eaque laudantium optio. "),a.Qb(),a.Qb(),a.Rb(9,"mat-card-actions"),a.Rb(10,"a",5),a.nc(11,"Read More..."),a.Qb(),a.Qb(),a.Qb()),2&t){const t=n.$implicit,i=a.ac();a.Bb(2),a.dc("src",t.avatar,a.jc),a.Bb(2),a.oc(t.title),a.Bb(1),a.dc("src",t.avatar,a.jc)("alt",t.title),a.Bb(5),a.dc("routerLink",i.detailsLink+t.id)}}function m(t,n){if(1&t&&(a.Rb(0,"div",3),a.Rb(1,"div",4),a.Nb(2,"img",5),a.Qb(),a.Rb(3,"div"),a.Rb(4,"p"),a.nc(5," Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor reiciendis quam velit eaque laudantium optio. "),a.Qb(),a.Qb(),a.Qb()),2&t){const t=a.ac().$implicit;a.Bb(2),a.dc("src",t.avatar,a.jc)("alt",t.title)}}function p(t,n){if(1&t&&(a.Rb(0,"div",1),a.mc(1,m,6,2,"div",2),a.Qb()),2&t){const t=n.$implicit,i=a.ac();a.Bb(1),a.dc("ngIf",t.id==i.id)}}const b=[{path:"",component:(()=>{class t{constructor(t){this.worksService=t,this.detailsLink="details/"}ngOnInit(){this.worksService.getWorks().subscribe(t=>{this.works=t})}}return t.\u0275fac=function(n){return new(n||t)(a.Mb(s))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-my-works"]],decls:2,vars:1,consts:[[1,"skills"],["class","example-card",4,"ngFor","ngForOf"],[1,"example-card"],["mat-card-avatar","",3,"src"],["mat-card-image","",3,"src","alt"],["mat-button","",3,"routerLink"]],template:function(t,n){1&t&&(a.Rb(0,"div",0),a.mc(1,l,12,5,"mat-card",1),a.Qb()),2&t&&(a.Bb(1),a.dc("ngForOf",n.works))},directives:[e.h,o.a,o.e,o.c,o.h,o.f,o.d,o.b,d.a,c.b],styles:[".skills[_ngcontent-%COMP%]{width:80%;display:grid;grid-template-columns:45% 45%;grid-column-gap:10%;grid-row-gap:40px;margin:60px auto}.skills[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{padding:20px}.skills[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px;height:60px;margin-bottom:10px}.skills[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify}@media screen and (max-width:900px){.skills[_ngcontent-%COMP%]{width:70%;grid-template-columns:100%}}@media screen and (max-width:450px){.skills[_ngcontent-%COMP%]{width:300px}.skills[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{padding:10px;font-size:16px}.skills[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:45px;height:45px}}"]}),t})()},{path:"details/:id",component:(()=>{class t{constructor(t,n){this.activatedRoute=t,this.worksService=n,this.activatedRoute.params.subscribe(t=>{this.id=t.id})}ngOnInit(){this.worksService.getWorks().subscribe(t=>{this.works=t})}}return t.\u0275fac=function(n){return new(n||t)(a.Mb(c.a),a.Mb(s))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-details"]],decls:1,vars:1,consts:[["class","work-details",4,"ngFor","ngForOf"],[1,"work-details"],["class","example-card",4,"ngIf"],[1,"example-card"],[1,"work-logo"],[3,"src","alt"]],template:function(t,n){1&t&&a.mc(0,p,2,1,"div",0),2&t&&a.dc("ngForOf",n.works)},directives:[e.h,e.i],styles:[".work-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:40%;margin:0 auto}"]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({imports:[[c.c.forChild(b)],c.c]}),t})();var u=i("1+r1");let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({imports:[[e.b,g,u.a]]}),t})()}}]);