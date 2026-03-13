
export const CartPage = ({cartItems, removeFromCart, increaseQuantity, decreaseQuantity}) => {

    const total = cartItems.reduce((sum, item) => {
        console.log(cartItems);
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
                    {cartItems.map((item, index) => (
                        <div key={index}>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <div>
                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <span>Quantity: {item.quantity}</span>
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                            </div>
                            <button onClick={() => removeFromCart(index)}>
                                Remove
                            </button>   
                        </div>
                        ))}
                    <h2>Total: ${total.toFixed(2)}</h2>
                </div>
            )}
        </section>
    );
};

// parseFloat - Превращает строку в число
// toFixed(2) - Делает красивый формат цены 17.4 → 17.40


