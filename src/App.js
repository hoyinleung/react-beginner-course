import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';

function App() {
  return (
    <BrowserRouter>

		<Link to="/">首頁</Link> 
		<Link to="/checkout">購物車</Link>

		<Routes>
			<Route path="/" element={<ProductList/>} />
			<Route path="/checkout" element={<Checkout/>} />

			<Route path="/product" element={<ProductDetail/>}>
				<Route path=":id" element={<ProductDetail/>} />
			</Route>

			<Route path="*" element={<p>找不到頁面</p>}/>
		</Routes>
	</BrowserRouter>
  );
}

export default App;