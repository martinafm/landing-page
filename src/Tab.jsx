export default function Tab({ children }) {
	let baseClasses = "w-[148px] h-[23px] font-main text-[15px] leading-[22.5px] tracking-[-0.4px] hover:text-cta hover:underline"
	
	return <button className={baseClasses}>{children}</button>;
}