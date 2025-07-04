import Logo from "../assets/logo.png";

export default function Header() {
	return (
		<>
			<div class="flex bg-blue-600 h-26  text-amber-50">
				<img
					src={Logo}
					alt="Logo Sekolah"
					class="min-w-15 max-w-20 min-h-15 max-h-20 m-auto ml-3"
				/>
				<div class="flex-1 ml-5 content-center">
					<h1 class="mono text-3xl">SMA Manado</h1>
				</div>
				<div class=" mr-3 mb-5 content-end">
					<div class="flex flex-nowrap gap-15">
						<a class="text-base cursor-pointer">Beranda</a>
						<a class="text-base cursor-pointer">Profil Sekolah</a>
						<a class="text-base cursor-pointer">Prestasi</a>
						<a class="text-base cursor-pointer">Ekstakurikuler</a>
						<a class="text-base cursor-pointer">Pendaftaran</a>
						<a class="text-base cursor-pointer">Masuk</a>
					</div>
				</div>
			</div>
		</>
	);
}
