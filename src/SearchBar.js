import React from 'react';
import './App.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          searchInputValue: ''
        };
    }

    searchValueChanged(inputtedText) {
        this.setState({
            searchInputValue: inputtedText
        });
    }

    render() {
        return (
            <form className="search-bar">
                <label>Search:</label>
                <input 
                    placeholder="Type Something" 
                    onChange={e => this.searchValueChanged(e.target.value)} 
                    value={this.state.searchInputValue} />
                <button onClick={e => this.props.handleRetrieveSearchResults(e, this.state.searchInputValue)}>
                    Search
                </button>
            </form>
        );
    }
  }
  
  export default SearchBar;