export default function HeroBanner() {
    return (
        // <section className="relative bg-gradient-to-r from-earth-700 via-terracotta-600 to-forest-700 text-white py-20 md:py-32 overflow-hidden">
        <section className="relative bg-[linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.75)),url('/image.png')] bg-cover bg-center text-white py-20 md:py-32 overflow-hidden">

                {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full -ml-40 -mb-40"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Welcome Home to Kaadu Golla
                </h1>
                <p className="text-lg md:text-2xl mb-8 text-cream-100 max-w-3xl mx-auto leading-relaxed">
                    A digital sanctuary preserving our pastoral heritage, celebrating our
                    communal spirit, and advocating for our constitutional rights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#mission"
                        className="inline-block px-8 py-3 bg-white text-earth-700 font-semibold rounded-lg hover:bg-cream-50 transition transform hover:scale-105"
                    >
                        Explore Our Story
                    </a>
                    <a
                        href="/culture"
                        className="inline-block px-8 py-3 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition border-2 border-terracotta-500"
                    >
                        Discover Culture
                    </a>
                </div>
            </div>
        </section>
    );
}
