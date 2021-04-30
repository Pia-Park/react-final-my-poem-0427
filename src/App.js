import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import InputSection from './components/InputSection';
import NotesSection from './components/NotesSection';

import firebase from './firebase/firebase'

import './App.scss';
// import './bg.jpg';

function App() {

  // firebase.firestore().collection('poems').add({title:"dddd"});


  return (
    <Provider store={store}>
      <div className="container">
        <h1>My Poem</h1>
        <InputSection />
        <div className="line"></div>
        <NotesSection />
      </div>
    </Provider>    
  );
}

export default App;