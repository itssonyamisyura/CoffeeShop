import "./MainPage.css";
import { OurBest } from "./OurBest";
import { About } from "./About";
import { Footer } from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import { MainHero } from "./MainHero";


export const MainPage = ({cartCount}) => {
	return (
		<div className="main-page">

			<Helmet>
				<title>Coffee House</title>
			</Helmet>

			{/* HERO */}
			<MainHero cartCount={cartCount}/>

			{/* ABOUT */}
			<About/>

			{/* OUR BEST */}
			<OurBest />

			{/* FOOTER */}
			<Footer/>
		</div>
	);
};
