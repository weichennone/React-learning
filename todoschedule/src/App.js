import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Taskdisplayer from './containers/TaskDisplayer/TaskDisplayer';

function App() {
  return (
    <div className="App">
      <Layout>
        <Taskdisplayer />
      </Layout>
    </div>
  );
}

export default App;
