import React, {component} from 'react';
import './App.css';

import SearchResultsItem from './SearchResultsItem';

class SearchResults extends React.Component {
    render() {
        const searchResultItems = this.props.searchResults.map((book, index) => {
            const bookHash = book + '-' + index;
      
            return (
                <SearchResultsItem key={bookHash} title={book.volumeInfo.title} author={book.volumeInfo.authors} coverImgUri={book.volumeInfo.imageLinks.thumbnail} priceTotal="$20" description={book.volumeInfo.description} />
            );
        });

        return (
            <ul>
                {searchResultItems}
            </ul>
        );
    }
  }
  
  export default SearchResults;