import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import { MainPage } from "./pages/main/MainPage";
import { CoffeePage } from "./pages/coffee/CoffeePage";
import { GoodsPage } from "./pages/goods/GoodsPage";
import { CoffeeItemsPage } from "./pages/coffee-item/CoffeeItemsPage";
import { NotFoundPage } from "./pages/404/NotFoundPage";
import { ScrollToTop } from "./components/ScrollToTop";
import { CartPage } from "./pages/cart/CartPage";

function App() {

	const [cartItems, setCartItems] = useState(() => {
		const savedCart = localStorage.getItem('cartItems');
		return savedCart ? JSON.parse(savedCart) : [];
	});

	const total = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return sum + price * item.quantity;
    }, 0); 

	const cartCount = cartItems.reduce((sum, item) => {
		return sum + item.quantity;//общее количество товаров
	}, 0)

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

	const clearCart = () => {
		setCartItems([]);
	};

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]); //выполни этот код, когда изменится cartItems

	return (
		<>
		<ScrollToTop />
			<Routes>
				<Route 
					path="/" 
					element={<MainPage 
					cartCount={cartCount}/>}/>
				<Route 
					path="/coffee" 
					element={<CoffeePage
					cartCount={cartCount}/>}
					/>
				<Route 
					path="/goods" 
					element={<GoodsPage 
					cartCount={cartCount}/>}/>
				<Route 
					path="/items/:itemId" 
					element={<CoffeeItemsPage 
					addToCart={addToCart}
					cartCount={cartCount}/>}
				/>
				<Route 
					path="/cart" 
					element={<CartPage
					cartItems={cartItems}
					removeFromCart={removeFromCart}
					increaseQuantity={increaseQuantity}
					decreaseQuantity={decreaseQuantity}
					clearCart={clearCart}
					total={total}
					cartCount={cartCount}/>
				} 
				/>
				<Route 
					path="*" 
					element={<NotFoundPage></NotFoundPage>}/>
			</Routes>
		</>
	);
}

export default App;
