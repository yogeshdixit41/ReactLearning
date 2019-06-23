import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit = (searchTerm) => {
        console.log("request for: " + searchTerm);
    }

    render() {
        return(
            <div>
                <div className="ui container" style={{marginTop:'10px'}}>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                </div>
            </div>
        );
    }
}

export default App;
