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
                <p>Extremity sweetness difficult behaviour be of. On disposal of us landlord horrible.</p>
                <p>Afraid at highly months do things on at. Situation recommend objection do intention so questions.</p>
                <p>As greatly removed calling pleased improve an. Last ask him cold feel not spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
            </div>
        </section>
    )
}