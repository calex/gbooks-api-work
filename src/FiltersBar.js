import React from 'react';
import './App.css';

class FiltersBar extends React.Component {
    render() {
        return (
            <div className="filters-bar">
                <div className="filter">
                    <label>
                        Free or Paid
                    </label>
                    <select>
                        <option value="free-ebooks">Free (e-book)</option>
                        <option value="paid-ebooks">Paid (e-book)</option>
                    </select>
                </div> 
                <div className="filter">
                    <label>
                        Media Type
                    </label>
                    <select>
                        <option value="all">All</option>
                        <option value="books">Books</option>
                        <option value="magazines">Magazines</option>
                    </select>
                </div> 
            </div>
        );
    }
  }
  
  export default FiltersBar;