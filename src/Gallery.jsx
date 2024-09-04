import Img from "./Img";
import car1 from "./assets/car1.jpg";
import car2 from "./assets/car2.jpg";
import car3 from "./assets/car3.jpg";

export default function Gallery() {
    let dotClass = `w-2 h-2 rounded-[50%] bg-dot`
   
	return (
		<article className="flex flex-col gap-12 pt-6 pb-4 lg:py-20">
			<div className="flex gap-4 lg:gap-16 overflow-hidden relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] pl-4">
				<Img src={car1} loading="lazy" />
				<Img src={car2} loading="lazy" />
				<Img src={car3} loading="lazy" />
			</div>
            <div>
                <ul className="flex gap-[10px] justify-center">
                    <li className="w-2 h-2 rounded-[50%] bg-cta"></li>
                    <li className={dotClass}></li>
                    <li className={dotClass}></li>
                    <li className={dotClass}></li>
                    <li className={dotClass}></li>
                </ul>
            </div>
		</article>
	);
}
