function movieSearch(search_term) {


    const movieName = document.querySelectorAll("#movie-title");

    for (let i = 0; i < movieName.length; i++) {
// console.log(movieName)
        movieName[i].onclick = function () {
            open(`https://www.youtube.com/results?search_query=${this.innerText}+${search_term}`)

        }
    }

}

export {movieSearch}