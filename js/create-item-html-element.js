

function createItemHtmlElement(item,searchType) //encapsulation
{
    switch(item.kind && searchType) {

        case searchType = 'song' || 'all': {

            // Reusable component
            const template = `
<hr>
		<div class="song-item-wrapper" onclick="youTubeSearch()">
			<img src="${item.artworkUrl60}" height="60" alt="song pic">
			<div class="song-fields">
		     <p class="direction" id="youtube-p-title"> <span style="color: red">click the </span><span style="color: black">Title</span> </p>
				<div class="song-title" id="song-title">
					${item.trackName}
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
            //		<button class="youtube" id="youtube"  ><span style="color: red" data-text="You">You</span><span style="color: black" data-text="Tube">Tube</span> <br> Search</button>
            return $(template);

        }

        case searchType = 'movie' || 'all': {
            console.log(item.kind)
            const template2 = `
<hr>
		<div class="song-item-wrapper" onclick="youTubeSearch()">
			<img src="${item.artworkUrl100}" height="250" width="150" alt="movie pic">
			<div class="song-fields">
		     <p class="direction" id="movie-Description"> ${item.longDescription} </p>
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
				<video src="${item.previewUrl}" height="350" width="550" controls></video>
			</div>
			
		</div>	
	`
            return $(template2);
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