(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3/IN":function(t,e,n){"use strict";n.r(e),n.d(e,"MyWorksModule",function(){return k});var i=n("ofXK"),c=n("tyNb"),a=n("fXoL"),r=n("tk/3");let s=(()=>{class t{constructor(t){this.httpClient=t}getWorks(){return this.httpClient.get("assets/works.json")}}return t.\u0275fac=function(e){return new(e||t)(a.Vb(r.a))},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var o=n("Wp6s"),d=n("bTqV");function l(t,e){if(1&t&&(a.Rb(0,"mat-card",2),a.Rb(1,"mat-card-header"),a.Nb(2,"img",3),a.Rb(3,"mat-card-title"),a.qc(4),a.Qb(),a.Qb(),a.Nb(5,"img",4),a.Rb(6,"mat-card-content"),a.Rb(7,"p"),a.qc(8," Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor reiciendis quam velit eaque laudantium optio. "),a.Qb(),a.Qb(),a.Rb(9,"mat-card-actions"),a.Rb(10,"a",5),a.qc(11,"Read More..."),a.Qb(),a.Rb(12,"a",6),a.qc(13,"Visit..."),a.Qb(),a.Qb(),a.Qb()),2&t){const t=e.$implicit,n=a.bc();a.Bb(2),a.ec("src",t.avatar,a.kc),a.Bb(2),a.rc(t.title),a.Bb(1),a.ec("src",t.images[0],a.kc)("alt",t.title),a.Bb(5),a.ec("routerLink",n.detailsLink+t.id),a.Bb(2),a.ec("href",t.link,a.kc)}}function p(t,e){if(1&t&&(a.Rb(0,"div",3),a.Rb(1,"div",4),a.Nb(2,"img",5),a.Qb(),a.Rb(3,"div"),a.Rb(4,"p"),a.qc(5," Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor reiciendis quam velit eaque laudantium optio. "),a.Qb(),a.Qb(),a.Qb()),2&t){const t=a.bc().$implicit;a.Bb(2),a.ec("src",t.images,a.kc)("alt",t.title)}}function b(t,e){if(1&t&&(a.Rb(0,"div",1),a.pc(1,p,6,2,"div",2),a.Qb()),2&t){const t=e.$implicit,n=a.bc();a.Bb(1),a.ec("ngIf",t.id==n.id)}}const m=[{path:"",component:(()=>{class t{constructor(t){this.worksService=t,this.detailsLink="details/"}ngOnInit(){this.worksService.getWorks().subscribe(t=>{this.works=t})}}return t.\u0275fac=function(e){return new(e||t)(a.Mb(s))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-my-works"]],decls:2,vars:1,consts:[[1,"skills"],["class","example-card",4,"ngFor","ngForOf"],[1,"example-card"],["mat-card-avatar","",3,"src"],["mat-card-image","",3,"src","alt"],["mat-button","",3,"routerLink"],["mat-button","","target","_blank",3,"href"]],template:function(t,e){1&t&&(a.Rb(0,"div",0),a.pc(1,l,14,6,"mat-card",1),a.Qb()),2&t&&(a.Bb(1),a.ec("ngForOf",e.works))},directives:[i.i,o.a,o.e,o.c,o.h,o.f,o.d,o.b,d.a,c.b],styles:[".skills[_ngcontent-%COMP%]{width:85%;display:grid;grid-template-columns:48% 48%;grid-column-gap:4%;grid-row-gap:40px;margin:60px auto}.skills[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{padding:16px 20px}.skills[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px}.skills[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify}@media screen and (max-width:900px){.skills[_ngcontent-%COMP%]{width:75%;grid-template-columns:100%}}@media screen and (max-width:450px){.skills[_ngcontent-%COMP%]{width:300px}.skills[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:16px 0}.skills[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:45px;height:45px}}"]}),t})()},{path:"details/:id",component:(()=>{class t{constructor(t,e){this.activatedRoute=t,this.worksService=e,this.activatedRoute.params.subscribe(t=>{this.id=t.id})}ngOnInit(){this.worksService.getWorks().subscribe(t=>{this.works=t})}}return t.\u0275fac=function(e){return new(e||t)(a.Mb(c.a),a.Mb(s))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-details"]],decls:1,vars:1,consts:[["class","work-details",4,"ngFor","ngForOf"],[1,"work-details"],["class","example-card",4,"ngIf"],[1,"example-card"],[1,"work-wallpaper"],[3,"src","alt"]],template:function(t,e){1&t&&a.pc(0,b,2,1,"div",0),2&t&&a.ec("ngForOf",e.works)},directives:[i.i,i.j],styles:[".work-wallpaper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:80%;margin:0 auto}"]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({imports:[[c.c.forChild(m)],c.c]}),t})();var u=n("1+r1");let k=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({imports:[[i.b,g,u.a]]}),t})()}}]);