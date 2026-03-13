import menuLogoWhite from "../../assets/menuLogoWhite.png";
import mainBG from "../../assets/MainBG.jpg";
import group from "../../assets/Group.png"; 
import { NavLink, Link} from "react-router-dom";


export const MainHero = ({cartCount = 0}) => {

	return (
		<section className="main-hero" style={{ backgroundImage: `url(${mainBG})` }}>
			<nav className="nav">
				<Link to="/">
					<img src={menuLogoWhite} alt="Coffee house" className="nav__logo" />
				</Link>
				<ul className="nav__links">
					<li><NavLink to='/coffee' end>Our coffee</NavLink></li>
					<li><NavLink to='/goods'>For your pleasure</NavLink></li>
					<li>
						<NavLink to='/cart' className="nav__cart">Cart ({cartCount})</NavLink>
					</li>
				</ul>
			</nav>

			<div className="main-hero__content">
				<h1 className="main-hero__title">Everything You Love About Coffee</h1>
				<img src={group} alt="" className="main-hero__icon" />
				<p className="main-hero__subtitle">We makes every day full of energy and taste</p>
				<p className="main-hero__subtitle">Want to try our beans?</p>
				<Link to='/coffee'>
					<button className="main-hero__btn">More</button>
				</Link>
			</div>
		</section>
	)
}