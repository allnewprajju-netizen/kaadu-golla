"use client";

import { useState } from "react";

export default function CultureSections() {
    const [activeTab, setActiveTab] = useState("pastoral");

    const sections = {
        pastoral: {
            title: "Pastoral Heritage",
            icon: "🐄",
            content: (
                <div className="space-y-4">
                    <p>
                        For centuries, the Kaadu Golla have been master cattle-raisers and
                        pastoralists. Our intimate knowledge of animal husbandry, veterinary
                        practices, and sustainable grazing has shaped our identity and
                        economy.
                    </p>
                    <p>
                        We maintain deep bonds with cattle, viewing them not merely as
                        livestock but as part of our extended family. This reverence—"Aavu"
                        in our dialect—reflects both our economic dependence and spiritual
                        connection to these animals.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Semi-nomadic cattle rearing practices</li>
                        <li>Seasonal migration patterns and knowledge systems</li>
                        <li>Traditional veterinary remedies and care</li>
                        <li>Cattle-based wealth and status indicators</li>
                    </ul>
                </div>
            ),
        },
        hatti: {
            title: "Hatti: Our Social Structure",
            icon: "🏕️",
            content: (
                <div className="space-y-4">
                    <p>
                        The "Hatti" represents the heart of our community—tight-knit,
                        communal settlements where collective welfare supersedes individual
                        interest. Hattis typically comprise 30-100 households sharing
                        ancestral lands, resources, and decision-making authority.
                    </p>
                    <p>
                        This social architecture reflects centuries of adaptation to
                        semi-nomadic life. Leadership rotates among respected elders, and
                        major decisions emerge from community consensus rather than
                        hierarchical authority.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Communal governance and elder councils</li>
                        <li>Shared resource management systems</li>
                        <li>Kinship networks and social obligations</li>
                        <li>Collective cattle management and herding</li>
                        <li>Interfaith and intercaste cooperation within Hattis</li>
                    </ul>
                </div>
            ),
        },
        devara: {
            title: "Devara Gubba & Sacred Traditions",
            icon: "🙏",
            content: (
                <div className="space-y-4">
                    <p>
                        At the spiritual core of every Kaadu Golla Hatti stands the "Devara
                        Gubba"—a sacred, non-idol shrine dedicated to ancestral guardians
                        (Veeragaararu) and cattle protectors. These structures embody our
                        faith in ancestral guidance, collective memory, and our sacred bond
                        with cattle.
                    </p>
                    <p>
                        Devara Gubba rituals are communal acts—offerings, prayers, and
                        celebrations that reinforce social cohesion and spiritual identity.
                        The "Devara Bhandara" (shrine treasury) manages ritual resources and
                        community welfare funds.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Non-idol, ancestral worship traditions</li>
                        <li>Sacred rituals honoring cattle protectors</li>
                        <li>Collective ceremonies and festival cycles</li>
                        <li>Devara Bhandara resource management</li>
                        <li>Spiritual authority of elder guardians</li>
                    </ul>

                    <p className="text-gray-600 italic">
                        Although it's not practiced anymore because of modernization and building of permanent temples.
                    </p>
                </div>
            ),
        },
        folklore: {
            title: "Folklore, Language & Arts",
            icon: "🎭",
            content: (
<section className="max-w-5xl mx-auto px-6 py-12">
  <div className="mb-10">
    <span className="inline-block px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
      Spiritual Traditions
    </span>

    <h1 className="mt-4 text-4xl font-bold text-gray-900">
      Spiritual Pastoralism of the Kadu Golla Community
    </h1>

    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
      Spiritual pastoralism among the Kadu Golla is a unique belief system
      where religion, livestock survival, and landscape are inseparable.
      Rather than following temple-centered traditions, their worldview is
      shaped by deified ancestors, pastoral heroes, sacred cattle, and the
      forests they inhabit.
    </p>
  </div>

  <div className="space-y-8">

    {/* Section 1 */}
    <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        1. The Deification of the Hero Cowherd (Junjappa)
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        In Kadu Golla theology, God is not an abstract cosmic force but a
        historical protector of cattle and community life. Their supreme
        deity is Junjappa, remembered as a heroic ancestor and guardian of
        pastoral traditions.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-5 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">
            🐄 Guardian of the Fold
          </h3>
          <p className="text-gray-700">
            Oral traditions describe Junjappa as possessing divine command
            over nature. He healed cattle diseases, discovered water during
            droughts, and protected herds from predators.
          </p>
        </div>

        <div className="bg-green-50 p-5 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">
            ⚔️ Martyr of Grazing Lands
          </h3>
          <p className="text-gray-700">
            Junjappa fought against those who threatened community grazing
            lands and livestock. His sacrifice transformed him from a mortal
            shepherd into a revered divine ancestor.
          </p>
        </div>
      </div>
    </div>

    {/* Section 2 */}
    <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        2. The Gane Flute: A Sacred Ritual Conduit
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Music serves as the primary medium of prayer within Kadu Golla
        culture. The sacred <em>Gane</em>, a long bamboo flute, is regarded
        as a spiritual vessel rather than merely a musical instrument.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-amber-50 p-5 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">
            🎶 Voice of the Deities
          </h3>
          <p className="text-gray-700">
            Decorated with ceremonial cloth, peacock feathers, and brass
            ornaments, the flute is believed to carry the presence of
            Junjappa.
          </p>
        </div>

        <div className="bg-amber-50 p-5 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">
            🌧️ Instrument of Prophecy
          </h3>
          <p className="text-gray-700">
            During rituals, its deep notes help induce spiritual states
            through which priests seek guidance regarding rainfall, cattle
            welfare, and community wellbeing.
          </p>
        </div>
      </div>
    </div>

    {/* Section 3 */}
    <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        3. Rituals Shaped by Animal Life
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Because livestock remain central to community life, major rituals and
        spiritual practices are closely tied to the wellbeing and lifecycle
        of animals.
      </p>

      <div className="space-y-4">
        <div className="border-l-4 border-green-600 pl-4">
          <h3 className="font-semibold text-lg">
            🥛 Sacred First Milk
          </h3>
          <p className="text-gray-700">
            The first milk after birth is treated as sacred and offered in
            gratitude rather than used for trade or consumption.
          </p>
        </div>

        <div className="border-l-4 border-green-600 pl-4">
          <h3 className="font-semibold text-lg">
            🌿 Concepts of Ritual Purity
          </h3>
          <p className="text-gray-700">
            Traditional practices connect ritual purity with the protection
            of livestock, reflecting historical concerns about disease,
            predators, and community wellbeing.
          </p>
        </div>
      </div>
    </div>

    {/* Sources */}
    <div className="bg-gray-50 rounded-2xl p-6 border">
      <h3 className="text-xl font-semibold mb-4">
        References
      </h3>

      <ul className="space-y-2 text-blue-600">
        <li>
          <a
            href="https://ijdssh.com/admin1/upload/12%20Dr.Kariyanna%20E%2001296.pdf"
            target="_blank"
            className="hover:underline"
          >
            Academic Study on Kadu Golla Traditions
          </a>
        </li>

        <li>
          <a
            href="https://www.deccanherald.com/dh-changemakers/balladeer-of-the-kadu-gollas-3337292"
            target="_blank"
            className="hover:underline"
          >
            Deccan Herald – Balladeer of the Kadu Gollas
          </a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=pcO75TNfAJk"
            target="_blank"
            className="hover:underline"
          >
            Documentary / Oral Tradition Recording
          </a>
        </li>

        <li>
          <a
            href="https://kn.wikipedia.org/wiki/ಜುಂಜಪ್ಪ"
            target="_blank"
            className="hover:underline"
          >
            Junjappa (Kannada Wikipedia)
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>
            ),
        },
        reform: {
            title: "Internal Social Reform",
            icon: "⚡",
            content: (
                <div className="space-y-4">
                    <p>
                        While honoring our heritage, a courageous cohort of educated youth
                        are challenging harmful traditional practices. Most notably, they
                        are dismantling the "Sutaka" taboo—the forced isolation of
                        menstruating women and new mothers in unsafe, segregated huts
                        outside the Hatti.
                    </p>
                    <p>
                        These reformers are building secure, healthy alternatives while
                        maintaining cultural identity. Their work demonstrates that
                        modernization and tradition need not conflict—instead, we can evolve
                        with dignity.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Challenging Sutaka isolation practices</li>
                        <li>Building health and education infrastructure</li>
                        <li>Gender equality advocacy within communities</li>
                        <li>Youth leadership in social change</li>
                        <li>Balancing modernity with cultural roots</li>
                    </ul>
                </div>
            ),
        },
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
                {Object.entries(sections).map(([key, section]) => (
                    <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`px-4 py-2 rounded-lg font-semibold transition ${activeTab === key
                                ? "bg-terracotta-500 text-white"
                                : "bg-earth-100 text-earth-800 hover:bg-earth-200"
                            }`}
                    >
                        <span className="mr-2">{section.icon}</span>
                        {section.title}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="bg-white rounded-lg border-2 border-earth-200 p-8 md:p-12 animate-fadeIn">
                <h3 className="text-3xl font-bold text-earth-800 mb-6">
                    {sections[activeTab as keyof typeof sections].title}
                </h3>
                <div className="prose prose-sm md:prose max-w-none text-gray-700">
                    {sections[activeTab as keyof typeof sections].content}
                </div>
            </div>

            {/* Additional Context */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-earth-50 p-8 rounded-lg border border-earth-200">
                    <h4 className="text-xl font-bold text-earth-800 mb-4">
                        Why Heritage Matters
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                        Our cultural practices encode centuries of ecological wisdom,
                        social organization, and spiritual understanding. Preserving them
                        isn't nostalgia—it's reclaiming knowledge systems that sustained us
                        and can guide sustainable futures.
                    </p>
                </div>
                <div className="bg-forest-50 p-8 rounded-lg border border-forest-200">
                    <h4 className="text-xl font-bold text-forest-800 mb-4">
                        Living Tradition
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                        Kaadu Golla culture isn't frozen in the past. Young people are
                        revitalizing traditions, adapting practices to modern realities, and
                        leading internal reform movements—proving that cultural pride and
                        progressive change are complementary, not contradictory.
                    </p>
                </div>
            </div>
        </section>
    );
}
