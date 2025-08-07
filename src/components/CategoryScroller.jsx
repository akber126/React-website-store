import React from "react";
import "./CategoryScroller.css";
const categories = [
  { name: "Unstitched", image: "/assets/unstitched.jpg" },
  { name: "unstitched to stitched", image: "/assets/newin1.jpg" },
  { name: "Ready TO Wear", image: "/assets/unstitched to stitched.jpg" },
  { name: "Man", image: "/assets/men.jpg" },
  {name: "Men's unstitched", image: "/assets/men unstitched clothes.jpg"},
  {name: "Salt", image:"/assets/Salt.jpg"},
  {name: "Home", image:"/assets/Home.jpg"},
  {name: "Fragrances", image:"/assets/Fragrances.jpg"},
  {name: "Shoes And Bags", image:"/assets/shoes and bags.jpg"},
  {name: "Kids", image:"/assets/Kids.jpg"},
];

const CategoryScroller = () => {
  return (
    <div className="category-scroller">
      {categories.map((cat, idx) => (
        <div className="category-item" key={idx}>
          <img src={cat.image} alt={cat.name} />
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryScroller;
