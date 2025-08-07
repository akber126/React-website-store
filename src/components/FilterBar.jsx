import React from 'react';
import './FilterBar.css';

function FilterBar({ selectedCategory, setSelectedCategory }) {
  const categories = ['All', 'Pret', 'Unstitched', 'Accessories', 'Shoes' , 'New In'];

  return (
    <div className="filter-bar">
      <label htmlFor="categoryFilter">Filter</label>
      <select
        id="categoryFilter"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterBar;
