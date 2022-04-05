import  {createItemHtmlElement} from './create-item-html-element.js'
import  {$result_list} from './on-body-load.js'



function searchITunes(search_term, searchType)
{
    $result_list.empty(); //DOM manipulation - jQuery

    fetch(`https://itunes.apple.com/search?term=${search_term}${searchType === 'all' ? '' : '&entity=' + searchType}`)
        .then(response => response.json())
        .then(json => {
            const items = json
                .results
                .filter(item => !!item.kind);
            for (let item of items)
            {
                const element = createItemHtmlElement(item, searchType); //DOM manipulation - jQuery
                $result_list.append(element); //DOM manipulation - jQuery
            }
        })
}


export { searchITunes }