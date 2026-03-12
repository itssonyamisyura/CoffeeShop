import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/main/MainPage";
import { CoffeePage } from "./pages/coffee/CoffeePage";
import { GoodsPage } from "./pages/goods/GoodsPage";
import { CoffeeItemsPage } from "./pages/coffee-item/CoffeeItemPage";
import { NotFoundPage } from "./pages/404/NotFoundPage";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
	return (
		<>
		<ScrollToTop />
			<Routes>
				<Route path="/" element={<MainPage />}/>
				<Route path="/coffee" element={<CoffeePage/>} />
				<Route path="/goods" element={<GoodsPage />}/>
				<Route path="/items/:itemId" element={<CoffeeItemsPage/>}/>
				<Route path="*" element={<NotFoundPage></NotFoundPage>}/>
			</Routes>
		</>
	);
}

export default App;
