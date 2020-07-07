import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <button type="button" className="search-bar__place" value="Paris"></button>
      <button type="button" className="search-bar__dates"></button>
      <button type="button" className="search-bar__guests" value="1"></button>
    </div>
  );
}

export default SearchBar;
