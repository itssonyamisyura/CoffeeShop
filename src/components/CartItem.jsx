
function CartItem ({item, increaseQuantity,decreaseQuantity, removeFromCart}) {
    const price = parseFloat(item.price.replace('$', ''));
    const subtotal = price * item.quantity;
    

    return (
        <div>
            <p>{item.name}</p>
            <p>Price: {item.price}</p>

            <div>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>Quantity: {item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>

            <p>Subtotal: ${subtotal.toFixed(2)}</p>

            <button onClick={() => removeFromCart(item.id)}>
                Remove
            </button>   
        </div>
    )
}

export default CartItem;