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
import { CheckoutPage } from "./pages/CheckoutPage/CheckoutPage";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function App() {

	const [cartItems, setCartItems] = useState(() => {
		const savedCart = localStorage.getItem('cartItems');
		return savedCart ? JSON.parse(savedCart) : [];
	});

	const [lastRemovedCart, setLastRemovedCart] = useState([]);
	const [toast, setToast] = useState({ open: false, message: '', severity: 'success' });

	const total = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return sum + price * item.quantity;
    }, 0); 

	const cartCount = cartItems.reduce((sum, item) => {
		return sum + item.quantity;//общее количество товаров
	}, 0)

	const showToast = (message, severity = 'success') => {
		setToast({ open: true, message, severity });
	};

	const handleCloseToast = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setToast((prev) => ({ ...prev, open: false }));
	};

	const addToCart = (product) => {
		setCartItems((prev) => {
			const existingItem = prev.find((item) => item.id === product.id);

			if (existingItem) {
				return prev.map((item) => 
					item.id === product.id 
					? {...item, quantity: item.quantity + 1} 
					: item
				);
			}
			return [
				...prev, {...product, quantity: 1}
			]
		});
		showToast(`${product.name} added to cart!`);
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
		setLastRemovedCart(cartItems);
		setCartItems([]);
	};

	const undoClearCart = () => {
		setCartItems(lastRemovedCart); 
	}

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]); 

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
					cartCount={cartCount}
					undoClearCart={undoClearCart}/>
				} 
				/>
				<Route
					path="/checkout"
					element={<CheckoutPage
					total={total}
					cartItems={cartItems}
					cartCount={cartCount}
					clearCart={clearCart}/>
					}
				/>
				<Route 
					path="*" 
					element={<NotFoundPage></NotFoundPage>}/>
			</Routes>

			<Snackbar 
				open={toast.open} 
				autoHideDuration={3000} 
				onClose={handleCloseToast}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			>
				<Alert onClose={handleCloseToast} severity={toast.severity} sx={{ width: '100%', fontSize: '15px' }} elevation={6} variant="filled">
					{toast.message}
				</Alert>
			</Snackbar>
		</>
	);
}

export default App;
