import "./CoffeeItemsPage.css";
import maskGroupBg from "../../assets/maskGroupBg.png";
import { products } from "../../components/Products";
import { Footer } from "../../components/Footer";
import { ItemAbout } from "./ItemAbout";
import { CoffeeHero } from "../../components/CoffeeHero";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export const CoffeeItemsPage = () => {
	let {itemId} = useParams();

	const product = products.find((item) => {
		return (itemId) == item.id;
	})

	return (
		<div className="coffee-item-page">
			
			{/* HERO */}
			<CoffeeHero
			image={maskGroupBg}
			title="Our Coffee"/>

			{/* ABOUT IT */}
			<ItemAbout product={product} />

			{/* FOOTER */}
			<Footer/>
		</div>
	);
};
