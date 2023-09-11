import React, { Component } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import ImageList from "./ImageList";

export default class App extends Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (term) => {
    // console.log(term);
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID mPYqmd4biczEVLv95DjnyK0rJHzhTZRNcCm12hfEECA",
      },
    });
    this.setState({
      images: response.data.results,
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchForm onSubmit={this.onSearchSubmit} />
        {/* {this.state.images.length} */}
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}
