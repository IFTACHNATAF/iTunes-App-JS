function youTubeSearcher(search_term) {


    const songName = document.querySelectorAll("#song-title");

    for (let i = 0; i < songName.length; i++) {
// console.log(songName)
        songName[i].onclick = function () {
            open(`https://www.youtube.com/results?search_query=${this.innerText}+${search_term}`)

        }
    }

}

export {youTubeSearcher}