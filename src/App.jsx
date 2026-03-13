import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { MainPage } from "./pages/main/MainPage";
import { CoffeePage } from "./pages/coffee/CoffeePage";
import { GoodsPage } from "./pages/goods/GoodsPage";
import { CoffeeItemsPage } from "./pages/coffee-item/CoffeeItemPage";
import { NotFoundPage } from "./pages/404/NotFoundPage";
import { ScrollToTop } from "./components/ScrollToTop";
import { CartPage } from "./pages/cart/CartPage";

function App() {

	const [cartItems, setCartItems] = useState([]);

	const addToCart = (product) => {
		setCartItems((prevItems) => [...prevItems, product]);
		// cart was [coffee1] -> add new item coffee2 =>[coffee1, coffee2]
	}

	const removeFromCart = (indexToRemove) => {
		setCartItems((prevItems) => 
			prevItems.filter((_, index) => index !== indexToRemove)
		// indexToRemove -> номер элемента в массиве
		// index -> номер элемента
		); 
	};

	return (
		<>
		<ScrollToTop />
			<Routes>
				<Route 
					path="/" 
					element={<MainPage 
					cartItems={cartItems}/>}/>
				<Route 
					path="/coffee" 
					element={<CoffeePage
					cartItems={cartItems}/>}
					/>
				<Route 
					path="/goods" 
					element={<GoodsPage 
					cartItems={cartItems}/>}/>
				<Route 
					path="/items/:itemId" 
					element={<CoffeeItemsPage 
					addToCart={addToCart}
					cartItems={cartItems}/>}
				/>
				<Route 
					path="/cart" 
					element={<CartPage
					cartItems={cartItems}
					removeFromCart={removeFromCart}/>} 
				/>
				<Route 
					path="*" 
					element={<NotFoundPage></NotFoundPage>}/>
			</Routes>
		</>
	);
}

export default App;
