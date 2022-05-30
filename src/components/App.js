import React from "react";
import SearchBar from "./SearchBar";
import axios from 'axios';

class App extends React.Component {
    state = {images: []}

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            headers: {
                Authorization: 'Client-ID 5c34t4jdyYj75Q5SiR-XEB_RvDEQQXvb0GUoAcXeGFw'
            },
            params: {query: term}
        });

        this.setState({images: response.data.results})
        this.state.images.map((elem) => {})
    }

    render () {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        )
    }
}

export default App
