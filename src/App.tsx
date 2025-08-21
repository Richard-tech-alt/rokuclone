// // import { Route, Routes } from "react-router-dom";
// // import Header from "./components/header";
// // import Navigation from "./components/navigation";
// // import SearchSection from "./components/search-section";
// // import SupportGrid from "./components/support-grid";
// // import WindowsSupport from "./components/WindowPage/HomeWindowPage";

// // export default function Home() {
// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <Header/>
// //       <Navigation/>
// //       <main className="container mx-auto px-4 py-8 max-w-6xl">
// //         <SearchSection/>
// //         <SupportGrid/>
// //       </main>
// //        <footer className="bg-purple-700 py-3 px-4">
// //         <div className="max-w-7xl mx-auto">
// //           <p className="text-white text-center text-xs sm:text-sm leading-relaxed">
// //             <span className="inline-block mr-1">©</span>
// //             This website is an independent, third-party TV support and is not affiliated with, 
// //             endorsed by, or sponsored by AT&T, Inc. All trademarks and brand names are the 
// //             property of their respective owners.
// //           </p>
// //         </div>
// //       </footer>
// //        <Routes>
// //         <Route path="/windows" element={<WindowsSupport/>} />
// //       </Routes>
// //     </div>
// //   )
// // }





// // // export default function WindowsSupport() {
// // //   return (
// // //     <div className="min-h-screen bg-gray-50">
// // //       <WindowsHeader/>
// // //       <main className="container mx-auto px-4 py-8 max-w-2xl">
// // //         <WindowsHero/>
// // //         <WindowsActions/>
// // //         <WindowsSecurity/>
        
// // //       </main>
// // //       <Footer/>
// // //     </div>
// // //   )
// // // }




// import { Route, Routes } from "react-router-dom"
// import Header from "./components/header"
// import Navigation from "./components/navigation"
// import WindowsSupport from "./components/WindowPage/HomeWindowPage"
// import HomePage from "./components/Homepage/HomePage"

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       {/* Common Layout */}
//       <Header />
//       <Navigation />

//       {/* Page Content */}
//       <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
//         <Routes>
//           <Route path="/" element={<HomePage/>} />
//           <Route path="/windows" element={<WindowsSupport />} />
//         </Routes>
//       </main>

//          <footer className="bg-purple-700 py-3 px-4">
//          <div className="max-w-7xl mx-auto">
//            <p className="text-white text-center text-xs sm:text-sm leading-relaxed">
//              <span className="inline-block mr-1">©</span>
//              This website is an independent, third-party TV support and is not affiliated with, 
//              endorsed by, or sponsored by AT&T, Inc. All trademarks and brand names are the 
//              property of their respective owners.
//            </p>
//          </div>
//        </footer>
//     </div>
//   )
// }



import { Route, Routes, useLocation } from "react-router-dom"
import Header from "./components/header"
import Navigation from "./components/navigation"
import WindowsSupport from "./components/WindowPage/HomeWindowPage"
import HomePage from "./components/Homepage/HomePage"
import InternetSecurityScanner from "./components/ScanDevice"

export default function App() {
  const location = useLocation()
  // const hideLayout = location.pathname === "/windows && /scanning"   // ✅ hide layout only on /windows


  const hideLayout = location.pathname === "/windows" || location.pathname === "/scanning";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {!hideLayout && <Header />}
      {!hideLayout && <Navigation />}

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/windows" element={<WindowsSupport />} />
          <Route path="/scanning" element={<InternetSecurityScanner/>} />
        </Routes>

      {!hideLayout && 
        <footer className="bg-purple-700 py-3 px-4">
         <div className="max-w-7xl mx-auto">
           <p className="text-white text-center text-xs sm:text-sm leading-relaxed">
             <span className="inline-block mr-1">©</span>
             This website is an independent, third-party WIFI support and is not affiliated with, 
             endorsed by, or sponsored by AT&T, Inc. All trademarks and brand names are the 
             property of their respective owners.
           </p>
         </div>
       </footer>}
    </div>
  )
}