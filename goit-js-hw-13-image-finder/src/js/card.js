
import 'material-design-icons/iconfont/material-icons.css';
import galleryTamplate from '../templates/gallery.hbs'
import api from './apiService.js'

const btn=document.querySelector('.btn')
const form = document.querySelector('.search-form')
const input =document.querySelector('input')
form.addEventListener('submit', formSubmit);
btn.addEventListener('click', loadMoreBtn)


function formSubmit(e){
e.preventDefault();
const searchQuery = e.currentTarget.elements.query.value 
console.log(searchQuery);
clearGallery()
if(searchQuery!== ''){
api.fetchCard(searchQuery, pageNumber) 
.then(galleryMurkup);   
}
}

function galleryMurkup(data){
const galleryList = document.querySelector('.gallery').innerHTML = galleryTamplate(data)  
}
    
function clearGallery(){
  const galleryClear = document.querySelector('.gallery').innerHTML = '';   
    
}

let pageNumber = 1;
function loadMoreBtn(e){

    const searchQuery = inputValue()

    pageNumber++
    api.fetchCard(searchQuery, pageNumber) 
.then(loadMore);   
}
   
console.log(pageNumber);

function inputValue(){
return input.value

}

function loadMore(data){

    const moreList= document.querySelector('.gallery').insertAdjacentHTML('beforeend', galleryTamplate(data))
}




//______________

// const scroller = document.querySelector('#scroller');
// const sentinel = document.querySelector('#sentinel');
// const counter = 1;

// function loadItems(data) {
//   for (let i = 12; i < data; i++) {
//     const newItem = document.createElement('div');
//     newItem.classList.add('item');
//     newItem.textContent = 'Item ' + counter++;
//     scroller.appendChild(newItem);
//   }
// }

// const intersectionObserver = new IntersectionObserver(entries => {
//   // If the browser is busy while scrolling happens, multiple entries can
//   // accumulate between invocations of this callback. As long as any one
//   // of the notifications reports the sentinel within the scrolling viewport,
//   // we add more content.
//   if (entries.some(entry => entry.intersectionRatio > 0)) {
//     loadItems(10);
//     // appendChild will move the existing element, so there is no need to
//     // remove it first.
//     scroller.appendChild(sentinel);
//     loadItems(5);
//     ChromeSamples.setStatus('Loaded up to item ' + counter);
//   }
// });
// intersectionObserver.observe(sentinel);