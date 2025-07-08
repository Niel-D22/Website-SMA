import Gambar from "../assets/siswa-siswi.png";

export default function Header() {
	return (
		<>
			<div   data-aos="fade-up" data-aos-delay="300"  class="flex w-full h-150 mt-3 px-20 ">
				<section class="flex-3 content-center ml-5">
					<h1 class="text-5xl font-semibold text-blue-900">
						Educational Innovation for the Superior Generation, Explore Pintar Plus
					</h1>
					<button class="cursor-pointer bg-emerald-500 shadow-3xl shadow-emerald-950  w-40 h-15 rounded-full text-amber-50 m-10 mb-0 text-2xl focus:outline-4 focus:outline-emerald-700 focus:outline-offset-1 hover:bg-emerald-700">
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
