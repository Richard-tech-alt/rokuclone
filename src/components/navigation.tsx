// import { useState } from "react"

// const navItems = [
//   { name: "Home", active: true },
//   { name: "Getting Started", active: false },
//   { name: "Troubleshooting", active: false },
//   { name: "Contact", active: false },
// ]

// export default function Navigation() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <nav className="bg-white shadow-sm border-b">
//       <div className="container mx-auto px-4 max-w-6xl">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <h1 className="text-2xl font-bold text-purple-700">AT&T Support</h1>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="flex items-center space-x-1">
//               {navItems.map((item) => (
//                 <button
//                   key={item.name}
//                   className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
//                     item.active ? "bg-purple-700 text-white" : "text-gray-700 hover:text-purple-700 hover:bg-gray-100"
//                   }`}
//                 >
//                   {item.name}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="text-gray-700 hover:text-purple-700 focus:outline-none focus:text-purple-700"
//             >
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {mobileMenuOpen && (
//           <div className="md:hidden border-t">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navItems.map((item) => (
//                 <button
//                   key={item.name}
//                   className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
//                     item.active ? "bg-purple-700 text-white" : "text-gray-700 hover:text-purple-700 hover:bg-gray-100"
//                   }`}
//                 >
//                   {item.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }




import type React from "react"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import LoadingScreen from "./LoadingScreen"
import { useNavigate } from "react-router-dom"

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState("Home")
    const navigate = useNavigate()

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "Getting Started", href: "/windows"},
    { name: "Troubleshooting", href: "/windows" },
    { name: "Contact", href: "/windows" },
  ]

  // const handleNavClick = (itemName: string) => {
  //   setIsLoading(true)
  //   setIsMenuOpen(false)

  //   // After loading completes, update the current page
  //   setTimeout(() => {
  //     setCurrentPage(itemName)
  //     setIsLoading(false)
  //      navigate(item.href)
  //   }, 3000)
  // }


    const handleNavClick = (item: { name: string; href: string }) => {
    setIsLoading(true)
    setIsMenuOpen(false)

    setTimeout(() => {
      setCurrentPage(item.name)
      setIsLoading(false)
      navigate(item.href)   // ✅ go to the route
    }, 1000) // you had 3000 (3s) but can shorten
  }

  return (
    <>
      <LoadingScreen isVisible={isLoading} onComplete={() => setIsLoading(false)} />

      <nav className="bg-white shadow-lg border-b-4 border-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
        
                <span className="ml-2 text-xl font-bold text-[#5A2D82]">AT&T Support</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.name
                      ? "text-purple-600 bg-purple-50"
                      : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600 focus:outline-none focus:text-purple-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    currentPage === item.name
                      ? "text-purple-600 bg-purple-50"
                      : "text-gray-700 hover:text-purple-600 hover:bg-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navigation
