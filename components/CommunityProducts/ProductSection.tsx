"use client";

import { useState } from "react";

export default function ProductSection() {
    const [activeCategory, setActiveCategory] = useState("Shirts");

    const figures = {
        Shirts: {
            title: "Community Shirts",
            icon: "👕",
            description: "Stylish shirts representing our community",
            
            members: [
                {
                    id: 1,
                    name: "COMMUNITY BOX FIT SHIRT",
                    img: "box-fit.jpeg",
                    price: "₹999",
                    description:
                        "240 GSM, HIGH QUALITY PRODUCT",
                    expertise: ["L"],
                },
                
            ],
        },
        // leaders: {
        //     title: "Political Leaders & Advocates",
        //     icon: "⭐",
        //     description: "Fighting for constitutional rights, ST classification, and civic justice",
        //     members: [
        //         {
        //             id: 4,
        //             name: "Sri Nagaraj Yadav",
        //             img: "nagaraj-yadav.png",
        //             role: "MLC",
        //             description:
        //                 "Leads multi-state advocacy for Scheduled Tribe reclassification. Compiled comprehensive evidence archive for parliamentary presentation.",
        //             expertise: ["Policy Advocacy", "Government Relations"],
        //         },
        //         {
        //             id: 5,
        //             name: "Sri Rajanna",
        //             img: "rajanna.png",
        //             role: "BBMP Corporator",
        //             description:
        //                 "Leads multi-state advocacy for Scheduled Tribe reclassification, Politcal leader from Kaadu Golla community, actively involved in local governance and community development.",
        //             expertise: ["Policy Advocacy", "Government Relations"],
        //         },
        //     ],
        // },
        // professionals: {
        //     title: "Professionals & Achievers",
        //     icon: "🎓",
        //     description: "Educated youth leading internal reform and modernization",
        //     members: [
        //         {
        //             id: 7,
        //             name: "Dr. Sandeep Golla",
        //             img: "rajanna.png",
        //             role: "Public Health Doctor & Reform Leader",
        //             description:
        //                 "Pioneering health infrastructure in remote Hattis. Leads campaigns against Sutaka practice with community-based alternatives.",
        //             expertise: ["Public Health", "Gender Health", "Community Medicine"],
        //         },
        //     ],
        // },
    };

    const currentCategory = figures[activeCategory as keyof typeof figures];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
                {Object.entries(figures).map(([key, section]) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(key)}
                        className={`px-6 py-3 rounded-lg font-semibold transition ${activeCategory === key
                                ? "bg-terracotta-500 text-white"
                                : "bg-earth-100 text-black-800 hover:bg-earth-200"
                            }`}
                    >
                        <span className="mr-2">{section.icon}</span>
                        {section.title}
                    </button>
                ))}
            </div>

            {/* Category Description */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-3">
                    {currentCategory.title}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {currentCategory.description}
                </p>
            </div>

            {/* Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {currentCategory.members.map((member) => (
                    <div
                        key={member.id}
                        // className="bg-white rounded-lg border-2 border-earth-200 overflow-hidden hover:shadow-lg hover:border-black-400 transition">
                        className="py-15 bg-white dark:bg-gray-800 rounded-lg border-2 border-earth-200 overflow-hidden hover:shadow-lg hover:border-black-400 transition">
                        {/* Avatar Placeholder */}
                        <div className="h-70 bg-gradient-to-br from-terracotta-400 to-forest-500 flex items-center justify-center text-5xl">
                            <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-1">
                                {member.name}
                            </h3>
                            <h3 className="text-xl font-bold text-green-100 mb-1">
                                {member.price}
                            </h3>
                            <p className="text-gray-100 text-sm leading-relaxed mb-4">
                                {member.description}
                            </p>

                            

                            {/* Expertise Tags */}
                            <div className="flex flex-wrap gap-2">
                                {member.expertise.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs bg-earth-100 text-earth-700 px-2 py-1 rounded-full mb-4"
                                    >
                                        SIZE: {skill}
                                    </span>
                                ))}
                            </div>
                            <button className="bg-terracotta-500 hover:bg-green-600 transition text-white font-bold py-2 px-4 rounded">
                                BUY PRODUCT
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Community Impact Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                    { number: "500+", label: "Youth Supported" },
                    { number: "15+", label: "Hattis Reached" },
                    { number: "25", label: "Community Leaders" },
                    { number: "100+", label: "Years of Knowledge" },
                ].map((stat, index) => (
                    <div key={index} className="bg-earth-50 rounded-lg p-6 border border-earth-200">
                        <p className="text-3xl font-bold text-terracotta-600 mb-2">
                            {stat.number}
                        </p>
                        <p className="text-sm font-semibold text-earth-700">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
