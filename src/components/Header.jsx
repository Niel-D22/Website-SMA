import Logo from "../assets/logo.png";

export default function Header() {
	return (
		<>
			<div class="bg-blue-600 w-screen h-26 flex text-amber-50">
				<img src={Logo} alt="Logo Sekolah" class="w-22 h-22 m-auto ml-3" />
				<div class="flex-5 ml-5 content-center">
					<h1 class="mono text-3xl">SMA Manado</h1>
				</div>
				<div class="flex-2 mr-3 mb-5 content-end">
					<div class="flex flex-nowrap gap-15">
						<a class="text-base cursor-pointer">Beranda</a>
						<a class="text-base cursor-pointer text-nowrap">Profil Sekolah</a>
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
