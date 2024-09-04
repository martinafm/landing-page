export default function Seo() {
	let article = (
		<article className="flex flex-col gap-4 text-white">
			<h5 className="font-header text-2xl lg:text-[25px] lg:leading-[37.5px] tracking-[-0.3px]">
				Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla
				commodo.
			</h5>
            <div className="flex flex-col gap-4 font-text text-[14px] leading-[21px]">
			<p className="">
				Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec
				egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac
				venenatis eros ipsum ac arcu. Vestibulum et [...]
			</p>
			<button className="self-start pb-1.5 border-b-[1.5px]">Rozwiń &#8595;</button>
            </div>
		</article>
	);

	return <section title="Articles" className="bg-dark  py-[88px]">
        <div className="flex flex-col sm:flex-row mx-auto gap-8 max-w-screen-xl px-4">
        {article}
        {article}
        </div>
    </section>;
}
