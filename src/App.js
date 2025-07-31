import React, { useState } from 'react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState(1);
  const [activeTab, setActiveTab] = useState('menu');

  const categories = [
    { id: 'unstitched', name: 'Unstitched', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600' },
    { id: 'unstitched-to-stitched', name: 'Unstitched-To-Stitched', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600' },
    { id: 'ready-to-wear', name: 'Ready To Wear', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600' }
  ];

  const products = [
    { id: 1, name: 'Traditional Khussa', price: 2500, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400' },
    { id: 2, name: 'Leather Sandals', price: 3200, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400' },
    { id: 3, name: 'Embroidered Suit', price: 8500, image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500' },
    { id: 4, name: 'Cotton Kurta', price: 4500, image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500' }
  ];

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      maxWidth: '375px',
      margin: '0 auto',
      backgroundColor: 'white',
      minHeight: '100vh',
      position: 'relative'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: 'white',
        padding: '12px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #e5e5e5'
      }}>
        <div style={{fontSize: '14px', color: '#666', fontWeight: '500'}}>₨ PKR</div>
        <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
          <span style={{
            backgroundColor: '#6CB63F',
            color: 'white',
            padding: '6px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 'bold',
            letterSpacing: '-1px'
          }}>■■</span>
          <span style={{
            color: '#6CB63F',
            fontSize: '18px',
            fontWeight: 'bold',
            textTransform: 'lowercase'
          }}>ideas</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
          <span style={{fontSize: '18px', color: '#666', cursor: 'pointer'}}>🔍</span>
          <div style={{position: 'relative', fontSize: '18px', color: '#666', cursor: 'pointer'}}>
            🛍️
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              backgroundColor: '#ff4444',
              color: 'white',
              borderRadius: '50%',
              width: '18px',
              height: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: 'bold'
            }}>{cartItems}</span>
          </div>
        </div>
      </div>

      {/* Sale Section */}
      <div style={{backgroundColor: 'white', padding: '20px'}}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#333',
          marginBottom: '20px'
        }}>Sale On Fashion Accessories</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '15px'
        }}>
          {categories.map((category, index) => (
            <div 
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              style={{textAlign: 'center', cursor: 'pointer'}}
            >
              <div style={{
                width: '100%',
                aspectRatio: '3/4',
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '8px',
                position: 'relative',
                background: index === 0 ? 'linear-gradient(135deg, #e3f2fd, #bbdefb)' :
                           index === 1 ? 'linear-gradient(135deg, #ffebee, #ffcdd2)' :
                           'linear-gradient(135deg, #fff8e1, #ffecb3)'
              }}>
                <img style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }} src={category.image} alt={category.name} />
              </div>
              <span style={{
                fontSize: '12px',
                color: '#666',
                fontWeight: '500',
                lineHeight: '1.2'
              }}>{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Section */}
      <div style={{
        backgroundColor: 'white',
        padding: '16px 20px',
        borderTop: '1px solid #e5e5e5',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <span style={{fontSize: '16px', color: '#666'}}>≡</span>
          <span style={{fontSize: '14px', color: '#666'}}>Filters (533 Items)</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <span style={{fontSize: '12px', color: '#999'}}>Display</span>
          <div style={{display: 'flex', gap: '2px'}}>
            <button style={{
              backgroundColor: '#6CB63F',
              color: 'white',
              borderColor: '#6CB63F',
              border: '1px solid #6CB63F',
              padding: '4px 6px',
              fontSize: '10px',
              cursor: 'pointer'
            }}>■■</button>
            <button style={{
              backgroundColor: 'transparent',
              border: '1px solid #ddd',
              padding: '4px 6px',
              fontSize: '10px',
              color: '#666',
              cursor: 'pointer'
            }}>≡</button>
          </div>
          <span style={{fontSize: '14px', color: '#666'}}>↕</span>
          <span style={{fontSize: '14px', color: '#666'}}>Sort</span>
        </div>
      </div>

      {/* Products Grid */}
      <div style={{
        backgroundColor: '#f8f8f8',
        padding: '20px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '15px',
        paddingBottom: '80px'
      }}>
        {products.slice(0, 2).map(product => (
          <div key={product.id} style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer'
          }}
          onClick={addToCart}>
            <div style={{position: 'relative', aspectRatio: '1', overflow: 'hidden'}}>
              <img style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }} src={product.image} alt={product.name} />
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                backgroundColor: 'white',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                color: '#ccc',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                cursor: 'pointer'
              }}>♡</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div style={{
        position: 'fixed',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '375px',
        backgroundColor: 'white',
        borderTop: '1px solid #e5e5e5',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        padding: '12px 0'
      }}>
        <div 
          onClick={() => setActiveTab('menu')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            position: 'relative',
            cursor: 'pointer',
            color: activeTab === 'menu' ? '#6CB63F' : '#999'
          }}
        >
          <span style={{fontSize: '18px', color: activeTab === 'menu' ? '#6CB63F' : '#999'}}>≡</span>
          <span style={{fontSize: '11px', color: activeTab === 'menu' ? '#6CB63F' : '#999', fontWeight: '500'}}>Menu</span>
        </div>
        <div 
          onClick={() => setActiveTab('sale')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            position: 'relative',
            cursor: 'pointer'
          }}
        >
          <span style={{fontSize: '18px', color: activeTab === 'sale' ? '#6CB63F' : '#999'}}>🏷️</span>
          <span style={{fontSize: '11px', color: activeTab === 'sale' ? '#6CB63F' : '#999', fontWeight: '500'}}>Sale</span>
        </div>
        <div 
          onClick={() => setActiveTab('account')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            position: 'relative',
            cursor: 'pointer'
          }}
        >
          <span style={{fontSize: '18px', color: activeTab === 'account' ? '#6CB63F' : '#999'}}>👤</span>
          <span style={{fontSize: '11px', color: activeTab === 'account' ? '#6CB63F' : '#999', fontWeight: '500'}}>Account</span>
        </div>
        <div 
          onClick={() => setActiveTab('region')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            position: 'relative',
            cursor: 'pointer'
          }}
        >
          <span style={{fontSize: '18px', color: activeTab === 'region' ? '#6CB63F' : '#999'}}>🌐</span>
          <span style={{fontSize: '11px', color: activeTab === 'region' ? '#6CB63F' : '#999', fontWeight: '500'}}>Region</span>
          <div style={{
            position: 'absolute',
            top: '-2px',
            right: '15px',
            width: '6px',
            height: '6px',
            backgroundColor: '#6CB63F',
            borderRadius: '50%'
          }}></div>
        </div>
      </div>
    </div>
  );
}

export default App;