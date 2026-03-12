import "./CoffeeItemsPage.css";
import maskGroupBg from "../../assets/maskGroupBg.png";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import { Footer } from "../../components/Footer";
import { ItemAbout } from "./ItemAbout";
import { CoffeeHero } from "../../components/CoffeeHero";
import { useParams } from "react-router-dom";

export const CoffeeItemsPage = () => {
	let {itemId} = useParams();
	const products = [
		{ id: 1, name: "Kenyan AA Premium 1 kg", country: "Kenya", price: "$9.99", img: img3, description: 'Bright acidity with berry notes and a wine-like finish.'},
		{ id: 2, name: "Colombian Supremo 1 kg", country: "Colombia", price: "$8.99", img: img2, description: 'Balanced flavor with chocolate notes and a smooth body.'},
		{ id: 3, name: "Brazil Santos Medium Roast 1 kg", country: "Brazil", price: "$7.49", img: img1, description: 'Nutty aroma with caramel sweetness and low acidity.'},
	];

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
