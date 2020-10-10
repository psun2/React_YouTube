import React, { useRef } from 'react';
import { memo } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();

  const handelSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
    onSearch(value.trim());
  };
  const onClick = () => {
    // console.log('onClick');
    handelSearch();
  };

  const onKeyPress = (event) => {
    // console.log('onKeyPress');
    if (event.key === 'Enter') handelSearch();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="./images/logo.png" alt="logo" />
        <h1 className={styles.title}>YouTube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="search"
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="./images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
});

export default SearchHeader;
