import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-green-800 text-cream-50 border-t border-earth-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-cream-100">
                            Kaadu Golla Community
                        </h3>
                        <p className="text-sm text-cream-200 leading-relaxed">
                            Preserving pastoral heritage, celebrating cultural identity, and
                            advocating for constitutional rights and equitable representation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-cream-100">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/culture"
                                    className="text-cream-200 hover:text-cream-50 transition"
                                >
                                    Culture & Heritage
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/events"
                                    className="text-cream-200 hover:text-cream-50 transition"
                                >
                                    Events & Calendar
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/figures"
                                    className="text-cream-200 hover:text-cream-50 transition"
                                >
                                    Community Figures
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4 text-cream-100">Get In Touch</h4>
                        <ul className="space-y-2 text-sm text-cream-200">
                            <li>
                                <a
                                    href="mailto:contactkaadugolla@gmail.com"
                                    className="hover:text-cream-50 transition"
                                >
                                    contactkaadugolla@gmail.com
                                </a>
                            </li>
                            <li className="text-cream-300">Karnataka, India</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold mb-4 text-cream-100">Connect</h4>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-cream-200 hover:text-terracotta-400 transition"
                                aria-label="Facebook"
                            >
                                <span className="sr-only">Facebook</span>f
                            </a>
                            <a
                                href="#"
                                className="text-cream-200 hover:text-terracotta-400 transition"
                                aria-label="Instagram"
                            >
                                <span className="sr-only">Instagram</span>📸
                            </a>
                            <a
                                href="#"
                                className="text-cream-200 hover:text-terracotta-400 transition"
                                aria-label="Twitter"
                            >
                                <span className="sr-only">Twitter</span>𝕏
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-earth-700 pt-8">
                    <p className="text-center text-sm text-cream-300">
                        © {currentYear} Kaadu Golla Community. Preserving heritage, building
                        futures.
                    </p>
                </div>
            </div>
        </footer>
    );
}
