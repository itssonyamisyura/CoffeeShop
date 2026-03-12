import blackGroup from "../assets/blackGroup.png";
import menuLogo from "../assets/menuLogo.png";
import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer">
                <div className="footer__inner">
                    <Link to='/'>
                        <img src={menuLogo} alt="Coffee house" className="footer__logo" />
                    </Link>
                    <ul className="footer__links">
                        <li><NavLink to='/' end>Coffee house</NavLink></li>
                        <li><NavLink to='/coffee'>Our coffee</NavLink></li>
                        <li><NavLink to='/goods'>For your pleasure</NavLink></li>
                    </ul>
                </div>
                <div className="footer__divider">
                    <img src={blackGroup} alt="" />
                </div>
        </footer>
    )
}