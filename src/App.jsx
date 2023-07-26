/** @format */

import "./App.css";
import "./styles/article.css";
import Article from "./pages/Article";
import Stories from "./pages/Stories";
import Creator from "./pages/Creator";
import Community from "./pages/Community";
import Subscribe from "./pages/Subscribe";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Article />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/community" element={<Community />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
