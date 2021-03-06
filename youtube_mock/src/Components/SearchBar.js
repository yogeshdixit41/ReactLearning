import React from 'react';

class SearchBar extends React.Component {
    state = {term : ''};

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onSubmit} className="ui form">
                    <div className="field">
                        <label> Video Search </label>
                        <input type="text"
                               value={this.state.term}
                               onChange = {e => this.setState({term:e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
