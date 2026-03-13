import "./CoffeeItemsPage.css";
import maskGroupBg from "../../assets/maskGroupBg.png";
import { products } from "../../data/Products";
import { Footer } from "../../components/Footer";
import { ItemAbout } from "./ItemAbout";
import { CoffeeHero } from "../../components/CoffeeHero";
import { useParams } from "react-router-dom";

export const CoffeeItemsPage = ({addToCart, cartItems}) => {
	let {itemId} = useParams();

	const product = products.find((item) => {
		return (itemId) == item.id;
	})

	return (
		<div className="coffee-item-page">

			{/* HERO */}
			<CoffeeHero
			image={maskGroupBg}
			title="Our Coffee"
			cartItems={cartItems}/>

			{/* ABOUT IT */}
			<ItemAbout 
			product={product} 
			addToCart={addToCart}/>

			{/* FOOTER */}
			<Footer/>
		</div>
	);
};
