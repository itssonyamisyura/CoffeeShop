import menuLogoWhite from "../assets/menuLogoWhite.png";
import { NavLink, Link} from "react-router-dom";
import { CartNavBadge } from "../components/CartNavBadge";


export const CoffeeHero = ({image, title, cartCount}) => {

    return (
        <section className="coffee-hero" style={{ backgroundImage: `url(${image})` }}>
            <nav className="nav">
                <Link to='/'>
                    <img src={menuLogoWhite} alt="Coffee house" className="nav__logo" />
                </Link>
                <ul className="nav__links">
                    <li><NavLink to='/' end>Coffee house</NavLink></li>
                    <li><NavLink to='/coffee'>Our coffee</NavLink></li>
                    <li><NavLink to='/goods'>For your pleasure</NavLink></li>
                    <li>
                        <CartNavBadge cartCount={cartCount}/>
                    </li>
                </ul>
            </nav>
            <div className="coffee-hero__content">
                <h1 className="coffee-hero__title">{title}</h1>
            </div>
        </section>
    )
}