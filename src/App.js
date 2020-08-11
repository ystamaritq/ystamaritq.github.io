import React from "react";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import About from "./views/About";
// import Contact from "./views/Contact";
import Portfolio from "./views/Portfolio";

function App() {
	return (
		<div>
			<NavigationBar />
			<About />
			<Portfolio />
			{/* <Contact /> */}
			<Footer />
		</div>
	);
}

export default App;
