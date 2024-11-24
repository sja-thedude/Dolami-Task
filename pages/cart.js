import Link from 'next/link';
import Header from './header';

export default function Cart() {
  // Sample cart data, can be extended to store products added to cart
  const cartItems = [
    { id: 1, name: 'Product name', price: 10.50, quantity: 1 },
  ];

  return (
      <div class="center">
          <Header/>
      <h1 class="center">Your Cart</h1>
      {cartItems.map((item) => (
        <div class="center" key={item.id}>
          <p>{item.name}</p>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      <Link href="/checkout">Proceed to Checkout</Link>
    </div>
  );
}
