import "./MainPage.css";
import menuLogoWhite from "../../assets/menuLogoWhite.png";
import menuLogo from "../../assets/menuLogo.png";
import mainBG from "../../assets/MainBG.jpg";
import group from "../../assets/Group.png";
import blackGroup from "../../assets/blackGroup.png";
import { OurBest } from "./OurBest";

export const MainPage = () => {
	return (
		<div className="main-page">
			{/* HERO */}
			<section className="main-hero" style={{ backgroundImage: `url(${mainBG})` }}>
				<nav className="nav">
					<img src={menuLogoWhite} alt="Coffee house" className="nav__logo" />
					<ul className="nav__links">
						<li><a href="#">Our coffee</a></li>
						<li><a href="#">For your pleasure</a></li>
					</ul>
				</nav>

				<div className="main-hero__content">
					<h1 className="main-hero__title">Everything You Love About Coffee</h1>
					<img src={group} alt="" className="main-hero__icon" />
					<p className="main-hero__subtitle">We makes every day full of energy and taste</p>
					<p className="main-hero__subtitle">Want to try our beans?</p>
					<button className="main-hero__btn">More</button>
				</div>
			</section>

			{/* ABOUT */}
			<section className="main-about">
				<h2 className="section-title">About Us</h2>
				<div className="section-divider">
					<img src={blackGroup} alt="" />
				</div>
				<div className="main-about__text">
					<p>Extremity sweetness difficult behaviour be of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel not spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
					<p>Now residence dashwoods she excellent you. Shade being under his bed her. Much read on as draw. Blessing for ignorant exercise any yourself unpacket. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved for recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.</p>
				</div>
			</section>

			{/* OUR BEST */}
			<OurBest />

			{/* FOOTER */}
			<footer className="footer">
				<div className="footer__inner">
					<img src={menuLogo} alt="Coffee house" className="footer__logo" />
					<ul className="footer__links">
						<li><a href="#">Our coffee</a></li>
						<li><a href="#">For your pleasure</a></li>
					</ul>
				</div>
				<div className="footer__divider">
					<img src={blackGroup} alt="" />
				</div>
			</footer>
		</div>
	);
};
