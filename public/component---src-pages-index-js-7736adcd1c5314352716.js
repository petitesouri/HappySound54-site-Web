"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{7787:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f},default:function(){return h}});var n=a(7294),s=a(8496);var r=e=>{let{className:t,dataClassname:a,titre:s,texte:r,children:l}=e;return n.createElement("section",{className:t,"data-classname":a},n.createElement("article",{className:t+"-article"},s&&n.createElement("h2",null,s),r&&n.createElement("p",null,r),l))};var l=function(){return n.createElement("article",{className:"headband"},n.createElement("p",{className:"headband-text"},"Retrouvez moi prochainement au Zénith de Nancy les 25 et 28 juillet 2024"),n.createElement("p",{className:"headband-text"},"Retrouvez moi prochainement au Galaxie d'Amnéville les 05 et 07 août 2024"))},i=JSON.parse('{"H":[{"id":"avis1","texte":"Superbe soirée feux d\'artifices à Colombey-les-Belles avec ce super DJ qui a su mettre l ambiance, la musique était top, super Playlist,... Je conseille pour vos futures soirées.","auteur":"Virginie SOUDIER"},{"id":"avis2","texte":"Fred est venu pour animer notre mariage ce weekend mais franchement aucun regret je recommande à 100 % ambiance au top il gère rien à dire","auteur":"Patrick DUVAL"},{"id":"avis3","texte":"Fred a animé mon mariage ce week-end. Un pur bonheur. Super ambiance ! Fred a été a l\'écoute. Tout le monde a adoré. Je recommande vivement. Prix tres abordable.","auteur":"Noémie BEZAULT"},{"id":"avis4","texte":"Superbe soirée feux d\'artifices à Colombey-les-Belles avec ce super DJ qui a su mettre l ambiance, la musique était top, super Playlist,... Je conseille pour vos futures soirées.","auteur":"Virginie SOUDIER"},{"id":"avis5","texte":"Fred est venu pour animer notre mariage ce weekend mais franchement aucun regret je recommande à 100 % ambiance au top il gère rien à dire","auteur":"Noémie BEZAULT"},{"id":"avis6","texte":"Superbe soirée feux d\'artifices à Colombey-les-Belles avec ce super DJ qui a su mettre l ambiance, la musique était top, super Playlist,... Je conseille pour vos futures soirées.","auteur":"Virginie SOUDIER"}]}');var c=()=>{const{0:e,1:t}=(0,n.useState)([]),{0:a,1:s}=(0,n.useState)(0),{0:r,1:l}=(0,n.useState)(0);(0,n.useEffect)((()=>{t(i.H)}),[]);const c=()=>{const t=(a+1)%e.length;s((a+1)%e.length),l(r-350),t===e.length-1&&(s(0),l(0))},o=()=>{const t=(a-1+e.length)%e.length;s((a-1+e.length)%e.length),l(r+350),0===t&&(s(e.length-1),l(e.length-1))},u=e=>{"ArrowLeft"===e.key?o():"ArrowRight"===e.key&&c()};return n.createElement("div",{className:"slider-container"},n.createElement("div",{className:"slider",style:{transition:"transform 0.5s ease",transform:"translateX("+r+"px)"}},e.map(((e,t)=>n.createElement("figure",{key:t,className:t===a?"slider-items active":"slider-items"},n.createElement("p",{className:"slider-items__text"},e.texte),n.createElement("p",{className:"slider-items__author"},"- ",e.auteur))))),n.createElement("button",{className:"prev",name:"button previous",onClick:o,onKeyDown:u,tabIndex:0},n.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEeSURBVEiJrZa7TsQwEADHlq6k46QDAtQUcL9AQQVX868gXhI/AFfQUaCYFBEl0KB4aVLkjE38iCU3q/WMrNWuDQVLao47w2tnWEvDYQkrBG87g/T7RQTl5ulcuFXcAvNBeO7jJQuk4chqrh34t4VLpejc/D9XGoULdwgLB76aVdz7zkQLcuDRglw4RNQgAP+KgcPIDYJwYTXb52EM/q9gCnhQMBXcKxBB23fegGoQ/tSac7XLYwoc4htNEGwq3CtQCquFC+BjEN6ywtVPzWmqIFzkmpN+3mwPwtMUeUrJaCeXSuJGRYEkfthlStLGdYYkSZAjSRYAiGFp4caRtHqPHaU2GzLrTVYVzxrO2GzG1oUXLzEs+2/LkzQc+HJ+AbG3w6+3cnieAAAAAElFTkSuQmCC",alt:"button previous"})),n.createElement("button",{className:"next",name:"button next",onClick:c,onKeyDown:u,tabIndex:0},n.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEJSURBVEiJrdOhTsRAEMbx/ywWFGAgcE9AELg7SXAIXpaAIOEJEBeCI5hum1wqEOidwZxo2u21291Jaman32/SdCFS1nAdPNtQ8WOe29hMVoWKr+Cx/dPmIK7fMMMhnHdaZwpvS5EBIII64Qn46yHv1nCXCsjYgdWs1XgFTjrtX+d4kAs+soFSyEGgBDIJ5CKzgBxkNrAUSQKWIMnAHtmo8dJDvLtkJYJ2ZwcXbVYJLrKcxkaTAavZqPIMHHfarTMe+9sT2WI6fPhpWmfcyxWfsXdSftPk8NnA0vBZQE74JJAbfhAoET4KlAqPAmYcac0OOM0Nh/hFU6AtET5a1rAKnm3wfFvFTU7WP+JTsrlNV8HRAAAAAElFTkSuQmCC",alt:"button next"})),n.createElement("div",{className:"dots"},e.map(((e,t)=>n.createElement("button",{key:t,className:t===a?"dot active":"dot",name:a,onClick:()=>(e=>{s(e),l(-350*e)})(t),onKeyDown:u,tabIndex:0},t)))))},o=a(9357),u=a.p+"static/TestMix1-f30f12bff79259a3b13765f801b80685.mp3",m=a.p+"static/TestMix2-36815246540f802e15d65d109b83c54f.mp3",d=a.p+"static/TestMix3-9d2e3d9397a69b774e5b47db9d3693c1.mp3",A=a.p+"static/ecouteurs-f84d8adc12e964e01227588dfc21ce6c.png",p=a.p+"static/poste-radio-d3cbd114fa7090ea1c51450c18180a3b.png";var E=()=>{const e=[{src:u,alt:"AMBIANCE FESTIVE"},{src:m,alt:"AMBIANCE ELECTRO"},{src:d,alt:"AMBIANCE LOUNGE"}],{0:t,1:a}=(0,n.useState)(null);return n.createElement("div",{className:"ambiance-musics"},e.map(((e,s)=>n.createElement("button",{key:s,className:1===s?"ambiance-musics__button-radio":"ambiance-musics__button",onClick:()=>(e=>{if(t===e)document.getElementById("audio-"+e).pause(),a(null);else{if(null!==t){const e=document.getElementById("audio-"+t);e.pause(),e.currentTime=0}document.getElementById("audio-"+e).play(),a(e)}})(s)},n.createElement("img",{src:1===s?p:A,className:1===s?"radio":"headphones",alt:e.alt}),n.createElement("audio",{id:"audio-"+s,src:e.src,style:{display:"none"}},n.createElement("track",{kind:"captions",src:"musique",srcLang:"fr",label:"French captions"})),n.createElement("p",null,e.alt)))))},b=a(6980);var v=e=>{let{post:t}=e;return n.createElement("div",{className:"facebook-post"},n.createElement("p",null,"Nom de l'utilisateur: ",t.from.name),n.createElement("p",null,"Date de publication: ",t.created_time),n.createElement("p",null,"Message du post: ",t.message),t.child_attachments&&n.createElement("div",{className:"attachments"},t.child_attachments.map(((e,t)=>n.createElement("img",{key:t,src:e.media.image.src,alt:"Attachment"})))),t.reactions&&n.createElement("p",null,"Réactions: ",t.reactions.summary.total_count))};const g={}.FB_APP_ID,f=()=>n.createElement(o.Z,{title:"Home"});var h=e=>{let{children:t}=e;const{0:a,1:i}=(0,n.useState)(!1),{0:o,1:u}=(0,n.useState)(""),{0:m,1:d}=(0,n.useState)([]);(0,n.useEffect)((()=>{"undefined"!=typeof window&&void 0!==window.FB&&window.FB.api("/"+g+"/feed",(function(e){e&&!e.error&&d(e.data)}))}),[]),(0,n.useEffect)((()=>{const e=()=>{const e=document.querySelectorAll("section"),t=document.querySelector("body"),a=window.innerHeight;e.forEach((e=>{const n=e.getBoundingClientRect(),s=n.top+n.height/2,r=e.getAttribute("data-classname");s<=a/2&&(t.className=r||"")}))};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]);const A=e=>{u(e),i(!0)},p=e=>{const t=e.target.textContent.toLowerCase();t.includes("matériel")?A("case1"):t.includes("prestataire")&&A("case2")};return n.createElement(n.Fragment,null,n.createElement(s.Z,null,n.createElement(r,{className:"Intro",dataClassname:"background1",titre:"Avec Deejay Fredowski passez un pur moment festif"},n.createElement("div",{className:"Intro-article__text"},n.createElement("p",null,"Bienvenue sur le site de Happy Sound 54, votre DJ professionnel pour des soirées inoubliables!"),n.createElement("p",null,"Avec une passion débordante pour la musique et une expertise dans l'animation d'événements, nous sommes là pour donner  vie à vos fêtes, mariages, anniversaires et tout autre événement spécial.",n.createElement("br",null),"Notre mission est de créer une ambiance enivrante et de faire vibrer vos invités sur le dancefloor. Avec une vaste sélection de musiques adaptées à tous les goûts et une expérience riche dans le domaine, nous garantissons une soirée mémorable, où chaque moment sera une célébration de la musique et de la joie.",n.createElement("br",null),"Notre service est personnalisé, en accord avec vos préférences musicales et le style de votre événement. Notre équipement de pointe et notre expertise technique garantissent un son de haute qualité et une performance sans faille, pour que vous puissiez profiter pleinement de chaque instant de votre soirée."),n.createElement("p",null,"Faites confiance à Happy Sound 54 pour transformer vos événements en des moments inoubliables. ",n.createElement("br",null),"Contactez-nous dès aujourd'hui pour réserver votre date et laissez-nous créer ensemble une soirée exceptionnelle!")),n.createElement("p",{className:"Intro-article__list"},"Liste",n.createElement("button",{onClick:p},"du matériel"),"et",n.createElement("button",{onClick:p},"des prestataires"))),n.createElement(r,{className:"avis",dataClassname:"background2",titre:"AVIS"},n.createElement(c,null)),n.createElement(r,{className:"ambiance",dataClassname:"background3",titre:"AMBIANCES"},n.createElement("p",{className:"ambiance-text"},"Cliquez pour écouter un extrait"),n.createElement(E,null),n.createElement(l,null)),n.createElement(r,{className:"news",dataClassname:"background1",titre:"DERNIERES NOUVELLES"},n.createElement("div",{className:"facebook-posts"},n.createElement("p",null,"Suivez-moi sur Facebook"),m.map(((e,t)=>n.createElement(v,{key:t,post:e}))))),n.createElement(b.Z,{isOpen:a,onClose:()=>i(!1),modalType:o})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-7736adcd1c5314352716.js.map