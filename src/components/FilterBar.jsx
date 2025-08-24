import React from "react";
import "./FilterBar.css";

const FilterBar = ({ onSortChange }) => {
  const handleSortChange = (e) => {
    onSortChange && onSortChange(e.target.value);
  };

  return (
    <div className="filter-bar">
      {/* Left - Filters */}
      <div className="filter-left">
        <span className="filter-link" role="button" tabIndex={0}>
          Filters
        </span>
        <img src="../assets/filtericon.png" alt="Refine" className="filter-img" />
      </div>

      {/* Right - Display + Sort */}
      <div className="filter-right">
        {/* Display + Icons */}
        <div className="display-section">
          <span className="display-label">Display</span>

          {/* 1) Solid grid (green) */}
          <svg
            className="display-icon"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="8" height="8" fill="#8fce00" stroke="#8fce00" />
            <rect x="13" y="3" width="8" height="8" fill="#8fce00" stroke="#8fce00" />
            <rect x="3" y="13" width="8" height="8" fill="#8fce00" stroke="#8fce00" />
            <rect x="13" y="13" width="8" height="8" fill="#8fce00" stroke="#8fce00" />
          </svg>

                    {/* 2) 3 vertical bars (chunkier + spaced) */}
          <svg
            className="display-icon"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <rect x="2" y="4" width="5" height="16" fill="#fff" stroke="#8fce00" strokeWidth="1" />
            <rect x="10" y="4" width="5" height="16" fill="#fff" stroke="#8fce00" strokeWidth="1" />
            <rect x="18" y="4" width="5" height="16" fill="#fff" stroke="#8fce00" strokeWidth="1" />
          </svg>

          {/* 3) 2 vertical bars (chunkier + spaced) */}
          <svg
            className="display-icon"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <rect x="4" y="4" width="6" height="16" fill="#fff" stroke="#8fce00" strokeWidth="1" />
            <rect x="14" y="4" width="6" height="16" fill="#fff" stroke="#8fce00" strokeWidth="1" />
          </svg>


        </div>

        {/* Best Selling dropdown */}
        <div className="sort-section">
          <select className="sort-dropdown" onChange={handleSortChange} defaultValue="best">
            <option value="best">Best Selling</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
