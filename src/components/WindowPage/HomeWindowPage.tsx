import Footer from "../Footer";
import WindowsActions from "../windows-actions";
import WindowsHeader from "../windows-header";
import WindowsHero from "../windows-hero";
import WindowsSecurity from "../windows-security";

export default function WindowsSupport() {
  return (
    <div className="min-h-screen bg-gray-50">
      <WindowsHeader/>
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <WindowsHero/>
        <WindowsActions/>
        <WindowsSecurity/>
        
      </main>
      <Footer/>
    </div>
  )
}
