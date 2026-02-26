import "./GoodsPage.css";
import menuLogoWhite from "../../assets/menuLogoWhite.png";
import menuLogo from "../../assets/menuLogo.png";
import GoodsBG from "../../assets/GoodsBG.png";
// import group from "../../assets/Group.png";
import blackGroup from "../../assets/blackGroup.png";
// import img1 from "../../assets/1.png";
// import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import GoodsCoffee from "../../assets/GoodsCoffee.png"

export const GoodsPage = () => {
	return (
		<div className="goods-page">
			{/* HERO */}
			<section className="goods-hero" style={{ backgroundImage: `url(${GoodsBG})` }}>
				<nav className="nav">
					<img src={menuLogoWhite} alt="Coffee house" className="nav__logo" />
					<ul className="nav__links">
						<li><a href="#">Our coffee</a></li>
						<li><a href="#">For your pleasure</a></li>
					</ul>
				</nav>
				<div className="goods-hero__content">
					<h1 className="goods-hero__title">For your pleasure</h1>
				</div>
			</section>

			{/* ABOUT OUR GOODS */}
			<section className="goods-about">
				<div className="goods-about__img-wrap">
					<img src={GoodsCoffee} alt="About our goods" className="goods-about__img" />
				</div>
				<div className="goods-about__text">
					<h2 className="section-title section-title--left">About our goods</h2>
					<div className="section-divider section-divider--left">
						<img src={blackGroup} alt="" />
					</div>
					<p>Extremity sweetness difficult behaviour be of. On disposal of us landlord horrible.</p>
					<p>Afraid at highly months do things on at. Situation recommend objection do intention so questions.</p>
					<p>As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
				</div>
			</section>

			{/* PRODUCTS GRID */}
			<section className="goods-products">
				<div className="products-grid products-grid--wide">
					<div className="product-card">
						<img src={img3} alt="AROMISTICO Coffee 1 kg" className="product-card__img" />
						<p className="product-card__name">AROMISTICO Coffee 1 kg</p>
						<p className="product-card__country">Brazil</p>
						<p className="product-card__price">6.99$</p>
					</div>
					<div className="product-card">
						<img src={img3} alt="AROMISTICO Coffee 1 kg" className="product-card__img" />
						<p className="product-card__name">AROMISTICO Coffee 1 kg</p>
						<p className="product-card__country">Kenya</p>
						<p className="product-card__price">6.99$</p>
					</div>
					<div className="product-card">
						<img src={img3} alt="AROMISTICO Coffee 1 kg" className="product-card__img" />
						<p className="product-card__name">AROMISTICO Coffee 1 kg</p>
						<p className="product-card__country">Columbia</p>
						<p className="product-card__price">6.99$</p>
					</div>
					<div className="product-card">
						<img src={img3} alt="AROMISTICO Coffee 1 kg" className="product-card__img" />
						<p className="product-card__name">AROMISTICO Coffee 1 kg</p>
						<p className="product-card__country">Brazil</p>
						<p className="product-card__price">6.99$</p>
					</div>
					<div className="product-card">
						<img src={img3} alt="AROMISTICO Coffee 1 kg" className="product-card__img" />
						<p className="product-card__name">AROMISTICO Coffee 1 kg</p>
						<p className="product-card__country">Brazil</p>
						<p className="product-card__price">6.99$</p>
					</div>
					<div className="product-card">
						<img src={img3} alt="AROMISTICO Coffee 1 kg" className="product-card__img" />
						<p className="product-card__name">AROMISTICO Coffee 1 kg</p>
						<p className="product-card__country">Brazil</p>
						<p className="product-card__price">6.99$</p>
					</div>
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
