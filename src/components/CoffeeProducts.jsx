import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { products } from "../data/Products";
import {CoffeeFilter} from "../pages/coffee/CoffeeFilter";

export const CoffeeProducts = () => {

const navigate = useNavigate();

const [term, setTerm] = useState('');
const [filter, setFilter] = useState('all');

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
            onUpdateSearch={onUpdateSearch}
            onFilterSelect={onFilterSelect}/>

            <div className="products-grid products-grid--wide">
                {visibleProducts.map(product => {
                    return (
                    <div className="product-card" 
                    key={product.id}
                    onClick={() => navigate(`/items/${product.id}`)}>
                    <img src={product.img} alt="AROMISTICO Coffee 1 kg" className="product-card__img" />
                    <p className="product-card__name">{product.name}</p>
                    <p className="product-card__country">{product.country}</p>
                    <p className="product-card__price">{product.price}</p>
                    </div>
                )})}
            </div>
        </section>
    )
}

