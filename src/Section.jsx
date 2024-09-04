import Gallery from "./Gallery";
import Tab from "./Tab";

export default function Section() {
	return (
		<section className="flex flex-col gap:3 lg:gap-12 pt-4 lg:pt-20 max-w-screen-xl mx-auto px-4">
			<div className="flex flex-col gap-6">
                <div>
				<p className="text-cta text-lg leading-6 sm:text-[21.5px] sm:leading-[32px] font-text ">Prezentacja firmy</p>
				<h3 className="font-header font-normal text-3xl leading-8 lg:text-[40px] lg:leading-[48px] text-title uppercase">Zobacz naszą galerię zdjęć</h3>
                </div>
                <div className="flex gap-6">
                    <Tab>Samochody osobowe</Tab>
                    <Tab>Samochody dostawcze</Tab>
                </div>
			</div>
           <Gallery />
		</section>
	);
}
