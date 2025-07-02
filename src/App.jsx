import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Beranda from "./components/Beranda";
import Profil from "./components/Profil";

function App() {
	return (
		<>
			<Header />
			<Beranda />
			<Profil/>
		</>
	);
}

export default App;
