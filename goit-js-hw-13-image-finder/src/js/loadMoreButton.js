

// export default class LoadMoreBtn{
//     constructor({selector, hidden = false}){
//         this.refs = this.getRefs(selector);

//         hidden && this.hiden();
//     }

//     getRefs(selector){

//     const refs = {};
//     refs.button = document.querySelector(selector);
//     refs.label = refs.button.querySelector('.label');
//     refs.spinner = refs.button.querySelector('.spinner');
//     return refs
//     }
    
//     enabled() {
//         refs.buttonLabel.textContent = "LOAD";
//         refs.spinner.classList.add('is-hidden');
//         refs.button.disabled = false;
//     }
//     loading() {
//         refs.button.disabled = true;
//         refs.buttonLabel.textContent = "Loading...";
//         refs.spinner.classList.remove('is-hidden');
//     }
//     show() {
//         refs.button.classList.remove('is-hidden');
//     }
//     hide() {
//         refs.button.classList.add('is-hidden');
//     }

// }


















// import refs from './refs.js'

// export default {
//     enabled() {
//         refs.buttonLabel.textContent = "LOAD";
//         refs.spinner.classList.add('is-hidden');
//         refs.button.disabled = false;
//     },
//     loading() {
//         refs.button.disabled = true;
//         refs.buttonLabel.textContent = "Loading...";
//         refs.spinner.classList.remove('is-hidden');
//     },
//     show() {
//         refs.button.classList.remove('is-hidden');
//     },
//     hide() {
//         refs.button.classList.add('is-hidden');
//     }
// }