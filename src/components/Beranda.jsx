import Gambar from "../assets/siswa-siswi.png";

export default function Header() {
	return (
		<>
			<div class="flex w-full h-100 mt-3">
				<section class="flex-3 content-center ml-5">
					<h1 class="text-5xl font-semibold text-blue-900">
						Educational Innovation for the Superior Generation, Explore Pintar Plus
					</h1>
					<button class="bg-emerald-500 hover:bg-emerald-800 shadow-xl/10 w-40 h-15 rounded-full text-amber-50 m-10 mb-0 text-2xl">
						Get Started
					</button>
				</section>
				<section class="flex-2">
					<img src={Gambar} alt="" />
				</section>
			</div>
		</>
	);
}
