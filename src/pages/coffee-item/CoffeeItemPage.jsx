import "./CoffeeItemsPage.css";
import menuLogoWhite from "../../assets/menuLogoWhite.png";
import menuLogo from "../../assets/menuLogo.png";
// import mainBG from "../../assets/MainBG.jpg";
// import group from "../../assets/Group.png";
import blackGroup from "../../assets/blackGroup.png";
// import img3 from "../../assets/3.png";
import maskGroupBg from "../../assets/maskGroupBg.png";
import maskGroup from "../../assets/maskGroup.jpg"

export const CoffeeItemsPage = () => {
	return (
		<div className="coffee-item-page">
			{/* HERO */}
			<section className="item-hero" style={{ backgroundImage: `url(${maskGroupBg})` }}>
				<nav className="nav">
					<img src={menuLogoWhite} alt="Coffee house" className="nav__logo" />
					<ul className="nav__links">
						<li><a href="#">Our coffee</a></li>
						<li><a href="#">For your pleasure</a></li>
					</ul>
				</nav>
				<div className="item-hero__content">
					<h1 className="item-hero__title">Our Coffee</h1>
				</div>
			</section>

			{/* ABOUT IT */}
			<section className="item-about">
				<div className="item-about__img-wrap">
					<img src={maskGroup} alt="AROMISTICO Coffee" className="item-about__img" />
				</div>
				<div className="item-about__details">
					<h2 className="section-title section-title--left">About it</h2>
					<div className="section-divider section-divider--center">
						<img src={blackGroup} alt="" />
					</div>
					<p className="item-about__field">
						<span className="item-about__label">Country:</span> Brasil
					</p>
					<p className="item-about__description">
						<span className="item-about__label">Description:</span> Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
						minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
					<p className="item-about__price">
						<span className="item-about__price-label">Price:</span>
						<span className="item-about__price-value">16.99$</span>
					</p>
				</div>
			</section>

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
