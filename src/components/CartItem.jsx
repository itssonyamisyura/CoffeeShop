
function CartItem ({item, increaseQuantity,decreaseQuantity, removeFromCart}) {
    const price = parseFloat(item.price.replace('$', ''));
    const subtotal = price * item.quantity;
    

    return (
        <div className="cart-item">

            <div className="cart-item__image-wrap">
                <img 
                src={item.img} 
                alt={item.name}
                className="cart-item__image" />
            </div>

            <div className="cart-item__info">
                <p>{item.name}</p>
                <p>Price: {item.price}</p>
            </div>

            <div className="cart-item__actions">
                <div className="cart-item__quantity">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                        <span>Quantity: {item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
            </div>

            <p>Subtotal: ${subtotal.toFixed(2)}</p>

            <button onClick={() => removeFromCart(item.id)}>
                Remove
            </button>   
        </div>
    )
}

export default CartItem;