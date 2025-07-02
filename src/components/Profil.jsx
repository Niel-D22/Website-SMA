export default function Profil() {
	return (
		<>
			<div className="flex gap-3 p-5">
				<section className="flex-2 bg-blue-600 transition delay-150 duration-200 ease-in-out hover:bg-blue-800 hover:translate-x-5 hover:scale-105 rounded-4xl p-10 pt-7">
					<h1 className="text-6xl font-bold text-amber-50">PROFIL</h1>
					<div className="m-auto my-25 text-3xl italic text-center text-amber-100">
						CONTOH GAMBAR
					</div>
					<p className="text-amber-50 text-lg">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur quasi
						neque! Dicta ad et rem architecto eveniet est nihil corporis aspernatur perspiciatis
						placeat incidunt aperiam, inventore corrupti vel maiores!
					</p>
					<p className="text-amber-50 text-lg">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur quasi
						neque! Dicta ad et rem architecto eveniet est nihil corporis aspernatur perspiciatis
						placeat incidunt aperiam, inventore corrupti vel maiores!
					</p>
				</section>
				<section className="flex-3 bg-blue-600 transition delay-150 duration-200 ease-in-out hover:bg-blue-800 hover:-translate-x-5 hover:scale-105 rounded-4xl ">
					<div className="flex justify-center gap-30 m-10 mb-5">
						<h1 className="col-center text-3xl text-amber-50 font-bold mono ">Visi</h1>
						<h1 className="col-center text-3xl text-amber-50 font-bold mono ">Misi</h1>
						<h1 className="col-center text-3xl text-amber-50 font-bold mono ">Struktur</h1>
					</div>
					<div className="bg-amber-50 w-190 h-1 m-auto rounded-e-4xl "></div>
					<section className="text-elliplsis m-10">
                        <h1 className="col-center text-3xl text-amber-50 font-bold mono">Visi</h1>
                        <br/>
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
