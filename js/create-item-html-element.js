

function createItemHtmlElement(item,searchType) //encapsulation
{
    switch(item.kind && searchType) {
        case searchType = 'all' ||!'': {

            // Reusable component
            const templateAll = `
           <h1> hello</h1>
            `

            return $(templateAll);

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
			<img src="${item.artworkUrl100}" height="250" width="150" alt="movie pic">
			<div class="data-fields">
		     <p class="direction" id="movie-Description" > ${item.longDescription} </p>
				<div class="movie-title" id="movie-title" >
				<span class="hovertext" data-hover="Imdb Search">
					${item.trackName}
					</span>
				</div>
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
            return $(templateMovie);
            break;
        } /* @ toDO continue the search types from here*/
        case searchType = 'Podcast' || 'all': {
            console.log(item.kind)
            const template2 = `
<hr>
		<div class="song-item-wrapper" onclick="youTubeSearch()">
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
            return $(template2);
            break;
        }

    }

}

export {createItemHtmlElement}