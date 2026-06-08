import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{n as t,r as n,t as r}from"./assets/vendor-fzEegEpZ.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(n(),1),a=`56223156-16dc111f80fb4ae9334d29acf`;async function o(e,n){return(await t.get(`https://pixabay.com/api/`,{params:{key:a,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0,per_page:15,page:n}})).data}var s=document.querySelector(`.gallery`),c=document.querySelector(`.loader`),l=document.querySelector(`.load-more`),u=null;function d(e){let t=e.map(({webformatURL:e,largeImageURL:t,tags:n,likes:r,views:i,comments:a,downloads:o})=>`
        <li class="gallery-item">
          <a href="${t}">
            <img
              src="${e}"
              alt="${n||``}"
              loading="lazy"
            />
            <div class="image-info">
              <p><b>Likes</b> ${r}</p>
              <p><b>Views</b> ${i}</p>
              <p><b>Comments</b> ${a}</p>
              <p><b>Downloads</b> ${o}</p>
            </div>
          </a>
        </li>
      `).join(``);s.insertAdjacentHTML(`beforeend`,t),u?u.refresh():u=new r(`.gallery a`,{captionsData:`alt`,captionDelay:250,alertError:!1})}function f(){s.innerHTML=``}function p(){c?.classList.remove(`is-hidden`)}function m(){c?.classList.add(`is-hidden`)}function h(){l?.classList.remove(`is-hidden`)}function g(){l?.classList.add(`is-hidden`)}var _=document.querySelector(`.form`),v=document.querySelector(`.load-more`),y=``,b=1,x=0;_.addEventListener(`submit`,async e=>{e.preventDefault();let t=e.currentTarget.elements[`search-text`].value.trim();if(!t){i.default.warning({message:`Please enter a search query`,position:`topRight`});return}y=t,b=1,f(),g(),p();try{let e=await o(y,b);if(x=e.totalHits,e.hits.length===0){i.default.error({message:`Sorry, there are no images matching your search query. Please try again!`,position:`topRight`});return}d(e.hits),b*15<x?h():i.default.info({message:`We're sorry, but you've reached the end of search results.`,position:`topRight`})}catch{i.default.error({message:`Something went wrong. Please try again.`,position:`topRight`})}finally{m(),_.reset()}}),v.addEventListener(`click`,async()=>{b+=1,p(),g();try{d((await o(y,b)).hits);let e=document.querySelector(`.gallery-item`).getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:`smooth`}),b*15>=x?(g(),i.default.info({message:`We're sorry, but you've reached the end of search results.`,position:`topRight`})):h()}catch{i.default.error({message:`Something went wrong. Please try again.`,position:`topRight`})}finally{m()}});
//# sourceMappingURL=index.js.map