





function onButtonClicked()
{
	$result_list.empty()
	// $result_list.innerHTML = '';
	const
		search_term        = $search_term_input.val(),
		searchType         = $type_select_el.val();

	fetch(`https://itunes.apple.com/search?term=${search_term}${searchType === 'all' ? '' : '&entity=' + searchType}`)
		.then(response => {
			response
				.json()
				.then(data => {
					const items = data
						.results
						.filter(item => !!item.kind);
					for (let item of items)
					{
						const element = createItemHtmlElement(item);
						$result_list.append(element);
					}
				})
		}).catch(e=> console.log('error', e.message))

}

function youTubeSearch() {
	const search_term = $search_term_input.val();

	const songName = document.querySelectorAll("#song-title");

	for (let i = 0; i < songName.length; i++) {
// console.log(songName)
		songName[i].onclick = function () {
			open(`https://www.youtube.com/results?search_query=${this.innerText}+${search_term}`)

		}
	}

}

//
// function youTubeSearch() {
// 	const search_term = $search_term_input.val();
//
// 	const songName = document.getElementById('song-title');
// 	const btn = document.getElementById('youtube')
//
// 	console.log(songName.innerText)
// 	btn.onclick = open(`https://www.youtube.com/results?search_query=${songName.innerText}+${search_term}`)
// // 	for (let i = 0; i < songName.length; i++) {
// // // console.log(songName)
// // console.log(songName[i])
// //
// // 		}
//
//
// }

