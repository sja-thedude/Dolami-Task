import Link from 'next/link';
import Image from 'next/image';
import Header from './header';

export default function Home() {
  // State for handling the dropdown visibility

  // Array of product data with images and details
  const products = [
    { id: 1, name: 'Product name', creator: 'Creator name', imagestar: '/images/stars.svg', rating: 5.0, price: 10.50, image: '/images/humanlike.svg' },
    { id: 2, name: 'Product name', creator: 'Creator name', imagestar: '/images/stars.svg', rating: 5.0, price: 10.50, image: '/images/anthrofurry.svg' },
    { id: 3, name: 'Product name', creator: 'Creator name', imagestar: '/images/stars.svg', rating: 5.0, price: 10.50, image: '/images/robot.svg' },
    { id: 4, name: 'Product name', creator: 'Creator name', imagestar: '/images/stars.svg', rating: 5.0, price: 10.50, image: '/images/clothes.svg' },
    { id: 5, name: 'Product name', creator: 'Creator name', imagestar: '/images/stars.svg', rating: 5.0, price: 10.50, image: '/images/accessories.svg' },
  ];

  // Function to render main content 3 times in 3 rows
  const renderMainContent = () => {
    return Array.from({ length: 3 }).map((_, rowIndex) => (
      <div key={rowIndex} className="row">
        {products.map((product) => (
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

  return (
    <div>
      <Header/>
      <main>
        {/* Render main content 3 times */}
        {renderMainContent()}
      </main>
    </div>
  );
}
