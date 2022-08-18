import React, { Component } from 'react';
// import logo from './logo.svg';
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes'
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;