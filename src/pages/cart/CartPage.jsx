import CartItem from '../../components/CartItem';
import { Link } from 'react-router-dom';
import { CoffeeHero } from '../../components/CoffeeHero';
import { Footer } from '../../components/Footer';
import maskGroupBg from "../../assets/maskGroupBg.png";
import './CartPage.css';
import { useState, useEffect } from 'react';
import { products } from '../../data/Products';

export const CartPage = ({cartItems, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, total, cartCount, undoClearCart}) => {

    const [undoCountdown, setUndoCountdown] = useState(null);

    useEffect(() => {
        if (undoCountdown === null) return;

        const timer = setTimeout(() => {
            setUndoCountdown((prev) => {
                if (prev === null) return null;
                return prev > 1 ? prev - 1 : null;
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, [undoCountdown]);

   
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

                {undoCountdown !== null && (
                    <div className="cart-undo">
                        <span className="cart-undo__text">Cart cleared.</span>

                        <button className="cart-undo__btn" onClick={() => {
                        undoClearCart();
                        setUndoCountdown(null);
                        }}>
                            Undo ({undoCountdown})
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
                            {cartItems.map((item) => {
                                const fullProduct = products.find(p => p.id === item.id);
                                const imgSrc = fullProduct ? fullProduct.img : item.img;
                                return (
                                <CartItem 
                                    key={item.id} 
                                    item={{...item, img: imgSrc}}
                                    onDecrease={() => decreaseQuantity(item.id)}
                                    onIncrease={() => increaseQuantity(item.id)} 
                                    removeFromCart={removeFromCart}/> 
                                );
                            })}
                        </div>
                        <div className="cart-summary">
                            <h2>Total: ${total.toFixed(2)}</h2>

                            <div className="cart-summary__actions">
                                <Link 
                                    to='/checkout'
                                    className="cart-summary__checkout-btn"
                                    disabled={cartItems.length === 0}>
                                    Checkout
                                </Link>
                                {cartItems.length > 0 && (
                                    <button 
                                        className="cart-summary__clear-btn"
                                        onClick={() => {
                                        clearCart();
                                        setUndoCountdown(7);
                                    }}>
                                        Clear Cart
                                    </button>
                                )}
                                <Link 
                                    to='/coffee'
                                    className="cart-summary__link">Continue Shopping</Link>
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


