
// all the elements that are on the dom
const submitElement = document.getElementById('currentAnimeButton');
const infoContainer = document.getElementById('info-container');

// all the elements we are creating
const currentAnimeTitle = document.createElement('h1');
const currentAnimeBackground = document.createElement('p')
const currentAnimeScore = document.createElement('p')
const currentAnimeStatus = document.createElement('p')
const currentAnimeEpisodes = document.createElement('p')
const currentAnimeDuration = document.createElement('p')

// Api we are using
let api = 'https://api.jikan.moe/v4/anime?q='

const currentAnimeInputValue = () => {
    let currentAnimeInput = document.getElementById('currentAnimeInput');
    let currentAnimeTitle = currentAnimeInput.value; 
    fetch(api + currentAnimeTitle)
    .then((response) => response.json())
    .then((data) => infoHandler(data))
};



// I want to create another function that will basically get the data from the first function in the second promise chain.
const infoHandler = (data) => {
    const currentDataTitle = data.data[0].title
    const currentDataBackground = data.data[0].background
    const currentDataScore = data.data[0].score
    const currentDataStatus = data.data[0].status
    const currentDataEpisodes = data.data[0].episodes
    const currentDataDuration = data.data[0].duration


    currentAnimeTitle.textContent = currentDataTitle;
    currentAnimeBackground.textContent = currentDataBackground;
    currentAnimeScore.textContent = currentDataScore;
    currentAnimeStatus.textContent = currentDataStatus;
    currentAnimeEpisodes.textContent = currentDataEpisodes;
    currentAnimeDuration.textContent = currentDataDuration
    
   

    infoContainer.appendChild(currentAnimeTitle);
    infoContainer.appendChild(currentAnimeBackground);
    infoContainer.appendChild(currentAnimeScore);
    infoContainer.appendChild(currentAnimeStatus);
    infoContainer.appendChild(currentAnimeEpisodes);
    infoContainer.appendChild(currentAnimeDuration);
}

submitElement.addEventListener('click', currentAnimeInputValue);


 // infoContainerTitlesLi.textContent = currentAnime.title;
 // infoTitleList.appendChild(infoContainerTitlesLi);

  // infoContainerTitle.textContent = currentAnime;
    // infoContainer.appendChild(infoContainerTitle);