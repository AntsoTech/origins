import "./App.css";
import Navbar from "./components/Navbar";
import Testimoniales from "./pages/Testimoniales";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Testimoniales />
			<Footer />
		</div>
	);
}

export default App;
