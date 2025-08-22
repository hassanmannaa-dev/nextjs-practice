import InfoBoxes from "@/components/InfoBoxes";
import FeaturedProperties from "@/components/FeaturedProperties";
export default function Home() {
  return (
    <div>
      <section>
        <div className="container-xl lg:container m-auto">
          <InfoBoxes />
          <FeaturedProperties />
        </div>
      </section>
    </div>
  );
}
