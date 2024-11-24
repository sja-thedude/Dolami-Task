import Link from 'next/link';
import Image from 'next/image';
import Header from './header';
import { useState } from 'react';

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
  const [selectedCategory, setSelectedCategory] = useState("Category All");

  const products = [
    { id: 1, name: 'Avatars > Human-like', creator: 'SJA', imagestar: '/images/stars.svg', rating: 5.0, price: 10.50, image: '/images/humanlike.svg', category: 'Avatars > Human-like' },
    { id: 2, name: 'Avatars > Anthro & Furry', creator: 'Dolami', imagestar: '/images/stars.svg', rating: 5.0, price: 10.50, image: '/images/anthrofurry.svg', category: 'Avatars > Anthro & Furry' },
    { id: 3, name: 'Avatars > Robot & Cyborgs', creator: 'Developer', imagestar: '/images/stars.svg', rating: 5.0, price: 10.50, image: '/images/robot.svg', category: 'Avatars > Robot & Cyborgs' },
    { id: 4, name: 'Fashion > Clothes', creator: 'Gamer', imagestar: '/images/stars.svg', rating: 5.0, price: 10.50, image: '/images/clothes.svg', category: 'Fashion > Clothes' },
    { id: 5, name: 'Fashion > Accessories', creator: 'Yuta', imagestar: '/images/stars.svg', rating: 5.0, price: 10.50, image: '/images/accessories.svg', category: 'Fashion > Accessories' },
  ];

  // Function to filter products by category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "Category All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  // Function to render main content 3 times in 3 rows
  const renderMainContent = () => {
    const productsToRender = filteredProducts.length > 0 ? filteredProducts : products;
    if (productsToRender.length === 0) {
      return <div>No products found.</div>; // Show message if no products match the search
    }
    return Array.from({ length: 3 }).map((_, rowIndex) => (
      <div key={rowIndex} className="row">
        {productsToRender.map((product) => (
          <Link key={product.id} href={`/productdetails?id=${product.id}`} passHref>
            <div className="card">
              <Image src={product.image} alt={product.name} width={300} height={300} />
              <h5>{product.name}</h5>
              <p>{product.creator}</p>
              <p>
                <Image src={product.imagestar} alt="Rating Stars" width={60} height={60} />
                {product.rating.toFixed(1)}
              </p>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    ));
  };

  // Handle search functionality
  const handleSearch = (query) => {
    const normalizedQuery = query.trim().toLowerCase();

    const filtered = products.filter((product) =>
      product.name.trim().toLowerCase().includes(normalizedQuery) // Normalize product names
    );

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Header onSearch={handleSearch} onCategoryChange={handleCategoryChange} />
      <main>
        {/* Render main content 3 times */}
        {renderMainContent()}
      </main>
    </div>
  );
}
