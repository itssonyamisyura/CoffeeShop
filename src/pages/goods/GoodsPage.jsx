import "./GoodsPage.css";
import GoodsBG from "../../assets/GoodsBG.png";
import GoodsCoffee from "../../assets/GoodsCoffee.png"
import { Footer } from "../../components/Footer";
import { CoffeeProducts } from "../../components/CoffeeProducts";
import { CoffeeAbout } from "../../components/CoffeeAbout";
import { CoffeeHero } from "../../components/CoffeeHero";

export const GoodsPage = () => {
	return (
		<div className="goods-page">
			{/* HERO */}
			<CoffeeHero
			image={GoodsBG}
			title="For your pleasure"/>


			{/* ABOUT OUR GOODS */}
			<CoffeeAbout
			image={GoodsCoffee}
			title="About our goods"/>

			{/* PRODUCTS GRID */}
			<CoffeeProducts/>

			{/* FOOTER */}
			<Footer/>
		</div>
	);
};
