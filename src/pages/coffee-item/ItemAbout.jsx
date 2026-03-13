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
                <h2 className="section-title section-title--left">About it</h2>
                <div className="section-divider section-divider--center">
                    <img src={blackGroup} alt="" />
                </div>
                <p className="item-about__field">
                    <span className="item-about__label">Country:</span> {product.country}
                </p>
                <p className="item-about__description">
                    <span className="item-about__label">Description:</span> {product.description}
                </p>
                <p className="item-about__price">
                    <span className="item-about__price-label">Price:</span>
                    <span className="item-about__price-value">{product.price}</span>
                </p>
                <button 
                className="item-about__btn"
                onClick={handleAddToCart}>
                    Add to cart
                </button>
                {addedMessage && <p>Added ✓</p>}
            </div>
        </section>
    )
}