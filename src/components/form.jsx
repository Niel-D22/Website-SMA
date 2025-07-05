import Gambar from "../assets/siswa-siswi.png";

function Form() {
	return (
		<div className="flex h-screen">
			<section className="flex-1 grid justify-center content-center">
				<h1 className="text-5xl font-bold text-blue-950 mb-7">Masuk</h1>
				<form action="" className="w-75 flex flex-col gap-3">
					<span className="text-2xl font-bold text-blue-950">Nama Pengguna</span>
					<input
						className="h-10 p-2 rounded-xl outline-3 focus:outline-5 outline-gray-400"
						type="text"
					/>
					<span className="text-2xl font-bold text-blue-950">Kata Sandi</span>
					<input
						className="h-10 p-2 rounded-xl outline-3 focus:outline-5 outline-gray-400"
						type="password"
					/>
					<button className="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-800 h-13 w-35 text-amber-50 outline-3 outline-emerald-600 rounded-full mx-auto my-6">
						Masuk
					</button>
				</form>
			</section>
			<section className="flex-1">
				<img src={Gambar} alt="" />
			</section>
		</div>
	);
}

export default Form;
