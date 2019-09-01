import React from 'react';
import './App.css';
import store from './redux/store'
import {Provider} from 'react-redux';
import HomePage from "./pages/HomePage/HomePage";


function App() {

    return (
        <Provider store={store}>
            <HomePage>

            </HomePage>
        </Provider>
    );
}

export default App;
