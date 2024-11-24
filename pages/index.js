import Link from 'next/link';
import Image from 'next/image';
import Header from './header';
import { useState } from 'react';

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products

  const products = [
    { id: 1, name: 'Avatars > Human-like', creator: 'Creator name', imagestar: '/images/stars.svg', rating: 5.0, price: 10.50, image: '/images/humanlike.svg' },
    { id: 2, name: 'Avatars > Anthro & Furry', creator: 'Creator name', imagestar: '/images/stars.svg', rating: 5.0, price: 10.50, image: '/images/anthrofurry.svg' },
    { id: 3, name: 'Avatars > Robot & Cyborgs', creator: 'Creator name', imagestar: '/images/stars.svg', rating: 5.0, price: 10.50, image: '/images/robot.svg' },
    { id: 4, name: 'Fashion > Clothes', creator: 'Creator name', imagestar: '/images/stars.svg', rating: 5.0, price: 10.50, image: '/images/clothes.svg' },
    { id: 5, name: 'Fashion > Accessories', creator: 'Creator name', imagestar: '/images/stars.svg', rating: 5.0, price: 10.50, image: '/images/accessories.svg' },
  ];

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
      <Header onSearch={handleSearch} />
      <main>
        {/* Render main content 3 times */}
        {renderMainContent()}
      </main>
    </div>
  );
}
