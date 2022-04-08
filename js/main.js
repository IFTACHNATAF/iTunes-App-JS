import {
    clearResultList,
    getSearchTerm,
    getSearchType,
    onDomLoad,
    registerOnEnter,
    renderList

}                     from "./modules/jquery-dom-module.js";
import {searchITunes} from "./modules/itunes-api-module.js";
import {youTubeSearcher} from "./modules/youTube-search.js";
import {movieSearch} from "./modules/movie-search.js";


window.onBodyLoad = (event) => {
    onDomLoad();
    registerOnEnter(() => {
        alert('You pressed the E key!')
        console.log('registerOnEnter');
    })
}


const onButtonClicked  = async () => {
    clearResultList();

    const
        searchTerm = getSearchTerm();
    if (!searchTerm)
    {
        return
    }

    const
        items      = await searchITunes(searchTerm, getSearchType());

    renderList(items, getSearchType());
};

window.onButtonClicked = onButtonClicked


window.youTubeSearch= ()=> {
    youTubeSearcher(getSearchTerm())
}
window.ImdbSearch= ()=> {
    movieSearch(getSearchTerm())
}



