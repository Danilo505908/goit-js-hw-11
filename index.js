import{a as c,S as u,i as n}from"./assets/vendor-5YrzWRhu.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=c.create({baseURL:"https://pixabay.com/api/",params:{key:"51756879-33acfcb6aa2bec76bd89378fe",image_type:"photo",orientation:"horizontal",safesearch:!0}});function p(s){return d.get("",{params:{q:s}}).then(a=>a.data)}let i=document.querySelector(".gallery"),f=new u(".gallery a");function y(s){const a=s.map(r=>`<li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}">
            <img
            class="gallery-image"
            src="${r.webformatURL}"
            data-source="${r.largeImageURL}"
            alt="${r.tags}"
            />
            <div class = "gallery-box">
            <p class="gallery-box-text">Likes <span class="gallery-box-span">${r.likes}</span></p>
            <p class="gallery-box-text">Views <span class="gallery-box-span">${r.views}</span></p>
            <p class="gallery-box-text">Comments <span class="gallery-box-span">${r.comments}</span></p>
            <p class="gallery-box-text">Downloads <span class="gallery-box-span">${r.downloads}</span></p>
            </div>
            </a>
            </li>`).join("");i.insertAdjacentHTML("beforeend",a),f.refresh()}function m(){i.innerHTML=""}function g(){document.querySelector(".loader").classList.remove("is-hidden")}function h(){document.querySelector(".loader").classList.add("is-hidden")}const b=document.querySelector(".form");b.addEventListener("submit",async s=>{s.preventDefault();const a=s.target.elements.searchText.value.trim();if(a){m(),g();try{const r=await p(a);r.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!"}):y(r.hits)}catch{n.error({message:"An error occurred while fetching images. Please try again."})}finally{h()}}});
//# sourceMappingURL=index.js.map
