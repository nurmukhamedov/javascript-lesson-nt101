// const btn = document.querySelector('.btn');

// const input = document.querySelector('.input');

// const countryWrapper = document.querySelector('#countries');

// btn.addEventListener('click', () => {

//     const name = input.value.toLowerCase();
//     const url = `https://restcountries.com/v3.1/name/${name}`;

//     countryWrapper.innerHTML = '';

//     fetch(url).then((response) => {
//         if (!response.ok) {
//             throw new Error('Ishlamayapti');
//         }
//         return response.json();
//     }).then((data) => {
//         data.map((country) => {
//             const countryElement = document.createElement('div');
//             const flagElement = document.createElement('img');
//             const countryName = document.createElement('h3');
//             const populationElement = document.createElement('span');
//             flagElement.src = country.flags.png;
//             flagElement.alt = country.name.common;
//             countryName.innerText = country.name.common;
//             countryElement.appendChild(flagElement);
//             populationElement.innerText = country.population;
//             countryElement.appendChild(countryName);
//             countryElement.appendChild(populationElement);
//             countryWrapper.appendChild(countryElement);

//             console.log(country);
//         })

//     }).catch((error) => console.error('Nimadir xato ketgan API ga qara', error));

//     input.value = '';
// })







// function myFun(number) {

//     return function myInnerFun(param) {
//         return number * param;
//     }
// }

// const double = myFun(2);

// console.log(double(10));


// function myName(name, callback) {
//     const greeting = name + callback();
//     return greeting;
// }

// function sayGreeting() {
//     return 'Hello';
// }

// console.log(myName('Muhammadrasul ', sayGreeting));



const apiKey = 'c1ba5d7054ad4225561ffacb783be3c6';
const baseUrl = 'https://api.themoviedb.org/3/';

const imagesUrl = 'https://image.tmdb.org/t/p/w500';


const fragment = document.createDocumentFragment();


const loader_container = document.querySelector('.loader-container');
const loader = document.createElement('div');
loader.classList.add('loader');

loader_container.appendChild(loader);


async function myAsyncFunction() {

    const searchTerm = document.querySelector('#search').value;

    let url;

    if (searchTerm) {
        url = `${baseUrl}search/movie?api_key=${apiKey}&query=${searchTerm}`;
    } else {
        url = `${baseUrl}discover/movie?api_key=${apiKey}`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        const movie_container = document.querySelector('.movie-container');

        movie_container.innerHTML = '';

        data.results.map((movie) => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');


            const movieImage = document.createElement('img');
            movieImage.src = `${imagesUrl}${movie.backdrop_path}`;
            movieImage.alt = movie.title;

            const movieTitle = document.createElement('h3');
            movieTitle.textContent = movie.title;

            const movieRelease = document.createElement('span');
            movieRelease.textContent = `Released: ${movie.release_date}`;



            fragment.appendChild(movieImage);
            fragment.appendChild(movieTitle);
            fragment.appendChild(movieRelease);
            movieCard.appendChild(fragment);
            movie_container.appendChild(movieCard);
        })

    } catch (error) {
        console.error(error.message);
    } finally {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader_container.remove();
        }
    }
}

const searchInput = document.querySelector('#search')

searchInput.addEventListener('input', () => {
    myAsyncFunction();
})

myAsyncFunction();





