import React from 'react';
import styles from './SearchBar.module.css';

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
}

const SearchBar = () => {
  const renderSortOptions = () => {
    return Object.keys(sortByOptions).map(option => {
      let optionValue = sortByOptions[option];
      return <li key={optionValue}>{option}</li>
    });
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortOptions()}</ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input placeholder="Search Business" />
        <input placeholder="Where?" />
      </div>
      <div className={styles.SearchBarSubmit}>
        <button>Let's Go</button>
      </div>
    </div>
  );
};

export default SearchBar;