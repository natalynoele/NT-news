!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=e.parcelRequire47de;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var a=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,a.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequire47de=a);var r=a("31XKK");a("eDLZO"),a("iEXUT"),a("4pT0l");var o=a("4Nugj"),i=a("eM8IA");window.addEventListener("DOMContentLoaded",(function(e){return(0,r.mqHandler)()}));if(o.refs.errorFind.classList.remove("notfind-part-hidden"),"/favorite.html"===window.location.pathname){function l(e,n){o.refs.errorFind.classList.add("notfind-part-hidden"),e.insertAdjacentHTML("beforeend",n)}function s(e){var n=e.title,t=e.img,a=e.description,r=e.source,o=e.category,i=e.date;return'<li class="gallery__item">\n    <article class="gallery__article">\n              <div class="gallery__thumb"> <p class="gallery__category">'.concat(o,'</p>\n                <img class="gallery__img" src="').concat(t,'" alt=""/>\n                 <button type="button" class="gallery__favorite__btn ">\n                         <span class="favorite__btn-span add-favorite-btn is-hidden">Add to favorite\n                           <svg width=\'16\' height=\'16\'><use href="').concat("/new-news-only/sprite.50c1db32.svg#icon-heart",'"></use>\n                    </svg> </span>\n                    <span class="favorite__btn-span remove-favorite-btn">Remove from favorite\n                                    <svg width=\'16\' height=\'16\' fill="#4440f7"><use href=""></use>\n                    </svg></span>\n                          </button>\n                    </div>\n                    <h3 class="gallery__header">').concat(n,'</h3>\n                    <p class="gallery__text">').concat(a,'</p>\n                    <div class="gallery__item-bottom_wrap">\n                        <span class="gallery__date">').concat(i,'</span>\n                        <a href="').concat(r,'" target="_blank" rel="noreferrer noopener" class="gallery__link">Read more</a>\n                    </div>\n                </article>\n             </li>')}i.favoritesInLocalStorage.map((function(e){l(i.favoriteGalleryList,s(e))})),
//!!!!Remove favorite ---------------------------------------------------------------RESTORE
"/favorite.html"===window.location.pathname&&i.favoriteGalleryList.addEventListener("click",(function(e){var n=e.target.closest(".remove-favorite-btn"),t=n.parentNode.childNodes[1];console.log();var a=n.parentNode.parentNode.parentNode.childNodes[3].textContent;if(!n)return;if(!i.favoritesInLocalStorage)return;n.classList.contains("is-hidden")||(n.classList.add("is-hidden"),t.classList.remove("is-hidden"));var r=i.favoritesInLocalStorage.findIndex((function(e){return e.title===a}));console.log(a,r),i.favoritesInLocalStorage.splice(r,1),localStorage.setItem("favoritesNews",JSON.stringify(i.favoritesInLocalStorage)),i.favoriteGalleryList.innerHTML="",o.refs.errorFind.classList.remove("notfind-part-hidden"),i.favoritesInLocalStorage.map((function(e){l(i.favoriteGalleryList,s(e))}))})),console.log(i.favoritesInLocalStorage),null!==i.favoritesInLocalStorage&&i.favoritesInLocalStorage!==[]||console.log("error")}}();
//# sourceMappingURL=favorite.43da6866.js.map
