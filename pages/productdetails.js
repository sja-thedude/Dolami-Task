import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Header from './header';

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  const products = [
    { id: 1, name: 'Avatars > Human-like', creator: 'SJA', imagestar: '/images/stars.svg', rating: 5.0, price: 10.50, image: '/images/humanlike.svg' },
    { id: 2, name: 'Avatars > Anthro & Furry', creator: 'Dolami', imagestar: '/images/stars.svg', rating: 5.0, price: 10.50, image: '/images/anthrofurry.svg' },
    { id: 3, name: 'Avatars > Robot & Cyborgs', creator: 'Developer', imagestar: '/images/stars.svg', rating: 5.0, price: 10.50, image: '/images/robot.svg' },
    { id: 4, name: 'Fashion > Clothes', creator: 'Gamer', imagestar: '/images/stars.svg', rating: 5.0, price: 10.50, image: '/images/clothes.svg' },
    { id: 5, name: 'Fashion > Accessories', creator: 'Yuta', imagestar: '/images/stars.svg', rating: 5.0, price: 10.50, image: '/images/accessories.svg' },
  ];

  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div class="center">
      <Header/>
      <h1>{product.name}</h1>
      <p>Created by: {product.creator}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <p>
        <Image src={product.imagestar} alt="Star Rating" width={60} height={60} />
        {product.rating}
      </p>
      <Image src={product.image} alt={product.name} width={200} height={200} />
      <nav class="center">
        <ul>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            <Link href="/">Go Back</Link>
          </li>
        </ul>
      </nav >
    </div>
  );
}
