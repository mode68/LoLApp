import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import SummonerDetails from './Components/SummonerDetails/SummonerDetails';

function App() {
  return (
    <div className="App">
      <Layout>
        <SummonerDetails />
      </Layout>
    </div>
  );
}

export default App;
