import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import paper from "../../assets/paper.png";
import { products } from "../../data/Products";

export const OurBest = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
          duration: 700,
          once: false,
        });
    }, []);

    return (
        <section 
        className="main-best" 
        style={{ backgroundImage: `url(${paper})` }}>
            <h2 className="section-title">Our best</h2>
            <div className="products-grid">
                {products.slice(0,3).map((product, index) => (
                   <div key={product.id} className="product-card"
                   onClick={() => navigate(`/items/${product.id}`)}
                   data-aos="fade-up"
                   data-aos-delay={Math.floor(index / 3) * 200}>
                   <img 
                   src={product.img} 
                   alt={product.name} className="product-card__img" />
                   <p className="product-card__name">{product.name}</p>
                   <p className="product-card__price">{product.price}</p>
               </div> 
               ))}
            </div>
        </section>
    )
}
