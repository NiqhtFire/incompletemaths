import React from "react";
import "./App.scss";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
		<div className="header">
			<Title title="Incomplete" />
			<Navbar>
				<Nav title="Contact" />
				<Nav title="About" />
				<Nav title="Other" />
				<Nav title="Account" />
			</Navbar>
		</div>
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
		</>
	);
}

export default App;
