
import 'material-design-icons/iconfont/material-icons.css';
import galleryTamplate from '../templates/gallery.hbs'
import api from './apiService.js'



const btn=document.querySelector('.btn')
const form = document.querySelector('.search-form')
const input =document.querySelector('input')


form.addEventListener('submit', formSubmit);


btn.addEventListener('click', loadMoreBtn);
btn.classList.add("hidden");




function formSubmit(e){
e.preventDefault();
const searchQuery = e.currentTarget.elements.query.value
console.log(searchQuery);
clearGallery()
if(searchQuery!== ''){
api.fetchCard(searchQuery, pageNumber)
.then(murkupMoreList);
}
}
function clearGallery(){
  const galleryClear = document.querySelector('.gallery').innerHTML = '';
}
let pageNumber = 1;
function loadMoreBtn(e){
    
const searchQuery = inputValue()
pageNumber++
api.fetchCard(searchQuery, pageNumber)
.then(murkupMoreList);

}
function inputValue(){
    return input.value
}
function murkupMoreList(data){
    const moreList = document.querySelector('.gallery').insertAdjacentHTML('beforeend', galleryTamplate(data))
    window.scrollTo({
        
        top: document.documentElement.scrollHeight - 100,
        behavior: 'smooth',
      });
      btn.classList.remove("hidden");
      
}

