import Button from "./Button";
import heroImage from "./assets/hero.png";

export default function Header() {
	return (
		<header className="flex flex-col gap-8 lg:gap-12 pt-20 pb-[10rem] lg:py-[120px] max-w-screen-xl mx-auto px-4 relative">
			<h1 className="font-header text-[38px] leading-[56px] md:text-[76px] md:leading-[84px] tracking-tight text-dark uppercase">
				Sprzedajemy samochody <br /> z Europy
			</h1>
			<p className="font-text text-dark">
				Kup komfortowy pojazd, aby każda podróż <br /> była wyjątkowym
				przeżyciem.
			</p>
			<div className="flex gap-6">
				<Button>Zobacz zdjęcia</Button>
				<Button light={true}>Zadzwoń do nas</Button>
			</div>
			<div className="absolute lg:bottom-0 left-[10%] top-[60%] sm:top-[45%] z-[-10] w-full">
				<img src={heroImage} className="" />
			</div>
		</header>
	);
}
