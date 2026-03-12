import { useState } from "react"; 
import img3 from "../assets/3.png";
import {CoffeeFilter} from "../pages/coffee/CoffeeFilter";

export const CoffeeProducts = () => {

const [products] = useState([
    { id: 1, name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$", img: img3},
    { id: 2, name: "Kenyan AA Premium 1 kg", country: "Kenya", price: "9.99$", img: img3},
    { id: 3, name: "Colombian Supremo 1 kg", country: "Colombia", price: "8.99$", img: img3},
    { id: 4, name: "Brazil Santos Medium Roast 1 kg", country: "Brazil", price: "7.49$", img: img3},
    { id: 5, name: "Colombian Light Roast 1 kg", country: "Colombia", price: "7.29$", img: img3},
    { id: 6, name: "Kenya Dark Roast Blend 1 kg", country: "Kenya", price: "7.99$", img: img3}
]);

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
                    <div className="product-card" key={product.id}>
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

