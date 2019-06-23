import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "./App.css";

const App = () => {
	return (
		<Router>
			<Fragment className="App">
				<Navbar />
				My App
			</Fragment>
		</Router>
	);
};

export default App;
