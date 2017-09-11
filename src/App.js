import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './List';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src="https://www.mobiquityinc.com/hs-fs/hubfs/si-images/global/Mobiquity-Logo.png" className="" alt="logo" />
                    <br /><img src={logo} className="App-logo" alt="logo" />
                    <h2>Demo Project Based on React</h2>
                </div>
                <p className="App-intro">
                    Following you can find a list that shows the F1 world
                    champions starting from 2005 until 2015.<br />
                    The green color for each row indicate the winner for this year!
                </p>

                <List />  {/*Render list of year with the winner of the year*/}
            </div>
        );
    }
}

export default App;
