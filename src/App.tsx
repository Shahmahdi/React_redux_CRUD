import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './component/Posts';
import PostForm from './component/PostForm';
import { Provider } from 'react-redux';
import { store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
