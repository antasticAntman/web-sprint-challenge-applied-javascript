import axios from 'axios'
import { articles } from '../mocks/data';
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  console.log(article)
  // console.log(Object.values(articles.articles.javascript))
  const cardWrapper = document.createElement('div');
    cardWrapper.classList.add("card");
  
// createElements
const Hline = document.createElement('div');
const authorWrapper = document.createElement('div');
const imgContainer = document.createElement('div');
const imgAuthor = document.createElement('img');
const authorSpan = document.createElement('span');
// console.log(cardWrapper);

// Add class names
Hline.classList.add('headline');
console.log(Hline)
authorWrapper.classList.add('author');
imgContainer.classList.add('img-container')
// console.log(cardWrapper);
// nesting!!!
cardWrapper.appendChild(Hline);
cardWrapper.appendChild(authorWrapper);
authorWrapper.appendChild(imgContainer);
authorWrapper.appendChild(authorSpan);
imgContainer.appendChild(imgAuthor);
// console.log(cardWrapper);

// Adding content
Hline.textContent = article.headline
imgAuthor.src = article.authorPhoto
authorSpan.textContent = article.authorName
// console.log(cardWrapper);

cardWrapper.addEventListener('click', ()=>{
  // console.log(Hline)
  
})
return cardWrapper
}


// console.log(Card(['Batman', 'Robin', 'NightWing']))
console.log(Card({ headline: 'foo', authorName: 'bar', authorPhoto: 'baz' }))
// console.log(Card(article.authorName))
// console.log(Card({'batman':'robin'}))
const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
axios.get('http://localhost:5001/api/articles')
.then(res => {
  const cardSelector = document.querySelector(selector);
  const objKeys = Object.keys(res.data.articles)
  for(let i = 0; i <objKeys.length; i++){
    // console.log(res.data.articles[objKeys[i]])
    res.data.articles[objKeys[i]].forEach(info => {
      cardSelector.appendChild(Card(info))
    })
  }
 
 
})
.catch(err =>{
  debugger
})
}

export { Card, cardAppender }
