function movieSearch(search_term) {


    const movieName = document.querySelectorAll("#movie-title");

    for (let i = 0; i < movieName.length; i++) {
// console.log(movieName)
        movieName[i].onclick = function () {
            open(`https://www.imdb.com/find?s=tt&q=${this.innerText}&ref_=nv_sr_sm`)
        }
    }

}

export {movieSearch}