let
    $result_list,
    $search_term_input,
    $type_select_el,
    onEnterFn,
    isEnterEventRegistered
;


export function registerOnEnter(fn) {
    if (typeof fn !== 'function'){
        throw new Error('You have to provide a function to registerOnEnter!');
    }
    if (!isEnterEventRegistered) {
        isEnterEventRegistered = true;
        document.addEventListener("keyup", (event)=>{
            if (event.key === "Enter" && onEnterFn) {
                onEnterFn();
            }
        })
    }
    onEnterFn = fn;
}

export function onDomLoad() {
    console.log('onDomLoad running..');
    $result_list       = $('#result-list');
    $search_term_input = $('#search-box');
    $type_select_el    = $('#type-select');

}

export function getSearchTerm(){
    return $search_term_input.val();
}

export function getSearchType(){
    return $type_select_el.val();
}

export function clearResultList() {
    $result_list.empty();
}

function createItemHtmlElement(item,searchType) //encapsulation
{
    switch(item.kind && searchType) {

        case searchType = 'all' ||!'': {



            const templateSong = `
<hr>
		<div class="data-item-wrapper" onclick="youTubeSearch()">
			<img src="${item.artworkUrl100}" height="250" width="150"  alt="song pic">
			<div class="data-fields">
				<div class="song-title" id="song-title">
				<span class="hovertext" data-hover="YouTube Search">
					${item.trackName}
					</span>
				</div>
				<div  class="album-title">
					${item.collectionName}
				</div>
				<div class="artist-title">
					${item.artistName}
				</div>
			</div>
			
			<div class="song-player">
				<audio src="${item.previewUrl}" controls></audio>
			</div>
			
		</div>	
	`

            // return $(templateSong);
            // <p class="direction" id="movie-Description" > ${item.longDescription} </p>
            const templateMovie = `
<hr>
		<div class="data-item-wrapper" onclick="ImdbSearch()">
			<img src="${item.artworkUrl100}" height="250" width="150" alt="movie pic">
			<div class="data-fields">
				<div class="movie-title" id="movie-title" >
				<span class="hovertext" data-hover="IMDb Search">
					${item.trackName}
					</span>
				</div>
		    <details>
		    <summary>summary</summary>
		     ${item.longDescription}
                </details>
				<div  class="gener-title">
					${item.primaryGenreName}
				</div>
				<div class="artist-title">
					${item.artistName}
				</div>
			</div>
			
			<div class="song-player">
				<video src="${item.previewUrl}" height="350" width="550" controls></video>
			</div>
			
		</div>	
	`
            // return $(templateMovie);
            for (let prop in item) {
                console.log(item.kind)
                if(item.kind === "feature-movie"){ return $(templateMovie) }else {return $(templateSong)}
            }
        }


        case searchType = 'song' || 'all': {

            // Reusable component
            const templateSong = `
<hr>
		<div class="data-item-wrapper" onclick="youTubeSearch()">
			<img src="${item.artworkUrl60}" height="60" alt="song pic">
			<div class="data-fields">
				<div class="song-title" id="song-title">
				<span class="hovertext" data-hover="YouTube Search">
					${item.trackName}
					</span>
				</div>
				<div  class="album-title">
					${item.collectionName}
				</div>
				<div class="artist-title">
					${item.artistName}
				</div>
			</div>
			
			<div class="song-player">
				<audio src="${item.previewUrl}" controls></audio>
			</div>
			
		</div>	
	`

            return $(templateSong);

        }

        case searchType = 'movie' || 'all': {
            console.log(item.kind)
            const templateMovie = `
<hr>
		<div class="data-item-wrapper" onclick="ImdbSearch()">
			<img src="${item.artworkUrl100}"  alt="movie pic">
			<div class="data-fields">
				<div class="movie-title" id="movie-title" >
				<span class="hovertext" data-hover="IMDb Search">
					${item.trackName}
					</span>
				</div>
		     <details>
		    <summary>summary</summary>
		     ${item.longDescription}
                </details>
				<div  class="gener-title">
					${item.primaryGenreName}
				</div>
				<div class="artist-title">
					${item.artistName}
				</div>
			</div>
			
			<div class="song-player">
				<video src="${item.previewUrl}"  controls></video>
			</div>
			
		</div>	
	`
            return $(templateMovie);
            break;
        } /* @ toDO continue the search types from here*/
        case searchType = 'Podcast' || 'all': {
            console.log(item.kind)
            const templatePodcast = `
<hr>
		<div class="data-item-wrapper" onclick="youTubeSearch()">
			<img src="${item.artworkUrl100}" height="60" alt="movie pic">
			<div class="song-fields">
		     <p class="direction" id="imdb-p-title"> <span style="color: #ecc000">click the </span><span style="color: black">Title</span> </p>
				<div class="movie-title" id="movie-title">
					${item.trackName}
				</div>
				<div  class="gener-title">
					${item.primaryGenreName}
				</div>
				<div class="artist-title">
					${item.artistName}
				</div>
			</div>
			
			<div class="song-player">
				<video src="${item.previewUrl}" controls></video>
			</div>
			
		</div>	
	`
            return $(templatePodcast);
            break;
        }

    }

}



export function renderList(items,SearchType) {
    if (!items || !items.length) {
        return
        // throw new Error('No Items provided for renderList!')
    }
    for (const item of items)
    {
        const $element = createItemHtmlElement(item,SearchType);
        $result_list.append($element);
    }
}