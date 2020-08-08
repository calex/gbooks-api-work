import React from 'react';
import './App.css';

class FiltersBar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            freeOrPaidSelectValue: '',
            mediaTypeSelectValue: '',
            freeOrPaidSelectItems: [
                { text: 'free-ebooks' },
                { text: 'paid-ebooks'  }
            ],
            mediaTypeSelectItems: [
                { text: 'all' },
                { text: 'books' },
                { text: 'magazines' }
            ]
        };
    }

    freeOrPaidSelectValueChanged = (e) => {
        this.setState({freeOrPaidSelectValue: e.target.value}, () => {
            this.props.handleRetrieveFreeOrPaidFilterValue(this.state.freeOrPaidSelectValue);
        });
    }

    mediaTypeSelectValueChanged = (e) => {
        this.setState({mediaTypeSelectValue: e.target.value}, () => {
            this.props.handleRetrieveMediaTypeValue(this.state.mediaTypeSelectValue);
        });
    }

    render() {
        return (
            <div className="filters-bar">
                <div className="filter">
                    <label>
                        Free or Paid
                    </label>
                    <select onChange={e => this.freeOrPaidSelectValueChanged(e)}>
                        {this.state.freeOrPaidSelectItems.map((item, i) => (
                            <option key={i} value={item.text}>{item.text}</option>
                        ))}
                    </select>
                </div> 
                <div className="filter">
                    <label>
                        Media Type
                    </label>
                    <select onChange={e => this.mediaTypeSelectValueChanged(e)}>
                        {this.state.mediaTypeSelectItems.map((item, i) => (
                            <option key={i} value={item.text}>{item.text}</option>
                        ))}
                    </select>
                </div> 
            </div>
        );
    }
}
  
export default FiltersBar;