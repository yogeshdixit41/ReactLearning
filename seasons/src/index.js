import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lat:null};
        console.log('con');
    }

    componentDidMount() {
        console.log('did mount');
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),
            error => this.setState({errorMessage:error.message})
        );
    }

    //React's requirement for class component
    render() {
            if (this.state.errorMessage && !this.state.lat) {
                return <div>Error: {this.state.errorMessage}</div>
            }

            if (!this.state.errorMessage && this.state.lat) {
                return <SeasonDisplay lat={this.state.lat}/>
                //return <SeasonDisplay> {this.state.lat} </SeasonDisplay>
                //return <div>Latitude: {this.state.lat}</div>
            }

            if (!this.state.errorMessage && !this.state.lat) {
                return <Spinner message='Content loading, please wait !!!'/>
            }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
