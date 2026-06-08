export default function ProductsHero() {
    return (
        <section className="relative bg-[linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.75)),url('/image.png')] bg-cover bg-center text-white py-20 md:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Buy Our Community Products.
                </h1>
                <p className="text-lg md:text-xl text-cream-100 max-w-3xl mx-auto">
                    We sell products made for our community members, if you are a community member you can buy these products and support our project.
                </p>
            </div>
        </section>
    );
}
