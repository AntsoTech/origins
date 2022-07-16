import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Testimoniales from "./pages/Testimoniales";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Funzone from "./pages/Funzone";
import VideoDetails from "./pages/VideoDetails";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/testimoniales" element={<Testimoniales />} />
			<Route path="/funzone" element={<Funzone />} />
			<Route path="/videos/:idVideo" element={<VideoDetails />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
