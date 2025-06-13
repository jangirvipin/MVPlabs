export default function Loading(){
    return (
        <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-6"></div>
                    <p className="text-xl text-purple-300">Loading queries...</p>
                </div>
            </div>
        </section>
    )
}