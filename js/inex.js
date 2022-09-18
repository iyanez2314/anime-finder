// Api we are using
let api = 'https://api.jikan.moe/v4/anime?q='

// all the elements that are on the dom
const submitElement = document.getElementById('currentAnimeButton');
const infoContainer = document.getElementById('info-container');

// all the elements we are creating
const currentAnimeTitle = document.createElement('h1');
const currentAnimeBackground = document.createElement('p');
const currentAnimeScore = document.createElement('p');
const currentAnimeStatus = document.createElement('p');
const currentAnimeEpisodes = document.createElement('p');
const currentAnimeDuration = document.createElement('p');
let testDataElement = document.createElement('p');


// This function will get the current input in the input section, It will also make the fetch to the api
const currentAnimeInputValue = () => {
    let currentAnimeInput = document.getElementById('currentAnimeInput');
    let currentAnimeTitle = currentAnimeInput.value; 
    fetch(api + currentAnimeTitle)
    .then((response) => response.json())
    .then((data) => infoHandler(data)) // Once we get all the data we will then call the function that will handle all the rendering of the data.
};

/*
    TODO: I need to do some conditional checking for items that are null.
    TODO: I need to figure out how to add pagination when the response has more than 1 page.
    TODO: How I can add a modal so when a user clicks the anime it'll expand for more information.
    TODO: Figure how I can add a watchlist so the user can choose animes to add to their wishlist. 
*/


// This function will handle all the data from the api and append it to the DOM.
const infoHandler = (data) => {

    console.log(data)
    const testData = data.data;

    testData.forEach(anime => {
        const animeElementTitle = document.createElement('p');
        const animeElementBackground = document.createElement('p');
        const animeElementScore = document.createElement('p');
        const animeElementStatus = document.createElement('p');
        const animeElementEpisodes = document.createElement('p');
        const animeElementDuration = document.createElement('p');

        animeElementTitle.innerText = `Names: ${anime.title}`;
        animeElementBackground.innerHTML = `Background of anime: ${anime.background}`;
        animeElementScore.innerHTML = `Anime Score: ${anime.score}`;
        animeElementStatus.innerHTML = `Anime status: ${anime.status}`;
        animeElementEpisodes.innerHTML = `Anime Episodes: ${anime.episodes}`;
        animeElementDuration.innerHTML = `Anime duration: ${anime.duration}`;

        infoContainer.append(animeElementTitle);
        infoContainer.append(animeElementBackground);
        infoContainer.append(animeElementScore);
        infoContainer.append(animeElementStatus);
        infoContainer.append(animeElementEpisodes);
        infoContainer.append(animeElementDuration);
    })
   
};

// here we are adding an event listener to the button and that event is a click event and then we are specifying what function we are going to preform once that button in clicked.
submitElement.addEventListener('click', currentAnimeInputValue);