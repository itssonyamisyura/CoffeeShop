import "./CoffeePage.css";
import maskGroupBg from "../../assets/maskGroupBg.png";
import { CoffeeHero } from "../../components/CoffeeHero";
import CoffeePageAbout from "../../assets/CoffeePageAbout.png";
import { CoffeeFilter } from "./CoffeeFilter";
import { CoffeeProducts } from "../../components/CoffeeProducts";
import { Footer } from "../../components/Footer";
import { CoffeeAbout } from "../../components/CoffeeAbout";

export const CoffeePage = () => {
	return (
		<div className="coffee-page">
			{/* HERO */}
			<CoffeeHero
			image={maskGroupBg}
			title="Our Coffee" />

			{/* ABOUT OUR BEANS */}
			<CoffeeAbout
			image={CoffeePageAbout}
			title="About our beans"/>

			{/* SEARCH & FILTER */}
			{/* <CoffeeFilter/> */}

			{/* PRODUCTS GRID */}
			<CoffeeProducts/>

			{/* FOOTER */}
			<Footer/>
		</div>
	);
};
