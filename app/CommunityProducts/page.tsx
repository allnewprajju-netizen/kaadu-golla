import CommunityProductsHero from "@/components/CommunityProducts/ProductsHero";
import ProductSection from "@/components/CommunityProducts/ProductSection";

export default function CommunityProductsPage() {
    return (
        <div>
            <CommunityProductsHero />
            <ProductSection />
            {/* Future sections for products can be added here */}
        </div>
    );
}