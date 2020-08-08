import React from 'react';
import './App.css';

function SearchResultsItem(props) {
    return (
        <li className="search-results-item">
            <div className="book__cover-and-price">
                <div className="book__cover">
                    <img src={props.coverImgUri} alt={props.title} />
                </div>
            </div>
            <div className="book__info">
                <hgroup>
                    <h3>{props.title}</h3>
                    <p><b>Author(s):</b> {props.author}</p>
                </hgroup>
                <p>{props.description}</p>
            </div>
        </li>
    );
}

export default SearchResultsItem;