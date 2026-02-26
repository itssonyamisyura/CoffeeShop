import "./CoffeeItemsPage.css";
import maskGroupBg from "../../assets/maskGroupBg.png";
import { Footer } from "../../components/Footer";
import { ItemAbout } from "./ItemAbout";
import { CoffeeHero } from "../../components/CoffeeHero";

export const CoffeeItemsPage = () => {
	return (
		<div className="coffee-item-page">
			{/* HERO */}
			<CoffeeHero
			image={maskGroupBg}
			title="Our Coffee"/>

			{/* ABOUT IT */}
			<ItemAbout/>

			{/* FOOTER */}
			<Footer/>
		</div>
	);
};
