import paper from "../../assets/paper.png";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";

export const OurBest = () => {
    return (
        <section className="main-best" style={{ backgroundImage: `url(${paper})` }}>
                <h2 className="section-title">Our best</h2>
                <div className="products-grid">
                    <div className="product-card">
                        <img src={img1} alt="Salimo Coffee Beans 2 kg" className="product-card__img" />
                        <p className="product-card__name">Salimo Coffee Beans 2 kg</p>
                        <p className="product-card__price">10.73$</p>
                    </div>
                    <div className="product-card">
                        <img src={img2} alt="Presto Coffee Beans 1 kg" className="product-card__img" />
                        <p className="product-card__name">Presto Coffee Beans 1 kg</p>
                        <p className="product-card__price">15.99$</p>
                    </div>
                    <div className="product-card">
                        <img src={img3} alt="AROMISTICO Coffee 1 kg" className="product-card__img" />
                        <p className="product-card__name">AROMISTICO Coffee 1 kg</p>
                        <p className="product-card__price">6.99$</p>
                    </div>
                </div>
            </section>
    )
}
