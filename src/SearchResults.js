import React from 'react';
import './App.css';

import SearchResultsItem from './SearchResultsItem';

function SearchResults(props) {
    const searchResultItems = props.searchResults.map((book, index) => {
        const bookHash = book + '-' + index;
    
        return (
            <SearchResultsItem key={bookHash} title={book.volumeInfo.title} author={book.volumeInfo.authors} coverImgUri={book.volumeInfo.imageLinks.thumbnail} description={book.volumeInfo.description} />
        );
    });

    return (
        <ul className="search-list">
            {searchResultItems}
        </ul>
    );
  }
  
  export default SearchResults;