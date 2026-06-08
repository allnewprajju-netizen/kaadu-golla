export default function MissionStatement() {
    return (
        <section id="mission" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Heritage */}
                <div className="bg-gradient-to-br from-cream-50 to-earth-50 rounded-xl p-8 border border-earth-200 hover:shadow-lg transition">
                    <div className="w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center mb-4">
                        <span className="text-white text-xl">🌾</span>
                    </div>
                    <h3 className="text-2xl font-bold text-earth-800 mb-4">
                        Preserve Heritage
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Honor our pastoral roots, Hatti social structures, sacred traditions
                        like Devara Gubba, and rich oral folklore passed through generations.
                    </p>
                </div>

                {/* Identity */}
                <div className="bg-gradient-to-br from-cream-50 to-forest-50 rounded-xl p-8 border border-forest-200 hover:shadow-lg transition">
                    <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center mb-4">
                        <span className="text-white text-xl">🤝</span>
                    </div>
                    <h3 className="text-2xl font-bold text-forest-800 mb-4">
                        Celebrate Identity
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Recognize the strength of our community-first Hatti spirit, modern
                        achievements, and the courage of youth reforming harmful traditions.
                    </p>
                </div>

                {/* Advocacy */}
                <div className="bg-gradient-to-br from-cream-50 to-terracotta-50 rounded-xl p-8 border border-terracotta-300 hover:shadow-lg transition">
                    <div className="w-12 h-12 bg-terracotta-600 rounded-full flex items-center justify-center mb-4">
                        <span className="text-white text-xl">⚖️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-terracotta-800 mb-4">
                        Advocate Rights
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Fight for ST classification, equitable constitutional representation,
                        and the civic infrastructure our Hattis deserve.
                    </p>
                </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-gray-100 via-green-100 to-gray-200 rounded-xl p-8 md:p-12 border-2 border-earth-300">
                <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-6">
                    Our History.
                </h2>
                <p className="text-lg font-bold text-black leading-relaxed mb-9">
                    Dr. B. Chikkappayya

                    <p className="text-lg text-black-900 leading-relaxed mb-7">

                        Very few people look back at the path on which they were born and raised. Among those rare individuals, Dr. B. Chikkappayya is one. The Kaadugolla tribal community has long remained distant from the mainstream civilized world and possesses its own unique customs, traditions, way of life, attire, and cultural identity.
                        Dr. B. Chikkappayya, who hails from this tribal community, has steadily risen through intellectual achievement as a student of science, a lecturer, and later as an Indian Forest Service (IFS) officer. Among those who attain such heights, it is quite uncommon to look back at their roots. Only a few recognize that their growth and accomplishments are deeply connected to the environment in which they were born and raised. I feel proud to say that Dr. B. Chikkappayya is one such exceptional person.
                        Dr. Chikkappayya earned the prestigious D.Litt. degree from Tumkur University by submitting a research dissertation on “Kaadugolla Culture.” It is highly commendable that he is now bringing out an important work titled “The Comprehensive History of the Kaadugollas.” In this book, he has meticulously presented the history of the Kaadugolla people and the distinctive features of their way of life.
                        Although Dr. Chikkappayya himself belongs to the Kaadugolla community, it is evident that before undertaking the task of constructing a comprehensive history of the community, he thoroughly examined all the studies and research conducted on Kaadugolla culture thus far. For this reason, it would not be an exaggeration to say that this work will serve as a guiding light for future researchers. Another noteworthy feature of this book is that it has been written in both Kannada and English, thereby preserving and documenting the rich heritage of Kaadugolla culture for posterity.
                        At around seventy-five years of age, Dr. Chikkappayya's enthusiasm, dedication to learning, and research-oriented thinking are truly inspiring and encouraging for today's young writers. Furthermore, Tumkur University greatly appreciates his generosity as a donor to the Sri Junjappa Study Chair established at the university.
                        With the hope that “The Comprehensive History of the Kaadugollas” will take its rightful place among the significant studies of tribal communities, and recognizing Dr. Chikkappayya as a friend and a thinker of refined taste and noble values, I personally, on behalf of the Junjappa Study Chair and Tumkur University, extend my heartfelt wishes that he may continue to produce many more important scholarly works.
                    </p>

                    — Prof. M. Venkateshwarlu
                    Vice-Chancellor,
                    Tumkur University.
                </p>
                <p className="text-lg font-bold text-gray-700 leading-relaxed mb-8">
                    Book Price: ₹500/-
                    Postage: Free of charge
                    To order the book, please contact via WhatsApp: 9380423328.
                </p>
                <img src="book.png" className="mb-8"></img>
                <p className="text-lg font-bold text-gray-700 leading-relaxed mb-8">
                    Today, we reclaim our narrative. This digital home is a repository of
                    our heritage, a platform for our voices, and a witness to our struggle
                    for justice. We honor our cattle-rearing ancestors, celebrate the
                    reformers within us, and stand unified in our pursuit of constitutional
                    rights and equitable representation.
                </p>
            </div>
        </section>
    );
}
