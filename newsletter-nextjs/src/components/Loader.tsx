export default function Loader() {
    return (
        <section className="flex gap-1">
            <div className="rounded-lg w-4 h-4 bg-sky-500 animate-bounce" style={{animationDelay: '0s'}}></div>
            <div className="rounded-lg w-4 h-4 bg-sky-500 animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="rounded-lg w-4 h-4 bg-sky-500 animate-bounce" style={{animationDelay: '0.3s'}}></div>
        </section>
    )
}