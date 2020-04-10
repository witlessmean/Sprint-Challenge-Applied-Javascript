// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function tabComponent(topics){

    const tabsContainer = document.createElement('div');

    tabsContainer.classList.add('tab');

    tabsContainer.textContent = topics;

    return tabsContainer;
}






const HTMLtopics = document.querySelector('.topics');


axios.get("https://lambda-times-backend.herokuapp.com/topics").then(response => { 
    //console.log(response.data.topics);

    
    
    response.data.topics.forEach(topics => {
        HTMLtopics.appendChild(tabComponent(topics))
    })
    
    
    }).catch(error => {
    console.log("the data was not returned", error)
    
});
