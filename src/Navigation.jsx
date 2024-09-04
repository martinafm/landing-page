import Button from "./Button";
import logo from "./assets/logo.svg";

export default function Navigation() {
	return (
		<nav className="flex justify-between items-center h-[79px] max-w-screen-xl mx-auto px-4">
			<div>
				<img src={logo} />
			</div>
			<div>
				<ul className="flex gap-[24px] text-dark">
					<li>Galeria zdjęć</li>
					<li>FaQ</li>
				</ul>
			</div>
			<div className="hidden sm:block">
				<Button>Zadzwoń do nas</Button>
			</div>
		</nav>
	);
}
