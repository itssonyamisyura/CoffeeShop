import { Component } from "react"; 
import img3 from "../assets/3.png";
import { CoffeeFilter } from "../pages/coffee/CoffeeFilter";

export class CoffeeProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                { id: 1, name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$", img: img3},
                { id: 2, name: "AROMISTICO Coffee 1 kg", country: "Kenya", price: "6.99$", img: img3},
                { id: 3, name: "AROMISTICO Coffee 1 kg", country: "Columbia", price: "6.99$", img: img3},
                { id: 4, name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$", img: img3},
                { id: 5, name: "AROMISTICO Coffee 1 kg", country: "Columbia", price: "6.99$", img: img3},
                { id: 6, name: "AROMISTICO Coffee 1 kg", country: "Kenya", price: "6.99$", img: img3}
            ],
            term: ''
        }
    }

    onUpdateSearch = (term) => {
        this.setState({
            term: term
        });
    }

   render() {
    const {products, term} = this.state;
    // same as const products = this.state.products;

    const visibleProducts = products.filter(product =>
        product.name.toLowerCase().includes(term.toLowerCase())
    );
    // already filtered

    return (
        
        <section className="coffee-products">
            <CoffeeFilter 
            term={this.state.term}
            onUpdateSearch={this.onUpdateSearch}
            />

            <div className="products-grid products-grid--wide">
                {this.state.products.map(product => (
                    <div className="product-card" key={product.id}>
                    <img src={product.img} alt="AROMISTICO Coffee 1 kg" className="product-card__img" />
                    <p className="product-card__name">{product.name}</p>
                    <p className="product-card__country">{product.country}</p>
                    <p className="product-card__price">{product.price}</p>
                    </div>
                ))}
                </div>
        </section>
        )
    }
}


//🔁 Теперь порядок действий

// Пользователь печатает

// onUpdateSearch вызывается

// setState({ term })

// React вызывает render()

// Создаётся новый visibleProducts

// React перерисовывает список