(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{295:function(e,t,s){"use strict";s.d(t,"a",(function(){return j}));var c=s(3),o=s(11),i=s(14),n=s(10),r=s(1),a=function(e){return{isAuth:e.auth.isAuth}},j=function(e){return Object(n.d)(Object(i.b)(a))((function(t){return t.isAuth?Object(r.jsx)(e,Object(c.a)({},t)):Object(r.jsx)(o.a,{to:"/login"})}))}},296:function(e,t,s){e.exports={descBlock:"ProfileInfo_descBlock__22C1F",mainInfo:"ProfileInfo_mainInfo__1DeQY",mainPhoto:"ProfileInfo_mainPhoto__3c-ia",formSummarySubmit:"ProfileInfo_formSummarySubmit__2OMel"}},297:function(e,t,s){e.exports={postsBlock:"MyPosts_postsBlock__3emMW",posts:"MyPosts_posts__3Uj3A"}},298:function(e,t,s){e.exports={item:"Post_item__j9HfH"}},303:function(e,t,s){"use strict";s.r(t);var c=s(3),o=s(36),i=s(37),n=s(40),r=s(39),a=s(0),j=s.n(a),l=s(96),u=s(296),b=s.n(u),d=s(67),p=s(1),h=function(e){var t=Object(a.useState)(!1),s=Object(l.a)(t,2),c=s[0],o=s[1],i=Object(a.useState)(e.status),n=Object(l.a)(i,2),r=n[0],j=n[1];Object(a.useEffect)((function(){j(e.status)}),[e.status]);return Object(p.jsxs)("div",{children:[!c&&Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Status: "}),Object(p.jsx)("span",{onClick:function(){o(!0)},children:e.status||"----"})]}),c&&Object(p.jsx)("div",{children:Object(p.jsx)("input",{onChange:function(e){j(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(r)},value:r})})]})},O=s(106),f=s(128),m=s(129),x=s(55),v=Object(m.a)({form:"edit-profile"})((function(e){return Object(p.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(p.jsx)("button",{children:"save"}),e.error&&Object(p.jsx)("span",{className:b.a.formSummarySubmit,children:e.error}),Object(p.jsxs)("div",{className:b.a.descBlock,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Full name"}),":",Object(p.jsx)(f.a,{placeholder:"Full name",name:"fullName",component:x.a})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Looking for a job"}),":",Object(p.jsx)(f.a,{name:"lookingForAJob",component:x.a,type:"checkbox"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"My skills"}),":",Object(p.jsx)(f.a,{placeholder:"My skills",name:"lookingForAJobDescription",component:x.b})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"About me"}),":",Object(p.jsx)(f.a,{placeholder:"About me",name:"aboutMe",component:x.a})]})]}),Object(p.jsxs)("div",{className:b.a.descBlock,children:[Object(p.jsx)("b",{children:"Contacts"}),":",Object.keys(e.profile.contacts).map((function(e){return Object(p.jsx)("div",{children:Object(p.jsxs)("b",{children:[e,":",Object(p.jsx)(f.a,{placeholder:e,name:"contacts."+e,component:x.a})]})},e)}))]})]})})),k=function(e){var t=Object(a.useState)(!1),s=Object(l.a)(t,2),c=s[0],o=s[1];if(!e.profile)return Object(p.jsx)(d.a,{});return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{}),Object(p.jsxs)("div",{className:b.a.descBlock,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:e.profile.photos.large||O.a,className:b.a.mainPhoto}),e.isOwner&&Object(p.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}})]}),Object(p.jsx)("div",{className:b.a.descBlock,children:Object(p.jsx)(h,{status:e.status,updateStatus:e.updateStatus})}),c?Object(p.jsx)(v,{profile:e.profile,onSubmit:function(t){e.saveProfile(t).then((function(){o(!1)}))},initialValues:e.profile}):Object(p.jsx)(P,{profile:e.profile,goToEditMode:function(){o(!0)},isOwner:e.isOwner})]})]})},P=function(e){return Object(p.jsxs)("div",{children:[e.isOwner&&Object(p.jsx)("button",{onClick:e.goToEditMode,children:"edit"}),Object(p.jsxs)("div",{className:b.a.descBlock,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Full name"}),": ",e.profile.fullName]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Looking for a job"}),": ",e.profile.lookingForAJob?"yes":"no"]}),e.profile.lookingForAJob&&Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"My skills"}),": ",e.profile.lookingForAJobDescription]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"About me"}),": ",e.profile.aboutMe]})]}),Object(p.jsxs)("div",{className:b.a.descBlock,children:[Object(p.jsx)("b",{children:"Contacts"}),":"," ",Object.keys(e.profile.contacts).map((function(t){return Object(p.jsx)(g,{contactTitle:t,contactValue:e.profile.contacts[t]},t)}))]})]})},g=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:e.contactTitle}),": ",e.contactValue]})},S=s(95),y=s(33),_=s(297),w=s.n(_),A=s(298),N=s.n(A),M=function(e){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:N.a.item,children:[Object(p.jsx)("img",{src:"https://w-dog.ru/wallpapers/6/1/464217912085663/kot-ochki-portret.jpg"}),Object(p.jsx)("div",{children:e.message}),Object(p.jsx)("div",{children:Object(p.jsxs)("span",{children:["like ",e.likeCount]})})]})})},B=s(65),I=Object(B.a)(10),C=Object(m.a)({form:"addNewPostForm"})((function(e){return Object(p.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(p.jsx)("div",{children:Object(p.jsx)(f.a,{component:x.b,name:"newPostText",placeholder:"say hello",validate:[B.b,I]})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Add post"})})]})})),F=function(e){var t=Object(y.a)(e.post).reverse().map((function(e){return Object(p.jsx)(M,{message:e.message,likeCount:e.likeCount,id:e.id},e.id)}));return Object(p.jsxs)("div",{className:w.a.postsBlock,children:[Object(p.jsx)("h1",{children:"My post"}),Object(p.jsx)(C,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(p.jsx)("div",{className:w.a.posts,children:Object(p.jsx)("div",{children:t})})]})},T=s(14),D=Object(T.b)((function(e){return{post:e.profilePage.postData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(S.a)(t))}}}))(F),J=function(e){return Object(p.jsxs)("main",{children:[Object(p.jsx)(k,{profile:e.profile,isOwner:e.isOwner,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),Object(p.jsx)(D,{})]})},U=s(11),E=s(295),V=s(10),H=function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authUserId),this.props.profileData(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(p.jsx)(J,Object(c.a)(Object(c.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),s}(j.a.Component);t.default=Object(V.d)(Object(T.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authUserId:e.auth.id,isAuth:e.auth.isAuth}}),{profileData:S.d,getStatus:S.c,updateStatus:S.g,savePhoto:S.e,saveProfile:S.f}),U.g,E.a)(H)}}]);
//# sourceMappingURL=4.c7484b75.chunk.js.map