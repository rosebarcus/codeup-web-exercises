"use strict";

const getMovies = () => {
    fetch("https://ghibliapi.herokuapp.com/films/")
        .then (resp => resp.json())
        .then(movies => {
            return movies.map(movie => movie.title)
        })
        .then(display)
}

getMovies();

    function display (titles) {
    let htmlStr = "";
    for (let title of titles) {
        htmlStr += `<h1>${title}</h1>`
    }
    document.querySelector("#movies").innerHTML = htmlStr;
}