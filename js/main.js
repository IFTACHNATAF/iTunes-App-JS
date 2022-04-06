import {
    onBodyLoad,
    $search_term_input,
    $type_select_el
}                     from "./on-body-load.js";
import {searchITunes} from "./search-i-tunes.js";
import {youTubeSearcher} from "./you-tube-search.js"
import {imdbSearch} from "./imdb-search.js"



window.onBodyLoad      = onBodyLoad;
window.onButtonClicked = ()=>{
    searchITunes($search_term_input.val(),$type_select_el.val());
    console.log($search_term_input.val(),$type_select_el.val())
};
window.youTubeSearch= ()=> {
    youTubeSearcher($search_term_input.val())
}
window.ImdbSearch= ()=> {
    imdbSearch($search_term_input.val())
}
