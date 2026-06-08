import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{n as t,r as n,t as r}from"./assets/vendor-DZUOq8aW.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(n(),1),a=`56223156-16dc111f80fb4ae9334d29acf`;async function o(e,n){return(await t.get(`https://pixabay.com/api/`,{params:{key:a,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0,per_page:15,page:n}})).data}var s=e(r(),1),c=document.querySelector(`.gallery`),l=document.querySelector(`.loader`),u=document.querySelector(`.load-more`),d=null;function f(e){let t=e.map(({webformatURL:e,largeImageURL:t,tags:n,likes:r,views:i,comments:a,downloads:o})=>`
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
      `).join(``);c.insertAdjacentHTML(`beforeend`,t),d?d.refresh():d=new s.default(`.gallery a`,{captionsData:`alt`,captionDelay:250,alertError:!1})}function p(){c.innerHTML=``}function m(){l?.classList.remove(`is-hidden`)}function h(){l?.classList.add(`is-hidden`)}function g(){u?.classList.remove(`is-hidden`)}function _(){u?.classList.add(`is-hidden`)}var v=document.querySelector(`.form`),y=document.querySelector(`.load-more`),b=``,x=1,S=0;v.addEventListener(`submit`,async e=>{e.preventDefault();let t=e.currentTarget.elements[`search-text`].value.trim();if(!t){i.default.warning({message:`Please enter a search query`,position:`topRight`});return}b=t,x=1,p(),_(),m();try{let e=await o(b,x);if(S=e.totalHits,e.hits.length===0){i.default.error({message:`Sorry, there are no images matching your search query. Please try again!`,position:`topRight`});return}f(e.hits),x*15<S?g():i.default.info({message:`We're sorry, but you've reached the end of search results.`,position:`topRight`})}catch{i.default.error({message:`Something went wrong. Please try again.`,position:`topRight`})}finally{h(),v.reset()}}),y.addEventListener(`click`,async()=>{x+=1,m(),_();try{f((await o(b,x)).hits);let e=document.querySelector(`.gallery-item`).getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:`smooth`}),x*15>=S?(_(),i.default.info({message:`We're sorry, but you've reached the end of search results.`,position:`topRight`})):g()}catch{i.default.error({message:`Something went wrong. Please try again.`,position:`topRight`})}finally{h()}});
//# sourceMappingURL=index.js.map