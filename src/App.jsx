import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Beranda from "./components/Beranda";
import Profil from "./components/Profil";
import Major from "./components/Major";
import Ekstrakulikuler from "./components/Ekstrakulikuler"

function App() {
	return (
		<>
			<Header />
			<Beranda />
			<Profil />
			<Major/>
			<Ekstrakulikuler/>
		</>
	);
}

export default App;
