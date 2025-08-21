import SearchSection from "./search-section";
import SupportGrid from "./support-grid";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 md:mt-28 mt-16">
        <SearchSection/>
        <SupportGrid/>
    </div>
  )
}
