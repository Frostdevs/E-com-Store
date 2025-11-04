import React from 'react'
import "./Search.css"

const Search = ({ noMargin }) => {
  return (
    <div>
        <div className="search-bar" id="search-section" style={{ marginBottom: noMargin ? 0 : 95.41 }}>
          <input type="text" placeholder="Search query..." />
          <button>Search</button>
        </div>
    </div>
  )
}

export default Search