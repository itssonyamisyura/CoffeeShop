import blackGroup from "../assets/blackGroup.png";
import menuLogo from "../assets/menuLogo.png";

export const Footer = () => {
    return (
        <footer className="footer">
                <div className="footer__inner">
                    <img src={menuLogo} alt="Coffee house" className="footer__logo" />
                    <ul className="footer__links">
                        <li><a href="#">Coffee house</a></li>
                        <li><a href="#">Our coffee</a></li>
                        <li><a href="#">For your pleasure</a></li>
                    </ul>
                </div>
                <div className="footer__divider">
                    <img src={blackGroup} alt="" />
                </div>
        </footer>
    )
}