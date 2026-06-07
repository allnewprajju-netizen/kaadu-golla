export default function NewsWire() {
    const newsItems = [
        {
            id: 1,
            date: "June 2026",
            title: "Youth-Led Reform: Sutaka Taboo Challenge Gains Momentum",
            excerpt:
                "Young women from multiple Hattis unite to build secure, healthy alternatives to traditional isolation practices.",
            category: "Social Reform",
            categoryBg: "bg-forest-100",
            categoryText: "text-forest-700",
        },
        {
            id: 2,
            date: "May 2026",
            title: "ST Classification Advocacy Reaches National Parliament",
            excerpt:
                "Community representatives present comprehensive evidence for Scheduled Tribe reclassification before parliamentary committee.",
            category: "Advocacy",
            categoryBg: "bg-terracotta-100",
            categoryText: "text-terracotta-700",
        },
    ];

    return (
        <section id="news" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4 text-center">
                Community Wire
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Stay updated on our cultural celebrations, social advocacy, and
                community initiatives
            </p>

            <div className="space-y-4">
                {newsItems.map((item) => (
                    <div
                        key={item.id}
                        className="group bg-white border border-earth-200 rounded-lg p-6 hover:shadow-lg hover:border-terracotta-400 transition transform hover:-translate-x-1 cursor-pointer"
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <time className="text-sm font-semibold text-terracotta-600">
                                        {item.date}
                                    </time>
                                    <span
                                        className={`text-xs font-bold px-3 py-1 rounded-full ${item.categoryBg} ${item.categoryText}`}
                                    >
                                        {item.category}
                                    </span>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-earth-800 mb-2 group-hover:text-terracotta-600 transition">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">{item.excerpt}</p>
                            </div>
                            <div className="text-terracotta-500 group-hover:translate-x-1 transition">
                                →
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <a href="/events"
                            className="px-5 py-3 rounded-md text-lg font-medium bg-black text-white hover:bg-earth-50 hover:text-earth-700 transition"
                        >
                            Events
                        </a>
            </div>
        </section>
    );
}
