import { useState } from "react";
import { useNavigate } from "react-router-dom";
import paper from "../../assets/paper.png";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";

export const OurBest = () => {
    const navigate = useNavigate();

    const [bestProducts] = useState([
        { id: 1, name: "Kenyan AA Premium 1 kg", country: "Kenya", price: "$9.99", img: img3, description: 'Bright acidity with berry notes and a wine-like finish.'},
        { id: 2, name: "Colombian Supremo 1 kg", country: "Colombia", price: "$8.99", img: img2, description: 'Balanced flavor with chocolate notes and a smooth body.'},
        { id: 3, name: "Brazil Santos Medium 1 kg", country: "Brazil", price: "$7.49", img: img1, description: 'Nutty aroma with caramel sweetness and low acidity.'},
    ]);

    return (
        <section 
        className="main-best" 
        style={{ backgroundImage: `url(${paper})` }}>
            <h2 className="section-title">Our best</h2>
            <div className="products-grid">
                {bestProducts.map((product) => (
                   <div key={product.id} className="product-card"
                   onClick={() => navigate(`/items/${product.id}`)}>
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
