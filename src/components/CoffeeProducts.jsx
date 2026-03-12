import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import { products } from "../data/Products";
import {CoffeeFilter} from "../pages/coffee/CoffeeFilter";

export const CoffeeProducts = () => {

const navigate = useNavigate();

const [term, setTerm] = useState('');
const [filter, setFilter] = useState('all');

useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
    });
}, []);


const onUpdateSearch = (term) => {
    setTerm(term);
}

const onFilterSelect = (filter) => {
    setFilter(filter);
}

const visibleProducts = products
    .filter(p => p.name.toLowerCase().includes(term.toLowerCase()))
    .filter(p => filter === 'all' || p.country === filter);

return ( 
        <section className="coffee-products">
            <CoffeeFilter 
            term={term}
            filter={filter}
            onUpdateSearch={onUpdateSearch}
            onFilterSelect={onFilterSelect}/>

            <div className="products-grid products-grid--wide">
                {visibleProducts.map((product, index) => {
                    return (
                    <div className="product-card" 
                    key={product.id}
                    onClick={() => navigate(`/items/${product.id}`)}
                    data-aos="fade-up"
                    data-aos-delay={Math.floor(index / 3) * 200}>
                    <img src={product.img} alt={product.name} className="product-card__img" />
                    <p className="product-card__name">{product.name}</p>
                    <p className="product-card__country">{product.country}</p>
                    <p className="product-card__price">{product.price}</p>
                    </div>
                )})}
            </div>
        </section>
    )
}

