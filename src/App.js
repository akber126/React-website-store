import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import CategoryScroller from './components/CategoryScroller';
import FilterBar from './components/FilterBar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import CartSideBar from './components/CartSideBar';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState([]);

  // Sample product list
  const products = [
    {
      id: 1,
      title: 'Unstitched Lawn Shirt',
      price: 1990,
      disount: 30,
      category: 'Unstitched',
      image: '/assets/unstitched.jpg',
    },
    {
      id: 2,
      title: 'Ready to Wear Kurti',
      price: 2990,
      discount: 20,
      category: 'Pret',
      image: '/assets/readywear.jpg',
    },
    {
      id: 3,
      title: 'Leather Handbag',
      price: 3490,
      discount: 20,
      category: 'Accessories',
      image: '/assets/handbag.jpg',
    },
    {
      id: 4,
      title: 'Summer Sandals',
      price: 3990,
      discount: 20,
      category: 'Shoes',
      image: '/assets/summer sandals.jpg',
    },
    {
      id: 5,
      title: 'Women Clothes',
      price: 5600,
      category: 'ladies clothes',
      image: '/assets/women.jpg',
    },
    {
      id: 6,
      title: 'Woven Mules',
      price: 7000,
      category: 'Shoes',
      image: '/assets/woven mules.jpg',
    },
    {
      id: 7,
      title: 'Men Kurta',
      price: 8990,
      category: 'men kurta',
      image: '/assets/men kurta.jpg',
    },
    {
      id: 8,
      title: 'women Kurta',
      price: 7990,
      category: 'women kurta',
      image: '/assets/women kurta.jpg',
    },
    {
      id: 9,
      title: 'women Silk',
      price: 44000,
      category: 'Silk clothes',
      image: '/assets/women silk clothes.jpg',
    },
    {
      id: 10,
      title: 'women lawn',
      price: 4550,
      category: 'women lawn',
      image: '/assets/women lawn suit.jpg',
    },
    {
      id: 11,
      title: 'Kid clothes',
      price: 1856,
      category: 'kid clothes',
      image: '/assets/kid clothes.jpg',
    },
    {
      id: 12,
      title: 'Fragrances',
      price: 10000,
      category: 'fragrance',
      image: '/assets/Fragrances Perfume.jpg',
    },
    {
      id: 13,
      title: 'Sandals',
      price: 5000,
      category: 'Shoes',
      image: '/assets/beaded sandals.jpg',
    },
    {
      id: 13,
      title: 'Classic leather khussa',
      price: 11450,
      category: 'Shoes',
      image: '/assets/Classic leather khussa.jpg',
    },
    {
      id: 14,
      title: 'Women Unstitched Clothes',
      price: 5450,
      category: 'Unstitched Clothes',
      image: '/assets/Women Unstitched.jpg',
    },
    {
      id: 15,
      title: 'Women Stitched Clothes',
      price: 4999,
      category: 'Women Stitched Clothes',
      image: '/assets/Women Stitched.jpg',
    },
    {
      id: 16,
      title: 'Elegant Khussa',
      price: 2999,
      category: 'Shoes',
      image: '/assets/elegant khussa.jpg',
    },
    {
      id: 17,
      title: 'Women Salt',
      price: 6000,
      category: 'Women Salt',
      image: '/assets/Women Salt.jpg',
    },
    {
      id: 18,
      title: 'Azadi Sale',
      price: 8000,
      category: 'Azadi Sale',
      image: '/assets/Azadi Sale.jpeg',
    },
    {
      id: 19,
      title: 'Azadi Sale',
      price: 3450,
      category: 'Azadi Clothes',
      image: '/assets/Sapphire Azadi Sale.jpg',
    },
    {
      id: 20,
      title: 'Fragrances',
      price: 10000,
      category: 'Fragrances',
      image: '/assets/Perfume.jpg',
    },
    {
      id: 21,
      title: 'New In',
      price: 7867,
      category: 'New Arrivals',
      image: '/assets/New Arrival.jpg',
    },
    {
      id: 22,
      title: 'New In',
      price: 2368,
      category: 'Shoes',
      image: '/assets/New Arrival Shoes.jpg',
    },
    {
      id: 23,
      title: 'Kids',
      price: 4000,
      category: 'Shoes',
      image: '/assets/Kids Shoes.jpg',
    },

  ];

  const discountedProducts = products.map((product) => {
    const discount = 34; // fixed discount %
    const oldPrice = product.price;
    const discountedPrice = Math.round(oldPrice * (1 - discount / 100));

    return {
      ...product,
      oldPrice,
      price: discountedPrice,
      discount,
    };
  });


  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const [showCart, setShowCart] = useState(false);

  const handleCloseCart = () => {
    setShowCart(false);
  };



  const handleIncrement = (product) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrement = (product) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productToRemove) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productToRemove.id));
  };




  return (
    <div className="App">
      <Header onCartClick={() => setShowCart(true)} cartItems={cartItems} />

      <main>
        <div className="page-title">
          <h1 class="page-title">Sale</h1>
        </div>
        <CategoryScroller selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory} />
        <FilterBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <ProductGrid
          products={discountedProducts}
          selectedCategory={selectedCategory}
          onAddToCart={handleAddToCart} />
      </main>
      {showCart && (
        <CartSideBar
          cartItems={cartItems}
          onRemove={handleRemoveFromCart}
          onClose={handleCloseCart}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      )}
      {cartItems.length > 0 && (
        <div className="mobile-cart-bar" onClick={() => setShowCart(true)}>
          <span className="cart-bar-text">View Cart</span>
          <span className="cart-bar-count">{cartItems.length} item(s)</span>
        </div>
      )}


      <Footer />
    </div>
  );
}

export default App;
