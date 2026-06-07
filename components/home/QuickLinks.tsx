import Link from "next/link";

export default function QuickLinks() {
    const links = [
        {
            icon: "🏕️",
            title: "Hatti Structure",
            description: "Learn about our unique communal settlements",
            href: "/culture#hatti",
        },
        {
            icon: "🙏",
            title: "Devara Gubba",
            description: "Sacred ancestral shrines and traditions",
            href: "/culture#devara-gubba",
        },
        {
            icon: "🎭",
            title: "Folklore & Arts",
            description: "Oggu Katha, dialects, and traditional stories",
            href: "/culture#folklore",
        },
        {
            icon: "📅",
            title: "Events & Festivals",
            description: "Kula celebrations and community gatherings",
            href: "/events",
        },
        {
            icon: "⭐",
            title: "Community Leaders",
            description: "Meet elders, activists, and achievers",
            href: "/figures",
        },
        {
            icon: "📰",
            title: "ST Status Movement",
            description: "Our ongoing fight for constitutional justice",
            href: "/#news",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-cream-100 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-12 text-center">
                Explore Our World
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="group p-6 bg-white rounded-lg border-2 border-earth-200 hover:border-terracotta-500 hover:shadow-md transition transform hover:-translate-y-1"
                    >
                        <div className="text-4xl mb-3 group-hover:scale-110 transition transform">
                            {link.icon}
                        </div>
                        <h3 className="text-lg font-bold text-earth-800 mb-2 group-hover:text-terracotta-600 transition">
                            {link.title}
                        </h3>
                        <p className="text-sm text-gray-600">{link.description}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
