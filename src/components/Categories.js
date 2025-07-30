import React from 'react'

export default function Categories() {
  return (
    <section className="categories">
      <div className="category-card">
        <img src="/assets/men.jpg" alt="Men" />
        <h3>Men</h3>
      </div>
      <div className="category-card">
        <img src="/assets/women.jpg" alt="Women" />
        <h3>Women</h3>
      </div>
      <div className="category-card">
        <img src="/assets/accessories.jpg" alt="Accessories" />
        <h3>Accessories</h3>
      </div>
    </section>
  )
}
