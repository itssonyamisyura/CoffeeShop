import "./MainPage.css";
import { OurBest } from "./OurBest";
import { About } from "./About";
import { Footer } from "../../components/Footer";
import { MainHero } from "./MainHero";


export const MainPage = () => {
	return (
		<div className="main-page">
			{/* HERO */}
			<MainHero/>

			{/* ABOUT */}
			<About/>

			{/* OUR BEST */}
			<OurBest />

			{/* FOOTER */}
			<Footer/>
		</div>
	);
};
