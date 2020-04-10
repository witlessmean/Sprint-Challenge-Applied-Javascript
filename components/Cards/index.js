// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


function articleCreator(article){

    //// Creation of Elements ////

    const articleContainer = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorContainer = document.createElement('div');
    const imgContainer = document.createElement('div');
    const imgContainerSrc = document.createElement('img');
    const authorNameContainer = document.createElement('span');

    //// Addition of Classes to Created Elements ////

    articleContainer.classList.add('card');
    headlineDiv.classList.add('headline');
    authorContainer.classList.add('author');
    imgContainer.classList.add('img-container');

    //// Adding Text Content ////

    headlineDiv.textContent = article.headline;
    imgContainerSrc.src = article.authorPhoto;
    authorNameContainer.textContent = `By ${article.authorName}`;

    
    //// Appending Created Elements ////

    articleContainer.appendChild(headlineDiv);
    articleContainer.appendChild(authorContainer);
    authorContainer.appendChild(imgContainer);
    imgContainer.appendChild(imgContainerSrc);
    authorContainer.appendChild(authorNameContainer);


    return articleContainer;

};








axios.get("https://lambda-times-backend.herokuapp.com/articles").then(response => { 
    console.log(response);

    const cardsContainer = document.querySelector('.cards-container');
    const arrayFromResponse = Object.values(response.data.articles);

    arrayFromResponse.forEach((item) => { 
        item.forEach((article) => {
            cardsContainer.appendChild(articleCreator(article));
            
        })
        
    })

    }).catch(error => {
    console.log("the data was not returned", error)
    
});  




