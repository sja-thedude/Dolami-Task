import Header from './header';

export default function Checkout() {
    return (
        <div class="center">
            <Header/>
      <h1 class="center">Checkout</h1>
      <form>
        <div class="center">
          <label>
            Card Number:  
            <input type="text" placeholder=" Enter card number" />
          </label>
        </div>
        <div class="center">
          <label>
            Expiry Date:
            <input type="text" placeholder="MM/YY" />
          </label>
        </div>
        <div class="center">
          <label>
            CVV:
            <input type="text" placeholder="CVV" />
          </label>
        </div>
        <div class="center">
          <button type="submit">Pay with Card</button>
        </div>
        <div class="center">
          <button type="button">Pay with Apple Pay</button>
        </div>
      </form>
    </div>
  );
}
