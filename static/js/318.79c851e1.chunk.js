"use strict";(self.webpackChunkwanted_community_popular_feeds=self.webpackChunkwanted_community_popular_feeds||[]).push([[318],{318:function(e,n,l){l.r(n),l.d(n,{default:function(){return d}});var i=l(791),o=l(933),t=l(326),a=l(575),r=l(184);function d(){var e=(0,o.useQuery)(["fetchData","monthly"],(function(){return fetch("/feeds/monthly.json").then((function(e){return e.json()}))}),{staleTime:1/0}),n=e.isLoading,l=e.data;return(0,i.useEffect)((function(){window.scrollTo(0,0)}),[]),n?(0,r.jsx)(a.Z,{}):(0,r.jsx)("div",{className:"item-area",children:l.map((function(e){return(0,r.jsx)(t.Z,{post:e},e.id)}))})}},326:function(e,n,l){l.d(n,{Z:function(){return o}});l(791);var i=l(184);function o(e){var n,l,o,t,a,r,d,s,c,v,u,m,h,p,w,x,j=e.post;return(0,i.jsx)("div",{className:"ct-item ".concat(null!==j&&void 0!==j&&null!==(n=j.images)&&void 0!==n&&null!==(l=n[0])&&void 0!==l&&l.url?"base":"text"),children:(0,i.jsxs)("div",{className:"item-inner",children:[(0,i.jsxs)("div",{className:"ct-md-option",children:[(0,i.jsx)("div",{className:"md-close",children:(0,i.jsx)("a",{children:(0,i.jsx)("svg",{width:"27",height:"26",viewBox:"0 0 27 26",fill:"none",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.77798 5.36395L5.36377 6.77817L11.7277 13.1421L5.36377 19.5061L6.77798 20.9203L13.142 14.5564L19.5059 20.9203L20.9201 19.5061L14.5562 13.1421L20.9201 6.77819L19.5059 5.36398L13.142 11.7279L6.77798 5.36395Z",fill:"#727274"})})})}),(0,i.jsx)("div",{className:"md-overlay"})]}),(0,i.jsxs)("div",{className:"ct-item-header",children:[!(null!==j&&void 0!==j&&null!==(o=j.images)&&void 0!==o&&null!==(t=o[0])&&void 0!==t&&t.url)&&(0,i.jsx)("div",{className:"ct-cate-wrap",children:(0,i.jsx)("a",{href:"https://www.wanted.co.kr/community/".concat(null===j||void 0===j||null===(a=j.board)||void 0===a?void 0:a.id),target:"_blank",rel:"noopener noreferrer",className:"ct-cate",children:(0,i.jsx)("img",{src:"https://static.wanted.co.kr/favicon/144x144.png",alt:null===j||void 0===j||null===(r=j.board)||void 0===r?void 0:r.title})})}),(null===j||void 0===j||null===(d=j.images)||void 0===d||null===(s=d[0])||void 0===s?void 0:s.url)&&(0,i.jsx)("a",{href:"https://www.wanted.co.kr/community/post/".concat(null===j||void 0===j?void 0:j.id),target:"_blank",rel:"noopener noreferrer",className:"ct-image",children:(0,i.jsx)("div",{className:"ct-img-inner",children:(0,i.jsx)("img",{lazy:"loaded",src:(null===j||void 0===j||null===(c=j.images)||void 0===c||null===(v=c[0])||void 0===v?void 0:v.url)||"https://static.wanted.co.kr/images/share/share_meta_image.jpeg",alt:"\ucf58\ud150\uce20 \uc774\ubbf8\uc9c0",className:"img-center"})})}),(0,i.jsxs)("div",{className:"ct-desc",children:[(0,i.jsx)("div",{className:"ct-title",children:(0,i.jsx)("a",{href:"https://www.wanted.co.kr/community/post/".concat(null===j||void 0===j?void 0:j.id),target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("div",{children:null===j||void 0===j?void 0:j.title})})}),(0,i.jsx)("div",{className:"ct-text",children:(0,i.jsx)("a",{href:"https://www.wanted.co.kr/community/post/".concat(null===j||void 0===j?void 0:j.id),target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("div",{children:null===j||void 0===j||null===(u=j.content)||void 0===u?void 0:u.slice(0,200)})})}),(0,i.jsx)("div",{className:"ct-tag",children:null===j||void 0===j?void 0:j.tag_types.map((function(e){var n=e.id,l=e.title;return(0,i.jsxs)("a",{href:"https://www.wanted.co.kr/community/".concat(n),target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)("span",{children:"#"}),l]})}))})]})]}),(0,i.jsxs)("div",{className:"ct-item-footer",children:[(0,i.jsxs)("div",{className:"ct-info",children:[(0,i.jsx)("a",{href:"https://www.wanted.co.kr/community/post/".concat(null===j||void 0===j?void 0:j.id),className:"ct-channel",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("img",{alt:"".concat(null===j||void 0===j||null===(m=j.user)||void 0===m?void 0:m.name,"\uc758 \uc544\ubc14\ud0c0"),"data-src":null===j||void 0===j||null===(h=j.user)||void 0===h?void 0:h.avatar,src:null===j||void 0===j||null===(p=j.user)||void 0===p?void 0:p.avatar,lazy:"loaded",width:22,height:22})}),(0,i.jsx)("a",{href:"https://www.wanted.co.kr/community/post/".concat(null===j||void 0===j?void 0:j.id),className:"ct-author",target:"_blank",rel:"noopener noreferrer",children:null===j||void 0===j||null===(w=j.user)||void 0===w?void 0:w.name})]}),(0,i.jsxs)("div",{className:"ct-option",style:{color:(null===j||void 0===j?void 0:j.rate)<0?"var(--down-color)":(null===j||void 0===j?void 0:j.rate)>0?"var(--up-color)":null!==j&&void 0!==j&&j.isNew?"var(--new-color)":"grey"},children:[(null===j||void 0===j?void 0:j.rate)<0&&(0,i.jsx)("span",{className:"icon-Caret-down"}),(null===j||void 0===j?void 0:j.rate)>0&&(0,i.jsx)("span",{className:"icon-Caret-up"}),(null===j||void 0===j?void 0:j.isNew)&&(0,i.jsx)("span",{children:"new"}),!(null!==j&&void 0!==j&&j.isNew)&&(0,i.jsx)("span",{children:null!==j&&void 0!==j&&j.rate?"".concat(null===j||void 0===j?void 0:j.rate.toFixed(2),"%"):""})," ",(0,i.jsxs)("div",{className:"count",children:["\uc870\ud68c ",null===(x=j.count)||void 0===x?void 0:x.toLocaleString("en-US")]})]})]})]})})}}}]);
//# sourceMappingURL=318.79c851e1.chunk.js.map