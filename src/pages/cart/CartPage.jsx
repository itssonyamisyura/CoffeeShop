import CartItem from '../../components/CartItem';
import { Link } from 'react-router-dom';
import { CoffeeHero } from '../../components/CoffeeHero';
import { Footer } from '../../components/Footer';
import maskGroupBg from "../../assets/maskGroupBg.png";
import './CartPage.css';
import { useState } from 'react';

export const CartPage = ({cartItems, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, total, cartCount, undoClearCart}) => {

    const [showUndo, setShowUndo] = useState(false);
    

    return (
        <div className="cart-page">

            <CoffeeHero
            image={maskGroupBg}
            title="Your cart"
            cartCount={cartCount}
            />

            <section className="cart-content">
                <h1>Cart</h1>

                {cartItems.length > 0 && (
                    <p>Items in cart: {cartItems.length}</p>
                )}

                {showUndo && (
                    <div className="cart-undo">
                        <span>Cart cleared.</span>

                        <button onClick={() => {
                        undoClearCart();
                        setShowUndo(false);
                        }}>
                            Undo
                        </button>
                    </div>
                )}

                {cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <h2>Your cart is empty</h2>
                        <Link to="/coffee" className="cart-empty__btn">
                            Browse coffee
                        </Link>
                    </div>
                ) : (
                    <div className="cart-layout">
                        <div className="cart-items">
                            {cartItems.map((item) => (
                            <CartItem 
                                key={item.id} 
                                item={item}
                                onDecrease={() => decreaseQuantity(item.id)}
                                onIncrease={() => increaseQuantity(item.id)} 
                                removeFromCart={removeFromCart}/> 
                            ))}
                        </div>
                        <div className="cart-summary">
                            <h2>Total: ${total.toFixed(2)}</h2>

                            <div className="cart-summary__actions">
                                <Link 
                                    to='/coffee'
                                    className="cart-summary__link">Continue Shopping</Link>
                                {cartItems.length > 0 && (
                                    <button onClick={() => {
                                        clearCart();
                                        setShowUndo(true);

                                        setTimeout(() => {
                                            setShowUndo(false);
                                        }, 5000);
                                    }}>
                                        Clear Cart
                                    </button>
                                )}
                                <button className="cart-summary__checkout-btn"
                                disabled={cartItems.length === 0}>
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                    )}
                </section>
            <Footer />
        </div>
    );
};

// parseFloat - Превращает строку в число
// toFixed(2) - Делает красивый формат цены 17.4 → 17.40


