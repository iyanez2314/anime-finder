const submitElement = document.getElementById('currentAnimeButton');

const buttonClick = (event) =>{
    event.preventDefault(); // Stops the page from refreshing
    console.log(event);
}

const currentAnimeInputValue = () => {
    let currentAnimeInput = document.getElementById('currentAnimeInput');
    console.log(currentAnimeInput.value)
}

submitElement.addEventListener('click', buttonClick)



// const api = 'https://api.jikan.moe/v4/anime?q='
// const currentAnimeSelected = 'bleach'

// fetch(api + currentAnimeSelected )
// .then((response) => response.json())
// .then((data) => console.log(data))