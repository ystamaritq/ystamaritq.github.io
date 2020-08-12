import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import About from "./views/About";
import Portfolio from "./views/Portfolio";
// import Contact from "./views/Contact";

const App = () => {
	return (
		<Router>
			<NavigationBar />
			<Route exact path="/" component={About} />
			<Route exact path="/" component={Portfolio} />
			{/* <Route exact path="/" component={Contact} /> */}
			<Footer />
		</Router>
	);
};

export default App;
