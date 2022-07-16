import "./App.css";
// import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
// import Testimoniales from "./pages/Testimoniales";
import Footer from "./components/Footer";
// import Homepage from "./pages/Homepage";
// import Funzone from "./pages/Funzone";
import VideoDetails from "./pages/VideoDetails";

function App() {

	// query to pass props to video details

	return (
		<div className="App">
			<Navbar />
			<VideoDetails videoId="93dc737e-a477-48a7-9cbb-8c8ccb19b0f0" />
			{/* <Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/testimoniales" element={<Testimoniales />} />
			<Route path="/funzone" element={<Funzone />} />
			<Route path="/videos/:idVideo" element={<VideoDetails url={url} />} />
			</Routes> */}
			<Footer />
		</div>
	);
}

export default App;
