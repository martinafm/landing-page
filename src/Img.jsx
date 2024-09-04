export default function Image({ src }) {
    return (
        <img src={src} className="max-w-[350px] sm:max-w-[560px] lg:max-w-[600px]" />
    )
}