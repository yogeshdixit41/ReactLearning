import React from 'react';
import ReactDOM from 'react-dom';

//create react component
const App = function () {
    var styleVar = {backgroundColor:'grey', color:'white'};
    return (
        <div>
        <label className="label" htmlFor="name"> Enter Name:</label>
        <input type="text" id="name" />
        <button style={styleVar}>Submit</button>
      </div>

    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
