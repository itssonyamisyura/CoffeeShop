// import CoffeePageAbout from "../assets/CoffeePageAbout.png";
import blackGroup from "../assets/blackGroup.png";

export const CoffeeAbout = ( {image, title} ) => {
    return (
        <section className="coffee-about">
            <div className="coffee-about__img-wrap">
                <img src={image} alt={title} className="coffee-about__img" />
            </div>
            <div className="coffee-about__text">
                <h2 className="section-title section-title--left">{title}</h2>
                <div className="section-divider section-divider--left">
                    <img src={blackGroup} alt="" />
                </div>
                <p>
                Our coffee is carefully selected from the best plantations around the world.
                Each bean is roasted with attention to preserve its natural aroma and rich flavor.
                </p>
                <p>
                We work directly with trusted farmers to ensure high quality and sustainability.
                This allows us to deliver fresh coffee that keeps its character in every cup.
                </p>
                <p>
                From bright African blends to smooth South American varieties,
                our collection is made for people who truly enjoy coffee.
                </p>
            </div>
        </section>
    )
}