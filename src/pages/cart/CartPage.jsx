import CartItem from '../../components/CartItem';
import { Link } from 'react-router-dom';

export const CartPage = ({cartItems, removeFromCart, increaseQuantity, decreaseQuantity, clearCart}) => {

    const total = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return sum + price * item.quantity;
    }, 0); 

    return (
        <section className="cart-page">
            <h1>Cart</h1>
            <p>Items in cart: {cartItems.length}</p>

            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <CartItem 
                            key={item.id} 
                            item={item}
                            decreaseQuantity={decreaseQuantity}
                            increaseQuantity={increaseQuantity} 
                            removeFromCart={removeFromCart}/> 
                        ))}
                    <h2>Total: ${total.toFixed(2)}</h2>
                    <Link to='/coffee'>Continue Shopping</Link>
                    {cartItems.length > 0 && (
                        <button onClick={clearCart}>
                            Clear Cart
                        </button>
                    )}
                </div>
            )}
        </section>
    );
};

// parseFloat - Превращает строку в число
// toFixed(2) - Делает красивый формат цены 17.4 → 17.40


