
import { mqHandler } from './functions/mqHandler';
import { refs } from './refs';
import Notiflix from 'notiflix';
import { fetchNews } from './functions/fetchNews';
import { createMarkup } from './functions/markup';
import { clearMarkup } from './functions/markup';
import { normalizePop } from './functions/markup';
import { normalizeSrc } from './functions/markup';
import { markData } from './functions/markup';
// import {itemsPerPage} from './functions/markup';
import { page } from './functions/markup';

// import { addToLocalStorate } from './js-read/read'
let calendarDate = '';
export { calendarDate };
  
export let itemsPerPage = 8;
export let totalPages = 0;

export let srcPage = 1;
export let searchReq = '';
export let searchType = null;
export let filtredArr = [];
export { onSearch };


if (
  window.location.pathname === '/' ||
  window.location.pathname === '/index.html'
) {
  const formRef = document.querySelector('.search-field');
  const inputRef = document.querySelector('#search-field__input');
  const calendRef = document.querySelector('.date-picker');

  formRef.addEventListener('submit', onSubmit);
  inputRef.addEventListener('input', createReq);
  calendRef.addEventListener('click', sortPop);
};

fetchNews('/svc/mostpopular/v2/viewed/1.json', {
}).then(data => {
  if (window.innerWidth >= 1280) {
    itemsPerPage = 8;
  }
  if (window.innerWidth < 1280 && window.innerWidth >= 768) {
    itemsPerPage = 7;
  }
  if (window.innerWidth < 768) {
    itemsPerPage = 4;
  }
  let totalItems = null;
  totalItems = data.results.length;
  totalPages = Math.ceil(data.results.length / itemsPerPage);
  searchType = 'popular';
  // console.log(searchType);
  normalizePop(data.results);
 
  // refs.paginationContainer.hidden = false;
  createMarkup(markData, page);
  
  // addToLocalStorate();
  // Do something with the data		
})


  function onSearch(inputData, srcPage) {
    const promises = [];
    calendarDate = '20230115';
    searchType = 'word';
    console.log(calendarDate);
    if (calendarDate === '') {
      for (let i = 1; i <= 5; i += 1) {
      const promise = fetchNews('/svc/search/v2/articlesearch.json', {
        q: inputData,
        page: i.toString(),
      }).then(data => {
        return data.response.docs;
      });
      promises.push(promise);
      };
      
    } else {
      for (let i = 1; i <= 5; i += 1) {
      const promise = fetchNews('/svc/search/v2/articlesearch.json', {
        q: inputData,
        page: i.toString(),
        begin_date: calendarDate,
        end_date: calendarDate,
      }).then(data => {
        return data.response.docs;
      });
      promises.push(promise);
      };
    }
    
    Promise.all(promises).then(results => {
      const intermediateArray = [];
      results.forEach(docs => {
        intermediateArray.push(...docs);
      })
      // console.log(intermediateArray);
      totalPages = intermediateArray.length / itemsPerPage;

      refs.errorFind.classList.add('notfind-part-hidden');

      if (intermediateArray.length === 0){

        refs.paginationContainer.hidden = true;

         refs.errorFind.classList.remove('notfind-part-hidden');
         refs.galleryContainer.innerHTML = "";
       }

     
      normalizeSrc(intermediateArray);
      console.log(markData);
      createMarkup(markData, srcPage);
    });

     refs.errorFind.classList.add('notfind-part-hidden');

      // fetchNews('/svc/search/v2/articlesearch.json', {


      //     q: inputData,
      //     page: srcPage,
      //   }).then(data => {
      //     totalItems = data.response.docs.length;
      //     searchType = 'word';
      //     console.log(searchType);
      //     if (data.response.meta.hits > 1000) {
      //       totalPages = 100;
      //     } else {
      //       totalPages = data.response.meta.hits;
      //     }

      
      // console.log(totalPages);
      //  refs.errorFind.classList.add('notfind-part-hidden');
      // console.log(totalItems);
      // if (data.response.docs.length === 0) {
        
      //   refs.paginationContainer.hidden = true;
      //   refs.errorFind.classList.remove('notfind-part-hidden');
      //   gallery??ontainer.innerHTML = "";
        
      // }
      // console.log(data.response.docs);
   
      // console.log(srcPage);
      
      
      // });
    };

// onSearch('ukraine');



function createReq(e) {
  searchReq = e.target.value.trim();


  // console.log(searchReq);
  }
  

function onSubmit(e) {
  e.preventDefault();
  clearMarkup();
  onSearch(searchReq, srcPage);
};


function sortPop(date) {
  calendarDate = '22.02.2023';
  // clearMarkup();
  markData.map(e => {
    if (e.date === calendarDate) {
      filtredArr.push(e);
    }
  });
  totalPages = filtredArr.length / itemsPerPage;
  clearMarkup();
  createMarkup(filtredArr, srcPage);

}
// sortPop(calendarDate, markData);


// export function fetchSizer(size) {

//   if (size === 'desktop') {
//     console.log('desk')
//     // clearMarkup();
//     // createMarkup(markData, page);

//   } else if (size === 'tablet') {
//     console.log('tab')
//     // clearMarkup();
//     // createMarkup(markData, page);
//   } else if (size === 'mobile') {
//     console.log('mobile')
//     // clearMarkup();
//     // createMarkup(markData, page);
//   }

// };

// const encoded = encodeURIComponent('crosswords & games'); //crosswords%20&%20games