// import logo from './logo.svg';
import styles from './App.css';
import React from "react";

import BusinessList from "./BusinessList";
import SearchBar from './SearchBar';

function App() {
  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
