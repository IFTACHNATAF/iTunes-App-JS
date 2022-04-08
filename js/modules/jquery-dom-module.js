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
    switch(item.kind  && searchType) {

        /* case 'all' will return template of song/movie at this moment  */
        case searchType = 'all' ||!'': {


            /*          'all' case of song   */
            const templateSong = `
<hr>
		<div class="data-item-wrapper" onclick="youTubeSearch()">
			<img src="${item.artworkUrl100}"   alt="song pic">
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
			
			<div class="data-player">
				<audio src="${item.previewUrl}" controls></audio>
			</div>
			
		</div>	
	`
            /*          'all' case of movie   */
            const templateMovie = `
<hr>
		<div class="data-item-wrapper" onclick="ImdbSearch()">
			<img src="${item.artworkUrl100}" alt="movie pic">
			<div class="data-fields">
				<div class="movie-title" id="movie-title" >
				<span class="hovertext" data-hover="IMDb Search">
					${item.trackName}
					</span>
				</div>
		    <details id="movie-details">
		    <summary>Summary</summary>
		     ${item.longDescription}
                </details>
				<div  class="gener-title">
					${item.primaryGenreName}
				</div>
				<div class="artist-title">
					${item.artistName === 'Unknown' ? '' : item.artistName}
				</div>
			</div>
			
			<div class="data-player">
				<video src="${item.previewUrl}"  controls></video>
			</div>
			
		</div>	
	`
            for (let prop in item) {
                console.log(item.kind)
                if(item.kind === "feature-movie"){ return $(templateMovie) }else {return $(templateSong)}
            }
        }

            /* case song*/
        case searchType = 'song' || 'all': {

            const templateSong = `
<hr>
		<div class="data-item-wrapper" onclick="youTubeSearch()">
			<img src="${item.artworkUrl60}" alt="song pic">
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
			
			<div class="data-player">
				<audio src="${item.previewUrl}" controls></audio>
			</div>
			
		</div>	
	`

            return $(templateSong);

        }
        /* case Movie*/
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
		     <details id="movie-details">
		    <summary>Summary</summary>
		     ${item.longDescription}
                </details>
				<div  class="gener-title">
					${item.primaryGenreName}
				</div>
				<div class="artist-title">
					${item.artistName === 'Unknown' ? '' : item.artistName}
				</div>
			</div>
			
			<div class="data-player">
				<video src="${item.previewUrl}"  controls></video>
			</div>
			
		</div>	
	`
            return $(templateMovie);
            break;
        }
        /* case Podcast*/

        case searchType = 'podcast' || 'all': {
            console.log(item.kind)
            const templatePodcast = `
<hr>
		<div class="data-item-wrapper" >
			<img src="${item.artworkUrl100}"  alt="movie pic">
			<div class="data-fields">
				<div class="podcast-title" id="podcast-title" >
				<a class="podcast-a" href="${item.trackViewUrl}" target="_blank" >
				<span class="hovertext" data-hover="Apple Podcast">
					${item.trackName}
					</span>
					</a>
				</div>
		      <details id="podcast-details">
		     <summary>More Details</summary>
		      Release Date: ${item.releaseDate}
		      <br>
		      country: ${item.country}
                 </details>
				<div  class="gener-title">
					${item.genres}
				</div>
				<div class="artist-title">
					${item.artistName}
				</div>
			</div>
	`
            return $(templatePodcast);
            break;
        }
        case searchType = 'musicVideo' || 'all': {
            console.log(item.kind)
            const templateMusicVideo = `
<hr>
		<div class="data-item-wrapper" >
			<img src="${item.artworkUrl100}"  alt="music-video pic">
			<div class="data-fields">
				<div class="music-video-title" id="music-video-title" >
				<a class="music-video-a" href="${item.trackViewUrl}" target="_blank" >
				<span class="hovertext" data-hover="Apple Music">
					${item.trackName}
					</span>
					</a>
				</div>
		      <details id="music-video-details">
		     <summary>More Details</summary>
		      Release Date: ${item.releaseDate}
		      <br>
		      country: ${item.country}
		      <br>
		    
                 </details>
				
				<div class="artist-title">
					${item.artistName}
				</div>
			
			</div>
			
					<div class="data-player">
				<video src="${item.previewUrl}"  controls></video>
			</div>
	`
            return $(templateMusicVideo);
            break;
        }
        /*  @toDo continue with audiobook*/
        case searchType = 'audiobook' || 'all': {
            console.log(item.wrapperType)
            const templateAudiobook = `
<hr>
		<div class="data-item-wrapper" >
			<img src="${item.artworkUrl100}"  alt="audio-book pic">
			<div class="data-fields">
				<div class="audio-book-title" id="audio-book-title" >
				<a class="music-video-a" href="${item.trackViewUrl}" target="_blank" >
				<span class="hovertext" data-hover="Apple Music">
					${item.trackName}
					</span>
					</a>
				</div>
		      <details id="audio-book-details">
		     <summary>More Details</summary>
		      Release Date: ${item.releaseDate}
		      <br>
		      country: ${item.country}
		      <br>
		    
                 </details>
				
				<div class="artist-title">
					${item.artistName}
				</div>
			
			</div>
			
					<div class="data-player">
				<video src="${item.previewUrl}"  controls></video>
			</div>
	`
            return $(templateAudiobook);
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