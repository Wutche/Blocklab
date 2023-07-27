/** @format */

import "./App.css";
import "./styles/news.css";
import News from "./pages/News";
import Trend from "./pages/Trend";
import Research from "./pages/Research";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<News />} />
					<Route path="/article" element={<Article />} />
					<Route path="/research" element={<Research />} />
					<Route path="/trend" element={<Trend />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
