import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
