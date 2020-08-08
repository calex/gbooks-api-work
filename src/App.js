import React from 'react';
import './App.css';
import config from './config.js'; //this file is not committed to git to keep API key safe
import FiltersBar from './FiltersBar.js';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
import SearchResults from './SearchResults.js';



class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      searchResults: [],
      showSearchResults: false,
      noResultsSearchMessage: 'Search for something!',
      selectedFreeOrPaidValue: 'free-ebooks',
      selectedMediaTypeValue: 'all'
    };
  }

  handleFreeOrPaidFilterSelection = (currentlySelectedValue) => {
    this.setState({
      selectedFreeOrPaidValue: currentlySelectedValue
    });
  }

  handleMediaTypeSelection = (currentlySelectedValue) => {
    this.setState({
      selectedMediaTypeValue: currentlySelectedValue
    });
  }

  handleRetrieveFromAPI = (e, inputtedSearch) => {
    e.preventDefault();

    if (inputtedSearch) {

      const parameterizedInputSearch =  inputtedSearch.replace(/\s/g, '+');

      const url = `https://www.googleapis.com/books/v1/volumes?q=${parameterizedInputSearch}&printType=${this.state.selectedMediaTypeValue}&filter=${this.state.selectedFreeOrPaidValue}&download=epub&key=${config.apiKey}`;
      
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
          this.setState({
            searchResults: data.items,
            showSearchResults: data.totalItems > 0,//data.items && !!data.items.length,
            noResultsSearchMessage: `Sorry, we couldn't find anything when searching for ‘${inputtedSearch}’.`
          });
        })
        .catch(err => {
          console.log('err: ', err);
          this.setState({
            showSearchResults: false,
            noResultsSearchMessage: `Sorry, something went wrong with our search. We ran into an error: ${err}`
          });
        })
    } else {
      this.setState({
        showSearchResults: false,
        noResultsSearchMessage: "Looks like you didn't type anything in!"
      });
    }
  }

  render() {
    const lowerPageElement = this.state.showSearchResults ? 
      <SearchResults searchResults={this.state.searchResults} /> : 
      <div className="no-results-msg">
        <p>{this.state.noResultsSearchMessage}</p>
      </div>;

    return (
      <div className="App">
        <Header appTitle="Google Books Search" />
        <SearchBar handleRetrieveSearchResults={this.handleRetrieveFromAPI} />
        <FiltersBar 
          handleRetrieveFreeOrPaidFilterValue={this.handleFreeOrPaidFilterSelection}
          handleRetrieveMediaTypeValue={this.handleMediaTypeSelection}
         />
        {lowerPageElement}
      </div>
    );
  }
}

export default App;
