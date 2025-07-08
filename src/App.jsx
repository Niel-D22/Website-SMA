import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./App.css";
import Header from "./components/Header";
import Beranda from "./components/Beranda";
import Profil from "./components/Profil";
import Major from "./components/Major";
import Ekstrakulikuler from "./components/Ekstrakulikuler"





function App() {
	  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
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
