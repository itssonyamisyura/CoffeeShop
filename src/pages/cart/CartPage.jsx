
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
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <p>Price: {item.price}</p>

                            <div>
                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <span>Quantity: {item.quantity}</span>
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                            </div>

                            <p>Subtotal: ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</p>

                            <button onClick={() => removeFromCart(item.id)}>
                                Remove
                            </button>   
                        </div>
                        ))}
                    <h2>Total: ${total.toFixed(2)}</h2>

                    <button onClick={clearCart}>
                        Clear Cart
                    </button>
                </div>
            )}
        </section>
    );
};

// parseFloat - Превращает строку в число
// toFixed(2) - Делает красивый формат цены 17.4 → 17.40


