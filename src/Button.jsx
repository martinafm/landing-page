export default function Button({ children, light }) {
	let baseClasses = "w-[158px] h-[47px] font-main font-semibold rounded-lg text-[15px] leading-[22.5px]"
	if(light) {
		baseClasses += " text-cta bg-white border-cta border"
	} else {
		baseClasses += " text-light bg-cta"
	}
	return <button className={baseClasses}>{children}</button>;
}