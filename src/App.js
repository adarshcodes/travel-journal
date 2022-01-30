import React from "react";
import "./Sass/main.css";
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";
import Data from "./data";

function App() {
	const cardData = Data.map((item) => {
		return <Card key={item.id} item={item} />;
	});

	return (
		<div className="App">
			<header className="App-header">
				<NavBar />
			</header>
			<main className="main-section">{cardData}</main>
		</div>
	);
}

export default App;
