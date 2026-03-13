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
		setCartItems((prev) => {
			const existingItem = prev.find((item) => item.id === product.id);
			//Если найден — existingItem будет объектом
			//Если не найден — будет undefined

			if (existingItem) {
				return prev.map((item) => 
					item.id === product.id 
					? {...item, quantity: item.quantity + 1} 
					//скопировать все поля старого объекта и заменить только quantitywo
					: item
				);
			}
			return [
				...prev, {...product, quantity: 1}
			] //...product -> id name price image
		});
	}

	const removeFromCart = (idToRemove) => {
		setCartItems((prev) => 
			prev.filter((item) => item.id !== idToRemove)
		); 
	};

	const increaseQuantity = (idToIncrease) => {
		setCartItems((prev) => 
			prev.map((item) => 
				item.id === idToIncrease 
				? {...item, quantity: item.quantity + 1}
				: item
			)
		);
	};

	const decreaseQuantity = (idToDecrease) => {
		setCartItems((prev) => 
			prev.map((item) => 
				item.id === idToDecrease
				? {...item, quantity: item.quantity - 1}
				: item
			)
			.filter((item) => item.quantity > 0)
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
					removeFromCart={removeFromCart}
					increaseQuantity={increaseQuantity}
					decreaseQuantity={decreaseQuantity}/>} 
				/>
				<Route 
					path="*" 
					element={<NotFoundPage></NotFoundPage>}/>
			</Routes>
		</>
	);
}

export default App;
