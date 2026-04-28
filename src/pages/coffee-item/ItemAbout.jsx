import { useState } from "react";
import blackGroup from "../../assets/blackGroup.png";

export const ItemAbout = ({product, addToCart}) => {

    const [addedMessage, setAddedMessage] = useState(false);

    if (!product) {
        return <div>Product not found</div>
    }
        
    const handleAddToCart = () => {
        addToCart(product);
        setAddedMessage(true);

        setTimeout(() => {
            setAddedMessage(false)
        }, 2000);
    }

    return (
        <section className="item-about">
            <div className="item-about__img-wrap">
                <img src={product.img} alt={product.name} className="item-about__img" />
            </div>
            <div className="item-about__details">
                <h2 className="item-about__product-name">{product.name}</h2>
                <div className="item-about__info">
                    <p className="item-about__field">
                        <span className="item-about__label">Country:</span> {product.country}
                    </p>
                    <p className="item-about__description">
                        {product.description}
                    </p>
                </div>
                <div className="item-about__purchase">
                    <p className="item-about__price">
                        {product.price}
                    </p>
                    <button 
                    className="item-about__btn"
                    onClick={handleAddToCart}>
                        Add to cart
                    </button>
                    {addedMessage && <p className="item-about__added-msg">Added ✓</p>}
                </div>
            </div>
        </section>
    )
}