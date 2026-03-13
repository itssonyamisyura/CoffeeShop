import "./MainPage.css";
import { OurBest } from "./OurBest";
import { About } from "./About";
import { Footer } from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import { MainHero } from "./MainHero";


export const MainPage = ({cartItems}) => {
	return (
		<div className="main-page">

			<Helmet>
				<title>Coffee House</title>
			</Helmet>

			{/* HERO */}
			<MainHero cartItems={cartItems}/>

			{/* ABOUT */}
			<About/>

			{/* OUR BEST */}
			<OurBest />

			{/* FOOTER */}
			<Footer/>
		</div>
	);
};
