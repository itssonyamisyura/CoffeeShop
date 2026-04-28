import blackGroup from "../../assets/blackGroup.png";

export const ItemAbout = ({product, addToCart}) => {

    if (!product) {
        return <div>Product not found</div>
    }
        
    const handleAddToCart = () => {
        addToCart(product);
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
                </div>
            </div>
        </section>
    )
}