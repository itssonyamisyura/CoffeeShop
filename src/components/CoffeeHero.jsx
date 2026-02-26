import menuLogoWhite from "../assets/menuLogoWhite.png";

export const CoffeeHero = ({image, title}) => {
    return (
        <section className="coffee-hero" style={{ backgroundImage: `url(${image})` }}>
            <nav className="nav">
                <img src={menuLogoWhite} alt="Coffee house" className="nav__logo" />
                <ul className="nav__links">
                    <li><a href="#">Coffee house</a></li>
                    <li><a href="#">Our coffee</a></li>
                    <li><a href="#">For your pleasure</a></li>
                </ul>
            </nav>
            <div className="coffee-hero__content">
                <h1 className="coffee-hero__title">{title}</h1>
            </div>
        </section>
    )
}