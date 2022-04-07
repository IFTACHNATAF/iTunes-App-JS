const URL = 'https://itunes.apple.com/search?term='

async function searchITunes(search_term, search_type)
{

    const
        response = await fetch(URL + `${search_term}${search_type === 'all' ? '' : '&entity=' + search_type}`),
        json     = await response.json();

    return json
        .results
        .filter(item => !!item.kind);
}

export {searchITunes}