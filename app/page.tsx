import HeroBanner from "@/components/home/HeroBanner";
import MissionStatement from "@/components/home/MissionStatement";
import QuickLinks from "@/components/home/QuickLinks";
import NewsWire from "@/components/home/NewsWire";

export default function Home() {
    return (
        <div className="space-y-12 md:space-y-20">
            <HeroBanner />
            <MissionStatement />
            <QuickLinks />
            <NewsWire />
        </div>
    );
}
