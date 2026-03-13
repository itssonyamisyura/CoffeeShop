
function CartItem ({item, onIncrease, onDecrease, removeFromCart}) {
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
                <p className="cart-item__name">{item.name}</p>
                <p className="cart-item__price">Price: {item.price}</p>
            </div>

            <div className="cart-item__actions">
                <div className="cart-item__quantity">
                    <button 
                        className="cart-item__qty-btn" 
                        onClick={onDecrease}>-</button>
                        <span                   className="cart-item__qty-value">Quantity: {item.quantity}
                        </span>
                    <button
                        className="cart-item__qty-btn"
                        onClick={onIncrease}>+</button>
                </div>
            </div>
            <div className="cart-item__subtotal">
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
            </div>
            <button 
                className="cart-item__remove-btn" 
                onClick={() => removeFromCart(item.id)}>
                Remove
            </button>   
        </div>
    )
}

export default CartItem;