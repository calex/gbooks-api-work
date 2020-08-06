import React from 'react';
import './App.css';

import Header from './Header.js';
import SearchBar from './SearchBar.js';
import FiltersBar from './FiltersBar.js';
import SearchResults from './SearchResults.js';

import config from './config.js'; //this file is not committed to git to keep API key safe

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      searchResults: [],
      showSearchResults: false 
    };
  }

  handleRetrieveFromAPI = (e, inputtedSearch) => {
    e.preventDefault();

    const url = `https://www.googleapis.com/books/v1/volumes?q=${inputtedSearch}&download=epub&key=${config.apiKey}`;
    
    const options = {
      method: 'GET'
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(data.items);

        this.setState({
          searchResults: data.items,
          showSearchResults: !!data.items.length
        });
      })
      .catch(err => {
        console.log('err: ', err);
      })
  }

  render() {

    const lowerPageElement = this.state.showSearchResults ? 
      <SearchResults searchResults={this.state.searchResults} /> : <p>Sorry! We have no search results.</p>;

    return (
      <div className="App">
        <Header appTitle="Google Books Search" />
        <SearchBar handleRetrieveSearchResults={this.handleRetrieveFromAPI} />
        <FiltersBar />
        {lowerPageElement}
      </div>
    );
  }
}

export default App;
