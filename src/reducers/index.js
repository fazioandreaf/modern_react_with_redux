import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No scrubs', duration: '4:05'},
        { title: 'Macarena', duration: '3:05'},
        { title: 'All Stars', duration: '2:05'},
        { title: 'I Want it that way', duration: '1:05'}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSongs: selectedSongReducer
})
