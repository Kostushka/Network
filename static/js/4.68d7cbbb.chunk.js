(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{294:function(t,e,s){"use strict";s.d(e,"a",(function(){return j}));var c=s(5),i=s(11),n=s(13),a=s(9),o=s(1),r=function(t){return{isAuth:t.auth.isAuth}},j=function(t){return Object(a.d)(Object(n.b)(r))((function(e){return e.isAuth?Object(o.jsx)(t,Object(c.a)({},e)):Object(o.jsx)(i.a,{to:"/login"})}))}},295:function(t,e,s){t.exports={descBlock:"ProfileInfo_descBlock__22C1F",mainInfo:"ProfileInfo_mainInfo__1DeQY"}},296:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__3emMW",posts:"MyPosts_posts__3Uj3A"}},297:function(t,e,s){t.exports={item:"Post_item__j9HfH"}},302:function(t,e,s){"use strict";s.r(e);var c=s(5),i=s(35),n=s(36),a=s(39),o=s(38),r=s(0),j=s.n(r),u=s(295),l=s.n(u),d=s(67),p=s(128),b=s(1),O=function(t){var e=Object(r.useState)(!1),s=Object(p.a)(e,2),c=s[0],i=s[1],n=Object(r.useState)(t.status),a=Object(p.a)(n,2),o=a[0],j=a[1];Object(r.useEffect)((function(){j(t.status)}),[t.status]);return Object(b.jsxs)("div",{children:[!c&&Object(b.jsx)("div",{children:Object(b.jsx)("span",{onClick:function(){i(!0)},children:t.status||"----"})}),c&&Object(b.jsx)("div",{children:Object(b.jsx)("input",{onChange:function(t){j(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.updateStatus(o)},value:o})})]})},f=function(t){return t.profile?Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{}),Object(b.jsxs)("div",{className:l.a.descBlock,children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:t.profile.photos.large})}),Object(b.jsx)(O,{status:t.status,updateStatus:t.updateStatus}),Object(b.jsxs)("div",{className:l.a.descBlock,children:[Object(b.jsx)("div",{children:t.profile.fullName}),Object(b.jsx)("div",{children:t.profile.aboutMe})]}),Object(b.jsxs)("div",{className:l.a.descBlock,children:[Object(b.jsx)("span",{className:l.a.mainInfo,children:"My contacts:"}),Object(b.jsx)("div",{children:t.profile.contacts.facebook}),Object(b.jsx)("div",{children:t.profile.contacts.vk}),Object(b.jsx)("div",{children:t.profile.contacts.twitter}),Object(b.jsx)("div",{children:t.profile.contacts.instagram}),Object(b.jsx)("div",{children:t.profile.contacts.github})]}),Object(b.jsxs)("div",{className:l.a.descBlock,children:[Object(b.jsx)("span",{className:l.a.mainInfo,children:"lookingForAJob:"}),Object(b.jsx)("div",{children:t.profile.lookingForAJobDescription})]})]})]}):Object(b.jsx)(d.a,{})},h=s(95),x=s(33),m=s(296),v=s.n(m),k=s(297),g=s.n(k),P=function(t){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:g.a.item,children:[Object(b.jsx)("img",{src:"https://w-dog.ru/wallpapers/6/1/464217912085663/kot-ochki-portret.jpg"}),Object(b.jsx)("div",{children:t.message}),Object(b.jsx)("div",{children:Object(b.jsxs)("span",{children:["like ",t.likeCount]})})]})})},S=s(126),_=s(127),N=s(64),w=s(65),y=Object(N.a)(10),B=Object(_.a)({form:"addNewPostForm"})((function(t){return Object(b.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(S.a,{component:w.b,name:"newPostText",placeholder:"say hello",validate:[N.b,y]})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Add post"})})]})})),A=function(t){var e=Object(x.a)(t.post).reverse().map((function(t){return Object(b.jsx)(P,{message:t.message,likeCount:t.likeCount,id:t.id},t.id)}));return Object(b.jsxs)("div",{className:v.a.postsBlock,children:[Object(b.jsx)("h1",{children:"My post"}),Object(b.jsx)(B,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(b.jsx)("div",{className:v.a.posts,children:Object(b.jsx)("div",{children:e})})]})},I=s(13),C=Object(I.b)((function(t){return{post:t.profilePage.postData,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(h.a)(e))}}}))(A),M=function(t){return Object(b.jsxs)("main",{children:[Object(b.jsx)(f,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(b.jsx)(C,{})]})},D=s(11),F=s(294),T=s(9),J=function(t){Object(a.a)(s,t);var e=Object(o.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authUserId),this.props.profileData(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(b.jsx)(M,Object(c.a)(Object(c.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(j.a.Component);e.default=Object(T.d)(Object(I.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authUserId:t.auth.id,isAuth:t.auth.isAuth}}),{profileData:h.d,getStatus:h.c,updateStatus:h.e}),D.g,F.a)(J)}}]);
//# sourceMappingURL=4.68d7cbbb.chunk.js.map