export default function Profil() {
	return (
		<>
			<div data-aos="fade" data-aos-delay="700" className="flex flex-nowrap p-5 gap-3 px-20 ">
				<section className="w-1/2 bg-blue-600 transition delay-150 duration-200 ease-in-out hover:bg-blue-800 hover:translate-x-5 hover:scale-105 rounded-4xl p-5 pt-7">
					<h1 className="text-6xl font-bold text-amber-50">PROFIL</h1>
					<div className="m-auto my-25 text-3xl italic text-center text-amber-100">
						CONTOH GAMBAR
					</div>
					<p className="text-amber-50 text-lg">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quis reprehenderit enim
						aliquam at sapiente consectetur maiores, tempore modi illum totam asperiores, tenetur
						delectus magni veniam ut molestiae corrupti reiciendis.
					</p>
				</section>
				<section className="w-full bg-blue-600 transition delay-150 duration-200 ease-in-out hover:bg-blue-800 hover:-translate-x-5 hover:scale-105 rounded-4xl ">
					<div className="flex justify-center gap-30 m-10 mb-5">
						<button className="cursor-pointer col-center text-3xl text-amber-50 font-bold mono ">Visi</button>
						<button className="cursor-pointer col-center text-3xl text-amber-50 font-bold mono ">Misi</button>
						<button className="cursor-pointer col-center text-3xl text-amber-50 font-bold mono ">Struktur</button>
					</div>
					<hr className="bg-amber-50 w-190 h-1 m-auto rounded-e-4xl "></hr>
					<section className="text-elliplsis m-10">
						<h1 className="col-center text-3xl text-amber-50 font-bold mono">Visi</h1>
						<br />
						<p className="text-amber-50 text-lg indent-3">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam sit ipsum eum, quasi
							enim voluptatum! Pariatur quos minus et voluptas voluptate, rem magni labore quidem
							recusandae adipisci repellendus, ea facere est repellat neque voluptatibus? Quasi
							error excepturi sapiente corporis, ad libero distinctio soluta optio, consequatur
							molestiae facere quod omnis modi.
						</p>
					</section>
				</section>
			</div>
		</>
	);
}
