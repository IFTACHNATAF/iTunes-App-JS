let
    $result_list,
    $search_term_input,
    $type_select_el;


function onBodyLoad()
{
    console.log('on body load running..');
    $result_list       = $('#result-list');
    $search_term_input = $('#search-box');
    $type_select_el    = $('#type-select');
}

export {
    onBodyLoad,
    $result_list,
    $search_term_input,
    $type_select_el
}