// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    //// Creating Elements ////
    
    const headerContainer = document.createElement('div');
    const dateSpan = document.createElement('span');
    const h1 = document.createElement('h1');
    const temperature = document.createElement('span');
    
    //// Adding Classes to Created Elements ////
    
    headerContainer.classList.add('header');
    dateSpan.classList.add('date');
    temperature.classList.add('temp');
    
    //// Adding Text to Created Elements ////
    
    dateSpan.textContent = "SMARCH 28, 2019";
    h1.textContent = "Lambda Times";
    temperature.textContent = "98°";
    
    
    
    
    
    //// appending elements ////
    
    headerContainer.appendChild(dateSpan)
    headerContainer.appendChild(h1)
    headerContainer.appendChild(temperature)
    
    return headerContainer
    
    }
    
    const HTMLheaderContainer = document.querySelector('div.header-container');
    
    HTMLheaderContainer.appendChild(Header());
