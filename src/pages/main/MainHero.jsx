import menuLogoWhite from "../../assets/menuLogoWhite.png";
import mainBG from "../../assets/MainBG.jpg";
import group from "../../assets/Group.png"; 


export const MainHero = () => {
	return (
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
	)
}