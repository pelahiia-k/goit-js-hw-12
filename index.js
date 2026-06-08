import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{n as t,r as n,t as r}from"./assets/vendor-fzEegEpZ.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(n(),1),a=`56223156-16dc111f80fb4ae9334d29acf`;async function o(e){return t.get(`https://pixabay.com/api/`,{params:{key:a,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0}}).then(e=>e.data)}var s=document.querySelector(`.gallery`),c=document.querySelector(`.loader`),l=null;function u(e){let t=e.map(({webformatURL:e,largeImageURL:t,tags:n,likes:r,views:i,comments:a,downloads:o})=>`
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
      `).join(``);s.insertAdjacentHTML(`beforeend`,t),l?l.refresh():l=new r(`.gallery a`,{captionsData:`alt`,captionDelay:250,alertError:!1})}function d(){s.innerHTML=``}function f(){c?.classList.remove(`is-hidden`)}function p(){c?.classList.add(`is-hidden`)}var m=document.querySelector(`.form`);m.addEventListener(`submit`,e=>{e.preventDefault();let t=e.currentTarget.elements[`search-text`].value.trim();if(!t){i.default.warning({message:`Please enter a search query`,position:`topRight`});return}d(),f(),o(t).then(e=>{if(e.hits.length===0){i.default.error({message:`Sorry, there are no images matching your search query. Please try again!`,position:`topRight`});return}u(e.hits)}).catch(e=>{console.log(e),console.log(e.message),i.default.error({message:`Something went wrong. Please try again.`,position:`topRight`})}).finally(()=>{p(),m.reset()})});
//# sourceMappingURL=index.js.map