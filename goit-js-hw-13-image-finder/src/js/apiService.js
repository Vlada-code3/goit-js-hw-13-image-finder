
const searchQuery = ''
// let pageNumber = 1;
const key = '21139960-6a394b07a806e5d76da1f60b2'
const PER_PAGE = 12

const baseUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal`

function fetchCard(searchQuery, pageNumber){
    return fetch(`${baseUrl}&q=${searchQuery}&page=${pageNumber}&per_page=${PER_PAGE}&key=${key}`)
    .then(response=>response.json())
}

export default {fetchCard}






