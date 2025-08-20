import Header from "./components/header";
import Navigation from "./components/navigation";
import SearchSection from "./components/search-section";
import SupportGrid from "./components/support-grid";

import Footer from "./components/Footer";
import WindowsActions from "./components/windows-actions";
import WindowsHeader from "./components/windows-header";
import WindowsHero from "./components/windows-hero";
import WindowsSecurity from "./components/windows-security";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <Navigation/>
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <SearchSection/>
        <SupportGrid/>
      </main>
       <footer className="bg-purple-700 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-white text-center text-xs sm:text-sm leading-relaxed">
            <span className="inline-block mr-1">©</span>
            This website is an independent, third-party TV support and is not affiliated with, 
            endorsed by, or sponsored by Roku, Inc. All trademarks and brand names are the 
            property of their respective owners.
          </p>
        </div>
      </footer>
    </div>
  )
}





// export default function WindowsSupport() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <WindowsHeader/>
//       <main className="container mx-auto px-4 py-8 max-w-2xl">
//         <WindowsHero/>
//         <WindowsActions/>
//         <WindowsSecurity/>
        
//       </main>
//       <Footer/>
//     </div>
//   )
// }
